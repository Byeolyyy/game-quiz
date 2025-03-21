
const __sfc__ = defineComponent({
  data() {
    return {
      // 定义关卡列表，每个关卡包含 id、显示文本、初始解锁状态和按钮距底部的百分比
      levels: [
        { id: 1, label: '第一关', unlocked: true,  bottom: 10 },
        { id: 2, label: '第二关', unlocked: false, bottom: 35 },
        { id: 3, label: '第三关', unlocked: false, bottom: 55 },
        { id: 4, label: '第四关', unlocked: false, bottom: 70 }
      ]
    }
  },
  methods: {
    onLevelClick(level) {
      if (!level.unlocked) {
        console.log(`${level.label} 未解锁`);
        return;
      }
      // 点击解锁的关卡后跳转到对应页面
      uni.navigateTo({ url: `/pages/game?level=${level.id}` });
    }
  },
  onShow() {
    // 从存储中读取已解锁的关卡数，默认值为 1（即只有第一关解锁）
    let unlockedLevels = uni.getStorageSync("unlockedLevels") || 1;
    this.levels.forEach((level, index) => {
      // 数组下标从 0 开始，因此 index < unlockedLevels 表示第1关（index 0）解锁时 unlockedLevels 为1
      level.unlocked = index < unlockedLevels;
    });
  }
})

export default __sfc__
function GenPagesVineRender(this: InstanceType<typeof __sfc__>): any | null {
const _ctx = this
const _cache = this.$.renderCache
  return createElementVNode("view", utsMapOf({ class: "container" }), [
    createElementVNode("image", utsMapOf({
      src: "/static/background.jpg",
      class: "bg-image"
    })),
    createElementVNode("view", utsMapOf({ class: "level-container" }), [
      createElementVNode(Fragment, null, RenderHelpers.renderList(_ctx.levels, (level, index, __index, _cached): any => {
        return createElementVNode("view", utsMapOf({
          key: level.id,
          class: normalizeClass(['level-btn', level.unlocked ? 'unlocked' : 'locked']),
          style: normalizeStyle(utsMapOf({ bottom: level.bottom + '%' })),
          onClick: () => {_ctx.onLevelClick(level)}
        }), toDisplayString(level.label), 15 /* TEXT, CLASS, STYLE, PROPS */, ["onClick"])
      }), 128 /* KEYED_FRAGMENT */)
    ])
  ])
}
const GenPagesVineStyles = [utsMapOf([["container", padStyleMapOf(utsMapOf([["position", "relative"], ["overflow", "hidden"]]))], ["bg-image", padStyleMapOf(utsMapOf([["position", "absolute"], ["top", 0], ["left", 0], ["width", "100%"], ["height", "100%"], ["objectFit", "cover"], ["zIndex", -1]]))], ["level-container", padStyleMapOf(utsMapOf([["position", "absolute"], ["width", "100%"], ["height", "100%"]]))], ["level-btn", padStyleMapOf(utsMapOf([["position", "absolute"], ["left", "50%"], ["transform", "translateX(-50%)"], ["width", 70], ["height", 70], ["lineHeight", "70px"], ["textAlign", "center"], ["fontSize", 16], ["color", "#ffffff"], ["zIndex", 10]]))], ["unlocked", padStyleMapOf(utsMapOf([["backgroundColor", "#42b983"]]))], ["locked", padStyleMapOf(utsMapOf([["!backgroundColor", "#808080"]]))]])]
