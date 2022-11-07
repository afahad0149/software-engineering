var _ = require('lodash');

var methods = {
  instatags: {
    evalHashtagFrequency: function (data) {
      var tags = {};

      data.forEach(function (media) {
        media.tags.forEach(function (tag) {
          if (tags[tag]) tags[tag]++;
          else tags[tag] = 1;
        });
      });

      // Here we transform the tags object into an array, so we'll be able to sort it.
      var sortable = [];
      for (var tag in tags) {
        sortable.push({
          tag: tag,
          freq: tags[tag],
        });
      }

      // Finally we have to sort the array in descending order (higher frequencies first),
      // and return it. Check the "Array.prototype.sort()" docs.
      return sortable.sort(function (a, b) {
        return b.freq - a.freq;
      });
    },

    filterTags: function (tags, minFrequency) {
      var filtered = [];
      tags.forEach(function (tag) {
        if (tag.freq >= minFrequency) filtered.push(tag);
      });
      return filtered;
    },

    filterMedia: function (userMedia, tag) {
      var filtered = [];
      userMedia.forEach(function (media) {
        if (media.tags.includes(tag)) filtered.push(media);
      });
      return filtered;
    },
  },

  underline: {
    max: function (list, iteratee, context) {
      var max = {};

      if (iteratee) {
        _.each(list, function (el, key, coll) {
          var rank = iteratee.call(context, el, key, coll);
          if (
            typeof rank === 'number' &&
            (max.rank === undefined || rank > max.rank)
          ) {
            max.el = el;
            max.rank = rank;
          }
        });
      } else {
        _.each(list, function (el) {
          if (typeof el === 'number' && (max.el === undefined || el > max.el))
            max.el = el;
        });
      }

      return max.el === undefined ? -Infinity : max.el;
    },

    min: function (list, iteratee, context) {
      var min = {};

      if (iteratee) {
        _.each(list, function (el, key, coll) {
          var rank = iteratee.call(context, el, key, coll);
          if (
            typeof rank === 'number' &&
            (min.rank === undefined || rank < min.rank)
          ) {
            min.el = el;
            min.rank = rank;
          }
        });
      } else {
        _.each(list, function (el) {
          if (typeof el === 'number' && (min.el === undefined || el < min.el))
            min.el = el;
        });
      }

      return min.el === undefined ? Infinity : min.el;
    },

    size: function (list) {
      if (typeof list === 'string' || Array.isArray(list)) return list.length;
      if (typeof list === 'object' && list !== null)
        return Object.keys(list).length;
      return 0;
    },
  },
};

module.exports = methods;
