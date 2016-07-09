$(function(){


  // header_span

  function whenHover(target){
    $(target).hover(function(){
      $(this).children('span').stop().fadeIn();
    },function(){
      $(this).children('span').stop().fadeOut();
    })
  }

  whenHover('header h1 a');
  whenHover('.header h1 a');
  whenHover('.web03 .web_left');
  whenHover('.web03 .web_right');
  whenHover('.web04 .canvas_in');
  whenHover('.img_full');
  whenHover('.img_right');


  // web01

  $('.web01 .btns button:eq(0)').click(function(){
    $(".web01 h2").html("德国欧瑞");
    $('.web01 a').attr("href","websites/oure/index.html");
    $('.web01 img').attr("src","images/site1.png").hide().stop().fadeIn(1000);
    $(this).css({background:"#52DCE9"}).siblings().css({background:"#000"})
  })

  $('.web01 .btns button:eq(1)').click(function(){
    $(".web01 h2").html("简亦智");
    $('.web01 a').attr("href","websites/sns/index.html");
    $('.web01 img').attr("src","images/site2.png").hide().stop().fadeIn(1000);
    $(this).css({background:"#52DCE9"}).siblings().css({background:"#000"})
  })

  $('.web01 .btns button:eq(2)').click(function(){
    $(".web01 h2").html("天同律师");
    $('.web01 a').attr("href","websites/tiantonglaw/index.html");
    $('.web01 img').attr("src","images/site3.png").hide().stop().fadeIn(1000);
    $(this).css({background:"#52DCE9"}).siblings().css({background:"#000"})
  })

  // web02

  $('.web02 .btns button:eq(0)').click(function(){
    $(".web02 h2").html("魅族商城");
    $('.web02 a').attr("href","websites/meizu/index.html");
    $('.web02 img').attr("src","images/site4.png").hide().stop().fadeIn(1000);
    $(this).css({background:"#52DCE9"}).siblings().css({background:"#000"})
  })

  $('.web02 .btns button:eq(1)').click(function(){
    $(".web02 h2").html("淘宝");
    $('.web02 a').attr("href","websites/taobao/index.html");
    $('.web02 img').attr("src","images/site5.png").hide().stop().fadeIn(1000);
    $(this).css({background:"#52DCE9"}).siblings().css({background:"#000"});
  })

  $('.web02 .btns button:eq(2)').click(function(){
    $(".web02 h2").html("华为商城");
    $('.web02 a').attr("href","websites/vmall/index.html");
    $('.web02 img').attr("src","images/site6.png").hide().stop().fadeIn(1000);
    $(this).css({background:"#52DCE9"}).siblings().css({background:"#000"})
  })


  $('.footer_right a').click(function(){
    $('html, body').animate({scrollTop:0},500)
  })

  // nav_links

  function navHover(a){
    $(a).hover(function(){
      $(this).children('span').stop().animate({opacity:1});
    },function(){
      $(this).children('span').stop().animate({opacity:0});
    })
  }

  navHover('.previous');
  navHover('.next');


  $('.footer_left a').click(function(){
    $('.credit').stop().fadeIn();
  });

  $('.credit span').click(function(){
    $('.credit').stop().fadeOut();
  })
})
