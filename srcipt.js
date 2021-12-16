

function changeColor() {
$(".card-header").css("color","#BD0A0A")
}

$('.card-header').on("click",changeColor);



function montrerPage1() {
	$(".page2").hide()
	$(".page1").show()
}
$(".btn1").on("click",montrerPage1);

function montrerPage2() {
	$(".page1").hide()
	$(".page2").show()
}
$(".btn2").on("click",montrerPage2);


function modeNuit() {
	if ($("body").hasClass("nuit")) {
		$("body").removeClass("nuit" )
		$("nav").removeClass("nuit" )
	} 
	else {
		$("body").addClass("nuit")
		$("nav").addClass("nuit" )
	}
}
$(".btn-mode").on("click",modeNuit);


$(".effect").mouseenter(function(){
$(".effect").css("color", "red");

  });

$(".effect").mouseout(function() {
	$(".effect").delay(3000);
	$(".effect").css("color", "black")
})

