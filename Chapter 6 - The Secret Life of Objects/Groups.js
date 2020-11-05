class Group {
    constructor() {
        this.group = [];
    }

    add(value) {
        if (!this.has(value))
            this.group.push(value);
    }

    delete(value) {
        if (this.has(value)) {
            let pos = this.group.indexOf(value);
            this.group.splice(pos, 1);
        }

    }

    has(value) {
        return this.group.includes(value);
    }

    static from(collection) {
        let group = new Group;
        for (let value of collection) {
            group.add(value);
        }
        return group;
    }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));