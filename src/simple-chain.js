const chainMaker = {
  a: [],
  getLength() {
    return this.a.length;
  },
  addLink(value) {
    if (value === undefined) value = '';
    this.a.push('( ' + value + ' )');
    return this;
  },
  removeLink(position) {
    if ( typeof position === "number" && position > 0 && position <= this.a.length ) {
      this.a.splice(position - 1, 1);
    } else {
      this.a = [];
      throw Error();   
    }
    return this;
  },
  reverseChain() {
    this.a.reverse();
    return this;
  },
  finishChain() {
    var q = this.a;
    this.a = [];
    return q.join("~~");
  }
};

module.exports = chainMaker;  