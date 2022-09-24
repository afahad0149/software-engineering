
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
    iteract(selector);
    $(selector).animate({ top: nh, left: nw }, 1500, function () { letsDance(selector); }).delay(-100);
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
      if ( element.dancePos )
        $(element).animate({top: element.dancePos.top-50, left: element.dancePos.left});
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

  function iteract (element) {

    const maxDiff = 10;

    const topp = $(element).offset().top + maxDiff;
    const bottom = $(element).offset().top - maxDiff;
    const left = $(element).offset().left - maxDiff;
    const right = $(element).offset().left + maxDiff;

    const elements = $('.dancer').get();

    elements.forEach( (element2) => {

      if ( element != element2 ) {
        
        const coor = [ $(element2).offset().top, $(element2).offset().left ];
      
        if ( coor[0] <= topp && coor[0] >= bottom && coor[1] >= left && coor[1] <= right ) {
          $(element).addClass('colission');
          $(element2).addClass('colission');
          $(element).stop();
          $(element2).stop();
          //$('#stage').append($(createLine(element, element2)));
        }
      }

    });
  }

 
  window.setInterval(function () {

    if ( !stopDancing ) {

      const elements = $('.dancer').get();

      elements.forEach( (element) => {
        iteract(element);
      });
    }

  }, 1);

  //intervalID;

  function createLine (el1, el2) {

    var off1 = getElementProperty(el1);
    var off2 = getElementProperty(el2);
    // center of first point
    var dx1 = off1.left + off1.width/2;
    var dy1 = off1.top + off1.height/2;
    // center of second point 
    var dx2 = off2.left + off2.width/2;
    var dy2 = off2.top + off1.height/2;
    // distance
    var length = Math.sqrt(((dx2-dx1) * (dx2-dx1)) + ((dy2-dy1) * (dy2-dy1)));
    // center
    var cx = ((dx1 + dx2) / 2) - (length / 2);
    var cy = ((dy1 + dy2) / 2) - (2	 / 2);
    // angle
    var angle = Math.atan2((dy1-dy2),(dx1-dx2))*(180/Math.PI);
    // draw line

    return  `<section class="connectingLines" style="left:${cx}px; top:${cy}px; width:${length}px; -webkit-transform:rotate(${angle}deg); transform:rotate(${angle}deg);"></section>`;
  }
  
  function getElementProperty (el) {

    var dx = 0;
    var dy = 0;
    var width = el.width() || 0;
    var height = el.height() || 0;
    
    dx += el.position().left;
    dy += el.position().top;
    
    return { top: dy, left: dx, width: width, height: height };

  }
    

});
