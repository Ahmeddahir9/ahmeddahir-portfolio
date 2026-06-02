# Ahmed Dahir - Professional Portfolio

A modern, fully-featured portfolio website built with Next.js, React, and Tailwind CSS.

## Features

✨ **Modern Design**
- Sleek dark theme with gradient accents
- Smooth animations with Framer Motion
- Responsive design for all devices
- Glass morphism effects

📱 **Sections**
- **Hero** - Eye-catching introduction
- **About** - Background and skills showcase
- **Services** - Professional services offered
- **Portfolio** - Project showcases
- **Pricing** - Service packages and pricing
- **Testimonials** - Client feedback
- **Blog** - Articles and insights
- **CTA** - Call-to-action contact section

⚡ **Performance**
- Built with Next.js for optimal performance
- Image optimization
- Code splitting and lazy loading
- SEO optimized

🎨 **Technologies**
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- React Icons

## Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Ahmeddahir9/ahmeddahir-portfolio.git
cd ahmeddahir-portfolio

# Install dependencies
npm install
# or
yarn install
```

### Development

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Building for Production

```bash
npm run build
npm run start
# or
yarn build
yarn start
```

## Project Structure

```
src/
├── app/
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/
│   ├── Navbar.tsx         # Navigation bar
│   ├── Hero.tsx           # Hero section
│   ├── About.tsx          # About section
│   ├── Services.tsx       # Services section
│   ├── Portfolio.tsx      # Portfolio section
│   ├── Pricing.tsx        # Pricing section
│   ├── Testimonials.tsx   # Testimonials section
│   ├── Blog.tsx           # Blog section
│   ├── CTA.tsx            # Call-to-action section
│   └── Footer.tsx         # Footer
```

## Customization

1. **Update your information**
   - Edit component content with your own information
   - Update images in the About and Hero sections
   - Modify project details in Portfolio section

2. **Change colors and styling**
   - Edit `tailwind.config.js` for color customization
   - Modify `globals.css` for global styles

3. **Add your social links**
   - Update social media links in Footer and CTA components

4. **Configure domain**
   - Update metadata in `app/layout.tsx`
   - Update domain in `next.config.js`

## Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

```bash
npm install -g vercel
vercel
```

Or push to GitHub and connect your repository to Vercel.

## Performance Optimization

- Images are automatically optimized by Next.js
- Code splitting reduces initial bundle size
- CSS-in-JS is minimized for production
- Static generation for fast page loads

## License

MIT License - feel free to use this template for your own portfolio

## Support

For questions or issues, please reach out or open an issue on GitHub.
