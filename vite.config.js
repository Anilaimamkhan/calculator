// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig({
//   plugins: [react()]
  
// })




// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Check environment variable
const isGitHubPages = process.env.DEPLOY_TARGET === 'GH_PAGES';

export default defineConfig({
  plugins: [react()],
  base: isGitHubPages ? '/calculator/' : '/', // ✅ dynamic base
})

