// Glitter Mouse Effect for 90s Web Aesthetic
class GlitterEffect {
    constructor() {
        this.glitterColors = ['#FF8C00', '#FFFF00', '#FF4500', '#00FF00', '#00FFFF', '#FF00FF'];
        this.glitterSymbols = ['✨', '⭐', '💫', '🌟', '✦', '✧'];
        this.activeGlitters = [];
        this.maxGlitters = 15;
        this.init();
    }

    init() {
        document.addEventListener('mousemove', (e) => this.createGlitter(e));
        document.addEventListener('touchmove', (e) => this.createGlitter(e.touches[0]));
        this.animateGlitters();
    }

    createGlitter(event) {
        if (this.activeGlitters.length >= this.maxGlitters) {
            return;
        }

        const glitter = document.createElement('div');
        glitter.className = 'glitter-particle';
        glitter.innerHTML = this.glitterSymbols[Math.floor(Math.random() * this.glitterSymbols.length)];
        
        // Random properties for variety
        const color = this.glitterColors[Math.floor(Math.random() * this.glitterColors.length)];
        const size = Math.random() * 20 + 10;
        const duration = Math.random() * 1000 + 500;
        const offsetX = (Math.random() - 0.5) * 50;
        const offsetY = (Math.random() - 0.5) * 50;
        
        // Style the glitter
        glitter.style.cssText = `
            position: fixed;
            left: ${event.clientX + offsetX}px;
            top: ${event.clientY + offsetY}px;
            color: ${color};
            font-size: ${size}px;
            pointer-events: none;
            z-index: 9999;
            text-shadow: 0 0 10px ${color};
            animation: glitterFade ${duration}ms ease-out forwards;
            transform: translate(-50%, -50%);
        `;
        
        document.body.appendChild(glitter);
        this.activeGlitters.push(glitter);
        
        // Remove glitter after animation
        setTimeout(() => {
            if (glitter.parentNode) {
                glitter.parentNode.removeChild(glitter);
            }
            const index = this.activeGlitters.indexOf(glitter);
            if (index > -1) {
                this.activeGlitters.splice(index, 1);
            }
        }, duration);
    }

    animateGlitters() {
        // Add CSS animation for glitter effect
        const style = document.createElement('style');
        style.textContent = `
            @keyframes glitterFade {
                0% {
                    opacity: 1;
                    transform: translate(-50%, -50%) scale(0) rotate(0deg);
                }
                50% {
                    opacity: 1;
                    transform: translate(-50%, -50%) scale(1.5) rotate(180deg);
                }
                100% {
                    opacity: 0;
                    transform: translate(-50%, -50%) scale(0.5) rotate(360deg) translateY(-30px);
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Initialize glitter effect when page loads
document.addEventListener('DOMContentLoaded', () => {
    new GlitterEffect();
});

// Add some extra 90s effects
class RetroEffects {
    constructor() {
        this.init();
    }

    init() {
        this.addRetroCursor();
        this.addLinkHoverEffects();
        this.addRandomBlink();
    }

    addRetroCursor() {
        // Custom cursor that follows mouse
        const cursor = document.createElement('div');
        cursor.className = 'retro-cursor';
        cursor.innerHTML = '👆';
        cursor.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            pointer-events: none;
            z-index: 10000;
            transition: transform 0.1s ease;
            font-size: 16px;
        `;
        document.body.appendChild(cursor);

        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });

        document.addEventListener('mousedown', () => {
            cursor.style.transform = 'scale(1.2)';
        });

        document.addEventListener('mouseup', () => {
            cursor.style.transform = 'scale(1)';
        });
    }

    addLinkHoverEffects() {
        const links = document.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('mouseenter', () => {
                link.style.animation = 'linkPulse 0.5s ease-in-out';
            });
            link.addEventListener('mouseleave', () => {
                link.style.animation = '';
            });
        });

        // Add link pulse animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes linkPulse {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.1); }
            }
        `;
        document.head.appendChild(style);
    }

    addRandomBlink() {
        // Random blinking text effect for extra 90s feel
        setInterval(() => {
            const elements = document.querySelectorAll('.glowing-text, .neon-text');
            if (elements.length > 0) {
                const randomElement = elements[Math.floor(Math.random() * elements.length)];
                randomElement.style.animation = 'none';
                setTimeout(() => {
                    randomElement.style.animation = '';
                }, 100);
            }
        }, 3000);
    }
}

// Initialize retro effects
document.addEventListener('DOMContentLoaded', () => {
    new RetroEffects();
});