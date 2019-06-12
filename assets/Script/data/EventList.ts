const events = [
    {
        id: 'EC001',
        name: '疯狗',
        description: '回家的小巷子里遇到一条挣脱了绳子的疯狗',
        option: [
            {
                buttonname: '逃窜',
                name: '仓皇逃窜',
                description: '君子报仇,十年不晚;三十六计,跑为上计',
                health: [0, -10, 10]
            },
            {
                buttonname: '狗斗',
                name: '狂犬病',
                description: '所以接下来的每周你都要去市中心的医院打狂犬疫苗了boy',
                health: [-20, -40, -30]
            }
        ]
    }
]

export default events;