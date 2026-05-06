/// <reference path="./css.d.ts" />

import DefaultTheme from 'vitepress/theme-without-fonts'
import ColorSwatch from './components/ColorSwatch.vue'
import type { Theme } from 'vitepress'
import './styles/theme.css'

// TODO: Firebase Auth — add authentication guard here before going live
// Steps: install firebase, initialise app, check auth state on route change
// See: https://firebase.google.com/docs/auth/web/google-signin

const theme: Theme = {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('ColorSwatch', ColorSwatch)
  },
}

export default theme
