import { createApp } from 'vue';
import App from './14_自定义指令/App.vue';
import 'animate.css';
import registerDirectives from './directives';
import pluginObject from './plugins/plugins_object';
import pluginFunction from './plugins/plugins_function';

const app = createApp(App);

registerDirectives(app);

app.use(pluginObject);
app.use(pluginFunction);

// app.directive('focus', {
//   mounted(el, bindings, vnode, preVnode) {
//     console.log('focus mounted');
//     el.focus();
//   },
// }),
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
