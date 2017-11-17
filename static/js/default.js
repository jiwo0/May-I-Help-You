var nickname;
window.localStorage.setItem('name', '홍길동');
$(document).ready(function(){
  console.log("js파일이 정상작동합니다");
  setTimeout(function(){
    $.ajax({
      url : '/login',
      type : 'post',
      success : function (data) {
        this.id = data;
        $('#nickname').value = data;
        console.log("서버에서 닉네임을 받았습니다.");
      },
      error : function (xhr) {
        console.error("서버에서 닉네임을 받지 못했습니다");
      }
    });
  },2000);
    setTimeout(function(){
      if(document.getElementById('nickname').innerHTML == '&lt;%name%&gt;<span id="nomenclature" class="nanumFont">님</span>'){
        document.getElementById('nickname').innerHTML = localStorage.getItem('name') + '<span id="nomenclature" class="nanumFont">님</span>';
        console.log("닉네임이 받아지지 않아 자동값으로 설정됩니다.");
      }
    },3000);
});
