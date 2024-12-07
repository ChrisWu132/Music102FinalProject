#!/bin/bash

# 构建项目
npm run build

# 切换到 gh-pages 分支
git checkout gh-pages

# 清空 gh-pages 分支内容
git rm -rf .

# 将 dist 文件夹的内容复制到 gh-pages
cp -r dist/* .

# 提交并推送
git add .
git commit -m "Deploy updated build from main"
git push origin gh-pages --force

# 切换回 main 分支
git checkout main
