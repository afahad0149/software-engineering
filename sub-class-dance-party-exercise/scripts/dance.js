
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

  function letsDance (selector) {
    const h = $(window).height();
    const w = $(window).width();
    const nh = Math.floor(Math.random()*0.9 * h);
    const nw = Math.floor(Math.random()*0.9 * w);
    $(selector).animate({ top: nh, left: nw }, 1000, function () { letsDance(selector); });
  }


  $('#dance').prop('disabled', true).addClass('noHover');
  $('#rest').prop('disabled', true).addClass('noHover');

  $('#dance').click( function () {
    
    $('.btn').prop('disabled', true).addClass('noHover');
    $('#rest').prop('disabled', false).removeClass('noHover');
    $('#dance').addClass('activated');

    const elements = $('.dancer').get();
    elements.forEach( (element) => {
      element.startPos = $(element).offset();
      if ( element.dancePos )
        $(element).animate({top: element.dancePos.top-50, left: element.dancePos.left});
      letsDance(element);
    });
    
    dancersIteraction ();

  });

  $('#rest').click( function () {

    $('.btn').prop('disabled', false).removeClass('noHover');
    $('#dance').prop('disabled', false).removeClass('noHover');
    $('#rest').addClass('activated');

    const elements = $('.dancer').get();
    elements.forEach( (element) => {
      $(element).stop();
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

    $('#stage').append($('<div class="dancers-mean"></div>')).css({height: '+=len', width: '+=len'});
    $('.dancers-mean').animate({top: topAvg, left: leftAvg});

  }

  //$('.btn').addClass('noHover');
  //$('.btn').prop('disabled', true);

});
