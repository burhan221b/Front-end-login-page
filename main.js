$(document).ready(function(){ 
/*code here*/ 
	$('.message a').click(function(){
		$('form').animate({height: "toggle", opacity: "toggle"}, "slow");
	});
	// if(window.jQuery){ alert('it works'); } else { alert('it doesn\'t work'); }﻿
	// $(".message a").click(function(){
	// 	$(".register-form").toggle("slow");
	// 	$(".login-form").toggle("slow");
	// });
});