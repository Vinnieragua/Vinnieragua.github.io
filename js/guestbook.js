// Guestbook Functionality for 90s Web Aesthetic
class Guestbook {
    constructor() {
        this.storageKey = 'vinnieragua_guestbook';
        this.entriesContainer = document.getElementById('guestbook-list');
        this.init();
    }

    init() {
        this.loadEntries();
        this.setupFormHandlers();
    }

    setupFormHandlers() {
        // Contact form handler
        const contactForm = document.querySelector('.contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleContactSubmit(e.target);
            });
        }

        // Guestbook form handler
        const guestbookForm = document.querySelector('.guestbook-form form');
        if (guestbookForm) {
            guestbookForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleGuestbookSubmit(e.target);
            });
        }
    }

    handleContactSubmit(form) {
        const formData = new FormData(form);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            type: formData.get('type'),
            message: formData.get('message'),
            timestamp: new Date().toISOString()
        };

        // Simulate form submission (in real implementation, this would send to server)
        console.log('Contact form submission:', data);
        this.showSuccessMessage('Message sent successfully! I\'ll get back to you soon. 🚀');
        form.reset();
    }

    handleGuestbookSubmit(form) {
        const formData = new FormData(form);
        const entry = {
            name: formData.get('guest-name'),
            message: formData.get('guest-message'),
            date: new Date().toISOString(),
            id: Date.now()
        };

        this.addEntry(entry);
        this.saveEntries();
        this.showSuccessMessage('Thanks for signing my guestbook! ✨');
        form.reset();
    }

    addEntry(entry) {
        const entryElement = this.createEntryElement(entry);
        this.entriesContainer.insertBefore(entryElement, this.entriesContainer.firstChild);
    }

    createEntryElement(entry) {
        const div = document.createElement('div');
        div.className = 'guestbook-entry';
        div.style.animation = 'entryAppear 0.5s ease-in';
        
        const date = new Date(entry.date);
        const formattedDate = date.toISOString().split('T')[0];
        
        div.innerHTML = `
            <p class="entry-name">🎵 ${this.escapeHtml(entry.name)}</p>
            <p class="entry-message">${this.escapeHtml(entry.message)}</p>
            <p class="entry-date">${formattedDate}</p>
        `;
        
        return div;
    }

    loadEntries() {
        const entries = this.getStoredEntries();
        entries.reverse().forEach(entry => {
            const entryElement = this.createEntryElement(entry);
            this.entriesContainer.appendChild(entryElement);
        });
    }

    getStoredEntries() {
        const stored = localStorage.getItem(this.storageKey);
        return stored ? JSON.parse(stored) : this.getDefaultEntries();
    }

    getDefaultEntries() {
        return [
            {
                name: '🎨 ArtLover42',
                message: 'Amazing installations! The way you transform trash into art is incredible.',
                date: '2025-12-20T10:00:00Z',
                id: 1
            },
            {
                name: '🎵 SoundExplorer',
                message: 'Your performance at the underground gallery blew my mind! Keep creating!',
                date: '2025-12-18T15:30:00Z',
                id: 2
            },
            {
                name: '🔧 TechArtist',
                message: 'Inspired by your technical approach to art. Would love to collaborate sometime!',
                date: '2025-12-15T09:15:00Z',
                id: 3
            }
        ];
    }

    saveEntries() {
        const entries = this.getStoredEntries();
        const newEntry = {
            name: document.getElementById('guest-name').value,
            message: document.getElementById('guest-message').value,
            date: new Date().toISOString(),
            id: Date.now()
        };
        entries.push(newEntry);
        localStorage.setItem(this.storageKey, JSON.stringify(entries));
    }

    showSuccessMessage(message) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'success-message';
        messageDiv.textContent = message;
        messageDiv.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(45deg, #FF4500, #FF8C00);
            color: #000000;
            padding: 20px 30px;
            border: 3px solid #FFFF00;
            border-radius: 10px;
            font-weight: 700;
            z-index: 10001;
            animation: messagePopup 0.5s ease-in;
            text-align: center;
            box-shadow: 0 0 20px #FF8C00;
        `;
        
        document.body.appendChild(messageDiv);
        
        setTimeout(() => {
            messageDiv.style.animation = 'messageFade 0.5s ease-out';
            setTimeout(() => {
                if (messageDiv.parentNode) {
                    messageDiv.parentNode.removeChild(messageDiv);
                }
            }, 500);
        }, 3000);
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
}

// Add guestbook animations
const guestbookStyle = document.createElement('style');
guestbookStyle.textContent = `
    @keyframes entryAppear {
        from {
            opacity: 0;
            transform: translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes messagePopup {
        from {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.5);
        }
        to {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
        }
    }
    
    @keyframes messageFade {
        from {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
        }
        to {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.8);
        }
    }
`;
document.head.appendChild(guestbookStyle);

// Initialize guestbook when page loads
document.addEventListener('DOMContentLoaded', () => {
    new Guestbook();
});