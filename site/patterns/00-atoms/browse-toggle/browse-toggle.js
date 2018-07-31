import $ from 'jquery';

class BrowseToggle {
    constructor(node) {
        this.$node = $(node);
        this.$menuToggle = $('.js-browse-toggle');
        this.bindEvents();
    }

    bindEvents() {
        this.$node.on('click', e => {
            e.preventDefault();
            this.$menuToggle.toggleClass('browse-toggle--active');
            $('.app-browse').toggleClass('active');
            $('body').removeClass('menu-active');
            $('body').removeClass('search-active');
            $('body').toggleClass('browse-active');
            $(window).trigger('app:BrowseToggle:toggle');
        });
    }
}

$('.js-browse-toggle').each(function() {
    new BrowseToggle(this);
});
