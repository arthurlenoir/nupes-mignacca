// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Julia Mignacca',
  tagline: 'Élections Législatives 2022',
  url: 'https://www.juliamignacca.fr/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'arthurlenoir',
  projectName: 'nupes-mignacca',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'oc'],
    localeConfigs: {
      fr: {
        htmlLang: 'fr-FR',
      },
    },
  },
  plugins: ['docusaurus-plugin-matomo', 'docusaurus-plugin-sass'],
  scripts: [{
    src: '/js/matomo.js',
    async: false,
  }],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: 'programme',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'daily',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '',
        logo: {
          alt: 'NUPES Logo',
          src: 'img/nupes-logo.svg',
        },
        items: [{
          to: '/',
          position: 'left',
          label: 'Accueil',
        }, {
          to: 'notre-programme',
          position: 'left',
          label: 'Programme',
        }, 
        {
          to: 'comite-de-soutien',
          position: 'left',
          label: 'Nos soutiens',
        },
        {
          to: 'agenda',
          position: 'left',
          label: 'Agenda',
        },
        {
          to: 'procuration',
          position: 'left',
          label: 'Procuration',
        },
        /*{
          to: 'notre-candidate',
          position: 'left',
          label: 'Présentation',
        },*/
          /*{
            type: 'doc',
            docId: 'index',
            position: 'left',
            label: 'Programme',
          },
          {
            to: 'agenda',
            position: 'left',
            label: 'Nous Rencontrer',
          },
          {
            to: 'notre-candidate',
            position: 'left',
            label: 'Présentation',
          },*/
          {
            href: 'mailto:julia@mignacca.fr',
            label: 'Email',
            position: 'right',
            id: 'email'
          },
          {
            href: 'https://twitter.com/JuliaMignacca',
            label: 'Twitter',
            position: 'right',
            id: 'twitter'
          },
          {
            href: 'https://www.facebook.com/JuliaMignacca',
            label: 'Facebook',
            position: 'right',
            id: 'facebook'
          },
          {
            href: 'https://www.instagram.com/julia.mignacca/',
            label: 'Instagram',
            position: 'right',
            id: 'instagram'
          },
          {
            href: 'https://t.me/juliamignacca',
            label: 'Telegram',
            position: 'right',
            id: 'telegram'
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      colorMode: {
        disableSwitch: true
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      matomo: {
        matomoUrl: 'https://matomo.noussommes.org/',
        siteId: '2',
        phpLoader: 'matomo.php',
        jsLoader: 'matomo.js',
      },
    }),
};

module.exports = config;
