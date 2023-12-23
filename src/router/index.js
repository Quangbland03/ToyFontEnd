import {
  createRouter,
  createWebHistory
} from 'vue-router'
import Home from '../views/user/Home.vue'
import User from '../layouts/User.vue'
import Login from '../views/user/Login.vue'
import Register from '../views/user/Register.vue'
import Detail from '../views/user/Detail.vue'
import Cart from '../views/user/Cart.vue'
import Admin from '../layouts/Admin.vue'
import Product from '../views/admin/Product.vue'
import AddProduct from '../views/admin/AddProduct.vue'
import Category from '../views/admin/Category.vue'
import AddCategory from '../views/admin/AddCategory.vue'
import EditCategory from '../views/admin/EditCategory.vue'
import EditProduct from '../views/admin/EditProduct.vue'
import Error from '../views/Error.vue'
const router = createRouter({
  history: createWebHistory(
    import.meta.env.BASE_URL),
  routes: [{
      path: '/admin',
      name: 'Admin',
      component: Admin,
      redirect: '/admin',
      children: [{
          path: '/admin',
          name: 'product',
          component: Product
        },
        {
          path: '/admin/add',
          name: 'AddProduct',
          component: AddProduct
        },
        {
          path: '/admin/edit/:id',
          name: 'editProduct',
          component: EditProduct
        },
        {
          path: '/admin/category/add',
          name: 'AddCategory',
          component: AddCategory
        },
        {
          path: '/admin/category',
          name: 'category',
          component: Category
        },
        {
          path: '/admin/category/edit/:id',
          name: 'categoryEdit',
          component: EditCategory
        },
        
      ]
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
    }, {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/error',
      name: 'error',
      component: Error,
    },

    {
      path: '/',
      name: 'user',
      component: User,
      redirect: '/',
      children: [{
          path: '/',
          name: 'Home',
          component: Home
        },

        {
          path: '/detail/:id',
          name: 'detail',
          component: Detail
        },
        {
          path: '/cart',
          name: 'cart',
          component: Cart
        },



      ]
    },
   

  ]
  // },

})

export default router