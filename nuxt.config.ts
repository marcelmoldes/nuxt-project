import {resolve} from "path";

export default defineNuxtConfig({
    alias: {
        assets: "/<rootDir>/assets"
    },
    css: [
        "/public/assets/css/bootstrap-grid.min.css",
        "/public/assets/css/plugins.css",
        "/public/assets/css/main.css",
        "/public/assets/icon-fonts/fontawesome/css/all.min.css",
        "/public/assets/icon-fonts/remixicon/remixicon.css",
    ],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    app: {
        head: {
            title: 'Nuxt Dojo',
            meta: [
                {
                    name: 'description', content: 'Everything about nuxt 3'
                }
            ],
            link: [
                {
                    rel: 'stylesheet', href: ''
                }
            ],
            script: [
                { type: 'text/javascript', src: '/assets/js/jquery.js' },
                { type: 'text/javascript', src: '/assets/js/plugins.js' },
            ]
        }
    }
})
