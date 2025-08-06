# Office Coffee Corner Guide Website ☕

A comprehensive, modern website designed to help office employees master their espresso machine, learn coffee recipes, maintain equipment, and manage supply quotas. Perfect for self-service coffee corners in any workplace.

## 🌟 Features

### Core Functionality
- **Espresso Machine Guide**: Step-by-step instructions for operating espresso machines safely
- **Coffee Recipes**: 8 detailed recipes from basic espresso to advanced drinks like cortados
- **Maintenance Guide**: Daily, weekly, and monthly cleaning schedules
- **Quota & Donation System**: Information about supply management and contribution system

### Modern Design
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Professional UI**: Clean, modern design inspired by contemporary web standards
- **Interactive Elements**: Smooth animations, hover effects, and engaging user interactions
- **Accessibility**: Keyboard navigation, focus management, and screen reader friendly

### Technical Features
- **GitHub Pages Ready**: Optimized for easy deployment on GitHub Pages
- **No Dependencies**: Pure HTML, CSS, and JavaScript - no frameworks required
- **Fast Loading**: Optimized assets and efficient code structure
- **SEO Friendly**: Proper meta tags, semantic HTML, and structured content

## 🚀 Quick Start

### Deploy to GitHub Pages

1. **Fork or Clone this repository**
   ```bash
   git clone https://github.com/yourusername/coffee-corner-guide.git
   cd coffee-corner-guide
   ```

2. **Enable GitHub Pages**
   - Go to your repository settings
   - Scroll to "Pages" section
   - Select "Deploy from branch"
   - Choose "main" branch and "/ (root)" folder
   - Save settings

3. **Access your website**
   - Your site will be available at: `https://yourusername.github.io/coffee-corner-guide`
   - It may take a few minutes for the first deployment

### Local Development

1. **Serve locally** (optional)
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

2. **Open in browser**
   - Navigate to `http://localhost:8000`

## 📁 Project Structure

```
coffee-corner-guide/
├── index.html              # Homepage
├── espresso-guide.html     # Espresso machine operation guide
├── recipes.html            # Coffee recipes and drink guide
├── maintenance.html        # Cleaning and maintenance guide
├── quota.html              # Supply quota and donation info
├── styles/
│   ├── main.css            # Core styles and layout
│   ├── guide.css           # Guide page specific styles
│   └── recipes.css         # Recipe page specific styles
├── scripts/
│   ├── main.js             # Core JavaScript functionality
│   └── recipes.js          # Recipe page interactive features
└── README.md               # This file
```

## 🎨 Customization

### Branding
Update the following elements to match your office branding:

1. **Logo and Colors** (in `styles/main.css`):
   ```css
   :root {
     --primary-color: #8B4513;      /* Main brand color */
     --secondary-color: #D2691E;    /* Accent color */
     --accent-color: #F4A460;       /* Highlight color */
   }
   ```

2. **Company Name** (in all HTML files):
   - Replace "Coffee Corner" with your preferred name
   - Update footer text and contact information

### Content Customization

1. **Supply Quotas** (`quota.html`):
   - Update monthly quota amounts to match your office allocation
   - Modify contribution methods and amounts
   - Add specific contact information

2. **Machine-Specific Instructions**:
   - Update espresso guide steps for your specific machine model
   - Add or remove recipes based on your equipment capabilities
   - Customize maintenance schedules for your machine requirements

3. **Office Policies**:
   - Modify usage guidelines to match your office culture
   - Update responsibility assignments in maintenance schedules
   - Customize FAQ sections with office-specific information

### Adding New Content

1. **New Recipe**: Add to `scripts/recipes.js`:
   ```javascript
   recipes.newdrink = {
     title: "New Drink Name",
     time: "X minutes",
     difficulty: "Easy/Medium/Advanced",
     // ... other properties
   };
   ```

2. **New Maintenance Task**: Add to maintenance schedule in `maintenance.html`

3. **New Guide Section**: Follow the existing HTML structure and CSS classes

## 📱 Browser Compatibility

- **Modern Browsers**: Chrome 60+, Firefox 60+, Safari 12+, Edge 79+
- **Mobile Support**: iOS Safari 12+, Chrome Mobile 60+
- **Features Used**: CSS Grid, Flexbox, CSS Variables, ES6 JavaScript

## 🔧 Advanced Configuration

### Analytics Integration
Add Google Analytics or other tracking:

```html
<!-- Add to <head> section of all pages -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Custom Domain
To use a custom domain with GitHub Pages:

1. Add a `CNAME` file to the root directory:
   ```
   coffee.yourcompany.com
   ```

2. Configure DNS settings with your domain provider
3. Enable HTTPS in GitHub Pages settings

### Content Management
For non-technical users to update content:

1. Use GitHub's web interface to edit files directly
2. Consider using GitHub Desktop for easier file management
3. Set up branch protection rules for collaborative editing

## 🤝 Contributing

### Making Changes
1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Test thoroughly on multiple devices
5. Submit a pull request

### Reporting Issues
- Use GitHub Issues to report bugs or suggest features
- Include browser version and device information
- Provide steps to reproduce any issues

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Design Inspiration**: Modern web design principles and coffee culture
- **Icons**: Font Awesome for comprehensive icon library
- **Fonts**: Google Fonts (Inter) for clean, readable typography
- **Community**: Built for office coffee communities everywhere

## 📞 Support

For questions, issues, or suggestions:

1. **Check the Issues**: Look for existing solutions in GitHub Issues
2. **Create New Issue**: Use GitHub Issues for bug reports or feature requests
3. **Documentation**: This README covers most common scenarios

---

**Made with ❤️ for coffee-loving office communities**

*Enjoy your perfect cup of coffee!* ☕ 