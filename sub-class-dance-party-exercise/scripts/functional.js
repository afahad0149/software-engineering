
$(() => {

  function Dancer (top, left) {
    const dancer = {};
    // Here we use jQuery to create an HTML <div> tag.
    dancer.$node = $('<div class="dancer"></div>');
    Object.assign(dancer, dancerMethods);
    // Now that the dancer object has access to its methods,
    // we can set its position to the desired coordinates.
    dancer.setPosition(top, left);
    return dancer;
  }

  const dancerMethods = {};

  dancerMethods.setPosition = function (top, left) {
    // Here we use the CSS top and left properties to position our dancer
    // where it belongs on the page. See http://api.jquery.com/css/
    this.$node.css({top, left});
  };

  // Have a look at the last function in this file and figure out how to
  // make the regular dancers appear on stage. Then come back here
  // and continue with the TapDancer constructor.

  function randomStagePosition () {
    // Implement this function so that it returns an array with
    // the height and width coordinates of a random point on stage,
    // measured as the distance in pixels from its top-left corner.
    // Then use it every time you want to place a new dancer on stage.
    return String(Math.random() * 100 | 0)+'%';
  }

  
  $('#regular').click( function () {

    const top  = randomStagePosition();
    const left = randomStagePosition();
    
    $('#stage').append( Dancer( top, left ).$node );

  });


  dancerMethods.tapDancer = function () {

    this.$node.addClass('blink');

    return this.$node;

  };

  $('#tapper').click( function () {

    const top  = randomStagePosition();
    const left = randomStagePosition();
    
    $('#stage').append( Dancer( top, left ).tapDancer() );

  });

  dancerMethods.rainbowDancer = function () {

    this.$node.addClass('rainbow');

    return this.$node;

  };

  $('#rainbow').click( function () {

    const top  = randomStagePosition();
    const left = randomStagePosition();
    
    $('#stage').append( Dancer( top, left ).rainbowDancer() );

  });


});


