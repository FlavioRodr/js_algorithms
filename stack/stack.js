export default class Stack {
    constructor() {
        this._count = 0;
        this._items = {};
    }

    /**
     * @param {Object} item 
     */
    push(item) {
        this._count++;
        this._items[this._count] = item;
    }

    pop() {
        if (this.isEmpty()) {
            return undefined;
        }
        let item = this._items[this._count];
        delete this._items[this._count];
        this._count--; 
        return item;
    }

    /**
     * @returns {boolean}
     */
    isEmpty() {
        return this._count === 0 ? true : false;
    }

    /**
     * @return {Object}
     */
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this._items[this._count];
    }
}