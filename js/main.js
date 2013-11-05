//alert("Hello");
//Run code once the page has loaded
$(document).ready(function(){
	//alert("Hi");
	//change the footers bg color
	$("#footer").css("background-color","#00ff00");
	//click link to hide h1 tags
	$("#btremove").click(function(){
		$("#main h1").hide("slow");
	});
});