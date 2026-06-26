# LiLinMei Portfolio

李林美的视觉传达个人作品集网站，使用 React + Vite + TypeScript 构建。网站用于展示品牌视觉、交互设计、icon 设计、包装设计和 IP 设计项目。

## 本地运行

```bash
npm install
npm run dev
npm run build
npm run preview
```

## GitHub Pages 部署

项目使用 GitHub Actions 自动部署到 GitHub Pages，工作流文件位于：

```text
.github/workflows/deploy.yml
```

当代码推送到 `main` 分支后，GitHub Actions 会自动执行：

```bash
npm ci
npm run build
```

并将 `dist` 作为 GitHub Pages 产物发布。

当前 `vite.config.ts` 的 `base` 为：

```ts
base: '/lilinmei-portfolio/'
```

这适用于 GitHub 仓库名为 `lilinmei-portfolio` 的 Pages 地址。如果仓库名变化，需要同步修改 `base`。

## 图片资源

项目图片放在：

```text
public/assets/projects/
```

每个项目目录包含：

```text
cover.jpg
page-01.jpg
page-02.jpg
...
```

所有项目内容集中在 `src/data/projects.ts`，新增或修改项目时优先更新这个数据文件。
