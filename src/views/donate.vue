<template>
    <loading v-if="showload"></loading>
    <div id="DonateText" class="tr3">Donate</div>
    <ul id="donateBox" class="list pos-f tr3">
        <li id="PayPal">PayPal</li>
        <li id="BTC" data-footnote="Copy addres and show QRCod"><button id="BTCBn"  data-clipboard-target="#btc-key" alt="Copy to clipboard">Bitcoin</button></li>
        <li id="AliPay">AliPay</li>
        <li id="WeChat">WeChat</li>
    </ul>
    <div id="QRBox" class="pos-f left-100">
        <div id="MainBox"></div>
    </div>
    <!-- Bitcoin 账号 -->
    <input id="btc-key" type="text" value="1LVPGPkJxndGJe4KzeY9afLRdSeeSPnW5E" readonly="readonly">
</template>
<script>
    module.exports = {
        route:{
            data:(function () {
                // 获取链接地址 GET 参数
                String.prototype.getQuery = function(name) {
                    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
                    var r = this.substr(this.indexOf("\?")+1).match(reg);
                    if (r!=null) return unescape(r[2]); return null;
                };
                var strHref = location.href.substring(location.href.indexOf("?")+1);
                var ppitem_name		= strHref.getQuery('item');	//项目名称
                var donatrNo	=	strHref.getQuery('price');	//金额

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
            })
        }
    }
</script>
