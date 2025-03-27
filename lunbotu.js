const prev=document.querySelector('.prev')
const next=document.querySelector('.next')
const image=document.querySelector('.images')
const images=[
 '25.png','26.png','27.png','28.png','29.png','30.png','31.png','32.png','33.png','34.png','35.png','36.png'
]/*创建图片数组，其中这是轮播图部分的，照片可自己添加*/
for(let i=0;i<images.length;i++){
 let img=document.createElement('img')/*创建img元素，然后添加这些元素到lunbotu类的子代*/
 img.src=images[i]
 img.className='item'/*取名为item类*/
 image.appendChild(img)
}
function movenext(){
 let items=document.querySelectorAll('.item')/*选取所有的item类*/
 image.append(items[0])/*轮播图逻辑，只要鼠标向上轮动或者按了前进按钮，就自动把第一个数组元素放到数组的末尾，以此实现轮播*/
}
function moveprev(){
 let items=document.querySelectorAll('.item')
 image.prepend(items[items.length-1])/*同理，把末尾的元素放到第一位*/
}
window.addEventListener('wheel',function(event){
     if(event.deltaY>0){
         movenext()
     }else{
         moveprev()
     }
 })/*wheel是检测鼠标滚轮，向上就触发movenext函数*/
 // 添加自动轮播功能
 let autoPlayInterval = null;/*控制轮播的开关变量*/
 function startAutoPlay() {
     // 每3秒自动轮播一次
     autoPlayInterval = setInterval(movenext, 3000);
 }
 function stopAutoPlay() {
     if (autoPlayInterval) {
         clearInterval(autoPlayInterval);/*停止轮播图函数*/
         autoPlayInterval = null;
     }
 }

 // 鼠标移入盒子时暂停自动轮播，移出时继续自动轮播
 image.addEventListener('mouseenter', stopAutoPlay);
 image.addEventListener('mouseleave', startAutoPlay);

 // 开始自动轮播
 startAutoPlay();

 prev.addEventListener('click',moveprev)
 next.addEventListener('click',movenext)