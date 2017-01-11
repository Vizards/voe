<template>
</template>
<style>
</style>
<script>
    module.exports = {
        route: {
            data: function () {
                $('header').css('visibility','hidden');
                document.title = "匿名板 - FlowMine";
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
                            var li = document.createElement('div');
                            if (cmt.title == undefined ) {
                                cmt.title = ''
                            }
                            var cmtContent = cmt.content.replace(/\n/g,"<br/>");
                            // console.log(cmt.content);
                            li.innerHTML = '<span class="rl-cmts-title">' + cmt.title + '</span>' + '<p>' + cmtContent + '</p>' + ' <span class="rl-cmts-timestamp">' + (new Date(cmt.time)).toLocaleString() + '</span>'
                            self.list.appendChild(li);
                            setTimeout(function () {
                                li.classList.add('shown');
                            }, 160);
                        });
                    },
                    setHtml: function () {
                        var anonymous = document.createElement('div');
                        anonymous.id = "anonymous";
                        var self = RLComments;
                        self.list = document.createElement('div');
                        self.list.className = 'rl-cmts-list';
                        var html = '';
                        for (var k in this.comments) {
                            if (!this.comments.hasOwnProperty(k)) {
                                continue;
                            }
                            var cmt = this.comments[k];
                            html += '<li><span class="rl-cmts-title">' + 'cmt.title' + '</span> : ' + cmt.content + ' <span class="rl-cmts-timestamp">' + (new Date(cmt.time)).toLocaleString() + '</span></li>';
                        }
                        self.list.innerHTML = html;
                        this.container.appendChild(anonymous);
                        anonymous.appendChild(self.list);
                        var box = document.createElement('div');
                        box.className = 'rl-cmts-box';
                        box.innerHTML =
                                '<input type="text" id="rlCmtsInputTitle" placeholder=" 标题(可不填)"/>' +
                                '<textarea placeholder=" 匿名发表..."id="rlCmtsInputContent"></textarea>' +
                                '<button id="rlCmtsSubmit"><i class="fa fa-check"></i></button>';
                        anonymous.appendChild(box);
                        var titleInput = document.getElementById('rlCmtsInputTitle'),
                                contentInput = document.getElementById('rlCmtsInputContent'),
                                submitBtn = document.getElementById('rlCmtsSubmit');
                        submitBtn.addEventListener('click', function () {
                            var title = titleInput.value.trim();
                            var content = contentInput.value;
                            if (title.length > 30) {
                                return alert('标题不能超过 30 个字符');
                            }

                            if (content.length > 300) {
                                return alert('留言内容不能超过 300 个字符');
                            }
                            if (content.length < 20) {
                                return alert('留言内容不能少于 20 个字符')
                            }
                            if (content.trim() == '') {
                                return alert('留言内容不能为空');
                            }
                            self.dataRef.push({
                                title: title,
                                content: content,
                                time: Date.now()
                            });
                            localStorage.title = title;
                            contentInput.value = '';
                        });
                    }
                };
                (function () {
                    var id = CryptoJS.SHA1(location.host + location.pathname.replace(/\/$/, ''), 'rlcmt');
                    var container = document.getElementById('comments');
                    RLComments.init(id, container);
                })();
            },
            deactivate: function () {
                $('.rl-cmts-list').remove();
                $('.rl-cmts-box').remove();
                $('#anonymous').remove();
            }
        }
    }
</script>
