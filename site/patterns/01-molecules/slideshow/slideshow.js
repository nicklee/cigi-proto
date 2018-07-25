import Glide from '@glidejs/glide';

class Slideshow {

    constructor( ) {
        this.slideshowContainer =  '.js-slideshow';

        this.launchSlideshow(); 
    }

    launchSlideshow() {

        new Glide(this.slideshowContainer, {
            type: 'slider',
            startAt: 0,
            perView: 2,
            gap: 28,
            peek: {
                before: 0,
                after: 200
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


[].forEach.call(document.getElementsByClassName('js-slideshow'), function(el) {
    new Slideshow(el);
});
