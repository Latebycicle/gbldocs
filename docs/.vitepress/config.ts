import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'GBL Internal Hub',
  description: 'Internal resources for the Good Business Lab team',
  // TODO: replace 'gbldocs' with your actual GitHub repo name.
  // This MUST match the repository name exactly for GitHub Pages deployment to work.
  // Example: if your repo is https://github.com/myorg/my-docs, set base: '/my-docs/'
  base: '/gbldocs/',
  lang: 'en-US',
  cleanUrls: false,

  themeConfig: {
    logo: 'https://framerusercontent.com/images/FEIiyE7QB8Qn2IJVCnBDy2T2M.png',

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
