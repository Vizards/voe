<template>
</template>
<style>
</style>
<script>
    module.exports = {
        route: {
            data: function () {
                /**
                 *  Usage:
                 *  (function () {
                 *     var id = CryptoJS.SHA1(location.host + location.pathname.replace(/\/$/,''), 'rlcmt');
                 *     var container = document.getElementById('comments');
                 *     RLComments.init(id, container);
                 *   })();
                 */

                var wdscript = 'https://cdn.wilddog.com/js/client/current/wilddog.js';
                var api = 'https://board-io.wilddogio.com/';

                window.RLComments = {
                    pageId: null,
                    dataRef: null,
                    container: document.getElementsByTagName('main')[0],
                    comments: {},
                    list: null,
                    init: function (id, container) {
                        var self = RLComments;
                        this.pageId = id;
                        if (container) {
                            this.container = container;
                        }
                        var script = document.createElement('script');
                        script.setAttribute('type', 'text/javascript');
                        script.onload = function () {
                            var path = api + 'comments/' + id;
                            //console.log(path);
                            self.dataRef = new Wilddog(path);
                            self.dataRef.authAnonymously(function (e, d) {
                                if (!e && d.token) {
                                    self.bind();
                                }
                            });
                        };
                        script.src = wdscript;
                        document.head.appendChild(script);
                    },
                    bind: function () {
                        var self = RLComments;
                        //this.dataRef.orderByChild('time').once('value', function (ss) {
                        //  console.log('on value ...', ss.val());
                        //  self.comments = ss.val();
                        //});
                        self.setHtml();
                        self.dataRef.on('child_added', function (ss2) {
                            // console.log('on child_added', ss2.val());
                            var cmt = ss2.val();
                            var li = document.createElement('li');
                            li.innerHTML = '<span class="rl-cmts-user-name">' + '' + '</span>' + cmt.content + ' <span class="rl-cmts-timestamp">' + (new Date(cmt.time)).toLocaleString() + '</span>'
                            self.list.appendChild(li);
                            setTimeout(function () {
                                li.classList.add('shown');
                            }, 160);
                        });
                    },
                    setHtml: function () {
                        var self = RLComments;

                        self.list = document.createElement('ul');
                        self.list.className = 'rl-cmts-list';
                        var html = '';
                        for (var k in this.comments) {
                            if (!this.comments.hasOwnProperty(k)) {
                                continue;
                            }
                            var cmt = this.comments[k];
                            html += '<li><span class="rl-cmts-user-name">' + '' + '</span> : ' + cmt.content + ' <span class="rl-cmts-timestamp">' + (new Date(cmt.time)).toLocaleString() + '</span></li>';
                        }
                        self.list.innerHTML = html;
                        this.container.appendChild(self.list);

                        var box = document.createElement('div');
                        box.className = 'rl-cmts-box';

                        box.innerHTML =
                                '<p><textarea placeholder="匿名发表..." id="rlCmtsInputContent"></textarea></p>' +
                                '<p><button id="rlCmtsSubmit">提交</button></p>';

                        this.container.appendChild(box);

                        var contentInput = document.getElementById('rlCmtsInputContent'),
                                submitBtn = document.getElementById('rlCmtsSubmit');

                        submitBtn.addEventListener('click', function () {
                            var content = contentInput.value;
                            if (content.length > 1000) {
                                return alert('评论内容不能超过1000个字符');
                            }
                            if (content.trim() == '') {
                                return alert('评论内容不能为空');
                            }
                            self.dataRef.push({
                                content: content,
                                time: Date.now()
                            });
                            contentInput.value = '';
                        });
                    }
                };
                (function () {
                    var id = CryptoJS.SHA1(location.host + location.pathname.replace(/\/$/, ''), 'rlcmt');
                    var container = document.getElementById('comments');
                    RLComments.init(id, container);
                })();
                $('header').css('visibility','hidden');
            },
            deactivate: function () {
                $('.rl-cmts-list').remove();
                $('.rl-cmts-box').remove();
            }
        }
    }
</script>
