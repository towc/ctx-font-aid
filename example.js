// check whether a font exists
// ( fontStr )
ctxfa.fontExists( '20px Verdana' ); // true|false

// apply a font and see whether it exists
// ( context, fontStr )
ctxfa.applyFont( ctx, 'lighter 20px Verdana' ); // true|false

// apply a list of fallback fonts
// ( context, fontArray|fontStr )
ctxfa.applyFonts( ctx, [ '20px Verdana', '20px Helvetica' ] );
// same as this, in css style
ctxfa.applyFonts( ctx, '20px Verdana, 20px Helvetica' );

// wait until a font exists, then do something. This is useful when you're trying to
// load a font with the css, and want to wait until it's loaded to actually draw
// ( fontStr, callbackFn = function(){}, intervalMs = 500, timeoutMs = 30000 )
ctxfa.whenFontExists( 'lighter 20px Custom', function( fontExists ){
  if( fontExists )
    initDrawing();
  else
    useFallback();
});
