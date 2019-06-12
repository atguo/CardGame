import Card from './Card'
import treasures from './data/TreasureList';

const {ccclass, property} = cc._decorator;

@ccclass
export default class Treasure extends cc.Component {

    
    @property
    damage: number[]
    // LIFE-CYCLE CALLBACKS:

    @property
    treasure: Object;

    

    onLoad () {
        let rad = Math.floor(Math.random() * treasures.length);
        this.treasure = treasures[rad];
    }

    start () {
        let self = this.node;
        self.getComponent(Card).updateInfo({cardName: this.treasure["name"]})
        cc.loader.loadRes("img/" + this.treasure["name"], cc.SpriteFrame, function(err, sp){
            self.getChildByName("Img").getComponent(cc.Sprite).spriteFrame = sp;
            self.color = new cc.Color(255,207,64,255);
        })

    }

    init(){
        
    }

    disappear(){
        return [0, 0, 0]
    }
    // update (dt) {}
}
