

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property
    desc:string

    // LIFE-CYCLE CALLBACKS:

    onLoad () {}

    start () {

    }

    update (dt) {
    }
}
