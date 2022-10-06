'use strict';

// Give me time (45 mins)

// Write a function that takes a JS timestamp (number), and returns
// a string representing the time interval in a user-friendly way,
// "flooring" the value to the nearest most significant unit (now,
// mins, weeks, months, and years). For example:
//
// giveMeTime(new Date(Date.now() - 28e1).getTime());
// -> 'now'
// giveMeTime(new Date(Date.now() - 45e3).getTime());
// -> 'now'
// giveMeTime(new Date(Date.now() - 65e3).getTime());
// -> '1 min ago'
// giveMeTime(new Date(Date.now() - 4.4e8).getTime());
// -> '5 days ago'

function giveMeTime (timeStamp) {

  const date = new Date(Date.now());
  const now = date.getTime();
  const time = now - timeStamp;

  if ( time < 6e4 ) { // < 1 min
    return 'now';
  } else if ( time < 6e5 ) { // < 1 hour
    const mins = Math.floor(time/6e4);
    return mins > 1 ? `${mins} mins ago` : `${mins} min ago`;
  } else if ( time < 8.64e7 ) { // < 1 day
    const hours = Math.floor(time/6e4);
    return hours > 1 ? `${hours} hours ago` : `${hours} hour ago`;
  } else if ( time < 6.048e8 ) { // < 1 week
    const days = Math.floor(time/(8.64e7));
    return days > 1 ? `${days} days ago` : `${days} day ago`;
  } else if ( time < 2.628e9 ) { // < 1 month
    const weeks = Math.floor(time/(6.048e8));
    return weeks > 1 ? `${weeks} weeks ago` : `${weeks} week ago`;
  } else if ( time < 3.154e10 ) { // < 1 year
    const months = Math.floor(time/(2.628e9));
    return months > 1 ? `${months} months ago` : `${months} month ago`;
  } else { 
    const years = Math.floor(time/(3.154e10));
    return years > 1 ? `${years} years ago` : `${years} year ago`;
  }
}

module.exports = giveMeTime;
