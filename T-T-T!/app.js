let turnO = true; //playerX, playerY;
let count = 0;

 

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];


$(".box").on("click", (e) => {
  $(e.currentTarget).prop("disabled", true);
  if (turnO) {
    $(e.currentTarget).text("X");
    turnO = false;
  } else {
    $(e.currentTarget).text("O");
    turnO = true;
  }

  $(e.currentTarget).css({
    "background-color": "white",
    color: "#f72585",
    "text-shadow": "0 0 3px black",
  });
  
  checkWinner();
  count++;

  let isWinner = checkWinner();
  if (count === 9 && !isWinner) {
    $("p").text("It's a Draw! Press RESTART");
    $(".box").prop("disabled", true);
  }
});

const checkWinner = () => {
  for (let patter of winPatterns) {
    /*
    let boxes = $(".box"); let reSetBtn = $(".newBtn")
    console.log(patter); console.log(patter[0],patter[1],patter[2])
    console.log(boxes[patter[0]].innerText,
                boxes[patter[1]].innerText,
                boxes[patter[2]].innerText) 

    let posVal1 = boxes[patter[0]].innerText;
    let posVal2 = boxes[patter[1]].innerText;
    let posVal3 = boxes[patter[2]].innerText;
    
    */
    let $posVal1 = $(".box").eq(patter[0]).text();
    let $posVal2 = $(".box").eq(patter[1]).text();
    let $posVal3 = $(".box").eq(patter[2]).text();

    if ($posVal1 != "" && $posVal2 != "" && $posVal3 != "") {
      if ($posVal1 === $posVal2 && $posVal1 === $posVal3)
       {
        $("p").text(`Congo!! Player ${$posVal1} You WON `);
        $(".box").prop("disabled", true);
        return true;
      }
    }
  }
};

let untouchedButtons = $(".box");
untouchedButtons.css({backgroundColor: "#fdfcdc",opacity: 1,zIndex: 1,});
        

$(".reSetBtn").on("click",reSetGame = () => {
    turnO = true;
    count = 0;
    enableAll();
  });

const enableAll = () => {
  $(".box").text(""); $("p").text("TIC TAC TOE");
  $(".box").prop("disabled", false);
  $(".box").css({ backgroundColor: "white" });
};
