import Vue from 'vue'
import Router from 'vue-router'
import Syntax from 'components/Syntax'
import ClassBinding from 'components/ClassBinding';
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
        },
        {
            path: '/class',
            name: 'class',
            component: ClassBinding
        }
    ]
});
