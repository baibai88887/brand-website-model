# 品牌官网

一个现代化的企业品牌官网，基于 Next.js 14 + React + Tailwind CSS 构建。

## 技术栈

- **Next.js 14** - React 框架，支持 App Router 和 SSG
- **React 18** - UI 库
- **Tailwind CSS** - CSS 框架
- **TypeScript** - 类型安全
- **Lucide React** - 图标库

## 功能特性

- 响应式设计（PC/平板/手机）
- 多页面架构
- 产品展示和详情页
- 新闻资讯系统
- 联系我们表单
- SEO 优化
- 动画效果
- 暗黑模式支持

## 页面结构

- 首页 - Hero 区域、核心数据、产品展示、品牌故事、新闻动态
- 关于我们 - 公司简介、使命愿景、核心价值观、发展历程、管理团队
- 产品中心 - 产品列表、产品详情
- 新闻资讯 - 新闻列表、新闻详情
- 联系我们 - 联系方式、在线留言表单

## 快速开始

### 安装依赖

```bash
npm install
```

### 运行开发服务器

```bash
npm run dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看结果。

### 构建生产版本

```bash
npm run build
```

### 启动生产服务器

```bash
npm start
```

## 项目结构

```
brand-website/
├── app/                    # Next.js App Router
│   ├── about/             # 关于我们页面
│   ├── contact/           # 联系我们页面
│   ├── news/              # 新闻资讯页面
│   ├── products/          # 产品中心页面
│   ├── layout.tsx         # 根布局
│   ├── page.tsx           # 首页
│   └── globals.css        # 全局样式
├── components/            # React 组件
│   ├── Navbar.tsx         # 导航栏
│   ├── Footer.tsx         # 页脚
│   ├── Hero.tsx           # Hero 区域
│   ├── Stats.tsx          # 核心数据
│   ├── Products.tsx       # 产品展示
│   ├── BrandStory.tsx     # 品牌故事
│   └── News.tsx           # 新闻动态
├── public/               # 静态资源
├── tailwind.config.js    # Tailwind 配置
├── next.config.js        # Next.js 配置
└── package.json         # 项目依赖
```

## 自定义配置

### 修改品牌信息

编辑 `app/layout.tsx` 中的 metadata 来修改网站标题和描述。

### 添加新页面

在 `app/` 目录下创建新的文件夹和 `page.tsx` 文件。

### 修改样式

编辑 `tailwind.config.js` 来自定义主题颜色和样式。

## 部署

### Vercel

推荐使用 Vercel 部署：

```bash
npm install -g vercel
vercel
```

### 其他平台

项目可以部署到任何支持 Next.js 的平台，如 Netlify、AWS、阿里云等。

## 许可证

MIT