import $ from 'jquery';

class Dismiss {

    constructor(node) {
        this.$node = $(node);

        this.bindEvents();
    }

    bindEvents() {
        this.$node.on('click', e => {
            e.preventDefault();
            this.$node.parent().toggleClass('closed');
        });
    }
}

$('.js-dismiss').each(function() {
    new Dismiss(this);
});
