# SimDrei ComShop - Internet Café & Gaming Lounge

A modern, fully responsive Single Page Application (SPA) for a premier internet café and gaming lounge business built with vanilla JavaScript, Bootstrap 5, and Express.js.

## 📋 Project Overview

SimDrei ComShop is a professional website for an internet café offering premium gaming stations, workspaces, and a vibrant gaming community. The site features gaming station browsing, membership packages, event booking, and customer contact capabilities—all without page reloads.

## ✨ Features

- **📱 Mobile Responsive Design** - Fully responsive across all devices using Bootstrap 5
- **⚡ Single Page Application** - Seamless navigation without page reloads
- **🎨 Bootswatch Darkly Theme** - Modern, professional dark UI styling
- **🌙 Dark Gaming Theme** - Professional dark interface (#1a1a1a background, #00d4ff cyan accents)
- **🎮 Gaming Stations** - Multiple station categories with pricing in Philippine Pesos
- **💰 Flexible Pricing** - Services in PHP (₱275-₱715/hr for gaming)
- **👥 Team Showcase** - Meet the gaming community team
- **📦 Membership Packages** - Multiple pricing tiers and services
- **🎫 Booking & Contact System** - Functional forms for bookings and inquiries
- **⭐ Testimonials** - Customer testimonials on homepage
- **💬 Business Hours & Info** - Complete contact information and operating hours
- **🏢 Special Offers** - Promotions and group discounts

## 🛠️ Tech Stack

- **Frontend**: Vanilla JavaScript, HTML5, CSS3, Bootstrap 5
- **Styling**: Bootswatch Darkly theme
- **Backend**: Express.js (Node.js)
- **Server**: Development server on port 5000
- **No Build Tools**: Runs directly without Webpack, Vite, or similar

## 📁 Project Structure

```
Quiz-1/
├── src/
│   ├── components/
│   │   ├── LayoutComponents.jsx    # Header & Footer
│   │   └── CardComponents.jsx      # Reusable Card Components
│   ├── pages/
│   │   ├── HomePage.jsx            # Landing page with hero & testimonials
│   │   ├── ProductsPage.jsx        # Product catalog (archived)
│   │   ├── ServicesPage.jsx        # Services listing
│   │   ├── TeamPage.jsx            # Team members showcase
│   │   └── ContactPage.jsx         # Contact form & info
│   ├── data/
│   │   └── dummyData.js            # All dummy data
│   ├── styles/
│   │   ├── global.css              # Global styles
│   │   └── App.css                 # App-specific styles
│   ├── App.jsx                     # Main App component (archived)
│   └── main.jsx                    # React entry point (archived)
├── index.html                      # Main HTML entry point with embedded JS
├── server.js                       # Express server for SPA
├── package.json                    # Dependencies & scripts
└── README.md                       # This file
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v14 or higher)
- **npm** (comes with Node.js)

### Installation

1. **Clone the repository** (from GitLab):
   ```bash
   git clone https://gitlab.com/YOUR-USERNAME/YOUR-PROJECT.git
   cd YOUR-PROJECT
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   - Navigate to `http://localhost:5000`
   - The application will load automatically

## 📦 Available Scripts

- `npm run dev` - Starts the Express development server on port 5000
- `npm run build` - Placeholder build script (no build tool required)
- `npm start` - Alternative command to start the server

## 🌐 Pages & Features

### Home Page
- Hero section with call-to-action buttons
- About section explaining the business
- Statistics dashboard (30+ stations, 5K+ members)
- Customer testimonials with ratings
- Featured services section

### Stations Page
- Browse 4 gaming station categories:
  - **Ultra Gaming**: ₱715/hr (RTX 4090, i9-13900K)
  - **Pro Gaming**: ₱495/hr (RTX 4080, i7-13700K)
  - **Casual Gaming**: ₱275/hr (RTX 3070, i5-12600K)
  - **Workstations**: ₱330/hr (RTX 2080, i7-11700)
- Real-time availability status

### Services Page
- 6 service packages with pricing:
  - Hourly rates starting at ₱275/hr
  - Daily passes at ₱2,200
  - Monthly membership at ₱8,250
  - Tournament hosting from ₱27,500
  - Group sessions from ₱4,350
  - Food & beverage service

### Team Page
- 4 team member profiles
- Specializations and roles
- Core gaming values

### Contact Page
- Dual-mode form (messaging + booking)
- Business hours display (Mon-Fri 2PM-2AM, Sat 12PM-3AM, Sun 12PM-12AM)
- Special offers and promotions
- FAQ section
- Contact information (email, phone, address)

## 💾 Data Structure

All data is stored in `src/data/dummyData.js` including:
- Business information
- 4 team members with specializations
- 4 gaming station types with pricing
- 6 service packages with features
- 4 customer testimonials with ratings

## 📝 How to Update Content

1. **Modify prices**: Edit `businessData.services` in `src/data/dummyData.js`
2. **Change team members**: Update `teamMembers` array
3. **Add testimonials**: Add objects to `testimonials` array
4. **Update business info**: Modify `businessData` object
5. **Change styling**: Edit `src/styles/global.css` or `src/styles/App.css`

## 🎨 Customization

### Change Colors
- Primary dark background: `#1a1a1a` (in CSS)
- Accent color (cyan): `#00d4ff`
- Modify in `src/styles/global.css` or `index.html`

### Change Theme
- Currently using Bootstrap 5 with Bootswatch Darkly
- Modify Bootstrap CDN link in `index.html`

## 🔧 Configuration

### Server Port
- Default: `5000`
- Change in `server.js`: `const PORT = process.env.PORT || 5000;`
- Or set environment variable: `PORT=3000 npm run dev`

## 📱 Responsive Breakpoints

- **Mobile**: < 576px
- **Tablet**: 576px - 768px
- **Desktop**: 768px - 992px
- **Large Desktop**: > 992px

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 5000
# Windows PowerShell:
Get-Process -Name node | Stop-Process -Force

# Then restart:
npm run dev
```

### Changes Not Showing
- Hard refresh browser: `Ctrl+Shift+R` (or `Cmd+Shift+R` on Mac)
- Clear browser cache
- Restart server: `Ctrl+C` then `npm run dev`

### Browser Shows Blank Page
- Check browser console for errors (F12)
- Verify server is running: Check terminal for "🚀 Server is running"
- Ensure you're on correct port: `http://localhost:5000`

## 📤 Deploying to GitLab

### Step 1: Initialize Git Repository (if not already done)
```bash
cd c:\Quiz-1
git init
git remote add origin https://gitlab.com/YOUR-USERNAME/YOUR-REPOSITORY.git
```

### Step 2: Add All Files
```bash
git add .
```

### Step 3: Commit Changes
```bash
git commit -m "Initial commit: SimDrei ComShop gaming lounge website"
```

### Step 4: Push to GitLab
```bash
git push -u origin main
```

*Note: If you get an error about 'main' branch, use 'master' instead or check your default branch*

### Step 5: Verify on GitLab
- Go to your GitLab project
- Your README will display on the project home page
- All files will be visible in the repository

## 📋 GitLab Repository Setup

1. **Create new project on GitLab**:
   - Go to https://gitlab.com/dashboard/projects
   - Click "New project"
   - Choose "Create blank project"
   - Name it `SimDrei-ComShop` or similar
   - Choose visibility (Private/Public)
   - Do NOT initialize with README (we have one)
   - Click "Create project"

2. **Get the repository URL**:
   - On GitLab project page, click blue "Clone" button
   - Copy the HTTPS or SSH URL

3. **Push your local project**:
   ```bash
   git remote add origin https://gitlab.com/YOUR-USERNAME/SimDrei-ComShop.git
   git branch -M main
   git push -u origin main
   ```

## 🌐 Environment Variables

Create a `.env` file (optional) for:
```
PORT=5000
NODE_ENV=development
```

## 📄 License

This project is created for educational purposes.

## 👤 Author

Created as a project for an internet café business website.

## 🙏 Acknowledgments

- Bootstrap 5 for responsive framework
- Bootswatch Darkly for dark theme
- Express.js for simple server
- FontAwesome-style emojis for icons

## 📞 Support

For issues or questions about the website, refer to the Contact page or email `info@simdrei-comshop.com`.

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Open in Browser**
   - Navigate to `http://localhost:3000`
   - The website will load with hot-reload support

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server

## 🎯 Pages & Features

### 1. **Home Page**
- Hero section with gaming call-to-action buttons
- About section with mission and community values
- Gaming statistics (stations, members, years active)
- Featured gaming station categories with pricing
- Customer testimonials
- Membership call-to-action

### 2. **Gaming Stations Page**
- Category-based station filtering (Ultra Gaming, Pro Gaming, Casual, Workstations, VIP, Streaming)
- Comprehensive gaming station listings
- Station specifications and hourly pricing
- Real-time availability indicators
- Quick booking buttons

### 3. **Packages & Services Page**
- Membership package cards with features
- Hourly rate options
- Daily pass packages
- Monthly membership details
- Tournament hosting services
- Food and beverage options
- Event planning information

### 4. **Team Page**
- Team member profiles with images
- Roles and specialties
- Core gaming values
- Community engagement section
- Tournament hosting achievements

### 5. **Contact & Booking Page**
- Dual-mode contact page (Message/Booking toggle)
- Station booking form with date/time selection
- Message contact form
- Business hours display
- Booking policies and cancellation information
- Special offers section
- FAQ accordion with gaming-specific questions

## 🛠️ Technology Stack

- **React 19** - Latest React with hooks
- **React Bootstrap** - Bootstrap components
- **Bootstrap 5** - CSS framework
- **Bootswatch Darkly** - Dark theme
- **Express.js** - Development server
- **JavaScript (ES6+)** - Modern JavaScript

## 📊 Dummy Data

The application includes comprehensive dummy data for:
- **Business Information** - Internet café details and gaming hub info
- **Team Members** - 4 passionate gaming professionals with roles
- **Gaming Stations** - 6 categories with 20+ gaming stations (Ultra, Pro, Casual, Workstation, VIP, Streaming)
- **Membership Packages** - Hourly rates, daily passes, monthly memberships, tournament hosting, private group sessions, food & beverage
- **Testimonials** - 4 gaming community testimonials

All data follows proper naming conventions:
- camelCase for JavaScript variables
- PascalCase for React components
- kebab-case for CSS classes
- Consistent gaming terminology throughout

## 🎨 Design Highlights

- **Dark Theme** - Easy on the eyes with professional appearance
- **Consistent Colors** - Cyan accents (#00d4ff) throughout
- **Responsive Layouts** - Bootstrap grid system
- **Hover Effects** - Smooth transitions and animations
- **Accessibility** - Semantic HTML and proper contrast ratios

## 🔧 Browser Compatibility

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📱 Responsive Design

The website is fully responsive with breakpoints for:
- Extra small devices (< 576px)
- Small devices (576px - 768px)
- Medium devices (768px - 992px)
- Large devices (992px - 1200px)
- Extra large devices (> 1200px)

## ⚙️ Configuration

No Vite configuration is used. The project uses:
- Simple Express server for development
- Direct React from CDN for index.html
- ES modules for component structure
- Standard npm scripts

## 🚀 Deployment

To deploy this project:

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `dist` folder to your hosting service

3. Configure your server to serve `index.html` for all routes (SPA requirement)

## 💡 Usage Examples

### Navigating Between Pages
```javascript
// Using the navigation component
<Header onNavigate={setCurrentPage} currentPage={currentPage} />

// Switching pages
onClick={() => onNavigate('products')}
```

### Adding New Products
Edit `src/data/dummyData.js` and add to the `productCategories` array:
```javascript
{
  id: 701,
  name: 'Product Name',
  price: 999.99,
  specs: 'Product specifications',
  inStock: true
}
```

## 🐛 Troubleshooting

### Port Already in Use
If port 3000 is already in use:
```bash
PORT=3001 npm run dev
```

### Module Not Found Errors
Ensure all dependencies are installed:
```bash
npm install
```

### Styling Issues
Clear browser cache and restart the server:
```bash
npm run dev
```

## 📝 License

This project is created for educational purposes as part of a website development assignment.

## 📞 Support

For questions or issues, please contact:
- **Email:** info@simdrei-comshop.com
- **Phone:** +1-800-COMSHOP

---

**Happy Coding! 🚀**

Created with React 19 and Bootstrap 5
#   Q u i z - 1 _ D A T A S T A L G O  
 