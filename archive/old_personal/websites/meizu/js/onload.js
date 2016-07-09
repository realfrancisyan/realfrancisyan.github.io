$(function(){
    $(".header_banner span").click(function(){
      $('.header_banner').slideUp();
    });

    $(".main_content .slides li a").each(function(index,element){
      $(element).css({background:"url(../meizu/images/"+(index+1)+".jpg) no-repeat center center"})
    });

    var timer=null;
    var num=0;

    function move(){
      clearInterval(timer)
      timer=setInterval(function(){
        num++;
        if(num>4){num=0};
        $(".main_content .slides").animate({left:num*-100+"%"});
        $(".main_content .canvas_in .content_right ol li").eq(num).addClass('current').siblings().removeClass("current")
      },5000);
    }

    move();

    $(".box").hover(function(){
      clearInterval(timer);
      $('.main_content .canvas_in .content_right span').fadeTo(300,0.5);
    },function(){
      move();
      $('.main_content .canvas_in .content_right span').fadeTo(300,0);
    })

    $('.main_content .canvas_in .content_right .right').click(function(){
      num++;
      if(num>4){num=0};
      $(".main_content .slides").animate({left:num*-100+"%"});
      $(".main_content .canvas_in .content_right ol li").eq(num).addClass('current').siblings().removeClass("current")
    })

    $('.main_content .canvas_in .content_right .left').click(function(){
      num--;
      if(num<0){num=4};
      $(".main_content .slides").animate({left:num*-100+"%"});
      $(".main_content .canvas_in .content_right ol li").eq(num).addClass('current').siblings().removeClass("current")
    })

    $(".main_content .canvas_in .content_right ol li").click(function(){
      $(this).addClass('current').siblings().removeClass('current');
      var thisIndex=$(this).index();
      $(".main_content .slides").animate({left:thisIndex*-100+"%"});
      num=thisIndex;
    })

})
