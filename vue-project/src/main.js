import { createApp } from 'vue'

import App from './App.vue'
import FoodItem from './component/FoodItem.vue'
import FoodItem2 from './component/FoodItem2.vue'

const app = createApp(App)

app.component('food-item', FoodItem)
app.component('food-item2', FoodItem2)

app.mount('#app')
