// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Leto GraphQL Dart Server",
  tagline: "Documentation for Leto GraphQL Dart server libraries",
  url: "https://juancastillo0.github.io",
  baseUrl: "/leto/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/leto-icon-transparent.png",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "juancastillo0", // Usually your GitHub org/user name.
  projectName: "leto", // Usually your repo name.
  deploymentBranch: "gh-pages",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  clientModules: [require.resolve("./src/search-ctrl-k.js")],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          editUrl: ({ docPath }) =>
            `https://github.com/juancastillo0/leto/edit/main/${
              ["main", "graphql-schema-types"].includes(docPath.split("/")[0])
                ? ""
                : docPath.split("/")[0] + "/"
            }README.md`,
        },
        // blog: {
        //   showReadingTime: true,
        //   editUrl: () => "https://github.com/juancastillo0/leto",
        // },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: "G-6D49T4ZF7V",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/leto-logo-white.png",
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 3,
      },
      navbar: {
        title: "Leto GraphQL",
        logo: {
          alt: "Leto Logo",
          src: "img/leto-icon-transparent.png",
        },
        items: [
          {
            type: "doc",
            docId: "/category/main",
            position: "left",
            label: "Docs",
          },
          {
            href: "/docs/main/quickstart",
            label: "Tutorial",
            position: "left",
          },
          {
            href: "/docs/main/examples",
            label: "Showcase",
            position: "left",
          },
          // { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://pub.dev/packages/leto",
            label: "Dart API",
            position: "right",
          },
          {
            href: "https://github.com/juancastillo0/leto",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Dart Pub API",
                href: "https://pub.dev/packages/leto",
              },
              {
                label: "Code Generation",
                to: "/docs/category/leto_generator",
              },
              {
                label: "Shelf Web Server Integration",
                to: "/docs/category/leto_shelf",
              },
              {
                label: "GraphQL Schema Types",
                to: "/docs/category/graphql-schema-types",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Leto Issues",
                href: "https://github.com/juancastillo0/leto/issues",
              },
              {
                label: "Server Side Dart Gitter",
                href: "https://gitter.im/dart-lang/server",
              },
              {
                label: "Dart Community",
                href: "https://dart.dev/community",
              },
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/leto",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/juancastillo0",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/juancastillo0/leto",
              },
              {
                label: "Input Validation",
                href: "https://github.com/juancastillo0/valida",
              },
              {
                label: "GraphQL Base Libraries",
                href: "https://github.com/gql-dart/gql",
              },
              {
                label: "Database",
                href: "https://github.com/simolus3/drift/tree/develop/extras/drift_postgres",
              },
              {
                label: "GraphQL Clients",
                to: "/docs/main/web-integrations#clients",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Juan Manuel Castillo. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["dart"],
      },
    }),

  plugins:
    /** @type {import('@docusaurus/preset-classic').Plugins} */
    [
      [
        require.resolve("@cmfcmf/docusaurus-search-local"),
        {
          // Options here
        },
      ],
      [
        "@docusaurus/plugin-pwa",
        {
          offlineModeActivationStrategies: [
            "appInstalled",
            "standalone",
            "queryString",
          ],
          pwaHead: [
            {
              tagName: "link",
              rel: "manifest",
              href: "/manifest.json",
            },
            {
              tagName: "link",
              rel: "icon",
              href: "img/leto-icon-transparent.png",
            },
            {
              tagName: "link",
              rel: "apple-touch-icon",
              href: "img/leto-icon-transparent.png",
            },
            {
              tagName: "meta",
              name: "msapplication-TileImage",
              content: "img/leto-icon-transparent.png",
            },
            // {
            //   tagName: "link",
            //   rel: "mask-icon",
            //   href: "/img/docusaurus.svg",
            //   color: "rgb(37, 194, 160)",
            // },
            {
              tagName: "meta",
              name: "theme-color",
              content: "rgb(37, 194, 160)",
            },
            {
              tagName: "meta",
              name: "msapplication-TileColor",
              content: "#000",
            },
            {
              tagName: "meta",
              name: "apple-mobile-web-app-status-bar-style",
              content: "#000",
            },
            {
              tagName: "meta",
              name: "apple-mobile-web-app-capable",
              content: "yes",
            },
          ],
        },
      ],
    ],
};

module.exports = config;
