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
open class GenPagesResult : BasePage {
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
    }
    @Suppress("UNUSED_PARAMETER", "UNUSED_VARIABLE")
    override fun `$render`(): Any? {
        val _ctx = this
        val _cache = this.`$`.renderCache
        return createElementVNode("view", utsMapOf("class" to "result-container"), utsArrayOf(
            createElementVNode("text", utsMapOf("class" to "win-text"), "You Win!"),
            createElementVNode("image", utsMapOf("src" to "/static/cake.png", "class" to "cake", "onClick" to _ctx.showMessage), null, 8, utsArrayOf(
                "onClick"
            )),
            if (isTrue(_ctx.message)) {
                createElementVNode("text", utsMapOf("key" to 0, "class" to "message"), "生日快乐，尧姐！🎂")
            } else {
                createCommentVNode("v-if", true)
            }
        ))
    }
    open var message: String by `$data`
    @Suppress("USELESS_CAST")
    override fun data(): Map<String, Any?> {
        return utsMapOf("message" to "")
    }
    override fun `$initMethods`() {
        this.showMessage = fun() {
            this.message = "生日快乐，尧姐！🎂"
        }
    }
    open lateinit var showMessage: () -> Unit
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
                return utsMapOf("result-container" to padStyleMapOf(utsMapOf("textAlign" to "center", "paddingTop" to 50, "paddingRight" to 50, "paddingBottom" to 50, "paddingLeft" to 50)), "win-text" to padStyleMapOf(utsMapOf("fontSize" to 28, "fontWeight" to "bold", "marginBottom" to 20)), "cake" to padStyleMapOf(utsMapOf("width" to 150, "height" to 150, "cursor" to "pointer")), "message" to padStyleMapOf(utsMapOf("fontSize" to 24, "color" to "#FF0000", "marginTop" to 20)))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = utsMapOf()
        var emits: Map<String, Any?> = utsMapOf()
        var props = normalizePropsOptions(utsMapOf())
        var propsNeedCastKeys: UTSArray<String> = utsArrayOf()
        var components: Map<String, CreateVueComponent> = utsMapOf()
    }
}
