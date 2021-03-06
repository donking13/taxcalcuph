//B: BIR tax calculator
			var taxObj = {
							indZero:{
								first:4167,
								second:5000,
								third:6667,
								fourth:10000,
								fifth:15833,
								sixth:25000,
								seventh:45833
								},
							indOne:{
								first:6250,
								second:7083,
								third:8750,
								fourth:12083,
								fifth:17917,
								sixth:27083,
								seventh:47917
								},
							indTwo:{
								first:8333,
								second:9167,
								third:10833,
								fourth:14167,
								fifth:20000,
								sixth:29167,
								seventh:50000
								},
							indThree:{
								first:10417,
								second:11250,
								third:12917,
								fourth:16250,
								fifth:22083,
								sixth:31250,
								seventh:52038
								},
							indFour:{
								first:12500,
								second:13333,
								third:15000,
								fourth:18333,
								fifth:24167,
								sixth:33333,
								seventh:54167
								}	
						}
	$("#total").on('click','button',function(){
				var salary = $('#basicSal').find('.salary').val();
				var numOfIndependencies = $('#status').find('.independencies').val();
				var commission = $('#suppComp').find('#commission').val();
				var overtime = $('#suppComp').find('#overtime').val();
				var night = $('#suppComp').find('#night').val();
				var holiday = $('#suppComp').find('#holiday').val();
				var bonus = $('#suppComp').find('#bonus').val();
				var compTotal = parseInt(commission) + parseInt(overtime) + parseInt(night) + parseInt(holiday) + parseInt(bonus);
				parseInt(numOfIndependencies);
				var salFirst,salSecond,salThird,salFourth,salFifth,salSixth,salSeventh;
			
			//tax computation:
				function taxCal(){
							if(salary >= salFirst && salary < salSecond){
								var temp = salary - salFirst;
								var excess = temp + compTotal;
								var deduction = excess * .05;
								salary = salary - deduction;
								
								$('#total').find('#net').val(salary + compTotal); 
								$('#total').find('#tax').val(deduction); 
							}
							else if(salary >= salSecond && salary < salThird){
								var temp = salary - salSecond;
								var excess = temp + compTotal;
								var deduction = excess * .10;
								deduction = deduction + 41.67;
								salary = salary - deduction;
								
								$('#total').find('#net').val(salary + compTotal); 
								$('#total').find('#tax').val(deduction); 
							}
							else if(salary >= salThird && salary < salFourth){
								var temp = salary - salThird;
								var excess = temp + compTotal;
								var deduction = excess * .15;
								deduction = deduction + 208.33;
								salary = salary - deduction;
								
								$('#total').find('#net').val(salary + compTotal); 
								$('#total').find('#tax').val(deduction); 
							}
							else if(salary >= salFourth && salary < salFifth){
								var temp = salary - salFourth;
								var excess = temp + compTotal;
								var deduction = excess * .20;
								deduction = deduction + 708.33;
								salary = salary - deduction;
								
								$('#total').find('#net').val(salary + compTotal); 
								$('#total').find('#tax').val(deduction); 
							}
							else if (salary >= salFifth && salary < salSixth){
								var temp = salary - salFifth;
								var excess = temp + compTotal;
								var deduction = excess * .25;
								deduction = deduction + 1875;
								salary = salary - deduction;
								
								$('#total').find('#net').val(salary + compTotal); 
								$('#total').find('#tax').val(deduction); 
							}
							else if (salary >= salSixth && salary < salSeventh){
								var temp = salary - salSixth;
								var excess = temp + compTotal;
								var deduction = excess * .30;
								deduction = deduction + 4166.67;
								salary = salary - deduction;
								
								$('#total').find('#net').val(salary + compTotal); 
								$('#total').find('#tax').val(deduction); 
							}
							else if(salary >= salSeventh){
								var temp = salary - salSeventh;
								var excess = temp + compTotal;
								var deduction = excess * .32;
								deduction = deduction + 10416.67;
								salary = salary - deduction;
								
								$('#total').find('#net').val(salary + compTotal); 
								$('#total').find('#tax').val(deduction);  
							}	
						}
									
					if(numOfIndependencies == "0"){
						salFirst = taxObj.indZero.first;
						salSecond = taxObj.indZero.second;
						salThird = taxObj.indZero.third;
						salFourth = taxObj.indZero.fourth;
						salFifth = taxObj.indZero.fifth;
						salSixth = taxObj.indZero.sixth;
						salSeventh = taxObj.indZero.seventh;
						taxCal();
					}else if(numOfIndependencies == "1"){
						salFirst = taxObj.indOne.first;
						salSecond = taxObj.indOne.second;
						salThird = taxObj.indOne.third;
						salFourth = taxObj.indOne.fourth;
						salFifth = taxObj.indOne.fifth;
						salSixth = taxObj.indOne.sixth;
						salSeventh = taxObj.indOne.seventh;
						taxCal();
					}else if(numOfIndependencies == "2"){
						salFirst = taxObj.indTwo.first;
						salSecond = taxObj.indTwo.second;
						salThird = taxObj.indTwo.third;
						salFourth = taxObj.indTwo.fourth;
						salFifth = taxObj.indTwo.fifth;
						salSixth = taxObj.indTwo.sixth;
						salSeventh = taxObj.indTwo.seventh;
						taxCal();
					}else if(numOfIndependencies == "3"){
						salFirst = taxObj.indThree.first;
						salSecond = taxObj.indThree.second;
						salThird = taxObj.indThree.third;
						salFourth = taxObj.indThree.fourth;
						salFifth = taxObj.indThree.fifth;
						salSixth = taxObj.indThree.sixth;
						salSeventh = taxObj.indThree.seventh;
						taxCal();
					}else if(numOfIndependencies == "4"){
						salFirst = taxObj.indFour.first;
						salSecond = taxObj.indFour.second;
						salThird = taxObj.indFour.third;
						salFourth = taxObj.indFour.fourth;
						salFifth = taxObj.indFour.fifth;
						salSixth = taxObj.indFour.sixth;
						salSeventh = taxObj.indFour.seventh;
						taxCal();
					}		
				
		});
	//E: BIR tax caculator