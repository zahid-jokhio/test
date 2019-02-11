function turnButton() {
    var images =  document.getElementById("image1");
    images.src = "SkinnyAccomplishedBoa-size_restricted.gif"
    var player1 = document.getElementById("player1")
    var player2 = document.getElementById("player2")
    
    
    var number = Math.random();
    var number2 = number * 2;
    number2 = Math.ceil(number2);
    setTimeout(function(){
    if (number2 === 1) {
images.src = "images (1).jpg";
player1.value = "you are winner"
player2.value = "you are looser"


    }
   else if (number2 === 2) {

    images.src = "images.jpg"
player2.value = "you are winner"
player1.value = "you are looser"

    
}

},3000)

}