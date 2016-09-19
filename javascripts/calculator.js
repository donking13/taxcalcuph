$(document).ready(function(){
	//B:-------Show App
	$('.container').on('click','button',function(){
		var dataApp = $(this).data('app');
		if(dataApp == 'quote'){
			$.ajax("apps/quoteform.html",{
				success:function(response){
					$('.show').html(response).slideDown();	
					appCollection();
				},
			})
		}
		else if(dataApp == 'calc'){
			$.ajax("apps/calculator.html",{
				success:function(response){
					$('.show').html(response).slideDown();
					appCollection();	
				}
			})		
		}
		else if(dataApp == 'bir'){
			$.ajax("apps/birtax.html",{
				success:function(response){
					$('.show').html(response).slideDown();
					appCollection();	
				}
			})		
		}
	});
	//E:-------Show App
	//B:-------quoteform js
	function appCollection(){
	$(".quotebutton").on("click","button", function(){
		var $price = $("#terminate").val();
		var $area = $("#area").val();
		var $total = $area * $price;
		
		if($price == 0){
		   alert("please choose a pest");
		}else{
			$("#quote").attr("value",$total);
		}
	});
	//E:-------quoteform js

	//B:-------calculator js
	var number = "";
	var operator = "";
	var total = "";
	var newnumber = "";
	$('#total').val(0);

	$("#numbers").on('click','button', function(){
			number = number + $(this).text();
			$('#total').val(number);
			console.log(number);
	})
	$('#operators').not('#clear').on('click','button', function(){
			newnumber = number;
			number = " ";
			operator = $(this).text();
			console.log(operator);
	})
	$('#equals').on('click','button',function(){
		
		function parseNum(){
			newnumber = parseInt(newnumber);
			number = parseInt(number);		
		}
		function totalAnswer(){
			$('#total').val(answer);
			console.log(answer);
		}

		if(operator === "+"){
			parseNum();
			var answer = newnumber + number;
			totalAnswer();	
		}
		if(operator === "-"){
			parseNum();
			var answer = newnumber - number;
			totalAnswer();
		}
		if(operator === "/"){
			parseNum();
			var answer = newnumber / number;
			totalAnswer();
		}
		if(operator === "*"){
			parseNum();
			var answer = newnumber * number;
			totalAnswer();	
		}
	});

	$('#clear').on('click', function(){
		number = " ";
		newnumber = " ";
		$('#total').val(0);
	});
	//E:-------calculator js
	//B:-------Expand code block 
	$(".code").on('mouseenter','pre',function(){

			$(this).addClass('w600');

		}).on('mouseleave','pre',function(){
			$(this).removeClass('w600');
	});
	//E:-------Expand code block
	//B:-------Code js html expand
	$('.code').on('click','button',function(){
		if($(this).hasClass("html")){
			$('.code').children('pre').hide();
			$('.prehtml').removeClass('hidden').show();
		}
		if($(this).hasClass("js")){
			$('.code').children('pre').hide();
			$('.prejs').removeClass('hidden').show();
		}

	});
	//E:-------Code js html expand
	
	}
	
	
});
    