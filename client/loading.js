LoadingOverlay = {
  spinnerJsDefaultOpts : {
    lines: 11,      // The number of lines to draw
    length: 15,     // The length of each line
    width: 15,      // The line thickness
    radius: 10,     // The radius of the inner circle
    corners: 1,     // Corner roundness (0..1)
    rotate: 0,      // The rotation offset
    direction: 1,   // 1: clockwise, -1: counterclockwise
    color: '#fff',  // #rgb or #rrggbb or array of colors
    speed: 2,       // Rounds per second
    trail: 50,      // Afterglow percentage
    shadow: true,   // Whether to render a shadow
    hwaccel: false, // Whether to use hardware acceleration
    className: 'spinner', // The CSS class to assign to the spinner
    zIndex: 2e9,    // The z-index (defaults to 2000000000)
    top: 'auto',    // Top position relative to parent in px
    left: 'auto'    // Left position relative to parent in px
  },

  createNewSpinner : function(selector, spinnerOpts) {
    selector = selector || 'loading';
    return new Spinner(spinnerOpts || this.spinnerJsDefaultOpts).spin(
      document.getElementById( selector ) );
  },

  createLoadingOverlay : function(target, overlayColor) {
    target = target || 'body';
    var $overlay = $('#loading');

    if ( $overlay.length > 0 ) {
      $overlay.remove();
    }

    $overlay = $('<div id="loading" class="loading"></div>');
    $( target ).append( $overlay );

    if ( overlayColor )
      $overlay.css( 'background-color', overlayColor);

    this.createNewSpinner( 'loading' );
  },

  destroyLoadingOverlay : function( selector ) {
    var $overlay = $( selector || '#loading' )
    if ( $overlay.length > 0 )
      $.each($overlay, function(index, obj) {
        $(obj).addClass('animated fadeOut');
        setTimeout(function() { obj.remove(); }, 500);
      });
  }
}

// TEMPLATE HANDLING
// -----------------------------------------------------------------------------
Template.loading.rendered = function () {
  LoadingOverlay.createLoadingOverlay();
};
Template.loading.destroyed = function () {
  LoadingOverlay.destroyLoadingOverlay();
};