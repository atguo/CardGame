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

    //use for ui
    @property
    cardName: string;

    @property
    type: string

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

    init (cardName:string, type:string, properties:Object) {
        this.cardName = cardName;
        this.type = type;
        this.index = properties["index"];
        this.node.name = "" + this.index;
        this.node.width = properties["width"];
        this.node.height = properties["height"];
        this.position = properties["position"];
        this.node.setPosition(this.position);
    }

    updateCardInfo(){
        this.node.children[0].getComponent(cc.Label).string = this.cardName
        this.node.name = "" + this.index;
    }

    updateInfo(info){
        this.index = info.index;
        if(info.position){
            this.position = info.position;
            this.node.setPosition(this.position);
        }
        if(info.tpye){
            this.type = info.type
        }
        if(info.cardName){
            this.cardName = info.cardName
        }
    }

    getType(){
        return this.type;
    }

    update (dt) {
        this.updateCardInfo()
    }
    
    unuse(){
        console.log("unuse excuted:",this.node)
    }

    reuse(){
        this.node.runAction(cc.scaleTo(0.1,1,1));
        console.log('reuse excuted')
    }
}
