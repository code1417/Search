window.onkeydown = function(ex){
    if(ex.keyCode === 13){
      Search();
    }
}


/*微博热搜
fetch('https://api.hmister.cn/weibo'，{
    .then(function (respsoneData) {
      var hotSea = document.getElementById('hotSea');
      hotSea.innerText = respsoneData.code; 
    })
    .catch(function (err) {
      console.error(err);
    })*/

//抓取一言诗句数据
fetch('https://v1.hitokoto.cn?c=i')
    .then(function (res){
      return res.json();
    })
    .then(function (data) {
      var sayIng0 = data.hitokoto; 
      localStorage.setItem("hit0", sayIng0);
    })
    .catch(function (err) {
      console.error(err);
    })

fetch('https://v1.hitokoto.cn?c=k')
    .then(function (res){
      return res.json();
    })
    .then(function (data) {
	  document.getElementById('loader_hit').remove();
      var sayIng1 = data.hitokoto; 
	  document.getElementById('hitokoto').innerHTML = sayIng1;
      localStorage.setItem("hit1", sayIng1);
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
	  localStorage.setItem("wea0", data.now.text);
	  localStorage.setItem("wea1", data.now.temp);
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


function Saying(){
	var hitokoto = localStorage.getItem("hit1");
    if(search_Engine == "bing"){
            window.open('https://cn.bing.com/search?q='+hitokoto);
    }else if(search_Engine == "baidu"){
            window.open('https://www.baidu.com/s?wd='+hitokoto);
    }else{
            window.open('https://www.google.com/search?q='+hitokoto);
    }
}





//获取时间
function Time()
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
  	document.getElementById("HM0").innerHTML=Hours+" : "+Minutes+"  "+Seconds+"\"";
    document.getElementById("MDD").innerHTML=Time.getMonth()+1+"."+Time.getDate() + " "+day;
}   
  

