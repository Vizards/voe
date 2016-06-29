<template>
    <div class="donate-list">
        <div id="DonateText" class="tr3">Donate</div>
        <ul id="donateBox" class="list pos-f tr3">
            <li id="PayPal">PayPal</li>
            <li id="BTC"><button id="BTCBn"  data-clipboard-target="#btc-key" alt="Copy to clipboard">Bitcoin</button></li>
            <li id="AliPay">AliPay</li>
            <li id="WeChat">WeChat</li>
        </ul>
        <div id="QRBox" class="pos-f left-100">
            <div id="MainBox"></div>
        </div>
        <!-- Bitcoin 账号 -->
        <input id="btc-key" type="text" value="1LVPGPkJxndGJe4KzeY9afLRdSeeSPnW5E" readonly="readonly">
    </div>
    <div class="navigation row">
        <div class="col-sm-6 prev-post">
            <a id="prev-post" href="">
                <div class="title-img">
                    <h4 id="prev-title"></h4>
                    <img src="" id="prev-img">
                </div>
                <p id="prev-description"></p>
            </a>
        </div>
        <div class="col-sm-6 next-post">
            <a href="" id="next-post">
                <div class="title-img">
                    <h4 id="next-title"></h4>
                    <img src="" id="next-img">
                </div>
                <p id="next-description"></p>
            </a>
        </div>
    </div>
</template>
<script>
    module.exports = {
        props:['post_info']
    };
</script>