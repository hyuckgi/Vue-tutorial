import Vue from 'vue'
import Router from 'vue-router'
import Syntax from 'components/Syntax'
import ClassBinding from 'components/ClassBinding';
import StyleBinding from 'components/StyleBinding';
import Compute from 'components/Compute'
import Condition from 'components/Condition'
import Listing from 'components/Listing'

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
        },
        {
            path: '/style',
            name: 'style',
            component: StyleBinding
        },
        {
            path: '/condition',
            name: 'condition',
            component: Condition
        },
        {
            path: '/listing',
            name: 'listing',
            component: Listing
        }
    ]
});
