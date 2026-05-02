# Dr. Chen Medicine - 专业皮肤护理着陆页

一个现代化的医疗美容着陆页，集成 Stripe 支付、WhatsApp 咨询和完整的后端 API。

## 🎯 功能特性

- **响应式设计** — 完美适配所有设备（桌面、平板、手机）
- **Stripe 支付集成** — 安全的在线支付处理
- **WhatsApp 直连** — 一键咨询功能
- **后端 API** — 基于 tRPC 的类型安全 API
- **数据库支持** — MySQL 数据持久化
- **性能优化** — Framer Motion 动画、图片优化、代码分割

## 📁 项目结构

```
dr-chen-medicine/
├── client/                 # 前端代码
│   ├── src/
│   │   ├── pages/         # 页面组件
│   │   ├── components/    # 可复用组件
│   │   ├── lib/           # 工具库
│   │   ├── App.tsx        # 路由配置
│   │   └── main.tsx       # 入口文件
│   ├── index.html         # HTML 模板
│   └── public/            # 静态资源
├── server/                # 后端代码
│   ├── routers.ts         # tRPC 路由定义
│   ├── stripe.ts          # Stripe 支付集成
│   ├── products.ts        # 产品定义
│   ├── db.ts              # 数据库查询
│   └── _core/             # 框架核心代码
├── drizzle/               # 数据库模式和迁移
├── shared/                # 共享代码和常量
├── package.json           # 依赖管理
├── tsconfig.json          # TypeScript 配置
└── DEPLOYMENT_GUIDE.md    # 部署指南
```

## 🚀 快速开始

### 1. 安装依赖

```bash
pnpm install
```

### 2. 配置环境变量

创建 `.env.local` 文件：

```env
DATABASE_URL=mysql://user:password@localhost:3306/dr_chen_medicine
JWT_SECRET=your-secret-key-here
STRIPE_SECRET_KEY=sk_test_xxxxx
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_xxxxx
```

### 3. 初始化数据库

```bash
pnpm db:push
```

### 4. 启动开发服务器

```bash
pnpm dev
```

访问 `http://localhost:3000`

## 🛠️ 开发指南

### 添加新的服务卡片

编辑 `client/src/components/Services.tsx`：

```tsx
const services = [
  {
    id: 1,
    title: "产品名称",
    price: 59.9,
    // ... 其他字段
  },
];
```

### 修改产品价格

编辑 `server/products.ts`：

```ts
export const PRODUCTS = {
  AOBENZ_SINPIN: {
    priceInCents: 5990, // $59.90
    // ...
  },
};
```

### 更新 WhatsApp 号码

搜索项目中的 `16267480352`，替换为您的号码。

## 💳 Stripe 支付集成

### 获取 API 密钥

1. 访问 [stripe.com](https://stripe.com) 创建账户
2. 进入 Dashboard → Developers → API Keys
3. 复制 Secret Key 和 Publishable Key
4. 添加到环境变量

### 测试支付

使用测试卡号 `4242 4242 4242 4242` 进行测试。

详见 [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)

## 📦 部署

### 部署到 Vercel（推荐）

1. 将代码推送到 GitHub
2. 在 Vercel 中导入项目
3. 配置环境变量
4. 点击 Deploy

详见 [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)

## 📱 响应式设计

- **移动端** — 320px 及以上
- **平板** — 768px 及以上
- **桌面** — 1024px 及以上

所有组件使用 Tailwind CSS 构建，自动响应。

## 🎨 设计系统

### 颜色方案

- **主色** — `#c0392b`（红色）
- **辅色** — `#8b5e52`（棕色）
- **背景** — `#f5f0ea`（米白色）
- **文字** — `#2a2420`（深棕色）

### 字体

- **标题** — Cormorant Garamond（衬线）
- **正文** — Jost（无衬线）

## 🔐 安全性

- ✅ 环境变量管理
- ✅ Stripe 安全支付处理
- ✅ HTTPS 加密传输
- ✅ SQL 注入防护（Drizzle ORM）
- ✅ CSRF 保护

## 📊 性能

- ✅ 图片优化和懒加载
- ✅ 代码分割和动态导入
- ✅ Framer Motion 流畅动画
- ✅ 缓存策略

## 🧪 测试

运行测试：

```bash
pnpm test
```

## 📝 许可证

MIT License

## 📧 联系方式

- Email: contact@drchenmed.com
- WhatsApp: +1 626-748-0352
- Facebook: [Dr. Chen Medicine](https://www.facebook.com/profile.php?id=61570975984429)

---

**最后更新**: 2026-05-02
