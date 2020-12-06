window.onkeydown = function(ex){
    if(ex.keyCode === 13){
      search();
    }
}

//窗口宽度判断
function searchpos(){
var width = document.documentElement.clientWidth;
var search = document.getElementById('Search');
var input = document.getElementById('input');
var right = document.getElementById('bookmasks');
if(width < 1000){
	search.style.cssText +="background: rgba(255,255,255, 0.1) border-box;border-radius: 0px;box-shadow: 0 0px 10px rgba(0, 0, 0, 0.4); height:40px ;top:auto; bottom:0px; left:0px; width:100%;"
	input.style.width = width - 50 + "px";
	right.style.display = "none";
}else{
	search.style.cssText +="background: rgba(255, 255, 255, 0.15) border-box;border-radius: 20px;box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);height:40px;top:18%; bottom:auto; left:55%; width:450px;";
	input.style.width = "420px";
	right.style.display = "inline";
}
}

//窗口大小改变时执行
window.onresize = function(){
    searchpos();
};



//抓取一言数据
fetch('https://v1.hitokoto.cn')
    .then(function (res){
      return res.json();
    })
    .then(function (data) {
      var hitokoto = document.getElementById('hitokoto');
      document.getElementById('loader_hit').remove();
      hitokoto.innerText = data.hitokoto; 
    })
    .catch(function (err) {
      console.error(err);
    })

//和风天气
fetch('https://devapi.heweather.net/v7/weather/now?location=101180901&key=90d7d22f2b864755af5f5f590129bc8a')
    .then(function (res){
      return res.json();
    })
    .then(function (data){
      document.getElementById('loader_wea').remove();
      document.getElementById('wea').innerText = data.now.text+" ｜ "+data.now.temp+" ℃ ｜ 湿度："+data.now.humidity+" % ｜ 云量："+data.now.cloud+" %"; 
      document.getElementById('updateTime').innerText = "更新时间："+data.updateTime; 
      document.getElementById('city').innerText = "天气：洛阳";
    })
    .catch(function (err) {
      console.error(err);
    })


/*fetch('http://xiaoxi.6my.xyz/api/today.php')
    .then(function (res){
      return res.text();
    })
    .then(function (res) {
      document.getElementById('loader_his').remove();
      var his = document.getElementById('his');
      his.innerText = res;
    })*/


function saying(){
        if(SearchE == "bing"){
                window.location.href = 'https://cn.bing.com/search?q='+hitokoto.innerText;
        }else if(SearchE == "baidu"){
                window.location.href = 'https://www.baidu.com/s?wd='+hitokoto.innerText;
        }else{
                window.location.href = 'https://www.google.com/search?q='+hitokoto.innerText;
        }
}


time();
function time()
{
	var Time = new Date();
    var Hours, Minutes, day, Seconds;

    if (Time.getHours().toString().length == 1){
       Hours = "0" + Time.getHours().toString();
   }else{
      Hours = Time.getHours().toString();
   }
    
   if (Time.getMinutes().toString().length == 1){
       Minutes = "0" + Time.getMinutes().toString();
  }else{
     Minutes = Time.getMinutes().toString();
  }

  if (Time.getSeconds().toString().length == 1){
       Seconds = "0" + Time.getSeconds().toString();
  }else{
     Seconds = Time.getSeconds().toString();
  }

  switch (Time.getDay()) {
    case 0:
      day = "周日";
      break;
    case 1:
      day = "周一";
      break;
    case 2:
      day = "周二";
      break;
    case 3:
      day = "周三";
      break;
    case 4:
      day = "周四";
      break;
    case 5:
      day = "周五";
      break;
     case 6:
      day = "周六";
  }
    document.getElementById("HM").innerHTML=Hours+":"+Minutes;
  	document.getElementById("HM0").innerHTML=Hours+":"+Minutes+" "+Seconds+"\"";
    document.getElementById("MDD").innerHTML=Time.getMonth()+1+"."+Time.getDate() + " "+day;
}   window.setInterval("time()",500);
  
  
    
	
$(".content").click(function (e) {

  let button_left = $(this).offset().left; 
  let button_top = $(this).offset().top; 
  let button_width = $(this).width();
  let button_height = $(this).height(); 

  let ripple_width = 0;
  ripple_width = button_width > button_height ? button_width : button_height;

  let ripple_x = e.pageX - button_left - ripple_width / 2;
  let ripple_y = e.pageY - button_top - ripple_width / 2;

  $(this).prepend("<div class='ripple'></div>");

  $(".ripple")
    .css({
      width: ripple_width + 'px',
      height: ripple_width + 'px',
      top: ripple_y + 'px',
      left: ripple_x + 'px'
    })
    .addClass("rippleEffect");
});
