
const __sfc__ = defineComponent({
  data() {
    return { message: "" };
  },
  methods: {
    showMessage() {
      this.message = "生日快乐，尧姐！🎂";
    }
  }
});

export default __sfc__
function GenPagesResultRender(this: InstanceType<typeof __sfc__>): any | null {
const _ctx = this
const _cache = this.$.renderCache
  return createElementVNode("view", utsMapOf({ class: "result-container" }), [
    createElementVNode("text", utsMapOf({ class: "win-text" }), "You Win!"),
    createElementVNode("image", utsMapOf({
      src: "/static/cake.png",
      class: "cake",
      onClick: _ctx.showMessage
    }), null, 8 /* PROPS */, ["onClick"]),
    isTrue(_ctx.message)
      ? createElementVNode("text", utsMapOf({
          key: 0,
          class: "message"
        }), "生日快乐，尧姐！🎂")
      : createCommentVNode("v-if", true)
  ])
}
const GenPagesResultStyles = [utsMapOf([["result-container", padStyleMapOf(utsMapOf([["textAlign", "center"], ["paddingTop", 50], ["paddingRight", 50], ["paddingBottom", 50], ["paddingLeft", 50]]))], ["win-text", padStyleMapOf(utsMapOf([["fontSize", 28], ["fontWeight", "bold"], ["marginBottom", 20]]))], ["cake", padStyleMapOf(utsMapOf([["width", 150], ["height", 150], ["cursor", "pointer"]]))], ["message", padStyleMapOf(utsMapOf([["fontSize", 24], ["color", "#FF0000"], ["marginTop", 20]]))]])]
