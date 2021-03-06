import headRoom from 'headroom.js';

function StickyHeader() {
    let elem = document.body;
    let options = {
        offset: 200,
        tolerance : {
            up      : 10,
            down    : 5
        },
        classes: {
            // when element is initialised
            initial : 'headroom',
            // when scrolling up
            pinned : 'headroom--pinned',
            // when scrolling down
            unpinned : 'headroom--unpinned',
            // when above offset
            top : 'headroom--top',
            // when below offset
            notTop : 'headroom--not-top',
            // when at bottom of scoll area
            bottom : 'headroom--bottom',
            // when not at bottom of scroll area
            notBottom : 'headroom--not-bottom'
        },
    };

    let headroom = new headRoom(elem, options);
    headroom.init();
}

StickyHeader();
