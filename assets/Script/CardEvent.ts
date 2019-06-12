import Card from "./Card"
import events from "./data/EventList";
import EventTriger from './EvnetTriger';

const {ccclass, property} = cc._decorator;

@ccclass
export default class CardEvent extends cc.Component {

    @property
    description:string

    @property
    damage: number[]
    // LIFE-CYCLE CALLBACKS:

    @property
    dialog: cc.Node

    @property
    event: Object


    onLoad () {
        this.event = events[0];
    }

    start () {
        let self = this;
        this.node.getComponent(Card).updateInfo({cardName: "Event"})
        let resPath = "img/疯狗";
        cc.loader.loadRes(resPath, cc.SpriteFrame, function(err, sp){
            self.node.getChildByName("Img").getComponent(cc.Sprite).spriteFrame = sp;
            self.node.color = new cc.Color(166,202,202,255);
            self.node.getChildByName("Img").color = new cc.Color(166,202,202,255);

        })

        cc.loader.loadRes("Event", cc.Prefab, function(err, fb){
            self.dialog = cc.instantiate(fb);
        })

    }

    init(){
    
    }

    disappear(){
        this.node.parent.parent.getChildByName("Event").getComponent(EventTriger).setEvent(this.event);
        return [0,0,0];
    }
    // update (dt) {}
}
