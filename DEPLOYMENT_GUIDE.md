# Dr. Chen Medicine - 部署和配置指南

## 项目概览

这是一个完整的医疗美容着陆页，包含：
- ✅ 响应式着陆页（英雄区、关于、服务、结果、评价、联系表单）
- ✅ Stripe 支付集成（产品购买）
- ✅ WhatsApp 直连咨询
- ✅ 后端 API（tRPC）
- ✅ 数据库支持（MySQL）

---

## 部署到 GitHub + Vercel（推荐）

### 步骤 1：导出到 GitHub

1. 在 Manus 项目管理界面，点击右上角 **"更多"** (⋯) 菜单
2. 选择 **"导出到 GitHub"**
3. 选择您的 GitHub 账户和仓库名称（如 `dr-chen-medicine`）
4. 点击 **"导出"** 完成

### 步骤 2：在 Vercel 上部署

1. 访问 [vercel.com](https://vercel.com)，使用 GitHub 账户登录
2. 点击 **"New Project"**
3. 选择您刚导出的 `dr-chen-medicine` 仓库
4. 配置环境变量（见下方）
5. 点击 **"Deploy"** 完成

### 步骤 3：配置环境变量

在 Vercel 项目设置中添加以下环境变量：

```
DATABASE_URL=<your-mysql-database-url>
JWT_SECRET=<random-secret-key>
STRIPE_SECRET_KEY=<your-stripe-secret-key>
STRIPE_WEBHOOK_SECRET=<your-stripe-webhook-secret>
VITE_STRIPE_PUBLISHABLE_KEY=<your-stripe-publishable-key>
```

---

## Stripe 配置

### 获取 Stripe 密钥

1. **创建 Stripe 账户**
   - 访问 [stripe.com](https://stripe.com)
   - 注册账户并完成 KYC 验证

2. **获取 API 密钥**
   - 登录 Stripe Dashboard
   - 进入 **Developers** → **API Keys**
   - 复制 **Secret Key** 和 **Publishable Key**

3. **设置 Webhook**
   - 在 Stripe Dashboard 中，进入 **Developers** → **Webhooks**
   - 点击 **"Add endpoint"**
   - 输入您的部署 URL：`https://your-domain.com/api/stripe/webhook`
   - 选择事件：`checkout.session.completed`, `payment_intent.succeeded`
   - 复制 **Webhook Secret**

### 在项目中配置 Stripe

1. **本地开发**
   ```bash
   # 在项目根目录创建 .env.local
   STRIPE_SECRET_KEY=sk_test_xxxxx
   VITE_STRIPE_PUBLISHABLE_KEY=pk_test_xxxxx
   STRIPE_WEBHOOK_SECRET=whsec_xxxxx
   ```

2. **生产环境**
   - 在 Vercel 项目设置中添加相同的环境变量
   - 使用生产环境密钥（`sk_live_` 和 `pk_live_`）

---

## 数据库配置

### 选项 1：使用 Manus 内置数据库（推荐）

如果您继续使用 Manus 托管，数据库已自动配置。

### 选项 2：自建数据库

如果使用外部数据库（如 AWS RDS、PlanetScale），：

1. **创建 MySQL 数据库**
   - 推荐：[PlanetScale](https://planetscale.com)（免费 MySQL 托管）
   - 或：[AWS RDS](https://aws.amazon.com/rds/)

2. **获取连接字符串**
   ```
   DATABASE_URL=mysql://user:password@host:port/database_name
   ```

3. **运行数据库迁移**
   ```bash
   pnpm db:push
   ```

---

## 本地开发

### 安装依赖

```bash
pnpm install
```

### 启动开发服务器

```bash
pnpm dev
```

访问 `http://localhost:3000`

### 构建生产版本

```bash
pnpm build
pnpm start
```

---

## 自定义域名

### 在 Vercel 上绑定域名

1. 在 Vercel 项目设置中，进入 **Domains**
2. 点击 **"Add Domain"**
3. 输入您的域名（如 `drchenmed.com`）
4. 按照 Vercel 提示配置 DNS 记录

### 在 Manus 上绑定域名（如果继续使用 Manus）

1. 在项目管理界面，进入 **Settings** → **Domains**
2. 购买新域名或绑定现有域名
3. 配置 DNS 指向 Manus 服务器

---

## 支付测试

### 使用 Stripe 测试卡

在测试环境中，使用以下测试卡号进行支付：

| 卡号 | 有效期 | CVC | 结果 |
|------|--------|-----|------|
| 4242 4242 4242 4242 | 任意未来日期 | 任意 3 位数 | ✅ 支付成功 |
| 4000 0000 0000 0002 | 任意未来日期 | 任意 3 位数 | ❌ 支付失败 |

### 测试流程

1. 访问着陆页
2. 滚动到服务卡片
3. 点击 **"Buy Now"** 按钮
4. 在 Stripe Checkout 中输入测试卡信息
5. 完成支付
6. 验证成功页面显示

---

## 常见问题

### Q: 如何修改产品价格？

A: 编辑 `server/products.ts` 文件中的 `PRODUCTS` 对象，修改 `priceInCents` 值。

### Q: 如何添加新产品？

A: 在 `server/products.ts` 中添加新的产品定义，然后在 `client/src/components/Services.tsx` 中添加新的服务卡片。

### Q: Stripe 支付失败怎么办？

A: 
1. 检查 Stripe Dashboard 中的支付日志
2. 确保 API 密钥正确配置
3. 检查 Webhook 是否正确接收事件
4. 查看浏览器控制台的错误信息

### Q: 如何更新 WhatsApp 号码？

A: 搜索项目中的 `16267480352`，替换为您的 WhatsApp 号码。

---

## 下一步

1. ✅ 获取 Stripe 账户和 API 密钥
2. ✅ 在 Vercel 上部署项目
3. ✅ 配置环境变量
4. ✅ 测试支付流程
5. ✅ 购买自定义域名
6. ✅ 上线运营

---

## 支持

有问题？联系方式：
- 📧 Email: contact@drchenmed.com
- 💬 WhatsApp: +1 626-748-0352
- 🌐 Facebook: [Dr. Chen Medicine](https://www.facebook.com/profile.php?id=61570975984429)

---

**最后更新**: 2026-05-02
