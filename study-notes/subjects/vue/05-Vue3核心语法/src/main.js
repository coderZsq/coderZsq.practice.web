import { createApp } from 'vue';
import App from './13_jsx的使用/App.vue';
import 'animate.css';

const app = createApp(App);

// app.mixin({
//   data() {
//     return {};
//   },
//   methods: {},
//   created() {
//     console.log('全局的created生命周期');
//   },
// });

app.mount('#app');
