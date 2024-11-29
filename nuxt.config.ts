// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxt/fonts',
        '@nuxt/image',
        '@vueuse/nuxt',
        '@nuxt/icon',
        '@morev/vue-transitions/nuxt'
    ],

    experimental: {
        typedPages: true,
        payloadExtraction: true,
        renderJsonPayloads: true,
        inlineRouteRules: true,
        buildCache: true
    },

    css: ['@/assets/css/main.css'],

    vueTransitions: {
        defaultProps: {
            mode: 'out-in'
        }
    },

    app: {
        head: {
            title: 'WanderWork',
            htmlAttrs: {
                lang: 'en'
            },
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=10, user-scalable=1' }
            ],
            link: [
                // https://realfavicongenerator.net
                // { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png?v=1' },
                // { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png?v=1' },
                // { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png?v=1' },
                // { rel: 'mask-icon', href: '/safari-pinned-tab.svg?v=1', color: '#8d6558' },
                // { rel: 'shortcut icon', href: '/favicon.ico?v=1' },
                // { rel: 'manifest', href: '/manifest.json' }
            ],
            noscript: [
                { innerHTML: 'This website requires JavaScript.' }
            ]
        },
        pageTransition: {
            name: 'fade',
            mode: 'out-in'
        }
    },

    fonts: {
        families: [
            { name: 'Nunito Sans', provider: 'google' }
        ]
    }
});
