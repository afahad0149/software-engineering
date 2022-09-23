
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
    const dancer = new Dancer();
    $('#stage').append( dancer.tapDancer() );
  });

  $('#rainbow').click( function () {
    const dancer = new Dancer();
    $('#stage').append( dancer.rainbowDancer() );
  });

  // Dance & Rest buttons

  function letsDance (selector) {
    const h = $(window).height();
    const w = $(window).width();
    const nh = Math.floor(Math.random() * h);
    const nw = Math.floor(Math.random() * w);
    $(selector).animate({ top: nh, left: nw }, 1000, function () { letsDance(selector); });
  }

  $('#dance').click( function () {
    const elements = $('.dancer').get();
    elements.forEach( (element) => {
      element.startPos = $(element).offset();
      if ( element.dancePos )
        $(element).animate({top: element.dancePos.top, left: element.dancePos.left});
      letsDance(element);
    });
  });

  $('#rest').click( function () {
    const elements = $('.dancer').get();
    elements.forEach( (element) => {
      $(element).stop();
      element.dancePos = $(element).offset();
      if ( element.startPos )
        $(element).animate({top: element.startPos.top, left: element.startPos.left});
    });
  });

});
