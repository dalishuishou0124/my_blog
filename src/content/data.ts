export const profile = {
  name: '林间漫步',
  title: '派对生活空间',
  intro: '这里是存放生活琐碎与旅途切片的小角落。翻翻手账、看看照片，也可以和小狗抱抱打个招呼。',
  isExample: true,
  surprise: '小趣事还在路上。这里以后会放一段属于你的真实故事，先让抱抱陪你坐一会儿。',
};
export type Photo = { id: string; src: string; title: string; category: string; };
export const photos: Photo[] = [
  { id:'coast',src:'/images/album-1.jpg',title:'海岸线的晴天',category:'沿途风景'},
  { id:'window',src:'/images/album-2.jpg',title:'窗边的一杯奶茶',category:'日常小物'},
  { id:'meadow',src:'/images/album-3.jpg',title:'微风吹过夏日草甸',category:'沿途风景'},
  { id:'cake',src:'/images/album-4.jpg',title:'草莓慕斯小食刻',category:'日常小物'},
  { id:'bookshop',src:'/images/album-5.jpg',title:'老书店里的傍晚',category:'日常小物'},
  { id:'fern',src:'/images/album-6.jpg',title:'清晨的蕨叶露珠',category:'沿途风景'},
  { id:'desk',src:'/images/home-1.jpg',title:'书桌上的小玩偶角落',category:'日常小物'},
  { id:'pudding',src:'/images/home-2.jpg',title:'新鲜出炉的焦糖布丁',category:'日常小物'},
  { id:'park',src:'/images/home-3.jpg',title:'公园草坪放空半小时',category:'沿途风景'},
  { id:'stickers',src:'/images/home-4.jpg',title:'今日手账拼贴素材盒',category:'日常小物'},
];
export type Section = { title:string; text:string; photos:Photo[] };
export type Post = { id:string; title:string; category:string; date:string; excerpt:string; cover:string; sections:Section[]; note:string };
const pic=(id:string,src:string,title:string):Photo=>({id,src,title,category:'记录照片'});
export const posts:Post[] = [
 {id:'mint',title:'在阳台给薄荷换了新瓷盆',category:'日常手记',date:'2024-10-24',cover:'/images/album-6.jpg',excerpt:'清晨的微风把阳光晒得暖烘烘的。修剪了枯黄的小叶尖，窗边都是清爽的草本香气。',sections:[{title:'把一小片绿色搬进日常',text:'把薄荷从旧盆里轻轻挪出来，抖开根部的土，再放进新瓷盆。窗台上洒了一点泥，空气里有清新的草本气味。原来把一件小事慢慢做完，也能让心情变好。',photos:[pic('mint-leaf','/images/album-6.jpg','清晨的绿意')]},{title:'留一点空白给自己',text:'不必把每一天过得特别精彩。收拾好窗台，倒一杯温热的茶，看新叶在风里轻轻晃动。几句文字、一张照片，就能把平常的一天留住。',photos:[pic('mint-window','/images/album-2.jpg','窗边的午后')]}],note:'示例后记：照顾一盆植物，也是在给自己留一点慢下来的时间。'},
 {id:'pudding',title:'焦糖香草布丁出炉成功！',category:'咖啡小食',date:'2024-10-22',cover:'/images/home-2.jpg',excerpt:'从烤箱里的甜香到盘子里晃悠悠的小布丁，把平凡的午后留成一张甜甜的照片。',sections:[{title:'厨房里的小期待',text:'焦糖慢慢染成琥珀色时，厨房也有了甜甜的香气。倒扣布丁前有一点紧张，等它完整地落在盘子里，忍不住为这个小小的成功高兴了一下。',photos:[photos[7]]},{title:'给成果拍一张照片',text:'把盘子搬到窗边，等光线落在焦糖表面。拍照时小心翼翼，吃第一口时却毫不犹豫。把另一份装好，留给晚一点到来的朋友。',photos:[pic('baking','/images/journal-4.jpg','甜点与午后的光')]}],note:'示例后记：把甜甜的时刻分享给喜欢的人。'},
 {id:'autumn',title:'初秋的平谷山野漫步',category:'山野漫步',date:'2024-10-20',cover:'/images/journal-1.jpg',excerpt:'趁着树叶还没有完全落尽，带上保温壶钻进山谷。风是凉的，阳光却把草坡照得暖暖的。',sections:[{title:'晨光与山脚微风',text:'早晨沿着石阶慢慢向上，晨雾还在山脊间停留。落叶踩在脚下轻轻作响，停下来看看远处，才发现平时忽略的颜色都藏在这里。',photos:[pic('autumn-path','/images/story-1.jpg','晨光落在山间小径')]},{title:'水岸、野雏菊与倒影',text:'走到水边时，找一块石头坐下。小野菊从岩缝里探出来，水面映着另一座秋山。想把这片安静带回去，于是拍下花朵，也拍下了水里的天空。',photos:[pic('daisy','/images/story-2.jpg','岩缝里的小野菊'),pic('lake','/images/story-3.jpg','水面上的彩色秋山')]},{title:'登顶之后，慢慢看',text:'视线骤然开阔，层层山脊向远方延伸。没有急着赶路，只是站在风里等光线换一个角度。走过的路在山脚弯成细细的一条线，来时那些念头忽然就变轻了。',photos:[pic('summit','/images/story-4.jpg','群山与温柔的日落')]}],note:'示例后记：相机里装着秋天的颜色，把这一页留给山风。'},
 {id:'coffee',title:'巷弄转角，新烤肉桂卷与旧书屋',category:'咖啡小食',date:'2024-10-15',cover:'/images/journal-2.jpg',excerpt:'无目的的散步总会遇到小惊喜。转过两个路口，咖啡香和书页把这个下午变得很慢。',sections:[{title:'顺着香气拐一个弯',text:'走过两条熟悉的街，忽然闻到了新烤肉桂卷的香气。店里的窗边刚好空着，点一杯咖啡，把包放下，决定在这里度过这个没有计划的下午。',photos:[pic('coffee-corner','/images/journal-2.jpg','树影里的咖啡角')]},{title:'翻到喜欢的那一页',text:'散步的另一站是书店。书页有一点旧，窗边的光却很新。随手翻开一本画册，停在一幅海边的画上，开始期待下一次出发。',photos:[photos[4]]}],note:'示例后记：没有特别的计划，也能过一个很好的周末。'},
 {id:'seaside',title:'浪花把细沙堆成柔软的城堡',category:'沿海出游',date:'2024-09-28',cover:'/images/journal-3.jpg',excerpt:'在灯塔亮起之前，沿着海边走一走。把海风、晚霞和细碎的浪声留在这一页。',sections:[{title:'走到海边去',text:'鞋子拎在手上，踩过刚刚退潮的沙滩。远处的遮阳伞像一小块彩虹，浪声一阵一阵，把赶路时的疲惫慢慢带走。',photos:[pic('beach','/images/journal-3.jpg','沙滩上的彩色遮阳伞')]},{title:'等一阵风',text:'沿着海岸线慢慢走，等天空从浅蓝变成蜜桃色。照片留住颜色，文字留住当时的心情。回头看，沙滩上已经留下了一长串脚印。',photos:[photos[0]]}],note:'示例后记：给海边的这一天留一个小小的书签。'},
];
export const trip=posts.find(p=>p.id==='autumn')!;
export const photoCount=(post:Post)=>post.sections.reduce((n,s)=>n+s.photos.length,0);
