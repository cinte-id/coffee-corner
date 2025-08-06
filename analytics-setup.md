# Google Analytics Setup Guide for Cinte Coffee Corner

## 📊 Overview

This website now includes comprehensive Google Analytics 4 (GA4) tracking to help you understand how employees use the coffee corner resources.

## 🚀 Quick Setup

### Step 1: Create Google Analytics Account

1. Go to [Google Analytics](https://analytics.google.com/)
2. Click "Start measuring"
3. Create an account for "Cinte Coffee Corner"
4. Set up a property for your website
5. Choose "Web" as the platform
6. Enter your website URL (GitHub Pages URL)

### Step 2: Get Your Measurement ID

1. In GA4, go to Admin → Property → Data Streams
2. Click on your web stream
3. Copy the **Measurement ID** (format: G-XXXXXXXXXX)

### Step 3: Update the Website

1. Open `scripts/analytics.js`
2. Find line 8: `this.GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';`
3. Replace `'G-XXXXXXXXXX'` with your actual Measurement ID
4. Save the file and push to GitHub

## 📈 What Gets Tracked

### Navigation & User Flow
- **Page Views**: Which pages are most visited
- **Navigation Clicks**: Main menu, footer, breadcrumb usage
- **Language Switching**: English vs Indonesian preference
- **Session Duration**: How long users stay on the site

### Recipe Interactions
- **Recipe Views**: Which coffee recipes are most popular
- **Recipe Filters**: How users filter recipes (espresso, milk drinks, etc.)
- **Difficulty Preferences**: Easy vs Medium vs Hard recipes
- **Modal Interactions**: Recipe detail views and closures

### Guide Engagement
- **Section Navigation**: Which guide sections users visit
- **Step Interactions**: Which steps users click on
- **Video Views**: YouTube tutorial engagement
- **Continue Learning**: Cross-page navigation patterns

### Content Engagement
- **FAQ Interactions**: Most common questions
- **Scroll Depth**: How far users read (25%, 50%, 75%, 90%)
- **Time on Page**: Content engagement metrics
- **Mobile vs Desktop**: Device preferences

### Language & Localization
- **Language Distribution**: English vs Indonesian usage
- **Language Switching Patterns**: When users change languages
- **Content Preference by Language**: Different behavior patterns

## 📊 Key Metrics to Monitor

### Usage Metrics
- **Daily Active Users**: How many employees use the site daily
- **Page Views per Session**: Site navigation patterns  
- **Bounce Rate**: Single-page visits vs multi-page sessions
- **Average Session Duration**: User engagement levels

### Content Performance
- **Most Popular Pages**: 
  - Home page engagement
  - Espresso guide usage
  - Recipe page popularity
  - Maintenance guide access
  - Quota page views

- **Most Popular Recipes**:
  - Classic Espresso
  - Cappuccino
  - Latte
  - Americano
  - Advanced recipes (Flat White, Cortado)

### User Behavior
- **Peak Usage Times**: When employees access the site most
- **Language Preferences**: Office language distribution
- **Device Usage**: Mobile vs desktop access patterns
- **Geographic Data**: Office location confirmation

## 🔧 Custom Events Tracked

### Navigation Events
```javascript
// Main navigation clicks
navigation_click: {
    link_text: "Espresso Guide",
    link_destination: "espresso-guide.html",
    click_location: "main_nav"
}

// Language switching
language_change: {
    previous_language: "en",
    new_language: "id",
    page_name: "home"
}
```

### Recipe Events
```javascript
// Recipe viewing
recipe_view: {
    recipe_name: "Classic Espresso",
    recipe_difficulty: "easy",
    recipe_category: "espresso"
}

// Recipe filtering
recipe_filter: {
    filter_type: "milk",
    page_name: "recipes"
}
```

### Guide Events
```javascript
// Guide section navigation
guide_navigation: {
    section_name: "Safety First",
    target_section: "#safety-first",
    page_name: "espresso_guide"
}

// Step interactions
guide_step_click: {
    step_title: "Check Water Level",
    page_name: "espresso_guide"
}
```

### Engagement Events
```javascript
// Scroll depth tracking
scroll_depth: {
    scroll_depth: 75,
    page_name: "espresso_guide"
}

// Video interactions
video_section_view: {
    video_title: "DeLonghi EC 230 BK Tutorial",
    page_name: "espresso_guide"
}
```

## 📱 Mobile Analytics

The tracking automatically detects:
- **Screen Resolution**: Device screen sizes
- **Viewport Size**: Actual viewing area
- **User Agent**: Browser and device information
- **Touch vs Click**: Mobile vs desktop interactions

## 🎯 Conversion Tracking

You can track specific goals:

```javascript
// Track when someone completes a full guide
window.analyticsManager.trackConversion('guide_completion', {
    guide_name: 'espresso_guide'
});

// Track when someone views multiple recipes
window.analyticsManager.trackConversion('recipe_exploration', {
    recipes_viewed: 3
});
```

## 📊 Recommended GA4 Reports

### 1. **Real-time Report**
- See current users on the site
- Monitor live activity during coffee breaks

### 2. **Audience Reports**
- User demographics and interests
- Language preferences
- Device and browser usage

### 3. **Acquisition Reports**
- How users find the site
- Direct access vs referrals
- Search terms (if any)

### 4. **Engagement Reports**
- Page views and screen views
- Events and conversions
- User engagement metrics

### 5. **Custom Reports**
Create custom reports for:
- **Coffee Corner Usage**: Page views by time of day
- **Recipe Popularity**: Most viewed recipes by language
- **Guide Effectiveness**: Step-by-step completion rates
- **Language Distribution**: Usage patterns by language

## 🔒 Privacy Considerations

The analytics implementation:
- ✅ **No Personal Data**: Doesn't collect names, emails, or personal info
- ✅ **Anonymous Tracking**: Uses anonymous user IDs
- ✅ **GDPR Compliant**: Respects user privacy settings
- ✅ **Office Use**: Designed for internal office analytics only

## 🛠️ Troubleshooting

### Analytics Not Working?

1. **Check Measurement ID**: Ensure it's correctly set in `analytics.js`
2. **Browser Console**: Look for GA4 initialization messages
3. **Real-time Report**: Check if data appears in GA4 real-time view
4. **Ad Blockers**: Some users may have analytics blocked

### Debug Mode

Add this to enable detailed logging:
```javascript
// In analytics.js, add to the gtag config:
gtag('config', 'G-XXXXXXXXXX', {
    debug_mode: true
});
```

## 📈 Expected Insights

After 1-2 weeks of data collection, you should see:

### Usage Patterns
- **Peak coffee times**: 9-10 AM, 2-3 PM typical spikes
- **Popular guides**: Espresso guide likely most viewed
- **Language split**: Depends on your office demographics
- **Device usage**: Mobile during coffee breaks, desktop for detailed reading

### Content Performance  
- **Recipe popularity**: Simple recipes (espresso, americano) likely most popular
- **Guide sections**: Safety and getting started sections most accessed
- **Language preferences**: May correlate with different content preferences

### Optimization Opportunities
- **Content gaps**: Less popular sections may need improvement
- **Language balance**: Ensure both languages have good content
- **Mobile experience**: High mobile usage indicates need for mobile optimization
- **User flow**: Identify common navigation patterns

## 🎯 Success Metrics

Track these KPIs for coffee corner success:
- **Regular Users**: Employees returning weekly
- **Guide Completion**: Users reading full guides  
- **Recipe Diversity**: Variety of recipes being viewed
- **Language Adoption**: Balanced usage of both languages
- **Mobile Engagement**: Good mobile experience metrics

---

## 🚀 Getting Started Checklist

- [ ] Create Google Analytics account
- [ ] Get GA4 Measurement ID  
- [ ] Update `scripts/analytics.js` with your ID
- [ ] Deploy to GitHub Pages
- [ ] Verify tracking in GA4 Real-time report
- [ ] Set up custom reports
- [ ] Monitor for 1-2 weeks
- [ ] Analyze usage patterns
- [ ] Optimize based on insights

Your coffee corner website now has professional-grade analytics to help you understand and improve the employee coffee experience! ☕📊 