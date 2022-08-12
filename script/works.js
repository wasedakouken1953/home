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

function load() {
	$('.Title').addClass('topAnime1');
	$('.sotukaisei').addClass('topAnime2');
	$('.upAnime').addClass('topAnime3');
}


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

//スクロールイベント
$(window).scroll(function(){

	mainPicture();

});
//ロードイベント
$(window).on('load', function(){
	load();
});