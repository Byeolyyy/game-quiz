// 仅测试 console.log 时机问题
import './test-main-console.uts'

import { uniStat } from '@/uni_modules/uni-stat/plugin.uts'

import App from './App.uvue'

import { createSSRApp } from 'vue'

// 统计配置
const uniStatcollectItems = {
	uniStatPageLog: true
}

const uniStatOptions = {
	debug: false,
	collectItems: uniStatcollectItems,
}

export function createApp() {
  const app = createSSRApp(App)

  app.use(uniStat, uniStatOptions)

  // app.mixin({
  //   onReady() {
  //     setTimeout(() => {
  //       console.log((this as BasePage).$nativePage!.getDomJson())
  //     }, 100)
  //   }
  // })
  return {
    app
  }
}

export function main(app: IApp) {
    definePageRoutes();
    defineAppConfig();
    (createApp()['app'] as VueApp).mount(app, GenUniApp());
}

export class UniAppConfig extends io.dcloud.uniapp.appframe.AppConfig {
    override name: string = "game2"
    override appid: string = "__UNI__965F5E0"
    override versionName: string = "1.8.5"
    override versionCode: string = "10805"
    override uniCompilerVersion: string = "4.56"
    
    constructor() { super() }
}

import GenPagesIndexClass from './pages/index.uvue?type=page'
import GenPagesVineClass from './pages/vine.uvue?type=page'
import GenPagesGameClass from './pages/game.uvue?type=page'
import GenPagesResultClass from './pages/result.uvue?type=page'
function definePageRoutes() {
__uniRoutes.push({ path: "pages/index", component: GenPagesIndexClass, meta: { isQuit: true } as UniPageMeta, style: utsMapOf([["navigationBarTitleText","首页"]]) } as UniPageRoute)
__uniRoutes.push({ path: "pages/vine", component: GenPagesVineClass, meta: { isQuit: false } as UniPageMeta, style: utsMapOf([["navigationBarTitleText","选择关卡"]]) } as UniPageRoute)
__uniRoutes.push({ path: "pages/game", component: GenPagesGameClass, meta: { isQuit: false } as UniPageMeta, style: utsMapOf([["navigationBarTitleText","答题"]]) } as UniPageRoute)
__uniRoutes.push({ path: "pages/result", component: GenPagesResultClass, meta: { isQuit: false } as UniPageMeta, style: utsMapOf([["navigationBarTitleText","胜利"]]) } as UniPageRoute)
}
const __uniTabBar: Map<string, any | null> | null = null
const __uniLaunchPage: Map<string, any | null> = utsMapOf([["url","pages/index"],["style",utsMapOf([["navigationBarTitleText","首页"]])]])
function defineAppConfig(){
  __uniConfig.entryPagePath = '/pages/index'
  __uniConfig.globalStyle = utsMapOf([["navigationBarBackgroundColor","#42b983"],["navigationBarTextStyle","white"],["backgroundColor","#f8f8f8"],["backgroundTextStyle","light"]])
  __uniConfig.getTabBarConfig = ():Map<string, any> | null =>  null
  __uniConfig.tabBar = __uniConfig.getTabBarConfig()
  __uniConfig.conditionUrl = ''
  __uniConfig.uniIdRouter = new Map()
  __uniConfig.themeConfig = utsMapOf([["light",utsMapOf([["navigationBarTextStyle","white"],["navigationBarBackgroundColor","#007AFF"],["backgroundColorContent","#efeff4"],["backgroundColor","#efeff4"],["backgroundTextStyle","dark"],["tabBarColor","#7A7E83"],["tabBarSelectedColor","#007AFF"],["tabBarBorderStyle","black"],["tabBarBackgroundColor","#F8F8F8"],["tabBarComponentIconPath","static/component.png"],["tabBarComponentSelectedIconPath","static/componentHL.png"],["tabBarAPIIconPath","static/api.png"],["tabBarAPISelectedIconPath","static/apiHL.png"],["tabBarCSSIconPath","static/css.png"],["tabBarCSSSelectedIconPath","static/cssHL.png"],["tabBarTemplateIconPath","static/template.png"],["tabBarTemplateSelectedIconPath","static/templateHL.png"]])],["dark",utsMapOf([["navigationBarTextStyle","white"],["navigationBarBackgroundColor","#1F1F1F"],["backgroundColor","#1F1F1F"],["backgroundColorContent","#646464"],["backgroundTextStyle","light"],["tabBarColor","#cacaca"],["tabBarSelectedColor","#007AFF"],["tabBarBorderStyle","white"],["tabBarBackgroundColor","#1F1F1F"],["tabBarComponentIconPath","static/component.png"],["tabBarComponentSelectedIconPath","static/componentHL.png"],["tabBarAPIIconPath","static/api.png"],["tabBarAPISelectedIconPath","static/apiHL.png"],["tabBarCSSIconPath","static/css.png"],["tabBarCSSSelectedIconPath","static/cssHL.png"],["tabBarTemplateIconPath","static/template.png"],["tabBarTemplateSelectedIconPath","static/templateHL.png"]])]])
  __uniConfig.ready = true
}
