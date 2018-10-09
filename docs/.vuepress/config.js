module.exports = {
    title: 'Tagbu',
    description: "Why start using tagbu? Documentation details to be posted soon",
    themeConfig:{
        nav: [
            { text: 'COUNTER', link: '/counter/' },
            { text: 'GUIDE', link: '/guide/' },
        ],
        sidebar: [
            {
              title: 'Counter',
              collapsable: false,
              children: [
                '/counter/counter-app'
              ]
            },
            {
              title: 'API Guide',
              collapsable: false,
              children: [
                  '/guide/guide',
                  '/guide/api'
              ]
            }
          ]
    }
}