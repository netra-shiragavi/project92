player1_name = localStorage.getItem("p1");
player2_name = localStorage.getItem("p2");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " :";
document.getElementById("player2_name").innerHTML = player2_name + " :";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;




function send(){
    no1 = document.getElementById("no.1").value;
    no2 = document.getElementById("no.2").value;
    correctanns= parseInt(no1) * parseInt(no2);

    question_no="<h4>" +"Question " no1 + "x" + no2 + "</h4>";
    ibox = "<br> Answer : <input type='text' id='answeribx' > ";
    checkbutton = "<br><br><buttton> class='btn btn-info' onclick='check()'>Check</button> ";
    row=  question_no  +  ibox  +  checkbutton;
    
    document.getElementById("output").innerHTML=row;
    document.getElementById("number_1").value="";
    document.getElementById("number_2").value="";

}