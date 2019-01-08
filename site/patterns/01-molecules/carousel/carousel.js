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

class CarouselLong {

    constructor(node) {
        this.launchcarousel(node);
    }

    launchcarousel(node) {

        new Glide(node, {
            type: 'slider',
            startAt: 0,
            perView: 3,
            gap: 28
        }).mount();

    }

}

[].forEach.call(document.getElementsByClassName('js-carousel'), function(el) {
    new Carousel(el);
});


[].forEach.call(document.getElementsByClassName('js-carousel-long'), function(el) {
    new CarouselLong(el);
});
