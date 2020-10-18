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
if(width < 1100){
	search.style.cssText="margin: 0px;padding: 3px 10px 0px;background: rgb(0, 0, 0) border-box;overflow: hidden;border-radius: 0px;display: flex;z-index: 2;box-shadow: 0 10px 20px rgba(0, 0, 0, 0.6);transition:box-shadow 0.3s;-webkit-transition:box-shadow 0.3s;position: fixed;top: 20% ;left: 50%; height:40px; width: 450px;visibility: visible;top:auto; bottom:0px; left:0px; width:100%; ";
	input.style.width = width - 50 + "px";
}else{
	search.style.cssText="margin: 0px;padding: 3px 10px 0px;background: rgb(0, 0, 0) border-box;overflow: hidden;border-radius: 20px;display: flex;z-index: 2;box-shadow: 0 10px 20px rgba(0, 0, 0, 0.6);transition:box-shadow 0.3s;-webkit-transition:box-shadow 0.3s;position: fixed;top: 20% ;left: 50%; height:40px; width: 450px;visibility: visible;top:20%; bottom:auto; left:50%; width:450px; ";
	input.style.width = "423px";
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
  	document.getElementById("HM0").innerHTML=Hours+":"+Minutes+":"+Seconds;
    document.getElementById("MDD").innerHTML=Time.getMonth()+1+"."+Time.getDate() + " "+day;
}   window.setInterval("time()",1000);
  
  
    
	
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
})
