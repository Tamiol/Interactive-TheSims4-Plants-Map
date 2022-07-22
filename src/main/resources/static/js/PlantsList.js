class Plant {
    static count = 1;

    constructor(name, color) {
        this.name = name;
        this.color = color;
        this.num = Plant.count++;
        this.isSelected = false;
    }
}

const APPLE = new Plant('apple', 'ffffff');
const BASIL = new Plant('basil', 'ffffff');
const BLUEBELL = new Plant('bluebell', 'ffffff');
const CARROT = new Plant('carrot', 'ffffff');
const CHERRY = new Plant('cherry', 'ffffff');
const CHRYSANTHEMUM = new Plant('chrysanthemum', 'ffffff');
const LEMON = new Plant('lemon', 'ffffff');
const LILY = new Plant('lily', 'ffffff');
const MUSHROOM = new Plant('mushroom', 'ffffff');
const ONION = new Plant('onion', 'ffffff');
const PARSLEY = new Plant('parsley', 'ffffff');
const PEAR = new Plant('pear', 'ffffff');
const PLANTAIN = new Plant('plantain', 'ffffff');
const POTATO = new Plant('potato', 'ffffff');
const ROSE = new Plant('rose', 'ffffff');
const SAGE = new Plant('sage', 'ffffff');
const SNAPDRAGON = new Plant('snapdragon', 'ffffff');
const SPINACH = new Plant('spinach', 'ffffff');
const STRAWBERRY = new Plant('strawberry', 'ffffff');
const TOMATO = new Plant('tomato', 'ffffff');
const TULIP = new Plant('tulip', 'ffffff');

class PlantsList{

    static get APPLE(){
        return APPLE;
    }
    static get BASIL(){
        return BASIL;
    }
    static get BLUEBELL(){
        return BLUEBELL;
    }
    static get CARROT(){
        return CARROT;
    }
    static get CHERRY(){
        return CHERRY;
    }
    static get CHRYSANTHEMUM(){
        return CHRYSANTHEMUM;
    }
    static get LEMON(){
        return LEMON;
    }
    static get LILY(){
        return LILY;
    }
    static get MUSHROOM(){
        return MUSHROOM;
    }
    static get ONION(){
        return ONION;
    }
    static get PARSLEY(){
        return PARSLEY;
    }
    static get PEAR(){
        return PEAR;
    }
    static get PLANTAIN(){
        return PLANTAIN;
    }
    static get POTATO(){
        return POTATO;
    }
    static get ROSE(){
        return ROSE;
    }
    static get SAGE(){
        return SAGE;
    }
    static get SNAPDRAGON(){
        return SNAPDRAGON;
    }
    static get SPINACH(){
        return SPINACH;
    }
    static get STRAWBERRY(){
        return STRAWBERRY;
    }
    static get TOMATO(){
        return TOMATO;
    }
    static get TULIP(){
        return TULIP;
    }
}

