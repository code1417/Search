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

	window.onbeforeunload = function(){ finish(); };
	document.getElementById('note').value=localStorage.getItem("note");

	//显示窗口
	$('#HM').click(function(){ hide(); });

		$('#HM0').click(function(){ show(); });
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
        $("#input").animate({width:'+=105px',left:'-=105px'},300);
        }
}

function searchchange(){
        SearchMode = "on";
        $("#icobing").fadeOut(0);
        $("#icobaidu").fadeOut(0);
        $("#icogoogle").fadeOut(0);
        $("#input").animate({width:'-=105px',left:'+=105px'},300);
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
		$("#bookmasks").fadeOut();
    	$("#HM0").fadeIn(500);
    	$("#blackback").fadeIn(200);
		$("#left").fadeOut();
}
//隐藏后显示
function show(){
    $("#HM0").fadeOut(0);
	$("#bookmasks").fadeIn(200);
	$("#left").fadeIn(200);
    $("#Search").fadeIn(200);
    $("#blackback").fadeOut(100);
}

function finish(){
    var note = document.getElementById('note').value;
    localStorage.setItem("note", note);
    document.getElementById('finishbtn').style.display  = "none";
    document.getElementById('note').style.bottom  = "18px";
} 

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

