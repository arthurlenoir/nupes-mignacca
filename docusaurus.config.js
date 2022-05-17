// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Julia Mignacca',
  tagline: 'Élections Législatives 2022',
  url: 'https://arthurlenoir.github.io/',
  baseUrl: '/nupes-mignacca/',
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
    defaultLocale: 'fr-FR',
    locales: ['fr-FR', 'oc'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: 'programme',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Accueil',
        logo: {
          alt: 'NUPES Logo',
          src: 'img/nupes-logo.svg',
        },
        items: [
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
            href: 'https://twitter.com/JuliaMignacca',
            label: 'Twitter',
            position: 'right',
            id: 'twitter'
          },
          {
            href: 'https://www.facebook.com/julia.mignacca.71',
            label: 'Facebook',
            position: 'right',
            id: 'facebook'
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
    }),
};

module.exports = config;
