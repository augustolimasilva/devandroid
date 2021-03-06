import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/usuario/Login.vue'
import CadastroUsuario from '@/components/usuario/CadastroUsuario.vue'
import Home from '@/components/fornecedor/Home.vue'
import CadastroFornecedor from '@/components/fornecedor/CadastroFornecedor.vue'
import ListarFornecedores from '@/components/fornecedor/ListarFornecedores.vue'
import VueResource from 'vue-resource';
import store from '@/store/store.js'

Vue.use(VueRouter)
Vue.use(VueResource);

function requireAuth (to, from, next) {
  if (store.state.token == null) {
    next({ name: 'Login' })
  } else {
    next();
  }
}

export const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/cadastrousuario',
    name: 'CadastroUsuario',
    component: CadastroUsuario
  },
  {
    path: '/cadastrofornecedor',
    name: 'CadastroFornecedor',
    component: CadastroFornecedor,
    beforeEnter: requireAuth
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    beforeEnter: requireAuth
  },
  {
    path: '/listarfornecedores',
    name: 'ListarFornecedores',
    component: ListarFornecedores,
    beforeEnter: requireAuth
  }
]

export default new VueRouter({
  mode: 'history',
  routes,
  linkActiveClass:'active'
})