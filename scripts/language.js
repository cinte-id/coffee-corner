// Language Detection and Switching System
class LanguageManager {
    constructor() {
        this.currentLanguage = 'en';
        this.supportedLanguages = ['en', 'id'];
        this.translations = {};
        this.init();
    }

    init() {
        this.loadTranslations();
        console.log('🔧 Translations loaded');
        this.detectLanguage();
        console.log(`🌍 Current language set to: ${this.currentLanguage}`);
        this.createLanguageSwitcher();
        this.applyTranslations();
    }

    // Auto-detect language based on browser settings
    detectLanguage() {
        const savedLang = localStorage.getItem('cinte-coffee-language');
        if (savedLang && this.supportedLanguages.includes(savedLang)) {
            this.currentLanguage = savedLang;
            return;
        }

        // Get browser language
        const browserLang = navigator.language || navigator.userLanguage;
        const langCode = browserLang.split('-')[0].toLowerCase();
        
        // Check if browser language is supported
        if (this.supportedLanguages.includes(langCode)) {
            this.currentLanguage = langCode;
            console.log(`🌍 Detected browser language: ${langCode}`);
        } else {
            this.currentLanguage = 'en'; // Default to English
            console.log(`🌍 Browser language ${langCode} not supported, defaulting to English`);
        }

        // Save detected language
        localStorage.setItem('cinte-coffee-language', this.currentLanguage);
    }

    // Load translation data
    loadTranslations() {
        this.translations = {
            en: {
                // Navigation
                'nav.home': 'Home',
                'nav.espresso-guide': 'Espresso Guide',
                'nav.recipes': 'Coffee Recipes',
                'nav.maintenance': 'Maintenance',
                'nav.quota': 'Quota & Tips',
                
                // Homepage
                'home.title': 'Cinte Coffee Corner - Your Complete Guide',
                'home.hero.title': 'Master Your Office',
                'home.hero.highlight': 'Coffee Experience',
                'home.hero.description': 'Your complete guide to operating the espresso machine, creating delicious coffee drinks, and maintaining our self-service coffee corner. From beginners to coffee enthusiasts.',
                'home.hero.start-learning': 'Start Learning',
                'home.hero.view-recipes': 'View Recipes',
                'home.stats.self-service': 'Self-Service',
                'home.stats.self-service-desc': 'Available for all office employees',
                'home.stats.premium-beans': 'Premium Beans',
                'home.stats.premium-beans-desc': 'Quality coffee beans provided monthly',
                'home.stats.community': 'Community Driven',
                'home.stats.community-desc': 'Donations help maintain our supplies',
                'home.stats.available': '24/7 Available',
                'home.stats.available-desc': 'Coffee whenever you need it',
                'home.sections.title': 'Everything You Need to Know',
                'home.sections.desc': 'Comprehensive guides to help you make the perfect cup',
                'home.espresso.title': 'Espresso Machine Guide',
                'home.espresso.desc': 'Step-by-step instructions on how to operate our espresso machine safely and effectively.',
                'home.espresso.link': 'Learn More',
                'home.recipes.title': 'Coffee Recipes',
                'home.recipes.desc': 'Discover various coffee drinks you can make, from simple espresso to elaborate lattes.',
                'home.recipes.link': 'View Recipes',
                'home.maintenance.title': 'Cleaning & Maintenance',
                'home.maintenance.desc': 'Essential cleaning procedures to keep our equipment in perfect condition.',
                'home.maintenance.link': 'Read Guide',
                'home.quota.title': 'Quota & Donations',
                'home.quota.desc': 'Information about monthly quotas, supplies, and how to contribute to our coffee fund.',
                'home.quota.link': 'Learn More',
                'home.tips.title': 'Quick Tips for Beginners',
                'home.tips.desc': 'Essential tips to get you started right away',
                'home.tips.tip1.title': 'Always check water level',
                'home.tips.tip1.desc': 'Ensure the water reservoir is filled before starting',
                'home.tips.tip2.title': 'Warm up the machine',
                'home.tips.tip2.desc': 'Let the machine heat up for 2-3 minutes before brewing',
                'home.tips.tip3.title': 'Clean after use',
                'home.tips.tip3.desc': 'Always rinse and wipe down after making your coffee',
                'home.tips.tip4.title': 'Report issues immediately',
                'home.tips.tip4.desc': 'Let the office know if something isn\'t working properly',
                'home.cta.title': 'Ready to Become a Coffee Pro?',
                'home.cta.desc': 'Start with our comprehensive espresso machine guide and work your way up to creating amazing coffee drinks',
                'home.cta.button': 'Get Started Now',
                
                // Office Coffee Projects
                'home.projects.title': 'Office Coffee Projects & Initiatives',
                'home.projects.desc': 'Discover our community-driven coffee projects and how you can contribute to making our coffee corner even better',
                'home.projects.sustainability.title': 'Sustainability Initiative',
                'home.projects.sustainability.desc': 'Our ongoing project to reduce waste, source ethical coffee beans, and implement eco-friendly practices in our coffee corner.',
                'home.projects.training.title': 'Coffee Skills Training',
                'home.projects.training.desc': 'Monthly workshops to help colleagues master advanced coffee techniques and become coffee ambassadors.',
                'home.projects.optimization.title': 'Equipment Optimization',
                'home.projects.optimization.desc': 'Continuous improvement of our coffee setup based on usage patterns and community feedback.',
                'home.projects.community.title': 'Coffee Community Fund',
                'home.projects.community.desc': 'Supporting local coffee farmers and contributing to coffee-growing communities worldwide.',
                'home.projects.get-involved.title': 'Want to Get Involved?',
                'home.projects.get-involved.desc': 'Join our coffee community initiatives and help make our office coffee corner the best it can be!',
                
                // Espresso Guide
                'espresso.title': 'DeLonghi EC 230 BK Operation Guide - Cinte Coffee Corner',
                'espresso.breadcrumb.home': 'Home',
                'espresso.breadcrumb.guide': 'Espresso Machine Guide',
                'espresso.hero.title': 'DeLonghi EC 230 BK Operation Guide',
                'espresso.hero.desc': 'Master the art of making perfect espresso with our DeLonghi EC 230 BK espresso machine. This comprehensive guide covers everything you need to know about operating this specific model safely and efficiently.',
                'espresso.machine.specs': 'Machine Specifications',
                'espresso.machine.model': 'Model',
                'espresso.machine.type': 'Type',
                'espresso.machine.color': 'Color',
                'espresso.machine.capacity': 'Capacity',
                'espresso.machine.pressure': 'Pressure',
                'espresso.stats.read-time': '5-10 min read',
                'espresso.stats.difficulty': 'Beginner Friendly',
                'espresso.stats.audience': 'For Everyone',
                'espresso.nav.safety': 'Safety First',
                'espresso.nav.getting-started': 'Getting Started',
                'espresso.nav.step-by-step': 'Step by Step',
                'espresso.nav.troubleshooting': 'Troubleshooting',
                'espresso.video.title': 'Video Tutorial',
                'espresso.video.desc': 'Watch this comprehensive video guide for the DeLonghi EC 230 BK espresso machine',
                'espresso.video.learn.title': 'What You\'ll Learn',
                'espresso.video.learn.setup': 'Detailed machine setup and preparation',
                'espresso.video.learn.brewing': 'Step-by-step brewing process',
                'espresso.video.learn.steam': 'Steam wand operation for milk frothing',
                'espresso.video.learn.troubleshoot': 'Common troubleshooting tips',
                'espresso.video.learn.maintenance': 'Proper cleaning and maintenance',
                
                // Clean After Use CTA
                'espresso.clean-cta.title': '🎉 Great Job! Now Clean After Use',
                'espresso.clean-cta.desc': 'You\'ve mastered making espresso! The final and most important step is cleaning up after each use. This keeps our machine in perfect condition for everyone.',
                'espresso.clean-cta.time.title': 'Only 2 Minutes',
                'espresso.clean-cta.time.desc': 'Quick cleanup routine that makes a huge difference',
                'espresso.clean-cta.courtesy.title': 'Be Courteous',
                'espresso.clean-cta.courtesy.desc': 'Leave a clean workspace for the next coffee lover',
                'espresso.clean-cta.machine.title': 'Protect Our Machine',
                'espresso.clean-cta.machine.desc': 'Proper cleaning extends machine life and improves coffee quality',
                'espresso.clean-cta.steps.title': 'Essential Steps After Making Espresso:',
                'espresso.clean-cta.step1.title': 'Clean Portafilter',
                'espresso.clean-cta.step1.desc': 'Remove and rinse while warm',
                'espresso.clean-cta.step2.title': 'Clean Steam Wand',
                'espresso.clean-cta.step2.desc': 'Purge and wipe if you used milk',
                'espresso.clean-cta.step3.title': 'Wipe Surfaces',
                'espresso.clean-cta.step3.desc': 'Clean counter and grinder area',
                'espresso.clean-cta.button.main': 'View Complete Cleaning Guide',
                'espresso.clean-cta.button.recipes': 'Explore Coffee Recipes',
                'espresso.safety.title': 'Safety First',
                'espresso.safety.desc': 'Before operating the espresso machine, please read these important safety guidelines',
                'espresso.getting-started.title': 'Getting Started',
                'espresso.getting-started.desc': 'Essential preparations before brewing your first cup',
                'espresso.step-by-step.title': 'Step-by-Step Brewing Process',
                'espresso.step-by-step.desc': 'Follow these detailed steps to brew the perfect espresso shot',
                'espresso.troubleshooting.title': 'Troubleshooting Common Issues',
                'espresso.troubleshooting.desc': 'Solutions to the most common problems you might encounter',
                'espresso.safety.hot-surfaces.title': 'Hot Surfaces',
                'espresso.safety.hot-surfaces.desc': 'The machine gets extremely hot during operation. Never touch the group head, steam wand, or hot plate without protection.',
                'espresso.safety.water-safety.title': 'Water Safety',
                'espresso.safety.water-safety.desc': 'Always check the water level before use. Never operate the machine without sufficient water in the reservoir.',
                'espresso.safety.proper-handling.title': 'Proper Handling',
                'espresso.safety.proper-handling.desc': 'Use the handles and designated grip areas. Keep the work area clean and dry to prevent slips.',
                'espresso.safety.emergency.title': 'Emergency',
                'espresso.safety.emergency.desc': 'Know the location of the power switch and water shut-off. Report any malfunctions immediately.',
                
                // Getting Started Section
                'espresso.getting-started.check-water.title': 'Check Water Level',
                'espresso.getting-started.check-water.desc': 'Ensure the water reservoir is filled with fresh, cold water. The minimum level should be above the "MIN" line.',
                'espresso.getting-started.power-on.title': 'Power On the Machine',
                'espresso.getting-started.power-on.desc': 'Turn on the main power switch. The indicator light will show when the machine is heating up.',
                'espresso.getting-started.wait-heating.title': 'Wait for Heating',
                'espresso.getting-started.wait-heating.desc': 'Allow 2-3 minutes for the machine to reach optimal brewing temperature. The ready light will indicate when it\'s ready.',
                'espresso.getting-started.prepare-cup.title': 'Prepare Your Cup',
                'espresso.getting-started.prepare-cup.desc': 'Place a clean espresso cup or shot glass under the group head. Pre-warm if desired.',
                
                // Step by Step Process
                'espresso.steps.grind.title': 'Grind Fresh Coffee',
                'espresso.steps.grind.desc': 'Use the provided coffee grinder to grind beans to a fine consistency. You\'ll need about 18-20 grams for a double shot.',
                'espresso.steps.grind.tip-label': 'Tip:',
                'espresso.steps.grind.tip': 'Grind only what you need for immediate use to maintain freshness.',
                'espresso.steps.fill.title': 'Fill the Portafilter',
                'espresso.steps.fill.desc': 'Remove the portafilter from the group head. Fill it with the ground coffee, distributing evenly.',
                'espresso.steps.fill.note-label': 'Note:',
                'espresso.steps.fill.note': 'Don\'t overfill - the coffee should be level with the rim.',
                'espresso.steps.tamp.title': 'Tamp the Coffee',
                'espresso.steps.tamp.desc': 'Use the tamper to compress the coffee grounds evenly with about 30 pounds of pressure. The surface should be level and smooth.',
                'espresso.steps.tamp.important-label': 'Important:',
                'espresso.steps.tamp.important': 'Consistent tamping pressure ensures even extraction.',
                'espresso.steps.lock.title': 'Lock the Portafilter',
                'espresso.steps.lock.desc': 'Insert the portafilter into the group head and turn clockwise until it\'s firmly locked in place.',
                'espresso.steps.lock.check-label': 'Check:',
                'espresso.steps.lock.check': 'The portafilter handle should point toward the front or slightly right.',
                'espresso.steps.extract.title': 'Start Extraction',
                'espresso.steps.extract.desc': 'Press the brew button to start extraction. A good shot should take 25-30 seconds for a double shot.',
                'espresso.steps.extract.watch-label': 'Watch:',
                'espresso.steps.extract.watch': 'The coffee should flow like warm honey, not too fast or too slow.',
                'espresso.steps.serve.title': 'Stop and Serve',
                'espresso.steps.serve.desc': 'When you have the desired amount (about 2 oz for a double shot), press the button again to stop. Serve immediately.',
                'espresso.steps.serve.enjoy-label': 'Enjoy:',
                'espresso.steps.serve.enjoy': 'Fresh espresso is best consumed within 1-2 minutes of brewing.',
                
                // Troubleshooting
                'espresso.troubleshoot.fast-flow.title': 'Coffee Flows Too Fast',
                'espresso.troubleshoot.fast-flow.causes-label': 'Possible Causes:',
                'espresso.troubleshoot.fast-flow.cause1': 'Coffee ground too coarse',
                'espresso.troubleshoot.fast-flow.cause2': 'Not enough coffee in portafilter',
                'espresso.troubleshoot.fast-flow.cause3': 'Insufficient tamping pressure',
                'espresso.troubleshoot.fast-flow.solution-label': 'Solution:',
                'espresso.troubleshoot.fast-flow.solution': 'Use finer grind, add more coffee, or tamp with more pressure.',
                'espresso.troubleshoot.slow-flow.title': 'Coffee Flows Too Slow',
                'espresso.troubleshoot.slow-flow.causes-label': 'Possible Causes:',
                'espresso.troubleshoot.slow-flow.cause1': 'Coffee ground too fine',
                'espresso.troubleshoot.slow-flow.cause2': 'Too much coffee in portafilter',
                'espresso.troubleshoot.slow-flow.cause3': 'Over-tamping',
                'espresso.troubleshoot.slow-flow.solution-label': 'Solution:',
                'espresso.troubleshoot.slow-flow.solution': 'Use coarser grind, reduce coffee amount, or tamp with less pressure.',
                
                // Quick Reference
                'espresso.reference.title': 'Quick Reference Card',
                'espresso.reference.desc': 'Keep these key points in mind for perfect espresso every time',
                'espresso.reference.timing.title': 'Perfect Timing',
                'espresso.reference.timing.heating': 'Heating: 2-3 minutes',
                'espresso.reference.timing.extraction': 'Extraction: 25-30 seconds',
                'espresso.reference.timing.serve': 'Serve within: 1-2 minutes',
                'espresso.reference.amounts.title': 'Coffee Amounts',
                'espresso.reference.amounts.single': 'Single shot: 7-9g coffee',
                'espresso.reference.amounts.double': 'Double shot: 18-20g coffee',
                'espresso.reference.amounts.yield': 'Yield: 1-2 oz liquid',
                
                // More Troubleshooting
                'espresso.troubleshoot.not-hot.title': 'Coffee Not Hot Enough',
                'espresso.troubleshoot.not-hot.causes-label': 'Possible Causes:',
                'espresso.troubleshoot.not-hot.cause1': 'Machine not fully heated',
                'espresso.troubleshoot.not-hot.cause2': 'Cold cup',
                'espresso.troubleshoot.not-hot.cause3': 'Low water temperature',
                'espresso.troubleshoot.not-hot.solution-label': 'Solution:',
                'espresso.troubleshoot.not-hot.solution': 'Wait longer for heating, pre-warm cup, or check temperature settings.',
                'espresso.troubleshoot.no-water.title': 'No Water Flow',
                'espresso.troubleshoot.no-water.causes-label': 'Possible Causes:',
                'espresso.troubleshoot.no-water.cause1': 'Empty water reservoir',
                'espresso.troubleshoot.no-water.cause2': 'Blocked group head',
                'espresso.troubleshoot.no-water.cause3': 'Air in system',
                'espresso.troubleshoot.no-water.solution-label': 'Solution:',
                'espresso.troubleshoot.no-water.solution': 'Refill water, clean group head, or run cleaning cycle.',
                
                // Continue Learning
                'espresso.continue.title': 'Continue Learning',
                'espresso.continue.recipes.title': 'Coffee Recipes',
                'espresso.continue.recipes.desc': 'Learn to make lattes, cappuccinos, and more',
                'espresso.continue.maintenance.title': 'Maintenance Guide',
                'espresso.continue.maintenance.desc': 'Keep the machine clean and working perfectly',
                'espresso.continue.quota.title': 'Quota & Tips',
                'espresso.continue.quota.desc': 'Learn about supplies and contribution system',
                'espresso.reference.quality.title': 'Quality Indicators',
                'espresso.reference.quality.flow': 'Flow: Like warm honey',
                'espresso.reference.quality.color': 'Color: Rich, dark brown',
                'espresso.reference.quality.crema': 'Crema: Golden, thick layer',
                'espresso.reference.safety.title': 'Safety Reminders',
                'espresso.reference.safety.water': 'Check water level first',
                'espresso.reference.safety.hot': 'Never touch hot surfaces',
                'espresso.reference.safety.clean': 'Clean after each use',
                
                // Footer
                'footer.tagline': 'Making great coffee accessible to everyone in our office community.',
                'footer.quick-links': 'Quick Links',
                'footer.help.title': 'Need Help?',
                'footer.help.desc': 'If you encounter any issues with the coffee machine or have suggestions, please contact the office administration.',
                'footer.copyright': '© 2024 Cinte Coffee Corner. All rights reserved.',
                
                // Recipes Page
                'recipes.title': 'Coffee Recipes - Cinte Coffee Corner',
                'recipes.hero.title': 'Coffee Recipes Collection',
                'recipes.hero.desc': 'Discover delicious coffee drinks you can make with our DeLonghi EC 230 BK espresso machine',
                'recipes.filter.all': 'All Recipes',
                'recipes.filter.espresso': 'Espresso Based',
                'recipes.filter.milk': 'Milk Drinks',
                'recipes.filter.specialty': 'Specialty',
                'recipes.difficulty.easy': 'Easy',
                'recipes.difficulty.medium': 'Medium',
                'recipes.difficulty.hard': 'Hard',
                'recipes.time.minutes': 'min',
                'recipes.serving.single': 'serving',
                'recipes.serving.multiple': 'servings',
                'recipes.view-recipe': 'View Recipe',
                'recipes.milk-guide.title': 'Milk Steaming Guide',
                'recipes.milk-guide.desc': 'Learn how to create perfect milk foam for your drinks',
                'recipes.modal.ingredients': 'Ingredients',
                'recipes.modal.instructions': 'Instructions',
                'recipes.modal.tips': 'Pro Tips',
                'recipes.modal.close': 'Close',
                'recipes.categories.title': 'Choose Your Perfect Drink',
                'recipes.categories.desc': 'Filter recipes by type and difficulty level',
                
                // Maintenance Page
                'maintenance.title': 'Maintenance Guide - Cinte Coffee Corner',
                'maintenance.hero.title': 'Cleaning & Maintenance Guide',
                'maintenance.hero.desc': 'Keep our DeLonghi EC 230 BK in perfect condition with proper care',
                'maintenance.nav.daily': 'Daily Tasks',
                'maintenance.nav.weekly': 'Weekly Tasks',
                'maintenance.nav.monthly': 'Monthly Tasks',
                'maintenance.nav.supplies': 'Cleaning Supplies',
                'maintenance.daily.title': 'Daily Cleaning Tasks',
                'maintenance.daily.desc': 'Essential cleaning steps after each use to keep the machine hygienic and functioning',
                'maintenance.weekly.title': 'Weekly Deep Cleaning',
                'maintenance.weekly.desc': 'More thorough cleaning tasks to maintain optimal performance and hygiene',
                'maintenance.breadcrumb.home': 'Home',
                'maintenance.breadcrumb.guide': 'Maintenance Guide',
                'maintenance.hero.main-title': 'Machine Maintenance & Cleaning',
                'maintenance.hero.main-desc': 'Keep our espresso machine running smoothly with proper cleaning and maintenance. A well-maintained machine produces better coffee and lasts longer.',
                'maintenance.stats.daily': 'Daily Tasks',
                'maintenance.stats.weekly': 'Weekly Deep Clean',
                'maintenance.stats.monthly': 'Monthly Service',
                
                // Post-Use Cleaning
                'maintenance.post-use.title': 'Clean Immediately After Each Use',
                'maintenance.post-use.desc': 'Essential 2-minute cleanup routine to maintain hygiene and prepare for the next user',
                
                // Quota Page
                'quota.title': 'Quota & Tips - Cinte Coffee Corner',
                'quota.hero.title': 'Supply Quota & Contribution System',
                'quota.hero.desc': 'Learn about our monthly supply system, how quotas work, and how you can contribute to keep our coffee corner running smoothly for everyone.',
                'quota.breadcrumb.home': 'Home',
                'quota.breadcrumb.guide': 'Quota & Tips',
                'quota.stats.monthly': 'Monthly Quotas',
                'quota.stats.community': 'Community Driven',
                'quota.stats.donation': 'Donation Based',
                'quota.how-it-works.title': 'How Our System Works',
                'quota.how-it-works.desc': 'Understanding our community-driven coffee supply system',
                
                // Language Switcher
                'lang.english': 'English',
                'lang.indonesian': 'Bahasa Indonesia'
            },
            id: {
                // Navigation
                'nav.home': 'Beranda',
                'nav.espresso-guide': 'Panduan Espresso',
                'nav.recipes': 'Resep Kopi',
                'nav.maintenance': 'Perawatan',
                'nav.quota': 'Kuota & Tips',
                
                // Homepage
                'home.title': 'Cinte Coffee Corner - Panduan Lengkap Kamu',
                'home.hero.title': 'Jadi Master Kopi',
                'home.hero.highlight': 'di Kantor',
                'home.hero.description': 'Panduan lengkap buat kamu yang mau belajar pakai mesin espresso, bikin kopi enak, dan rawat coffee corner kita bersama. Dari yang baru mulai sampai yang udah jago!',
                'home.hero.start-learning': 'Yuk Mulai Belajar',
                'home.hero.view-recipes': 'Lihat Resep',
                'home.stats.self-service': 'Self-Service',
                'home.stats.self-service-desc': 'Buat semua karyawan kantor',
                'home.stats.premium-beans': 'Biji Kopi Premium',
                'home.stats.premium-beans-desc': 'Biji kopi berkualitas disediakan tiap bulan',
                'home.stats.community': 'Gotong Royong',
                'home.stats.community-desc': 'Patungan bareng buat jaga stok kopi',
                'home.stats.available': 'Buka 24/7',
                'home.stats.available-desc': 'Mau kopi kapan aja? Siap!',
                'home.sections.title': 'Semua yang Perlu Kamu Tahu',
                'home.sections.desc': 'Panduan lengkap buat bikin kopi yang mantap',
                'home.espresso.title': 'Cara Pakai Mesin Espresso',
                'home.espresso.desc': 'Tutorial step-by-step buat pakai mesin espresso kita dengan aman dan bener.',
                'home.espresso.link': 'Pelajari Yuk',
                'home.recipes.title': 'Resep-Resep Kopi',
                'home.recipes.desc': 'Mau tau cara bikin berbagai macam kopi? Dari espresso polos sampai latte yang fancy!',
                'home.recipes.link': 'Cek Resepnya',
                'home.maintenance.title': 'Cara Bersihin & Rawat',
                'home.maintenance.desc': 'Tips penting buat jaga mesin kita tetep bersih dan awet.',
                'home.maintenance.link': 'Baca Panduannya',
                'home.quota.title': 'Kuota & Patungan',
                'home.quota.desc': 'Info soal kuota bulanan, stok barang, dan cara ikut patungan buat dana kopi kita.',
                'home.quota.link': 'Info Selengkapnya',
                'home.tips.title': 'Tips Kilat buat Pemula',
                'home.tips.desc': 'Tips penting buat kamu yang baru mulai',
                'home.tips.tip1.title': 'Cek air dulu ya',
                'home.tips.tip1.desc': 'Pastiin tanki air udah penuh sebelum mulai',
                'home.tips.tip2.title': 'Panaskan mesinnya',
                'home.tips.tip2.desc': 'Tunggu 2-3 menit biar mesin panas dulu',
                'home.tips.tip3.title': 'Bersihin habis pakai',
                'home.tips.tip3.desc': 'Selalu bilas dan lap bersih setelah bikin kopi',
                'home.tips.tip4.title': 'Lapor kalau ada masalah',
                'home.tips.tip4.desc': 'Kasih tau admin kalau ada yang rusak atau gak beres',
                'home.cta.title': 'Siap Jadi Barista Kantor?',
                'home.cta.desc': 'Mulai dari panduan mesin espresso dulu, terus naik level bikin kopi-kopi keren!',
                'home.cta.button': 'Gas Mulai!',
                
                // Espresso Guide
                'espresso.title': 'Cara Pakai DeLonghi EC 230 BK - Cinte Coffee Corner',
                'espresso.breadcrumb.home': 'Beranda',
                'espresso.breadcrumb.guide': 'Panduan Mesin Espresso',
                'espresso.hero.title': 'Cara Pakai DeLonghi EC 230 BK',
                'espresso.hero.desc': 'Yuk belajar bikin espresso yang mantap pakai mesin DeLonghi EC 230 BK kita! Panduan ini bakal ngasih tau semua yang kamu perlu tau buat pakai mesin ini dengan aman dan bener.',
                'espresso.machine.specs': 'Spek Mesinnya',
                'espresso.machine.model': 'Model',
                'espresso.machine.type': 'Tipe',
                'espresso.machine.color': 'Warna',
                'espresso.machine.capacity': 'Kapasitas',
                'espresso.machine.pressure': 'Tekanan',
                'espresso.stats.read-time': 'Baca 5-10 menit',
                'espresso.stats.difficulty': 'Pemula Friendly',
                'espresso.stats.audience': 'Buat Semua',
                'espresso.nav.safety': 'Safety First',
                'espresso.nav.getting-started': 'Mulai Yuk',
                'espresso.nav.step-by-step': 'Step by Step',
                'espresso.nav.troubleshooting': 'Kalau Ada Masalah',
                'espresso.video.title': 'Video Tutorial',
                'espresso.video.desc': 'Tonton video lengkap cara pakai mesin DeLonghi EC 230 BK',
                'espresso.video.learn.title': 'Yang Bakal Kamu Pelajari',
                'espresso.video.learn.setup': 'Setup dan persiapan mesin yang detail',
                'espresso.video.learn.brewing': 'Cara bikin espresso step by step',
                'espresso.video.learn.steam': 'Cara pakai steam wand buat bikin foam susu',
                'espresso.video.learn.troubleshoot': 'Tips kalau ada masalah',
                'espresso.video.learn.maintenance': 'Cara bersihin dan rawat mesin',
                
                // Clean After Use CTA - Indonesian
                'espresso.clean-cta.title': '🎉 Keren! Sekarang Bersihin Habis Dipake',
                'espresso.clean-cta.desc': 'Kamu udah jago bikin espresso! Langkah terakhir dan paling penting adalah bersihin setelah dipake. Ini bikin mesin kita tetep perfect buat semua orang.',
                'espresso.clean-cta.time.title': 'Cuma 2 Menit',
                'espresso.clean-cta.time.desc': 'Rutinitas bersihin cepat yang beda banget dampaknya',
                'espresso.clean-cta.courtesy.title': 'Jadi Orang Baik',
                'espresso.clean-cta.courtesy.desc': 'Tinggalin area kerja yang bersih buat pecinta kopi selanjutnya',
                'espresso.clean-cta.machine.title': 'Jaga Mesin Kita',
                'espresso.clean-cta.machine.desc': 'Bersihin yang bener bikin mesin awet dan kopi makin enak',
                'espresso.clean-cta.steps.title': 'Langkah Penting Setelah Bikin Espresso:',
                'espresso.clean-cta.step1.title': 'Bersihin Portafilter',
                'espresso.clean-cta.step1.desc': 'Lepas dan bilas selagi hangat',
                'espresso.clean-cta.step2.title': 'Bersihin Steam Wand',
                'espresso.clean-cta.step2.desc': 'Semprot dan lap kalau habis pake susu',
                'espresso.clean-cta.step3.title': 'Lap Permukaan',
                'espresso.clean-cta.step3.desc': 'Bersihin meja dan area grinder',
                'espresso.clean-cta.button.main': 'Lihat Panduan Bersihin Lengkap',
                'espresso.clean-cta.button.recipes': 'Eksplorasi Resep Kopi',
                
                // Footer
                'footer.tagline': 'Bikin kopi enak jadi gampang buat semua orang di kantor kita.',
                'footer.quick-links': 'Link Cepat',
                'footer.help.title': 'Butuh Bantuan?',
                'footer.help.desc': 'Kalau ada masalah sama mesin kopi atau mau kasih saran, langsung aja hubungi admin kantor ya.',
                'footer.copyright': '© 2024 Cinte Coffee Corner. Hak cipta dilindungi.',
                
                // Recipes Page
                'recipes.title': 'Resep-Resep Kopi - Cinte Coffee Corner',
                'recipes.hero.title': 'Koleksi Resep Kopi',
                'recipes.hero.desc': 'Coba berbagai minuman kopi enak yang bisa kamu bikin pakai mesin DeLonghi EC 230 BK kita',
                'recipes.filter.all': 'Semua Resep',
                'recipes.filter.espresso': 'Berbasis Espresso',
                'recipes.filter.milk': 'Minuman Susu',
                'recipes.filter.specialty': 'Spesial',
                'recipes.difficulty.easy': 'Gampang',
                'recipes.difficulty.medium': 'Sedang',
                'recipes.difficulty.hard': 'Susah',
                'recipes.time.minutes': 'menit',
                'recipes.serving.single': 'porsi',
                'recipes.serving.multiple': 'porsi',
                'recipes.view-recipe': 'Lihat Resep',
                'recipes.milk-guide.title': 'Cara Bikin Foam Susu',
                'recipes.milk-guide.desc': 'Belajar bikin foam susu yang sempurna buat minuman kamu',
                'recipes.modal.ingredients': 'Bahan-bahan',
                'recipes.modal.instructions': 'Cara Bikinnya',
                'recipes.modal.tips': 'Tips Pro',
                'recipes.modal.close': 'Tutup',
                'recipes.categories.title': 'Pilih Minuman Favorit Kamu',
                'recipes.categories.desc': 'Filter resep berdasarkan jenis dan tingkat kesulitan',
                
                // Maintenance Page
                'maintenance.title': 'Panduan Perawatan - Cinte Coffee Corner',
                'maintenance.hero.title': 'Panduan Bersihin & Rawat Mesin',
                'maintenance.hero.desc': 'Jaga mesin DeLonghi EC 230 BK kita tetep bagus dengan perawatan yang bener',
                'maintenance.nav.daily': 'Tugas Harian',
                'maintenance.nav.weekly': 'Tugas Mingguan',
                'maintenance.nav.monthly': 'Tugas Bulanan',
                'maintenance.nav.supplies': 'Alat Pembersih',
                'maintenance.daily.title': 'Tugas Bersihin Harian',
                'maintenance.daily.desc': 'Langkah-langkah bersihin penting setelah dipake biar mesin tetep higienis dan berfungsi',
                'maintenance.weekly.title': 'Bersihin Mendalam Mingguan',
                'maintenance.weekly.desc': 'Tugas bersihin yang lebih teliti buat jaga performa dan kebersihan yang optimal',
                'maintenance.breadcrumb.home': 'Beranda',
                'maintenance.breadcrumb.guide': 'Panduan Perawatan',
                'maintenance.hero.main-title': 'Perawatan & Bersihin Mesin',
                'maintenance.hero.main-desc': 'Jaga mesin espresso kita tetep lancar dengan bersihin dan rawat yang bener. Mesin yang terawat bakal bikin kopi lebih enak dan awet.',
                'maintenance.stats.daily': 'Tugas Harian',
                'maintenance.stats.weekly': 'Bersihin Mendalam Mingguan',
                'maintenance.stats.monthly': 'Service Bulanan',
                
                // Post-Use Cleaning - Indonesian
                'maintenance.post-use.title': 'Bersihin Langsung Setelah Dipake',
                'maintenance.post-use.desc': 'Rutinitas bersihin penting 2 menit buat jaga kebersihan dan siap-siapkan buat pengguna selanjutnya',
                
                // Quick Navigation - Indonesian
                'maintenance.nav.post-use': 'Setelah Dipake',
                'maintenance.nav.daily': 'Bersihin Harian',
                'maintenance.nav.weekly': 'Tugas Mingguan',
                'maintenance.nav.monthly': 'Service Bulanan',
                'maintenance.nav.troubleshooting': 'Kalau Ada Masalah',
                
                // Post-Use Cleaning Details - Indonesian
                'maintenance.post-use.priority-badge': 'Paling Penting',
                'maintenance.post-use.portafilter.title': 'Bersihin Portafilter Langsung',
                'maintenance.post-use.portafilter.time': '30 detik',
                'maintenance.post-use.portafilter.step1': 'Lepas portafilter selagi masih hangat (lebih gampang dibersihin)',
                'maintenance.post-use.portafilter.step2': 'Ketok-ketok buat keluarin ampas kopi ke tempat sampah/kompos',
                'maintenance.post-use.portafilter.step3': 'Bilas saringan sampai bersih pake air panas',
                'maintenance.post-use.portafilter.step4': 'Pake sikat buat gosok sisa-sisa kopi yang bandel',
                'maintenance.post-use.portafilter.step5': 'Kering-keringin terus pasang lagi ke mesin',
                'maintenance.post-use.portafilter.tip': 'Tips Pro: Jangan pernah ninggalin ampas kopi di portafilter - bakal jadi asam dan noda logamnya.',
                
                'maintenance.post-use.steam.title': 'Bersihin Steam Wand Dalam-Dalam',
                'maintenance.post-use.steam.time': '45 detik',
                'maintenance.post-use.steam.step1': 'Semprotin steam wand selama 3-4 detik buat bersihin sisa susu',
                'maintenance.post-use.steam.step2': 'Lap bagian luar pake kain mikrofiber yang lembab',
                'maintenance.post-use.steam.step3': 'Bersihin sisa susu dari ujung wand dan sekitarnya',
                'maintenance.post-use.steam.step4': 'Cek ada penumpukan susu di bagian bawah',
                'maintenance.post-use.steam.step5': 'Semprot terakhir buat pastiin steam keluar lancar',
                'maintenance.post-use.steam.warning': 'Penting Banget: Susu kering bikin bakteri dan nyumbat lubang steam. Bersihin langsung setelah dipake!',
                
                'maintenance.post-use.workspace.title': 'Bersihin Area Kerja',
                'maintenance.post-use.workspace.time': '45 detik',
                'maintenance.post-use.workspace.step1': 'Lap permukaan meja buat bersihin ampas kopi dan tumpahan',
                'maintenance.post-use.workspace.step2': 'Bersihin area sekitar grinder tempat ampas berserakan',
                'maintenance.post-use.workspace.step3': 'Kosongin drip tray kalau udah kumpul air',
                'maintenance.post-use.workspace.step4': 'Cek area lantai ada ampas kopi yang jatoh',
                'maintenance.post-use.workspace.step5': 'Kembaliin alat-alat ke tempatnya',
                'maintenance.post-use.workspace.courtesy': 'Sopan Santun: Area kerja yang bersih adalah hadiah buat pecinta kopi selanjutnya!',
                
                // Post-Use Checklist - Indonesian
                'maintenance.post-use.checklist.title': 'Checklist Cepat Setelah Dipake',
                'maintenance.post-use.checklist.item1': 'Portafilter dibersihkan dan ampas dibuang',
                'maintenance.post-use.checklist.item2': 'Steam wand disemprot dan dilap bersih',
                'maintenance.post-use.checklist.item3': 'Meja dan area grinder dilap',
                'maintenance.post-use.checklist.item4': 'Gak ada ampas kopi di lantai atau permukaan',
                'maintenance.post-use.checklist.item5': 'Semua alat dikembaliin ke tempat yang bener',
                'maintenance.post-use.checklist.total-time': 'Total Waktu: Di bawah 2 menit',
                'maintenance.post-use.checklist.impact': 'Dampak: Beda banget buat semua orang!',
                
                // Daily Cleaning Details - Indonesian
                'maintenance.daily.step1.title': 'Bersihin Portafilter',
                'maintenance.daily.step1.desc': 'Lepas portafilter dan bilas sampai bersih pake air panas. Pake sikat pembersih buat bersihin sisa kopi dari saringan.',
                'maintenance.daily.step1.tip': 'Penting: Jangan pake sabun di portafilter - air panas dan gosok aja udah cukup.',
                
                'maintenance.daily.step2.title': 'Siram Group Head',
                'maintenance.daily.step2.desc': 'Jalanin shot kosong (tanpa kopi) buat siram sisa minyak kopi dan partikel dari group head.',
                'maintenance.daily.step2.tip': 'Tips: Ini juga bantu jaga suhu yang tepat buat pengguna selanjutnya.',
                
                'maintenance.daily.step3.title': 'Bersihin Steam Wand',
                'maintenance.daily.step3.desc': 'Lap steam wand pake kain lembab dan semprot sebentar buat bersihin sisa susu. Ini mencegah penumpukan bakteri.',
                'maintenance.daily.step3.tip': 'Kritis: Selalu lakuin ini langsung setelah steam susu - susu kering lebih susah dibersihin.',
                
                'maintenance.daily.step4.title': 'Bersihin Permukaan & Ampas Menyeluruh',
                'maintenance.daily.step4.desc': 'Bersihin semua permukaan tempat ampas kopi berserakan - sekitar grinder, di meja, dan cek lantai. Pake kain lembab buat permukaan dan sapu/vacuum buat lantai.',
                'maintenance.daily.step4.tips.title': 'Tips Bersihin Pro:',
                'maintenance.daily.step4.tip1': 'Ampas kopi nempel di permukaan basah - kering dulu, baru lap',
                'maintenance.daily.step4.tip2': 'Cek belakang mesin tempat ampas suka sembunyi',
                'maintenance.daily.step4.tip3': 'Pake sikat kecil buat keluarin ampas dari celah-celah mesin',
                'maintenance.daily.step4.tip4': 'Jangan lupa area di bawah dosing cup grinder',
                
                'maintenance.daily.step5.title': 'Kosongin dan Bilas Drip Tray',
                'maintenance.daily.step5.desc': 'Lepas drip tray, kosongin, dan bilas cepat. Pasang lagi kalau udah bersih dan kering.',
                'maintenance.daily.step5.tip': 'Kebersihan: Air yang menggenang di drip tray bisa jadi sarang bakteri dan bau.',
                
                // Weekly Maintenance - Indonesian
                'maintenance.weekly.item1.title': 'Bersihin Water Reservoir Dalam-Dalam',
                'maintenance.weekly.item1.desc': 'Lepas water reservoir, cuci bersih pake air sabun hangat, bilas sampai bersih, dan isi ulang pake air segar. Cek ada penumpukan mineral.',
                
                'maintenance.weekly.item2.title': 'Gosok Drip Tray',
                'maintenance.weekly.item2.desc': 'Cuci drip tray sampai bersih pake air sabun hangat. Pake sikat buat bersihin noda atau penumpukan yang bandel.',
                
                'maintenance.weekly.item3.title': 'Bersihin Steam Wand Dalam-Dalam',
                'maintenance.weekly.item3.desc': 'Rendam ujung steam wand di cairan pembersih susu selama 10 menit, terus gosok dan bilas sampai bersih. Ini bersihin penumpukan protein susu.',
                
                'maintenance.weekly.item4.title': 'Bersihin Coffee Grinder',
                'maintenance.weekly.item4.desc': 'Kosongin hopper biji, lap bersih, dan pake tablet pembersih grinder kalau ada. Bersihin burr sesuai instruksi pabrik.',
                
                'maintenance.weekly.item5.title': 'Poles Bagian Luar',
                'maintenance.weekly.item5.desc': 'Bersihin bagian luar pake pembersih stainless steel yang sesuai. Poles buat bersihin sidik jari dan noda air biar keliatan profesional.',
                
                // Monthly Service - Indonesian
                'maintenance.monthly.title': 'Service Mendalam Bulanan',
                'maintenance.monthly.desc': 'Tugas perawatan komprehensif buat cegah masalah dan perpanjang umur mesin',
                
                'maintenance.monthly.descaling.title': 'Proses Descaling',
                'maintenance.monthly.descaling.desc': 'Bersihin penumpukan mineral dari komponen internal pake cairan descaling. Ini penting banget buat umur mesin dan rasa kopi.',
                'maintenance.monthly.descaling.step1': 'Campur cairan descaling sesuai instruksi',
                'maintenance.monthly.descaling.step2': 'Isi water reservoir pake cairan',
                'maintenance.monthly.descaling.step3': 'Jalanin beberapa siklus brewing sesuai petunjuk',
                'maintenance.monthly.descaling.step4': 'Bilas sampai bersih pake air segar',
                'maintenance.monthly.descaling.step5': 'Tes rasa sebelum dipake normal',
                
                'maintenance.monthly.component.title': 'Cek Komponen Internal',
                'maintenance.monthly.component.desc': 'Periksa gasket, seal, dan bagian yang bergerak ada keausan. Ganti komponen yang rusak buat cegah bocor dan jaga tekanan.',
                'maintenance.monthly.component.check1': 'Cek kondisi gasket portafilter',
                'maintenance.monthly.component.check2': 'Periksa saluran air ada bocor',
                'maintenance.monthly.component.check3': 'Tes pembacaan pressure gauge',
                'maintenance.monthly.component.check4': 'Pastiin stabilitas suhu',
                'maintenance.monthly.component.check5': 'Dengerin ada suara aneh',
                
                'maintenance.monthly.calibration.title': 'Cek Kalibrasi',
                'maintenance.monthly.calibration.desc': 'Pastiin setting suhu dan tekanan dalam rentang optimal. Sesuaikan kalau perlu buat hasil ekstraksi terbaik.',
                'maintenance.monthly.calibration.check1': 'Ukur suhu brewing (195-205°F)',
                'maintenance.monthly.calibration.check2': 'Cek tekanan brewing (9 bar)',
                'maintenance.monthly.calibration.check3': 'Tes timing ekstraksi',
                'maintenance.monthly.calibration.check4': 'Pastiin tekanan steam',
                'maintenance.monthly.calibration.check5': 'Catat penyesuaian yang dilakukan',
                
                // Cleaning Supplies - Indonesian
                'maintenance.supplies.title': 'Alat Pembersih Penting',
                'maintenance.supplies.desc': 'Barang-barang yang kamu butuhin buat jaga mesin kopi kita dalam kondisi sempurna',
                
                'maintenance.supplies.daily.title': 'Alat Harian',
                'maintenance.supplies.daily.item1': 'Kain mikrofiber',
                'maintenance.supplies.daily.item2': 'Sikat pembersih (group head)',
                'maintenance.supplies.daily.item3': 'Sabun cuci piring ringan',
                'maintenance.supplies.daily.item4': 'Air bersih',
                
                'maintenance.supplies.weekly.title': 'Alat Mingguan',
                'maintenance.supplies.weekly.item1': 'Pembersih saluran susu',
                'maintenance.supplies.weekly.item2': 'Poles stainless steel',
                'maintenance.supplies.weekly.item3': 'Tablet pembersih grinder',
                'maintenance.supplies.weekly.item4': 'Cairan sanitasi',
                
                'maintenance.supplies.monthly.title': 'Alat Bulanan',
                'maintenance.supplies.monthly.item1': 'Cairan descaling',
                'maintenance.supplies.monthly.item2': 'Pengganti filter air',
                'maintenance.supplies.monthly.item3': 'Gasket pengganti',
                'maintenance.supplies.monthly.item4': 'Alat kalibrasi',
                
                // Warning Signs - Indonesian
                'maintenance.warning.title': 'Tanda Bahaya & Solusi',
                'maintenance.warning.desc': 'Kenali tanda-tanda ini yang nunjukin perawatan diperlukan',
                
                'maintenance.warning.urgent.title': 'Perlu Tindakan Langsung',
                'maintenance.warning.urgent.item1': 'Gak ada aliran air: Cek reservoir, bersihin group head',
                'maintenance.warning.urgent.item2': 'Suara aneh: Stop pake, hubungi maintenance',
                'maintenance.warning.urgent.item3': 'Bocor air: Matiin mesin, lapor langsung',
                'maintenance.warning.urgent.item4': 'Masalah listrik: Cabut dan lapor',
                
                'maintenance.warning.moderate.title': 'Jadwalin Maintenance Segera',
                'maintenance.warning.moderate.item1': 'Ekstraksi lambat: Perlu descaling',
                'maintenance.warning.moderate.item2': 'Rasa pahit: Perlu bersihin dalam',
                'maintenance.warning.moderate.item3': 'Steam lemah: Steam wand tersumbat',
                'maintenance.warning.moderate.item4': 'Masalah suhu: Perlu kalibrasi',
                
                'maintenance.warning.minor.title': 'Perawatan Rutin',
                'maintenance.warning.minor.item1': 'Penumpukan mineral: Jadwal descaling rutin',
                'maintenance.warning.minor.item2': 'Sisa kopi: Rutinitas bersihin harian',
                'maintenance.warning.minor.item3': 'Tampilan kusam: Poles mingguan',
                'maintenance.warning.minor.item4': 'Shot gak konsisten: Cek setting grinder',
                
                // Maintenance Schedule - Indonesian
                'maintenance.schedule.title': 'Jadwal Perawatan',
                'maintenance.schedule.desc': 'Ikutin jadwal ini buat jaga mesin kopi kita dalam kondisi sempurna',
                'maintenance.schedule.header.task': 'Tugas',
                'maintenance.schedule.header.frequency': 'Frekuensi',
                'maintenance.schedule.header.time': 'Waktu Dibutuhkan',
                'maintenance.schedule.header.responsibility': 'Tanggung Jawab',
                
                'maintenance.schedule.task1': 'Bersihin dasar setelah dipake',
                'maintenance.schedule.freq1': 'Setelah tiap dipake',
                'maintenance.schedule.time1': '2-3 menit',
                'maintenance.schedule.resp1': 'Setiap pengguna',
                
                'maintenance.schedule.task2': 'Bersihin steam wand dalam',
                'maintenance.schedule.freq2': 'Harian',
                'maintenance.schedule.time2': '5 menit',
                'maintenance.schedule.resp2': 'Pengguna terakhir hari itu',
                
                'maintenance.schedule.task3': 'Refresh water reservoir',
                'maintenance.schedule.freq3': 'Mingguan',
                'maintenance.schedule.time3': '10 menit',
                'maintenance.schedule.resp3': 'Sukarelawan',
                
                'maintenance.schedule.task4': 'Bersihin dalam lengkap',
                'maintenance.schedule.freq4': 'Mingguan',
                'maintenance.schedule.time4': '30 menit',
                'maintenance.schedule.resp4': 'Sukarelawan',
                
                'maintenance.schedule.task5': 'Proses descaling',
                'maintenance.schedule.freq5': 'Bulanan',
                'maintenance.schedule.time5': '45 menit',
                'maintenance.schedule.resp5': 'Admin kantor',
                
                'maintenance.schedule.task6': 'Service profesional',
                'maintenance.schedule.freq6': 'Triwulan',
                'maintenance.schedule.time6': '2 jam',
                'maintenance.schedule.resp6': 'Teknisi service',
                
                // Navigation - Indonesian
                'maintenance.continue.title': 'Lanjut Belajar',
                'maintenance.continue.espresso.title': 'Panduan Espresso',
                'maintenance.continue.espresso.desc': 'Kuasai dasar-dasar bikin espresso',
                'maintenance.continue.recipes.title': 'Resep Kopi',
                'maintenance.continue.recipes.desc': 'Belajar bikin latte, cappuccino, dan lainnya',
                'maintenance.continue.quota.title': 'Kuota & Tips',
                'maintenance.continue.quota.desc': 'Pelajari tentang persediaan dan sistem kontribusi',
                
                // Quota Page
                'quota.title': 'Kuota & Tips - Cinte Coffee Corner',
                'quota.hero.title': 'Sistem Kuota & Kontribusi',
                'quota.hero.desc': 'Pelajari tentang sistem persediaan bulanan kita, gimana kuota bekerja, dan cara kamu bisa kontribusi buat jaga coffee corner kita tetep jalan lancar buat semua.',
                'quota.breadcrumb.home': 'Beranda',
                'quota.breadcrumb.guide': 'Kuota & Tips',
                'quota.stats.monthly': 'Kuota Bulanan',
                'quota.stats.community': 'Dikelola Bersama',
                'quota.stats.donation': 'Berbasis Donasi',
                'quota.how-it-works.title': 'Gimana Sistem Kita Bekerja',
                'quota.how-it-works.desc': 'Memahami sistem persediaan kopi yang dikelola bersama',
                'espresso.safety.title': 'Keamanan Dulu',
                'espresso.safety.desc': 'Sebelum pakai mesin espresso, baca dulu panduan keamanan penting ini',
                'espresso.getting-started.title': 'Mulai Yuk',
                'espresso.getting-started.desc': 'Persiapan penting sebelum bikin kopi pertama kamu',
                'espresso.step-by-step.title': 'Langkah Demi Langkah Bikin Espresso',
                'espresso.step-by-step.desc': 'Ikutin langkah detail ini buat bikin shot espresso yang sempurna',
                'espresso.troubleshooting.title': 'Solusi Masalah Umum',
                'espresso.troubleshooting.desc': 'Solusi buat masalah-masalah yang sering kamu temui',
                'espresso.safety.hot-surfaces.title': 'Permukaan Panas',
                'espresso.safety.hot-surfaces.desc': 'Mesinnya jadi sangat panas waktu dipake. Jangan pernah sentuh group head, steam wand, atau hot plate tanpa pelindung.',
                'espresso.safety.water-safety.title': 'Keamanan Air',
                'espresso.safety.water-safety.desc': 'Selalu cek level air sebelum dipake. Jangan pernah nyalain mesin tanpa air yang cukup di tangkinya.',
                'espresso.safety.proper-handling.title': 'Cara Pegang yang Bener',
                'espresso.safety.proper-handling.desc': 'Pake handle dan area pegangan yang udah disediain. Jaga area kerja tetep bersih dan kering biar gak slip.',
                'espresso.safety.emergency.title': 'Darurat',
                'espresso.safety.emergency.desc': 'Tau dimana tombol power dan keran air. Langsung lapor kalau ada yang rusak.',
                
                // Getting Started Section
                'espresso.getting-started.check-water.title': 'Cek Level Air',
                'espresso.getting-started.check-water.desc': 'Pastikan tangki air diisi dengan air dingin yang segar. Level minimum harus di atas garis "MIN".',
                'espresso.getting-started.power-on.title': 'Nyalain Mesinnya',
                'espresso.getting-started.power-on.desc': 'Nyalain tombol power utama. Lampu indikator akan nyala waktu mesin lagi panasin.',
                'espresso.getting-started.wait-heating.title': 'Tunggu Sampai Panas',
                'espresso.getting-started.wait-heating.desc': 'Tunggu 2-3 menit biar mesin mencapai suhu brewing yang optimal. Lampu ready akan nyala kalau udah siap.',
                'espresso.getting-started.prepare-cup.title': 'Siapin Cangkir',
                'espresso.getting-started.prepare-cup.desc': 'Taro cangkir espresso atau gelas shot yang bersih di bawah group head. Bisa dipanasin dulu kalau mau.',
                
                // Step by Step Process
                'espresso.steps.grind.title': 'Giling Kopi Segar',
                'espresso.steps.grind.desc': 'Pake coffee grinder yang udah disediain buat giling biji kopi sampai halus. Butuh sekitar 18-20 gram buat double shot.',
                'espresso.steps.grind.tip-label': 'Tips:',
                'espresso.steps.grind.tip': 'Giling seperlunya aja buat langsung dipake biar tetep segar.',
                'espresso.steps.fill.title': 'Isi Portafilter',
                'espresso.steps.fill.desc': 'Lepas portafilter dari group head. Isi dengan kopi yang udah digiling, ratain.',
                'espresso.steps.fill.note-label': 'Catatan:',
                'espresso.steps.fill.note': 'Jangan terlalu penuh - kopinya harus rata dengan bibir portafilter.',
                'espresso.steps.tamp.title': 'Tamp Kopinya',
                'espresso.steps.tamp.desc': 'Pake tamper buat tekan kopi yang udah digiling dengan rata, sekitar 30 pounds tekanan. Permukaannya harus rata dan halus.',
                'espresso.steps.tamp.important-label': 'Penting:',
                'espresso.steps.tamp.important': 'Tekanan tamping yang konsisten bikin ekstraksi jadi rata.',
                'espresso.steps.lock.title': 'Kunci Portafilter',
                'espresso.steps.lock.desc': 'Masukin portafilter ke group head dan putar searah jarum jam sampai terkunci dengan kuat.',
                'espresso.steps.lock.check-label': 'Cek:',
                'espresso.steps.lock.check': 'Handle portafilter harus nunjuk ke depan atau agak ke kanan.',
                'espresso.steps.extract.title': 'Mulai Ekstraksi',
                'espresso.steps.extract.desc': 'Tekan tombol brew buat mulai ekstraksi. Shot yang bagus butuh waktu 25-30 detik buat double shot.',
                'espresso.steps.extract.watch-label': 'Perhatiin:',
                'espresso.steps.extract.watch': 'Kopinya harus ngalir kayak madu hangat, jangan terlalu cepet atau terlalu lambat.',
                'espresso.steps.serve.title': 'Stop dan Sajikan',
                'espresso.steps.serve.desc': 'Kalau udah dapet jumlah yang diinginkan (sekitar 2 oz buat double shot), tekan tombolnya lagi buat stop. Langsung sajikan.',
                'espresso.steps.serve.enjoy-label': 'Nikmatin:',
                'espresso.steps.serve.enjoy': 'Espresso segar paling enak diminum dalam 1-2 menit setelah dibikin.',
                
                // Troubleshooting
                'espresso.troubleshoot.fast-flow.title': 'Kopi Ngalir Terlalu Cepet',
                'espresso.troubleshoot.fast-flow.causes-label': 'Kemungkinan Penyebab:',
                'espresso.troubleshoot.fast-flow.cause1': 'Kopi digiling terlalu kasar',
                'espresso.troubleshoot.fast-flow.cause2': 'Kopi di portafilter kurang',
                'espresso.troubleshoot.fast-flow.cause3': 'Tekanan tamping kurang',
                'espresso.troubleshoot.fast-flow.solution-label': 'Solusi:',
                'espresso.troubleshoot.fast-flow.solution': 'Pake gilingan yang lebih halus, tambahin kopi, atau tamp dengan tekanan lebih kuat.',
                'espresso.troubleshoot.slow-flow.title': 'Kopi Ngalir Terlalu Lambat',
                'espresso.troubleshoot.slow-flow.causes-label': 'Kemungkinan Penyebab:',
                'espresso.troubleshoot.slow-flow.cause1': 'Kopi digiling terlalu halus',
                'espresso.troubleshoot.slow-flow.cause2': 'Kopi di portafilter terlalu banyak',
                'espresso.troubleshoot.slow-flow.cause3': 'Over-tamping',
                'espresso.troubleshoot.slow-flow.solution-label': 'Solusi:',
                'espresso.troubleshoot.slow-flow.solution': 'Pake gilingan yang lebih kasar, kurangin jumlah kopi, atau tamp dengan tekanan lebih ringan.',
                
                // Quick Reference
                'espresso.reference.title': 'Kartu Referensi Cepat',
                'espresso.reference.desc': 'Inget poin-poin penting ini buat bikin espresso yang sempurna setiap saat',
                'espresso.reference.timing.title': 'Waktu yang Tepat',
                'espresso.reference.timing.heating': 'Pemanasan: 2-3 menit',
                'espresso.reference.timing.extraction': 'Ekstraksi: 25-30 detik',
                'espresso.reference.timing.serve': 'Sajikan dalam: 1-2 menit',
                'espresso.reference.amounts.title': 'Jumlah Kopi',
                'espresso.reference.amounts.single': 'Single shot: 7-9g kopi',
                'espresso.reference.amounts.double': 'Double shot: 18-20g kopi',
                'espresso.reference.amounts.yield': 'Hasil: 1-2 oz cairan',
                
                // More Troubleshooting
                'espresso.troubleshoot.not-hot.title': 'Kopi Kurang Panas',
                'espresso.troubleshoot.not-hot.causes-label': 'Kemungkinan Penyebab:',
                'espresso.troubleshoot.not-hot.cause1': 'Mesin belum panas sempurna',
                'espresso.troubleshoot.not-hot.cause2': 'Cangkir dingin',
                'espresso.troubleshoot.not-hot.cause3': 'Suhu air rendah',
                'espresso.troubleshoot.not-hot.solution-label': 'Solusi:',
                'espresso.troubleshoot.not-hot.solution': 'Tunggu lebih lama buat pemanasan, panasin cangkir dulu, atau cek pengaturan suhu.',
                'espresso.troubleshoot.no-water.title': 'Air Gak Keluar',
                'espresso.troubleshoot.no-water.causes-label': 'Kemungkinan Penyebab:',
                'espresso.troubleshoot.no-water.cause1': 'Tangki air kosong',
                'espresso.troubleshoot.no-water.cause2': 'Group head tersumbat',
                'espresso.troubleshoot.no-water.cause3': 'Ada udara di sistem',
                'espresso.troubleshoot.no-water.solution-label': 'Solusi:',
                'espresso.troubleshoot.no-water.solution': 'Isi ulang air, bersihin group head, atau jalanin siklus pembersihan.',
                
                // Continue Learning
                'espresso.continue.title': 'Lanjut Belajar',
                'espresso.continue.recipes.title': 'Resep-Resep Kopi',
                'espresso.continue.recipes.desc': 'Belajar bikin latte, cappuccino, dan lainnya',
                'espresso.continue.maintenance.title': 'Panduan Perawatan',
                'espresso.continue.maintenance.desc': 'Jaga mesin tetep bersih dan bekerja dengan sempurna',
                'espresso.continue.quota.title': 'Kuota & Tips',
                'espresso.continue.quota.desc': 'Belajar tentang persediaan dan sistem kontribusi',
                'espresso.reference.quality.title': 'Indikator Kualitas',
                'espresso.reference.quality.flow': 'Aliran: Kayak madu hangat',
                'espresso.reference.quality.color': 'Warna: Coklat tua yang kaya',
                'espresso.reference.quality.crema': 'Crema: Lapisan emas yang tebal',
                'espresso.reference.safety.title': 'Pengingat Keamanan',
                'espresso.reference.safety.water': 'Cek level air dulu',
                'espresso.reference.safety.hot': 'Jangan pernah sentuh permukaan panas',
                'espresso.reference.safety.clean': 'Bersihin setelah dipake',
                
                // Language Switcher
                'lang.english': 'English',
                'lang.indonesian': 'Bahasa Indonesia'
            }
        };
    }

    // Create language switcher UI
    createLanguageSwitcher() {
        const navbar = document.querySelector('.navbar .nav-container');
        if (!navbar) return;

        const langSwitcher = document.createElement('div');
        langSwitcher.className = 'language-switcher';
        langSwitcher.innerHTML = `
            <div class="lang-dropdown">
                <button class="lang-button" aria-label="Language Selector">
                    <i class="fas fa-globe"></i>
                    <span class="lang-text">${this.currentLanguage === 'en' ? 'EN' : 'ID'}</span>
                    <i class="fas fa-chevron-down"></i>
                </button>
                <div class="lang-menu">
                    <button class="lang-option ${this.currentLanguage === 'en' ? 'active' : ''}" data-lang="en">
                        <span class="flag">🇺🇸</span>
                        <span>${this.translations.en['lang.english']}</span>
                    </button>
                    <button class="lang-option ${this.currentLanguage === 'id' ? 'active' : ''}" data-lang="id">
                        <span class="flag">🇮🇩</span>
                        <span>${this.translations.id['lang.indonesian']}</span>
                    </button>
                </div>
            </div>
        `;

        // Insert before hamburger menu
        const hamburger = navbar.querySelector('.hamburger');
        navbar.insertBefore(langSwitcher, hamburger);

        this.initLanguageSwitcherEvents();
    }

    // Initialize language switcher events
    initLanguageSwitcherEvents() {
        const langButton = document.querySelector('.lang-button');
        const langMenu = document.querySelector('.lang-menu');
        const langOptions = document.querySelectorAll('.lang-option');

        // Toggle dropdown
        langButton.addEventListener('click', (e) => {
            e.stopPropagation();
            langMenu.classList.toggle('show');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', () => {
            langMenu.classList.remove('show');
        });

        // Handle language selection
        langOptions.forEach(option => {
            option.addEventListener('click', (e) => {
                const selectedLang = e.currentTarget.dataset.lang;
                this.switchLanguage(selectedLang);
            });
        });
    }

    // Switch language
    switchLanguage(lang) {
        if (!this.supportedLanguages.includes(lang)) return;

        this.currentLanguage = lang;
        localStorage.setItem('cinte-coffee-language', lang);
        
        // Update UI
        this.applyTranslations();
        this.updateLanguageSwitcher();
        
        // Show language change notification
        this.showLanguageNotification(lang);
        
        // Track language change with analytics
        if (window.analyticsManager) {
            window.analyticsManager.trackEvent('language_change', {
                event_category: 'user_preference',
                new_language: lang,
                page_name: window.analyticsManager.getPageName()
            });
        }
    }

    // Apply translations to the page
    applyTranslations() {
        const elements = document.querySelectorAll('[data-translate]');
        console.log(`🌍 Applying translations for language: ${this.currentLanguage}`);
        console.log(`📝 Found ${elements.length} elements to translate`);
        
        elements.forEach(element => {
            const key = element.dataset.translate;
            const translation = this.translations[this.currentLanguage][key];
            if (translation) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translation;
                } else {
                    element.textContent = translation;
                }
                console.log(`✅ Translated ${key}: ${translation}`);
            } else {
                console.warn(`❌ Missing translation for key: ${key} (language: ${this.currentLanguage})`);
            }
        });

        // Update page title
        const titleKey = document.body.dataset.pageTitle;
        if (titleKey && this.translations[this.currentLanguage][titleKey]) {
            document.title = this.translations[this.currentLanguage][titleKey];
        }

        // Update document language attribute
        document.documentElement.lang = this.currentLanguage;
    }

    // Update language switcher UI
    updateLanguageSwitcher() {
        const langText = document.querySelector('.lang-text');
        const langOptions = document.querySelectorAll('.lang-option');
        
        if (langText) {
            langText.textContent = this.currentLanguage === 'en' ? 'EN' : 'ID';
        }

        langOptions.forEach(option => {
            option.classList.toggle('active', option.dataset.lang === this.currentLanguage);
        });

        // Close dropdown
        document.querySelector('.lang-menu').classList.remove('show');
    }

    // Show language change notification
    showLanguageNotification(lang) {
        const notification = document.createElement('div');
        notification.className = 'lang-notification';
        notification.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <span>${lang === 'en' ? 'Language changed to English' : 'Bahasa diubah ke Bahasa Indonesia'}</span>
        `;

        document.body.appendChild(notification);

        // Show notification
        setTimeout(() => notification.classList.add('show'), 100);

        // Hide notification
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    // Get current language
    getCurrentLanguage() {
        return this.currentLanguage;
    }

    // Get translation
    t(key) {
        return this.translations[this.currentLanguage][key] || key;
    }
}

// Initialize language manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.languageManager = new LanguageManager();
}); 