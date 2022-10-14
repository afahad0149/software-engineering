class Message {
  constructor (authorId, content) {
    this.authorId = authorId;
    this.content = content;
    this.timestamp = Date.now();
  }
}

function createMessage (message, sent) {
  const msg = new Message(sent, message);
  const div = $('<div class="text-box"></div>');
  div.append(`<div class="message-${msg.authorId ? 'sent' : 'received'}">${msg.content}</div>`);
  return div;
}

$('form').on('submit', (ev) => {
  ev.preventDefault();
  if ($('input').val() === '') return;
  $('.chat-container').append(createMessage($('input').val(), true));
  const chatContainer = document.querySelector('.chat-container');
  chatContainer.scrollTop = chatContainer.scrollHeight;
  $('input').val('');

  setTimeout(() => {
    $.ajax({
      method: 'GET',
      url: 'https://cw-quotes.herokuapp.com/api/quotes/random',
    })
      .done(function (response) {
        $('.chat-container').append(createMessage(`"${response.result.text}" (${response.result.author})`, false));
      });
  }, randomInt(1000, 5000));
});

function randomInt (min, max) {
  return Math.floor(Math.random() * max + min);
}