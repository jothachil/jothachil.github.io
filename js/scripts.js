( function ( $ ) {
    // Create a new instance of Slidebars
    var controller = new slidebars();
    $( controller.events ).on( 'closed', function ( event, id ) {
        console.log( 'Closed event of slidebar with id ' + id );

    } );

    // Initialize Slidebars
    controller.init();

    $( '.js-toggle-right-slidebar' ).on( 'click', function ( event ) {
        event.stopPropagation();
        controller.toggle( 'slidebar-2' );
        $(".hamburger").toggleClass("is-active");


    } );

    // Close any
    $( controller.events ).on( 'opened', function () {
        $( '[canvas="container"]' ).addClass( 'js-close-any-slidebar' );
    } );

    $( controller.events ).on( 'closed', function () {
        $( '[canvas="container"]' ).removeClass( 'js-close-any-slidebar' );
    } );

    $( 'body' ).on( 'click', '.js-close-any-slidebar', function ( event ) {
        event.stopPropagation();
        controller.close();
        $(".hamburger").toggleClass("is-active");

    } );

    // Initilize, exit and css reset
    $( '.js-initialize-slidebars' ).on( 'click', function ( event ) {
        event.stopPropagation();
        controller.init();
    } );

    $( '.js-exit-slidebars' ).on( 'click', function ( event ) {
        event.stopPropagation();
        controller.exit();
    } );

    $( '.js-reset-slidebars-css' ).on( 'click', function ( event ) {
        event.stopPropagation();
        controller.css();
    } );

    // Is and get
    $( '.js-is-active' ).on( 'click', function ( event ) {
        event.stopPropagation();
        console.log( controller.isActive() );
    } );

    $( '.js-is-active-slidebar' ).on( 'click', function ( event ) {
        event.stopPropagation();
        var id = prompt( 'Enter a Slidebar id' );
        console.log( controller.isActiveSlidebar( id ) );
    } );

    $( '.js-get-active-slidebar' ).on( 'click', function ( event ) {
        event.stopPropagation();
        console.log( controller.getActiveSlidebar() );
    } );

    $( '.js-get-all-slidebars' ).on( 'click', function ( event ) {
        event.stopPropagation();
        console.log( controller.getSlidebars() );

    } );

    $( '.js-get-slidebar' ).on( 'click', function ( event ) {
        event.stopPropagation();
        var id = prompt( 'Enter a Slidebar id' );
        console.log( controller.getSlidebar( id ) );
    } );

} ) ( jQuery );
