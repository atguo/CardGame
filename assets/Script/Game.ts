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
export default class Game extends cc.Component {

    @property(cc.Prefab)
    cardPrefab: cc.Prefab;

    @property(cc.Integer)
    width: number

    @property(cc.Integer)
    height: number

    @property(cc.Integer)
    cardWidth: number

    @property
    cardHeight: number

    @property(cc.Prefab)
    player: cc.Node
    // LIFE-CYCLE CALLBACKS:

    @property
    otherCardPool: cc.NodePool

    @property
    positions: cc.Vec2[]


    onLoad () {
        this.otherCardPool = this.otherCardPool = new cc.NodePool();
        let otherCardCount = 9;
        for(let i = 0; i < otherCardCount; i++){
            let otherCard = cc.instantiate(this.cardPrefab);
            this.otherCardPool.put(otherCard);
        }
        this.player = cc.instantiate(this.cardPrefab)
        
    }

    start () {
        this.positions = this.getPositons()
        let player_position = Math.floor(Math.random() * 100) % 9;
        
        for(let i=0;i<9;i++){
            console.log(this.positions[i]);
            let card:cc.Node = null;
            if(this.otherCardPool.size()>0){
                card = this.otherCardPool.get();
            } else {
                card = this.player
            }
            card.setPosition(this.positions[i]);

            let cardProperties:Object = {};
            cardProperties["index"] = i;
            cardProperties["width"] = this.cardWidth;
            cardProperties["height"] = this.cardHeight;
            if(i == player_position){
                cardProperties["name"] = "player"
                card.getComponent("Card").init(cardProperties);
                card.addComponent("Player");
            } else {
                cardProperties["name"] = "enemy" 
                card.getComponent("Card").init(cardProperties);
            }
            
            this.node.children[1].addChild(card);
        }
        
    }

    setCardWidth() {
        this.cardWidth = (this.width - (10 * 3)) / 3
    }

    setCardHight() {
        this.cardHeight = this.width * 3 / 2;
    }

    getPositons() {
        let positions:cc.Vec2[] = [];
        for(let i=0; i<9;i++){
            let row = Math.floor(i / 3);
            let col = i % 3;
            let x = (col * (this.width/3)) + 5;
            let y = (row * (this.height/3)) + 10;
            console.log(x,y);
            positions.push(new cc.Vec2(x, y));
        }
        return positions
    }

}
