$(document).ready(function(){
time();
window.setInterval("time()",500);


$(function(){
  $('#left').mouseenter(function(){
    $(this).attr("class", "Open");
    $('.content').attr("class", "Open content");
    $('#HM').attr("class", "Open");
    $('#MDD').attr("class", "Open");
  });
  $('#left').mouseleave(function(){
    $(this).attr("class", "Close");
    $('.content').attr("class", "Close content");
    $('#HM').attr("class", "Close");
    $('#MDD').attr("class", "Close");
  });


  //$("#turntips").
});




	//显示窗口
	$('#HM').click(function(){ hide(); });

		$('#HM0').click(function(){ show(); });
		$('#blurback').click(function(){ show(); });
                $('#blackback').click(function(){ show(); });

        //搜索切换
        $("#icobaidu").mouseenter(function(){  searchchange();  });
        $("#icogoogle").mouseenter(function(){  searchchange();  });
        $("#icobing").mouseenter(function(){  searchchange();  });
		$("#searches").mouseleave(function(){  searchchangeSafety();  });
        $("#ico-baidu").click(function(){  searchchangeto("baidu");  });
        $("#ico-google").click(function(){  searchchangeto("google");  });
        $("#ico-bing").click(function(){  searchchangeto("bing");  });
        //位置安全
        $("#input").click(function(){ searchchangeSafety(); });


        $("#input").click(function(){  SearchOn();  });

        $('input').bind('input propertychange', function(){  SearchOn();  });

});

//搜索全局变量和切换状态
var SearchE = "baidu";
var SearchMode = "off";

var hideMode = false;


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
        $("#searches").animate({width:'100px',opacity:'0'},200);
        $("#searches").fadeOut(0);
        $("#input").animate({width:'+=50px',left:'-=50px'},300);
        }
}

function searchchange(){
        SearchMode = "on";
        $("#icobing").fadeOut(0);
        $("#icobaidu").fadeOut(0);
        $("#icogoogle").fadeOut(0);
        $("#input").animate({width:'-=50px',left:'+=50px'},300);
        $("#searches").fadeIn(0);
        $("#searches").animate({width:'145px',opacity:'1'},300);
}

function search(){
        if(SearchE == "bing"){
                window.location.href = 'https://cn.bing.com/search?q='+document.getElementById("input").value;
        }else if(SearchE == "baidu"){
                window.location.href = 'https://www.baidu.com/s?wd='+document.getElementById("input").value;
        }else if(SearchE == "google"){
                window.location.href = 'https://www.google.com/search?q='+document.getElementById("input").value;
        }
}
//隐藏
function hide(){
    	$("#Search").fadeOut();
		$(".block").fadeOut();
    	$("#HM0").fadeIn(500);
        hideMode = true;
    	$("#blurback").fadeIn(200);
		$("#left").fadeOut();
}
//隐藏后显示
function show(){
        $("#blurback").fadeOut(200);
        $("#blackback").fadeOut(200);
        $("#hisBox").fadeOut(300);
        $("#HM0").fadeOut(200);
	$(".block").fadeIn(200);
	$("#left").fadeIn(200);
if(hideMode == true){
        $("#Search").fadeIn(200);
        hideMode = false;
}else if(hideMode == false){
        $("#Search").attr("class", "Off");
}
}

function SearchOn(){
	$("#Search").attr("class", "on");
    $("#blackback").fadeIn(200);
    $("#blurback").fadeIn(200);
}




