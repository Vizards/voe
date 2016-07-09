function addSpace() {
    var is_spacing = false;

    !function(a){"use strict";function b(a){for(var b=a.parentNode;b&&b.nodeName&&-1===b.nodeName.search(/^(html|head|body|#document)$/i);){if("true"===b.getAttribute("contenteditable")||"true"===b.getAttribute("g_editable")||b.nodeName.search(g)>=0)return!0;b=b.parentNode}return!1}function c(a,b){for(var c=a.childNodes,d=0;d<c.length;d++){var e=c[d];if(8!==e.nodeType&&e.textContent)return e===b}}function d(a,b){for(var c=a.childNodes,d=c.length-1;d>-1;d--){var e=c[d];if(8!==e.nodeType&&e.textContent)return e===b}}function e(a){var b,c=a;return a=a.replace(/([\u2e80-\u2eff\u2f00-\u2fdf\u3040-\u309f\u30a0-\u30ff\u3100-\u312f\u3200-\u32ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff])(["])/gi,"$1 $2"),a=a.replace(/(["])([\u2e80-\u2eff\u2f00-\u2fdf\u3040-\u309f\u30a0-\u30ff\u3100-\u312f\u3200-\u32ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff])/gi,"$1 $2"),a=a.replace(/(["'\(\[\{<\u201c]+)(\s*)(.+?)(\s*)(["'\)\]\}>\u201d]+)/gi,"$1$3$5"),a=a.replace(/([\u2e80-\u2eff\u2f00-\u2fdf\u3040-\u309f\u30a0-\u30ff\u3100-\u312f\u3200-\u32ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff])( )(')([a-z])/gi,"$1$3$4"),a=a.replace(/([\u2e80-\u2eff\u2f00-\u2fdf\u3040-\u309f\u30a0-\u30ff\u3100-\u312f\u3200-\u32ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff])(#(\S+))/gi,"$1 $2"),a=a.replace(/((\S+)#)([\u2e80-\u2eff\u2f00-\u2fdf\u3040-\u309f\u30a0-\u30ff\u3100-\u312f\u3200-\u32ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff])/gi,"$1 $3"),a=a.replace(/([\u2e80-\u2eff\u2f00-\u2fdf\u3040-\u309f\u30a0-\u30ff\u3100-\u312f\u3200-\u32ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff])([\+\-\*\/=&\\|<>])([a-z0-9])/gi,"$1 $2 $3"),a=a.replace(/([a-z0-9])([\+\-\*\/=&\\|<>])([\u2e80-\u2eff\u2f00-\u2fdf\u3040-\u309f\u30a0-\u30ff\u3100-\u312f\u3200-\u32ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff])/gi,"$1 $2 $3"),c=a,b=c.replace(/([\u2e80-\u2eff\u2f00-\u2fdf\u3040-\u309f\u30a0-\u30ff\u3100-\u312f\u3200-\u32ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff])([\(\[\{<\u201c]+(.*?)[\)\]\}>\u201d]+)([\u2e80-\u2eff\u2f00-\u2fdf\u3040-\u309f\u30a0-\u30ff\u3100-\u312f\u3200-\u32ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff])/gi,"$1 $2 $4"),a=b,c===b&&(a=a.replace(/([\u2e80-\u2eff\u2f00-\u2fdf\u3040-\u309f\u30a0-\u30ff\u3100-\u312f\u3200-\u32ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff])([\(\[\{<\u201c>])/gi,"$1 $2"),a=a.replace(/([\)\]\}>\u201d<])([\u2e80-\u2eff\u2f00-\u2fdf\u3040-\u309f\u30a0-\u30ff\u3100-\u312f\u3200-\u32ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff])/gi,"$1 $2")),a=a.replace(/([\(\[\{<\u201c]+)(\s*)(.+?)(\s*)([\)\]\}>\u201d]+)/gi,"$1$3$5"),a=a.replace(/([\u2e80-\u2eff\u2f00-\u2fdf\u3040-\u309f\u30a0-\u30ff\u3100-\u312f\u3200-\u32ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff])([~!;:,\.\?\u2026])([a-z0-9])/gi,"$1$2 $3"),a=a.replace(/([\u2e80-\u2eff\u2f00-\u2fdf\u3040-\u309f\u30a0-\u30ff\u3100-\u312f\u3200-\u32ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff])([a-z0-9`\$%\^&\*\-=\+\\\|/@\u00a1-\u00ff\u2022\u2027\u2150-\u218f])/gi,"$1 $2"),a=a.replace(/([a-z0-9`~\$%\^&\*\-=\+\\\|/!;:,\.\?\u00a1-\u00ff\u2022\u2026\u2027\u2150-\u218f])([\u2e80-\u2eff\u2f00-\u2fdf\u3040-\u309f\u30a0-\u30ff\u3100-\u312f\u3200-\u32ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff])/gi,"$1 $2")}function f(a,f){f=f||document;for(var k,l=!1,m=document.evaluate(a,f,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null),n=m.snapshotLength,o=n-1;o>-1;--o){var p=m.snapshotItem(o);if(b(p))k=p;else{var q=e(p.data);if(p.data!==q&&(l=!0,p.data=q),k){if(p.nextSibling&&p.nextSibling.nodeName.search(i)>=0){k=p;continue}var r=p.data.toString().substr(-1)+k.data.toString().substr(0,1),s=e(r);if(r!==s){l=!0;for(var t=k;t.parentNode&&-1===t.nodeName.search(h)&&c(t.parentNode,t);)t=t.parentNode;for(var u=p;u.parentNode&&-1===u.nodeName.search(h)&&d(u.parentNode,u);)u=u.parentNode;if(u.nextSibling&&u.nextSibling.nodeName.search(i)>=0){k=p;continue}if(-1===u.nodeName.search(j))if(-1===t.nodeName.search(h))-1===t.nodeName.search(g)&&-1===t.nodeName.search(j)&&(k.previousSibling?-1===k.previousSibling.nodeName.search(i)&&(k.data=" "+k.data):b(k)||(k.data=" "+k.data));else if(-1===u.nodeName.search(h))p.data=p.data+" ";else{var v=document.createElement("pangu");v.innerHTML=" ",t.previousSibling?-1===t.previousSibling.nodeName.search(i)&&t.parentNode.insertBefore(v,t):t.parentNode.insertBefore(v,t),v.previousElementSibling||v.parentNode&&v.parentNode.removeChild(v)}}}k=p}}return l}var g=/^(code|pre|textarea)$/i,h=/^(a|del|pre|s|strike|u)$/i,i=/^(br|hr|i|img|pangu)$/i,j=/^(div|h1|h2|h3|h4|h5|h6|p)$/i;a.text_spacing=function(a){return e(a)},a.page_title_spacing=function(){var a="/html/head/title/text()",b=f(a);return b},a.page_spacing=function(){var b=a.page_title_spacing(),c="/html/body//*/text()[normalize-space(.)]";["script","style","textarea"].forEach(function(a){c+='[translate(name(..),"ABCDEFGHIJKLMNOPQRSTUVWXYZ","abcdefghijklmnopqrstuvwxyz")!="'+a+'"]'});var d=f(c);return b||d},a.node_spacing=function(a){var b=".//*/text()[normalize-space(.)]";["script","style","textarea"].forEach(function(a){b+='[translate(name(..),"ABCDEFGHIJKLMNOPQRSTUVWXYZ","abcdefghijklmnopqrstuvwxyz")!="'+a+'"]'});var c=f(b,a);return c},a.element_spacing=function(a){var b;if(0===a.indexOf("#")){var c=a.slice(1);b='id("'+c+'")//text()'}else if(0===a.indexOf(".")){var d=a.slice(1);b='//*[contains(concat(" ", normalize-space(@class), " "), "'+d+'")]//text()'}else{var e=a;b="//"+e+"//text()"}var g=f(b);return g}}(window.pangu=window.pangu||{});

    function go_spacing() {
        is_spacing = true;
        pangu.page_spacing();
        is_spacing = false;
    }

    go_spacing();

    function inserted_go_spacing(node) {
        is_spacing = true;
        pangu.node_spacing(node);
        is_spacing = false;
    }

    document.addEventListener('DOMNodeInserted', function(e) {
        if (!is_spacing) {
            inserted_go_spacing(e.target);
        }
    }, false);
}

addSpace();


(function() {
    var $section = $("<section id='gradient'></section>");
    $("body").append($section);
    var $div = $("<div class='content-home text-center'>" +
        "<a class='avatar' id='entrance'>" +
        "<img src='assets/logo.jpg' alt='avatar'>" +
        "</a>" +
        "<h1 class='name'>Vizards</h1>" +
        "<div class='slogan'>愿有岁月可回首，且以深情共白头</div>" +
        "<hr>" +
        "<ul class='text-center nav'>" +
        "<li class='item'>" +
        "<a href='http://wpa.qq.com/msgrd?v=3&uin=1429005143&site=qq&menu=yes' target='_blank'><i class='fa fa-qq' aria-hidden='true'></i></a>" +
        "</li>" +
        "<li class='item'>" +
        "<a href=''><i class='fa fa-weixin' aria-hidden='true'></i></a>" +
        "</li>" +
        "<li class='item'>" +
        "<a href='mailto:vizards@front.dog'><i class='fa fa-envelope' aria-hidden='true'></i></a>" +
        "</li>" +
        "<li class='item'>" +
        "<a href='https://github.com/Vizards' target='_blank'><i class='fa fa-github' aria-hidden='true'></i></a>" +
        "</li>" +
        "<li class='item'>" +
        "<a href='https://www.v2ex.com/member/vizards' target='_blank'><i class='icon-v2ex'></i></a>" +
        "</li>" +
        "<li class='item'>" +
        "<a href='https://www.zhihu.com/people/Varea' target='_blank'><i class='icon-zhihu-square'></i></a>" +
        "</li>" +
        "<li class='item'>" +
        "<a href='http://music.163.com/#/user/home?id=46347231' target='_blank'><i class='icon-wangyiyunyinyue'></i></a>" +
        "</li>" +
        "<li class='item'>" +
        "<a href='https://twitter.com/Philomilan' target='_blank'><i class='fa fa-twitter' aria-hidden='true'></i></a>" +
        "</li>" +
        "<li class='item'>" +
        "<a href='https://weibo.com/Philomilan' target='_blank'><i class='fa fa-weibo' aria-hidden='true'></i></a>" +
        "</li>" +
        "<li class='item'>" +
        "<a href='https://www.pinterest.com/gvizards/' target='_blank'><i class='fa fa-pinterest-p' aria-hidden='true'></i></a>" +
        "</li>" +
        "<li class='item'>" +
        "<a href='/rss/' target='_blank'><i class='fa fa-rss' aria-hidden='true'></i></a>" +
        "</li>" +
        "</ul>" +
        "</div>");
    $("section").append($div);
    $("section").css("height", $(window).height());
    $('body').css("overflow", "hidden");
    $(function () {
        $('#entrance').click(function () {
            $("#gradient").fadeOut();
            window.setTimeout("$('#gradient').remove()",1000);
            $('body').css("overflow", "auto");
        });
    });
    if (window.location.hash !== '#!/' && window.location.hash !== '') {
        $("#gradient").remove();
        $('body').css("overflow", "auto");
    } else {
        $("#gradient").css('display', 'block');
        $('body').css("overflow", "hidden");
    }

    var colors = new Array([22, 95, 115], [32, 15, 155], [30, 125, 30], [125, 18, 48], [125, 0, 125], [125, 64, 0]);

    var step = 0;
    //color table indices for:
    // current color left
    // next color left
    // current color right
    // next color right
    var colorIndices = [0, 1, 2, 3];

    //transition speed
    var gradientSpeed = 0.002;

    function updateGradient() {

        if ($ === undefined) return;

        var c0_0 = colors[colorIndices[0]];
        var c0_1 = colors[colorIndices[1]];
        var c1_0 = colors[colorIndices[2]];
        var c1_1 = colors[colorIndices[3]];

        var istep = 1 - step;
        var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
        var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
        var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
        var color1 = "rgb(" + r1 + "," + g1 + "," + b1 + ")";

        var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
        var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
        var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
        var color2 = "rgb(" + r2 + "," + g2 + "," + b2 + ")";

        $('#gradient').css({
            background: "-webkit-gradient(linear, left top, right top, from(" + color1 + "), to(" + color2 + "))"
        }).css({
            background: "-moz-linear-gradient(left, " + color1 + " 0%, " + color2 + " 100%)"
        });

        step += gradientSpeed;
        if (step >= 1) {
            step %= 1;
            colorIndices[0] = colorIndices[1];
            colorIndices[2] = colorIndices[3];

            //pick two new target color indices
            //do not pick the same as the current one
            colorIndices[1] = ( colorIndices[1] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;
            colorIndices[3] = ( colorIndices[3] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;

        }
    }

    setInterval(updateGradient, 10);
})();