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
oUser.onblur = (function() {
    uVal = oUser.value;
    uReg = /^1[0-9]{10}|\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    uSet = uVal.match(uReg);

    if (uSet) {
        uErr.innerHTML = '';
    } else if (uVal == "") {
        uErr.innerHTML = '邮箱/手机号/用户名不能为空';
    } else {
        uErr.innerHTML = '请输入正确的邮箱/手机号/用户名';
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
    } else if (pVal == "") {
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
        alert('登陆成功')

    } else if (uSet) {
        pErr.innerHTML = '密码不能为空';
    } else if (pSet) {
        uErr.innerHTML = '邮箱/手机号/用户名不能为空';
    } else {
        uErr.innerHTML = '邮箱/手机号/用户名不能为空';
        pErr.innerHTML = '密码不能为空';
    }
}
