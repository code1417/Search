var main = new Vue({
  el: '#body',
  data:{
    content:[
            {date: "11月22日", con: "引入了backdrop-filter"},
            {date: "10月18日", con: "完善窗口大小验证；优化一堆有关Search的函数与算法；添加了奇奇怪怪的模糊；修补了天气API"},
            {date: "10月11日 重写了页面样式 ", con: "添加了窗口大小验证（未完善）"},
            {date: "10月1日 重写了left格式 ", con: "固定left格式，添加元素动画，优化代码"},
            {date: "9月26日 阶段性突破 ", con: "添加了bing搜索；完善了搜索引擎切换；引入了Google搜索(404)；替换壁纸；提取history.js；添加了tips样式"},
            {date: "9月19日 开始搭建 ", con: "设置壁纸并完成了毛玻璃css；完成了时间与日期的样式;引入了Google Open字体;设置了访问询问"},
           ],
    links:[
           {name:"Baidu",link:"https://www.baidu.com/"},
           {name:"Bing",link:"https://cn.bing.com/"},
           {name:"Bilibili",link:"https://www.bilibili.com/"},
           {name:"Youku",link:"https://www.youku.com/"},
           {name:"爱奇艺",link:"https://www.iqiyi.com/"},
           {name:"腾讯视频",link:"https://v.qq.com/index.html"},
           ],
    },
    methods:{
      togo: function(index){
        window.location.href = this.links[index].link;
      }
    },
})


