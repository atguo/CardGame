import Player from "./Player";

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
export default class Controller extends cc.Component {

    @property
    canMove: boolean = false

    @property
    width: number

    @property
    height: number

    @property(cc.Integer)
    cardWidth: number

    @property
    cardHeight: number

    @property
    player_index: number
    // LIFE-CYCLE CALLBACKS:

    @property
    otherCardPool: cc.NodePool

    @property
    positions: cc.Vec2[]

    @property(cc.Prefab)
    cardPrefab: cc.Prefab;

    @property
    target_position: number 

    
    onLoad () {
        cc.systemEvent.on(
            cc.SystemEvent.EventType.KEY_DOWN,
            this.onKeyDown,
            this,
        );
        this.otherCardPool = this.otherCardPool = new cc.NodePool();
        let otherCardCount = 9;
        for(let i = 0; i < otherCardCount; i++){
            let otherCard = cc.instantiate(this.cardPrefab);
            this.otherCardPool.put(otherCard);
        }
           
    }


    start () {
        this.width = this.node.width
        this.height = this.node.height
        this.positions = this.getPositons()
        this.init()
        console.log(this.cardWidth,this.cardHeight)
    }

    update (dt) {

    }

    initCardProperties(index:number, position:cc.Vec2){
        let properties = {};
        properties["index"] = index;
        properties["position"] = position;
        properties["width"] = this.cardWidth;
        properties["height"] = this.cardHeight;
        return properties;
    }

    init(){
        let player_index = Math.floor(Math.random() * 100) % 9;
        this.player_index = player_index + 1;
        this.setCardSize()
        for(let i=0;i<9;i++){
            let card:cc.Node = null;
            if(this.otherCardPool.size()>0){
                card = this.otherCardPool.get();
            } else {
                card = cc.instantiate(this.cardPrefab);
            }

            let properties = this.initCardProperties(i+1, this.positions[i])
            let cardName:string = "";
            if((i + 1) === this.player_index){
                cardName = "player";
                card.addComponent("Player")
            } else {
                cardName = "enemy" 
            }

            card.getComponent("Card").init(cardName, properties);
            this.node.addChild(card);
        }
    }

    onKeyDown(event) {
        console.log("player index is : " + this.player_index)
        switch (event.keyCode) {
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

        //now target position is player position but canvas not change 
        
        if(this.canMove){
            this.move(this.player_index, this.target_position)
        }
        
    }

    move(from, to){
        this.otherCardPool.put(this.node.getChildByName(""+to));
        this.node.getChildByName(""+from).getComponent("Card").moveTo(to,this.positions[to-1]);
        this.player_index = to;

        let card:cc.Node = null;
        if(this.otherCardPool.size()>0){
            card = this.otherCardPool.get();
        } else {
            card = cc.instantiate(this.cardPrefab);
        }
        let properties = this.initCardProperties(from, this.positions[from-1])
        let cardName:string = "enemy";
        card.getComponent("Card").init(cardName, properties);
        this.node.addChild(card);
        console.log(this.node.children)
        this.canMove = false

    }

    setCardSize() {
        this.cardWidth = (this.width - (10 * 3)) / 3;
        // this.cardHeight = this.cardWidth * 16 / 9;
        this.cardHeight = (this.height - (10 * 3)) / 3
    }

    moveUp() {
        if(this.player_index < 7){
            this.target_position = this.player_index + 3;
            this.canMove = true
        }
    }

    moveDown() {
        if(this.player_index > 3){
            this.target_position = this.player_index - 3;
            this.canMove = true
        }
    }

    moveLeft() {
        if(((this.player_index - 1) % 3) !== 0){
            this.target_position = this.player_index - 1;
            this.canMove = true
        }
    }

    moveRight() { 
        if(((this.player_index + 1) % 3 ) !== 1 ){
            this.target_position = this.player_index + 1;
            this.canMove = true
        }
    }

    onDestroy(){
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    }

    getPositons() {
        let positions:cc.Vec2[] = [];
        for(let i=0; i<9;i++){
            let row = Math.floor(i / 3);
            let col = i % 3;
            let x = (col * (this.width/3)) + 5;
            let y = (row * (this.height/3)) + 10;
            positions.push(new cc.Vec2(x, y));
        }
        return positions
    }

}
