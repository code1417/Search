//			Bookmasks实现方法
//监听判断
function ClickListener(event) {
	if (menu_Mode == 'on') {
		if (event.pageX > menu_X + $("#menu").width() || event.pageX < menu_X) {
			CloseMenu(false);
		} else if (event.pageY < menu_Y || event.pageY > menu_Y + $("#menu").height()) {
			CloseMenu(false);
		}
	}
	if (edit_Mode == 'on') {
		if (event.pageX > menu_X + $("#editbox").outerWidth() || event.pageX < menu_X) {
			CloseEditBox();
		} else if (event.pageY < menu_Y || event.pageY > menu_Y + $("#editbox").outerHeight()) {
			CloseEditBox();
		}
	}
}

//edit实现方法
function EditInMenu() {
	$('body').append('<div class="editbox" id="editbox"><input class="editinput" type="text" id="edittexttitle" placeholder="标题"><input class="editinput" type="url" id="edittexturl" placeholder="链接"><div id="finishedit">完成</div><div id="canceledit">放弃</div></div>');
	$('#editbox').css('left', menu_X);
	$('#editbox').css('top', menu_Y);
	$('#edittexttitle').val(links[obj_Index].title);
	$('#edittexturl').val(links[obj_Index].link);
	$('#editbox').attr('class', 'editbox editboxshow');
	edit_Mode = "on";
}

function DeleteInMenu() {
	menu_Obj.remove();
	obj_Index = menu_Obj.index();
	links.splice(obj_Index, 1);
	WriteBookmasks();
	LoadBookmasks();
	CloseMenu(false);
}

function AddInMenu() {
	links.push({ title: "New", link: "_BLOCK_" });
	menu_Obj = $(".bookmask").last();
	obj_Index = menu_Obj.index() + 1;
	WriteBookmasks();
	LoadBookmasks(true);
	EditInMenu();
	CloseMenu(true);
}

function FinishEditBox() {
	if ($('#edittexttitle').val()) {
		if ($('#edittexturl').val()) {
			let c_Url = CorrectUrl($('#edittexturl').val());
			menu_Obj.innerText = $('#edittexttitle').val();
			obj_Index = menu_Obj.index();
			links[obj_Index - 1].title = $('#edittexttitle').val();
			links[obj_Index - 1].link = c_Url;
			WriteBookmasks();
			CloseEditBox();
			LoadBookmasks();
		} else {
			alert('链接不可为空！');
		}
	} else {
		alert('请填入标题！');
	}
}


function CorrectUrl(url) {
	if (url.indexOf('http://') == 0) {
		return url.replace('http://', 'https://');
	} else if (url.indexOf('https://') == 0) {
		return url
	} else {
		return 'https://' + url
	}
}


function WriteBookmasks() {
	var bookmasks_W = JSON.stringify(links);
	localStorage.setItem("bookmasks", bookmasks_W);
}

function ReadBookmasks() {
	var bookmasks_R = localStorage.getItem("bookmasks");
	links = JSON.parse(bookmasks_R);
}

function LoadBookmasks(iskeep) {
	$('.bookmask').animate({ opacity: "0" }, 50);
	$('#bookmasks').empty();
	$('#bookmasks').append('<div id="bookmaskblur"></div>');
	$.each(links, function (i, item) {
		$('#bookmasks').append('<div class="bookmask"">' + item.title + '</div>');
	});
	if (iskeep == true) {
		$("#bookmaskblur").fadeIn(0);
		$('#bookmasks').children().eq(obj_Index).attr("class", "bookmask BookmaskHover");
		menu_Obj = $('.bookmask').last();
	}
	$('.bookmask').animate({ opacity: "1" }, 100);
}


//执行关闭右击菜单工作
function CloseMenu(iskeep) {
	setTimeout(function () {
		$("#menu").fadeOut(0);
	}, 150);
	$('#menu').attr("class", "Close");
	if (iskeep == false) {
		menu_Obj.attr("class", "bookmask");
		$("#bookmaskblur").fadeOut(150);
		$('#bookmasks').attr("class", "block");
	}
	//更改状态
	menu_Mode = "off";
}

//执行关闭editbox工作
function CloseEditBox() {
	$('#editbox').attr("class", "editbox editboxclean");
	$("#editbox").remove();
	$('.bookmask').attr("class", "bookmask");
	$("#bookmaskblur").fadeOut(200);
	$('#bookmasks').attr("class", "block");
	edit_Mode == "off";
}




















//			Search实现方法
function SearchChangeSafety() {
	if (search_Mode == "on") { SearchChangeTo(search_Engine); }
}

function SearchChangeTo(ico) {
	search_Mode = "off";
	if (ico == "baidu") {
		$("#icobing").fadeOut(0);
		$("#icogoogle").fadeOut(0);
		$("#icobaidu").fadeIn(400);
		search_Engine = "baidu";
		$('#input').attr('placeholder', '使用百度进行搜索...');
	} else if (ico == "google") {
		$("#icobing").fadeOut(0);
		$("#icobaidu").fadeOut(0);
		$("#icogoogle").fadeIn(400);
		search_Engine = "google";
		$('#input').attr('placeholder', '使用谷歌进行搜索...');
	} else if (ico == "bing") {
		$("#icogoogle").fadeOut(0);
		$("#icobaidu").fadeOut(0);
		$("#icobing").fadeIn(400);
		search_Engine = "bing";
		$('#input').attr('placeholder', '使用必应进行搜索...');
	}
	if (ico != "!") {
		$("#searches").animate({ width: '100px', opacity: '0' }, 200);
		$("#searches").fadeOut(0);
		$("#input").animate({ width: '+=50px', left: '-=50px' }, 300);
	}
}

function SearchChange() {
	search_Mode = "on";
	$("#icobing").fadeOut(0);
	$("#icobaidu").fadeOut(0);
	$("#icogoogle").fadeOut(0);
	$("#input").animate({ width: '-=50px', left: '+=50px' }, 300);
	$("#searches").fadeIn(0);
	$("#searches").animate({ width: '145px', opacity: '1' }, 300);
}

function Search() { //window.open方法打开同一Tab下新的页面
	if (search_Engine == "bing") {
		window.open('https://cn.bing.com/search?q=' + document.getElementById("input").value);
	} else if (search_Engine == "baidu") {
		window.open('https://www.baidu.com/s?wd=' + document.getElementById("input").value);
	} else if (search_Engine == "google") {
		window.open('https://www.google.com/search?q=' + document.getElementById("input").value);
	}
}

function SearchOn() {
	$("#Search").attr("class", "on");
	$("#blackback").fadeIn(200);
	$("#blurback").fadeIn(200);
}

function Saying() {
	var hitokoto = localStorage.getItem("hit1");
	if (search_Engine == "bing") {
		window.open('https://cn.bing.com/search?q=' + hitokoto);
	} else if (search_Engine == "baidu") {
		window.open('https://www.baidu.com/s?wd=' + hitokoto);
	} else {
		window.open('https://www.google.com/search?q=' + hitokoto);
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



















function WaterWave(event, obj) {
	$('#waterwave').remove();
	obj.append('<div id="waterwave"></div>');
	$('#waterwave').css('left', event.pageX - obj.left);
	$('#waterwave').css('top', event.pageY - obj.top);
	$('#waterwave').animate({
		'left': '-=100px',
		'top': '-=100px',
		'width': '+=200px',
		'height': '+=200px',
		'opacity': '0',
	},
		300,
		'linear',
		function () {
			$('#waterwave').remove();
		});
}




















//			获取时间
function GetFormatDate() {
	var nowDate = new Date();
	var day;
	var month = nowDate.getMonth() + 1 < 10 ? "0" + (nowDate.getMonth() + 1) : nowDate.getMonth() + 1;
	var date = nowDate.getDate() < 10 ? "0" + nowDate.getDate() : nowDate.getDate();
	var hour = nowDate.getHours() < 10 ? "0" + nowDate.getHours() : nowDate.getHours();
	var minute = nowDate.getMinutes() < 10 ? "0" + nowDate.getMinutes() : nowDate.getMinutes();
	var second = nowDate.getSeconds() < 10 ? "0" + nowDate.getSeconds() : nowDate.getSeconds();
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
	document.getElementById("HM").innerHTML = hour + ":" + minute;
	document.getElementById("HM0").innerHTML = hour + ":" + minute + "  " + second + "\"";
	document.getElementById("MDD").innerHTML = month + "." + date + " " + day;
}