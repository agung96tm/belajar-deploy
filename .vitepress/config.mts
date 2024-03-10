import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Belajar Deploy NodeJS",
  description: "Belajar Deploy untuk Pemula dan Mahir",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Tutorial', link: '/01-tutorial/000-introduction' },
      { text: 'How to', link: '/02-how-to/000-introduction'},
      { text: 'Explain', link: '/03-explain/000-introduction'},
      { text: 'API', link: '/04-api/000-introduction'},
    ],

    sidebar: [
      {
        text: 'Tutorial',
        items: [
          { text: 'Deployment NodeJS - Manual', link: '/01-tutorial/001-deploy-node-js-application' },
          { text: 'Deployment NodeJS - Kubernetes', link: '/01-tutorial/002-deploy-node-js-application-kubernetes'}
        ]
      },
      {
        text: 'How to',
        items: [
          { text: 'Install NodeJS', link: '/02-how-to/001-init-node-js'},
          { text: 'Memulai Project', link: '/02-how-to/002-init-project-node-js'},
          { text: 'Install dan Menjalankan Nginx', link: '/02-how-to/003-init-nginx'}
        ]
      },
      {
        text: 'Explanation',
        items: [
          { text: 'Javascript VS Typescript', link: '/03-explain/001-javascript-vs-typescript'},
          { text: 'Nginx', link: '/03-explain/002-nginx'},
          { text: 'NVM', link: '/03-explain/003-nvm' },
        ]
      },
      {
        text: 'API',
        items: []
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/agung96tm' },
      { icon: 'linkedin', link: 'https://id.linkedin.com/in/agung96tm'},
    ]
  }
})
