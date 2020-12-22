module.exports = {
  title: "Hookdeck | Product Docs", // TODO: Update
  tagline: "Product documentation for hookdeck.io", // TODO: Update
  url: "https://hookdeck.io/docs",
  baseUrl: "/docs/",
  onBrokenLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "hookdeck",
  projectName: "hookdeck-docs",
  themeConfig: {
    respectPrefersColorScheme: true,
    algolia: {
      apiKey: "92d519be349a469f21d306736880edab",
      indexName: "hookdeck",
      contextualSearch: false,
    },
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
          title: "Product",
          items: [
            {
              label: "Pricing",
              href: "https://hookdeck.io/pricing",
            },
            {
              label: "For Production",
              href: "https://hookdeck.io/for-production",
            },
            {
              label: "For Development",
              href: "https://hookdeck.io/for-development",
            },
          ],
        },
        {
          title: "Resources",
          items: [
            {
              label: "API Docs",
              href: "https://docs.hookdeck.io",
            },
            {
              label: "Community",
              href: "https://spectrum.chat/hookdeck",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "Blog",
              href: "https://hookdeck.io/blog",
            },
            {
              label: "Contact Us",
              href: "https://hookdeck.io/contact-us",
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
  clientModules: [require.resolve("./src/scripts/tracking.js")],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
          editUrl: "https://github.com/hookdeck/product-docs/edit/master/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
