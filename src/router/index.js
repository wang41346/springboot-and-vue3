import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/views/layout/Layout.vue'


/**
 * [
{
    "title": "个人中心",
    "path": ""
},
{
    "title": "用户",
    "children": [
        {
            "title": "员工管理",
            "path": ""
        },
        {
            "title": "角色列表",
            "path": ""
        },
        {
            "title": "权限列表",
            "path": ""
        }
    ]
},
{
    "title": "文章",
    "children": [
        {
            "title": "文章排名",
            "path": ""
        },
        {
            "title": "创建文章",
            "path": ""
        }
    ]
}
]
 */
//私有路由表
const privateRoutes = [
  {
    path:'/user',
    component:Layout,
    redirect:'/user/manage',
      meta: {
        title:'user',
        icon:'personnel'
      },
      children:[
        {
          path:'/user/manage',
          component: () => import('@/views/profile/user-manage'),
          meta: {
            title:'userManage',
            icon: 'personnel-manage'
          }
        },
        {
          path:'/user/role',
          component: () => import('@/views/profile/role-list'),
          meta: {
            title:'roleList',
            icon: 'role'
          }
        },
        {
          path:'/user/permission',
          component: () => import('@/views/profile/permission-list'),
          meta: {
            title:'permissionList',
            icon: 'permission'
          }
        },
        {
          path:'/user/info/:id',
          name:'userInfo',
          component: () => import('@/views/profile/user-info'),
          meta: {
            title:'userInfo'
          }
        },
        {
          path:'/user/import',
          name:'import',
          component: () => import('@/views/profile/import'),
          meta: {
            title:'excelImport'
          }
        }
      ]
  },
  {
    path:'/acticle',
    component:Layout,
    redirect:'/acticle/ranking',
    meta:{
      title:'acticle',
      icon:'article'
    },
    children:[
      {
        path:'/article/ranking',
        component: () => import('@/views/article/Article-Ranking.vue'),
        meta:{
          title:'articleRanking',
          icon:'article-ranking'
        }
      },
      {
        path:'/article/:id',
        component: () => import('@/views/article/Article-Detail.vue'),
        meta: {
          title:'articleDetail'
        }
      },
      {
        path:'/article/create',
        component: () => import('@/views/article/Article-Create.vue'),
        meta: {
          title:'articleCreate',
          icon:'article-create'
        }
      },
      {
        path:'',
        component: () => import('@/views/article/Article-Create.vue'),
        meta: {
          title:'articleEditor',
        }
      }
    ]
  }
]

//公开路由表
const publicRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/Login.vue')
  },
  {
    path: '/',
    component: Layout,
    redirect: '/profile',
    children: [
      {
        path: '/profile',
        name: 'profile',
        component: () => import('@/views/profile/Profile.vue'),
        meta: {
          title: 'profile',
          icon: 'el-icon-user'
        }
      },
      {
        path: '/404',
        name: '404',
        component: () => import('@/views/error-page/404')
      },
      {
        path: '/401',
        name: '401',
        component: () => import('@/views/error-page/401')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes:[...privateRoutes, ...publicRoutes]
})
export default router

