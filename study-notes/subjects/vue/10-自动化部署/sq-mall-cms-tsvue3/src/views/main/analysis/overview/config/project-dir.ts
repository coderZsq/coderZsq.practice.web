export const projectDir = `
├── README.md
├── babel.config.js
├── commitlint.config.js
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html
├── src
│   ├── App.vue
│   ├── assets
│   │   ├── css
│   │   │   ├── base.css
│   │   │   ├── index.css
│   │   │   └── variable.less
│   │   └── img
│   │       ├── login-bg.svg
│   │       └── logo.svg
│   ├── base-ui
│   │   ├── breadcrumb
│   │   │   ├── index.ts
│   │   │   ├── src
│   │   │   │   └── breadcrumb.vue
│   │   │   └── types
│   │   │       └── index.ts
│   │   ├── card
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       └── card.vue
│   │   ├── code
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       └── code.vue
│   │   ├── count-up
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       └── countup.vue
│   │   ├── descriptions
│   │   │   ├── index.ts
│   │   │   ├── src
│   │   │   │   └── descriptions.vue
│   │   │   └── types
│   │   │       └── types.ts
│   │   ├── echarts
│   │   │   ├── data
│   │   │   │   └── china.json
│   │   │   ├── hooks
│   │   │   │   └── useEcharts.ts
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       └── base-echart.vue
│   │   ├── form
│   │   │   ├── index.ts
│   │   │   ├── src
│   │   │   │   └── form.vue
│   │   │   └── types
│   │   │       └── index.ts
│   │   ├── table
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       └── table.vue
│   │   └── text-link
│   │       ├── index.ts
│   │       └── src
│   │           └── textlink.vue
│   ├── components
│   │   ├── nav-header
│   │   │   ├── hooks
│   │   │   │   └── useMenuIconHook.ts
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       ├── nav-header.vue
│   │   │       └── nav-info.vue
│   │   ├── nav-menu
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       └── nav-menu.vue
│   │   ├── page-charts
│   │   │   ├── index.ts
│   │   │   ├── src
│   │   │   │   ├── bar-echart.vue
│   │   │   │   ├── line-echart.vue
│   │   │   │   ├── map-echart.vue
│   │   │   │   ├── pie-echart.vue
│   │   │   │   └── rose-echart.vue
│   │   │   ├── types
│   │   │   │   └── index.ts
│   │   │   └── utils
│   │   │       ├── convert-data.ts
│   │   │       └── coordinate-data.ts
│   │   ├── page-content
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       └── page-content.vue
│   │   ├── page-modal
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       └── page-modal.vue
│   │   ├── page-search
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       └── page-search.vue
│   │   └── statistical-panel
│   │       ├── index.ts
│   │       └── src
│   │           └── statistical-panel.vue
│   ├── global
│   │   ├── index.ts
│   │   ├── register-element.ts
│   │   └── register-properties.ts
│   ├── hooks
│   │   ├── useEcharts.ts
│   │   ├── usePageModal.ts
│   │   ├── usePageSearch.ts
│   │   └── usePermission.ts
│   ├── main.ts
│   ├── router
│   │   ├── index.ts
│   │   ├── login
│   │   │   └── login.ts
│   │   ├── main
│   │   │   ├── analysis
│   │   │   │   ├── dashboard
│   │   │   │   │   └── dashboard.ts
│   │   │   │   └── overview
│   │   │   │       └── overview.ts
│   │   │   ├── main.ts
│   │   │   ├── product
│   │   │   │   ├── category
│   │   │   │   │   └── category.ts
│   │   │   │   └── goods
│   │   │   │       └── goods.ts
│   │   │   ├── story
│   │   │   │   ├── chat
│   │   │   │   │   └── chat.ts
│   │   │   │   └── list
│   │   │   │       └── list.ts
│   │   │   └── system
│   │   │       ├── department
│   │   │       │   └── department.ts
│   │   │       ├── menu
│   │   │       │   └── menu.ts
│   │   │       ├── role
│   │   │       │   └── role.ts
│   │   │       └── user
│   │   │           └── user.ts
│   │   └── not-found
│   │       └── not-found.ts
│   ├── service
│   │   ├── index.ts
│   │   ├── login
│   │   │   ├── login.ts
│   │   │   └── types.ts
│   │   ├── main
│   │   │   ├── analysis
│   │   │   │   └── analysis.ts
│   │   │   ├── product
│   │   │   └── system
│   │   │       └── system.ts
│   │   └── request
│   │       ├── config.ts
│   │       ├── request.ts
│   │       └── type.ts
│   ├── shims-vue.d.ts
│   ├── store
│   │   ├── index.ts
│   │   ├── login
│   │   │   ├── login.ts
│   │   │   └── types.ts
│   │   ├── main
│   │   │   ├── analysis
│   │   │   │   ├── analysis.ts
│   │   │   │   └── types.ts
│   │   │   ├── product
│   │   │   └── system
│   │   │       ├── system.ts
│   │   │       └── types.ts
│   │   └── types.ts
│   ├── utils
│   │   ├── cache.ts
│   │   ├── date-formt.ts
│   │   └── map-menu.ts
│   └── views
│       ├── login
│       │   ├── cpns
│       │   │   ├── login-account.vue
│       │   │   ├── login-account2.vue
│       │   │   ├── login-panel.vue
│       │   │   └── login-phone.vue
│       │   ├── login.vue
│       │   └── types
│       │       └── index.ts
│       ├── main
│       │   ├── analysis
│       │   │   ├── dashboard
│       │   │   │   └── dashboard.vue
│       │   │   └── overview
│       │   │       ├── config
│       │   │       │   ├── dependencies.ts
│       │   │       │   ├── dev-dependencies.ts
│       │   │       │   ├── index.ts
│       │   │       │   ├── project-dir.ts
│       │   │       │   └── technology-stacks.ts
│       │   │       └── overview.vue
│       │   ├── main.vue
│       │   ├── product
│       │   │   ├── category
│       │   │   │   ├── category.vue
│       │   │   │   └── config
│       │   │   │       ├── content.config.ts
│       │   │   │       └── search.config.ts
│       │   │   └── goods
│       │   │       ├── config
│       │   │       │   ├── content.config.ts
│       │   │       │   └── search.config.ts
│       │   │       └── goods.vue
│       │   ├── story
│       │   │   ├── chat
│       │   │   │   └── chat.vue
│       │   │   └── list
│       │   │       ├── config
│       │   │       │   └── content.config.ts
│       │   │       └── list.vue
│       │   └── system
│       │       ├── department
│       │       │   ├── config
│       │       │   │   ├── content.config.ts
│       │       │   │   ├── modal.config.ts
│       │       │   │   └── search.config.ts
│       │       │   └── department.vue
│       │       ├── menu
│       │       │   ├── config
│       │       │   │   └── content.config.ts
│       │       │   └── menu.vue
│       │       ├── role
│       │       │   ├── config
│       │       │   │   ├── content.config.ts
│       │       │   │   ├── modal.config.ts
│       │       │   │   └── search.config.ts
│       │       │   └── role.vue
│       │       └── user
│       │           ├── config
│       │           │   ├── content.config.ts
│       │           │   ├── modal.config.ts
│       │           │   └── search.config.ts
│       │           └── user.vue
│       └── not-found
│           └── not-found.vue
├── tsconfig.json
├── types
│   └── vuex.d.ts
└── vue.config.js
`
