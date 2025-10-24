# Ismail Elaziz - Portfolio

A modern, cosmic-themed portfolio website for a Data Scientist & Fullstack Developer, built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Dark cosmic theme with purple-blue gradient glow
- **Smooth Animations**: Framer Motion powered animations with scroll reveals
- **Fully Responsive**: Mobile-first design that works on all devices
- **Glassmorphism UI**: Beautiful blur effects and gradient highlights
- **SEO Optimized**: Built-in meta tags and OpenGraph support
- **TypeScript**: Fully typed for better development experience

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Fonts**: Inter & Poppins from Google Fonts

## 📦 Installation

1. **Install dependencies**:

```bash
npm install
```

2. **Run the development server**:

```bash
npm run dev
```

3. **Open your browser** and navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Certifications.tsx
│   ├── Blog.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── public/
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## 🎨 Customization

### Update Your Information

1. **Contact Info**: Update email, phone, and location in `components/Contact.tsx`
2. **Social Links**: Update GitHub, LinkedIn, and Twitter URLs throughout the components
4. **Projects**: Modify the projects array in `components/Projects.tsx`
5. **Skills**: Update the skills array in `components/Skills.tsx`
6. **Blog Posts**: Update blog posts in `components/Blog.tsx`
7. **Certifications**: Update certifications in `components/Certifications.tsx`

### Colors

Customize the color scheme in `tailwind.config.ts`:

```typescript
colors: {
  primary: "#8B5CF6",    // Purple
  secondary: "#3B82F6",  // Blue
  dark: "#0A0A0F",
  "dark-light": "#1A1A2E",
}
```

## 🚀 Deploy on Vercel

The easiest way to deploy your portfolio is with [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository on Vercel
3. Deploy with one click!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/portfolio)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## ⭐ Show Your Support

Give a ⭐️ if you like this project!

---

Made with ❤️ and Next.js
