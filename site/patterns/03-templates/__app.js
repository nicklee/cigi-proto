import $ from 'jquery';

class App {
    constructor(node) {
        // Class specific variables
        this.$node              = $(node);
        this.$appNavigation     = this.$node.find('.app__navigation');
        this.$appSearch         = this.$node.find('.app__search');
        this.$appBrowse         = this.$node.find('.app__browse');
        this.openClass          = 'open';

        // State
        this.menuState = {
            menu: {
                open: false
            }
        };

        this.searchState = {
            menu: {
                open: false
            }
        };

        this.browseState = {
            menu: {
                open: false
            }
        };

        // Bind events
        this.bindEvents();
    }

    menuOpen() {
        this.$appNavigation.addClass(this.openClass);
        this.menuState.menu.open = true;
    }

    menuClose() {
        this.$appNavigation.removeClass(this.openClass);
        this.menuState.menu.open = false;
    }

    menuToggle() {
        if (this.menuState.menu.open) {
            this.menuClose();
        } else {
            this.menuOpen();
            if (this.searchState.menu.open) {
                this.searchClose();
            }
        }
    }

    searchOpen() {
        this.$appSearch.addClass(this.openClass);
        this.searchState.menu.open = true;
        $('.app-search__input').focus();
    }

    searchClose() {
        this.$appSearch.removeClass(this.openClass);
        this.searchState.menu.open = false;
    }

    searchToggle() {
        if (this.searchState.menu.open) {
            this.searchClose();
        } else {
            this.searchOpen();
            if (this.menuState.menu.open) {
                this.menuClose();
            }
        }
    }

    browseOpen() {
        this.$appBrowse.addClass(this.openClass);
        this.browseState.menu.open = true;
    }

    browseClose() {
        this.$appBrowse.removeClass(this.openClass);
        this.browseState.menu.open = false;
    }

    browseToggle() {
        if (this.browseState.menu.open) {
            this.browseClose();
        } else {
            this.browseOpen();
            if (this.browseState.menu.open) {
                this.browseClose();
            }
        }
    }

    bindEvents() {

        $(window).on('app:MobileMenuLink:toggle', () => {
            this.menuToggle();
        });

        $(window).on('app:SearchToggle:toggle', () => {
            this.searchToggle();
        });

        $(window).on('app:BrowseToggle:toggle', () => {
            this.browseToggle();
        });

    }
}

$('.app').each(function() {
    new App(this);
});
