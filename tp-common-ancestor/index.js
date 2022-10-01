// Common ancestor (60 mins)

// Write a function that takes two nodes of a tree and returns the
// closest common ancestor, or returns null if there isn't any.
// It should also handle edge cases, for example when either of the
// nodes is the tree itself, or both nodes are the same. For example:
//
// let grandma = new Tree('grandma');
// let mom = new Tree('mom');
// let ant = new Tree('ant');
// grandma.addChild(mom);
// grandma.addChild(ant);
// grandma.commonAncestor(mom, ant) -> grandma

function Tree (value) {
  this.children = [];
  this.value = value;
}

Tree.prototype.addChild = function (node) {
  if (!this.hasDescendant(node)) this.children.push(node);
  else throw new Error(`The node "${node.value}" already exists in this tree`);
  return this;
};

Tree.prototype.hasDescendant = function (node) {
  if (this.children.indexOf(node) !== -1) return true;
  // "node" is an immediate child of this tree
  else {
    for (let i = 0; i < this.children.length; i++) {
      if (this.children[i].hasDescendant(node)) return true; // "node" is descendant of this tree
    }
    return false;
  }
};

Tree.prototype.commonAncestor = function (node1, node2) {
  if ( this.hasDescendant(node1) && this.hasDescendant(node2) ) {
    for (const child of this.children) {
      if ( child.commonAncestor(node1, node2) )
        return child.commonAncestor(node1, node2);
    }
    return this;
  }
  return null;
};


module.exports = Tree;
