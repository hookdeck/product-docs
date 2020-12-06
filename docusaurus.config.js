module.exports = {
  title: "Hookdeck | Product Docs", // TODO: Update
  tagline: "Product documentation for hookdeck.io", // TODO: Update
  url: 'https://hookdeck.io/docs',
  baseUrl: "/docs/",
  onBrokenLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "hookdeck",
  projectName: "hookdeck-docs",
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
          href: "https://spectrum.chat/hookdeck",
          label: "Community",
          position: "left",
        },
        {
          href: "https://dashboard.hookdeck.io",
          label: "Sign In",
          position: "right",
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
              href: "https://github.com/hookdeck/product-docs",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Hookdeck, Inc.`,
    },
  },
  clientModules: [
    require.resolve('./src/scripts/loadSegment.js'),
    require.resolve('./src/scripts/loadCrisp.js'),
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
          editUrl:
            "https://github.com/hookdeck/product-docs/edit/master/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
