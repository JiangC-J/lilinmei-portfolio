export type Project = {
  slug: string
  title: string
  englishTitle: string
  type: string
  year: string
  tools: string[]
  role: string
  tags: string[]
  description: string
  cover: string
  gallery: string[]
  heroTone: string
  background: string
  keywords: string[]
  designSystem: string[]
  process: string[]
  finalDisplay: string[]
  summary: string
}

export const assetPath = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`

const makeGallery = (slug: string, count: number) =>
  Array.from({ length: count }, (_, index) =>
    assetPath(`assets/projects/${slug}/page-${String(index + 1).padStart(2, '0')}.jpg`),
  )

export const projects: Project[] = [
  {
    slug: 'tipsy-nest',
    title: '醉鸟巢 Tipsy Nest',
    englishTitle: 'Tipsy Nest',
    type: '酒馆品牌设计',
    year: '2025',
    tools: ['Illustrator', 'Photoshop', 'Figma'],
    role: '品牌定位、Logo、插画、菜单与延展物料',
    tags: ['手绘', '微醺', '复古'],
    description: '以松弛的手绘线条和微醺情绪建立酒馆品牌，让夜晚社交更有温度。',
    cover: assetPath('assets/projects/tipsy-nest/cover.jpg'),
    gallery: makeGallery('tipsy-nest', 11),
    heroTone: '#B96F3A',
    background: '项目希望塑造一家亲近、复古、带有手作气息的社区酒馆。视觉不追求强烈夜店感，而是用鸟巢、酒杯、木质吧台等意象营造可以慢慢聊天的空间。',
    keywords: ['手绘线条', '复古酒馆', '微醺松弛', '暖棕橙'],
    designSystem: ['深棕与低饱和橙形成木质、灯光和酒液的联想。', 'Logo 以鸟巢和杯型结构结合，保留手绘的不规则感。', '延展图形适合菜单、杯垫、贴纸和线下物料。'],
    process: ['梳理酒馆消费场景与目标人群，收束关键词。', '通过草图推导鸟巢与酒杯的组合方式。', '建立品牌色、辅助图形和菜单层级。'],
    finalDisplay: ['品牌主视觉、Logo 组合、菜单版式和杯垫贴纸形成统一应用。', '详情页展示完整项目图片，可点击放大查看细节。'],
    summary: '项目亮点在于把酒馆常见的酷感转译为更温暖的手作氛围，展示品牌性格和系统化延展能力。',
  },
  {
    slug: 'gugu-song',
    title: '咕咕松',
    englishTitle: 'Gugu Song',
    type: '烘焙 / 食品品牌设计',
    year: '2025',
    tools: ['Illustrator', 'Photoshop', 'Figma'],
    role: '品牌视觉、包装贴纸、插画元素、应用规范',
    tags: ['温暖', '可爱', '食欲感'],
    description: '围绕烘焙香气、松软口感和治愈陪伴，设计一个亲切的食品品牌。',
    cover: assetPath('assets/projects/gugu-song/cover.jpg'),
    gallery: makeGallery('gugu-song', 10),
    heroTone: '#D99B35',
    background: '咕咕松面向喜欢烘焙甜点与轻食的年轻用户，视觉需要兼顾可爱亲和与货架识别，避免过度幼稚。',
    keywords: ['松软口感', '烘焙香气', '治愈插画', '暖黄奶油'],
    designSystem: ['奶油黄、麦芽橙和深棕构成食欲感色盘。', '圆润图形搭配烘焙小物与品牌角色。', '包装信息层级强调口味、品类和品牌记忆点。'],
    process: ['从食品特征中提取松软、香气、刚出炉的视觉联想。', '测试角色表情、贴纸形态和包装留白比例。', '将插画、标识和口味色做成可复用包装系统。'],
    finalDisplay: ['展示品牌标识、包装正背面、贴纸和应用场景。', '详情页展示完整项目图片，可点击放大查看细节。'],
    summary: '项目重点是把温暖可爱的情绪控制在专业品牌范围内，突出食品品牌的亲和力和可落地性。',
  },
  {
    slug: 'pamper',
    title: '宠爱吧 Pamper',
    englishTitle: 'Pamper',
    type: '宠物领养 APP UI / 交互设计',
    year: '2025',
    tools: ['Figma', 'Illustrator', 'Photoshop'],
    role: '产品结构、UI 视觉、交互流程、组件规范',
    tags: ['陪伴', '公益领养', '科学养宠'],
    description: '以公益领养和科学养宠为核心，设计温暖可信的宠物陪伴类 APP。',
    cover: assetPath('assets/projects/pamper/cover.jpg'),
    gallery: makeGallery('pamper', 18),
    heroTone: '#E49A78',
    background: '宠物领养需要同时传达温暖情绪、信息可信度和流程清晰度。项目围绕领养匹配、宠物档案、养宠知识和公益活动搭建体验。',
    keywords: ['温暖陪伴', '清晰流程', '可信信息', '公益领养'],
    designSystem: ['低饱和橙和米白减少机构平台的距离感。', '宠物卡片包含状态、性格、年龄、领养条件和健康标签。', '组件系统覆盖按钮、标签、筛选器和内容列表。'],
    process: ['拆分浏览、筛选、咨询到申请领养的关键路径。', '设计低压力的信息卡片，让用户快速理解宠物状态。', '用组件化方式统一列表、详情、知识内容和活动页面。'],
    finalDisplay: ['展示首页、领养列表、宠物详情、申请流程和养宠知识页面。', '详情页展示完整 UI 作品图，可点击放大查看细节。'],
    summary: '项目展示了从视觉温度到交互路径的综合能力，重点是让公益领养体验更清楚、更可信。',
  },
  {
    slug: 'yujian',
    title: '玉见',
    englishTitle: 'Yujian',
    type: '玉石文化 icon / UI 设计',
    year: '2025',
    tools: ['Illustrator', 'Figma'],
    role: 'icon 系统、视觉规范、UI 页面探索',
    tags: ['东方美学', '淡雅', '文化感'],
    description: '以玉石文化为灵感，建立淡雅、克制且具有文化识别度的 icon 与界面系统。',
    cover: assetPath('assets/projects/yujian/cover.jpg'),
    gallery: makeGallery('yujian', 5),
    heroTone: '#8FAF96',
    background: '项目围绕玉石文化的纹理、器型和东方审美展开，希望在现代 UI 中保留温润、雅致和文化叙事。',
    keywords: ['温润玉色', '东方器型', '淡雅留白', '文化符号'],
    designSystem: ['颜色以玉白、浅青、茶褐为主，控制饱和度。', 'icon 使用统一线宽和圆角，提取玉佩、纹样、器物轮廓。', 'UI 布局强调留白和信息秩序。'],
    process: ['收集玉石器型与传统纹样，提炼可被图标化的轮廓。', '测试线性、面性和局部填色三种 icon 风格。', '将 icon 应用于文化内容、分类入口和详情页场景。'],
    finalDisplay: ['展示 icon 网格、色彩规范、局部 UI 页面和应用场景。', '详情页展示完整项目图片，可点击放大查看细节。'],
    summary: '项目重点是控制文化题材的现代化表达，在清晰可用的前提下保留东方美学气质。',
  },
  {
    slug: 'cod-fish',
    title: '鳕鱼竹轮',
    englishTitle: 'Cod Fish Packaging',
    type: '食品包装设计',
    year: '2025',
    tools: ['Illustrator', 'Photoshop'],
    role: '包装主视觉、插画、货架识别、系列延展',
    tags: ['货架视觉', '漫画感', '强识别'],
    description: '用漫画式节奏和高识别色块打造食品包装，让产品在货架上更快被看见。',
    cover: assetPath('assets/projects/cod-fish/cover.jpg'),
    gallery: makeGallery('cod-fish', 15),
    heroTone: '#EA7D35',
    background: '鳕鱼竹轮包装需要在短时间内传达品类、口味和趣味。项目通过强轮廓、漫画表情和明确色块提升货架吸引力。',
    keywords: ['漫画节奏', '强对比', '食品识别', '货架冲击'],
    designSystem: ['大面积暖橙与深棕线条形成远距离识别。', '包装版式强调品名、口味与产品形态的快速阅读。', '插画围绕鳕鱼、竹轮切片、拟声词和动态线展开。'],
    process: ['分析同类食品包装的货架竞争点。', '绘制漫画式产品角色和动态构图。', '统一正面、侧面和系列口味的包装规则。'],
    finalDisplay: ['展示包装正面、系列口味、局部细节和货架模拟。', '详情页展示完整包装作品图，可点击放大查看细节。'],
    summary: '项目亮点是用视觉冲击和信息秩序共同服务销售场景，适合展示包装设计的商业意识。',
  },
  {
    slug: 'xiaonaoye',
    title: '小甲礼',
    englishTitle: 'Xiao Jia Li',
    type: 'IP 形象设计',
    year: '2025',
    tools: ['Illustrator', 'Photoshop', 'After Effects'],
    role: 'IP 设定、表情动作、文创应用、衍生物料',
    tags: ['青铜器', '东方文化', '角色化'],
    description: '以青铜礼器与东方文化为灵感，设计一个有情绪、有动作、可延展的文化 IP 角色。',
    cover: assetPath('assets/projects/xiaonaoye/cover.jpg'),
    gallery: makeGallery('xiaonaoye', 4),
    heroTone: '#7EA65A',
    background: '小甲礼以青铜器造型和传统礼器文化为基础，将厚重的文化符号转译成亲和、可爱的 IP 角色，适合文创周边和文化传播场景。',
    keywords: ['青铜礼器', '文化 IP', '东方绿色', '文创延展'],
    designSystem: ['角色以青铜器轮廓为核心，结合圆润比例降低距离感。', '色彩使用青绿色、米白和深绿，保留文化感与亲和力。', '延展包含表情、动作、卡牌、贴纸和文创周边。'],
    process: ['从青铜器造型中提取角色轮廓和头部识别点。', '推导角色表情、动作和三视图，让 IP 具备叙事弹性。', '测试角色在卡牌、贴纸、杯具、徽章和文创包装中的应用效果。'],
    finalDisplay: ['展示角色设定、表情动作、文创应用和衍生物料。', '详情页展示完整项目图片，可点击放大查看细节。'],
    summary: '项目亮点在于把传统器物转化为可亲近的 IP 形象，让文化题材具备更强的传播性和延展性。',
  },
]

export const selectedProjects = projects.filter((project) =>
  ['tipsy-nest', 'gugu-song', 'pamper', 'cod-fish'].includes(project.slug),
)
