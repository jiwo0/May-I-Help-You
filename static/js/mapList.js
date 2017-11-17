function choice(obj){
  var titlename = obj.textContent;
  var adress = $(obj).siblings('p:first')[0].textContent;
  address = adress.slice(5);
  var tell = $(obj).siblings('p:last')[0].textContent;
  tel = tell.slice(7);
  window.localStorage.setItem('titlename',titlename)
  window.localStorage.setItem('address',address);
  window.localStorage.setItem('tel',tel);
  console.log("성공적으로 저장했습니다.");
  console.log(localStorage.getItem('titlename') + " " + localStorage.getItem('address') + " " + localStorage.getItem('tel'));
  location.href= './map.ejs'
}
