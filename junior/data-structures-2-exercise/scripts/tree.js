'use strict';

class Tree {

  constructor (value) {
    this.value = value;
    this.children = [];    
  }

  addChild (node) {
    this.children.push(node);
    return true;
  }

  contains (value) {
    if (this.value === value) return true;
    for (let child of this.children) {
      if (child.contains(value)) return true;
    }
    return false;
  }
}

module.exports = Tree;
