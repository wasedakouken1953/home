//var $section = $('.box');
$.scrollify({
    section : ".box",//1ページスクロールさせたいエリアクラス名
    scrollbars:"false",//スクロールバー表示・非表示設定
    interstitialSection : "#header",//ヘッダーフッターを認識し、1ページスクロールさせず表示されるように設定
    easing: "swing", // 他にもlinearやeaseOutExpoといったjQueryのeasing指定可能
    scrollSpeed: 500, // スクロール時の速度
    
    //以下、ページネーション設定
    before:function(i,panels) {

    //setCurrent();

    var ref = panels[i].attr("data-section-name");
    $(".pagination .active").removeClass("active");
    $(".pagination").find("a[href=\"#" + ref + "\"]").addClass("active");
    },
    afterRender:function() {
    //setCurrent();

    var pagination = "<ul class=\"pagination\">";   //'<li class="' + addClass + '">'でもよかった
    var activeClass = "";
    $(".box").each(function(i) {//1ページスクロールさせたいエリアクラス名を指定
    activeClass = "";
    if(i===$.scrollify.currentIndex()) {
    activeClass = "active";
    }
    pagination += "<li><a class=\"" + activeClass + "\" href=\"#" + $(this).attr("data-section-name") + "\"><span class=\"hover-text\">" + $(this).attr("data-section-name").charAt(0).toUpperCase() + $(this).attr("data-section-name").slice(1) + "</span></a></li>";
    });
    pagination += "</ul>";
    
    /*function setCurrent(i = 0){
      $section.removeClass('innerBoxAnime');
      $section.eq(i).addClass('innerBoxAnime');
    }*/

    $("#box1").append(pagination);//はじめのエリアにページネーションを表示
    $(".pagination a").on("click",$.scrollify.move);
    }
    
    });


/*
    function scrollHeader(){
      $('.InnerBox').each(function(){
        $(this).addClass('innerBoxAnime');
      });
   }*/

   function scrollHeader01(){
      $('.InnerBox').each(function(){
         let windowHeight1 = $(window).height();
         let divHeight1 = $(this).offset().top + 100;
         let scroll1 = $(window).scrollTop();  //動いてないのスクロール説
         let differenceHeight1 = divHeight1 - windowHeight1;
         //console.log(differenceHeight1);
         //console.log(scroll1);
         if (scroll1 >= differenceHeight1){
            $(this).addClass('innerBoxAnime');
            $(".tag").addClass('innerBoxAnime');
            //console.log('いけます');
            $('.contentBox').addClass('translateTitleBox');
            $('.content').addClass('translateTitle');
         }else{
            $(this).removeClass('innerBoxAnime');
            $(".tag").removeClass('innerBoxAnime');
            //console.log('まだです');
            $('.contentBox').removeClass('translateTitleBox');
            $('.content').removeClass('translateTitle');
         }
      });
   }
   // function scrollHeader01(){
   //    $('.InnerBox01').each(function(){
   //       let windowHeight1 = $(window).height();
   //       let divHeight1 = $(this).offset().top + 100;
   //       let scroll1 = $(window).scrollTop();  //動いてないのスクロール説
   //       let differenceHeight1 = divHeight1 - windowHeight1;
   //       //console.log(differenceHeight1);
   //       //console.log(scroll1);
   //       if (scroll1 >= differenceHeight1){
   //          $(this).addClass('innerBoxAnime');
   //          $(".tag").addClass('innerBoxAnime');
   //          //console.log('いけます');
   //          $('.contentBox01').addClass('translateTitleBox01');
   //          $('.content01').addClass('translateTitle01');
   //       }else{
   //          $(this).removeClass('innerBoxAnime');
   //          $(".tag").removeClass('innerBoxAnime');
   //          //console.log('まだです');
   //          $('.contentBox01').removeClass('translateTitleBox01');
   //          $('.content01').removeClass('translateTitle01');
   //       }
   //    });
   // }
   // function scrollHeader02(){
   //    $('.InnerBox02').each(function(){
   //       let windowHeight1 = $(window).height();
   //       let divHeight1 = $(this).offset().top + 100;
   //       let scroll1 = $(window).scrollTop();  //動いてないのスクロール説
   //       let differenceHeight1 = divHeight1 - windowHeight1;
   //       //console.log(differenceHeight1);
   //       //console.log(scroll1);
   //       if (scroll1 >= differenceHeight1){
   //          $(this).addClass('innerBoxAnime');
   //          $(".tag").addClass('innerBoxAnime');
   //          //console.log('いけます');
   //          $('.contentBox02').addClass('translateTitleBox02');
   //          $('.content02').addClass('translateTitle02');
   //       }else{
   //          $(this).removeClass('innerBoxAnime');
   //          $(".tag").removeClass('innerBoxAnime');
   //          //console.log('まだです');
   //          $('.contentBox02').removeClass('translateTitleBox02');
   //          $('.content02').removeClass('translateTitle02');
   //       }
   //    });
   // }

   function scrollHeader02(){
      $('.InnerBox2').each(function(){
         let windowHeight1 = $(window).height();
         let divHeight1 = $(this).offset().top + 100;
         let scroll1 = $(window).scrollTop();  //動いてないのスクロール説
         let differenceHeight1 = divHeight1 - windowHeight1;
         //console.log(differenceHeight1);
         //console.log(scroll1);
         if (scroll1 >= differenceHeight1){
            $(this).addClass('innerBoxAnime');
            $(".tag").addClass('innerBoxAnime');
            //console.log('いけます');
            $('.contentBox02').addClass('translateTitleBox02');
            $('.content02').addClass('translateTitle02');
         }else{
            $(this).removeClass('innerBoxAnime');
            $(".tag").removeClass('innerBoxAnime');
            //console.log('まだです');
            $('.contentBox02').removeClass('translateTitleBox02');
            $('.content02').removeClass('translateTitle02');
         }
      });
   }

  /* $innerBoxes = array ('.InnerBox', '.InnerBox2', '.InnerBox3');
   $innerBox = undefined;
   foreach($innerBoxes as $innerBox){
      function scrollHeader1(){
         $($innerBox).each(function(){
            let windowHeight1 = $(window).height();
            let divHeight1 = $(this).offset().top + 100;
            let scroll1 = $(window).scrollTop();  //動いてないのスクロール説
            let differenceHeight1 = divHeight1 - windowHeight1;
            //console.log(differenceHeight1);
            //console.log(scroll1);
            if (scroll1 >= differenceHeight1){
               $(this).addClass('innerBoxAnime');
               $(".tag").addClass('innerBoxAnime');
               //console.log('いけます');
               $('.contentBox').addClass('translateTitleBox');
               $('.content').addClass('translateTitle');
            }else{
               $(this).removeClass('innerBoxAnime');
               $(".tag").removeClass('innerBoxAnime');
               //console.log('まだです');
               $('.contentBox').removeClass('translateTitleBox');
               $('.content').removeClass('translateTitle');
            }
         });
      }
   }
*/
/*
   function scrollHeader1(){
      $('.InnerBox1').each(function(){
         let windowHeight1 = $(window).height();
         let divHeight1 = $(this).offset().top + 100;
         let scroll1 = $(window).scrollTop();  //動いてないのスクロール説
         let differenceHeight1 = divHeight1 - windowHeight1;
         //console.log(differenceHeight1);
         //console.log(scroll1);
         if (scroll1 >= differenceHeight1){
            $(this).addClass('innerBoxAnime');
            $(".tag1").addClass('innerBoxAnime');
            //console.log('いけます');

            $('.contetnt1Box').addClass('translateTitle1Box');
            $('.content1').addClass('translateTitle1');
         }else{
            $(this).removeClass('innerBoxAnime');
            $(".tag1").removeClass('innerBoxAnime');
            //console.log('まだです');

            $('.contetnt1Box').removeClass('translateTitle1Box');
            $('.content1').removeClass('translateTitle1');
         }
      });
   }*/
   
   /*function scrollHeader2(){
      $('.InnerBox2').each(function(){
         let windowHeight2 = $(window).height();
         let divHeight2 = $(this).offset().top + 100;
         let scroll2 = $(window).scrollTop();  //動いてないのスクロール説
         let differenceHeight2 = divHeight2 - windowHeight2;
         //console.log(differenceHeight2);
         //console.log(scroll2);
         if (scroll2 >= differenceHeight2){
            $(this).addClass('innerBoxAnime');
            $(".tag2").addClass('innerBoxAnime');
            //console.log('いけます');

            $('.contetnt2Box').addClass('translateTitle2Box');
            $('.content2').addClass('translateTitle2');
         }else{
            $(this).removeClass('innerBoxAnime');
            $(".tag2").removeClass('innerBoxAnime');
            //console.log('まだです');

            $('.contetnt2Box').removeClass('translateTitle2Box');
            $('.content2').removeClass('translateTitle2');
         }
      });
   }*/
   function scrollHeader03(){
      $('.InnerBox3').each(function(){
         let windowHeight3 = $(window).height();
         let divHeight3 = $(this).offset().top + 100;
         let scroll3 = $(window).scrollTop();  //動いてないのスクロール説
         let differenceHeight3 = divHeight3 - windowHeight3;
         //console.log(differenceHeight3);
         //console.log(scroll3);
         if (scroll3 >= differenceHeight3){
            $('.InnerBox3').addClass('innerBoxAnime');
            $(".tag").addClass('innerBoxAnime');
            //console.log('いけます');
            $('.content3Box').addClass('translateTitle3Box');
            $('.content3').addClass('translateTitle3');
         }else{
            $('.InnerBox3').removeClass('innerBoxAnime');
            $(".tag").removeClass('innerBoxAnime');
            //console.log('まだです');

            $('.content3Box').removeClass('translateTitle3Box');
            $('.content3').removeClass('translateTitle3');
         }
      });
   }

   $(window).scroll(function(){
      //scrollHeader1();
      scrollHeader01();
      scrollHeader02();
      //scrollHeader2();
      scrollHeader03();
   });
   
  $(document).ready(function(){$(".roppo").on('click', function(){
      $(".list").toggleClass("listAnime");
   });
  });

    /*$(window).scroll(function(){
        document.getElementById('BoxAnime').addClass('innerBoxAnime');
    });*/
   /* window.addEventListener('scroll', function(){
        //document.getElementById('BoxAnime').addClass('innerBoxAnime');
        Count();
    });*/

//let count = 0;
/*
function Count(){
 count ++;
 if(count = 1){
    document.getElementById('BoxAnime1').addClass('innerBoxAnime');
 } else if(count = 2){
    document.getElementById('BoxAnime2').addClass('innerBoxAnime');
 } else if(count = 3){
    document.getElementById('BoxAnime3').addClass('innerBoxAnime');
 }
}*/

//offset関数を暇なときに作っておこう
/*
var offset = $(this).offset().top;
console.log(offset);
var windowHeight = $(window).height();
console.log(windowHeight);*/

function load() {
	$('.Title').addClass('topAnime1');
	$('.sotukaisei').addClass('topAnime2');
	$('.upAnime').addClass('topAnime3');
}
//ロードイベント
$(window).on('load', function(){
	load();
});
