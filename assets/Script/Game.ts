// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Prefab)
    cardPrefab: cc.Prefab;

    @property(cc.Integer)
    width: number

    @property(cc.Integer)
    height: number

    @property(cc.Prefab)
    player: cc.Node
    // LIFE-CYCLE CALLBACKS:

    @property
    otherCardPool: cc.NodePool

    @property
    position: [cc.Vec2]


    onLoad () {
        this.otherCardPool = new cc.NodePool();
        let otherCardCount = 9;
        for(let i = 0; i < otherCardCount; i++){
            let otherCard = cc.instantiate(this.cardPrefab);
            this.otherCardPool.put(otherCard);
        }
        this.player = cc.instantiate(this.cardPrefab)
        
    }

    start () {
        this.getPositons()
        for(let i=0;i<9;i++){
            
        }
        
    }

    getPositons() {
        for(let i=0; i<9;i++){
            let row = Math.floor(i / 3);
            let col = i % 3;
            let x = (col * (this.width/3)) + 5;
            let y = (row * (this.height/3)) + 10;
            console.log(x,y);
            this.position.push(new cc.Vec2(x, y));
        }
    }

}
