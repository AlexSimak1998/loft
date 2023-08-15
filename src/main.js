import '@/assets/main.css';
import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router/router.js';
import MyButton from '@/components/elements/MyButton.vue'

const app = createApp(App);

app.use(router);
app.component('my-button', MyButton)

app.mount('#app');