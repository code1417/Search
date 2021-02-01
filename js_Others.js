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


function LoadHis() {
	$.each(history_Log, function (i, item) {
		$('#hisBox').append('<p><b>' + item.date + '</b><br>' + item.con + '</p>');
	});
	$('#history').append('<p style="text-align:center;"><b>' + history_Log[0].date + '</b><br>' + history_Log[0].con + '</p>');
}



//退出聚焦效果
function Show() {
	$("#blurback").fadeOut(500);
	$("#blackback").fadeOut(500);
	$("#hisBox").fadeOut(500);
	$("#HM0").attr("class", "SLIP_OUT");
	$("#HM0").fadeOut(500);
	$(".block").fadeIn(400);
	$("#left").fadeIn(400);
	if (hide_Mode == true) {
		$("#Search").fadeIn(400);
		hide_Mode = false;
	} else if (hide_Mode == false) {
		$("#Search").attr("class", "Off");
	}
}

function ShowHis() {
	$("#blackback").fadeIn(300);
	$("#blurback").fadeIn(300);
	$("#hisBox").fadeIn(300);
}

//聚焦效果
function Hide() {
	$("#Search").fadeOut();
	$(".block").fadeOut();
	$("#HM0").fadeIn(500);
	$("#HM0").attr("class", "SLIP_IN");
	hide_Mode = true;
	$("#blurback").fadeIn(200);
	$("#left").fadeOut();
}


function TurnManger(obj) {
	if (turn_Mode == 1) {
		setTimeout(function () {
			TurnTips('洛阳今天' + localStorage.getItem("wea0") + '，气温 ' + localStorage.getItem("wea1") + '℃');
		}, function () { if (obj == 'auto') { return 2000; } else { return 0; } });
		turn_Mode = 2;
	} else if (turn_Mode == 2) {
		setTimeout(function () {
			TurnTips(localStorage.getItem("hit0"));
		}, function () { if (obj == 'auto') { return 2000; } else { return 0; } });
		turn_Mode = 1;
	}
}

function TurnTips(content) {
	if (content) {
		$('#turntips').attr('class', 'TurnStart');
		setTimeout(function () {
			document.getElementById('turntips').innerText = (content);
			$('#turntips').attr('class', 'TurnEnd');
		}, 300);
	} else {
		document.getElementById('#turntips').innerText = ('_NONE_');
	}
}


//获取时间
function GetFormatDate(){
    var nowDate = new Date();
    var day;
    var month = nowDate.getMonth() + 1 < 10 ? "0" + (nowDate.getMonth() + 1) : nowDate.getMonth() + 1;
    var date = nowDate.getDate() < 10 ? "0" + nowDate.getDate() : nowDate.getDate();
    var hour = nowDate.getHours()< 10 ? "0" + nowDate.getHours() : nowDate.getHours();
    var minute = nowDate.getMinutes()< 10 ? "0" + nowDate.getMinutes() : nowDate.getMinutes();
    var second = nowDate.getSeconds()< 10 ? "0" + nowDate.getSeconds() : nowDate.getSeconds();
    //year + "-" + month + "-" + date+" "+hour+":"+minute+":"+second;
	switch (nowDate.getDay()) {
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
	document.getElementById("HM").innerHTML=hour+":"+minute;
	document.getElementById("HM0").innerHTML=hour+":"+minute+"  "+second+"\"";
	document.getElementById("MDD").innerHTML=month+"."+date+ " "+day;
}