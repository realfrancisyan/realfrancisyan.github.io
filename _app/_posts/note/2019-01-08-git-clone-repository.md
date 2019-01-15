---
layout: post
title: Git 项目迁移
category: note
tags: git
---

有时候公司需要将现有的 Git 项目迁移到新的仓库，需要保留历史提交记录等。

可使用以下命令：

```linux
mkdir foo; cd foo 
# move to a scratch dir

git clone --bare https://github.com/exampleuser/old-repository.git
# Make a bare clone of the repository

cd old-repository.git
git push --mirror https://github.com/exampleuser/new-repository.git
# Mirror-push to the new repository

cd ..
rm -rf old-repository.git  
# Remove our temporary local repository
```

如果是 Mac OS，则需要在 Keychain Access 中删除对应的登录记录，例如 GitHub 相关的账号密码。