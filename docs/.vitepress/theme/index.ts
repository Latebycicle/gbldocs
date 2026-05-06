import DefaultTheme from 'vitepress/theme'
import ColorSwatch from './components/ColorSwatch.vue'
import './styles/design-system.css'
import type { Theme } from 'vitepress'

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
