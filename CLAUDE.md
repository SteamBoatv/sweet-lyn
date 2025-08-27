# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Sweet Lyn is a romantic website built with pure frontend technologies (HTML, CSS, JavaScript) using Bootstrap 5 framework. It features a warm autumn sunset color scheme and is designed to be mobile-friendly with deployment on GitHub Pages.

## Technology Stack

- **HTML5** - Semantic structure
- **CSS3** - Custom styling with CSS variables and animations  
- **JavaScript (ES6)** - Interactive functionality
- **Bootstrap 5** - Responsive framework
- **Font Awesome 6** - Icon library
- **GitHub Pages** - Static hosting

## Key Features

1. **Sweet Words Generator** - Random romantic message display
2. **Countdown Timer** - Days until meeting and relationship duration
3. **Heart Collection Game** - Interactive clicking game with score
4. **Memory Gallery** - Photo display placeholders
5. **Smooth Navigation** - Single-page application with smooth scroll

## File Structure

- `index.html` - Main HTML structure with all sections
- `styles.css` - Complete styling with CSS custom properties
- `script.js` - All JavaScript functionality including game logic
- `README.md` - Project documentation

## Color Scheme Variables

```css
:root {
    --primary-color: #E8956F;     /* Warm orange */
    --secondary-color: #F4D03F;   /* Sunset gold */ 
    --accent-color: #FF6B6B;      /* Coral red */
    --warm-bg: linear-gradient(135deg, #FFE4E1 0%, #F5DEB3 100%);
    --text-dark: #8B4513;         /* Dark brown */
}
```

## Common Development Tasks

### Deploy Changes to GitHub Pages
```bash
# After making changes to code
git add .
git commit -m "更新描述"

# Push to GitHub (automatic deployment)
git push origin main
```

### Quick Development Workflow
1. Edit files locally (index.html, styles.css, script.js)
2. Test in browser by opening `index.html`
3. Commit and push changes using above commands
4. Changes automatically deploy to GitHub Pages within minutes

### Network Configuration Notes
- **Requires Clash proxy** on port 7897 for GitHub access in China
- **GitHub Pages**: Automatic deployment, global CDN access

Since this is a pure frontend project, no build commands are needed. Simply:
- Open `index.html` in a browser for local testing
- Use Live Server extension for hot reload during development

## Deployment Process

### Primary Deployment: GitHub Pages
1. Repository: https://github.com/SteamBoatv/sweet-lyn
2. GitHub Pages URL: `https://steamboatv.github.io/sweet-lyn`
3. Deploy from `main` branch
4. Automatic deployment on every push to main

### Git Configuration

#### Proxy Settings for GitHub Access
```bash
git config --global http.proxy http://127.0.0.1:7897
git config --global https.proxy http://127.0.0.1:7897
```
*Note: Requires Clash proxy running on port 7897*

#### Remote Repository
- `origin`: GitHub (HTTPS with proxy authentication)

## Customization Points

- **Sweet words array** in `script.js` - Add/modify romantic messages
- **Countdown dates** in `initCountdown()` function - Set actual important dates
- **Color variables** in `styles.css` - Adjust the color theme
- **Memory cards** in HTML - Replace placeholders with actual photos

## Mobile Responsiveness

Uses Bootstrap's responsive classes and custom media queries:
- Breakpoints: 576px, 768px for mobile/tablet optimization
- Touch-friendly button sizing
- Responsive typography scaling
- Optimized layout stacking

## Interactive Elements

- Smooth scroll navigation between sections
- Animated heart floating effects
- Click-to-collect game mechanics
- Hover effects on all interactive elements
- Page-wide click heart animation

## Performance Considerations

- CDN-hosted Bootstrap and Font Awesome for fast loading
- Minimal custom JavaScript for quick execution
- CSS animations using transforms for smooth performance
- Optimized for mobile devices and slow connections