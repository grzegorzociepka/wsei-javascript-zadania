class Tree {
    constructor(type) {
        this.type = type;
    }
}

Tree.prototype.bloom = () => console.log('I am blooming');

const first = new Tree('first');
const second = new Tree('second');
const third = new Tree('third');