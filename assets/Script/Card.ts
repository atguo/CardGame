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

    @property
    number:number

    @property
    cardName: string = 'nmsl';

    @property
    position: cc.Vec2 = null;

    @property
    width: number

    @property
    height: number

    // LIFE-CYCLE CALLBACKS:

    onLoad () {

        let label = this.node.children[0].getComponent(cc.Label);
        label.string = this.cardName;
    }

    start () {

    }

    // update (dt) {}
}
