import vueRouter from 'vue-router'
import User from './components/User' 
import UserBalance from './components/UserBalance'
import App from'./App'

const router = new vueRouter({
    mode:'history',
    base: __dirname,
    routes:[
        {
        path: '/',
        name: "root",
        component: App
        },

        {
        path: '/user/:username', // "/user/{username}"
        name: "user", 
        component: User
        },

        // aqui se encuentra la configuración de la ruta user_balance que llamamos en la funcion getBalance de App.vue
        {
        path:'/user/balance/:username', // ruta que se verá en el navegador
        name: "user_balance", // nombre de este router, que es como se va a identificar cuando lo "llamemos"
        component: UserBalance // el componente que se conecta con el backend. es decir el archivo .vue
        },
    ]
})
export default router