// import Vue from 'vue';
import { createApp } from 'vue';
// import App from './App.vue';
import App from './App';    // webpack.config.js의 resolve에 extensions: ['.js', '.vue']를 추가했기 때문에 확장자를 생략할 수 있다.

// Vue.createApp(App).mount('#app');
createApp(App).mount('#app');