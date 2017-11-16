function step1() {
  $('.sign-form').css("display", "");
  $('.sign-up_complete').css("display", "none");
  $('#step1').css("opacity", "1");
  $('#step3').css("opacity", "0.5");
}

//
// //회원가입 폼
// $("#submit_button").click(function() {
//     var id = $("#id").val()
//     var password = $("#password").val()
//     var name = $("#name").val()
//     console.log(id+'='+password+"+"+name)
//   var formData = {
//     name:$name.val(),
//     id:$id.val(),
//     password:$password.val(),
//     birthday:$birthday.val(),
//     gender:$gender.val(),
//     phoneNumber:$phoneNumber.val()
//     };
//   $("#sign_form").validate({
//     rules: {
//       name: {
//         required: true,
//       },
//       password: {
//         required: true,
//       },
//       password_confirm: {
//         required: true,
//         equalTo: "#password",
//       },
//       id: {
//         required: true,
//       },
//       birthday: {
//         required: true,
//       },
//       phoneNumber: {
//         required: true
//       }
//     },
//     messages: {
//       name: "이름을 입력해 주세요",
//       id: "아이디를 입력해 주세요",
//       password: "암호를 입력해 주세요",
//       confirm_password: {
//         required: "암호를 한 번 더 입력해 주세요",
//         equalTo: "암호가 일치하지 않습니다"
//       },
//       birthday: "생년월일을 입력해 주세요",
//       phoneNumber: "전화번호를 입력해 주세요"
//     }
//   });
//   $.ajax({
//     type: "POST",
//     url: "/register",
//     cache: false,
//     data: {"id":id, "password":password, "username": name},
//     success: complete,
//     error: onError
//   });
// });



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
