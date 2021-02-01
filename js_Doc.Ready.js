/*
* 		2020 / 9 / 19
*
*		by Code147
*/

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
var edit_Mode = "off";
var menu_X = 0;	//确认菜单出现位置 X
var menu_X = 0;	//确认菜单出现位置 Y
var menu_Obj;	//右击对象
//edit相关
var obj_Index = 0;

var links = [{ title: "Welcome", link: "https://host.retiehe.com/" }];
var history_Log = [
	{ date: "2021年1月24日", con: "添加右击效果，添加书签动态效果，优化代码，添加注释" },
	{ date: "12月24日", con: "添加SearchOn效果" },
	{ date: "12月22日", con: "修补了时间丢失的bug，加入turntips原型，美化" },
	{ date: "12月13日", con: "重写了#left，统一了content设计，学习css3 Animation，更新了GitHub" },
	{ date: "12月7日", con: "使用Vue.js重写了部分页面，更新了GitHub" },
	{ date: "11月22日", con: "引入了backdrop-filter" },
	{ date: "10月18日", con: "完善窗口大小验证；优化一堆有关Search的函数与算法；添加了奇奇怪怪的模糊；修补了天气API" },
	{ date: "10月11日 重写了页面样式 ", con: "添加了窗口大小验证（未完善）" },
	{ date: "10月1日 重写了left格式 ", con: "固定left格式，添加元素动画，优化代码" },
	{ date: "9月26日 阶段性突破 ", con: "添加了bing搜索；完善了搜索引擎切换；引入了Google搜索(404)；替换壁纸；提取history.js；添加了tips样式" },
	{ date: "9月19日 开始搭建 ", con: "设置壁纸并完成了毛玻璃css；完成了时间与日期的样式;引入了Google Open字体;设置了访问询问" }
];

$(document).ready(function () {

	/* 自启方法 */

	//此处调用Time()方法，获取时间并立即更新
	GetFormatDate();
	window.setInterval("GetFormatDate()", 1000);

	TurnManger('auto');
	window.setInterval("TurnManger('auto')", 8000);

	ReadBookmasks();
	LoadBookmasks();

	LoadHis();










	$('body')
		.on("mousedown", function (event) {
			event.stopPropagation();
			ClickListener(event);
		})
		.on('click', '.block', function (event) {
			WaterWave(event, $(this));
		})
		//监听menu中的按钮
		.on("click", '#EditInMenuBookmasks', function (event) {
			event.stopPropagation();
			CloseMenu(true);
			EditInMenu();
		})
		.on("click", '#DeleteInMenuBookmasks', function (event) {
			event.stopPropagation();
			DeleteInMenu();
		})
		.on("click", '#AddInMenuBookmasks', function (event) {
			event.stopPropagation();
			AddInMenu();
		})
		//监听edit中的按钮
		.on("click", "#finishedit", function (event) {
			event.stopPropagation();
			FinishEditBox();
		})
		.on("click", "#canceledit", function (event) {
			event.stopPropagation();
			CloseEditBox();
		})
		//监视书签
		.on("click", '.bookmask', function (event) {
			event.stopPropagation();
			window.location.href = links[$(this).index() - 1].link;
		})
		.on("contextmenu", '.bookmask', function (event) {
			menu_Obj = $(this);
			obj_Index = menu_Obj.index() - 1;
			menu_X = event.pageX;
			menu_Y = event.pageY;
			$(this).attr("class", "bookmask BookmaskHover");
			$("#bookmaskblur").fadeIn(200);
			$("#menu").fadeIn(0);
			$("#menu").css("left", menu_X + "px");
			$("#menu").css("top", menu_Y + "px");
			$('#menu').attr("class", "Open");
			$('#bookmasks').attr("class", "block BlockHover");
			menu_Mode = "on";
			return false
		})
		//左侧边框展开，css3动画
		.on('mouseenter', '#left', function () {
			$(this).attr("class", "Open");
			$('.content').attr("class", "Open content");
			$('#HM').attr("class", "Open");
			$('#MDD').attr("class", "Open");
		})
		.on('mouseleave', '#left', function () {
			$(this).attr("class", "Close");
			$('.content').attr("class", "Close content");
			$('#HM').attr("class", "Close");
			$('#MDD').attr("class", "Close");
		});



	$('#history').click(function () { ShowHis(); });
	//Search聚焦与输入相关
	$('#turntips').click(function () { TurnManger('!'); });
	//预聚焦状态
	$('#HM').click(function () { Hide(); });
	//聚焦状态
	$('#HM0').click(function () { Show(); });
	$('#blurback').click(function () { Show(); });
	$('#blackback').click(function () { Show(); });
	//searchs展开
	$("#icobaidu").mouseenter(function () { SearchChange(); });
	$("#icogoogle").mouseenter(function () { SearchChange(); });
	$("#icobing").mouseenter(function () { SearchChange(); });
	$("#searches").mouseleave(function () { SearchChangeSafety(); });
	$("#ico-baidu").click(function () { SearchChangeTo("baidu"); });
	$("#ico-google").click(function () { SearchChangeTo("google"); });
	$("#ico-bing").click(function () { SearchChangeTo("bing"); });
	//位置安全
	$("#input")
		.click(function () {
			SearchChangeSafety();
		})
		.click(function () {
			SearchOn();
		})
		.on('input propertychange', function () {
			SearchOn();
		});
});
