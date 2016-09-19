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
	//B: BIR tax calculator
	$("#total").on('click','button',function(){
				var salary = $('#basicSal').find('.salary').val();
				var status = $('#status').find('.status').val();
				var numOfIndependencies = $('#status').find('.independencies').val();
				var commission = $('#suppComp').find('#commission').val();
				var overtime = $('#suppComp').find('#overtime').val();
				var night = $('#suppComp').find('#night').val();
				var holiday = $('#suppComp').find('#holiday').val();
				var bonus = $('#suppComp').find('#bonus').val();
				var compTotal = parseInt(commission) + parseInt(overtime) + parseInt(night) + parseInt(holiday) + parseInt(bonus);
				parseInt(numOfIndependencies);

				if(status == "single"){
					if(numOfIndependencies > 4){
						alert('choose only 1-4 number of independencies');
					}else{
						if(numOfIndependencies == 0){
							if(salary >= 4167 && salary <= 4999){
								var temp = salary - 4167;
								var excess = temp + compTotal;
								var deduction = excess * .05;
								salary = salary - deduction;
								console.log(temp);
								console.log(excess);
								console.log(deduction);
								$('#total').find('#net').val(salary + compTotal); 
								$('#total').find('#tax').val(deduction); 
							}
							else if(salary >= 5000 && salary <= 6666){
								var temp = salary - 5000;
								var excess = temp + compTotal;
								var deduction = excess * .10;
								deduction = deduction + 41.67;
								salary = salary - deduction;
								console.log(temp);
								console.log(excess);
								console.log(deduction);
								$('#total').find('#net').val(salary + compTotal); 
								$('#total').find('#tax').val(deduction); 
							}
							else if(salary >= 6667 && salary <= 9999){
								var temp = salary - 6667;
								var excess = temp + compTotal;
								var deduction = excess * .15;
								deduction = deduction + 208.33;
								salary = salary - deduction;
								console.log(temp);
								console.log(excess);
								console.log(deduction);
								$('#total').find('#net').val(salary + compTotal); 
								$('#total').find('#tax').val(deduction); 
							}
							else if(salary >= 10000 && salary <= 15832){
								var temp = salary - 10000;
								var excess = temp + compTotal;
								var deduction = excess * .20;
								deduction = deduction + 708.33;
								salary = salary - deduction;
								console.log(temp);
								console.log(excess);
								console.log(deduction);
								$('#total').find('#net').val(salary + compTotal); 
								$('#total').find('#tax').val(deduction); 
							}
							else if (salary >= 15833 && salary <= 24999){
								var temp = salary - 15833;
								var excess = temp + compTotal;
								var deduction = excess * .25;
								deduction = deduction + 1875;
								salary = salary - deduction;
								console.log(temp);
								console.log(excess);
								console.log(deduction);
								$('#total').find('#net').val(salary + compTotal); 
								$('#total').find('#tax').val(deduction); 
							}
							else if (salary >= 25000 && salary <= 45832){
								var temp = salary - 25000;
								var excess = temp + compTotal;
								var deduction = excess * .30;
								deduction = deduction + 4166.67;
								salary = salary - deduction;
								console.log(temp);
								console.log(excess);
								console.log(deduction);
								$('#total').find('#net').val(salary + compTotal); 
								$('#total').find('#tax').val(deduction); 
							}
							else if(salary >= 45833){
								var temp = salary - 45833;
								var excess = temp + compTotal;
								var deduction = excess * .32;
								deduction = deduction + 10416.67;
								salary = salary - deduction;
								console.log(temp);
								console.log(excess);
								console.log(deduction);
								$('#total').find('#net').val(salary + compTotal); 
								$('#total').find('#tax').val(deduction);  
							}

						}
						

					}

				}
				else if(status == "married"){
					if(numOfIndependencies > 4){
						alert('choose only 1-4 number of independencies');
					}
					
				}else{

					alert("choose your status");
				}
		});
	//E: BIR tax caculator
	}

});
    