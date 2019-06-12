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
export default class Death extends cc.Component {


    @property
    again: cc.Button
    // LIFE-CYCLE CALLBACKS:

    onLoad () {}

    start () {
        this.again = this.node.getChildByName("again").getComponent(cc.Button);
        this.again.node.on("click", this.againClick, this);
    }

    againClick(){
        cc.director.loadScene("game");
    }

    // update (dt) {}
}
