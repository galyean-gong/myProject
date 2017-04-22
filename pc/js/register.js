//获取用户手机号

$(function() {
    var uVal = null;
    var uReg = null;
    var uSet = null;
    $('#user').blur(function() {
        uVal = $('#user').val();
        uReg = /^1[0-9]{10}/g;
        uSet = uVal.match(uReg);
        console.log(uVal)
        if (uSet) {
            $('.user-err').text('');
        } else if (uVal == "") {
            $('.user-err').text('手机号不能为空');
        } else {
            $('.user-err').text('请输入正确的手机号码');
        }
    });
    $('#user').focus(function() {
        $('.user-err').text('');
    });


    var pVal = null;
    var pReg = null;
    var pSet = null;
    $('#pass').blur(function() {
        pVal = $('#pass').val();
        pReg = /^[a-zA-Z0-9]\w{5,17}$/;
        pSet = pVal.match(pReg);
        if (pSet) {
            $('.pass-err').text('')
        } else if (pVal == "") {
            $('.pass-err').text('密码不能为空').css('color', '#A48667')
        } else {
            $('.pass-err').text('请输入至少6位密码').css('color', '#A48667')
        }

    });
    $('#pass').focus(function() {
        $('.pass-err').text('密码长度为6~16位').css('color', '#999');
    });
    var rVal = null;
    var rReg = null;
    var rSet = null;
    $('#reday-pass').blur(function() {
        rVal = $('#reday-pass').val();
        rReg = /^[a-zA-Z0-9]\w{5,17}$/;
        rSet = rVal.match(rReg);
        if (rSet) {
            $('.reday-pass-err').text('')
        } else if (rVal == "") {
            $('.reday-pass-err').text('密码不能为空').css('color', '#A48667')
        } else {
            $('.reday-pass-err').text('请填写6位确认密码').css('color', '#A48667')
        }

    });
    $('#reday-pass').focus(function() {
        $('.reday-pass-err').text('').css('color', '#A48667');
    });


    $('#btn').click(function() {
        if (pVal != rVal) {
            alert('请输入相同密码')
        } else if (uSet && rSet && pSet) {
            alert('注册成功')
        } else {
            alert('请填写完整信息')
        }
    });







});
//	获取验证码
var oSend = document.getElementById('phone-code');
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
    //判断密码

