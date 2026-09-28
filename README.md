# 派对生活空间

按用户提供的 Stitch 项目 Draft 3 制作的 React + TypeScript + Vite + Tailwind CSS 静态网站。

## 启动与构建

需要 Node.js 20.19+ 或 22.12+；本机已验证 Node.js 24.15.0。

在本文件所在的 `personal-space` 文件夹打开终端：

```sh
npm install
npm run dev
```

浏览器打开终端显示的本地地址，默认是 http://127.0.0.1:5173 。停止服务时在终端按 Ctrl+C。

```sh
npm run typecheck
npm run build
npm run preview
```

`npm run build` 包含 TypeScript 检查，成功后产物位于 `dist/`；`npm run preview` 默认地址 http://127.0.0.1:4173 ，用于检查构建结果。

若本机 npm 报原有缓存包含 root-owned files / EACCES，可使用以下命令安装，无须修改全局缓存权限：

```sh
npm install --cache /private/tmp/party-space-npm-cache
```

## 页面与互动

- `/`：最新狗狗版 Draft 3 首页、三个物件入口、记录与照片预览、彩蛋。
- `/journal`：记录列表和分类切换。
- `/journal/:id`：独立记录详情，照片大图，上一篇/下一篇，返回列表。
- `/album`：按原始图片比例排列的瀑布流、分类、大图预览。
- 大图：左右箭头与键盘左右键，不循环；Esc 或关闭按钮退出。锁定背景滚动、限制焦点在弹窗内，关闭后恢复原焦点与滚动位置。
- 狗狗抱抱：点击气泡、摸摸爱心反馈、亲亲抱抱、去相册、收起为爪印、再次展开；气泡可用关闭按钮、Esc 或点击外部关闭。大图和彩蛋出现时宠物避让。
- 尊重系统“减少动态效果”，不播放声音。浏览器后退恢复该历史页面的滚动位置。

## 内容维护

`src/content/data.ts` 集中保存个人介绍、记录、相册条目和图片引用。
`public/images/` 保存网站使用的本地图片。新增图片放入这里，再更新数据文件即可。

当前昵称、日期、文章内容与照片均为明确标注的设计示例，不能作为用户真实经历。共 5 篇示例记录、10 张相册图片；记录中的照片按实际文件计数，不沿用图稿的 18 篇 / 42 张虚构总数。

之后由用户提供素材，AI 更新本地内容与图片，预览、构建，再由用户手动发布。不含网页编辑、上传、登录、数据库、收藏或点赞系统，不使用浏览器存储保存正式内容。宠物和筛选状态仅在当前网页运行期间存在，刷新会恢复初始状态。

## 设计与素材依据

来源：https://stitch.withgoogle.com/projects/12138347457018904592

只采用 Draft 3：
- 首页与宠物：`draft_3_2`（最新宠物版）。
- 详情：`draft_3_3`。
- 相册与大图：`draft_3_4`。
- 列表：`draft_3_5`。
- Draft 3 的彩蛋需求补入最新首页；不使用 Draft 1/2 视觉。

原始导出保存在工程外的 `../design-reference/`，不会公开打包。导出代码是 Tailwind CDN 静态 HTML；已重组为 React 组件、安装式 Tailwind 构建、本地数据和真实路由，未直接运行导出脚本。

移除了图稿的调试台、Motion Spec、无障碍说明面板、虚构点赞和阅读状态，以及未要求的收藏/分享按钮。图片来自用户提供的 Stitch 导出引用，已下载本地；对应来源记录于 `scripts/asset-sources.json`。`scripts/import-assets.py` 用于最初素材导入，正常启动无需运行。

狗狗已按用户确认改为原创分层 2D SVG 角色（`src/components/Puppy.tsx`），奶油白身体、淡黄色垂耳。头、眼睛、耳朵、尾巴和身体是独立图层；平时轻微呼吸、眨眼和偶尔摆尾，打开菜单时歪头摇尾，摸摸时闭成笑眼、轻蹭并冒爱心，约两秒后恢复。无需远程宠物图片或 3D 引擎。系统开启减少动态效果时关闭运动动画，但保留笑眼和文字反馈。

## Vercel 手动部署

1. 先在本地执行 `npm run build`。
2. 在 Vercel 中手动导入保存该工程的 Git 仓库。
3. 本仓库根目录就是网页工程，Root Directory 保留默认 `./`。
4. Framework Preset 选择 Vite；Build Command：`npm run build`；Output Directory：`dist`；Install Command：`npm ci`；Node.js：24.x。
5. 不需要设置环境变量。`vercel.json` 已包含页面路由回退，支持直接访问和刷新详情页。
6. 由用户点击 Deploy。发布后检查首页、详情刷新、图片、大图和狗狗。

若要求每次发布都手动操作，请先在 Vercel 项目 Git 设置中关闭自动部署，避免后续推送触发上线。

请勿把 AGENTS.md、项目记录、原始导出、密钥或原始私人素材放进 `public/`。Vite 只发布构建结果 `dist/`，本工程未包含凭证。

GitHub 仓库：https://github.com/dalishuishou0124/my_blog 。线上部署由用户手动完成。
