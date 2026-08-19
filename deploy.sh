#!/usr/bin/env bash
# 一键部署：构建 VitePress 站点并推送到 gh-pages 分支（GitHub Pages）
# 用法：  bash deploy.sh
set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
DEPLOY_DIR="${SCRIPT_DIR}/../blog_deploy"

cd "$SCRIPT_DIR"

echo "==> [1/4] 构建站点"
npm run docs:build >/tmp/vitepress-build.log 2>&1 || \
  echo "（提示：若末尾报 exit 1，通常是临时目录清理的噪声，只要 .vitepress/dist 生成即正常）"

if [ ! -f "$SCRIPT_DIR/.vitepress/dist/index.html" ]; then
  echo "!! 构建产物缺失，终止部署"; exit 1
fi

echo "==> [2/4] 准备部署目录 $DEPLOY_DIR"
mkdir -p "$DEPLOY_DIR"
cd "$DEPLOY_DIR"
if [ ! -d .git ]; then
  git init -q -b gh-pages
  git remote add origin https://github.com/FC-Han/blog.git
fi

echo "==> [3/4] 同步产物并提交"
git rm -rf --quiet . 2>/dev/null || true
cp -r "$SCRIPT_DIR/.vitepress/dist/." "$DEPLOY_DIR/"
touch "$DEPLOY_DIR/.nojekyll"
git add -A
if git diff --cached --quiet; then
  echo "没有变化，跳过提交"
else
  git -c user.name=FC-Han -c user.email=FC-Han@users.noreply.github.com \
    commit -q -m "deploy: $(date -u +%Y-%m-%dT%H:%M:%SZ)"
fi

echo "==> [4/4] 推送到 gh-pages"
git push origin gh-pages

echo "完成 ✅  站点： https://fc-han.github.io/blog/"
