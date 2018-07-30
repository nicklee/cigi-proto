import Glide from '@glidejs/glide';

class carousel {

    constructor( ) {
        this.carouselContainer =  '.js-carousel';

        this.launchcarousel();
    }

    launchcarousel() {

        new Glide(this.carouselContainer, {
            type: 'slider',
            startAt: 0,
            perView: 2,
            gap: 28,
            peek: {
                before: 0,
                after: 0
            },
            breakpoints: {
                1024: {
                    perView: 2
                },
                600: {
                    perView: 1
                }
            }
        }).mount();

    }

}

[].forEach.call(document.getElementsByClassName('js-carousel'), function(el) {
    new carousel(el);
});
