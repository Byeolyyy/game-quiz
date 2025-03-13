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
import io.dcloud.uniapp.extapi.navigateTo as uni_navigateTo
import io.dcloud.uniapp.extapi.setStorageSync as uni_setStorageSync
open class GenPagesGame : BasePage {
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
        onLoad(fun(options: OnLoadOptions) {
            this.level = parseInt(options.level) || 1
        }
        , __ins)
    }
    @Suppress("UNUSED_PARAMETER", "UNUSED_VARIABLE")
    override fun `$render`(): Any? {
        val _ctx = this
        val _cache = this.`$`.renderCache
        return createElementVNode("view", utsMapOf("class" to "game-container"), utsArrayOf(
            createElementVNode("text", utsMapOf("class" to "question"), toDisplayString(_ctx.question.text), 1),
            createElementVNode("view", utsMapOf("class" to "options"), utsArrayOf(
                createElementVNode(Fragment, null, RenderHelpers.renderList(_ctx.question.options, fun(option, index, __index, _cached): Any {
                    return createElementVNode("button", utsMapOf("key" to index, "class" to normalizeClass(_ctx.getOptionClass(index)), "onClick" to fun(){
                        _ctx.selectOption(index)
                    }
                    ), toDisplayString(option), 11, utsArrayOf(
                        "onClick"
                    ))
                }
                ), 128)
            ))
        ))
    }
    open var level: Number by `$data`
    open var selected: Any? by `$data`
    open var correctAnswer: Any? by `$data`
    open var questions: UTSArray<UTSJSONObject> by `$data`
    open var question: UTSJSONObject by `$data`
    @Suppress("USELESS_CAST")
    override fun data(): Map<String, Any?> {
        return utsMapOf("level" to 1, "selected" to null, "correctAnswer" to null, "questions" to utsArrayOf(
            object : UTSJSONObject() {
                var text = "结合分析，小美是Bigbang中谁的粉丝?小美：今年是喜欢bigbang的第5年，我是他的梦女，我非常喜欢他在舞台上的舞姿和穿搭。"
                var options = utsArrayOf(
                    "GD",
                    "T.O.P",
                    "大声",
                    "太阳",
                    "胜利"
                )
                var answer: Number = 0
            },
            object : UTSJSONObject() {
                var text = "郑雅娴最像什么动物?"
                var options = utsArrayOf(
                    "老鼠",
                    "猫",
                    "熊",
                    "鸭子",
                    "松鼠"
                )
                var answer: Number = 1
            },
            object : UTSJSONObject() {
                var text = "我的英文名叫什么?"
                var options = utsArrayOf(
                    "Zavier",
                    "Helen",
                    "Olivia",
                    "Eva",
                    "Jay"
                )
                var answer: Number = 3
            },
            object : UTSJSONObject() {
                var text = "要不要永远跟我做好朋友?"
                var options = utsArrayOf(
                    "要",
                    "不要"
                )
                var answer: Number = 0
            }
        ), "question" to computed<UTSJSONObject>(fun(): UTSJSONObject {
            return this.questions[this.level - 1]
        }
        ))
    }
    override fun `$initMethods`() {
        this.selectOption = fun(index) {
            this.selected = index
            this.correctAnswer = this.question.answer
            if (index === this.correctAnswer) {
                setTimeout(fun(){
                    if (this.level === 4) {
                        uni_navigateTo(NavigateToOptions(url = "/pages/result"))
                    } else {
                        var nextLevel = this.level + 1
                        uni_setStorageSync("unlockedLevels", nextLevel)
                        uni_navigateTo(NavigateToOptions(url = "/pages/vine"))
                    }
                }
                , 1000)
            }
        }
        this.getOptionClass = fun(index): String {
            if (this.selected == null) {
                return "option"
            }
            if (index === this.correctAnswer) {
                return "option correct"
            }
            if (index === this.selected) {
                return "option wrong"
            }
            return "option"
        }
    }
    open lateinit var selectOption: (index) -> Unit
    open lateinit var getOptionClass: (index) -> String
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
                return utsMapOf("game-container" to padStyleMapOf(utsMapOf("textAlign" to "center", "paddingTop" to 50, "paddingRight" to 50, "paddingBottom" to 50, "paddingLeft" to 50)), "question" to padStyleMapOf(utsMapOf("fontSize" to 20, "marginBottom" to 20)), "option" to padStyleMapOf(utsMapOf("backgroundColor" to "#D3D3D3", "marginTop" to 5, "marginRight" to 5, "marginBottom" to 5, "marginLeft" to 5, "paddingTop" to 10, "paddingRight" to 10, "paddingBottom" to 10, "paddingLeft" to 10, "borderTopLeftRadius" to 5, "borderTopRightRadius" to 5, "borderBottomRightRadius" to 5, "borderBottomLeftRadius" to 5)), "correct" to padStyleMapOf(utsMapOf("backgroundColor" to "#008000")), "wrong" to padStyleMapOf(utsMapOf("backgroundColor" to "#FF0000")))
            }
        var inheritAttrs = true
        var inject: Map<String, Map<String, Any?>> = utsMapOf()
        var emits: Map<String, Any?> = utsMapOf()
        var props = normalizePropsOptions(utsMapOf())
        var propsNeedCastKeys: UTSArray<String> = utsArrayOf()
        var components: Map<String, CreateVueComponent> = utsMapOf()
    }
}
