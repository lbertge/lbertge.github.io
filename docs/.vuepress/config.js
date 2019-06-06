const { path } = require('@vuepress/shared-utils')

module.exports = {
    ga: 'UA-123260924-1',
    plugins: [
      ['@vuepress/plugin-blog', {
        permalink: '/:year/:slug'
      }],
      '@vuepress/google-analytics',
      ['@vuepress/pwa', {
        serviceWorker: true,
        popupComponent: 'MySWUpdatePopup',
        updatePopup: true
      }],
      ['@vuepress/register-components', {
        componentsDir: [
          path.resolve('docs/.vuepress/components/beautiful-vue')
        ]
      }],
      'vuepress-plugin-reading-time'

    ],
    markdown: {
        extendMarkdown: md => {
            md.use(require("markdown-it-katex"))
              .use(require("markdown-it-mermaid").default)
        }
    },
    locales: {
        '/': {
            lang: 'en-US',
            title: "albert ge",
            description: "Albert's blog"
        },
        '/zh/': {
            lang: 'zh-CN',
            title: "albert ge",
            description: 'Albert Ge 博客'
        }
    },
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon.png` }],
        ['meta', { name: 'msapplication-TileImage', content: '/icons/mstile-150x150.png' }],
        ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
    ],
    title: "albert's blog",
    serviceWorker: true,
    themeConfig: {
        repo: 'lbertge/lbertge.github.io',
        editLinks: true,
        lastUpdated: 'Last Updated',
        excludeSearchPath: [
            'drafts/'
        ],
        docsDir: 'docs',
        locales: {
            '/': {
                label: 'English',
                selectText: 'Languages',
                editLinkText: 'Edit this page on GitHub',
                lastUpdated: 'Last Updated',
                serviceWorker: {
                    updatePopup: {
                        message: "New content is available.",
                        buttonText: "Refresh"
                    }
                },
                nav: [
                    { text: 'Blog', link: '/' },
                    { text: 'About', link: '/about/' },
                    { text: 'Books', link: '/books/' }
                ],
                sidebar: {
                    '/post/': genSidebarConfig('Blog')
                }
            },
            '/zh/': {
                label: '简体中文',
                selectText: '选择语言',
                editLinkText: '在 GitHub 上编辑此页',
                lastUpdated: '上次更新',
                serviceWorker: {
                    updatePopup: {
                        message: "发现新内容可用",
                        buttonText: "刷新"
                    }
                },
                nav: [
                    { text: '博客', link: '/zh/post/' },
                    { text: '关于', link: '/zh/about/' },
                    { text: '书', link: '/zh/books/' }
                ],
                sidebar: {
                    '/zh/post/': genSidebarConfig('博客')
                }
            }
        }
    }
}

function genSidebarConfig(title) {
    return [
        {
            title,
            collapsable: false,
            children: [
                'blog-setup'
            ]
        }
    ]
}

function getAllBlogPosts () {
    const posts = fs.readdirSync(blogDir)
    return posts
        .map( function (post) { 
            return {
                post: post.replace('.md', ''), 
                date: getGitFirstUpdatedTimeStamp(blogDir + post)
            }
        })
        .filter( post => !post.post.includes('README') )
        .sort( (post1, post2) => post1.date < post2.date )
}

function getGitFirstUpdatedTimeStamp (filepath) {
    return parseInt(spawn.sync('git', ['log', '-1', '--format=%ct', filepath]).stdout.toString('utf-8')) * 1000
}
