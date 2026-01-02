// Hit Counter for 90s Web Aesthetic
class HitCounter {
    constructor() {
        this.storageKey = 'vinnieragua_hit_counter';
        this.initialCount = 303;
        this.counterElement = null;
        this.init();
    }

    init() {
        this.counterElement = document.getElementById('hit-counter');
        if (this.counterElement) {
            this.updateCounter();
            this.animateCounter();
        }
    }

    getCurrentCount() {
        let count = localStorage.getItem(this.storageKey);
        if (!count) {
            count = this.initialCount;
            localStorage.setItem(this.storageKey, count);
        }
        return parseInt(count);
    }

    incrementCounter() {
        let count = this.getCurrentCount();
        count++;
        localStorage.setItem(this.storageKey, count);
        return count;
    }

    updateCounter() {
        const newCount = this.incrementCounter();
        this.counterElement.textContent = newCount;
        this.addCounterEffect();
    }

    animateCounter() {
        // Add rolling number effect
        const originalText = this.counterElement.textContent;
        let rollCount = 0;
        const maxRolls = 10;
        
        const rollInterval = setInterval(() => {
            const randomNum = Math.floor(Math.random() * 999) + 100;
            this.counterElement.textContent = randomNum;
            rollCount++;
            
            if (rollCount >= maxRolls) {
                clearInterval(rollInterval);
                this.counterElement.textContent = originalText;
            }
        }, 100);
    }

    addCounterEffect() {
        // Add glow effect when counter updates
        this.counterElement.style.animation = 'counterGlow 1s ease-in-out';
        setTimeout(() => {
            this.counterElement.style.animation = '';
        }, 1000);
    }
}

// Initialize hit counter when page loads
document.addEventListener('DOMContentLoaded', () => {
    new HitCounter();
});

// Add counter glow animation
const counterStyle = document.createElement('style');
counterStyle.textContent = `
    @keyframes counterGlow {
        0%, 100% { 
            text-shadow: 0 0 5px #FFFF00; 
            transform: scale(1);
        }
        50% { 
            text-shadow: 0 0 20px #FFFF00, 0 0 30px #FF8C00; 
            transform: scale(1.2);
        }
    }
`;
document.head.appendChild(counterStyle);