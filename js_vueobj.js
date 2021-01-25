var main = new Vue({
  el: '#body',
  data:{
    history:[
			{date: "2021年1月24日", con: "添加右击效果，添加书签动态效果，优化代码，添加注释"},
			{date: "12月24日", con: "添加SearchOn效果"},
            {date: "12月22日", con: "修补了时间丢失的bug，加入turntips原型，美化"},
            {date: "12月13日", con: "重写了#left，统一了content设计，学习css3 Animation，更新了GitHub"},
            {date: "12月7日", con: "使用Vue.js重写了部分页面，更新了GitHub"},
            {date: "11月22日", con: "引入了backdrop-filter"},
            {date: "10月18日", con: "完善窗口大小验证；优化一堆有关Search的函数与算法；添加了奇奇怪怪的模糊；修补了天气API"},
            {date: "10月11日 重写了页面样式 ", con: "添加了窗口大小验证（未完善）"},
            {date: "10月1日 重写了left格式 ", con: "固定left格式，添加元素动画，优化代码"},
            {date: "9月26日 阶段性突破 ", con: "添加了bing搜索；完善了搜索引擎切换；引入了Google搜索(404)；替换壁纸；提取history.js；添加了tips样式"},
            {date: "9月19日 开始搭建 ", con: "设置壁纸并完成了毛玻璃css；完成了时间与日期的样式;引入了Google Open字体;设置了访问询问"},
           ],
    links:[
           {name:"虚拟主机",link:"https://host.retiehe.com/"},
           {name:"Bing壁纸",link:"https://bing.ioliu.cn/"},
           {name:"学术镜像",link:"https://ac.scmor.com/"},
           {name:"青柠起始页",link:"https://a.maorx.cn/"},
           {name:"菜鸟教程",link:"https://m.runoob.com/"},
           {name:"acexy",link:"https://imgs.acexy.cn"},
           {name:"Github",link:"https://github.com/"},
		   {name:"[Notes]",link:"https://delta.rthe.net/Notes.html"},
           ],
    },
    methods:{
      togo: function(index){
        window.location.href = this.links[index].link;
      },
      showHis: function(){
        $("#blackback").fadeIn(300);
        $("#blurback").fadeIn(300);
        $("#hisBox").fadeIn(300);
      },
    },
})


