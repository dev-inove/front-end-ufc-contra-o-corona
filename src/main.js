import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'

<nav class="navbar" >
        <div class="navbar-logo">
        <img src={Logo}
            alt="logo-combate-ao-covid-19" />
        </div>
    <div class="navbar-list">
        <nav id="nav" role="navigation">
        <a href="#nav">opa</a>
            <ul>
                <li  class="active">Home</li>
                <li >Ações</li>
                <li >Produções</li>
                <li >Necessidades</li>
                <li >Contatos</li>
                <li  class="action"> Cadastrar</li>
                <li><button> Login</button></li>    
            </ul>
        </nav>
    </div>
</nav>


Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
