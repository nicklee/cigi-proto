import Glide from '@glidejs/glide';

class Carousel {

    constructor(node) {
        this.launchcarousel(node);
    }

    launchcarousel(node) {

        new Glide(node, {
            type: 'slider',
            startAt: 0,
            perView: 2,
            gap: 28
        }).mount();

    }

}

[].forEach.call(document.getElementsByClassName('js-carousel'), function(el) {
    new Carousel(el);
});
