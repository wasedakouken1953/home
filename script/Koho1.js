//menu
function scrollHeader(){
	$('.menu').each(function(){
		let windowHeight = $(window).height();
		let divHeight = $(this).offset().top;
		let scroll = $(window).scrollTop();  //動いてないのスクロール説
		let differenceHeight = divHeight - windowHeight;
		if (scroll >= differenceHeight){
			$(this).addClass('fadeUpMenu');
			$('.title').addClass('fadeUpMenu');
			$('.line1').addClass('fadeUpMenu');
			$('.ThemeMiddleClass').addClass('fadeUpMenu');
		}else{
			$(this).removeClass('fadeUpMenu');
			$('.title').removeClass('fadeUpMenu');
			$('.line1').removeClass('fadeUpMenu');
			$('.ThemeMiddleClass').removeClass('fadeUpMenu');
		}
	});
}
//公法会
function loadTheme() {
	$(".h1").each(function() {$(this).addClass("random");});
	}
//副題
function loadViceTheme(){
	$('.text').each(function() {
		$(this).addClass('textAnimeClass');
	});
}
//公法会って何？
function discussion2() {
	$('.discussion2').each(function(){
		let windowHeight2 = $(window).height();
		let divHeight2 = $(this).offset().top;
		let scroll2 = $(window).scrollTop();
		let differenceHeight2 = divHeight2 - windowHeight2;
		if (scroll2 >= differenceHeight2){
			$(this).addClass('discussion2Anime');
			$('.discussion2Content').addClass('discussion2ContentAnime');
			$(".outline").addClass("outlineAnime");
			$('.outlineContent').addClass('outlineContentAnime');
		} else {
			$(this).removeClass('discussion2Anime');
			$('.discussion2Content').removeClass('discussion2ContentAnime');
			$('.outline').removeClass('outlineAnime');
			$('.outlineContent').removeClass('outlineContentAnime');
		}
	});
}
//いつできたの〜？
function founderFlex() {
	$('.history').each(function(){
		let windowHeight2 = $(window).height();
		let divHeight2 = $(this).offset().top;
		let scroll2 = $(window).scrollTop();
		let differenceHeight2 = divHeight2 - windowHeight2;
		if (scroll2 >= differenceHeight2){
			$(this).addClass('historyAnime');
			$('.historyContent').addClass('historyContentAnime');
			$(".okuma").addClass("okumaAnime");
			$('.okumaContent').addClass('okumaContentAnime');
		} else {
			$(this).removeClass('historyAnime');
			$('.historyContent').removeClass('historyContentAnime');
			$('.okuma').removeClass('okumaAnime');
			$('.okumaContent').removeClass('okumaContentAnime');
		}
	});
}

//最近の活動
/*
var mainPicture = document.querySelector('.mainPicture');
var recentActivity1 = document.getElementsByClassName(".rececntActivity1");
let recentActivity2 = document.getElementsByClassName(".rececntActivity2");
let recentActivity3 = document.getElementsByClassName(".rececntActivity3");

recentActivity1.addEventListener('click', function(){
	document.getElementsByClassName('.mainPicture').innerHTML = '<img src="recentActivity1.jpg" class="rececntActivity1" alt="最近の活動">';
});*/
/*
const recentActivities = document.querySelectorAll('.rececntActivity');
recentActivities.forEach(function(item){
	item.oncilck = function() {
		document.getElementById('MainPicture').src = this.dataset.image;
	}
});*/




function mainPicture() {
	$('.mainPicture').each(function(){
		let windowHeight3 = $(window).height();
		let divHeight3 = $(this).offset().top;
		let scroll3 = $(window).scrollTop();
		let differenceHeight3 = divHeight3 - windowHeight3;
		if (scroll3 >= differenceHeight3){
			$(this).addClass('mainPictureAnime');
			$('.recentBox1').addClass('recentBox1Anime');
			$(".recentBox2").addClass("recentBox2Anime");
			$('.recentBox3').addClass('recentBox3Anime');
		} else {
			$(this).removeClass('mainPictureAnime');
			$('.recentBox1').removeClass('recentBox1Anime');
			$('.recentBox2').removeClass('recentBox2Anime');
			$('.recentBox3').removeClass('recentBox3Anime');
		}
	});
}

//例年の予定
function plan() {
	for(let i=0; i<=10; i++){
	$('.plan'+ i).each(function(){
		let windowHeight4 = $(window).height();
		let divHeight4 = $('.plan1').offset().top;
		let scroll4 = $(window).scrollTop();
		let differenceHeight4 = divHeight4 - windowHeight4;
		if (scroll4 >= differenceHeight4){
			$(this).addClass('plan'+i+'Anime');
			$('.beCareful').addClass('beCarefulAnime');
		} else {
			$(this).removeClass('plan'+i+'Anime');
			$('.beCareful').removeClass('beCarefulAnime');
		}
	});
						}
}


//スクロールイベント
$(window).scroll(function(){
	
	scrollHeader();
	
	discussion2();
	
	founderFlex();
	
	mainPicture();
	
	plan();
	
});
//ロードイベント
$(window).on('load', function(){
	
	loadTheme();
	
	loadViceTheme();

});

//クリックイベント
$('.recentBox1').on('click', function(){
	document.getElementById('mainPicture').innerHTML = '<img src="img/recentActivity1.jpg" class="rececntActivity" alt="最近の活動">';
});
$('.recentBox2').on('click', function(){
	document.getElementById('mainPicture').innerHTML = '<img src="img/recentActivity2.png" class="rececntActivity" alt="最近の活動">';
});
$('.recentBox3').on('click', function(){
	document.getElementById('mainPicture').innerHTML = '<img src="img/recentActivity3.png" class="rececntActivity" alt="最近の活動">';
});















/*
$(window).on('load', function(){
	$('.menu').each('load', function(){
		let windowHeight = $(window).height();
		let divHeight = $(this).offset().top;
		let scroll = $(window).scrollTop();
		if (scroll >= divHeight - windowHeight){
			$(this).addClass('fadeUpMenu');
		}else{
			$(this).removeClass('fadeUpMenu');
		}
	});
});*/
/*
$(window).on('load', function(){
	$('.link').each(function(){
	var windowHeight = $(window).height();
	var menuOffset = $('.menu').offset().top-50;
	var scrollAmount = $(window).scrollTop();
	if (scrollAmount >= menuOffset - windowHeight){
		$('.menu').addClass('fadeUpMenu');
	} else {
		$('.menu').removeClass('fadeUpMenu');
	}
});
});*/
