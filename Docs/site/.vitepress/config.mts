import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/MSAndrea/",
  srcDir: "md",
  title: "MS Andrea",
  description: "A search engine designed to directly identify peptide modifications at the PSM level!",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "https://github.com/hgb-bin-proteomics/MSAndrea/raw/main/Logo/MS_Andrea_logo_col.png",
      },
    ],
  ],
  markdown: {
   theme: {
     light: "catppuccin-latte",
     dark: "catppuccin-mocha",
    },
  },
  lastUpdated: true,
  themeConfig: {
    logo: {
      src: "https://github.com/hgb-bin-proteomics/MSAndrea/raw/main/Logo/MS_Andrea_logo_col.png",
      alt: "logo",
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Documentation", link: "/documentation" },
      { text: "Contact", link: "/contact" },
    ],
    sidebar: [
      {
        items: [
          { text: "Documentation", link: "/documentation" },
          { text: "Contact", link: "/contact" },
        ],
      },
    ],
    footer: {
      copyright: "Copyright © 2026 Louise M. Buur"
    },
    socialLinks: [{ icon: "github", link: "https://github.com/hgb-bin-proteomics/MSAndrea" }],
    search: {
        provider: 'local'
    },
    editLink: {
      pattern: 'https://github.com/hgb-bin-proteomics/MSAndrea/edit/main/Docs/site/md/:path'
    },
  },
})
