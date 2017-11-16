function step1() {
  $('.sign-form').css("display", "");
  $('.sign-up_complete').css("display", "none");
  $('#step1').css("opacity", "1");
  $('#step3').css("opacity", "0.5");
}
function onlyNumber(obj) {
    $(obj).keyup(function(){
         $(this).val($(this).val().replace(/[^0123456789-]/g,""));
    });
}
function checkPasswordMatch() {
    var password = $("#password").val();
    var confirmPassword = $("#password_confirm").val();

    if (password != confirmPassword)
        $("#confirm-message").html("비밀번호가 맞지 않습니다");
    else
        $("#confirm-message").html("");

}



function complete() {
  onSuccess();
  $('.sign-form').css("display", "none");
  $('.sign-up_complete').css("display", "");
  $('#step1').css("opacity", "0.5");
  $('#step3').css("opacity", "1");
}

function onSuccess(json, status) {
  alert($.trim(json));
}

function onError(data, status) {
  alert("error");
}

function onLogin() {
    var id = $("#id").val()
    var password = $("#password").val()
    console.log(id+'='+password+"+"+name)
    $.ajax({
        type: "POST",
        url: "/login",
        cache: false,
        data: {"id":id, "password":password},
        success: onSuccess,
        error: onError
    });
}

function goNext() {
    var id = $("#id").val()
    var password = $("#password").val()
    var name = $("#name").val()
    var password = $('#password').val()
    var birthday = $('#birthday').val()
    var gender = $('#gender').val()
    var phoneNumber = $('#phoneNumber').val()
    console.log(id+'='+password+"+"+name)
    $.ajax({
        type: "POST",
        url: "/register",
        cache: false,
        data: {"id":id, "password":password, "username": name,"birthday":birthday,"gender":gender,"phoneNumber":phoneNumber},
        success: complete,
        error: onError
    });
}
