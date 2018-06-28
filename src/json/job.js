var CONST_REQUIRE_SALARY_GX = [// 薪资
  [
    '30001',
    '1-2k'
  ],
  [
    '30002',
    '2-4k'
  ],
  [
    '30003',
    '4-6k'
  ],
  [
    '30004',
    '6-8k'
  ],
  [
    '30005',
    '8-10k'
  ],
  [
    '30006',
    '10-15k'
  ],
  [
    '30007',
    '15-20k'
  ],
  [
    '30008',
    '20-30k'
  ],
  [
    '30009',
    '30-50k'
  ],
  [
    '30010',
    '50-70k'
  ],
  [
    '30011',
    '50-100k'
  ]
]
var arrEmploymenttype = [// 职位性质
  ['20001', '全职'],
  ['20002', '兼职'],
  ['20003', '实习']
]
var CONST_WORK_STATUS = [// 职位状态
  ['130001', '已下线'],
  ['130002', '发布中'],
  ['130003', '已到期']
]
var CONST_REQUIRE_DEGREE = [// 学历
    ['50001', '不限'],
    ['50002', '中专'],
    ['50003', '高中'],
    ['50004', '大专'],
    ['50005', '本科'],
    ['50006', '硕士'],
    ['50007', '博士']
]
var CONST_REQUIRE_SEX = [{
  value: '70001',
  label: '男'
}, {
  value: '70002',
  label: '女'
}]
var CONST_REQUIRE_EXPERIENCE = [// 工作年限
  [
    '40001',
    '经验不限'
  ],
  [
    '40002',
    '1年以下'
  ],
  [
    '40003',
    '1-3年'
  ],
  [
    '40004',
    '3-5年'
  ],
  [
    '40005',
    '5-10年'
  ],
  [
    '40006',
    '10年以上'
  ]
]
var CONST_REQUIRE_PLACE = [// 工作地点
  [
    '武汉',
    '武汉'
  ],
  [
    '北京',
    '北京'
  ]
]
var CONST_REQUIRE_WORKSITE = {
  '武汉': [
    {
      label: '光谷软件园F1栋10楼',
      value: '光谷软件园F1栋10楼'
    },
    {
      label: '关南园四路东港科技园5号楼',
      value: '关南园四路东港科技园5号楼'
    },
    {
      label: '关南园一路当代光谷梦工场',
      value: '关南园一路当代光谷梦工场'
    }
  ],
  '北京': [
    {
      label: '北京市朝阳区来广营中街甲1号朝来科技产业园创远路36号院4-6号楼',
      value: '北京市朝阳区来广营中街甲1号朝来科技产业园创远路36号院4-6号楼'
    }
  ]
}
var CONST_SAMETIMETO_EMALI = [
  [
    '0',
    '同时转发简历到邮箱'
  ],
  [
    '1',
    '仅通过招聘系统接收简历'

  ]
]
var CONST_WORKLIGHT = [// 职位亮点
  [
    '120001',
    '创业公司'
  ],
  [
    '120002',
    '14薪'
  ],
  [
    '120003',
    '住房补贴'
  ],
  [
    '120004',
    '无试用期'
  ],
  [
    '120005',
    '免息房贷'
  ],
  [
    '120006',
    '每年多次调薪'
  ],
  [
    '120007',
    '健身俱乐部'
  ],
  [
    '120008',
    '五险一金'
  ],
  [
    '120009',
    '年底双薪'
  ],
  [
    '120010',
    '年终分红'
  ],
  [
    '120011',
    '股票期权'
  ],
  [
    '120012',
    '加班补助'
  ],
  [
    '120013',
    '全勤奖'
  ],
  [
    '120014',
    '包吃'
  ],
  [
    '120015',
    '包住'
  ],
  [
    '120016',
    '交通补助'
  ],
  [
    '120017',
    '餐补'
  ],
  [
    '120018',
    '房补'
  ],
  [
    '120019',
    '通讯补贴'
  ],
  [
    '120020',
    '采暖补贴'
  ],
  [
    '120021',
    '带薪年假'
  ],
  [
    '120022',
    '弹性工作'
  ],
  [
    '120023',
    '补充医疗保险'
  ],
  [
    '120024',
    '定期体检'
  ],
  [
    '120025',
    '免费班车'
  ],
  [
    '120026',
    '员工旅游'
  ],
  [
    '120027',
    '高温补贴'
  ],
  [
    '120028',
    '节日福利'
  ],
  [
    '120029',
    '不加班'
  ],
  [
    '120030',
    '绩效奖金'
  ]
]
var CONST_PUBLISH_CHANNEl = [// 发布渠道
  [

    '10001',
    '智联招聘'

  ],
  [
    '10002',
    '58同城'
  ],
  [
    '10003',
    '猎聘网'
  ],
  [
    '10004',
    'Boss直聘'
  ],
  [
    '10005',
    '前程无忧'
  ],
  [
    '10006',
    '拉勾网'
  ]
]
export default{
  CONST_REQUIRE_SALARY_GX,
  arrEmploymenttype,
  CONST_REQUIRE_DEGREE,
  CONST_REQUIRE_EXPERIENCE,
  CONST_REQUIRE_PLACE,
  CONST_REQUIRE_WORKSITE,
  CONST_SAMETIMETO_EMALI,
  CONST_WORKLIGHT,
  CONST_WORK_STATUS,
  CONST_PUBLISH_CHANNEl,
  CONST_REQUIRE_SEX
}