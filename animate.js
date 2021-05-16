$(document).ready(function(){

    $(".box").on("click", function(){
        let box = $(".box");
        box.animate({height: '550px'}, 'slow');
        box.animate({width: '35em'}, 'slow');
        box.animate({backgroundColor: 'black'}, 'slow');
        box.animate({height: 'hide'}, 'slow', function () {
            $('.container').animate({height: 'show'}, 'slow');
        });
    })

    clear();

    $("#clr").on("click", function(){
        clear();
    });

});


function dis(value){
    $(".screen").append(value);
};

function clear (){
    $(".screen").html("");
}

function equals(){
    try{
        let expression = $(".screen").html();
        let answer = new Function('return ' + expression);
        $(".screen").html(answer) } catch (e){
            $(".screen").html("Please Try Again");
        }
}