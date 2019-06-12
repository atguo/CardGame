import Card from "./Card"

const {ccclass, property} = cc._decorator;

@ccclass
export default class Empty extends cc.Component {

    @property
    desc:string
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.desc = "运气不太好什么都没有"
    }

    

    start () {
        let self = this.node;
        this.node.getComponent(Card).updateInfo({cardName: "宝箱"})
        cc.loader.loadRes("img/" + "箱子", cc.SpriteFrame, function(err, sp){
            self.getChildByName("Img").getComponent(cc.Sprite).spriteFrame = sp;
            self.color = new cc.Color(59,214,198,255);
        })
    }

    init(){
    }

    disappear(){
        return [0, 0, 0]
    }
    // update (dt) {}
}
