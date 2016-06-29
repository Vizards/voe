var Vue = require('vue'),
	Router = require('vue-router');

require('./style/grid.css');
require('./style/duosuo.css');
require('./style/sass/entry.scss');
require('./style/github-markdown.css');
require('./script/script.js');
require('./script/embed.js');
Vue.use(Router);

var router = new Router();

router.map({
	'/':{
		name:'index',
		component:require('./views/page.vue')
	},
	'/page/:id':{
		name:'page',
		component:require('./views/page.vue')
	},
	'/post/:id':{
		name:'post',
		component:require('./views/post.vue')
	},
	//'/tag/:id':{
     //   name:'tag',
     //   component:require('./views/tag.vue')
	//},
	'*':{
		component:require('./views/404.vue')
	}
});

router.beforeEach(function(){
	window.scrollTo(0, 0);
});

window.route = router;

Vue.directive('f-time',function(value){
	if(typeof value === 'string'){
		var time = value.split('T')[0].split('/').join('-');
		this.el.innerText = time;
	}
});

Vue.directive('show-comment',{
	update:function(newValue,oldValue){
        if(newValue.id){
            $('.comment > div[id="ds-thread"]').remove();
            var el = document.createElement('div');
            el.setAttribute('data-thread-key',newValue.id);
            el.setAttribute('data-url', window.location.href);
            el.setAttribute('data-title',newValue.title);
            DUOSHUO.EmbedThread(el);
            DUOSHUO.ThreadCount(el);

            jQuery('.comment').append(el);

            $(document).ready(function() {
                $('pre code').each(function(i, block) {
                    hljs.highlightBlock(block);
                });

                var currentUrl = window.location.hash;
                if (Number(currentUrl.replace(/[^0-9]/ig,"")) == 0) {
                    return false
                } else {
                    var next_post_id = Number(currentUrl.replace(/[^0-9]/ig, "")) + 1;
                    var prev_post_id = Number(currentUrl.replace(/[^0-9]/ig, "")) - 1;
                    // console.log(prev_post_id,next_post_id);
                    $.get(ghost.url.api('posts/' + prev_post_id))
                        .done(function (data) {
                            $('#prev-title').text(data.posts[0].title);
                            $('#prev-post').attr('href', '#!/post/' + String(prev_post_id));
                            $('#prev-description').text(data.posts[0].meta_description);
                            $('#prev-img').attr('src',data.posts[0].image);
                        })
                        .fail(function (err) {
                            $('#prev-title').text('没有了');
                            $('#prev-description').text('没有更早的文章了');
                            $('#prev-img').attr('src','https://ooo.0o0.ooo/2016/06/10/575a82e5c8628.png');
                            return err;
                        });
                    $.get(ghost.url.api('posts/' + next_post_id))
                        .done(function (data) {
                            $('#next-title').text(data.posts[0].title);
                            $('#next-post').attr('href', '#!/post/' + String(next_post_id));
                            $('#next-description').text(data.posts[0].meta_description);
                            $('#next-img').attr('src',data.posts[0].image);
                        })
                        .fail(function (err) {
                            $('#next-title').text('没有了');
                            $('#next-description').text('没有更新的文章了');
                            $('#next-img').attr('src','https://ooo.0o0.ooo/2016/06/10/575a82e5c8628.png');
                            return err;
                        });
                }

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

                jQuery(document).ready(function() {
                    // 获取链接地址 GET 参数
                    String.prototype.getQuery = function(name) {
                        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
                        var r = this.substr(this.indexOf("\?")+1).match(reg);
                        if (r!=null) return unescape(r[2]); return null;
                    };
                    var strHref = location.href.substring(location.href.indexOf("?")+1);
                    var ppitem_name		= strHref.getQuery('item');	//项目名称
                    var donatrNo	=	strHref.getQuery('price');	//金额
                    var QRBox	=	$('#QRBox');
                    var MainBox	=	$('#MainBox');
                    var BTCQR	=	'https://ooo.0o0.ooo/2016/06/10/575a67475de45.png';	// 二维码路径
                    var AliPayQR	=	'https://ooo.0o0.ooo/2016/06/10/575a67486522c.jpg';
                    var WeChanQR	=	'https://ooo.0o0.ooo/2016/06/10/575a6747b26f6.png';
                    // PayPal 账户建议使用 Unicode
                    var ppbusiness	=	"\u0067\u0076\u0069\u007a\u0061\u0072\u0064\u0073\u0040\u0067\u006d\u0061\u0069\u006c\u002e\u0063\u006f\u006d";

                    if (!ppitem_name) { ppitem_name	=	"Donate"; }

                    // if (!donatrNo) { donatrNo	=	1; }

                    //创建 Paypal 表单

                    // 捐赠方式，仅适用于国外账户!
                    function ppDonate() {
                        var tempForm	=	document.createElement("form");
                        tempForm.id	=	"paypal";
                        tempForm.method	=	"post";
                        tempForm.action	=	"https://www.paypal.com/cgi-bin/webscr";
                        tempForm.target	=	"paypal";

                        var cmd	=	document.createElement("input");
                        cmd.type	=	"hidden";
                        cmd.name	=	"cmd";
                        cmd.value	=	"_donations";
                        tempForm.appendChild(cmd);

                        var business	=	document.createElement("input");
                        business.type	=	"hidden";
                        business.name	=	"business";
                        business.value	=	ppbusiness;
                        tempForm.appendChild(business);

                        var lc	=	document.createElement("input");
                        lc.type	=	"hidden";
                        lc.name	=	"lc";
                        lc.value	=	"US";
                        tempForm.appendChild(lc);

                        var item_name	=	document.createElement("input");
                        item_name.type	=	"hidden";
                        item_name.name	=	"item_name";
                        item_name.value	=	ppitem_name;
                        tempForm.appendChild(item_name);

                        var no_note	=	document.createElement("input");
                        no_note.type	=	"hidden";
                        no_note.name	=	"no_note";
                        no_note.value	=	"0";
                        tempForm.appendChild(no_note);

                        var currency_code	=	document.createElement("input");
                        currency_code.type	=	"hidden";
                        currency_code.name	=	"currency_code";
                        currency_code.value	=	"USD";
                        tempForm.appendChild(currency_code);

                        var bn	=	document.createElement("input");
                        bn.type	=	"hidden";
                        bn.name	=	"bn";
                        bn.value	=	"PP-DonationsBF:btn_donate_SM.gif:NonHostedGuest";
                        tempForm.appendChild(bn);

                        document.body.appendChild(tempForm);
                        tempForm.submit();
                        document.body.removeChild(tempForm);
                    }

                    // 立即购买，适用于中国账户
                    function ppBuy() {
                        var tempForm	=	document.createElement("form");
                        tempForm.id	=	"paypal";
                        tempForm.method	=	"post";
                        tempForm.action	=	"https://www.paypal.com/cgi-bin/webscr";
                        tempForm.target	=	"paypal";

                        var cmd	=	document.createElement("input");
                        cmd.type	=	"hidden";
                        cmd.name	=	"cmd";
                        cmd.value	=	"_xclick";
                        tempForm.appendChild(cmd);

                        var business	=	document.createElement("input");
                        business.type	=	"hidden";
                        business.name	=	"business";
                        business.value	=	ppbusiness;
                        tempForm.appendChild(business);

                        var lc	=	document.createElement("input");
                        lc.type	=	"hidden";
                        lc.name	=	"lc";
                        lc.value	=	"US";
                        tempForm.appendChild(lc);

                        var item_name	=	document.createElement("input");
                        item_name.type	=	"hidden";
                        item_name.name	=	"item_name";
                        item_name.value	=	ppitem_name;
                        tempForm.appendChild(item_name);

                        var no_note	=	document.createElement("input");
                        no_note.type	=	"hidden";
                        no_note.name	=	"no_note";
                        no_note.value	=	"0";
                        tempForm.appendChild(no_note);

                        var amount	=	document.createElement("input");
                        amount.type	=	"hidden";
                        amount.name	=	"amount";
                        amount.value	=	donatrNo;
                        tempForm.appendChild(amount);

                        var currency_code	=	document.createElement("input");
                        currency_code.type	=	"hidden";
                        currency_code.name	=	"currency_code";
                        currency_code.value	=	"USD";
                        tempForm.appendChild(currency_code);

                        var bn	=	document.createElement("input");
                        bn.type	=	"hidden";
                        bn.name	=	"bn";
                        bn.value	=	"PP-DonationsBF:btn_donate_SM.gif:NonHostedGuest";
                        tempForm.appendChild(bn);

                        document.body.appendChild(tempForm);
                        tempForm.submit();
                        document.body.removeChild(tempForm);
                    }

                    function showQR(QR) {
                        if (QR) {
                            MainBox.css('background-image','url('+QR+')');
                        }
                        $('#DonateText,#donateBox,#github,header,.article-info,.markdown-body,.navigation,.comment,footer').addClass('blur');
                        QRBox.fadeIn(300,function(argument) {
                            MainBox.addClass('showQR');
                        });
                    }
                    //	Buttons
                    // $('body').on('click', '#PayPal', function() {
                    // 	ppBuy();	// 购买按钮适用于国内的 Paypal 账户
                    // 	// ppDonate();	// 捐赠按钮仅适合国外的 PayPal 账户
                    // });

                    $('#donateBox>li').click(function(event) {
                        var thisID	=	$(this).attr('id');
                        if (thisID === 'PayPal') {
                            ppBuy();
                        } else if (thisID === 'BTC') {
                            showQR(BTCQR);
                            new Clipboard('#BTCBn');
                        } else if (thisID === 'AliPay') {
                            showQR(AliPayQR);
                        } else if (thisID === 'WeChat') {
                            showQR(WeChanQR);
                        }
                    });

                    MainBox.click(function(event) {
                        MainBox.removeClass('showQR').addClass('hideQR');
                        setTimeout (function(a) {
                            QRBox.fadeOut(300,function(argument) {
                                MainBox.removeClass('hideQR');
                            });
                            $('#DonateText,#donateBox,#github,header,.article-info,.markdown-body,.navigation,.comment,footer').removeClass('blur');
                        },600);

                    });
                });
            });
        }
    }
});

var App = Vue.extend({});
router.start(App,'#app');