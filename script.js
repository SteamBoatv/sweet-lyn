// 情话库
const sweetWords = [
    "你是我见过最美的落日，每一次看到你都让我心动不已。",
    "如果秋天有颜色，那一定是你眼中温暖的光芒。",
    "在这个落叶纷飞的季节，只有你让我感受到春天的温暖。",
    "你就像秋日里的第一缕阳光，温柔地照亮了我的整个世界。",
    "愿意和你一起看遍所有的夕阳，直到我们都白了头发。",
    "你的笑容比任何落日都要美丽，比任何余晖都要温暖。",
    "每一个有你的黄昏，都是我最珍贵的时光。",
    "你是我心中永远不会落下的太阳，给我无尽的温暖和光明。",
    "如果爱情有颜色，那一定是你脸红时的那抹温柔的粉。",
    "和你在一起的每一天，都像是置身于最美的秋日童话中。",
    "你是我生命中最美的意外，也是最温暖的归宿。",
    "秋风再冷，也比不上没有你的日子；夕阳再美，也比不上你的容颜。",
    "想和你一起慢慢变老，直到我们成为彼此生命中最温暖的记忆。",
    "你是我心中最柔软的那片云，轻盈而美好。",
    "每当想到你，心中就像升起了一轮温暖的夕阳。"
];

// 等待页面加载完成
document.addEventListener('DOMContentLoaded', function() {
    initSweetWords();
    initCountdown();
    initGame();
    initSmoothScroll();
    initAnimations();
});

// 初始化情话生成器
function initSweetWords() {
    const generateBtn = document.getElementById('generate-btn');
    const sweetText = document.getElementById('sweet-text');
    
    generateBtn.addEventListener('click', function() {
        const randomIndex = Math.floor(Math.random() * sweetWords.length);
        const newText = sweetWords[randomIndex];
        
        // 添加淡出效果
        sweetText.style.opacity = '0';
        
        setTimeout(() => {
            sweetText.textContent = newText;
            sweetText.style.opacity = '1';
        }, 300);
        
        // 按钮点击效果
        generateBtn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            generateBtn.style.transform = 'scale(1)';
        }, 150);
    });
}

// 初始化倒计时
function initCountdown() {
    // 设置目标日期（这里设置为下周同一时间，你可以修改）
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 7);
    
    // 设置在一起的起始日期（这里设置为100天前，你可以修改）
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - 100);
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate.getTime() - now;
        
        // 计算时间差
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        
        // 更新显示
        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        
        // 计算在一起的天数
        const togetherDays = Math.floor((now - startDate.getTime()) / (1000 * 60 * 60 * 24));
        document.getElementById('together-days').querySelector('.counter-number').textContent = togetherDays;
    }
    
    // 立即更新一次
    updateCountdown();
    
    // 每分钟更新一次
    setInterval(updateCountdown, 60000);
}

// 初始化游戏
function initGame() {
    const gameCanvas = document.getElementById('game-canvas');
    const heartsContainer = document.getElementById('hearts-container');
    const scoreElement = document.getElementById('score');
    const startButton = document.getElementById('start-game');
    
    let gameActive = false;
    let score = 0;
    let gameInterval;
    
    startButton.addEventListener('click', function() {
        if (!gameActive) {
            startGame();
        } else {
            stopGame();
        }
    });
    
    function startGame() {
        gameActive = true;
        score = 0;
        scoreElement.textContent = score;
        startButton.innerHTML = '<i class="fas fa-stop me-2"></i>停止游戏';
        startButton.classList.remove('btn-primary');
        startButton.classList.add('btn-danger');
        
        // 每秒生成一个爱心
        gameInterval = setInterval(createHeart, 1000);
    }
    
    function stopGame() {
        gameActive = false;
        clearInterval(gameInterval);
        startButton.innerHTML = '<i class="fas fa-play me-2"></i>开始游戏';
        startButton.classList.remove('btn-danger');
        startButton.classList.add('btn-primary');
        
        // 清除所有爱心
        heartsContainer.innerHTML = '';
    }
    
    function createHeart() {
        const heart = document.createElement('div');
        heart.className = 'game-heart';
        heart.innerHTML = '💖';
        heart.style.left = Math.random() * 80 + '%';
        heart.style.animationDuration = (Math.random() * 2 + 2) + 's';
        
        heart.addEventListener('click', function() {
            score += 10;
            scoreElement.textContent = score;
            heart.style.animation = 'none';
            heart.style.transform = 'scale(1.5)';
            heart.style.opacity = '0';
            
            setTimeout(() => {
                heart.remove();
            }, 300);
            
            // 添加点击特效
            createClickEffect(heart.offsetLeft, heart.offsetTop);
        });
        
        // 3秒后自动移除
        setTimeout(() => {
            if (heart.parentNode) {
                heart.remove();
            }
        }, 4000);
        
        heartsContainer.appendChild(heart);
    }
    
    function createClickEffect(x, y) {
        const effect = document.createElement('div');
        effect.textContent = '+10';
        effect.style.position = 'absolute';
        effect.style.left = x + 'px';
        effect.style.top = y + 'px';
        effect.style.color = '#FF6B6B';
        effect.style.fontWeight = 'bold';
        effect.style.fontSize = '1.2rem';
        effect.style.pointerEvents = 'none';
        effect.style.animation = 'scoreFloat 1s ease-out forwards';
        
        heartsContainer.appendChild(effect);
        
        setTimeout(() => {
            effect.remove();
        }, 1000);
    }
    
    // 添加得分动画CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes scoreFloat {
            0% {
                opacity: 1;
                transform: translateY(0);
            }
            100% {
                opacity: 0;
                transform: translateY(-50px);
            }
        }
    `;
    document.head.appendChild(style);
}

// 初始化平滑滚动
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// 初始化动画效果
function initAnimations() {
    // 监听滚动事件，添加动画
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeIn 1s ease-out';
            }
        });
    }, observerOptions);
    
    // 观察所有卡片元素
    document.querySelectorAll('.sweet-words-card, .countdown-card, .game-area, .memory-card').forEach(card => {
        observer.observe(card);
    });
}

// 添加一些有趣的交互效果
document.addEventListener('DOMContentLoaded', function() {
    // 鼠标移动时的微妙视差效果
    document.addEventListener('mousemove', function(e) {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        const floatingHearts = document.querySelector('.floating-hearts');
        if (floatingHearts) {
            floatingHearts.style.transform = `translateX(-50%) translate(${mouseX * 20}px, ${mouseY * 10}px)`;
        }
    });
    
    // 点击页面时产生小爱心特效
    document.addEventListener('click', function(e) {
        createClickHeart(e.clientX, e.clientY);
    });
    
    function createClickHeart(x, y) {
        const heart = document.createElement('div');
        heart.innerHTML = '💕';
        heart.style.position = 'fixed';
        heart.style.left = x + 'px';
        heart.style.top = y + 'px';
        heart.style.pointerEvents = 'none';
        heart.style.fontSize = '1.5rem';
        heart.style.zIndex = '9999';
        heart.style.animation = 'clickHeartFloat 2s ease-out forwards';
        
        document.body.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 2000);
    }
    
    // 添加点击爱心动画CSS
    const style = document.createElement('style');
    style.textContent += `
        @keyframes clickHeartFloat {
            0% {
                opacity: 1;
                transform: translateY(0) scale(1);
            }
            100% {
                opacity: 0;
                transform: translateY(-100px) scale(0.5);
            }
        }
    `;
    document.head.appendChild(style);
});