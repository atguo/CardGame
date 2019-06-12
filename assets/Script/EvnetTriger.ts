import events from './data/EventList';
import Controller from "./Controller";

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property
    description :string;

    @property
    leftHealth :number[];

    @property
    rightHealth :number[];

    @property
    leftbuttonname :string;

    @property
    rightbuttonname :string;

    @property
    leftdescription :string;

    @property
    rightdescription :string;

    @property
    event: Object

    onLoad () {
        let event = events[0];
        this.description = event["description"];

        this.leftHealth = event["option"][0]["health"];
        this.leftbuttonname = event["option"][0]["buttonname"];
        this.leftdescription = event["option"][0]["description"];

        this.rightHealth = event["option"][1]["health"];
        this.rightbuttonname = event["option"][1]["buttonname"];
        this.rightdescription = event["option"][1]["description"];

    }

    start () {
        this.node.getChildByName("Description").getComponent(cc.RichText).string = this.description;
        this.node.getChildByName("LeftButton").getChildByName("Background").
                    getChildByName("Label").getComponent(cc.Label).string = this.leftbuttonname;
        this.node.getChildByName("RightButton").getChildByName("Background").
                    getChildByName("Label").getComponent(cc.Label).string = this.rightbuttonname;
        this.node.getChildByName("LeftButton").getComponent(cc.Button).node.on("click", this.leftClick, this);
        this.node.getChildByName("RightButton").getComponent(cc.Button).node.on("click", this.rightClick, this)
    }

    leftClick(event){
        this.node.parent.getChildByName("MoveResult").getChildByName("Info").getComponent(cc.RichText).string = this.leftdescription;
        this.node.parent.getChildByName("Background").getComponent(Controller).setPlayerStatus(this.leftHealth);
        this.node.opacity = 0;
    }

    rightClick(event){
        this.node.parent.getChildByName("MoveResult").getChildByName("Info").getComponent(cc.RichText).string = this.rightdescription;
        this.node.parent.getChildByName("Background").getComponent(Controller).setPlayerStatus(this.leftHealth);
        this.node.opacity = 0;
    }

    setEvent(event:Object){
        this.event = event;
    }

    update (dt) {
        if(this.event){
            this.description = this.event["description"];

            this.leftHealth = this.event["option"][0]["health"];
            this.leftbuttonname = this.event["option"][0]["buttonname"];
            this.leftdescription = this.event["option"][0]["description"];
    
            this.rightHealth = this.event["option"][1]["health"];
            this.rightbuttonname = this.event["option"][1]["buttonname"];
            this.rightdescription = this.event["option"][1]["description"];
        }
       
    }   
}
