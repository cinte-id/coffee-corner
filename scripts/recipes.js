// Recipe data
const recipes = {
    espresso: {
        title: "Classic Espresso",
        time: "2 minutes",
        difficulty: "Easy",
        serving: "1 shot",
        ingredients: [
            "18-20g freshly ground coffee beans (fine grind)",
            "Fresh water for the machine"
        ],
        instructions: [
            "Ensure the espresso machine is heated and ready (indicator light on)",
            "Grind 18-20g of coffee beans to a fine consistency",
            "Fill the portafilter with ground coffee, distributing evenly",
            "Tamp the coffee grounds with firm, even pressure (about 30 lbs)",
            "Lock the portafilter into the group head",
            "Place your espresso cup under the spout",
            "Start extraction - aim for 25-30 seconds for a double shot",
            "Stop extraction when you have 2oz of espresso",
            "Serve immediately for best flavor"
        ],
        tips: "Look for a golden crema on top - this indicates proper extraction. The espresso should flow like warm honey, not too fast or too slow."
    },
    
    americano: {
        title: "Americano",
        time: "3 minutes",
        difficulty: "Easy",
        serving: "1 cup",
        ingredients: [
            "1 double shot of espresso (2oz)",
            "4-6oz hot water (200°F)"
        ],
        instructions: [
            "Prepare a double shot of espresso following the espresso recipe",
            "Heat water to about 200°F (just off boiling)",
            "Pour the hot water into a larger cup or mug",
            "Add the freshly brewed espresso to the hot water",
            "Stir gently if desired",
            "Serve immediately"
        ],
        tips: "Add the espresso to the water, not water to espresso, to preserve the crema. Adjust water amount to taste preference."
    },
    
    cappuccino: {
        title: "Cappuccino",
        time: "4 minutes",
        difficulty: "Medium",
        serving: "1 cup",
        ingredients: [
            "1 double shot of espresso (2oz)",
            "4oz cold whole milk",
            "Optional: cocoa powder or cinnamon for dusting"
        ],
        instructions: [
            "Prepare a double shot of espresso in a 6oz cappuccino cup",
            "Pour cold milk into the steaming pitcher (fill 1/3 full)",
            "Insert steam wand just below milk surface",
            "Turn on steam and create foam for first 5 seconds",
            "Plunge wand deeper and heat milk to 150-160°F",
            "Turn off steam and tap pitcher to settle foam",
            "Pour steamed milk into espresso, holding back foam with spoon",
            "Spoon the foam on top to create a thick layer",
            "Dust with cocoa powder if desired"
        ],
        tips: "Perfect cappuccino has equal parts espresso, steamed milk, and foam. The foam should be thick enough to support a spoon of sugar."
    },
    
    latte: {
        title: "Latte",
        time: "5 minutes",
        difficulty: "Medium",
        serving: "1 cup",
        ingredients: [
            "1 double shot of espresso (2oz)",
            "6oz cold whole milk",
            "Optional: flavored syrup"
        ],
        instructions: [
            "Prepare a double shot of espresso in a large cup or mug",
            "Add flavored syrup if using",
            "Pour cold milk into steaming pitcher (fill 1/3 full)",
            "Create microfoam by keeping steam wand just below surface briefly",
            "Heat milk to 150-160°F while creating smooth, velvety texture",
            "Tap pitcher and swirl to integrate foam",
            "Pour steamed milk into espresso from a height of 3-4 inches",
            "Create latte art by pouring closer to surface at the end",
            "Serve immediately"
        ],
        tips: "Latte should have more steamed milk than foam. Practice your pouring technique to create beautiful latte art patterns."
    },
    
    macchiato: {
        title: "Macchiato",
        time: "3 minutes",
        difficulty: "Medium",
        serving: "1 shot",
        ingredients: [
            "1 double shot of espresso (2oz)",
            "1-2 tablespoons steamed milk foam"
        ],
        instructions: [
            "Prepare a double shot of espresso in a small cup",
            "Steam a small amount of milk to create foam",
            "Using a spoon, add just a dollop of foam to 'mark' the espresso",
            "The foam should sit on top without mixing",
            "Serve immediately in the small cup"
        ],
        tips: "Macchiato means 'marked' in Italian. Use just enough foam to create a small white mark on the dark espresso surface."
    },
    
    mocha: {
        title: "Mocha",
        time: "5 minutes",
        difficulty: "Medium",
        serving: "1 cup",
        ingredients: [
            "1 double shot of espresso (2oz)",
            "1-2 tablespoons chocolate syrup or cocoa powder",
            "6oz steamed milk",
            "Whipped cream (optional)",
            "Chocolate shavings for garnish"
        ],
        instructions: [
            "Add chocolate syrup or cocoa powder to your cup",
            "Prepare a double shot of espresso and pour into the cup",
            "Stir to combine espresso and chocolate",
            "Steam milk to 150-160°F with light foam",
            "Pour steamed milk into the chocolate-espresso mixture",
            "Top with whipped cream if desired",
            "Garnish with chocolate shavings",
            "Serve immediately"
        ],
        tips: "Use high-quality chocolate syrup or cocoa powder for best flavor. Adjust chocolate amount to your taste preference."
    },
    
    flatwhite: {
        title: "Flat White",
        time: "5 minutes",
        difficulty: "Advanced",
        serving: "1 cup",
        ingredients: [
            "2 shots of espresso (ristretto preferred)",
            "4-5oz cold whole milk"
        ],
        instructions: [
            "Prepare two ristretto shots (stronger, shorter espresso shots)",
            "Pour cold milk into steaming pitcher",
            "Create very fine microfoam - smoother than cappuccino foam",
            "Heat milk to 140-150°F (slightly cooler than latte)",
            "Tap and swirl pitcher to integrate microfoam",
            "Pour milk from a height, then bring pitcher close to surface",
            "Create a smooth, velvety texture with minimal foam layer",
            "The result should be stronger than a latte with silky texture"
        ],
        tips: "Flat white originated in Australia/New Zealand. Focus on creating velvety microfoam rather than thick foam. The coffee flavor should be prominent."
    },
    
    cortado: {
        title: "Cortado",
        time: "4 minutes",
        difficulty: "Advanced",
        serving: "1 small cup",
        ingredients: [
            "1 double shot of espresso (2oz)",
            "2oz warm steamed milk (no foam)"
        ],
        instructions: [
            "Prepare a double shot of espresso in a small glass (4-5oz)",
            "Steam milk to about 130-140°F (warmer than room temp, not hot)",
            "Create minimal to no foam - focus on heating the milk",
            "Pour the warm milk directly into the espresso",
            "The ratio should be 1:1 espresso to milk",
            "Stir gently to combine",
            "Serve in a small glass, traditionally"
        ],
        tips: "Cortado is Spanish for 'cut' - the milk cuts the acidity of the espresso. Serve in a small glass to showcase the equal ratios."
    }
};

// Filter functionality
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const recipeCards = document.querySelectorAll('.recipe-card');
    
    // Filter recipes
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            recipeCards.forEach(card => {
                if (filter === 'all') {
                    card.classList.remove('hidden');
                } else {
                    const category = card.getAttribute('data-category');
                    if (category === filter) {
                        card.classList.remove('hidden');
                    } else {
                        card.classList.add('hidden');
                    }
                }
            });
        });
    });
    
    // Modal functionality
    const modal = document.getElementById('recipeModal');
    const closeBtn = document.querySelector('.close');
    
    // Close modal when clicking X
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Animate recipe cards on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, observerOptions);
    
    recipeCards.forEach(card => {
        card.style.animationPlayState = 'paused';
        observer.observe(card);
    });
});

// Open recipe modal
function openRecipe(recipeKey) {
    const recipe = recipes[recipeKey];
    if (!recipe) return;
    
    const modal = document.getElementById('recipeModal');
    
    // Populate modal content
    document.getElementById('modalTitle').textContent = recipe.title;
    document.getElementById('modalTime').textContent = recipe.time;
    document.getElementById('modalDifficulty').textContent = recipe.difficulty;
    document.getElementById('modalServing').textContent = recipe.serving;
    
    // Populate ingredients
    const ingredientsList = document.getElementById('modalIngredients');
    ingredientsList.innerHTML = '';
    recipe.ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.textContent = ingredient;
        ingredientsList.appendChild(li);
    });
    
    // Populate instructions
    const instructionsList = document.getElementById('modalInstructions');
    instructionsList.innerHTML = '';
    recipe.instructions.forEach(instruction => {
        const li = document.createElement('li');
        li.textContent = instruction;
        instructionsList.appendChild(li);
    });
    
    // Populate tips
    const tipsDiv = document.getElementById('modalTips');
    tipsDiv.innerHTML = `<p>${recipe.tips}</p>`;
    
    // Show modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Track recipe view with analytics
    if (window.analyticsManager) {
        // Find the recipe card to get additional data
        const recipeCard = document.querySelector(`[onclick="openRecipe('${recipeKey}')"]`)?.closest('.recipe-card');
        const difficulty = recipeCard?.getAttribute('data-difficulty') || recipe.difficulty.toLowerCase();
        const category = recipeCard?.getAttribute('data-category') || 'unknown';
        
        window.analyticsManager.trackEvent('recipe_view', {
            event_category: 'recipe_interaction',
            recipe_name: recipe.title,
            recipe_difficulty: difficulty,
            recipe_category: category,
            recipe_key: recipeKey
        });
    }
    
    // Focus management for accessibility
    modal.querySelector('.close').focus();
}

// Smooth scrolling for anchor links within recipes page
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 100; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Add recipe card interaction effects
document.addEventListener('DOMContentLoaded', function() {
    const recipeCards = document.querySelectorAll('.recipe-card');
    
    recipeCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-10px) scale(1)';
        });
    });
    
    // Add click effect to filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Add ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = event.clientX - rect.left - size / 2;
            const y = event.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Add CSS for ripple animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
});

// Print recipe functionality (future enhancement)
function printRecipe(recipeKey) {
    const recipe = recipes[recipeKey];
    if (!recipe) return;
    
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <html>
        <head>
            <title>${recipe.title} - Recipe</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 20px; }
                h1 { color: #8B4513; }
                h2 { color: #D2691E; margin-top: 20px; }
                ul, ol { margin: 10px 0; padding-left: 20px; }
                li { margin: 5px 0; }
                .meta { background: #f5f5f5; padding: 10px; border-radius: 5px; margin: 10px 0; }
                .tips { background: #fff8e1; padding: 10px; border-left: 4px solid #F4A460; margin: 10px 0; }
            </style>
        </head>
        <body>
            <h1>${recipe.title}</h1>
            <div class="meta">
                <strong>Time:</strong> ${recipe.time} | 
                <strong>Difficulty:</strong> ${recipe.difficulty} | 
                <strong>Serving:</strong> ${recipe.serving}
            </div>
            <h2>Ingredients</h2>
            <ul>
                ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
            </ul>
            <h2>Instructions</h2>
            <ol>
                ${recipe.instructions.map(instruction => `<li>${instruction}</li>`).join('')}
            </ol>
            <div class="tips">
                <strong>Pro Tips:</strong> ${recipe.tips}
            </div>
        </body>
        </html>
    `);
    printWindow.document.close();
    printWindow.print();
}

console.log('Coffee Recipes loaded successfully! ☕'); 