
  import { state, setLifeCycleNum } from '@/store/index.uts'


  let firstBackTime = 0

  const __sfc__ = defineApp({
    globalData: {
      str: 'default globalData str',
      num: 0,
      bool: false,
      obj: {
        str: 'default globalData obj str',
        num: 0,
        bool: false,
      },
      null: null as string | null,
      arr: [] as number[],
      mySet: new Set<string>(),
      myMap: new Map<string, any>(),
      func: () : string => {
        return 'globalData func'
      },
      launchOptions: {
        path: '',
      } as OnLaunchOptions,
      onShowOption: {
        path: ''
      } as OnShowOptions
    },
    onLaunch: function (res : OnLaunchOptions) {

      this.globalData.launchOptions = res

      // 自动化测试
      setLifeCycleNum(state.lifeCycleNum + 1000)
      console.log('App Launch')

      // 页面性能分析
      // const performance = uni.getPerformance()
      // const observer1: PerformanceObserver = performance.createObserver(
      //   (entryList: PerformanceObserverEntryList) => {
      //     console.log('observer1:entryList.getEntries()' +JSON.stringify(entryList.getEntries()))
      //   }
      // )
      // observer1.observe({
      //   entryTypes: ['render', 'navigation'],
      // } as PerformanceObserverOptions)
      // 统计上报 - 应用启动

      uni.report({
      	name: 'uni-app-launch',
      	options: res,
      	success(res_data) {
      		console.log(res_data);
      	}, fail(err) {
      		console.log(err);
      	}
      })


      if (process.env.NODE_ENV !== 'development') { //真机运行可以注释此条件
        uni.getPrivacySetting({
          success(res1){
             if(res1.needAuthorization){
               uni.openDialogPage({
                 url: '/pages/component/button/privacy',
               })
             }
          }
        })
      }

    },
    onShow: function (res : OnShowOptions) {
      this.globalData.onShowOption = res

      // 处理scheme或通用链接直达
      let url = this.getRedirectUrl(res.appScheme, res.appLink);
      if (null != url) {
        uni.navigateTo({
          url: url
        })
      }

      // 自动化测试
      setLifeCycleNum(state.lifeCycleNum + 100)
      console.log('App Show')


      // 统计上报 - 应用显示
      uni.report({
      	name: 'uni-app-show',
      	success(res_data) {
      		console.log(res_data);
      	}, fail(err) {
      		console.log(err);
      	}
      })

    },
    onHide: function () {
      // 自动化测试
      setLifeCycleNum(state.lifeCycleNum - 100)
      console.log('App Hide')


      // 统计上报 - 应用进入后台
      uni.report({
      	name: 'uni-app-hide',
      	success(res) {
      		console.log(res);
      	}, fail(err) {
      		console.log(err);
      	}
      })

    },

    onLastPageBackPress: function () {
      // 自动化测试
      setLifeCycleNum(state.lifeCycleNum - 1000)
      console.log('App LastPageBackPress')
      if (firstBackTime == 0) {
        uni.showToast({
          title: '再按一次退出应用',
          position: 'bottom',
        })
        firstBackTime = Date.now()
        setTimeout(() => {
          firstBackTime = 0
        }, 2000)
      } else if (Date.now() - firstBackTime < 2000) {
        firstBackTime = Date.now()
        uni.exit()
      }
    },
    onExit() {
      console.log('App Exit')
    },

    onError(err : any) {
      // console.log('App onError', err)

    	// 统计上报 - 应用发生错误
    	uni.report({
    		name: 'uni-app-error',
    		options: err,
    		success(res) {
    			console.log(res);
    		}, fail(err) {
    			console.log(err);
    		}
    	})

    },
    methods: {
      increasetLifeCycleNum() {
        setLifeCycleNum(state.lifeCycleNum + 100)
        console.log('App increasetLifeCycleNum')
      },
      getRedirectUrl(scheme : string | null, ulink : string | null) : string | null {
        //解析scheme或universal link启动直达页面：
        //scheme格式：uniappx://redirect/pages/component/view/view?key=value  //其中redirect后为页面路径
        //universal link格式：https://uniappx.dcloud.net.cn/ulink/redirect.html?url=%2Fpages%2Fcomponent%2Fview%2Fview%3Fkey%3Dvalue  //通用链接路径需固定，?后面的url参数为直达页面路径，注意url字段值需做url编码（可使用encodeURIComponent方法）
        let url : string | null = null;
        if (null != scheme && scheme.length > 0) {
          const PATHPRE = 'redirect';
          let parts : string | null = null;
          let pos = scheme.search('//');
          if (pos > 0) {
            parts = scheme.substring(pos + 2);
          }
          if (null != parts && parts.startsWith(PATHPRE)) {
            url = parts.substring(PATHPRE.length);
          }
        } else if (null != ulink && ulink.length > 0) {
          const PATH = 'ulink/redirect.html';
          let parts = ulink.split('?');
          if (parts.length > 1 && parts[0].endsWith(PATH) && parts[1].length > 0) {
            parts[1].split('&').forEach((e) => {
              let params = e.split('=');
              if (params.length > 1 && params[0].length > 0 && params[1].length > 0) {
                if ('url' == params[0]) {
                  if (null == url) {
                    url = decodeURIComponent(params[1]);
                  }
                }
              }
            });
          }
        }
        return url;
      }
    }
  })

export default __sfc__
const GenAppStyles = [utsMapOf([["uni-padding-wrap", padStyleMapOf(utsMapOf([["paddingTop", 0], ["paddingRight", 15], ["paddingBottom", 0], ["paddingLeft", 15]]))], ["uni-title", padStyleMapOf(utsMapOf([["paddingTop", 10], ["paddingRight", 0], ["paddingBottom", 10], ["paddingLeft", 0]]))], ["uni-title-text", padStyleMapOf(utsMapOf([["fontSize", 15], ["fontWeight", "bold"]]))], ["uni-subtitle-text", padStyleMapOf(utsMapOf([["color", "#888888"], ["fontSize", 12], ["fontWeight", "bold"], ["marginTop", 5]]))], ["uni-common-mb", padStyleMapOf(utsMapOf([["marginBottom", 15]]))], ["uni-common-pb", padStyleMapOf(utsMapOf([["paddingBottom", 15]]))], ["uni-common-pl", padStyleMapOf(utsMapOf([["paddingLeft", 15]]))], ["uni-common-mt", padStyleMapOf(utsMapOf([["marginTop", 15]]))], ["uni-hello-text", padStyleMapOf(utsMapOf([["color", "#7A7E83"], ["lineHeight", "22px"]]))], ["uni-list", padStyleMapOf(utsMapOf([["backgroundColor", "#FFFFFF"], ["position", "relative"], ["display", "flex"], ["flexDirection", "column"], ["borderBottomWidth", 1], ["borderBottomStyle", "solid"], ["borderBottomColor", "#c8c7cc"]]))], ["uni-list-cell", padStyleMapOf(utsMapOf([["position", "relative"], ["display", "flex"], ["flexDirection", "row"], ["justifyContent", "space-between"], ["alignItems", "center"]]))], ["uni-list-cell-padding", padStyleMapOf(utsMapOf([["paddingTop", 10], ["paddingRight", 15], ["paddingBottom", 10], ["paddingLeft", 15]]))], ["uni-list-cell-line", padStyleMapOf(utsMapOf([["borderBottomWidth", 1], ["borderBottomStyle", "solid"], ["borderBottomColor", "#c8c7cc"]]))], ["uni-list-cell-hover", padStyleMapOf(utsMapOf([["backgroundColor", "#eeeeee"]]))], ["uni-list-cell-pd", padStyleMapOf(utsMapOf([["paddingTop", 11], ["paddingRight", 15], ["paddingBottom", 11], ["paddingLeft", 0]]))], ["uni-list-cell-left", padStyleMapOf(utsMapOf([["paddingTop", 0], ["paddingRight", 15], ["paddingBottom", 0], ["paddingLeft", 10]]))], ["uni-list-cell-db", padStyleMapOf(utsMapOf([["flex", 1]]))], ["uni-list-cell-right", padStyleMapOf(utsMapOf([["flex", 1]]))], ["uni-list-cell-db-text", padStyleMapOf(utsMapOf([["width", "100%"]]))], ["uni-label", padStyleMapOf(utsMapOf([["width", 105]]))], ["uni-input", padStyleMapOf(utsMapOf([["height", 25], ["paddingTop", 8], ["paddingRight", 13], ["paddingBottom", 8], ["paddingLeft", 13], ["fontSize", 14], ["backgroundImage", "none"], ["backgroundColor", "#FFFFFF"], ["flex", 1], ["boxSizing", "content-box"]]))], ["uni-flex", padStyleMapOf(utsMapOf([["flexDirection", "row"]]))], ["uni-flex-item", padStyleMapOf(utsMapOf([["flex", 1]]))], ["uni-row", padStyleMapOf(utsMapOf([["flexDirection", "row"]]))], ["uni-column", padStyleMapOf(utsMapOf([["flexDirection", "column"]]))], ["uni-bg-red", padStyleMapOf(utsMapOf([["backgroundImage", "none"], ["backgroundColor", "#F76260"]]))], ["uni-bg-green", padStyleMapOf(utsMapOf([["backgroundImage", "none"], ["backgroundColor", "#09BB07"]]))], ["uni-bg-blue", padStyleMapOf(utsMapOf([["backgroundImage", "none"], ["backgroundColor", "#007AFF"]]))], ["uni-btn-v", padStyleMapOf(utsMapOf([["paddingTop", 5], ["paddingRight", 0], ["paddingBottom", 5], ["paddingLeft", 0]]))], ["uni-btn", padStyleMapOf(utsMapOf([["marginTop", 10]]))], ["uni-link", padStyleMapOf(utsMapOf([["color", "#576B95"], ["fontSize", 13]]))], ["uni-center", padStyleMapOf(utsMapOf([["flexDirection", "row"], ["justifyContent", "center"]]))], ["uni-textarea", padStyleMapOf(utsMapOf([["paddingTop", 9], ["paddingRight", 9], ["paddingBottom", 9], ["paddingLeft", 9], ["lineHeight", 1.6], ["fontSize", 14]]))], ["uni-icon-size", padStyleMapOf(utsMapOf([["width", 14], ["height", 14]]))], ["uni-container", padStyleMapOf(utsMapOf([["paddingTop", 15], ["paddingRight", 15], ["paddingBottom", 15], ["paddingLeft", 15], ["backgroundColor", "#f8f8f8"]]))], ["uni-header-logo", padStyleMapOf(utsMapOf([["paddingTop", 15], ["paddingRight", 15], ["paddingBottom", 15], ["paddingLeft", 15], ["flexDirection", "column"], ["justifyContent", "center"], ["alignItems", "center"], ["marginTop", 5]]))], ["uni-header-image", padStyleMapOf(utsMapOf([["width", 80], ["height", 80]]))], ["uni-text-box", padStyleMapOf(utsMapOf([["marginBottom", 20]]))], ["hello-text", padStyleMapOf(utsMapOf([["color", "#7A7E83"], ["fontSize", 14], ["lineHeight", "20px"]]))], ["uni-panel", padStyleMapOf(utsMapOf([["marginBottom", 12]]))], ["text-disabled", padStyleMapOf(utsMapOf([["!color", "#a0a0a0"]]))], ["uni-panel-h", padStyleMapOf(utsMapOf([["backgroundColor", "#ffffff"], ["!flexDirection", "row"], ["!justifyContent", "space-between"], ["!alignItems", "center"], ["paddingTop", 12], ["paddingRight", 12], ["paddingBottom", 12], ["paddingLeft", 12]]))], ["uni-panel-h-on", padStyleMapOf(utsMapOf([["backgroundColor", "#f0f0f0"]]))], ["uni-panel-text", padStyleMapOf(utsMapOf([["color", "#000000"], ["fontSize", 14], ["fontWeight", "normal"]]))], ["uni-navigate-item", padStyleMapOf(utsMapOf([["flexDirection", "row"], ["alignItems", "center"], ["backgroundColor", "#FFFFFF"], ["borderTopStyle", "solid"], ["borderTopColor", "#f0f0f0"], ["borderTopWidth", 1], ["paddingTop", 12], ["paddingRight", 12], ["paddingBottom", 12], ["paddingLeft", 12], ["justifyContent", "space-between"], ["backgroundColor:active", "#f8f8f8"]]))], ["is--active", padStyleMapOf(utsMapOf([["backgroundColor", "#f8f8f8"]]))], ["uni-navigate-text", padStyleMapOf(utsMapOf([["color", "#000000"], ["fontSize", 14], ["fontWeight", "normal"]]))], ["left-win-active", padStyleMapOf(utsMapOf([["!color", "#007AFF"]]))], ["page-scroll-view", padStyleMapOf(utsMapOf([["flex", 1]]))]])]
