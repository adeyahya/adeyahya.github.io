$(document).ready(function(){
	$(".navbar-brand").mouseenter(function(){
		$(".fa-html5").css("color","#FF4C4C");
	});

	$(".navbar-brand").mouseleave(function(){
		$(".fa-html5").css("color","#777");
	})

	$(".typing").typed({
	        // Waits 1000ms after typing "First"
        strings: ["| Monyetbegok","| Web Developer","| Blogger","| Playboy^5000","| Writter","Yahya Prasetyo"]
    });

    $(".barel-rol").click(function(){
    	$("body").css("-webkit-transform","rotate(360deg)");
    	$("body").css("-moz-transform","rotate(360deg)");
    	$("body").css("-o-transform","rotate(360deg)");
    	$("body").css("-ms-transform","rotate(360deg)");
    });
    $(".flip").click(function(){
    	$(".flipping").css("-webkit-transform","rotateY(360deg)");
    	$(".flipping").css("-moz-transform","rotateY(360deg)");
    	$(".flipping").css("-o-transform","rotateY(360deg)");
    	$(".flipping").css("-ms-transform","rotateY(360deg)");
    });
});