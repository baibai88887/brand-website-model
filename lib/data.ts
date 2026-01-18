import {
  Product,
  ProductCategory,
  News,
  NewsCategory,
  Stat,
  ContactInfo,
  FAQ,
  CompanyValue,
  TimelineItem,
  TeamMember,
  OfficeLocation,
} from '@/types';

// ==================== Products ====================
export const productCategories: ProductCategory[] = [
  { id: 'all', name: '全部产品', icon: 'LayoutGrid', color: 'brand-gray-mid' },
  { id: 'charging', name: '智能充电', icon: 'Zap', color: 'brand-orange' },
  { id: 'smart-home', name: '智能家居', icon: 'Home', color: 'brand-blue' },
  { id: 'audio', name: '智能影音', icon: 'Volume2', color: 'brand-green' },
  { id: 'energy', name: '能源管理', icon: 'BatteryCharging', color: 'brand-orange' },
];

export const products: Product[] = [
  {
    id: 1,
    name: '超快充充电器 100W',
    category: 'charging',
    description: '采用最新氮化镓技术，支持多设备同时快充，体积小巧便携。',
    price: 299,
    originalPrice: 399,
    features: ['100W 大功率输出', '氮化镓技术', '多口同时充电', '智能识别设备'],
    isNew: true,
    isHot: true,
  },
  {
    id: 2,
    name: '智能充电宝 20000mAh',
    category: 'charging',
    description: '超大容量，支持双向快充，数字显示屏实时显示电量。',
    price: 199,
    originalPrice: 259,
    features: ['20000mAh 大容量', '双向快充', '数字显示', '多协议兼容'],
    isNew: false,
    isHot: true,
  },
  {
    id: 3,
    name: '无线充电器 15W',
    category: 'charging',
    description: '支持多种无线充电标准，智能调节充电功率，保护电池健康。',
    price: 129,
    features: ['15W 无线快充', '智能调节', '多重保护', '兼容广泛'],
    isNew: true,
    isHot: false,
  },
  {
    id: 4,
    name: '智能插座 Pro',
    category: 'smart-home',
    description: '远程控制，定时任务，电量统计，语音控制兼容。',
    price: 89,
    features: ['APP 远程控制', '定时任务', '电量统计', '语音控制'],
    isNew: false,
    isHot: false,
  },
  {
    id: 5,
    name: '智能灯泡 RGB',
    category: 'smart-home',
    description: '1600万色彩调节，支持场景模式，音乐律动。',
    price: 59,
    features: ['1600万色彩', '场景模式', '音乐律动', '定时开关'],
    isNew: true,
    isHot: false,
  },
  {
    id: 6,
    name: '蓝牙音箱 Sound Pro',
    category: 'audio',
    description: '360°环绕音效，IPX7防水，20小时超长续航。',
    price: 399,
    originalPrice: 499,
    features: ['360°环绕音效', 'IPX7防水', '20小时续航', '低音增强'],
    isNew: false,
    isHot: true,
  },
  {
    id: 7,
    name: '降噪耳机 Max',
    category: 'audio',
    description: '主动降噪，通透模式，Hi-Fi音质，30小时续航。',
    price: 899,
    originalPrice: 1299,
    features: ['主动降噪', '通透模式', 'Hi-Fi音质', '30小时续航'],
    isNew: true,
    isHot: true,
  },
  {
    id: 8,
    name: '便携储能电源 500Wh',
    category: 'energy',
    description: '大容量便携电源，支持多种充电方式，户外必备。',
    price: 1999,
    originalPrice: 2499,
    features: ['500Wh 大容量', '多种输出接口', '太阳能充电', 'LCD显示屏'],
    isNew: true,
    isHot: false,
  },
];

// ==================== News ====================
export const newsCategories: NewsCategory[] = [
  { id: 'all', name: '全部新闻' },
  { id: 'company', name: '公司动态' },
  { id: 'products', name: '产品发布' },
  { id: 'industry', name: '行业资讯' },
  { id: 'honor', name: '荣誉奖项' },
];

export const newsData: News[] = [
  {
    id: 1,
    title: '公司荣获2024年度中国全球化品牌Top 50',
    summary: '凭借卓越的产品创新和全球化布局，公司再次入选中国全球化品牌榜单，彰显了我们在智能硬件领域的领先地位。',
    content: `
      <p class="mb-6">凭借卓越的产品创新和全球化布局，公司再次入选中国全球化品牌榜单，彰显了我们在智能硬件领域的领先地位。这是对我们多年来坚持"极致创新，激发可能"使命的最好肯定。</p>
      <h2 class="text-2xl font-bold mb-4">持续创新，引领行业发展</h2>
      <p class="mb-6">自2011年成立以来，我们始终将技术创新作为企业发展的核心驱动力。从首创Power IQ™技术实现全面快充兼容，到首次将氮化镓（GaN）应用于消费电子领域，我们不断突破技术边界，为用户带来更好的产品体验。</p>
      <h2 class="text-2xl font-bold mb-4">全球化布局，服务全球用户</h2>
      <p class="mb-6">我们的业务已覆盖146+个国家和地区，服务超过2亿全球消费者。在全球设有超过30个办公室，形成了完善的研发、生产、销售和服务网络。</p>
    `,
    date: '2024-01-15',
    readTime: '5 分钟',
    category: 'honor',
    author: '品牌部',
    views: 12345,
  },
  {
    id: 2,
    title: '推出全新一代智能充电产品线',
    summary: '全新一代智能充电产品线正式发布，采用最新氮化镓技术，充电效率提升40%。',
    date: '2024-01-10',
    readTime: '3 分钟',
    category: 'products',
    author: '产品部',
    views: 8765,
  },
  {
    id: 3,
    title: '全球研发中心正式启用',
    summary: '位于深圳的全球研发中心正式启用，将进一步提升我们的研发创新能力。',
    date: '2024-01-05',
    readTime: '4 分钟',
    category: 'company',
    author: '行政部',
    views: 6543,
  },
  {
    id: 4,
    title: '智能家居市场份额持续增长',
    summary: '根据最新市场调研报告，我们的智能家居产品市场份额持续增长，稳居行业前三。',
    date: '2023-12-28',
    readTime: '4 分钟',
    category: 'industry',
    author: '市场部',
    views: 5432,
  },
  {
    id: 5,
    title: '与多家国际品牌达成战略合作',
    summary: '公司与多家国际知名品牌达成战略合作，共同推进智能硬件生态建设。',
    date: '2023-12-20',
    readTime: '3 分钟',
    category: 'company',
    author: '商务部',
    views: 4321,
  },
  {
    id: 6,
    title: '获得2023年度最佳创新企业奖',
    summary: '在年度科技创新大会上，公司荣获2023年度最佳创新企业奖。',
    date: '2023-12-15',
    readTime: '3 分钟',
    category: 'honor',
    author: '品牌部',
    views: 9876,
  },
];

// ==================== Stats ====================
export const stats: Stat[] = [
  {
    id: '1',
    value: '146+',
    label: '覆盖国家和地区',
    icon: 'Globe',
    color: 'brand-orange',
  },
  {
    id: '2',
    value: '200M+',
    label: '全球用户',
    icon: 'Users',
    color: 'brand-blue',
  },
  {
    id: '3',
    value: '53%',
    label: '研发人员占比',
    icon: 'BrainCircuit',
    color: 'brand-green',
  },
  {
    id: '4',
    value: '30+',
    label: '全球办公地点',
    icon: 'Building',
    color: 'brand-orange',
  },
  {
    id: '5',
    value: '1000+',
    label: '专利技术',
    icon: 'Lightbulb',
    color: 'brand-blue',
  },
  {
    id: '6',
    value: '13年',
    label: '行业经验',
    icon: 'Award',
    color: 'brand-green',
  },
];

// ==================== Contact ====================
export const contactCards: ContactInfo[] = [
  {
    id: '1',
    title: '客服热线',
    value: '+86-400-888-8888',
    icon: 'Phone',
  },
  {
    id: '2',
    title: '电子邮箱',
    value: 'contact@brand.com',
    icon: 'Mail',
  },
  {
    id: '3',
    title: '公司地址',
    value: '湖南省长沙市岳麓区XXX路XXX号',
    icon: 'MapPin',
  },
  {
    id: '4',
    title: '工作时间',
    value: '周一至周五 9:00-18:00',
    icon: 'Clock',
  },
];

export const faqs: FAQ[] = [
  {
    id: '1',
    question: '如何查询我的订单状态？',
    answer: '您可以登录您的账户，在"我的订单"页面查看订单状态。我们也会通过邮件和短信向您发送订单更新信息。',
  },
  {
    id: '2',
    question: '产品保修期是多久？',
    answer: '我们的产品提供1-2年的保修服务，具体保修期请参考产品页面或产品说明书。保修期内因非人为因素导致的产品故障，我们提供免费维修或更换服务。',
  },
  {
    id: '3',
    question: '如何申请退换货？',
    answer: '收到商品后7天内，如产品存在质量问题或与描述不符，您可以申请退货或换货。请联系客服获取退货地址和退货指南。',
  },
  {
    id: '4',
    question: '你们支持哪些支付方式？',
    answer: '我们支持支付宝、微信支付、银行卡等多种支付方式，确保您的支付安全便捷。',
  },
];

// ==================== Company Values ====================
export const companyValues: CompanyValue[] = [
  {
    id: '1',
    title: '第一性',
    description: '回归本质，从第一性原理出发思考问题，不被表象和经验束缚。',
    icon: 'Target',
  },
  {
    id: '2',
    title: '求极致',
    description: '追求极致的用户体验和产品品质，不满足于"差不多就好"。',
    icon: 'Zap',
  },
  {
    id: '3',
    title: '共成长',
    description: '与用户、伙伴、员工共同成长，创造价值，分享成果。',
    icon: 'Heart',
  },
  {
    id: '4',
    title: '持续学习',
    description: '保持好奇心和开放心态，不断学习，持续进化。',
    icon: 'BookOpen',
  },
];

// ==================== Timeline ====================
export const timeline: TimelineItem[] = [
  {
    year: '2011',
    title: '公司成立',
    description: '在湖南长沙成立，开启智能硬件创新之旅',
  },
  {
    year: '2014',
    title: '首款产品发布',
    description: '发布首款智能充电产品，获得市场热烈反响',
  },
  {
    year: '2017',
    title: '全球化布局',
    description: '业务拓展至海外，设立首个海外办公室',
  },
  {
    year: '2020',
    title: '用户破亿',
    description: '全球用户数量突破1亿大关',
  },
  {
    year: '2023',
    title: '生态完善',
    description: '形成充电、家居、影音、能源四大产品线',
  },
  {
    year: '2024',
    title: '持续创新',
    description: '持续加大研发投入，引领行业发展',
  },
];

// ==================== Team ====================
export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: '张三',
    position: '创始人兼CEO',
    bio: '2005年获得美国德克萨斯大学奥斯汀分校计算机硕士学位，此前毕业于北京大学计算机系。在创立公司之前，曾担任Google高级算法工程师，并荣获Google最高奖项。因创业成就获得2017年中国安永企业家奖，并于2019年被评为年度企业家。',
  },
];

// ==================== Offices ====================
export const officeLocations: OfficeLocation[] = [
  {
    id: '1',
    city: '长沙',
    country: '中国',
    address: '湖南省长沙市岳麓区XXX路XXX号',
  },
  {
    id: '2',
    city: '深圳',
    country: '中国',
    address: '广东省深圳市南山区XXX路XXX号',
  },
  {
    id: '3',
    city: '北京',
    country: '中国',
    address: '北京市海淀区XXX路XXX号',
  },
  {
    id: '4',
    city: '上海',
    country: '中国',
    address: '上海市浦东新区XXX路XXX号',
  },
  {
    id: '5',
    city: '东京',
    country: '日本',
    address: '东京都XXX区XXX路XXX号',
  },
  {
    id: '6',
    city: '新加坡',
    country: '新加坡',
    address: 'XXX区XXX路XXX号',
  },
];

// ==================== Product Colors ====================
export const productColors = [
  { name: '黑色', value: '#000000' },
  { name: '白色', value: '#FFFFFF' },
  { name: '蓝色', value: '#6a9bcc' },
  { name: '绿色', value: '#788c5d' },
  { name: '橙色', value: '#d97757' },
];
