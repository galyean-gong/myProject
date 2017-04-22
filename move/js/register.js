$(function() {
    //获取用户名和密码
    var oUser = document.getElementById('user');
    var oPass = document.getElementById('pass');
    var oBtn = document.getElementById('btn');
    var uErr = document.getElementById('user-err');
    var pErr = document.getElementById('pass-err');
    var pVal = null;
    var pReg = null;
    var pSet = null;
    var uVal = null;
    var uReg = null;
    var uSet = null;

    //用户焦点

    //用户名的正则
    oUser.onblur = (function(a, b, c) {
        uVal = oUser.value;
        uReg = /^1[0-9]{10}|\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        uSet = uVal.match(uReg);
        console.log(uSet);
        console.log(uVal)
        if (uSet) {
            uErr.innerHTML = '';
        } else if (uVal == "") {
            uErr.innerHTML = '手机号不能为空';
        } else {
            uErr.innerHTML = '请输入正确的手机号';
        }
    });
    oUser.onfocus = (function() {
        uErr.innerHTML = '';
    });
    //密码的正则
    oPass.onblur = (function() {
        pVal = oPass.value;
        pReg = /^[a-zA-Z0-9]\w{5,17}$/;
        pSet = pVal.match(pReg);
        if (pSet) {
            pErr.innerHTML = '';
        } else if (pVal == '') {
            pErr.innerHTML = '密码不能为空';
        } else {
            pErr.innerHTML = '密码最低位数为6位';
        }
    });
    oPass.onfocus = (function() {
        pErr.innerHTML = '';
    });
    //按钮事件
    oBtn.onclick = function() {
        if (uSet && pSet) {
            alert('注册成功')
        } else {
            uErr.innerHTML = '手机号不能为空';
            pErr.innerHTML = '密码不能为空';
        }
    }



});
//  获取验证码
var oSend = document.getElementById('ver-code-btn');
console.log(oSend)
var count = 60;
var timer = null;
oSend.onclick = function() {
    clearInterval(timer);
    var that = this;
    this.disabled = true;
    timer = setInterval(sendTextMessage, 500);

    function sendTextMessage() {
        count--;
        if (count >= 0) {
            that.innerHTML = '还剩余' + count + '秒';
            that.style.color = '#A48667';
            that.style.border = '1px solid #A48667';
            that.style.background = '#f9f9f9'
        } else {
            that.innerHTML = '重新发送短信';
            that.disabled = false;
            clearInterval(timer);
            count = 60;
        }
    }
}
