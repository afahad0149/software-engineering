
'use strict';

const allMethods = {

  addClass: function (className) {
    this.forEach( (element) => element.classList.add(className) );
    return this;
  },

  removeClass: function (className) {
    this.forEach((element) => element.classList.remove(className));
    return this;
  },

  toggleClass: function (className) {
    this.forEach((element) => {
      if (element.classList.contains(className)) { 
        element.classList.remove(className); 
      }
      else {
        element.classList.add(className); 
      }
    });
    return this;
  },

  hide: function () {
    this.forEach((element) => { 
      element.style.prevDisplay = getComputedStyle(element).display;
      element.style.display = 'none';
    });
    return this;
  },

  show: function () {
    this.forEach((element) => {
      if (getComputedStyle(element).display === 'none') {
        element.style.display = element.style.prevDisplay || 'inline';
      }
    });
    return this;
  },

  toggle: function () {
    this.forEach((element) => {
      if (getComputedStyle(element).display === 'none') {
        allMethods.show.call(this, element);
      } else {
        allMethods.hide.call(this, element);
      }
    });
    return this;
  },

  click: function (handler) {
    this.forEach((element) => {    
      element.addEventListener('click', handler);
    });
    return this;
  },

  append: function (content) {
    this.forEach((element) => {
      element.insertAdjacentHTML('beforeend', content);
    });
    return this;
  },

  text: function (content) {
    this.forEach((element) => {
      if ( !(/<\/?[a-z][\s\S]*>/i.test(content)) ) {
        element.innerHTML = content;
      }
    });
    return this;
  },

  data: function (key, value) {
    this.forEach((element) => {
      if ( value ) {
        element.dataaa[key] = value;
        return value;
      } else if ( key ) {
        return element.dataaa[key];
      } else {
        return element.dataaa;
      }
    });
    return this;
  }

};


function J$ (selector) {

  const allElements = document.querySelectorAll(selector);

  return Object.assign(allElements, allMethods);

}

J$.ready = function (handler) {
  document.addEventListener('DOMContentLoaded', handler);
  console.log('DOM loaded successfully');
};

// Allow tests to run on the server (leave at the bottom)
if (typeof window === 'undefined') {
  module.exports = J$;
}
