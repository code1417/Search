/*************************************************************************************************************************
* .__  .___________ .__    ._______.       ._______.  ______       __    __        ___       .______      ._______       *
* |  | |           | (_ )  /       |       /       | /  __  \     |  |  |  |      /   \      |   _  \     |       \      *
* |  | `---|  |----`  |/  |   (----`      |   (----`|  |  |  |    |  |__|  |     /  ^  \     |  |_)  |    |  .--.  |     *
* |  |     |  |            \   \           \   \    |  |  |  |    |   __   |    /  /_\  \    |      /     |  |  |  |     *
* |  |     |  |        .----)   |      .----)   |   |  `--'  |    |  |  |  |   /  _____  \   |  |\  \-.   |  '--'  |     *
* |__|     |__|        |_______/       |_______/     \______/     |__|  |__|  /__/     \__\  | _| `.__|   |_______/      *
**************************************************************************************************************************
*
* 		2020 / 9 / 19
*
*		by Code147
*
*/


$(document).ready(function(){
//此处调用Time()方法，获取时间并立即更新
Time();
window.setInterval("Time()",500);

TurnManger('auto');
window.setInterval("TurnManger('auto')",8000);

$(function(){ //$函数
	//左侧边框展开，css3动画
  	$('#left').mouseenter(function(){
    	$(this).attr("class", "Open");
    	$('.content').attr("class", "Open content");
    	$('#HM').attr("class", "Open");
    	$('#MDD').attr("class", "Open");
  	});
	//动画合拢
  	$('#left').mouseleave(function(){
    	$(this).attr("class", "Close");
    	$('.content').attr("class", "Close content");
    	$('#HM').attr("class", "Close");
    	$('#MDD').attr("class", "Close");
  	});
});

//右击事件监听
$(".bookmask").contextmenu(function(event){
	if(menu_Mode == 'on'){
		CloseMenu();
	}else{
        event.preventDefault();
		menu_Obj = $(this);
		$(this).attr("class","bookmask BookmaskHover");
		$("#bookmaskblur").fadeIn(300);
		$("#menu").fadeIn(0);
		menu_X = event.pageX;
		menu_Y = event.pageY;
		$("#menu").css("left", menu_X + "px");
		$("#menu").css("top", menu_Y + "px");
		$('#menu').attr("class","Open");
		$('#bookmasks').attr("class","block BlockHover");
		//更改状态
		menu_Mode = "on";
	}
});

//监听menu中的按钮
$("#EditInMenuBookmasks").click(function(){  EditInMenu();  });
$("#DeleteInMenuBookmasks").click(function(){  DeleteInMenu();  });
$("#AddInMenuBookmasks").click(function(){  AddInMenu();  });
function EditInMenu(){
	$(body).append('<div class="editbox" id="editbox"><p class="edittext">标题：</p><input class="editinput" type="text" id="edittexttitle"><p class="edittext">链接：</p><input class="editinput" type="url" id="edittexturl"><div id="finishedit">完成</div><div id="canceledit">放弃</div></div>');
	$('#editbox').css('left',menu_X);
	$('#editbox').css('top',menu_Y);
	$('#editbox').attr('class','editbox editboxshow');
	edit_Mode = "on";
	CloseMenu(true);
}
$(body).on("click", "#finishedit", function(){
	CloseEditBox();
});
$(body).on("click", "#canceledit", function(){
	CloseEditBox();
});
// function DeleteInMenu(){
	
// }
// function AddInMenu(){
	
// }



//监听判断
function ClickListener(event){
	if(menu_Mode == 'on'){
		if (event.pageX > menu_X+$("#menu").width() || event.pageX < menu_X){
			CloseMenu(false);
		}else if(event.pageY < menu_Y || event.pageY > menu_Y+$("#menu").height()){
			CloseMenu(false);
		}
	}
	if(edit_Mode == 'on'){
		if (event.pageX > menu_X+$("#editbox").outerWidth() || event.pageX < menu_X){
			CloseEditBox();
		}else if(event.pageY < menu_Y || event.pageY > menu_Y+$("#editbox").outerHeight()){
			CloseEditBox();
		}
	}
}
//全文档监听(左击)
$(body).click(function(event){ ClickListener(event); });
//全文档监听(右击)
$(body).contextmenu(function(event){ event.preventDefault(); ClickListener(event);});


//执行关闭右击菜单工作
function CloseMenu(info){
	setTimeout(function(){
		$("#menu").fadeOut(0);
	},150);
	$('#menu').attr("class","Close");
	if(info == false){
		menu_Obj.attr("class","bookmask");
		$("#bookmaskblur").fadeOut(150);
		$('#bookmasks').attr("class","block");
	}
	//更改状态
	menu_Mode = "off";
}

//执行关闭editbox工作
function CloseEditBox(){
	$('#editbox').attr("class","editbox EditBoxClean");
	$("#editbox").remove();
	menu_Obj.attr("class","bookmask");
	$("#bookmaskblur").fadeOut(200);
	$('#bookmasks').attr("class","block");
	//更改状态
	edit_Mode = "off";
}




//Search聚焦与输入相关
		$('#turntips').click(function(){  TurnManger('!'); });
		//预聚焦状态
		$('#HM').click(function(){ Hide(); });
		//聚焦状态
		$('#HM0').click(function(){ Show(); });
		$('#blurback').click(function(){ Show(); });
        $('#blackback').click(function(){ Show(); });
        //searchs展开
        $("#icobaidu").mouseenter(function(){  SearchChange();  });
        $("#icogoogle").mouseenter(function(){  SearchChange();  });
        $("#icobing").mouseenter(function(){  SearchChange();  });
		$("#searches").mouseleave(function(){  SearchChangeSafety();  });
        $("#ico-baidu").click(function(){  SearchChangeTo("baidu");  });
        $("#ico-google").click(function(){  SearchChangeTo("google");  });
        $("#ico-bing").click(function(){  SearchChangeTo("bing");  });
        //位置安全
        $("#input").click(function(){ SearchChangeSafety(); });
        $("#input").click(function(){  SearchOn();  });
        $('input').bind('input propertychange', function(){  SearchOn();  });

});


	/* 变量定义与声明，全文档生命周期 */

	//搜索相关
		var search_Engine = "baidu";
		var search_Mode = "off";
	//聚焦效果状态描述
		var hide_Mode = false;
	//turntip相关
		var turn_Mode = 1;
	//右击菜单相关
		var menu_Mode = "off";	//声明菜单状态
		var menu_X = 0;	//确认菜单出现位置 X
		var menu_X = 0;	//确认菜单出现位置 Y
		var menu_Obj;	//右击对象
	//edit相关
		var edit_Mode = "off";

function SearchChangeSafety(){
        if(search_Mode == "on"){ SearchChangeTo(search_Engine); }
}

function SearchChangeTo(ico){
        search_Mode= "off";
        if(ico == "baidu"){
                $("#icobing").fadeOut(0);
                $("#icogoogle").fadeOut(0);
                $("#icobaidu").fadeIn(400);
                search_Engine = "baidu";
        }else if(ico == "google"){
                $("#icobing").fadeOut(0);
                $("#icobaidu").fadeOut(0);
                $("#icogoogle").fadeIn(400);
                search_Engine = "google";
        }else if(ico == "bing"){
                $("#icogoogle").fadeOut(0);
                $("#icobaidu").fadeOut(0);
                $("#icobing").fadeIn(400);
                search_Engine = "bing";
        }

        if(ico != "!"){
        $("#searches").animate({width:'100px',opacity:'0'},200);
        $("#searches").fadeOut(0);
        $("#input").animate({width:'+=50px',left:'-=50px'},300);
        }
}

function SearchChange(){
        search_Mode = "on";
        $("#icobing").fadeOut(0);
        $("#icobaidu").fadeOut(0);
        $("#icogoogle").fadeOut(0);
        $("#input").animate({width:'-=50px',left:'+=50px'},300);
        $("#searches").fadeIn(0);
        $("#searches").animate({width:'145px',opacity:'1'},300);
}

function Search(){ //window.open方法打开同一Tab下新的页面
        if(search_Engine == "bing"){
                window.open('https://cn.bing.com/search?q='+document.getElementById("input").value);
        }else if(search_Engine == "baidu"){
                window.open('https://www.baidu.com/s?wd='+document.getElementById("input").value);
        }else if(search_Engine == "google"){
                window.open('https://www.google.com/search?q='+document.getElementById("input").value);
        }
}
//聚焦效果
function Hide(){
    $("#Search").fadeOut();
	$(".block").fadeOut();
    $("#HM0").fadeIn(500);
	$("#HM0").attr("class","SLIP_IN");
    hide_Mode = true;
    $("#blurback").fadeIn(200);
	$("#left").fadeOut();
}
//退出聚焦效果
function Show(){
    $("#blurback").fadeOut(500);
    $("#blackback").fadeOut(500);
    $("#hisBox").fadeOut(500);
    $("#HM0").attr("class","SLIP_OUT");
	$("#HM0").fadeOut(500);
	$(".block").fadeIn(400);
	$("#left").fadeIn(400);
if(hide_Mode == true){
    $("#Search").fadeIn(400);
    hide_Mode = false;
}else if(hide_Mode == false){
    $("#Search").attr("class", "Off");
}
}

function SearchOn(){
	$("#Search").attr("class", "on");
    $("#blackback").fadeIn(200);
    $("#blurback").fadeIn(200);
}



function TurnManger(obj){
	if (turn_Mode == 1){
		setTimeout(function(){	
			TurnTips('洛阳今天'+localStorage.getItem("wea0")+'，气温 '+localStorage.getItem("wea1")+'℃');	
		}, function(){ if(obj == 'auto'){return 2000; }else{return 0; } });
		turn_Mode = 2;
	}else if(turn_Mode == 2){
		setTimeout(function(){	
			TurnTips(localStorage.getItem("hit0"));	
		}, function(){ if(obj == 'auto'){return 2000; }else{return 0; } });
		turn_Mode = 1;
	}
}

function TurnTips(content){
	if (content){
		$('#turntips').attr('class', 'TurnStart');
		setTimeout(function(){
			document.getElementById('turntips').innerText = (content);	
			$('#turntips').attr('class', 'TurnEnd');
		},300);
	}else{
		document.getElementById('#turntips').innerText = ('_NONE_');
	}
}


