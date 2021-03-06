//代理 路由
import {AUTH_NAME} from "@/store/types"//权限名称
import master from 'components/master';//首页
let index = (resolve) => resolve(require('views/agent/index'));//数据汇总
let ptcommission = (resolve) => resolve(require('views/agent/ptcommission'));//佣金报表
let memberlist = (resolve) => resolve(require('views/agent/member-list'));//会员列表
let memberbill = (resolve) => resolve(require('views/agent/member-bill'));//会员账务
let creditlog = (resolve) => resolve(require('views/agent/credit-log'));//额度记录
let personal = (resolve) => resolve(require('views/agent/personal'));//个人中心


let personal_center = (resolve) => resolve(require("views/agent/personal/components/profile"));//个人中心
let generalize_link = (resolve) => resolve(require("views/agent/personal/components/generalize-link"));//个人中心
let bind_bank = (resolve) => resolve(require("views/agent/personal/components/bind-bank"));//个人中心
let personal_loginUpdate = (resolve) => resolve(require("components/password/login-update"));//个人中心
let personal_payUpdate = (resolve) => resolve(require("components/password/pay-update"));//个人中心


let message = (resolve) => resolve(require('views/common/message'));//站内信
let drawmoney = (resolve) => resolve(require('views/money/drawmoney')); //取款


export default [
  {
    path: "/agent",
    name: 'agent',
    component: master,
    redirect: "/agent/index",
    meta: {
      auth: [AUTH_NAME.AGENT] //需要代理用户
    },
    children: [
      {
        path: "index",
        name: "agent_index",
        component: index
      },
      {
        path: "ptcommission",
        name: "agent_ptcommission",
        component: ptcommission,
      }, {
        path: "memberList",
        name: "agent_memberlist",
        component: memberlist,
      }
      , {
        path: "creditlog",
        name: "agent_creditlog",
        component: creditlog,
      },
      {
        path: "memberbill",
        name: "agent_memberbill",
        component: memberbill
      }, {
        path: "personal",
        name: "agent_personal",
        component: personal,
        redirect: "personal/center",
        children: [
          {
            path: "center",
            name: "personal_center",
            component: personal_center
          },
          {
            path: "generalizelink",
            name: "generalize_link",
            component: generalize_link
          },
          {
            path: "loginUpdate",
            name: "personal_loginUpdate",
            component: personal_loginUpdate
          },{
            path: "bindbank",
            name: "bind_bank",
            component: bind_bank
          },
          {
            path: "payUpdate",
            name: "personal_payUpdate",
            component: personal_payUpdate
          },
        ]
      },
      {
        path: "message",
        name: "agent_message",
        component: message
      },
      {
        path: "drawmoney",
        name: "agent_drawmoney",
        component: drawmoney
      }, {
        path: "addbank",
        name: "agent_addbank",
        component: personal,
      }
    ]
  }
]
