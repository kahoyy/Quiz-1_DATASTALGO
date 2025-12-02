# SimDrei ComShop - Internet Café & Gaming Lounge Website

A responsive Single Page Application (SPA) for an internet café offering gaming stations, memberships, and event bookings.

## 🎮 Features

- **Mobile Responsive** - Works on all devices (Bootstrap 5)
- **Single Page App** - No page reloads, smooth navigation
- **Dark Gaming Theme** - Modern dark UI with cyan accents
- **Gaming Stations** - Browse 4 station types with pricing in Philippine Pesos
- **Membership Packages** - 6 service options (hourly, daily, monthly rates)
- **Team & Testimonials** - Meet the team and see customer reviews
- **Contact & Booking** - Functional forms for inquiries and reservations
- **Business Info** - Operating hours and special offers

## 🛠️ Tech Stack

- **Frontend**: Vanilla JavaScript, HTML5, CSS3, Bootstrap 5
- **Backend**: Express.js (Node.js)
- **Styling**: Bootswatch Darkly theme
- **Server**: Runs on port 5000

## 📁 Project Structure

```
Quiz-1/
├── index.html          # Main page (contains all JavaScript)
├── server.js           # Express server
├── package.json        # Dependencies
├── README.md           # This file
└── src/                # Supporting files (for reference)
    ├── components/
    ├── pages/
    ├── data/
    └── styles/
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v14+)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR-USERNAME/SimDrei-ComShop.git
cd SimDrei-ComShop

# Install dependencies
npm install

# Start the server
npm run dev
```

Open `http://localhost:5000` in your browser.

## 📖 Pages

| Page | Description |
|------|-------------|
| **Home** | Hero section, about, stats, testimonials |
| **Stations** | Browse gaming stations (₱275-₱715/hr) |
| **Services** | Membership packages & pricing |
| **Team** | Team member profiles |
| **Contact** | Contact form & business info |

## 💰 Pricing

- **Gaming Stations**: ₱275-₱715/hr
- **Daily Pass**: ₱2,200
- **Monthly Membership**: ₱8,250
- **Tournament Hosting**: From ₱27,500
- **Group Sessions**: From ₱4,350

## 📝 Quick Updates

To modify content, edit these files:
- **Prices & Data**: `src/data/dummyData.js`
- **Colors & Styling**: `src/styles/global.css` or inline in `index.html`
- **Business Info**: `businessData` object in `index.html`

## ⚙️ Configuration

### Change Server Port

Edit `server.js`:
```javascript
const PORT = process.env.PORT || 5000;  // Change port here
```

Or use environment variable:
```bash
PORT=3000 npm run dev
```

## 🐛 Troubleshooting

**Port already in use?**
```powershell
Get-Process -Name node | Stop-Process -Force
npm run dev
```

**Page shows blank?**
- Hard refresh: `Ctrl+Shift+R`
- Check browser console: Press `F12`
- Restart server: `Ctrl+C` then `npm run dev`

**Changes not showing?**
- Clear browser cache
- Restart the server

## 🌐 Browser Support

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📱 Responsive Design

Optimized for:
- Mobile (<576px)
- Tablet (576px-992px)
- Desktop (>992px)

## 📄 License

Educational project

## 📞 Contact

Use the Contact form on the website or email `info@simdrei-comshop.com`

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
#   Q u i z - 1 _ D A T A S T A L G O 
 
 