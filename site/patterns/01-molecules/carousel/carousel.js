import $ from 'jquery';
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
// const carousels = Array.from(document.getElementsByClassName('js-carousel'));
//
//
// carousels.forEach(foo => {
//     new Carousel();
// });

$('.js-carousel').each(function() {
    new Carousel(this);
});
