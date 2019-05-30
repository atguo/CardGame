import Card from "./Card";

// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class Player extends Card {

    @property
    playerHp:[number] 

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {

    }

    onKeyDown(event) {
        switch (event.KeyCode) {
            case cc.macro.KEY.up:
            case cc.macro.KEY.w:
                this.moveUp();
                break;
            case cc.macro.KEY.down:
            case cc.macro.KEY.s:
                this.moveDown();
                break;
            case cc.macro.KEY.left:
            case cc.macro.KEY.a:
                this.moveLeft();
                break;
            case cc.macro.KEY.right:
            case cc.macro.KEY.d:
                this.moveRight();
                break;
        }
    }

    moveUp() {
        if(this.index < 7){
            this.index += 3;
        }
    }

    moveDown() {
        if(this.index > 3){
            this.index -= 3;
        }
    }

    moveLeft() {
        if(((this.index - 1) % 3) !== 0){
            this.index -= 1;
        }
    }

    moveRight() { 
        if(((this.index + 1) % 3 ) !== 1 ){
            this.index += 1;
        }
    }
    // update (dt) {}
}
