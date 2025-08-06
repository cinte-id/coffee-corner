// Guide page specific JavaScript functionality
document.addEventListener('DOMContentLoaded', function() {
    
    // Progress tracking for step-by-step guides
    initializeProgressTracking();
    
    // Enhanced scroll effects for guide sections
    initializeScrollEffects();
    
    // Interactive checklist functionality
    initializeChecklists();
    
    // Print functionality for guides
    initializePrintFeatures();
    
    // Reading time estimation
    calculateReadingTime();
    
    // Section completion tracking
    initializeSectionTracking();
});

// Progress tracking for multi-step processes
function initializeProgressTracking() {
    const stepItems = document.querySelectorAll('.step-item, .checklist-item');
    
    stepItems.forEach((item, index) => {
        // Add click handler for marking completion
        item.addEventListener('click', function(e) {
            // Don't interfere with links
            if (e.target.tagName === 'A') return;
            
            this.classList.toggle('completed');
            updateProgressBar();
            
            // Save progress to localStorage
            saveProgress();
        });
        
        // Add keyboard accessibility
        item.setAttribute('tabindex', '0');
        item.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
    
    // Load saved progress
    loadProgress();
}

// Update progress bar based on completed steps
function updateProgressBar() {
    const steps = document.querySelectorAll('.step-item, .checklist-item');
    const completedSteps = document.querySelectorAll('.step-item.completed, .checklist-item.completed');
    
    if (steps.length === 0) return;
    
    const progress = (completedSteps.length / steps.length) * 100;
    
    // Create or update progress bar
    let progressBar = document.querySelector('.guide-progress');
    if (!progressBar) {
        progressBar = createProgressBar();
    }
    
    const progressFill = progressBar.querySelector('.progress-fill');
    const progressText = progressBar.querySelector('.progress-text');
    
    progressFill.style.width = `${progress}%`;
    progressText.textContent = `${Math.round(progress)}% Complete`;
    
    // Show completion message
    if (progress === 100) {
        showCompletionMessage();
    }
}

// Create progress bar element
function createProgressBar() {
    const progressBar = document.createElement('div');
    progressBar.className = 'guide-progress';
    progressBar.innerHTML = `
        <div class="progress-header">
            <span class="progress-text">0% Complete</span>
            <button class="reset-progress" onclick="resetProgress()">
                <i class="fas fa-redo"></i> Reset
            </button>
        </div>
        <div class="progress-bar">
            <div class="progress-fill"></div>
        </div>
    `;
    
    // Insert after hero section
    const heroSection = document.querySelector('.guide-hero');
    if (heroSection) {
        heroSection.insertAdjacentElement('afterend', progressBar);
    }
    
    return progressBar;
}

// Save progress to localStorage
function saveProgress() {
    const completedSteps = Array.from(document.querySelectorAll('.step-item.completed, .checklist-item.completed'))
        .map(step => step.querySelector('h4')?.textContent || '');
    
    const pageName = document.title;
    localStorage.setItem(`coffee-guide-progress-${pageName}`, JSON.stringify(completedSteps));
}

// Load progress from localStorage
function loadProgress() {
    const pageName = document.title;
    const savedProgress = localStorage.getItem(`coffee-guide-progress-${pageName}`);
    
    if (savedProgress) {
        const completedSteps = JSON.parse(savedProgress);
        
        completedSteps.forEach(stepTitle => {
            const stepElement = Array.from(document.querySelectorAll('.step-item, .checklist-item'))
                .find(item => item.querySelector('h4')?.textContent === stepTitle);
            
            if (stepElement) {
                stepElement.classList.add('completed');
            }
        });
        
        updateProgressBar();
    }
}

// Reset progress
function resetProgress() {
    const completedSteps = document.querySelectorAll('.step-item.completed, .checklist-item.completed');
    completedSteps.forEach(step => step.classList.remove('completed'));
    
    updateProgressBar();
    saveProgress();
    
    // Hide completion message
    const completionMessage = document.querySelector('.completion-message');
    if (completionMessage) {
        completionMessage.remove();
    }
}

// Show completion message
function showCompletionMessage() {
    // Don't show multiple messages
    if (document.querySelector('.completion-message')) return;
    
    const message = document.createElement('div');
    message.className = 'completion-message';
    message.innerHTML = `
        <div class="completion-content">
            <i class="fas fa-trophy"></i>
            <h3>Congratulations!</h3>
            <p>You've completed this guide. Great job mastering your coffee skills!</p>
            <button onclick="this.parentElement.parentElement.remove()" class="btn btn-primary">
                <i class="fas fa-check"></i> Awesome!
            </button>
        </div>
    `;
    
    document.body.appendChild(message);
    
    // Auto-remove after 10 seconds
    setTimeout(() => {
        if (message.parentElement) {
            message.remove();
        }
    }, 10000);
}

// Enhanced scroll effects
function initializeScrollEffects() {
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                
                // Animate child elements with delay
                const children = entry.target.querySelectorAll('.step-item, .checklist-item, .service-card');
                children.forEach((child, index) => {
                    setTimeout(() => {
                        child.classList.add('animate-in');
                    }, index * 100);
                });
            }
        });
    }, observerOptions);
    
    // Observe guide sections
    const guideSections = document.querySelectorAll('.guide-section');
    guideSections.forEach(section => observer.observe(section));
}

// Interactive checklist functionality
function initializeChecklists() {
    const checklistItems = document.querySelectorAll('.checklist-item');
    
    checklistItems.forEach(item => {
        const checkBox = item.querySelector('.check-box');
        
        if (checkBox) {
            // Add visual feedback
            item.addEventListener('mouseenter', function() {
                if (!this.classList.contains('completed')) {
                    checkBox.style.transform = 'scale(1.1)';
                }
            });
            
            item.addEventListener('mouseleave', function() {
                checkBox.style.transform = 'scale(1)';
            });
        }
    });
}

// Print functionality
function initializePrintFeatures() {
    // Add print button to guides
    const printButton = document.createElement('button');
    printButton.className = 'print-guide-btn';
    printButton.innerHTML = '<i class="fas fa-print"></i> Print Guide';
    printButton.onclick = printGuide;
    
    // Add to quick nav if it exists
    const quickNav = document.querySelector('.quick-nav .container');
    if (quickNav) {
        printButton.style.cssText = `
            padding: 0.5rem 1rem;
            background: var(--primary-color);
            color: white;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            font-size: 0.9rem;
            margin-top: 1rem;
            display: block;
            margin-left: auto;
            margin-right: auto;
            transition: all 0.3s ease;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        `;
        
        // Create a separate container for the print button
        const printContainer = document.createElement('div');
        printContainer.style.cssText = `
            text-align: center;
            margin-top: 1rem;
        `;
        // Add hover effects
        printButton.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = '0 4px 8px rgba(0,0,0,0.15)';
        });
        
        printButton.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
        });
        
        printContainer.appendChild(printButton);
        quickNav.appendChild(printContainer);
    }
}

// Print guide function
function printGuide() {
    // Create print-friendly version
    const printWindow = window.open('', '_blank');
    const content = document.documentElement.outerHTML;
    
    // Modify content for printing
    const printContent = content
        .replace(/<nav[^>]*>.*?<\/nav>/gs, '')
        .replace(/<footer[^>]*>.*?<\/footer>/gs, '')
        .replace(/class="navbar[^"]*"/g, 'style="display:none"')
        .replace(/class="quick-nav[^"]*"/g, 'style="display:none"')
        .replace(/class="guide-navigation[^"]*"/g, 'style="display:none"');
    
    printWindow.document.write(printContent);
    printWindow.document.close();
    printWindow.print();
}

// Calculate reading time
function calculateReadingTime() {
    const content = document.querySelector('.guide-section, .container');
    if (!content) return;
    
    const text = content.textContent || content.innerText || '';
    const wordsPerMinute = 200;
    const words = text.trim().split(/\s+/).length;
    const readingTime = Math.ceil(words / wordsPerMinute);
    
    // Update existing reading time or create new one
    const existingTime = document.querySelector('.guide-stats .stat span');
    if (existingTime && existingTime.textContent.includes('min read')) {
        existingTime.textContent = `${readingTime} min read`;
    }
}

// Section completion tracking
function initializeSectionTracking() {
    const sections = document.querySelectorAll('.guide-section[id]');
    
    sections.forEach(section => {
        const sectionId = section.id;
        const navLink = document.querySelector(`a[href="#${sectionId}"]`);
        
        if (navLink) {
            // Check if section is completed based on its steps
            const checkCompletion = () => {
                const steps = section.querySelectorAll('.step-item, .checklist-item');
                const completedSteps = section.querySelectorAll('.step-item.completed, .checklist-item.completed');
                
                if (steps.length > 0 && completedSteps.length === steps.length) {
                    navLink.classList.add('section-completed');
                    navLink.innerHTML += ' <i class="fas fa-check-circle"></i>';
                } else {
                    navLink.classList.remove('section-completed');
                    const checkIcon = navLink.querySelector('.fa-check-circle');
                    if (checkIcon) checkIcon.remove();
                }
            };
            
            // Listen for completion changes
            section.addEventListener('click', () => {
                setTimeout(checkCompletion, 100);
            });
            
            // Initial check
            checkCompletion();
        }
    });
}

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + P for print
    if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
        e.preventDefault();
        printGuide();
    }
    
    // Ctrl/Cmd + R for reset progress
    if ((e.ctrlKey || e.metaKey) && e.key === 'r' && e.shiftKey) {
        e.preventDefault();
        if (confirm('Reset all progress for this guide?')) {
            resetProgress();
        }
    }
});

// Add CSS for new features
const additionalStyles = `
    .guide-progress {
        background: white;
        padding: 1rem 0;
        border-bottom: 1px solid var(--border-color);
        position: sticky;
        top: 70px;
        z-index: 100;
    }
    
    .progress-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0.5rem;
        max-width: 1200px;
        margin-left: auto;
        margin-right: auto;
        padding: 0 20px;
    }
    
    .progress-bar {
        height: 8px;
        background: var(--border-color);
        border-radius: 4px;
        overflow: hidden;
        max-width: 1200px;
        margin: 0 auto;
        margin-left: auto;
        margin-right: auto;
    }
    
    .progress-fill {
        height: 100%;
        background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
        border-radius: 4px;
        transition: width 0.5s ease;
        width: 0%;
    }
    
    .reset-progress {
        background: none;
        border: 1px solid var(--border-color);
        padding: 0.25rem 0.5rem;
        border-radius: 4px;
        cursor: pointer;
        font-size: 0.8rem;
        color: var(--text-secondary);
    }
    
    .reset-progress:hover {
        background: var(--background-primary);
    }
    
    .step-item.completed,
    .checklist-item.completed {
        background: linear-gradient(135deg, rgba(72, 187, 120, 0.1), rgba(56, 161, 105, 0.1));
        border-left: 4px solid #48BB78;
    }
    
    .step-item.completed .step-number,
    .checklist-item.completed .check-box {
        background: linear-gradient(135deg, #48BB78, #38A169);
    }
    
    .completion-message {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 3000;
        animation: fadeIn 0.3s ease;
    }
    
    .completion-content {
        background: white;
        padding: 3rem;
        border-radius: 12px;
        text-align: center;
        max-width: 400px;
        box-shadow: 0 20px 40px rgba(0,0,0,0.3);
    }
    
    .completion-content i {
        font-size: 3rem;
        color: #F59E0B;
        margin-bottom: 1rem;
    }
    
    .section-completed {
        color: #48BB78 !important;
    }
    
    .animate-in {
        animation: slideInUp 0.6s ease forwards;
    }
    
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    @media (max-width: 768px) {
        .progress-header {
            flex-direction: column;
            gap: 0.5rem;
        }
        
        .completion-content {
            margin: 1rem;
            padding: 2rem;
        }
    }
`;

// Inject additional styles
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);

console.log('Guide enhancements loaded successfully! 🚀'); 