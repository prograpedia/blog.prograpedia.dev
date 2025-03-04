---
title: Creación de Plugins jQuery (Slider by Cristian Torres)
description: Aprende a crear plugins jQuery con este tutorial paso a paso. En este caso, un slider de imágenes.
pubDate: 2013-06-12 15:37:00
author: Cristian Torres
#image: https://placeholdr.ai/8b0890ed-1034-4155-811a-be5dbf863130/300/200
image: ./assets/8b0890ed-1034-4155-811a-be5dbf863130.png
---
```js title="jquery.plugin.js"
(function ($) {

    $.tSlider = function (container, options) {
        this.options = {};

        this.context = container.parent();
        container.css('position', 'relative');
        this.child = container.children();
        this.page = null;
        this.pages = [];
        this.current = 0;
        this.interval = null;
        var plugin = this;

        container.data('slider', plugin);

        this.next = function () {
            plugin.current++;
            if (plugin.current >= $('.pointer', plugin.context).size()) plugin.current = 0;
            plugin.moveTo(plugin.current);
        }

        this.prev = function () {
            plugin.current--;
            if (plugin.current < 0) plugin.current = $('.pointer', plugin.context).size() - 1;
            plugin.moveTo(plugin.current);
        }

        this.moveTo = function (index) {
            clearInterval(plugin.interval);
            $('.page.current', plugin.context)
                .fadeOut()
                .toggleClass('current');
            $('.page', plugin.context).eq(index)
                .toggleClass('current')
                .fadeIn();
            $('.pointer.current', plugin.context)
                .toggleClass('current');
            $('.pointer', plugin.context).eq(index)
                .toggleClass('current');
            plugin.interval = setInterval(plugin.next, options.autoPlay.interval);
        }

        this.init = function (element, options) {
            this.options = $.extend({}, $.tSlider.optionsDefault, options);
            var pagination = $('<ul></ul>').addClass(options.pagination.className);
            if ((this.child.length / options.pageSize) > 1) {
                this.child.each(function (i, v) {
                    if (i % options.pageSize == 0) {
                        var pageNumber = (i / options.pageSize + 1);
                        var pointer = $('
<li></li>
')
                            .append(options.pagination.pointer ? '' : pageNumber)
                            .addClass('pointer');
                        plugin.page = $('<div></div>')
                            .addClass('page')
                            .css({
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%'
                            });
                        if (pageNumber == options.startPage) {
                            plugin.page.addClass('current').css({display: 'block'});
                            pointer.addClass('current');
                        } else {
                            plugin.page.css({display: 'none'});
                        }
                        plugin.page.append($(v).css('display', 'block'));
                        plugin.pages.push(plugin.page);

                        pointer.bind('click', function () {
                            plugin.current = pageNumber - 1;
                            plugin.moveTo(plugin.current);
                        });
                        pagination.append(pointer);
                    } else {
                        plugin.page.append(v);
                    }
                });
                container.html('').append(plugin.pages).after(pagination.append($('<div class="clearFix"></div>')));
                if (options.arrows != false) {
                    var nextBtn = $('<div>' + options.arrows.right + '</div>')
                        .addClass('next')
                        .bind('click', this.next);
                    var prevBtn = $('<div>' + options.arrows.left + '</div>')
                        .addClass('prev')
                        .bind('click', this.prev);
                    container
                        .after(nextBtn)
                        .after(prevBtn);
                }
            }

            if (options.autoPlay != false) {
                this.interval = setInterval(this.next, options.autoPlay.interval);
            }
        }

        this.init(container, options);
    }


    $.fn.tSlider = function (options) {
        return $(this).each(function () {
            (new $.tSlider($(this), options));
        });
    }

    $.tSlider.optionsDefault = {
        pageSize: 4,
        startPage: 1,
        arrows: {
            left: '<',
            right: '>'
        },
        autoPlay: {
            interval: 2000
        },
        pagination: {
            className: 'pagination',
            pointer: false
        }
    }
})(jQuery);
```
