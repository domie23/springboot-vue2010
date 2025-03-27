import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
    // 解决多次点击左侧菜单报错问题
    const VueRouterPush = VueRouter.prototype.push
    VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
    }
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
import beifen from '@/views/modules/databaseBackup/beifen'
import huanyuan from '@/views/modules/databaseBackup/huanyuan'

     import users from '@/views/modules/users/list'
    import dictionary from '@/views/modules/dictionary/list'
    import gongchenganpai from '@/views/modules/gongchenganpai/list'
    import hetong from '@/views/modules/hetong/list'
    import shouhou from '@/views/modules/shouhou/list'
    import yonghu from '@/views/modules/yonghu/list'
    import yusuan from '@/views/modules/yusuan/list'
    import zhuangxiufengge from '@/views/modules/zhuangxiufengge/list'
    import zhuangxiufenggeCollection from '@/views/modules/zhuangxiufenggeCollection/list'
    import zhuangxiufenggeLiuyan from '@/views/modules/zhuangxiufenggeLiuyan/list'
    import zhucai from '@/views/modules/zhucai/list'
    import zhucaiCollection from '@/views/modules/zhucaiCollection/list'
    import zhucaiLiuyan from '@/views/modules/zhucaiLiuyan/list'
    import config from '@/views/modules/config/list'
    import dictionaryFangyuan from '@/views/modules/dictionaryFangyuan/list'
    import dictionaryGongchenganpai from '@/views/modules/dictionaryGongchenganpai/list'
    import dictionaryHetong from '@/views/modules/dictionaryHetong/list'
    import dictionaryHuxing from '@/views/modules/dictionaryHuxing/list'
    import dictionaryPinpai from '@/views/modules/dictionaryPinpai/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'
    import dictionaryShangxia from '@/views/modules/dictionaryShangxia/list'
    import dictionaryShouhou from '@/views/modules/dictionaryShouhou/list'
    import dictionaryYusuan from '@/views/modules/dictionaryYusuan/list'
    import dictionaryZhuangxiufengge from '@/views/modules/dictionaryZhuangxiufengge/list'
    import dictionaryZhuangxiufenggeCollection from '@/views/modules/dictionaryZhuangxiufenggeCollection/list'
    import dictionaryZhucai from '@/views/modules/dictionaryZhucai/list'
    import dictionaryZhucaiCollection from '@/views/modules/dictionaryZhucaiCollection/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }, {
        path: '/huanyuan',
        name: '数据还原',
        component: huanyuan
    }, {
        path: '/beifen',
        name: '数据备份',
        component: beifen
    }, {
        path: '/users',
        name: '管理信息',
        component: users
    }
    ,{
        path: '/dictionaryFangyuan',
        name: '房源',
        component: dictionaryFangyuan
    }
    ,{
        path: '/dictionaryGongchenganpai',
        name: '工程进度',
        component: dictionaryGongchenganpai
    }
    ,{
        path: '/dictionaryHetong',
        name: '合同状态',
        component: dictionaryHetong
    }
    ,{
        path: '/dictionaryHuxing',
        name: '户型',
        component: dictionaryHuxing
    }
    ,{
        path: '/dictionaryPinpai',
        name: '品牌',
        component: dictionaryPinpai
    }
    ,{
        path: '/dictionarySex',
        name: '性别类型',
        component: dictionarySex
    }
    ,{
        path: '/dictionaryShangxia',
        name: '上下架',
        component: dictionaryShangxia
    }
    ,{
        path: '/dictionaryShouhou',
        name: '服务类型',
        component: dictionaryShouhou
    }
    ,{
        path: '/dictionaryYusuan',
        name: '预算类型',
        component: dictionaryYusuan
    }
    ,{
        path: '/dictionaryZhuangxiufengge',
        name: '装修风格类型',
        component: dictionaryZhuangxiufengge
    }
    ,{
        path: '/dictionaryZhuangxiufenggeCollection',
        name: '收藏表类型',
        component: dictionaryZhuangxiufenggeCollection
    }
    ,{
        path: '/dictionaryZhucai',
        name: '主材类型',
        component: dictionaryZhucai
    }
    ,{
        path: '/dictionaryZhucaiCollection',
        name: '收藏表类型',
        component: dictionaryZhucaiCollection
    }
    ,{
        path: '/config',
        name: '轮播图',
        component: config
    }


    ,{
        path: '/dictionary',
        name: '字典',
        component: dictionary
      }
    ,{
        path: '/gongchenganpai',
        name: '工程安排',
        component: gongchenganpai
      }
    ,{
        path: '/hetong',
        name: '合同',
        component: hetong
      }
    ,{
        path: '/shouhou',
        name: '售后服务',
        component: shouhou
      }
    ,{
        path: '/yonghu',
        name: '用户',
        component: yonghu
      }
    ,{
        path: '/yusuan',
        name: '预算',
        component: yusuan
      }
    ,{
        path: '/zhuangxiufengge',
        name: '装修风格',
        component: zhuangxiufengge
      }
    ,{
        path: '/zhuangxiufenggeCollection',
        name: '装修风格收藏',
        component: zhuangxiufenggeCollection
      }
    ,{
        path: '/zhuangxiufenggeLiuyan',
        name: '装修风格留言',
        component: zhuangxiufenggeLiuyan
      }
    ,{
        path: '/zhucai',
        name: '主材',
        component: zhucai
      }
    ,{
        path: '/zhucaiCollection',
        name: '主材收藏',
        component: zhucaiCollection
      }
    ,{
        path: '/zhucaiLiuyan',
        name: '主材留言',
        component: zhucaiLiuyan
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
