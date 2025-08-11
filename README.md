# Paws Friend - Professional Pet Care Website

A production-ready Next.js 14 + Tailwind CSS website for a professional pet care business. Built with modern web technologies and featuring smooth animations, responsive design, and comprehensive functionality.

## 🚀 Features

### Core Features

- **Responsive Design**: Mobile-first approach with fully responsive layouts
- **SEO Optimized**: Meta tags, Open Graph, JSON-LD schema markup
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation
- **Performance**: Optimized images, lazy loading, minimal bundle size
- **Animations**: Smooth Framer Motion animations with reduced motion support

### Pages & Components

- **Home Page**: Hero section, services overview, testimonials, special offers
- **Services Page**: Detailed service descriptions with pricing packages
- **About Page**: Company story, team information, mission & values
- **Contact Page**: Contact form, map integration, FAQ section
- **Prices Page**: Transparent pricing for all services
- **Blog Page**: Article listings with categories and search
- **Book Appointment**: Multi-step booking form with service selection

### Design System

- **Colors**: Primary Coral (#F25C5C), Soft Pink (#FFECEC), Sky Blue (#7BD8FF)
- **Fonts**: Poppins (headings), Open Sans (body) with font preloading
- **Icons**: Lucide React icons with consistent styling
- **Components**: Reusable UI components with Tailwind CSS

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form (ready for integration)
- **Validation**: Yup (ready for integration)
- **Deployment**: Vercel ready

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd paws-friend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
paws-friend/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.js            # Home page
│   │   ├── services/          # Services page
│   │   ├── about/             # About page
│   │   ├── contact/           # Contact page
│   │   ├── prices/            # Prices page
│   │   ├── blog/              # Blog page
│   │   ├── book-appointment/  # Booking page
│   │   ├── layout.js          # Root layout
│   │   └── globals.css        # Global styles
│   ├── components/
│   │   ├── layout/            # Layout components
│   │   │   ├── Header.jsx     # Navigation header
│   │   │   └── Footer.jsx     # Site footer
│   │   └── sections/          # Page sections
│   │       ├── HeroSection.jsx
│   │       ├── ServicesSection.jsx
│   │       ├── WhyChooseUsSection.jsx
│   │       ├── TestimonialsSection.jsx
│   │       └── SpecialOffersBanner.jsx
│   └── lib/                   # Utility functions
├── public/                    # Static assets
├── tailwind.config.js         # Tailwind configuration
└── package.json               # Dependencies
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for environment-specific configuration:

```env
# Email Service (EmailJS, SendGrid, etc.)
NEXT_PUBLIC_EMAIL_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAIL_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAIL_PUBLIC_KEY=your_public_key

# Google Maps API (for map integration)
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_maps_api_key

# WhatsApp Business API
NEXT_PUBLIC_WHATSAPP_PHONE=your_whatsapp_number
```

### Tailwind Configuration

The project uses a custom color palette defined in `tailwind.config.js`:

```javascript
colors: {
  coral: "#F25C5C",      // Primary brand color
  softPink: "#FFECEC",   // Soft pink accent
  skyBlue: "#7BD8FF",    // Sky blue accent
}
```

## 🔌 Integration Points

### Email Integration

The contact forms and booking system are ready for email integration:

**Option 1: EmailJS**

```javascript
// Install: npm install @emailjs/browser
import emailjs from "@emailjs/browser";

emailjs.send(
  process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
  process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
  formData,
  process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY
);
```

**Option 2: Server API Route**

```javascript
// pages/api/contact.js
export default async function handler(req, res) {
  // Handle form submission
  // Send email via SendGrid, Nodemailer, etc.
}
```

### WhatsApp Integration

WhatsApp links are already configured in the header:

```javascript
const handleWhatsAppClick = () => {
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_PHONE;
  const message = "Hi! I'd like to book an appointment for my pet.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;
  window.open(whatsappUrl, "_blank");
};
```

### Google Maps Integration

Replace the map placeholder in the contact page:

```javascript
// Install: npm install @googlemaps/js-api-loader
import { Loader } from "@googlemaps/js-api-loader";

const loader = new Loader({
  apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  version: "weekly",
});
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The project is compatible with any platform that supports Next.js:

- Netlify
- AWS Amplify
- DigitalOcean App Platform

## 📱 Responsive Design

The website is fully responsive with breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Reduced motion preferences
- High contrast color ratios
- Screen reader friendly

## 🔒 Security Considerations

### Form Security

- Client-side validation with Yup
- CSRF protection (implement with server-side validation)
- Input sanitization
- Rate limiting for form submissions

### HTTPS

- Always use HTTPS in production
- Secure headers configuration
- Content Security Policy (CSP)

## 📈 Performance Optimization

- **Images**: Next.js Image component with optimization
- **Fonts**: Google Fonts with display=swap
- **Code Splitting**: Automatic with Next.js
- **Bundle Analysis**: Use `npm run build` to analyze bundle size
- **Lighthouse**: Aim for 90+ scores across all metrics

## 🧪 Testing

```bash
# Run linting
npm run lint

# Build for production
npm run build

# Start production server
npm start
```

## 📝 Content Management

### Updating Content

- **Services**: Edit `src/app/services/page.js`
- **Pricing**: Edit `src/app/prices/page.js`
- **Team**: Edit `src/app/about/page.js`
- **Blog**: Edit `src/app/blog/page.js`

### Adding New Pages

1. Create new directory in `src/app/`
2. Add `page.js` file
3. Update navigation in `src/components/layout/Header.jsx`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:

- Email: support@pawsfriend.com
- Phone: +1 (555) 123-4567
- Website: https://pawsfriend.com

## 🎯 Roadmap

- [ ] Blog CMS integration
- [ ] Online payment processing
- [ ] Customer portal
- [ ] Appointment management system
- [ ] Pet health records
- [ ] Mobile app companion

---

**Built with ❤️ for pet care professionals**
