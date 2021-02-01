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







