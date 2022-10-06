'use strict';

$(document).on('keypress',function (e) {
  if (e.which == 13) sendMessage();
});

function sendMessage () {
  const text = $('input').val();
  if ( !text ) return 0;
  const message = new Message('You', text);
  const html = `<div class="message sent">
                  <div class="author">${message.author}</div>
                  <div>${message.content}</div>
                  <div class="timestamp">${message.timestamp}</div>
                  <div class="ago">now</div>
                </div>`;
  $('.messages').append(html);
  $('.messages').animate({ scrollTop: $('.messages').prop('scrollHeight')}, 500);
  $('input').val('');
  receiveMessage();
}

async function receiveMessage () {
  const res = await $.ajax({url: 'https://cw-quotes.herokuapp.com/api/quotes/random'});
  const random = () => {return Math.floor(Math.random() * 8000)+2000; };
  await new Promise(r => setTimeout(r, random()));
  const message = new Message(res.result.author, res.result.text);  
  const html = `<div class="message received">
                  <div class="author">${message.author}</div>
                  <div>${message.content}</div>
                  <div class="timestamp">${message.timestamp}</div>
                  <div class="ago">now</div>
                </div>`;
  $('.messages').append(html);
  $('.messages').animate({ scrollTop: $('.messages').prop('scrollHeight')}, 500);
}

class Message {
  constructor (author, content) {
    this.author = author;
    this.content = content;
    this.timestamp = new Date().getTime();
  }
}

function getAgo (timeStamp) {
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

setInterval (function () {
  const elements = $('.message').get();
  elements.forEach( (e) => $(e).children('.ago').text(getAgo( Number($(e).children('.timestamp').text()) )));
}, 60000);
