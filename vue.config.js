module.exports = {
    css: {
        loaderOptions: {
            sass: {
                additionalData: `@import "@/sass/variables.scss";`
            }
        }
    },
    pwa: {
        name: 'Plue Card',
        themeColor: '#00aee9',
        msTileColor: '#000000',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: 'black',
        workboxOptions: {
            skipWaiting: true,
            clientsClaim: true,
        }
    },
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = "PlueCard";
                return args;
            })
    }
}