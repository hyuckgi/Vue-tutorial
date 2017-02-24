import Vue from 'vue'
import Router from 'vue-router'
import Syntax from 'components/Syntax'
import Compute from 'components/Compute'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Syntax',
            component: Syntax
        },
        {
            path: '/compute',
            name: 'Compute',
            component: Compute
        }
    ]
});
