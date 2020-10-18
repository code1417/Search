$(document).ready(function(){
        //判断窗口大小
        searchpos();

	//笔记事件
	$('#note').click(function(){
		$("#finishbtn").fadeIn(0);
		document.getElementById('note').style.bottom  = "0px";
	})
	//完成事件
	$('#finishbtn').click(function(){
		$("#finishbtn").fadeOut(0);
		finish();
	})
	function finish(){
        var note = document.getElementById('note').value;
        localStorage.setItem("note", note);
        document.getElementById('finishbtn').style.display  = "none";
        document.getElementById('note').style.bottom  = "18px";
	} 
	window.onbeforeunload = function(){finish();};
	document.getElementById('note').value=localStorage.getItem("note");

	//登录动画
	$("#left").fadeIn(500);
	$("#Search").fadeIn(500);
	//显示窗口
	$('#HM').click(function(){
    	$("#left").fadeOut();
    	$("#Search").fadeOut();
    	$("#HM0").fadeIn(500);
    	$("#blackback").fadeIn(500);
		$("#c1").fadeOut();
		$("#c2").fadeOut();
		$("#c3").fadeOut();
		$("#c4").fadeOut();
		$("#c5").fadeOut();
	});
	//隐藏后显示
	function show(){
    	$("#HM0").fadeOut(0);
		$("#left").fadeIn(0,function(){
			$("#c1").fadeIn(200);
			$("#c2").delay(80).fadeIn(300);
			$("#c3").delay(160).fadeIn(300);
			$("#c4").delay(240).fadeIn(300);
			$("#c5").delay(320).fadeIn(300);
		});
    	$("#Search").fadeIn(500);
        $("#blackback").fadeOut(100);
	}
	$('#HM0').click(function(){ show(); });
	$('#blackback').click(function(){ show(); });

        //搜索切换
        $("#icobaidu").click(function(){ searchchange(); });
        $("#icogoogle").click(function(){  searchchange();  });
        $("#icobing").click(function(){  searchchange();  });
        $("#ico-baidu").click(function(){ searchchangeto("baidu"); });
        $("#ico-google").click(function(){  searchchangeto("google");  });
        $("#ico-bing").click(function(){  searchchangeto("bing");  });
        //位置安全
        $("#input").click(function(){ searchchangeSafety(); });
});

//搜索全局变量和切换状态
var SearchE = "baidu";
var SearchMode = "off";

function searchchangeSafety(){
        if(SearchMode == "on"){ searchchangeto("!"); }
}

function searchchangeto(ico){
        SearchMode = "off";
        if(ico == "baidu"){
                $("#icobing").fadeOut(0);
                $("#icogoogle").fadeOut(0);
                $("#icobaidu").fadeIn(400);
                SearchE = "baidu";
        }else if(ico == "google"){
                $("#icobing").fadeOut(0);
                $("#icobaidu").fadeOut(0);
                $("#icogoogle").fadeIn(400);
                SearchE = "google";
        }else if(ico == "bing"){
                $("#icogoogle").fadeOut(0);
                $("#icobaidu").fadeOut(0);
                $("#icobing").fadeIn(400);
                SearchE = "bing";
        }
        else if(ico == "!"){
                searchchangeto(SearchE);
        }

        if(ico != "!"){
        $("#searches").animate({width:'40px',opacity:'0'},200);
        $("#searches").fadeOut(0);
        $("#input").animate({width:'+=105px',left:'-=105px'},400);
        }
}

function searchchange(){
        SearchMode = "on";
        $("#input").animate({width:'-=105px',left:'+=105px'},300);
        $("#searches").fadeIn(0);
        $("#searches").animate({width:'145px',opacity:'1'},300);
        $("#icobing").fadeOut(0);
        $("#icobaidu").fadeOut(0);
        $("#icogoogle").fadeOut(0);
}

//窗口宽度判断，确定Search位置
var width = document.documentElement.clientWidth;
if(width < 1100){
	$("#Search").style.cssText="margin: 0px;padding: 3px 10px 0px;background: rgb(0, 0, 0) border-box;overflow: hidden;border-radius: 0px;display: flex;z-index: 2;box-shadow: 0 10px 20px rgba(0, 0, 0, 0.6);transition:box-shadow 0.3s;-webkit-transition:box-shadow 0.3s;position: fixed;top: 20% ;left: 50%; height:40px; width: 450px;visibility: visible;top:auto; bottom:0px; left:0px; width:100%; ";
	$("#input").style.width = width - 50 + "px";
}else{
	$("#Search").style.cssText="margin: 0px;padding: 3px 10px 0px;background: rgb(0, 0, 0) border-box;overflow: hidden;border-radius: 20px;display: flex;z-index: 2;box-shadow: 0 10px 20px rgba(0, 0, 0, 0.6);transition:box-shadow 0.3s;-webkit-transition:box-shadow 0.3s;position: fixed;top: 20% ;left: 50%; height:40px; width: 450px;visibility: visible;top:20%; bottom:auto; left:50%; width:450px; ";
	$("#input").style.width = "423px";
}

//窗口大小改变时执行，改变Search位置
window.onresize = function(){
var width = document.documentElement.clientWidth;
if(width < 1100){
	$("#Search").style.cssText="margin: 0px;padding: 3px 10px 0px;background: rgb(0, 0, 0) border-box;overflow: hidden;border-radius: 0px;display: flex;z-index: 2;box-shadow: 0 10px 20px rgba(0, 0, 0, 0.6);transition:box-shadow 0.3s;-webkit-transition:box-shadow 0.3s;position: fixed;top: 20% ;left: 50%; height:40px; width: 450px;visibility: visible;top:auto; bottom:0px; left:0px; width:100%; ";
	$("#input").style.width = width - 50 + "px";
}else{
	$("#Search").style.cssText="margin: 0px;padding: 3px 10px 0px;background: rgb(0, 0, 0) border-box;overflow: hidden;border-radius: 20px;display: flex;z-index: 2;box-shadow: 0 10px 20px rgba(0, 0, 0, 0.6);transition:box-shadow 0.3s;-webkit-transition:box-shadow 0.3s;position: fixed;top: 20% ;left: 50%; height:40px; width: 450px;visibility: visible;top:20%; bottom:auto; left:50%; width:450px; ";
	$("#input").style.width = "423px";
}
};

function search(){
        if(SearchE == "bing"){
                window.location.href = 'https://cn.bing.com/search?q='+document.getElementById("input").value;
        }else if(SearchE == "baidu"){
                window.location.href = 'https://www.baidu.com/s?wd='+document.getElementById("input").value;
        }else if(SearchE == "google"){
                window.location.href = 'https://www.google.com/search?q='+document.getElementById("input").value;
        }
}


