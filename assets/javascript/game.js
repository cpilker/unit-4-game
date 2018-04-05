//Begin jQuery

        $(document).ready(function() {
    
        //Declare global variables
            var randomNumber = $("#computer-number");
            var Wins = 0;
            var Losses = 0;
            var crystal = [];
            var crystals = $(".crystal-images");
            var crystal1 = $("#crystal1");
            var crystal2 = $("#crystal2");
            var crystal3 = $("#crystal3");
            var crystal4 = $("#crystal4");
            var myGuess = $("#My-guess");
            var score = 0;

        //Generate a random number
            function generateNumber(x,y) {
                genNumber = Math.floor(Math.random() * ((y - x)+ 1) + x);
                randomNumber.append(genNumber);
                console.log(genNumber);
            };
            
        //Execute the function
            generateNumber(19,120)

        //Generate Crystal Values

            function crystalGenNumber2(x,y) {
                for ( i = 0; i < 4; i++) {
                    crystalNum = Math.floor(Math.random() * ((y - x)+ 1) + x);
                    crystal[i] = crystalNum;
                    console.log(crystalNum);
                }
                console.log(crystal);
                console.log('crystal1', crystal1);
                console.log('crystal2', crystal2);
                console.log('crystal3', crystal3);
                console.log('crystal4', crystal4);
                crystal1.val(crystal[0]);
                crystal2.val(crystal[1]);
                crystal3.val(crystal[2]);
                crystal4.val(crystal[3]);
            };

            crystalGenNumber2(1,12)

        //Functions to clear the game if you win/lose
            function clear() {
                $("#computer-number").empty();
                $("#My-guess").html("0");
                score = 0;
                generateNumber(19,120);
                crystalGenNumber2(1,12);
                };
            

        //As you select more cyrstals the numbers should add up
            $(".image").on("click", function() {
                
	            score += parseInt($(this).val());
	            $("#My-guess").text(score);

                if(score === genNumber) {
                    /*alert("You Win!");*/
                    Wins++;
                    $("#Wins").html(Wins);
                    $("#Results-Statement").empty().html("You Win!! <br>");
                    clear();
                }

                if(score > genNumber) {
                    /*alert("You Lose!");*/
                    Losses++;
                    $("#Losses").html(Losses);
                    $("#Results-Statement").empty().html("You Lose!! <br>");
                    clear();
                }
            });
        });
