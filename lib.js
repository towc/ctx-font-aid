var ctxfa = {};

// internal variables: __propertyName
ctxfa.__inMemCanvas = document.createElement( 'canvas' );
ctxfa.__ctx = ctxfa.__inMemCanvas.getContext( '2d' );

ctxfa.applyFont = function( ctx, fontStr ) {
  var prevFont = ctx.font;
  ctx.font = fontStr;

  return ctx.font = prevFont;
}
ctxfa.fontExists = function( fontStr ) {
  return ctxfa.applyFont( this.__ctx, fontStr );
}

ctxfa.applyFonts = function( ctx, fontsArray ) {

  // fontsArray can either be [ '20px Verdana', '20px Helvetica' ] or '20px Verdana, 20px Helvetica'
  if( typeof fontsArray === 'string' )
    fontsArray = fontsArray.split( ',' );

  var i = 0
    , fontExists = false;

  while( !fontExists && i < fontsArray.length ){
    fontExists = this.applyFont( ctx, fontsArray[ i ] );
    ++i;
  }

  return fontExists;
}
ctxfa.whenFontExists = function( fontStr, callbackFn, intervalMs, timeoutMs ) {
  var time = 0
    , interval = window.setInterval( function() {
    if( ctxfa.fontExists( fontStr ) ) {
      window.clearInterval( interval );
      callbackFn( true );
    } else if( time += intervalMs > timeoutMs ) {
      window.clearInterval( interval );
      callbackFn( false );
    }
  }, intervalMs )
}
