/**
 * DEMO VERSION - Google Analytics 4 (GA4) Event Tracking
 * This is a demo version that simulates analytics tracking without requiring a real GA4 account
 * Replace with analytics.js and your real Measurement ID for production use
 */

class AnalyticsManager {
    constructor() {
        this.GA_MEASUREMENT_ID = 'DEMO-MODE'; // Demo mode - no real tracking
        this.initialized = false;
        this.eventLog = []; // Store events for demo purposes
        this.init();
    }

    // Initialize Google Analytics (Demo Mode)
    init() {
        console.log('🔥 Analytics Manager - DEMO MODE');
        console.log('📊 This is a demonstration version that logs events to console');
        console.log('📝 To use real Google Analytics:');
        console.log('   1. Get your GA4 Measurement ID from Google Analytics');
        console.log('   2. Replace DEMO-MODE with your real ID in analytics.js');
        console.log('   3. Deploy to your production website');
        console.log('');

        this.initialized = true;
        this.setupEventTracking();
        console.log('✅ Demo Analytics initialized successfully');
    }

    // Track custom events (Demo Mode)
    trackEvent(eventName, parameters = {}) {
        if (!this.initialized) {
            console.warn('Analytics not initialized');
            return;
        }

        // Add common parameters
        const eventData = {
            event_category: 'coffee_corner',
            page_title: document.title,
            page_location: window.location.href,
            timestamp: new Date().toISOString(),
            ...parameters
        };

        // Store event for demo
        this.eventLog.push({ eventName, eventData });

        // Log to console for demo
        console.log(`📊 Analytics Event: ${eventName}`, eventData);
        
        // Show visual feedback for demo
        this.showEventNotification(eventName, eventData);
    }

    // Show visual feedback for tracked events (Demo only)
    showEventNotification(eventName, eventData) {
        // Create a small notification
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #4CAF50;
            color: white;
            padding: 10px 15px;
            border-radius: 5px;
            font-size: 12px;
            z-index: 10000;
            opacity: 0;
            transition: opacity 0.3s ease;
            max-width: 300px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.2);
        `;
        
        notification.innerHTML = `
            <strong>📊 Tracked:</strong> ${eventName}<br>
            <small>${eventData.event_category || 'coffee_corner'}</small>
        `;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => notification.style.opacity = '1', 100);
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.opacity = '0';
            setTimeout(() => document.body.removeChild(notification), 300);
        }, 3000);
    }

    // Setup automatic event tracking (same as production)
    setupEventTracking() {
        this.trackPageLoad();
        this.trackNavigationClicks();
        this.trackLanguageSwitching();
        this.trackRecipeInteractions();
        this.trackGuideInteractions();
        this.trackSearchAndFilter();
        this.trackVideoInteractions();
        this.trackDownloads();
        this.trackScrollDepth();
    }

    // Track page load and basic metrics
    trackPageLoad() {
        const pageName = this.getPageName();
        const language = this.getCurrentLanguage();
        
        this.trackEvent('page_view', {
            event_category: 'navigation',
            page_name: pageName,
            language: language,
            user_agent: navigator.userAgent.substring(0, 50) + '...', // Truncate for demo
            screen_resolution: `${screen.width}x${screen.height}`,
            viewport_size: `${window.innerWidth}x${window.innerHeight}`
        });
    }

    // Track navigation clicks
    trackNavigationClicks() {
        // Main navigation
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                const linkText = e.target.textContent.trim();
                const linkHref = e.target.getAttribute('href');
                
                this.trackEvent('navigation_click', {
                    event_category: 'navigation',
                    link_text: linkText,
                    link_destination: linkHref,
                    click_location: 'main_nav'
                });
            });
        });

        // Footer navigation
        document.querySelectorAll('footer a').forEach(link => {
            link.addEventListener('click', (e) => {
                const linkText = e.target.textContent.trim();
                const linkHref = e.target.getAttribute('href');
                
                this.trackEvent('navigation_click', {
                    event_category: 'navigation',
                    link_text: linkText,
                    link_destination: linkHref,
                    click_location: 'footer'
                });
            });
        });

        // Breadcrumb navigation
        document.querySelectorAll('.breadcrumb a').forEach(link => {
            link.addEventListener('click', (e) => {
                const linkText = e.target.textContent.trim();
                
                this.trackEvent('breadcrumb_click', {
                    event_category: 'navigation',
                    breadcrumb_text: linkText,
                    click_location: 'breadcrumb'
                });
            });
        });
    }

    // Track language switching
    trackLanguageSwitching() {
        // Monitor for language switcher events
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('lang-option')) {
                const selectedLang = e.target.getAttribute('data-lang');
                const previousLang = this.getCurrentLanguage();
                
                this.trackEvent('language_change', {
                    event_category: 'user_preference',
                    previous_language: previousLang,
                    new_language: selectedLang,
                    page_name: this.getPageName()
                });
            }
        });
    }

    // Track recipe interactions
    trackRecipeInteractions() {
        // Recipe card clicks
        document.querySelectorAll('.recipe-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                const recipeCard = e.target.closest('.recipe-card');
                const recipeName = recipeCard.querySelector('h3').textContent;
                const difficulty = recipeCard.getAttribute('data-difficulty');
                const category = recipeCard.getAttribute('data-category');
                
                this.trackEvent('recipe_view', {
                    event_category: 'recipe_interaction',
                    recipe_name: recipeName,
                    recipe_difficulty: difficulty,
                    recipe_category: category
                });
            });
        });

        // Recipe filter clicks
        document.querySelectorAll('.filter-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                const filterType = e.target.getAttribute('data-filter');
                
                this.trackEvent('recipe_filter', {
                    event_category: 'recipe_interaction',
                    filter_type: filterType,
                    page_name: 'recipes'
                });
            });
        });
    }

    // Track guide interactions
    trackGuideInteractions() {
        // Quick navigation clicks
        document.querySelectorAll('.quick-nav .nav-item').forEach(item => {
            item.addEventListener('click', (e) => {
                const sectionName = e.target.querySelector('span')?.textContent || 'Unknown';
                const targetSection = e.target.getAttribute('href');
                
                this.trackEvent('guide_navigation', {
                    event_category: 'guide_interaction',
                    section_name: sectionName,
                    target_section: targetSection,
                    page_name: this.getPageName()
                });
            });
        });

        // Guide progress tracking (checklist items)
        document.querySelectorAll('.checklist-item, .step-item').forEach(item => {
            item.addEventListener('click', (e) => {
                const stepTitle = item.querySelector('h4')?.textContent || 'Unknown Step';
                
                this.trackEvent('guide_step_click', {
                    event_category: 'guide_interaction',
                    step_title: stepTitle,
                    page_name: this.getPageName()
                });
            });
        });
    }

    // Track search and filter actions
    trackSearchAndFilter() {
        // FAQ interactions
        document.querySelectorAll('.faq-question').forEach(question => {
            question.addEventListener('click', (e) => {
                const faqTitle = e.target.querySelector('h4')?.textContent || 'Unknown FAQ';
                
                this.trackEvent('faq_expand', {
                    event_category: 'content_interaction',
                    faq_question: faqTitle,
                    page_name: this.getPageName()
                });
            });
        });
    }

    // Track video interactions
    trackVideoInteractions() {
        const videoIframes = document.querySelectorAll('iframe[src*="youtube.com"]');
        videoIframes.forEach(iframe => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.trackEvent('video_section_view', {
                            event_category: 'video_interaction',
                            video_title: 'DeLonghi EC 230 BK Tutorial',
                            page_name: this.getPageName()
                        });
                        observer.unobserve(entry.target);
                    }
                });
            });
            observer.observe(iframe);
        });
    }

    // Track download actions
    trackDownloads() {
        document.querySelectorAll('a[download], a[href$=".pdf"]').forEach(link => {
            link.addEventListener('click', (e) => {
                const fileName = e.target.getAttribute('download') || 
                               e.target.getAttribute('href').split('/').pop();
                
                this.trackEvent('file_download', {
                    event_category: 'download',
                    file_name: fileName,
                    page_name: this.getPageName()
                });
            });
        });
    }

    // Track scroll depth
    trackScrollDepth() {
        let scrollDepths = [25, 50, 75, 90];
        let trackedDepths = new Set();

        window.addEventListener('scroll', () => {
            const scrollPercent = Math.round(
                (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
            );
            
            scrollDepths.forEach(depth => {
                if (scrollPercent >= depth && !trackedDepths.has(depth)) {
                    trackedDepths.add(depth);
                    this.trackEvent('scroll_depth', {
                        event_category: 'engagement',
                        scroll_depth: depth,
                        page_name: this.getPageName()
                    });
                }
            });
        });
    }

    // Utility functions
    getPageName() {
        const path = window.location.pathname;
        if (path === '/' || path === '/index.html') return 'home';
        if (path.includes('espresso-guide')) return 'espresso_guide';
        if (path.includes('recipes')) return 'recipes';
        if (path.includes('maintenance')) return 'maintenance';
        if (path.includes('quota')) return 'quota';
        return path.replace(/[\/\.]/g, '_');
    }

    getCurrentLanguage() {
        if (window.languageManager) {
            return window.languageManager.getCurrentLanguage();
        }
        return 'en'; // default
    }

    // Demo-specific methods
    getEventLog() {
        return this.eventLog;
    }

    clearEventLog() {
        this.eventLog = [];
        console.log('📊 Event log cleared');
    }

    showEventSummary() {
        console.log('📊 Event Summary:');
        const summary = {};
        this.eventLog.forEach(event => {
            summary[event.eventName] = (summary[event.eventName] || 0) + 1;
        });
        console.table(summary);
    }
}

// Initialize analytics when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    if (!window.analyticsManager) {
        window.analyticsManager = new AnalyticsManager();
        
        // Add demo controls to console
        console.log('📊 Demo Controls Available:');
        console.log('   window.analyticsManager.showEventSummary() - Show event summary');
        console.log('   window.analyticsManager.clearEventLog() - Clear event log');
        console.log('   window.analyticsManager.getEventLog() - Get all events');
    }
});

// Demo: Add a floating demo indicator
document.addEventListener('DOMContentLoaded', () => {
    const demoIndicator = document.createElement('div');
    demoIndicator.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 20px;
        background: #2196F3;
        color: white;
        padding: 8px 12px;
        border-radius: 20px;
        font-size: 11px;
        z-index: 9999;
        font-family: Arial, sans-serif;
        box-shadow: 0 2px 10px rgba(0,0,0,0.2);
        cursor: pointer;
    `;
    demoIndicator.textContent = '📊 Analytics Demo Mode';
    demoIndicator.title = 'Click to see event summary in console';
    
    demoIndicator.addEventListener('click', () => {
        if (window.analyticsManager) {
            window.analyticsManager.showEventSummary();
        }
    });
    
    document.body.appendChild(demoIndicator);
}); 