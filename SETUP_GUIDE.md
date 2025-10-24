# Portfolio Setup & Installation Guide

## Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (version 18.17 or later) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn** or **pnpm**
- A code editor like **VS Code** (recommended)

## 📥 Installation Steps

### 1. Navigate to Project Directory

Open PowerShell and navigate to your project:

```powershell
cd C:\Users\Aziz\Desktop\typescript
```

### 2. Install Dependencies

Run one of the following commands based on your package manager:

**Using npm (recommended):**
```powershell
npm install
```

**Using yarn:**
```powershell
yarn install
```

**Using pnpm:**
```powershell
pnpm install
```

This will install all required dependencies including:
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- React Icons

### 3. Run Development Server

Start the development server:

**Using npm:**
```powershell
npm run dev
```

**Using yarn:**
```powershell
yarn dev
```

**Using pnpm:**
```powershell
pnpm dev
```

### 4. View Your Portfolio

Open your browser and visit:
```
http://localhost:3000
```

You should see your portfolio running! 🎉

## 🎨 Customization Guide

### Update Personal Information

1. **Name**: Search for "Ismail Elaziz" across all files and replace with your name
2. **Email**: Update in `components/Contact.tsx` (line ~70)
3. **Phone**: Update in `components/Contact.tsx` (line ~80)
4. **Location**: Update in `components/Contact.tsx` (line ~90)

### Update Social Links

Replace the placeholder links in:
- `components/Navbar.tsx` (GitHub link)
- `components/Contact.tsx` (GitHub, LinkedIn, Twitter)
- `components/Footer.tsx` (GitHub, LinkedIn, Twitter)

### Add Your Projects

Edit `components/Projects.tsx`:
- Update the `projects` array with your actual projects
- Add real project images (replace Unsplash URLs)
- Update tech stacks
- Add real GitHub and live demo links

### Add Your Skills

Edit `components/Skills.tsx`:
- Add/remove skills from the `skills` array
- Update icons and colors

### Add Blog Posts

Edit `components/Blog.tsx`:
- Update the `blogPosts` array with your actual blog posts
- Link to your real blog articles

### Add Certifications

Edit `components/Certifications.tsx`:
- Update the `certifications` array with your actual certifications

## 🎨 Theme Customization

### Colors

Edit `tailwind.config.ts` to change the color scheme:

```typescript
colors: {
  primary: "#8B5CF6",    // Change purple accent
  secondary: "#3B82F6",  // Change blue accent
  dark: "#0A0A0F",       // Change dark background
  "dark-light": "#1A1A2E", // Change lighter dark shade
}
```

### Fonts

The portfolio uses Inter (body) and Poppins (headings). To change:

1. Edit `app/layout.tsx`
2. Import different Google Fonts
3. Update the font variables

## 🏗️ Building for Production

### 1. Create Production Build

```powershell
npm run build
```

This creates an optimized production build in the `.next` folder.

### 2. Test Production Build Locally

```powershell
npm start
```

Visit `http://localhost:3000` to test the production build.

## 🚀 Deployment Options

### Option 1: Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy"

That's it! Vercel automatically detects Next.js and deploys your portfolio.

### Option 2: Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect to GitHub and select your repository
5. Build command: `npm run build`
6. Publish directory: `.next`
7. Click "Deploy"

### Option 3: Other Platforms

The portfolio can be deployed to:
- **AWS Amplify**
- **Railway**
- **Render**
- **DigitalOcean App Platform**

## 📝 Common Commands

```powershell
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## 🐛 Troubleshooting

### Port 3000 Already in Use

If port 3000 is already in use, you can specify a different port:

```powershell
npm run dev -- -p 3001
```

### Module Not Found Errors

If you see "Module not found" errors:

1. Delete `node_modules` folder
2. Delete `package-lock.json`
3. Run `npm install` again

### TypeScript Errors

The errors you see in VS Code before installing dependencies are normal. They will disappear after running `npm install`.

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)

## 💡 Tips

1. **Images**: For better performance, place images in the `public` folder and use Next.js Image component
2. **SEO**: Update metadata in `app/layout.tsx` for better SEO
3. **Analytics**: Add Google Analytics or Vercel Analytics for tracking
4. **Contact Form**: The form currently shows a success message. Connect it to a service like:
   - Formspree
   - EmailJS
   - SendGrid
   - Your own backend API

## 🎯 Next Steps

1. Install dependencies with `npm install`
2. Run `npm run dev` to start development
3. Customize the content with your information
4. Replace placeholder images with your own
5. Update social links
6. Test on mobile devices
7. Build and deploy!

---

Need help? Check the README.md or create an issue on GitHub!
