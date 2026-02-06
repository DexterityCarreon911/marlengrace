$(window).load(function(){
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');
});
$('document').ready(function(){
		var vw;
		$(window).resize(function(){
			 vw = $(window).width()/2;
			 var spacing = Math.min(vw * 0.15, 60); // Responsive spacing, max 60px
			 var startLeft = vw - (spacing * 3); // Center the balloons
			 
			$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
			$('#b11').animate({top:240, left: Math.max(10, startLeft)},500);
			$('#b22').animate({top:240, left: Math.max(10, startLeft + spacing)},500);
			$('#b33').animate({top:240, left: Math.max(10, startLeft + spacing * 2)},500);
			$('#b44').animate({top:240, left: Math.max(10, startLeft + spacing * 3)},500);
			$('#b55').animate({top:240, left: Math.max(10, startLeft + spacing * 4)},500);
			$('#b66').animate({top:240, left: Math.max(10, startLeft + spacing * 5)},500);
			$('#b77').animate({top:240, left: Math.min($(window).width() - 110, startLeft + spacing * 6)},500);
		});

	$('#turn_on').click(function(){
		$('#bulb_yellow').addClass('bulb-glow-yellow');
		$('#bulb_red').addClass('bulb-glow-red');
		$('#bulb_blue').addClass('bulb-glow-blue');
		$('#bulb_green').addClass('bulb-glow-green');
		$('#bulb_pink').addClass('bulb-glow-pink');
		$('#bulb_orange').addClass('bulb-glow-orange');
		$('body').addClass('peach');
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#play').fadeIn('slow');
		});
	});
	$('#play').click(function(){
		var audio = $('.song')[0];
        audio.play();
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
		$('#bulb_red').addClass('bulb-glow-red-after');
		$('#bulb_blue').addClass('bulb-glow-blue-after');
		$('#bulb_green').addClass('bulb-glow-green-after');
		$('#bulb_pink').addClass('bulb-glow-pink-after');
		$('#bulb_orange').addClass('bulb-glow-orange-after');
		$('body').css('backgroud-color','#FFF');
		$('body').addClass('peach-after');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#bannar_coming').fadeIn('slow');
		});
	});

	$('#bannar_coming').click(function(){
		$('.bannar').addClass('bannar-come');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#balloons_flying').fadeIn('slow');
		});
	});

	function loopOne() {
		var windowWidth = $(window).width();
		var windowHeight = $(window).height();
		var randleft = Math.random() * Math.max(0, windowWidth - 100); // Keep balloon within viewport
		var randtop = Math.random() * Math.max(0, windowHeight - 300); // Keep balloon within viewport
		$('#b1').animate({left:randleft,bottom:randtop},10000,function(){
			loopOne();
		});
	}
	function loopTwo() {
		var windowWidth = $(window).width();
		var windowHeight = $(window).height();
		var randleft = Math.random() * Math.max(0, windowWidth - 100);
		var randtop = Math.random() * Math.max(0, windowHeight - 300);
		$('#b2').animate({left:randleft,bottom:randtop},10000,function(){
			loopTwo();
		});
	}
	function loopThree() {
		var windowWidth = $(window).width();
		var windowHeight = $(window).height();
		var randleft = Math.random() * Math.max(0, windowWidth - 100);
		var randtop = Math.random() * Math.max(0, windowHeight - 300);
		$('#b3').animate({left:randleft,bottom:randtop},10000,function(){
			loopThree();
		});
	}
	function loopFour() {
		var windowWidth = $(window).width();
		var windowHeight = $(window).height();
		var randleft = Math.random() * Math.max(0, windowWidth - 100);
		var randtop = Math.random() * Math.max(0, windowHeight - 300);
		$('#b4').animate({left:randleft,bottom:randtop},10000,function(){
			loopFour();
		});
	}
	function loopFive() {
		var windowWidth = $(window).width();
		var windowHeight = $(window).height();
		var randleft = Math.random() * Math.max(0, windowWidth - 100);
		var randtop = Math.random() * Math.max(0, windowHeight - 300);
		$('#b5').animate({left:randleft,bottom:randtop},10000,function(){
			loopFive();
		});
	}

	function loopSix() {
		var windowWidth = $(window).width();
		var windowHeight = $(window).height();
		var randleft = Math.random() * Math.max(0, windowWidth - 100);
		var randtop = Math.random() * Math.max(0, windowHeight - 300);
		$('#b6').animate({left:randleft,bottom:randtop},10000,function(){
			loopSix();
		});
	}
	function loopSeven() {
		var windowWidth = $(window).width();
		var windowHeight = $(window).height();
		var randleft = Math.random() * Math.max(0, windowWidth - 100);
		var randtop = Math.random() * Math.max(0, windowHeight - 300);
		$('#b7').animate({left:randleft,bottom:randtop},10000,function(){
			loopSeven();
		});
	}

	$('#balloons_flying').click(function(){
		$('.balloon-border').animate({top:-500},8000);
		$('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
		$('#b2,#b3,#b6').addClass('balloons-rotate-behaviour-two');
		// $('#b3').addClass('balloons-rotate-behaviour-two');
		// $('#b4').addClass('balloons-rotate-behaviour-one');
		// $('#b5').addClass('balloons-rotate-behaviour-one');
		// $('#b6').addClass('balloons-rotate-behaviour-two');
		// $('#b7').addClass('balloons-rotate-behaviour-one');
		loopOne();
		loopTwo();
		loopThree();
		loopFour();
		loopFive();
		loopSix();
		loopSeven();
		
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#cake_fadein').fadeIn('slow');
		});
	});	

	$('#cake_fadein').click(function(){
		$('.cake').fadeIn('slow');
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#light_candle').fadeIn('slow');
		});
	});

	$('#light_candle').click(function(){
		$('.fuego').fadeIn('slow');
		$(this).fadeOut('slow').promise().done(function(){
			$('#wish_message').fadeIn('slow');
		});
	});

		
	$('#wish_message').click(function(){
		 vw = $(window).width()/2;
		 var spacing = Math.min(vw * 0.15, 60); // Responsive spacing, max 60px
		 var startLeft = vw - (spacing * 3); // Center the balloons

		$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
		$('#b1').attr('id','b11');
		$('#b2').attr('id','b22')
		$('#b3').attr('id','b33')
		$('#b4').attr('id','b44')
		$('#b5').attr('id','b55')
		$('#b6').attr('id','b66')
		$('#b7').attr('id','b77')
		$('#b11').animate({top:240, left: Math.max(10, startLeft)},500);
		$('#b22').animate({top:240, left: Math.max(10, startLeft + spacing)},500);
		$('#b33').animate({top:240, left: Math.max(10, startLeft + spacing * 2)},500);
		$('#b44').animate({top:240, left: Math.max(10, startLeft + spacing * 3)},500);
		$('#b55').animate({top:240, left: Math.max(10, startLeft + spacing * 4)},500);
		$('#b66').animate({top:240, left: Math.max(10, startLeft + spacing * 5)},500);
		$('#b77').animate({top:240, left: Math.min($(window).width() - 110, startLeft + spacing * 6)},500);
		$('.balloons').css('opacity','0.9');
		$('.balloons h2').fadeIn(3000);
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#story').fadeIn('slow');
		});
	});
	
	$('#story').click(function(){
		$(this).fadeOut('slow');
		$('.cake').fadeOut('fast').promise().done(function(){
			$('.message').fadeIn('slow');
		});
		
		var i;

		function msgLoop (i) {
			$("p:nth-child("+i+")").fadeOut('slow').delay(800).promise().done(function(){
			i=i+1;
			$("p:nth-child("+i+")").fadeIn('slow').delay(1000);
			if(i==50){
				$("p:nth-child(49)").fadeOut('slow').promise().done(function () {
					$('.cake').fadeIn('fast');
				});
				
			}
			else{
				msgLoop(i);
			}			

		});
			// body...
		}
		
		msgLoop(0);
		
	});
});




//alert('hello');