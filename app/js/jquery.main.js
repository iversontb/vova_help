"use strict";
( function(){

    $( function(){

        $( '.site__menu' ).each(function(){

            new MainMenu($(this));

        });

        $( '.site__aside__fixed' ).each(function () {

            new FixedAside($(this));


        });


    });

    var MainMenu = function( obj ){

        //private properties
        var _self = this,
            _hamburger = $('.hamburger'),
            _menu = $('.site__menu__wrap'),
            _obj = obj;

        //private methods
        var _menuOpen = function (curElem){

                if (curElem.hasClass('is-active')){

                    curElem.removeClass('is-active');
                    _menu.removeClass('active');


                }
                else {

                    curElem.addClass('is-active');
                    _menu.addClass('active');


                }

            },
            _init = function(){
                _obj[ 0 ].obj = _self;
                _onEvents();
            },
            _onEvents = function(){

                _hamburger.on( {
                    click: function(){

                        var cerElem = $(this);

                        _menuOpen(cerElem);
                        return false;
                    }
                } );

            }


        //public properties

        //public methods


        _init();
    };

    var FixedAside = function( obj ){

        //private properties
        var _self = this,
            _obj = obj,
            _siteAside = $('.site__aside'),
            _fixedAside = $('.site__aside__fixed');

        //private methods
        var _blockPosition = function (curElem){

                var asideTopPosition = _siteAside.position().top,
                    windowTop = curElem.scrollTop();

                if(windowTop > asideTopPosition ){

                    _fixedAside.addClass('active');

                }
                else {

                    _fixedAside.removeClass('active');

                }

            },
            _init = function(){
                _obj[ 0 ].obj = _self;
                _onEvents();
            },
            _onEvents = function(){

                $(window).on( {
                    scroll: function(){

                        var curElem = $(this);

                        _blockPosition(curElem);



                        return false;
                    }
                } );

            }


        //public properties

        //public methods


        _init();
    };

} )();