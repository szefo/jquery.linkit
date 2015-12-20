/*
 * name:      LinkIt
 * author:    szefo
 * version:   0.1.0
 * license:   MIT
 * */


(function ($) {
    $.fn.linkIt = function (options) {
        // Default settings
        var settings = $.extend({
            href: null,
            text: null,
            target: '_self'}, options);

        // Validation
        if(settings.href == null){
            console.log('You need an href option for LinkIt to work');
            return this;
        }

        alert(settings.href);
    }
}(jQuery));