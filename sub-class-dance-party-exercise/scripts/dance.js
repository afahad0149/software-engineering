
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
      return String(Math.random() * 95 | 0)+'%';
    }

  }

  $('#regular').click( function () {

    $('#dance').prop('disabled', false).removeClass('noHover');
    
    const dancer = new Dancer();
    $('#stage').append( dancer.$node );
    
  });

  $('#tapper').click( function () {

    $('#dance').prop('disabled', false).removeClass('noHover');
    
    const dancer = new Dancer();
    $('#stage').append( dancer.tapDancer() );
    
  });

  $('#rainbow').click( function () {

    $('#dance').prop('disabled', false).removeClass('noHover');
    
    const dancer = new Dancer();
    $('#stage').append( dancer.rainbowDancer() );
    
  });

  // Dance & Rest buttons

  function letsDance (element) {

    const h = $(window).height();
    const w = $(window).width();
    const nh = Math.floor(Math.random()*0.9 * h);
    const nw = Math.floor(Math.random()*0.9 * w);
    $(element).animate({ top: nh, left: nw }, 1500, function () { letsDance(element); });

  }

  $('#dance').prop('disabled', true).addClass('noHover');
  $('#rest').prop('disabled', true).addClass('noHover');

  $('#dance').click( function () {

    stopDancing = false;
    
    $('button').prop('disabled', true).addClass('noHover');
    $('#rest').prop('disabled', false).removeClass('noHover');

    const elements = $('.dancer').get();
    elements.forEach( (element) => {
      element.startPos = $(element).offset();
      //if ( element.dancePos ) $(element).animate({top: element.dancePos.top-50, left: element.dancePos.left});
      letsDance(element);
    });

  });

  let stopDancing = false;

  $('#rest').click( function () {

    stopDancing = true;

    $('button').prop('disabled', false).removeClass('noHover');
    $('#rest').prop('disabled', true).addClass('noHover');

    const elements = $('.dancer').get();
    elements.forEach( (element) => {
      $(element).stop().removeClass('colission');
      element.dancePos = $(element).offset();
      $(element).animate({top: '97%'}).delay(200);
      if ( element.startPos )
        $(element).animate({top: element.startPos.top-50, left: element.startPos.left});
    });
    
  });

  // Make dancer interact with each other

  function dancersIteraction () {

    const elements = $('.dancer').get();

    let topPos  = [];
    let leftPos = [];

    elements.forEach( (element) => {
      topPos.push($(element).offset().top);
      leftPos.push($(element).offset().left);
    });

    const len = elements.length;
    const topSum = topPos.reduce((a, b) => a + b, 0);
    const topAvg = (topSum / len) || 0;

    const leftSum = leftPos.reduce((a, b) => a + b, 0);
    const leftAvg = (leftSum / len) || 0;

    console.log(topAvg, leftAvg);

    $('#stage').append($('<div class="dancers-mean"></div>'));
    $('.dancers-mean').animate({top: topAvg, left: leftAvg, height: '+='+len, width: '+='+len});

  }

  function dancersColission () {

    const maxDiff = 10;

    const elements = $('.dancer').get();
    elements.forEach( (element) => {

      const topp = $(element).offset().top + maxDiff;
      const bottom = $(element).offset().top - maxDiff;
      const left = $(element).offset().left - maxDiff;
      const right = $(element).offset().left + maxDiff;

      elements.forEach( (element2) => {
        if ( element != element2 ) {
          const coor = [ $(element2).offset().top, $(element2).offset().left ];
          if ( coor[0] <= topp && coor[0] >= bottom && coor[1] >= left && coor[1] <= right ) {
            $(element).addClass('colission');
            $(element2).addClass('colission');
            $(element).stop();
            $(element2).stop();
          }
        }
      });
    });
  }

  window.setInterval(function () {
    if ( !stopDancing ) dancersColission();
  }, 1);

});
