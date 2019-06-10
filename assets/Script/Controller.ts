import cardTypes from "./cardType";
import Empty from "./Empty";
import Monster from "./Monster";
import Event from "./Event";
import Reward from "./Reward";
import Treasure from "./Treasure";
import Player from "./Player";
import Card from "./Card";
const {ccclass, property} = cc._decorator;

@ccclass
export default class Controller extends cc.Component {

    @property
    cardType: string[]

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
        this.otherCardPool = this.otherCardPool = new cc.NodePool("Card");
        let otherCardCount = 9;
        for(let i = 0; i < otherCardCount; i++){
            let otherCard = cc.instantiate(this.cardPrefab);
            this.otherCardPool.put(otherCard);
        };
        this.cardType = [];
        for(let i=0; i < cardTypes.length; i++){
            this.cardType.push(cardTypes[i]);
        }

    }


    start () {
        this.width = this.node.width
        this.height = this.node.height
        this.setCardSize()
        this.positions = this.getPositons()
        this.init()
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
        this.initPlayer();

        for(let i=0;i<9;i++){
            if(i+1 !== this.player_index){
                let card: cc.Node = null;
                if(this.otherCardPool.size()> 0){
                    card = this.otherCardPool.get();
                } else {
                    card = cc.instantiate(this.cardPrefab);
                }
                this.initCard(card, i+1);
                this.node.addChild(card);
            }
           
        }
        console.log(this.node.children)
    }


    initPlayer(){
        let player: cc.Node = null;
        player = cc.instantiate(this.cardPrefab);
        player.addComponent("Card");
        let playerProperties = this.initCardProperties(this.player_index, this.positions[this.player_index-1]);
        player.addComponent("Player");
        player.getComponent("Card").init("luoop", "Player", playerProperties);
        this.node.addChild(player);
    }


    initCard(card:cc.Node, index:number){
        if(card.getComponent("Card")){
            let info = {};
            info["index"] = index;
            info["position"] = this.positions[index-1];
            
            //change card type
            let preCardType = card.getComponent("Card").getType();
            card.removeComponent(preCardType);
            let curr_type = this.setCardType();
            info["cardName"] = curr_type;
            info["type"] = curr_type;
            card.getComponent("Card").updateInfo(info)
            card.addComponent(curr_type)
            card.getComponent(curr_type).init();
            return
        }

        card.addComponent("Card");
        let type = this.setCardType();
        card.getComponent("Card").init(type, type, this.initCardProperties(index, this.positions[index-1]));
        card.addComponent(type)
        card.getComponent(type).init();
    }

    onKeyDown(event) {
        // console.log("player index is : " + this.player_index)
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
            this.move(this.player_index, this.target_position);
            this.canMove = false;
        }
        
    }

    //return a random card type
    setCardType(){
        let r = Math.floor((Math.random() * this.cardType.length));
        return this.cardType[r];
    }

    move(from, to){
        let target_node = this.node.getChildByName(""+to);

        let target_type:string = target_node.getComponent("Card").getType()
        let damage:number[] = target_node.getComponent(target_type).disappear();
        this.node.getChildByName("" + from).getComponent("Player").receiveDamage(damage);

        target_node.runAction(cc.scaleTo(0.3,0,0));
        
        setTimeout(()=>{
            this.otherCardPool.put(this.node.getChildByName(""+to));
            this.node.getChildByName(""+from).runAction(cc.moveTo(0.2,this.positions[to-1]))
            this.node.getChildByName(""+from).getComponent("Card").updateInfo({"index":to})

           
            setTimeout(()=>{
                this.player_index = to;
                let card:cc.Node = null;
                if(this.otherCardPool.size()>0){
                    console.log("card pool is not empty")
                    card = this.otherCardPool.get();
                } else {
                    console.log("card pool is empty")
                    card = cc.instantiate(this.cardPrefab)
                }
                this.initCard(card, from);
                this.node.addChild(card);
                this.canMove = false
            }, 300)
            
            
        },500)
        
    }


    setCardSize() {
        this.cardWidth = (this.width - (10 * 3)) / 3;
        this.cardHeight = this.cardWidth * 3 / 2;
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
        let base_height = this.height - (this.cardHeight * 3) - (10 * 3)
        for(let i=0; i<9;i++){
            let row = Math.floor(i / 3);
            let col = i % 3;
            let x = (col * (this.width/3)) + 5 + this.cardWidth / 2;
            let y = base_height / 2 + (row * this.cardHeight) + row * 10 + this.cardHeight / 2;
            positions.push(new cc.Vec2(x, y));
        }
        console.log(positions);
        return positions
    }

}
