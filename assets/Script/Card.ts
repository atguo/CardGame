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
export default class Card extends cc.Component {

    @property
    index:number

    @property
    resourceID:string

    @property
    cardImage:cc.SpriteFrame

    @property
    cardExist:Boolean

    @property
    cardName: string;

    @property
    position: cc.Vec2 = null;

    @property
    width: number

    @property
    height: number

    // LIFE-CYCLE CALLBACKS:

    onLoad () {

    }

    start () {

    }

    init (cardName:string, properties:Object) {
        this.cardName = cardName;
        this.index = properties["index"];
        this.node.name = "" + this.index;
        this.node.width = properties["width"];
        this.node.height = properties["height"];
        this.position = properties["position"];

    }

    updateCardInfo(){
        this.node.children[0].getComponent(cc.Label).string = this.cardName
        this.node.setPosition(this.position)    
    }

    moveTo(to:number, to_position:cc.Vec2){
        this.index = to;
        this.position = to_position
        this.node.name = "" + this.index;
    }

    update (dt) {
        this.updateCardInfo()
    }
}
