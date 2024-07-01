import { defineConfig } from 'dumi';
import { resolve } from 'node:path';

import { homepage, name } from '../package.json';

const isWin = process.platform === 'win32';

const themeConfig = {
  actions: [
    {
      icon: 'Github',
      link: homepage,
      openExternal: true,
      text: 'Github',
    },
    {
      link: '/components/example',
      text: 'Get Started',
      type: 'primary',
    },
  ],
  apiHeader: {
    docUrl: `{github}/tree/master/src/{atomId}/index.md`,
    match: ['/components'],
    pkg: name,
    sourceUrl: `{github}/tree/master/src/{atomId}/index.tsx`,
    type: 'doc',
  },
  description: 'AiPM UI is an open-source UI component library for building chatbot web apps',
  footer: 'Made with 🌿 by AiPMHub',
  giscus: {
    category: 'Q&A',
    categoryId: 'DIC_kwDOMNDKq84Cgci4',
    repo: 'aipmhub/aipm-ui',
    repoId: 'R_kgDOMNDKqw',
  },
  name: 'DUMI',
  socialLinks: {
    discord: 'https://discord.gg/sYB5zSyD',
    github: homepage,
  },
  title: 'Dumi Theme AiPMHub',
};

export default defineConfig({
  alias: {
    '@': resolve(__dirname, '../src'),
    'dumi-theme-aipmhub': resolve(__dirname, '../src'),
  },
  codeSplitting: {
    jsStrategy: 'granularChunks',
  },
  define: {
    'process.env': process.env,
  },
  favicons: ['https://npm.elemecdn.com/@aipmui/assets-favicons/assets/favicon.ico'],
  locales: [{ id: 'en-US', name: 'English' }],
  mfsu: isWin ? undefined : {},
  npmClient: 'pnpm',
  ssr: false,
  styles: [
    `html, body { background: transparent;  }

  @media (prefers-color-scheme: dark) {
    html, body { background: #000; }
  }`,
  ],
  themeConfig,
  title: 'Dumi Theme AiPMHub',
});
