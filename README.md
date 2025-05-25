# Project Structure Documentation

This document outlines the organized, production-ready structure of the my portfolio website.

## 📁 Directory Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.jsx          # Navigation header component
│   │   └── Footer.jsx          # Footer component
│   ├── sections/
│   │   ├── HeroSection.jsx     # Landing/intro section
│   │   ├── AboutSection.jsx    # About me section
│   │   ├── SkillsSection.jsx   # Skills and technologies
│   │   ├── ExperienceSection.jsx # Work experience
│   │   └── ContactSection.jsx  # Contact information
│   └── index.js                # Component exports
├── styles/
│   ├── components/
│   │   ├── Header.module.scss
│   │   ├── Footer.module.scss
│   │   ├── HeroSection.module.scss
│   │   ├── AboutSection.module.scss
│   │   ├── SkillsSection.module.scss
│   │   ├── ExperienceSection.module.scss
│   │   └── ContactSection.module.scss
│   └── global/
│       ├── App.css
│       ├── common.css
│       ├── fonts.css
│       ├── global.scss
│       └── utils.scss
├── assets/
│   ├── images/                 # PNG, JPEG images
│   ├── icons/                  # SVG icons
│   └── documents/              # PDF files, resume
├── constants/
│   └── index.js                # App constants and data
├── utils/
│   └── index.js                # Utility functions
├── App.js                      # Main app component
└── index.js                    # App entry point
```

## 🏗️ Architecture Principles

### 1. **Separation of Concerns**
- **Layout Components**: Reusable layout elements (Header, Footer)
- **Section Components**: Page-specific content sections
- **Styles**: Organized by component with global styles separated
- **Assets**: Categorized by type (images, icons, documents)

### 2. **Naming Conventions**
- **Components**: PascalCase with descriptive names (e.g., `HeroSection.jsx`)
- **Files**: Consistent naming that reflects content purpose
- **Styles**: Component-specific SCSS modules with matching names

### 3. **Import Organization**
- **Barrel Exports**: Clean imports using `src/components/index.js`
- **Relative Paths**: Consistent relative import paths
- **Asset Paths**: Organized asset references

### 4. **Scalability Features**
- **Constants**: Centralized data management
- **Utils**: Reusable utility functions
- **Modular Styles**: Component-scoped styling
- **Asset Organization**: Easy asset management

## 📋 Component Breakdown

### Layout Components
- **Header**: Navigation, logo, resume download
- **Footer**: Copyright and attribution

### Section Components
- **HeroSection**: Introduction, profile image, social links
- **AboutSection**: Personal story, background, quick facts
- **SkillsSection**: Technical skills and tools
- **ExperienceSection**: Work history and achievements
- **ContactSection**: Contact information with copy functionality

## 🎨 Styling Architecture

### SCSS Modules
- Each component has its own SCSS module
- Scoped styling prevents conflicts
- Consistent naming conventions

### Global Styles
- Common styles in `styles/global/`
- Typography, fonts, and utilities
- App-wide CSS variables and mixins

## 📦 Assets Management

### Images (`src/assets/images/`)
- Profile pictures
- Company logos
- Technology logos

### Icons (`src/assets/icons/`)
- UI icons (SVG format)
- Social media icons
- Technology icons

### Documents (`src/assets/documents/`)
- Resume/CV files
- Certificates
- Other downloadable content

## 🔧 Utilities & Constants

### Constants (`src/constants/index.js`)
- Personal information
- Social media links
- Navigation items
- Skills data
- Experience data

### Utils (`src/utils/index.js`)
- Smooth scrolling
- Clipboard operations
- File downloads
- Date formatting
- Debounce functions

## 🚀 Benefits of This Structure

1. **Maintainability**: Easy to locate and modify specific components
2. **Scalability**: Simple to add new sections or features
3. **Reusability**: Components can be easily reused or extracted
4. **Performance**: Optimized imports and asset loading
5. **Developer Experience**: Clear organization and consistent patterns
6. **Production Ready**: Follows industry best practices

## 📝 Usage Examples

### Adding a New Section
1. Create component in `src/components/sections/`
2. Create corresponding SCSS in `src/styles/components/`
3. Export from `src/components/index.js`
4. Import and use in `App.js`

### Updating Constants
- Modify `src/constants/index.js` for data changes
- Components automatically reflect updates

### Adding New Assets
- Place in appropriate `src/assets/` subdirectory
- Reference using `/assets/` path in components

This structure provides a solid foundation for a professional, maintainable React application. 

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more
information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will
remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right
into your project so you have full control over them. All of the commands except `eject` will still work, but they will
point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you
shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't
customize it when you are ready for it.

## Learn More

You can learn more in
the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved
here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved
here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved
here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved
here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved
here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved
here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
