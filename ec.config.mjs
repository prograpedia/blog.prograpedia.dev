import {defineEcConfig} from 'astro-expressive-code';
import {pluginLineNumbers} from '@expressive-code/plugin-line-numbers'

export default defineEcConfig({
  themes: ['github-light', 'github-dark'],
  customizeTheme: (theme) => {
    theme.name = theme.name.replace('github-', '');
    return theme;
  },
  themeCssSelector: (theme) => {
    return `.${theme.name}`
  },
  // useDarkModeMediaQuery: false,
  plugins: [pluginLineNumbers()],
  shiki: {
    langs: [
      import('./langs/vbnet.mjs'),
    ],
    langAlias: {
      // vbnet: 'vb',
    }
  }
});
