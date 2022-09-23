
$(() => {

  class Dancer {

    constructor ( top, left ) {

      if ( !top ) this.top = this.randomStagePosition();
      else this.top = top;

      if ( !left ) this.left = this.randomStagePosition();
      else this.left = left;
      
      this.$node = $('<div class="dancer"></div>');

      this.setPosition(this.top, this.left);

    }

    setPosition (top, left) {
      this.$node.css({top, left});
    }

    tapDancer () {
      return this.$node.addClass('blink');
    }

    rainbowDancer () {
      return this.$node.addClass('rainbow');
    }

    randomStagePosition () {
      return String(Math.random() * 100 | 0)+'%';
    }

  }

  $('#regular').click( function () {
    const dancer = new Dancer();
    $('#stage').append( dancer.$node );
  });

  $('#tapper').click( function () {
    dancer = new Dancer();
    $('#stage').append( dancer.tapDancer() );
  });

  $('#rainbow').click( function () {
    dancer = new Dancer();
    $('#stage').append( dancer.rainbowDancer() );
  });

});
