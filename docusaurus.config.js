// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  plugins: ["@docusaurus/theme-live-codeblock"],
  title: "5fancy-bot",
  tagline: "Front-end is fancy! 🤩",
  url: "https://5fancy-bot.tinsfox.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon:
    "https://avatars.githubusercontent.com/u/108779566?s=400&u=40dfea48a10705e4a1f3fe267f3977498abbae4f&v=4",
  githubHost: "github.com",
  githubPort: "22",
  organizationName: "5fancy-bot",
  projectName: "5fancy-bot.github.io",
  deploymentBranch: "gh-pages",
  i18n: {
    defaultLocale: "zh-CN",
    locales: ["en", "zh-CN"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "sidebars.js",
          editUrl: "http://github.com/5fancy-bot.github.io",
        },
        blog: {
          showReadingTime: true,
          editUrl: "http://github.com/5fancy-bot.github.io",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      liveCodeBlock: {
        playgroundPosition: "bottom",
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      navbar: {
        hideOnScroll: true,
        title: "5fancy-bot",
        logo: {
          alt: "5fancy-bot",
          src: "https://avatars.githubusercontent.com/u/108779566?s=400&u=40dfea48a10705e4a1f3fe267f3977498abbae4f&v=4",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Doc",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "http://github.com/5fancy-bot/5fancy-bot.github.io",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      sidebar: {
        autoCollapseCategories: true,
        hideable: true,
      },
      footer: {
        style: "dark",
        copyright: `Copyright © 2022 5fancy-bot, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
