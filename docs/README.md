# Issues-LordYao

## ToC

- [创刊-20240131](https://yaoqs.github.io/Issues-LordYao/创刊-20240131)  ([查看原文](https://github.com/yaoqs/Issues-LordYao/issues/1))

<!--JQuery-->
<script type="text/javascript" src="https://cdn.staticfile.org/jquery/3.7.0/jquery.min.js"></script>
<script type="text/javascript" src="https://cdn.staticfile.org/jquery.qrcode/1.0/jquery.qrcode.min.js"></script>

<!--d3js-->
<script src="https://d3js.org/d3.v7.min.js"></script>
<footer>
    <hr />
    <span id="donate"><a href="https://yaoqs.github.io/Donate" title="大吉大利 今晚吃鸡">Donate & Reward </a></span><br />
    <span>*Corresponding Author: <a id="author" href="https://github.com/yaoqs">LordYao</a> &lt;Email:
        350788415@qq.com&gt;<br />
        Copyright &copy;2023-<span id="year"></span>.All Rights Reserved.CC 4.0 BY-NC-SA</span><br />
    <span> Designed by <a href="https://yaoqs.github.io" target="_blank">LordYao</a>.</span>
    Powered by <a href="https://pages.github.com/" target="_blank">Github Pages</a>.
    <div id="qrcode"></div>
    <p>
        <script type="text/javascript" src="https://cdn.jsdelivr.net/gh/yaoqs/donate-plugin/zanzhu_yaoqs.min.js"></script>
        <script>
            $(function () {
                new Rewardtip(
                    {
                        "tiptext": "谢谢支持/Thanks...",
                        "tipimg": { img: "/images/ali.gif", width: "50px", height: "50px" },  //可选
                        "more": "https://yaoqs.github.io/Donate",
                        "tipshow": "<img src='/images/ali.gif'/>",                     //可选
                        "list": [
                            { name: "微信收款码", qrimg: "/images/微信收款码.png" },
                            { name: "微信打赏码", qrimg: "/images/微信打赏码.png" },
                            { name: "支付宝收款码", qrimg: "/images/支付宝收款码.jpg" },
                            { name: "支付宝红包码", qrimg: "/images/支付宝红包码.jpg" }
                        ],
                        "link": [
                            { name: "paypal", desc: "paypal.me/LordYao", link: "https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=243292490@qq.com&currency_code=USD&amount=1&return=http://yaoqs.github.com/about&item_name=LordYao%27s%20Blog&undefined_quantity=1" }
                        ]/*,
                      fn:(function(){
                          return alert("解放思想，发展生产力");
                      })()*/
                    });
            })

            jQuery(document).ready(() => {
                d3.select("body").select("#year").text(() => { return new Date(Date.now()).getFullYear() })
                d3.select("body").select("footer").append("div").attr("id", "qrcode")
                $('footer > #qrcode').qrcode({ width: 173, height: 173, text: document.URL })
            })
        </script>
</footer>