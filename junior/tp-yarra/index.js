
// Yarra (30 mins)

// Implement a "yarra()" method for arrays,
// that reverses any array in place and returns it.
// Obviously you can't use the native "reverse()" method.

Array.prototype.yarra = function () { 
  const len = this.length;
  for ( let i = 0; i < len/2; i++ ) {
    const t = this[len-i-1];
    this[len-i-1] = this[i];
    this[i] = t;      
  }
  return this;
};
