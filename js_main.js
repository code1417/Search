window.onkeydown = function(ex){
    if(ex.keyCode === 13){
      search();
    }
}



/*fetch('https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1')
    .then(function (res){
      return res.json();
    })
    .then(function (data) {
      var about = document.getElementById('about');
      about.innerText = data.images[0].copyright; 
    })
    .catch(function (err) {
      console.error(err);
    })*/

//抓取一言数据
fetch('https://v1.hitokoto.cn')
    .then(function (res){
      return res.json();
    })
    .then(function (data) {
      document.getElementById('loader_hit').remove();
      var sayIng = data.hitokoto; 
      
      document.getElementById('hitokoto').innerHTML = sayIng;
      localStorage.setItem("hit", sayIng);
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


function saying(){
        if(SearchE == "bing"){
                window.location.href = 'https://cn.bing.com/search?q='+hitokoto.innerText;
        }else if(SearchE == "baidu"){
                window.location.href = 'https://www.baidu.com/s?wd='+hitokoto.innerText;
        }else{
                window.location.href = 'https://www.google.com/search?q='+hitokoto.innerText;
        }
}


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
}   
  

