import monsters from './data/MonsterList';
import Card from './Card'

const {ccclass, property} = cc._decorator;

@ccclass
export default class Monster extends cc.Component {

    @property
    damage: number[]

    @property
    expired:number; //存活时间，-1表示永久存活

    @property
    monster: Object;

    @property
    dialog: cc.Node;


    onLoad () {

        let self = this
        let rad = Math.floor(Math.random() * monsters.length);
        this.monster = monsters[rad];
        cc.loader.loadRes("MoveResult", cc.Prefab, function(err, fb){
            self.dialog = cc.instantiate(fb);
        })
    }

    start () {
        let self = this.node;
        this.node.getComponent(Card).updateInfo({cardName: this.monster["name"]})

        
        let resPath = "img/" + this.monster["name"];
        cc.loader.loadRes(resPath, cc.SpriteFrame, function(err, sp){
            self.getChildByName("Img").getComponent(cc.Sprite).spriteFrame = sp;
            self.color = new cc.Color(252,210,182,255);
            self.getChildByName("hp").color = new cc.Color(55,46,41,255);
            self.getChildByName("cardName").color = new cc.Color(55,46,41,255)
            self.getChildByName("Img").color = new cc.Color(252,210,182,0)
        })
    }

    init(){
       
    }


    disappear(){
        this.node.parent.parent.getChildByName("MoveResult").getChildByName("Info").getComponent(cc.RichText).string = this.monster["description"];
        console.log(this.monster["description"])
        return this.monster["health"]
    }

    update (dt) {
        if(this.monster && this.monster["health"]){
            this.node.getChildByName("hp").getComponent(cc.Label).string = this.monster["health"].join("/");
        }
    }
}
