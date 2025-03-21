
const __sfc__ = defineComponent({
  methods: {
    startGame() {
      uni.navigateTo({ url: '/pages/vine' });
    }
  }
});

export default __sfc__
function GenPagesIndexRender(this: InstanceType<typeof __sfc__>): any | null {
const _ctx = this
const _cache = this.$.renderCache
  return createElementVNode("view", utsMapOf({ class: "container" }), [
    createElementVNode("text", utsMapOf({ class: "title" }), "欢迎来到答题游戏"),
    createElementVNode("button", utsMapOf({
      class: "start-btn",
      onClick: _ctx.startGame
    }), "开始游戏", 8 /* PROPS */, ["onClick"])
  ])
}
const GenPagesIndexStyles = [utsMapOf([["container", padStyleMapOf(utsMapOf([["textAlign", "center"]]))], ["title", padStyleMapOf(utsMapOf([["fontSize", 28], ["fontWeight", "bold"], ["marginBottom", 20]]))], ["start-btn", padStyleMapOf(utsMapOf([["backgroundColor", "#42b983"], ["color", "#FFFFFF"], ["paddingTop", 10], ["paddingRight", 20], ["paddingBottom", 10], ["paddingLeft", 20], ["borderTopLeftRadius", 10], ["borderTopRightRadius", 10], ["borderBottomRightRadius", 10], ["borderBottomLeftRadius", 10]]))]])]
