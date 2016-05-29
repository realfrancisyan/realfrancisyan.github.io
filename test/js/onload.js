$(function(){
  // header_span

  $('header h1 a').hover(function(){
    $(this).children('span').stop().fadeIn();
  },function(){
    $(this).children('span').stop().fadeOut();
  })

  // web01

  $('.web01 .btns button:eq(0)').click(function(){
    $(".web01 h2").html("德国欧瑞");
    $('.web01 a').attr("href","websites/oure");
    $('.web01 img').attr("src","images/site1.png").hide().stop().fadeIn(1000);
    $(this).css({background:"#309A6C"}).siblings().css({background:"#000"})
  })

  $('.web01 .btns button:eq(1)').click(function(){
    $(".web01 h2").html("简亦智");
    $('.web01 a').attr("href","websites/sns");
    $('.web01 img').attr("src","images/site2.png").hide().stop().fadeIn(1000);
    $(this).css({background:"#309A6C"}).siblings().css({background:"#000"})
  })

  $('.web01 .btns button:eq(2)').click(function(){
    $(".web01 h2").html("天同律师");
    $('.web01 a').attr("href","websites/tiantonglaw");
    $('.web01 img').attr("src","images/site3.png").hide().stop().fadeIn(1000);
    $(this).css({background:"#309A6C"}).siblings().css({background:"#000"})
  })

  // web02

  $('.web02 .btns button:eq(0)').click(function(){
    $(".web02 h2").html("魅族商城");
    $('.web02 a').attr("href","websites/meizu");
    $('.web02 img').attr("src","images/site4.png").hide().stop().fadeIn(1000);
    $(this).css({background:"#309A6C"}).siblings().css({background:"#000"})
  })

  $('.web02 .btns button:eq(1)').click(function(){
    $(".web02 h2").html("淘宝");
    $('.web02 a').attr("href","websites/taobao");
    $('.web02 img').attr("src","images/site5.png").hide().stop().fadeIn(1000);
    $(this).css({background:"#309A6C"}).siblings().css({background:"#000"});
  })

  $('.web02 .btns button:eq(2)').click(function(){
    $(".web02 h2").html("华为商城");
    $('.web02 a').attr("href","websites/vmall");
    $('.web02 img').attr("src","images/site6.png").hide().stop().fadeIn(1000);
    $(this).css({background:"#309A6C"}).siblings().css({background:"#000"})
  })

  // web03
  $('.web03 a').hover(function(){
    $(this).siblings('span').stop().fadeIn();
  },function(){
    $(this).siblings('span').stop().fadeOut();
  })

  // web04
  $('.web04 a').hover(function(){
    $(this).siblings('span').stop().fadeIn();
  },function(){
    $(this).siblings('span').stop().fadeOut();
  })

  $('.footer_right a').click(function(){
    $('html, body').animate({scrollTop:0},500)
  })
})
