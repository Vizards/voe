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
	'/tag/:id':{
        name:'tag',
        component:require('./views/tag.vue')
	},
    '/anonymous/':{
        name: 'anonymous',
        component:require('./views/anonymous.vue')
    },
    '/donate':{
        name: 'donate',
        component:require('./views/donate.vue')
    },
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
            });
        }
    }
});

var App = Vue.extend({});
router.start(App,'#app');