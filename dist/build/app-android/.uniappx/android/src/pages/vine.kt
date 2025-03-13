@file:Suppress("UNCHECKED_CAST", "USELESS_CAST", "INAPPLICABLE_JVM_NAME", "UNUSED_ANONYMOUS_PARAMETER", "NAME_SHADOWING")
package uni.UNI965F5E0
import io.dcloud.uniapp.*
import io.dcloud.uniapp.extapi.*
import io.dcloud.uniapp.framework.*
import io.dcloud.uniapp.runtime.*
import io.dcloud.uniapp.vue.*
import io.dcloud.uniapp.vue.shared.*
import io.dcloud.unicloud.*
import io.dcloud.uts.*
import io.dcloud.uts.Map
import io.dcloud.uts.Set
import io.dcloud.uts.UTSAndroid
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Deferred
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.async
import io.dcloud.uniapp.extapi.getStorageSync as uni_getStorageSync
import io.dcloud.uniapp.extapi.navigateTo as uni_navigateTo
open class GenPagesVine : BasePage {
    constructor(__ins: ComponentInternalInstance) : super(__ins) {
        onLoad(fun(_: OnLoadOptions) {
            stat_instance.onLoad(this)
        }
        , __ins)
        onPageShow(fun() {
            stat_instance.onShow(this)
        }
        , __ins)
        onPageHide(fun() {
            stat_instance.onHide(this)
        }
        , __ins)
        onUnload(fun() {
            stat_instance.onUnload(this)
        }
        , __ins)
        onPageShow(fun() {
            var unlockedLevels = uni_getStorageSync("unlockedLevels") || 1
            this.levels.forEach(fun(level, index){
                level.unlocked = index < unlockedLevels
            }
            )
        }
        , __ins)
    }
    @Suppress("UNUSED_PARAMETER", "UNUSED_VARIABLE")
    override fun `$render`(): Any? {
        val _ctx = this
        val _cache = this.`$`.renderCache
        return createElementVNode("view", utsMapOf("class" to "container"), utsArrayOf(
            createElementVNode("image", utsMapOf("src" to "/static/background.jpg", "class" to "bg-image")),
            createElementVNode("view", utsMapOf("class" to "level-container"), utsArrayOf(
                createElementVNode(Fragment, null, RenderHelpers.renderList(_ctx.levels, fun(level, index, __index, _cached): Any {
                    return createElementVNode("view", utsMapOf("key" to level.id, "class" to normalizeClass(utsArrayOf(
                        "level-btn",
                        if (level.unlocked) {
                            "unlocked"
                        } else {
                            "locked"
                        }
                    )), "style" to normalizeStyle(utsMapOf("bottom" to (level.bottom + "%"))), "onClick" to fun(){
                        _ctx.onLevelClick(level)
                    }
                    ), toDisplayString(level.label), 15, utsArrayOf(
                        "onClick"
                    ))
                }
                ), 128)
            ))
        ))
    }
    open var levels: UTSArray<UTSJSONObject> by `$data`
    @Suppress("USELESS_CAST")
    override fun data(): Map<String, Any?> {
        return utsMapOf("levels" to utsArrayOf(
            object : UTSJSONObject() {
                var id: Number = 1
                var label = "第一关"
                var unlocked = true
                var bottom: Number = 10
            },
            object : UTSJSONObject() {
                var id: Number = 2
                var label = "第二关"
                var unlocked = false
                var bottom: Number = 35
            },
            object : UTSJSONObject() {
                var id: Number = 3
                var label = "第三关"
                var unlocked = false
                var bottom: Number = 55
            },
            object : UTSJSONObject() {
                var id: Number = 4
                var label = "第四关"
                var unlocked = false
                var bottom: Number = 70
            }
        ))
    }
    override fun `$initMethods`() {
        this.onLevelClick = fun(level) {
            if (!level.unlocked) {
                console.log("" + level.label + " \u672A\u89E3\u9501")
                return
            }
            uni_navigateTo(NavigateToOptions(url = "/pages/game?level=" + level.id))
        }
    }
    open lateinit var onLevelClick: (level) -> Unit
    companion object {
        val styles: Map<String, Map<String, Map<String, Any>>> by lazy {
            normalizeCssStyles(utsArrayOf(
                styles0
            ), utsArrayOf(
                GenApp.styles
            ))
        }
        val styles0: Map<String, Map<String, Map<String, Any>>>
            get() {
                return utsMapOf("container" to padStyleMapOf(utsMapOf("position" to "relative", "overflow" to "hidden")), "bg-image" to padStyleMapOf(utsMapOf("position" to "absolute", "top" to 0, "left" to 0, "width" to "100%", "height" to "100%", "objectFit" to "cover", "zIndex" to -1)), "level-container" to padStyleMapOf(utsMapOf("position" to "absolute", "width" to "100%", "height" to "100%")), "level-btn" to padStyleMapOf(utsMapOf("position" to "absolute", "left" to "50%", "transform" to "translateX(-50%)", "width" to 70, "height" to 70, "lineHeight" to "70px", "textAlign" to "center", "fontSize" to 16, "color" to "#ffffff", "zIndex" to 10)), "unlocked" to padStyleMapOf(utsMapOf("backgroundColor" to "#42b983")), "locked" to padStyleMapOf(utsMapOf("!backgroundColor" to "#808080")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = utsMapOf()
        var emits: Map<String, Any?> = utsMapOf()
        var props = normalizePropsOptions(utsMapOf())
        var propsNeedCastKeys: UTSArray<String> = utsArrayOf()
        var components: Map<String, CreateVueComponent> = utsMapOf()
    }
}
