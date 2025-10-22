# HODL Token Club dApp - Netlify Deployment

## 🚀 Deployment Instructions

### 1. **Build Configuration**
- **Build Command:** `npm run build`
- **Publish Directory:** `build`
- **Node Version:** 18

### 2. **Environment Variables**
No additional environment variables required for basic deployment.

### 3. **Build Process**
The build process:
1. Compiles TypeScript (`tsc`)
2. Copies mainnet configuration
3. Builds with Vite for production

### 4. **Features Included**
- ✅ HODL Token Club Landing Page
- ✅ Interactive Token Cards with 3D Flip Effects
- ✅ NFT Carousel for Empyreans Collection
- ✅ HODL Founder NFT Section with Video
- ✅ MakeX Platform Section
- ✅ Responsive Design
- ✅ Clean Video Controls
- ✅ Perfect Column Alignments

### 5. **File Structure**
```
build/
├── index.html
├── assets/
│   ├── index-*.js
│   ├── index-*.css
│   └── [various assets]
└── [other static files]
```

### 6. **Deployment Steps**
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Deploy!

### 7. **Custom Domain (Optional)**
After deployment, you can add a custom domain in Netlify settings.

### 8. **Performance Notes**
- Build includes code splitting
- Assets are optimized and compressed
- Videos are properly configured for web delivery
- All images are optimized

## 🔧 Troubleshooting

### Build Issues
- Ensure Node.js 18 is selected in Netlify
- Check that all dependencies are in package.json
- Verify build command is correct

### Runtime Issues
- Check browser console for errors
- Verify all external links are accessible
- Test video playback in different browsers

## 📱 Browser Support
- Chrome (recommended)
- Firefox
- Safari
- Edge

## 🎯 Live Testing
Once deployed, test:
- [ ] Token card flip effects
- [ ] NFT carousel navigation
- [ ] Video playback
- [ ] Responsive design on mobile
- [ ] All external links work
- [ ] Wallet connection (if implemented)

---
**Built with:** React, TypeScript, Vite, Tailwind CSS, MultiversX SDK
