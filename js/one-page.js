var scaleW = window.innerWidth/320;
var scaleH = window.innerHeight/480;
var resizes = document.querySelectorAll('.resize');
for(var j=0;j<resizes.length;j++){
  resizes[j].style.width = parseInt(resizes[j].style.width)*scaleW+'px';
  resizes[j].style.height = parseInt(resizes[j].style.height)*scaleH+'px';
  resizes[j].style.top = parseInt(resizes[j].style.top)*scaleH+'px';
}
var swiper1 = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    mousewheelControl : true,
    direction: 'vertical',
    onInit:function(swiper){
      layer.open({
        type: 2,
        time:1
      });
      swiperAnimateCache(swiper);
      swiperAnimate(swiper);
    },
    onSlideChangeEnd:function(swiper){
      swiperAnimate(swiper);
    },
    onSlideChangeStart: function(swiper){
      if(swiper.activeIndex == 3){
        // setInterval('randomNum(1,6)',1500);
      }
    }
});


// function randomNum(minNum,maxNum){
//     var num;
//     switch(arguments.length){
//         case 1:
//             num = parseInt(Math.random()*minNum+1);
//         break;
//         case 2:
//             num = parseInt(Math.random()*(maxNum-minNum+1)+minNum);
//         break;
//         default:
//             return 0;
//         break;
//     }
//     $('.nanAll').find('.nan'+num).fadeOut();
// }
