// 用mockjs模拟生成数据
var Mock = require('mockjs');

// node app.js 要求db.js 暴露一个object
let mapData = (n) => {
  let data=[];

  for (let i=1; i<=n; i++){
    data.push({
      _id: i+'',
      id: i+'',
      title:'@ctitle(8,12)',
      des:'@ctitle(10,20)',
      time:'@integer(1594004307038,1598004307038)',
      detail:{
        auth_icon:Mock.Random.image('50x50',Mock.Random.color(),Mock.Random.cword(1)),
        auth:'@cname()',
        content: [1,2,3].map(()=>(
          "<p style='margin-top: 20px;text-indent: 2em'>"+"@cparagraph(10,15)"+"</p>"
        )).join('')
      }
    })
  }

  return data;
};

let mapData2 = (n) => {
  let data=[];

  for (let i=1; i<=n; i++){
    data.push({
      _id: i+'',
      id: i+'',
      title:'@ctitle(4,8)',
      sub_title:'@ctitle(6,12)',
      banner: Mock.Random.image('1680x745',Mock.Random.color(),Mock.Random.cword(4,8)),
      time:'@integer(1594004307038,1598004307038)',
      detail:{
        auth_icon:Mock.Random.image('50x50',Mock.Random.color(),Mock.Random.cword(1)),
        auth:'@cname()',
        content:[1,2,3].map(()=>(
          "<p style='margin-top: 20px;text-indent: 2em'>"+"@cparagraph(10,15)"+"</p>"
        )).join('')
      }
    })
  }

  return data;
};

let mapData3 = (n) => {
  let data=[];

  for (let i=1; i<=n; i++){
    data.push({
      _id: i+'',
	  front_cover:Mock.Random.image('106x106',Mock.Random.color(),Mock.Random.cword(4,8)),
	  soundstr:'【@ctitle(0,5)】'+'@ctitle(5,10)',
	  view_count:Mock.Random.integer(0,800000),
	  comment_count:Mock.Random.integer(0,10000)
    })
  }

  return data;
};

let mapData4 = (n) => {
  let data=[];

  for (let i=1; i<=n; i++){
	  // {id:1,front_cover:'//static.misstyle/webp',music_count:116,title:'【古风】一人一曲'},
    data.push({
      _id: i+'',
	  front_cover:Mock.Random.image('144x144',Mock.Random.color(),Mock.Random.cword(4,8)),
	  title:'【@ctitle(3,5)】'+'@ctitle(5,15)',
	  music_count:Mock.Random.integer(0,8000),
    })
  }

  return data;
};
let mapData5 = (n) => {
  let data=[];

  for (let i=1; i<=n; i++){
	  // sound:{
	  // 	mosaic_url:Mock.Random.image('144x144',Mock.Random.color(),Mock.Random.cword(4,8)),
	  // 	front_cover:"//static.missevan.com/coversmini/202009/10/6b269d0fdcd480bfe0b05610dc885780183322.jpg?x-oss-process=style/webp",
	  // 	soundstr:"<p>改编自日本恐怖漫画家代表人物伊藤润二作品《伊藤润二杰作集》，南硕有声精品制作。</p><br /><p>制作组：</p><p>原著：伊藤润二</p><p>策划：肉呀233  朱辰培</p><p>监制：玛奇朵</p><p>前期导演：小玩子 马嗣琪</p><p>后期导演：王子殿下</p><p>编剧：Kpanda 小笼包</p><p>后期：冰棍儿郡主 鹿角酥 Rolland 二月玲</p><p>校对：柯倩 婳郗</p><p>录音：羽辰</p><p>发行：Lorna 程嘉庆</p><br /><p>配音组：</p><p>风篁：旁白 @风里幽篁</p><p>小米：富江 @cv小米</p><p>有希：双一 @渣昀_有希君</p><p>小浣：押切 @不务正业的小浣</p><p>子兮：路菜 @子o_o兮</p><p>青青：由美 @立青姑娘w</p><p>一修：酒井、仓木等 @波澜不惊的一修</p><p>侯佳贝：三尾雪子、加奈等 @是贝贝阿_</p><p>北落潇潇：由加利、阿袖等 @琦-北落潇潇</p><p>仙女桥：千雪、弘子等 @cv仙女桥</p><p>孟轩：中岛、加藤等 @孟轩弟弟</p><p>越真：智子 @越真</p><p>郁子期：妈妈、优奈等 @郁子期</p><p>念墨：和也、大仓正介 @要做cv的念墨</p><p>葫芦：柴田、松下 @杨杨杨Flew</p><p>橙璃：礼子 @橙了个璃喵喵</p><p>水烟箩卜：咲山绿 @某个不愿意透露姓名的萝卜</p><p>十六：神山、木股等 @进击的十六</p><p>奶小曦：加奈子，桥本等 @张小曦-YX</p><br /><p>参与演播：千寻、啸月、老信、小伊、柳真颜、小小、小兔、贞子、奶小曦、小透明、萝卜、大白、苹果、神隐、蟲蟲。</p>"
	  // }
    data.push({
      _id: i+'',
	  front_cover:Mock.Random.image('222x222',Mock.Random.color(),Mock.Random.cword(4,8)),
	  soundstr:[1,2,3].map(()=>(
          "<p style='margin-top: 20px;text-indent: 2em'>"+"@cparagraph(10,15)"+"</p>"
        )).join('')
    })
  }

  return data;
};


module.exports = Mock.mock({
  
  'user': {
    "follow":Mock.Random.integer(0,100),
    "fans":Mock.Random.integer(0,100),
    "nikename":Mock.Random.cname(),
    "icon":Mock.Random.image('20x20',Mock.Random.color(),Mock.Random.cword(1)),
    "time":Mock.Random.integer(13)
  },
  'banner':mapData2(10),
  'home': mapData(100),
  'follow': mapData(80),
  'column': mapData4(60),
  'list': mapData3(60),
  'detail':mapData5(60),
});

/* module.exports = () => {
  
  // 使用 Mock
    var data = Mock.mock({
      'course|30': [
        {
          // 属性 id 是一个自增数，起始值为 1，每次增 1
          'id|+1': 1000,
          course_name: '@ctitle(5,10)',
          autor: '@cname',
          college: '@ctitle(6)',
          'category_Id|1-6': 1
        }
      ],
      'course_category|6': [
        {
          "id|+1": 1,
          "pid": -1,
          cName: '@ctitle(4)'
        }
      ]
    });
  
  // 返回的data会作为json-server的数据
  return data;
    
}; */