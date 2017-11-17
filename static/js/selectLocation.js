$(".list[data-selected=0]").css('backgroundColor','#ffffff');
$(".list[data-selected=0]").css('color','#ef4160');
$(".list[data-selected=1]").css('backgroundColor','#ef4160');
$(".list[data-selected=1]").css('color','#ffffff');
function clickCenter(){
  locationDo = document.getElementById('locationDo').textContent;
  locationGu = document.getElementById('locationGu').textContent;
  window.localStorage.setItem('locationDo',locationDo);
  window.localStorage.setItem('locationGu',locationGu);
  location.href='./mapList.ejs';
}
function clickFacility(){
  alert("서비스 준비 중입니다.");
  alert("장애인 관련 센터 페이지로 이동합니다.");
  clickCenter();
}
