
const __sfc__ = defineComponent({
  data() {
    return {
      level: 1,
      selected: null,
      correctAnswer: null,
      questions: [
        { text: "结合分析，小美是Bigbang中谁的粉丝?小美：今年是喜欢bigbang的第5年，我是他的梦女，我非常喜欢他在舞台上的舞姿和穿搭。", options: ["GD", "T.O.P", "大声", "太阳","胜利"], answer: 0 },
        { text: "郑雅娴最像什么动物?", options: ["老鼠", "猫", "熊", "鸭子", "松鼠"], answer: 1 },
        { text: "我的英文名叫什么?", options: ["Zavier", "Helen", "Olivia", "Eva", "Jay"], answer: 3 },
        { text: "要不要永远跟我做好朋友?", options: ["要", "不要"], answer: 0 }
      ]
    };
  },
  computed: {
    question() {
      return this.questions[this.level - 1];
    }
  },
  methods: {
    selectOption(index) {
      this.selected = index;
      this.correctAnswer = this.question.answer;

      if (index === this.correctAnswer) {
        setTimeout(() => {
          if (this.level === 4) {
            uni.navigateTo({ url: "/pages/result" });
          } else {
            let nextLevel = this.level + 1;
            uni.setStorageSync("unlockedLevels", nextLevel);
            uni.navigateTo({ url: "/pages/vine" });
          }
        }, 1000);
      }
    },
    getOptionClass(index) {
      if (this.selected === null) return "option";
      if (index === this.correctAnswer) return "option correct";
      if (index === this.selected) return "option wrong";
      return "option";
    }
  },
  onLoad(options) {
    this.level = parseInt(options.level) || 1;
  }
});

export default __sfc__
function GenPagesGameRender(this: InstanceType<typeof __sfc__>): any | null {
const _ctx = this
const _cache = this.$.renderCache
  return createElementVNode("view", utsMapOf({ class: "game-container" }), [
    createElementVNode("text", utsMapOf({ class: "question" }), toDisplayString(_ctx.question.text), 1 /* TEXT */),
    createElementVNode("view", utsMapOf({ class: "options" }), [
      createElementVNode(Fragment, null, RenderHelpers.renderList(_ctx.question.options, (option, index, __index, _cached): any => {
        return createElementVNode("button", utsMapOf({
          key: index,
          class: normalizeClass(_ctx.getOptionClass(index)),
          onClick: () => {_ctx.selectOption(index)}
        }), toDisplayString(option), 11 /* TEXT, CLASS, PROPS */, ["onClick"])
      }), 128 /* KEYED_FRAGMENT */)
    ])
  ])
}
const GenPagesGameStyles = [utsMapOf([["game-container", padStyleMapOf(utsMapOf([["textAlign", "center"], ["paddingTop", 50], ["paddingRight", 50], ["paddingBottom", 50], ["paddingLeft", 50]]))], ["question", padStyleMapOf(utsMapOf([["fontSize", 20], ["marginBottom", 20]]))], ["option", padStyleMapOf(utsMapOf([["backgroundColor", "#D3D3D3"], ["marginTop", 5], ["marginRight", 5], ["marginBottom", 5], ["marginLeft", 5], ["paddingTop", 10], ["paddingRight", 10], ["paddingBottom", 10], ["paddingLeft", 10], ["borderTopLeftRadius", 5], ["borderTopRightRadius", 5], ["borderBottomRightRadius", 5], ["borderBottomLeftRadius", 5]]))], ["correct", padStyleMapOf(utsMapOf([["backgroundColor", "#008000"]]))], ["wrong", padStyleMapOf(utsMapOf([["backgroundColor", "#FF0000"]]))]])]
