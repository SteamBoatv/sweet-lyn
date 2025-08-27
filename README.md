# Sweet Lyn

一个充满温暖的专属网站，采用落日余晖色调设计。

## 功能特色

- 🌅 **甜蜜情话生成器** - 精心挑选的温馨话语
- ⏰ **纪念日倒计时** - 记录重要时刻  
- 🎮 **爱心收集游戏** - 有趣的互动体验
- 📸 **美好回忆展示** - 珍贵时光记录
- 📱 **完美移动适配** - 任何设备都能完美显示

## 技术栈

- 纯HTML + CSS + JavaScript
- Bootstrap 5 响应式框架
- Font Awesome 图标库
- 渐变动画和交互效果

## 部署说明

1. 直接将所有文件上传到 GitHub 仓库
2. 在仓库设置中开启 GitHub Pages
3. 选择从 main 分支部署
4. 几分钟后即可通过 `username.github.io/repository-name` 访问

## 自定义修改

### 修改倒计时日期
在 `script.js` 中找到这两行：
```javascript
// 设置目标日期（下次见面时间）
targetDate.setDate(targetDate.getDate() + 7);

// 设置在一起的起始日期  
startDate.setDate(startDate.getDate() - 100);
```

### 添加新的情话
在 `script.js` 的 `sweetWords` 数组中添加新内容。

### 更换照片
将图片文件放在项目目录中，然后修改 `index.html` 中的相应部分。

## 色彩主题

采用秋日落日余晖配色方案：
- 主色调：温暖橘色 (#E8956F)
- 辅助色：落日金色 (#F4D03F) 
- 背景：粉色到米色渐变
- 文字：深褐色 (#8B4513)

---

Made with ❤️ for someone special.