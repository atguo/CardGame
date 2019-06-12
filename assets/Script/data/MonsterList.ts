const monsters = [
    {
        id: 'MB0000001', name: "黄疸", description: "nsl",
        health: [-5, -3, 0],
        expired: 2,
        buff: [2, 1, 0],
        keep: 2
    },
    {
        id: 'MB0000002', name: "营养不良", description: "nsl",
        health: [-1, -1, -1],
        expired: -1,
        buff: [-5, -5, 0],
        keep: -1
    },
    {
        id: 'MB0000003', name: "湿疹", description: "nsl",
        expired: 5,
        health: [-1, -1, -1],
    },
    {
        id: 'MB0000004', name: "假疫苗", description: "nsl",
        expired: 8,
        health: [-10, -10, -10],
    },
    {
        id: 'MB0000005', name: "毒奶粉", description: "俗称DNF",
        expired: 8,
        health: [-10, -10, -10],
    },
    {
        id: 'MB0000004', name: "人贩子", description: "爷爷把婴儿车扔在背后马路上，自己脸贴在墙上看今天的报纸,三天后他在墙上发现了你失踪的信息",
        expired: 8,
        health: [-10, -10, -10],
    },
    {
        id: 'MC0406001', name: "幼儿园恶霸", description: "玩具?不准玩! 座位?不准坐! 小零食?不准吃! 小女孩?不准亲!",
        health: [-5, 3, 1],
        expired: 4,
    },
    {
        id: 'MC0406002', name: "小学时间两年半的隔壁小学生", description: "nsl",
        health: [1, 1, -3],
        expired: 4,
    },
    {
        id: 'MC0412003', name: "钢琴课老师", description: "由哆来咪公司友情赞助",
        health: [0, -8, 20],
        expired: 10,
    },
    {
        id: 'MC0412004', name: "跆拳道辅导班教练", description: "由韩国四星友情赞助",
        health: [20, -10, 5],
        expired: 5,
    },
    {
        id: 'MC0412005', name: "甲型流感", description: "",
        health: [-5, -5, -5],
        expired: 10,
    },
    {
        id: 'MC0412006', name: "新华书店", description: "",
        health: [0, 0, 20],
        expired: 20,
    },
    {
        id: 'MC0412007', name: "电子琴老师", description: "由哆来咪公司友情赞助",
        health: [0, -5, 10],
        expired: 10,
    },
    {
        id: 'MC0412007', name: "云斑白条天牛", description: "",
        health: [-1, 15, 5],
        expired: 3,
    },
    {
        id: 'MC0412007', name: "华蜗牛", description: "",
        health: [-1, 5, 4],
        expired: 4,
    },
    {
        id: 'MC0412007', name: "非洲大蜗牛", description: "",
        health: [-1, 2, 9],
        expired: 3,
    },
    {
        id: 'MC0412007', name: "楼梯", description: "你在上面跳来跳去",
        health: [0, 10, -3],
        expired: 4,
    },
    {
        id: 'MC0412007', name: "车水马龙的公路", description: "感动吗",
        health: [0, 0, -3],
        expired: 6,
    },
    {
        id: 'MC0412007', name: "黑黢黢的小巷子", description: "感动吗",
        health: [0, 0, 5],
        expired: 5,
    },
    {
        id: 'MC0412007', name: "蚂蚁搬家", description: "你看了整整一个下午",
        health: [0, 2, 35],
        expired: 5,
    },
    {
        id: 'MC0412007', name: "食人蚁搬家", description: "你没能看完这个下午",
        health: [-25, 0, 15],
        expired: 5,
    },
    {
        id: 'MC0612000', name: "小学语文", description: "",
        health: [0, -1, 10],
        expired: -1
    },
    {
        id: 'MC0612001', name: "体育课", description: "",
        health: [20, -1, -1],
        expired: 4,
    },
    {
        id: 'MC0612602', name: "小学数学", description: "",
        health: [0, -3, 20],
        expired: -1
    },
    {
        id: 'MC0406003', name: "小学英语", description: "",
        health: [0, 5, 8],
        expired: -1
    },
    {
        id: 'MC0612004', name: "自然课", description: "",
        health: [0, 10, 15],
        expired: -1
    },
    {
        id: 'MC0612005', name: "思想品德", description: "",
        health: [0, 0, 5],
        expired: -1,
    },
    {
        id: 'MC0612006', name: "马桶", description: "",
        health: [-20, 2, -2],
        expired: 10,
    },
    {
        id: 'MC0612007', name: "作文课", description: "",
        health: [0, -3, 20],
        expired: 8,
    },
    {
        id: 'MC0612008', name: "小学法语", description: "",
        health: [0, -2, 20],
        expired: 8,
    },
    {
        id: 'MC0612009', name: "小学图木舒克语", description: "",
        health: [0, 200, 100],
        expired: 1,
    },
    {
        id: 'MC0612010', name: "妖精语入门", description: "",
        health: [2, 8, 4],
        expired: 8,
    },
    {
        id: 'MC0612011', name: "大扫除", description: "",
        health: [4, -8, 4],
        expired: -1,
    },
    {
        id: 'MC0612012', name: "值日", description: "",
        health: [2, -5, -2],
        expired: -1,
    },
    {
        id: 'MC0612013', name: "教导主任", description: "",
        health: [-5, -5, -10],
        expired: -1,
    },
    {
        id: 'MCT012001', name: "期末考试", description: "",
        health: [-5, -20, -50],
        expired: -1,
    },
    {
        id: 'MCT012002', name: "小崽种杯作文比赛", description: "",
        health: [-5, -20, -50],
        expired: -1,
    },
    {
        id: 'MCT012003', name: "期中考试", description: "",
        health: [-5, -10, -20],
        expired: -1,
    },
    {
        id: 'MCT012003', name: "数学考试", description: "",
        health: [-5, -10, -40],
        expired: -1,
    },
    {
        id: 'MCT012004', name: "语文考试", description: "",
        health: [-5, -10, -10],
        expired: -1,
    },
    {
        id: 'MCT012005', name: "英语考试", description: "",
        health: [-5, -5, -10],
        expired: -1,
    },
    {
        id: 'MC0012011', name: "可怕的男老师", description: "",
        health: [-5, -5, -10],
        expired: -1,
    },
    {
        id: 'MC0012012', name: "可怕的女老师", description: "",
        health: [-5, -5, -10],
        expired: -1,
    },
    {
        id: 'MC0012013', name: "一般数学老师", description: "",
        health: [-3, -5, 10],
        expired: -1,
    },
    {
        id: 'MC0012014', name: "普通数学老师", description: "",
        health: [-5, -5, 10],
        expired: -1,
    },
    {
        id: 'MC0012015', name: "高级数学老师", description: "",
        health: [1, -5, 15],
        expired: -1,
    },
    
    {
        id: 'MC0012016', name: "精英数学老师", description: "",
        health: [5, -5, 20],
        expired: -1,
    },
    {
        id: 'MC0012017', name: "史诗数学老师", description: "",
        health: [5, -5, 32],
        expired: 8,
    },
]

export default monsters;