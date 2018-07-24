import $ from 'jquery';

class SmoothScrollFixed {

    constructor( ) {
        this.$menuNode = $('.js-slowscroll-fixed');
        this.fixedheader = 54;
        this.overviewbar = $('.overview-bar').outerHeight();
        this.padding = 14;
        this.headerHeight = parseInt(this.fixedheader) + parseInt(this.overviewbar) + parseInt(this.padding);

        this.bindEvents();
    }

    smoothAnchor(event) {

        // prevent default link action
        event.preventDefault();

        var $clicked    = $(event.currentTarget);
        var id          = $clicked.attr('href');
        var $target     = $(id);

        // if there is no target, fail silently
        if ($target.length === 0) {
            return false;
        }

        // animate html & body scrollTop property to the top position of the $target element
        $('html, body').animate({
            scrollTop: $target.offset().top - this.headerHeight,
        }, 500);

    }

    bindEvents() {
        this.$menuNode.on('click', (e) => this.smoothAnchor(e) );
    }

}

new SmoothScrollFixed(this);
