import {
  prepareWithSegments,
  layoutWithLines,
  layoutNextLine,
  walkLineRanges,
} from '@chenglou/pretext'

// ── 配置 ──────────────────────────────────────────────
const BODY_FONT = '16px "Noto Serif SC", "Playfair Display", Georgia, serif'
const BODY_LH = 28
const HL_FAMILY = '"Playfair Display", "Noto Serif SC", serif'
const SUB_FONT = '300 14px "Inter", sans-serif'
const SUB_LH = 22
const PQ_FONT = 'italic 17px "Playfair Display", serif'
const PQ_LH = 26
const GUTTER = 48
const COL_GAP = 44
const DROP_CAP_LINES = 3
const MIN_SLOT = 60
const NARROW = 768
const IMG_PAD = 16
const BODY_FIXED_H = 1200 // 正文高度

let dragState = null
let needsInit = true

// ── 图片 ──────────────────────────────────────────────
const images = [
  { x:0, y:0, w:0, h:0, url:'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80', cap:'阿尔卑斯山脉 · 瑞士' },
  { x:0, y:0, w:0, h:0, url:'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&q=80', cap:'晨雾中的森林 · 挪威' },
  { x:0, y:0, w:0, h:0, url:'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&q=80', cap:'湖畔黄昏 · 新西兰' },
]

// ── 文章 ──────────────────────────────────────────────
const HL_TEXT = 'The Art of Text & Image'
const SUB_TEXT = 'Drag the images to see text reflow in real time — powered by Pretext'

const BODY = `排版是人类文明中最古老也最精妙的视觉艺术之一。从公元前三千年美索不达米亚的楔形文字泥板，到中世纪欧洲修道院中手抄本的华丽装饰字母，再到十五世纪约翰内斯·古腾堡发明的活字印刷术，文字的排列与呈现方式始终是人类传递知识、表达思想的核心载体。每一个时代的排版技术都深刻地影响了信息的传播方式，进而塑造了文明的走向。

活字印刷术的发明是排版史上最具革命性的时刻。古腾堡不仅创造了可重复使用的金属活字，还设计了一套完整的排版系统——包括字模、铸字机、油墨配方和印刷机。他的四十二行圣经至今仍被视为排版艺术的巅峰之作。每一页都经过精心设计，行距均匀，字间距和谐，文字块在页面上形成完美的矩形。这种对视觉秩序的追求，奠定了此后五百年西方排版的基本范式。

十九世纪工业革命带来了机械排版的时代。莱诺排铸机和莫诺排铸机的发明使得排版速度提高了数十倍，报纸和书籍的产量急剧增长。但机械排版也带来了新的挑战：如何在速度与质量之间取得平衡？如何在有限的版面空间中同时容纳文字、图片、广告和标题？这些问题催生了现代版面设计的概念。

二十世纪中叶，瑞士国际主义风格将排版提升到了一个新的高度。以马克斯·米丁格设计的 Helvetica 字体为代表，这一运动强调网格系统、无衬线字体和清晰的视觉层次。排版不再仅仅是文字的排列，而成为一种独立的设计语言。约瑟夫·穆勒-布罗克曼的网格系统理论至今仍是平面设计教育的基石。

然而，当排版从纸张迁移到屏幕时，一切都变了。网页排版的历史始于一九九三年，当蒂姆·伯纳斯-李创建了第一个网页浏览器时，文本只能以单一字体、单一大小、从左到右线性排列。没有字体选择，没有行距控制，没有多栏布局。早期的网页设计师们不得不使用表格标签来模拟版面布局——一种笨拙但有效的权宜之计。

一九九六年，CSS 的诞生为网页排版带来了第一缕曙光。设计师终于可以控制字体、颜色、行距和边距。但 CSS 的排版能力与印刷排版相比仍然原始得令人沮丧。文字只能在矩形盒子中流动，无法环绕不规则形状；多栏布局需要复杂的浮动和清除技巧；响应式设计的概念尚未诞生。

二零一零年代，Flexbox 和 Grid 布局的出现极大地改善了网页布局的能力。设计师终于可以创建复杂的多栏布局，而不需要依赖浮动和定位的黑魔法。但即便如此，网页排版与印刷排版之间仍然存在一道巨大的鸿沟：文字无法像杂志中那样优雅地环绕图片流动。

CSS Shapes 规范在二零一四年被提出，试图弥合这道鸿沟。它允许文字沿着定义的形状流动。理论上，这应该是网页排版的重大突破。但在实践中，CSS Shapes 的限制令人失望：它只能与浮动元素配合使用，文字只能在形状的一侧流动，形状必须在 CSS 中静态定义——你无法动态地改变它，也无法获取文字流动后的行几何信息。

更根本的问题在于性能。浏览器的文本布局引擎是一个黑盒。如果你想知道一段文字在给定宽度下会占据多少行、总高度是多少，你必须将文字渲染到 DOM 中，然后通过 getBoundingClientRect 或 offsetHeight 来测量。每一次测量都会触发浏览器的布局回流——一个代价极其高昂的操作。

布局回流意味着浏览器必须重新计算页面上每一个元素的位置和大小。当你连续测量五百个文本块时，你就触发了五百次完整的布局回流。在复杂的页面上，每次回流可能需要十到三十毫秒。这意味着仅仅是测量文本高度，就可能消耗数秒的时间——对于需要六十帧每秒流畅度的现代界面来说，这是完全不可接受的。

Pretext 的出现改变了这一切。它的核心洞察极其简单：浏览器的 Canvas API 包含一个 measureText 方法，它可以返回任何字符串在任何字体下的宽度，而不触发布局回流。Canvas 测量使用与 DOM 渲染相同的字体引擎——结果完全一致。但因为它在布局树之外运行，所以没有回流代价。

Pretext 利用了这种不对称性。当文本首次出现时，Pretext 通过 Canvas 测量每个词的宽度并缓存。在这个准备阶段之后，布局就是纯粹的算术：遍历缓存的宽度，追踪当前行的累计宽度，当宽度超过最大值时插入换行符，然后累加行高。没有 DOM，没有回流，没有布局树访问。

性能提升不是渐进式的，而是质的飞跃。用 DOM 方法测量五百个文本块需要十五到三十毫秒，并触发五百次布局回流。用 Pretext，同样的操作只需要零点零五毫秒，零次回流。这是三百到六百倍的性能提升。

有了免费的文本测量能力，一整类此前不切实际的界面变得轻而易举。文本可以环绕任意形状流动——不是因为浏览器的布局引擎支持它，而是因为你直接控制了行宽。对于每一行文本，你计算哪些水平区间被障碍物遮挡，从可用宽度中减去它们，然后将剩余宽度传递给布局引擎。

你现在看到的这个页面就是一个活生生的例子。试着拖动页面上的图片——你会看到文字像水流一样实时地在图片周围重新排列。每一行都经过精确计算，确保在图片两侧都能完美排列。这不是 CSS 的 float 或 shape-outside——这是纯粹的 JavaScript 算术，在每一帧中重新计算所有行的位置和宽度。

多栏文本流动是另一个令人惊叹的能力。左栏消耗文本直到到达底部，然后将光标传递给右栏。右栏从左栏停止的地方精确接续，没有重复，没有间隙，在栏边界处完美断行。这就是报纸和杂志在纸上的工作方式，但在网页上从未真正实现过——直到现在。

自适应标题尺寸是区分专业排版和业余布局的细节。标题应该尽可能大，同时不让任何单词跨行断开。这需要二分搜索：尝试一个字号，测量文本，检查是否有行内断词，然后调整。使用 DOM 测量，每次迭代都需要一次回流；使用 Pretext，每次迭代只是一微秒的算术运算。

当文本测量变得免费时，文本信息变得丰富而廉价。你可以在过去查询一次的时间里，询问文本在一千种不同宽度下的外观。你可以在每一帧、每一次拖拽事件、每一像素的窗口调整中重新计算文本布局，而不必担心任何性能问题。

想象一个数据可视化，其中标签随着用户缩放和平移而在图表元素周围重排。想象一个协作文档编辑器，其中文字围绕其他用户放置的嵌入式小部件、图片和注释流动，并在他们移动东西时实时更新。想象一个地图应用，其中地名智能地环绕地理特征而不是重叠在它们上面。

开放的网络值得拥有与其雄心相匹配的排版能力。我们构建的应用在每一个维度上都可以与原生软件媲美，唯独文本除外。我们的动画流畅，交互响应迅速，图形令人惊叹——但我们的文字坐在僵硬的盒子里，无法环绕障碍物流动，无法适应动态布局。

当文本测量变得免费时，这一切都改变了。不是略微改善——而是根本性的不同。那些曾经太昂贵而无法构建的界面变得轻而易举。那些只存在于印刷品中的布局变得可交互。那些坐在盒子里的文字开始流动。

网络已经等待了三十年。一个十五千字节、零依赖的库实现了它。不需要浏览器 API 变更，不需要规范流程，不需要多年的标准化时间线。只需要数学、缓存的测量值，以及一个大胆的问题：如果我们干脆不再问 DOM 呢？十五千字节。零依赖。零 DOM 读取。文字自由流淌。`

const PQ_TEXT = '"当文本测量变得免费时，那些曾经太昂贵而无法构建的界面变得轻而易举。那些只存在于印刷品中的布局变得可交互。"'

// ── DOM ───────────────────────────────────────────────
const stage = document.getElementById('canvas-stage')
const loading = document.getElementById('loading')

function carve(base, blocked) {
  let s = [base]
  for (const b of blocked) {
    const n = []
    for (const sl of s) {
      if (b.right <= sl.left || b.left >= sl.right) { n.push(sl); continue }
      if (b.left > sl.left) n.push({ left: sl.left, right: b.left })
      if (b.right < sl.right) n.push({ left: b.right, right: sl.right })
    }
    s = n
  }
  return s.filter(x => x.right - x.left >= MIN_SLOT)
}

function pool(arr, n, cls) {
  while (arr.length < n) { const e = document.createElement('div'); e.className = cls; stage.appendChild(e); arr.push(e) }
  for (let i = 0; i < arr.length; i++) arr[i].style.display = i < n ? '' : 'none'
}

const P = { body:[], hl:[], sub:[], pql:[], pqb:[], div:[] }

// 创建图片 DOM
const imgEls = [], capEls = []
for (const im of images) {
  const f = document.createElement('div'); f.className = 'image-frame'
  const ig = document.createElement('img'); ig.src = im.url; ig.alt = im.cap; ig.draggable = false
  f.appendChild(ig); stage.appendChild(f); imgEls.push(f)
  const c = document.createElement('div'); c.className = 'image-caption'; c.textContent = im.cap
  stage.appendChild(c); capEls.push(c)
}

// ── 拖拽 ──────────────────────────────────────────────
stage.addEventListener('pointerdown', e => {
  for (let i = imgEls.length - 1; i >= 0; i--) {
    if (imgEls[i].style.display === 'none') continue
    const s = images[i]
    // 用绝对坐标判断命中
    const mx = e.pageX, my = e.pageY
    if (mx >= s.x && mx <= s.x + s.w && my >= s.y && my <= s.y + s.h) {
      e.preventDefault()
      dragState = { i, ox: mx - s.x, oy: my - s.y }
      imgEls[i].classList.add('dragging')
      document.body.style.cursor = 'grabbing'
      return
    }
  }
})
window.addEventListener('pointermove', e => {
  if (!dragState) return
  e.preventDefault()
  images[dragState.i].x = e.pageX - dragState.ox
  images[dragState.i].y = e.pageY - dragState.oy
  render()
})
window.addEventListener('pointerup', () => {
  if (!dragState) return
  imgEls[dragState.i].classList.remove('dragging')
  document.body.style.cursor = ''
  dragState = null
})

// ── 强制加载字体 ──────────────────────────────────────
const SAMPLE = '排版是人类文明中最古老也最精妙的视觉艺术ABCDEFGabcdefg'
await Promise.all([
  document.fonts.load(`16px "Noto Serif SC"`, SAMPLE),
  document.fonts.load(`700 16px "Noto Serif SC"`, SAMPLE),
  document.fonts.load(`16px "Playfair Display"`, SAMPLE),
  document.fonts.load(`700 72px "Playfair Display"`, SAMPLE),
  document.fonts.load(`italic 17px "Playfair Display"`, SAMPLE),
  document.fonts.load(`300 14px "Inter"`, SAMPLE),
])
await document.fonts.ready
// 额外等一帧
await new Promise(r => requestAnimationFrame(r))

loading.style.display = 'none'

// ── 预处理 ────────────────────────────────────────────
// 首字单独处理，正文从第二个字开始 prepare（避免 cursor {0,1} 崩溃）
const BODY_REST = BODY.slice(1)
const prepBody = prepareWithSegments(BODY_REST, BODY_FONT)
const prepPQ = prepareWithSegments(PQ_TEXT, PQ_FONT)

// 首字下沉
const DC_SZ = BODY_LH * DROP_CAP_LINES - 4
const DC_FONT = `700 ${DC_SZ}px "Playfair Display", serif`
const DC_CH = BODY[0]
let dcW = 0
walkLineRanges(prepareWithSegments(DC_CH, DC_FONT), 9999, l => { dcW = l.width })
dcW = Math.ceil(dcW) + 12
const dcEl = document.createElement('div')
dcEl.className = 'drop-cap'; dcEl.textContent = DC_CH
dcEl.style.font = DC_FONT; dcEl.style.lineHeight = DC_SZ + 'px'
stage.appendChild(dcEl)

// ── 标题 ──────────────────────────────────────────────
function fitHL(maxW, maxH, maxSz = 72) {
  let lo = 20, hi = maxSz, best = lo, bLines = []
  while (lo <= hi) {
    const sz = (lo + hi) >> 1, font = `700 ${sz}px ${HL_FAMILY}`, lh = Math.round(sz * 1.1)
    const p = prepareWithSegments(HL_TEXT, font)
    let brk = false, lc = 0
    walkLineRanges(p, maxW, l => { lc++; if (l.end.graphemeIndex !== 0) brk = true })
    if (!brk && lc * lh <= maxH) {
      best = sz
      const r = layoutWithLines(p, maxW, lh)
      bLines = r.lines.map((l, i) => ({ x: 0, y: i * lh, text: l.text, w: l.width }))
      lo = sz + 1
    } else hi = sz - 1
  }
  return { sz: best, lines: bLines }
}

// ── 多栏排版 ──────────────────────────────────────────
function layCol(prep, cur, rx, ry, rw, rh, lh, obs) {
  let c = cur, top = ry, lines = [], done = false
  while (top + lh <= ry + rh && !done) {
    const bt = top, bb = top + lh, blk = []
    for (const o of obs) { if (bb <= o.y || bt >= o.y + o.h) continue; blk.push({ left: o.x, right: o.x + o.w }) }
    const slots = carve({ left: rx, right: rx + rw }, blk)
    if (!slots.length) { top += lh; continue }
    slots.sort((a, b) => a.left - b.left)
    for (const s of slots) {
      const ln = layoutNextLine(prep, c, s.right - s.left)
      if (!ln) { done = true; break }
      lines.push({ x: Math.round(s.left), y: Math.round(top), text: ln.text, w: ln.width })
      c = ln.end
    }
    top += lh
  }
  return { lines, cursor: c }
}

// ── 渲染 ──────────────────────────────────────────────
function render() {
  const pw = document.documentElement.clientWidth
  const narrow = pw < NARROW
  const gut = narrow ? 20 : GUTTER
  const gap = narrow ? 0 : COL_GAP

  // 标题
  const hlMW = Math.min(pw - gut * 2, 860)
  const { sz: hlSz, lines: hlL } = fitHL(hlMW, narrow ? 70 : 120, narrow ? 30 : 64)
  const hlLH = Math.round(hlSz * 1.1), hlFont = `700 ${hlSz}px ${HL_FAMILY}`
  const hlH = hlL.length * hlLH

  // 副标题
  const subP = prepareWithSegments(SUB_TEXT, SUB_FONT)
  const subR = layoutWithLines(subP, hlMW, SUB_LH)
  const subL = subR.lines.map((l, i) => ({ x: 0, y: i * SUB_LH, text: l.text, w: l.width }))
  const subH = subL.length * SUB_LH

  // 分隔线 y
  const divY = gut + hlH + 10 + subH + 14

  // 正文起始
  const bodyTop = Math.round(divY + 24)
  const bodyH = BODY_FIXED_H
  const cols = pw > 960 ? 2 : 1
  const totG = gut * 2 + gap * (cols - 1)
  const maxCW = Math.min(pw, 1200)
  const colW = Math.floor((maxCW - totG) / cols)
  const cL = Math.round((pw - (cols * colW + (cols - 1) * gap)) / 2)

  // 初始化图片位置
  if (needsInit) {
    const cfgs = [
      { col: 0, yF: 0.08, wF: 0.44, side: 'right' },
      { col: cols > 1 ? 1 : 0, yF: 0.03, wF: 0.40, side: 'left' },
      { col: cols > 1 ? 1 : 0, yF: 0.38, wF: 0.38, side: 'right' },
    ]
    for (let i = 0; i < images.length; i++) {
      const cfg = cfgs[i], ci = Math.min(cfg.col, cols - 1)
      const cx = cL + ci * (colW + gap)
      const iw = Math.round(colW * cfg.wF), ih = Math.round(iw * 0.62)
      images[i].x = cfg.side === 'right' ? cx + colW - iw : cx
      images[i].y = Math.round(bodyTop + bodyH * cfg.yF)
      images[i].w = iw; images[i].h = ih
    }
    needsInit = false
  }

  // 障碍物
  const obs = []
  const nImg = narrow ? 1 : images.length
  for (let i = 0; i < nImg; i++) {
    const s = images[i]
    imgEls[i].style.display = ''; imgEls[i].style.left = s.x + 'px'; imgEls[i].style.top = s.y + 'px'
    imgEls[i].style.width = s.w + 'px'; imgEls[i].style.height = s.h + 'px'; imgEls[i].style.zIndex = '5'
    capEls[i].style.display = ''; capEls[i].style.left = s.x + 'px'; capEls[i].style.top = (s.y + s.h + 5) + 'px'
    obs.push({ x: s.x - IMG_PAD, y: s.y - IMG_PAD, w: s.w + IMG_PAD * 2, h: s.h + 24 + IMG_PAD * 2 })
  }
  for (let i = nImg; i < images.length; i++) { imgEls[i].style.display = 'none'; capEls[i].style.display = 'none' }

  // 引言
  let pqR = null, pqL = []
  if (!narrow && cols >= 2) {
    const pqW = Math.round(colW * 0.48)
    const r = layoutWithLines(prepPQ, pqW - 22, PQ_LH)
    const pH = r.lines.length * PQ_LH + 16, pqX = cL, pqY = Math.round(bodyTop + bodyH * 0.55)
    pqL = r.lines.map((l, i) => ({ x: pqX + 22, y: pqY + 8 + i * PQ_LH, text: l.text, w: l.width }))
    pqR = { x: pqX, y: pqY, w: pqW, h: pH }
    obs.push(pqR)
  }

  // 首字下沉
  const dcR = { x: cL - 2, y: bodyTop - 2, w: dcW, h: DROP_CAP_LINES * BODY_LH + 2 }

  // 排版
  const allL = []
  let cur = { segmentIndex: 0, graphemeIndex: 0 }
  for (let ci = 0; ci < cols; ci++) {
    const cx = cL + ci * (colW + gap), cR2 = cx + colW
    const rects = []; if (ci === 0) rects.push(dcR)
    for (const o of obs) { if (o.x + o.w > cx && o.x < cR2) rects.push(o) }
    const res = layCol(prepBody, cur, cx, bodyTop, colW, bodyH, BODY_LH, rects)
    allL.push(...res.lines); cur = res.cursor
  }

  // 计算实际内容高度，设置 stage 高度
  let maxY = bodyTop + bodyH
  for (const l of allL) { const b = l.y + BODY_LH; if (b > maxY) maxY = b }
  stage.style.height = (maxY + 40) + 'px'

  // ── DOM 输出 ────────────────────────────────────────

  // 标题
  pool(P.hl, hlL.length, 'headline-line')
  for (let i = 0; i < hlL.length; i++) {
    const e = P.hl[i], l = hlL[i]
    e.textContent = l.text; e.style.left = gut + 'px'; e.style.top = (gut + l.y) + 'px'
    e.style.font = hlFont; e.style.lineHeight = hlLH + 'px'
  }

  // 副标题
  pool(P.sub, subL.length, 'subtitle-line')
  for (let i = 0; i < subL.length; i++) {
    const e = P.sub[i], l = subL[i]
    e.textContent = l.text; e.style.left = gut + 'px'; e.style.top = (gut + hlH + 10 + l.y) + 'px'
    e.style.font = SUB_FONT; e.style.lineHeight = SUB_LH + 'px'
  }

  // 分隔线
  pool(P.div, 1, 'divider')
  P.div[0].style.left = gut + 'px'; P.div[0].style.top = Math.round(divY) + 'px'
  P.div[0].style.width = (pw - gut * 2) + 'px'

  // 首字下沉
  dcEl.style.left = cL + 'px'; dcEl.style.top = bodyTop + 'px'

  // 正文
  pool(P.body, allL.length, 'text-line')
  for (let i = 0; i < allL.length; i++) {
    const e = P.body[i], l = allL[i]
    e.textContent = l.text; e.style.left = l.x + 'px'; e.style.top = l.y + 'px'
    e.style.font = BODY_FONT; e.style.lineHeight = BODY_LH + 'px'
  }

  // 引言
  if (pqR) {
    pool(P.pqb, 1, 'pullquote-box')
    P.pqb[0].style.left = pqR.x + 'px'; P.pqb[0].style.top = pqR.y + 'px'
    P.pqb[0].style.width = pqR.w + 'px'; P.pqb[0].style.height = pqR.h + 'px'
    pool(P.pql, pqL.length, 'pullquote-line')
    for (let i = 0; i < pqL.length; i++) {
      const e = P.pql[i], l = pqL[i]
      e.textContent = l.text; e.style.left = l.x + 'px'; e.style.top = l.y + 'px'
      e.style.font = PQ_FONT; e.style.lineHeight = PQ_LH + 'px'
    }
  } else { pool(P.pqb, 0, 'pullquote-box'); pool(P.pql, 0, 'pullquote-line') }
}

render()
window.addEventListener('resize', () => { needsInit = true; render() })
