import rewards from "./data/RewardList";
import Card from "./Card";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Reward extends cc.Component {

    @property
    damage: number[]

    @property
    expired:number

    @property
    reward: Object
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        let rad = Math.floor(Math.random() * rewards.length);
        this.reward = rewards[rad];
    }

    start () {
        let self = this.node;
        this.node.getComponent(Card).updateInfo({cardName: this.reward["name"]})
        cc.loader.loadRes("img/" + this.reward["name"], cc.SpriteFrame, function(err, sp){
            self.getChildByName("Img").getComponent(cc.Sprite).spriteFrame = sp;
            self.color = new cc.Color(255,207,64,255);
        })
    }

    init(){
        
    }

    disappear(){
        return [this.reward["health"], this.reward["buff"]];
    }

    update (dt) {
    }
}
