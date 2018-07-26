import lightGallery from 'lightgallery.js';
import 'lg-video.js';

class lightGalleryModal {

    constructor( ) {
        this.launchModal();
    }

    launchModal() {

        new lightGallery(document.getElementById('js-modal'), {
            download: false,
            counter: false,
            controls: false,
            selector: '.js-modal-item',
            youtubePlayerParams: {
                modestbranding: 1,
                showinfo: 0,
                rel: 0,
                controls: 0
            }
        }).mount();

    }

}

[].forEach.call(document.getElementById('js-modal'), function() {
    new lightGalleryModal();
});
