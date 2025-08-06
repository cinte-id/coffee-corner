/**
 * Google Analytics 4 (GA4) Event Tracking for Cinte Coffee Corner
 * This script tracks user interactions and provides insights into website usage
 */

class AnalyticsManager {
    constructor() {
        this.GA_MEASUREMENT_ID = 'G-2T8LYM97LJ'; // Replace with your actual GA4 Measurement ID
        this.initialized = false;
        this.init();
    }

    // Initialize Google Analytics
    init() {
        // Only initialize if GA measurement ID is set
        if (this.GA_MEASUREMENT_ID === 'G-2T8LYM97LJ') {
            console.warn('Google Analytics: Please replace GA_MEASUREMENT_ID with your actual tracking ID');
            return;
        }

        // Load Google Analytics script
        this.loadGAScript();
        
        // Initialize GA4
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        window.gtag = gtag;
        gtag('js', new Date());
        gtag('config', this.GA_MEASUREMENT_ID, {
            // Enhanced measurement settings
            send_page_view: true,
            allow_enhanced_conversions: true,
            allow_google_signals: true
        });

        this.initialized = true;
        this.setupEventTracking();
        console.log('Google Analytics initialized successfully');
    }

    // Load Google Analytics script
    loadGAScript() {
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${this.GA_MEASUREMENT_ID}`;
        document.head.appendChild(script);
    }

    // Track custom events
    trackEvent(eventName, parameters = {}) {
        if (!this.initialized || typeof gtag === 'undefined') {
            console.warn('Analytics not initialized or gtag not available');
            return;
        }

        // Add common parameters
        const eventData = {
            event_category: 'coffee_corner',
            page_title: document.title,
            page_location: window.location.href,
            ...parameters
        };

        gtag('event', eventName, eventData);
        console.log(`Analytics Event: ${eventName}`, eventData);
    }

    // Setup automatic event tracking
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
            user_agent: navigator.userAgent,
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

        // Modal interactions
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('close') && e.target.closest('#recipeModal')) {
                this.trackEvent('recipe_modal_close', {
                    event_category: 'recipe_interaction',
                    action: 'modal_close'
                });
            }
        });
    }

    // Track guide interactions
    trackGuideInteractions() {
        // Quick navigation clicks
        document.querySelectorAll('.quick-nav .nav-item').forEach(item => {
            item.addEventListener('click', (e) => {
                const sectionName = e.target.querySelector('span').textContent;
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
                const stepTitle = item.querySelector('h4').textContent;
                
                this.trackEvent('guide_step_click', {
                    event_category: 'guide_interaction',
                    step_title: stepTitle,
                    page_name: this.getPageName()
                });
            });
        });

        // Continue learning clicks
        document.querySelectorAll('.guide-navigation .nav-card').forEach(card => {
            card.addEventListener('click', (e) => {
                const cardTitle = e.target.querySelector('h4').textContent;
                const destination = e.target.getAttribute('href');
                
                this.trackEvent('continue_learning_click', {
                    event_category: 'guide_interaction',
                    card_title: cardTitle,
                    destination: destination,
                    source_page: this.getPageName()
                });
            });
        });
    }

    // Track search and filter actions
    trackSearchAndFilter() {
        // FAQ interactions
        document.querySelectorAll('.faq-question').forEach(question => {
            question.addEventListener('click', (e) => {
                const faqTitle = e.target.querySelector('h4').textContent;
                
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
        // YouTube video tracking (if iframe is accessible)
        const videoIframes = document.querySelectorAll('iframe[src*="youtube.com"]');
        videoIframes.forEach(iframe => {
            // Track when video section is viewed
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

    // Track download actions (if any)
    trackDownloads() {
        document.querySelectorAll('a[download], a[href$=".pdf"], a[href$=".doc"], a[href$=".docx"]').forEach(link => {
            link.addEventListener('click', (e) => {
                const fileName = e.target.getAttribute('download') || e.target.getAttribute('href').split('/').pop();
                
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
            const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
            
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

    // Track custom conversion events
    trackConversion(conversionType, value = null) {
        const conversionData = {
            event_category: 'conversion',
            conversion_type: conversionType,
            page_name: this.getPageName(),
            language: this.getCurrentLanguage()
        };

        if (value !== null) {
            conversionData.value = value;
        }

        this.trackEvent('conversion', conversionData);
    }

    // Track user engagement metrics
    trackEngagement(engagementType, details = {}) {
        this.trackEvent('user_engagement', {
            event_category: 'engagement',
            engagement_type: engagementType,
            page_name: this.getPageName(),
            ...details
        });
    }

    // Track errors
    trackError(errorType, errorMessage, errorDetails = {}) {
        this.trackEvent('error', {
            event_category: 'error',
            error_type: errorType,
            error_message: errorMessage,
            page_name: this.getPageName(),
            ...errorDetails
        });
    }
}

// Initialize analytics when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Only initialize if not already done
    if (!window.analyticsManager) {
        window.analyticsManager = new AnalyticsManager();
    }
});

// Track page visibility changes
document.addEventListener('visibilitychange', () => {
    if (window.analyticsManager) {
        const visibilityState = document.visibilityState;
        window.analyticsManager.trackEvent('page_visibility_change', {
            event_category: 'engagement',
            visibility_state: visibilityState,
            page_name: window.analyticsManager.getPageName()
        });
    }
});

// Track unload events
window.addEventListener('beforeunload', () => {
    if (window.analyticsManager) {
        window.analyticsManager.trackEvent('page_unload', {
            event_category: 'navigation',
            page_name: window.analyticsManager.getPageName(),
            session_duration: Date.now() - performance.timing.navigationStart
        });
    }
}); 