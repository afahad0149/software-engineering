
$(() => {

  function Dancer ( top, left ) {
    this.top = top;
    this.left = left;
    this.$node = $('<div class="dancer"></div>');
    this.setPosition(top, left);
  }

  Dancer.prototype.setPosition = function (top, left) {
    this.$node.css({top, left});
  };

  Dancer.prototype.tapDancer = function () {
    return this.$node.addClass('blink');
  };

  Dancer.prototype.rainbowDancer = function () {
    return this.$node.addClass('rainbow');
  };

  function randomStagePosition () {
    return String(Math.random() * 100 | 0)+'%';
  }

  $('#regular').click( function () {
    const top  = randomStagePosition();
    const left = randomStagePosition();
    const dancer = new Dancer( top, left );
    $('#stage').append( dancer.$node );
  });

  $('#tapper').click( function () {
    const top  = randomStagePosition();
    const left = randomStagePosition();
    const dancer = new Dancer( top, left );
    $('#stage').append( dancer.tapDancer() );
  });

  $('#rainbow').click( function () {
    const top  = randomStagePosition();
    const left = randomStagePosition();
    const dancer = new Dancer( top, left );
    $('#stage').append( dancer.rainbowDancer() );
  });

});
