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
export default class Player extends cc.Component {

    // @param {Array} health: [<健康>,<精力>,<理智>]
    @property
    status;


    @property
    shouleUpdate: boolean = true;


    onLoad () {
        this.status = [100, 100, 100];
    }

    start() {
        let self = this.node;
        self.color = new cc.Color(186,225,255,255);
        self.getComponent(Card).updateInfo({cardName: "小明"});
        cc.loader.loadRes("img/小明", cc.SpriteFrame, function(err, sp){
            self.getChildByName("Img").getComponent(cc.Sprite).spriteFrame = sp;
            self.color = new cc.Color(223,227,238,255);
        })
        
    }

    updatePlayerStatus(){
        this.node.getChildByName("hp").getComponent(cc.Label).string = this.status.join("/")
    }

    init(){
        
    }
    receiveDamage(damage:number[]){
        // console.log(damage);
        if(damage.length === 3){
            this.status = this.status.map((item, index)=>{
                return item = item + damage[index];
            })
        } else if(damage.length === 2){
            this.status = this.status.map((item, index)=>{
                return item = item + damage[0][index];
            })
        }
        
        // console.log(this.status);
        this.shouleUpdate = true;
    }

    update (dt) {
        for(let i=0; i < this.status.length; i++){
            if(this.status[i] < 1){
                this.exitGame();
            }
        }
        if(this.shouleUpdate){
            // update ui
            this.updatePlayerStatus()
            this.shouleUpdate = false;
        }
    }

    exitGame(){
        cc.director.loadScene("death");
    }
}
