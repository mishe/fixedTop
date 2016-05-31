(function ($) {
    $.extend($.fn, {
        fixedTop: function (options) {
            var opt = {
                top: 0, //距离屏幕的上边距
                zIndex: 0,
                bottom:180 //距离滚动页面最尾部距离，取消固定位置
            }
            opt = $.extend(opt, options);
            this.each(function () {
                var self = this,
                    top = self.offsetTop,
                    seftPos = self.getBoundingClientRect(),
                    left=seftPos.left+(document.documentElement.scrollLeft || document.body.scrollLeft),
                    selfHeight = seftPos.height,
                    selfWidth = seftPos.width;
                setInterval(function () {
                    var st = document.documentElement.scrollTop || document.body.scrollTop,
                        sl=document.documentElement.scrollLeft || document.body.scrollLeft,
                        msl=$(document).width()-document.documentElement.clientWidth,
                        pos = 0,
                        height = 0;
                    if (!pos && st - top + opt.top >= 0) {
                        $(self).css({
                            'position': 'fixed',
                            'top': 0,
                            'left':sl>0?left-sl:'auto',
                            'padding-top': opt.top,
                            'width': selfWidth,
                            'z-index': opt.zIndex
                        });
                        pos = 1;
                        if (document.documentElement.clientHeight - opt.bottom < selfHeight) {
                            height = $(document).height();
                            if (st + selfHeight + 200 > height) {
                                $(self).css({
                                    'position': 'static',
                                    'padding-top': 0
                                });
                            }
                        }
                    }
                    else if (st - top <= 0) {
                        $(self).css({
                            'position': 'static',
                            'padding-top': 0
                        });
                    }
                }, 16);

            })
        }
    });
})($ || jQuery || Zepto);
