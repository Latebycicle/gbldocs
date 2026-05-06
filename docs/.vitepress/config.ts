import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'GBL Internal Hub',
  description: 'Internal resources for the Good Business Lab team',
  // Base path for GitHub Pages deployment at latebycicle.github.io/gbldocs/
  base: '/gbldocs/',
  lang: 'en-US',
  cleanUrls: true,

  themeConfig: {
    logo: '/blacklogo.webp',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Brand Guidelines', link: '/brand-guidelines' },
      { text: 'Resources', link: '/resources' },
      { text: 'Projects', link: '/projects' },
    ],

    sidebar: [
      { text: 'Home', link: '/' },
      { text: 'Brand Guidelines', link: '/brand-guidelines' },
      { text: 'Resources', link: '/resources' },
      { text: 'Projects', link: '/projects' },
    ],

    socialLinks: [
      {
        icon: 'linkedin',
        link: 'https://www.linkedin.com/company/good-business-lab/',
      },
    ],

    footer: {
      message: 'Good Business Lab Internal Hub — not for external distribution',
    },
  },
})
