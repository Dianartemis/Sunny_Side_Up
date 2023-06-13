var warArray = [], playerHand = [], compHand = [];
var playDeck = '', computerDeck = '', playerCard = '', compCard = '';
var playing = false;

function fillArray() {
	var deck = [];
	for (var i = 0; i < 52; i++)
		deck[i] = i;

	shuffle(deck);
	splitCards(deck);
	console.log(deck.length);
}

function shuffle(deck) {
    for(var j, x, i = deck.length; i; j = Math.floor(Math.random() * i), x = deck[--i], deck[i] = deck[j], deck[j] = x);
    return deck;
}

function splitCards(deck) {
	var i = 0;

	while (i != deck.length) {
		playerHand.push(deck[i]);
		compHand.push(deck[(i+1)]);
		i+=2;
	}

	$('.playCount').html("Your cards: " + playerHand.length);
	$('.compCount').html("Moby the Robot's cards: " + compHand.length);
	$('.result').html("");
}

function deal() {
	$('.playerCard').html("");
	$('.compCard').html("");
	$('.newGame').show();
	playerCard = playerHand[0];
	compCard = compHand[0];

	var img = document.createElement('img');
	var img2 = document.createElement('img');
	img.src = ("../images/cards/" + playerHand[0] + ".png");
	img2.src = ("../images/cards/" + compHand[0] + ".png");

	$('.playerCard').append(img).animateCss("flipInYRev");
	$('.compCard').append(img2).animateCss("flipInY");
	compare(playerCard, compCard);
}

function compare(player, comp) {
	if((player % 13) > (comp % 13)) {
		$('.result').html("You win!").animateCss("flipInX");
		playerHand.push(comp);
		playerHand.push(player);
		playerHand.shift();
		compHand.shift();

		setTimeout(function() {
			moveCards('player');
		}, 1500);
		updateCount();
		checkWin();
	}
	else if ((player % 13) < (comp % 13)) {
		$('.result').html("Moby wins!").animateCss("flipInX");
		compHand.push(player);
		compHand.push(comp);
		compHand.shift();
		playerHand.shift();

		setTimeout(function() {
			moveCards('comp');
		}, 1500);
		updateCount();
		checkWin();
	}
	else if ((player % 13) === (comp % 13))
		war();
}

function moveCards(winner) {
	if (winner == "player") {
		console.log("moving left");
		$(".playerCard img").css('position', 'relative').animate({ left: '-2000px' }, function() { $(this).hide(); });
		$(".compCard img").css('position', 'relative').animate({ left: '-2000px' }, function() { $(this).hide(); });
	}
	else if (winner == "comp") {
		console.log("moving right");
		$(".playerCard img").css('position', 'relative').animate({ left: '2000px' }, function() { $(this).hide(); });
		$(".compCard img").css('position', 'relative').animate({ left: '2000px' }, function() { $(this).hide(); });
	}
	else if (winner == "playerWar") {
		$("#warArea img").css("position", "relative").animate({ left: '-2000px' }, function() { $("#warArea img").hide(); });
	}
	else if (winner == "compWar") {
		$("#warArea img").css("position", "relative").animate({ left: '2000px' }, function() { $("#warArea img").hide(); });
	}
}

function war() {
	$('#warAnimation').css("display", "table");
	$("#warText").animateCss("lightSpeedIn", function() {
		$("#warText").animateCss("lightSpeedOut");
	});

	setTimeout(function() {
		$('#warAnimation').hide();
		$("#warText").removeClass("lightSpeedOut");
		$("#warArea").show();
		warToArray();
	}, 2000);
}

function warToArray() {
	var cardStr = "";
	var length = 0;

	if (playerHand.length < 5 || compHand.length < 5) {
		if(playerHand.length > compHand.length) {
			length = compHand.length - 1;
		}
		else if (playerHand.length < compHand.length) {
			length = playerHand.length - 1;
		}
	}
	else {
		length = 3;		
	}
	for (var i = 0; i < length; i++) {
		warArray.push(playerHand[0]);
		playerHand.shift();
		warArray.push(compHand[0]);
		compHand.shift();
		cardStr += '<img src="images/card.png">';
	}
	$(".playerWarFinal").html("<img src='images/cards/"+playerHand[0]+".png'>").animateCss("flipInYRev");
	$(".playerWarCards").html(cardStr);
	$(".compWarCards").html(cardStr);
	$(".compWarFinal").html("<img src='images/cards/"+compHand[0]+".png'>").animateCss("flipInY");
	compareWar(playerHand[0], compHand[0]);
}

function compareWar(player, comp) {
	if((player % 13) > (comp % 13)) {
		$('.result').html("Player wins!");
		playerHand.push.apply(playerHand, warArray);
		playerHand.push(comp);
		playerHand.push(player);
		
		playerHand.shift();
		compHand.shift();
		warArray.length = 0;

		setTimeout(function() {
			moveCards("playerWar");
			moveCards("player");
		}, 3000);

		setTimeout(function() {
			$("#warArea").hide();
		}, 3500);

		updateCount();
		checkWin();
	}
	else if ((player % 13) < (comp % 13)) {
		$('.result').html("Moby the Robot wins!");
		compHand.push.apply(compHand, warArray);
		compHand.push(player);
		compHand.push(comp);

		playerHand.shift();
		compHand.shift();
		warArray.length = 0;

		setTimeout(function() {
			moveCards("compWar");
			moveCards("comp");
		}, 3000);
		setTimeout(function() {
			$("#warArea").hide();
		}, 3500);

		updateCount();
		checkWin();
	}
	else if ((player % 13) === (comp % 13))
		war();
}

function checkWin() {
	if (playerHand.length == 0) {
		$(".result").html("Moby the Robot wins the game :(").animateCss("flipInX");
		$('.playerCard').html("");
		$('.playerDeck').html("");
		$('.deal').hide();
	}
	else if (compHand.length == 0) {
		$(".result").html("You won the game! :)").animateCss("flipInX");
		$('.compCard').html("");
		$('.compDeck').html("");
		$('.deal').hide();
	}
}

function play() {
	hideAll();
	$("#header").show().addClass("animated fadeInDown");
	$("#gameboard").show();
	playing = true;
	preloadImages();
	$("#jumbotron").show();
	$("#howToPlay").show();
	fillArray();
	$("#year").html(new Date().getFullYear());
}

function updateCount() {
	$('.playCount').html("Player cards: " + playerHand.length);
	$('.compCount').html("Moby the Robot's cards: " + compHand.length);
}

function hideAll() {
	$("#jumbotron").hide();
	$("#gameboard").hide();
	$("#howToPlay").hide();
	$("#header").hide();
	$(".newGame").hide();
}

$.fn.extend({
	animateCss: function(animationName, callback) {
		var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
            if (callback) {
              callback();
            }
        });
        return this;
	}
});

function preloadImages() {
	for (var i = 0; i < 52; i++) {
		var img = new Image();
		img.src = 'images/cards/'+i+'.png';
	}
}