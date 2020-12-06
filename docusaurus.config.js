module.exports = {
  title: "My Site", // TODO: Update
  tagline: "The tagline of my site", // TODO: Update
  url: 'https://hookdeck.io/docs',
  baseUrl: "/docs",
  onBrokenLinks: "throw",
  favicon: "img/favicon.ico",
  organizationName: "hookdeck",
  projectName: "hookdeck-docs",
  favicon: 'https://v2.docusaurus.io/favicon.ico',
  themeConfig: {
    navbar: {
      hideOnScroll: true,
      logo: {
        alt: "Hookdeck Logo",
        srcDark: "img/logo-docs-light.svg",
        src: "img/logo-docs.svg",
      },
      items: [
        {
          href: "https://hookdeck.io",
          label: "Home",
          position: "left",
        },
        {
          href: "https://docs.hookdeck.io/",
          label: "API",
          position: "left",
        },
        {
          href: "https://hookdeck.io/blog/",
          label: "Blog",
          position: "left",
        },
        {
          href: "https://hookdeck.io",
          label: "Community",
          position: "left",
        },
      ],
    },
    footer: {
      style: "light",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Style Guide",
              to: "docs/",
            },
            {
              label: "Second Doc",
              to: "docs/doc2/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Spectrum",
              href: "https://spectrum.chat/hookdeck",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/facebook/docusaurus",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/", // Set this value to '/'.
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        // },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
