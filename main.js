let collapsed = true; //variable to check the state of the collapsed section
let currentDiv; // variable to store the current faq headimg that has been pressed

function collapse(data) { //data variable to pass the div that is clicked

    if (collapsed  == true) { //if the collapsed sections are collapsed
        $(".faq-text").slideUp(); 
        $("#text-"+data+"").slideDown();
        $("#dropdown-"+data+"").css('transform', 'rotateX(180deg)');
        $("#title-"+data+"").css({'color': 'hsl(238, 29%, 16%)', 'font-family': 'kumbh-bold'});
        collapsed = false;
    } else{
        $(".faq-text").slideUp();
        $(".dropdown-icon").css('transform', 'rotateX(0deg)');
        $(".faq-title").css({'color': 'hsl(240, 6%, 50%)', 'font-family': 'kumbh'});
        if (currentDiv != data) {
            $("#text-"+data+"").slideDown();
            $("#dropdown-"+data+"").css('transform', 'rotateX(180deg)');
            $("#title-"+data+"").css({'color': 'hsl(238, 29%, 16%)', 'font-family': 'kumbh-bold'});
            collapsed = false;
        } else{
            collapsed = true;
        }

    }
    currentDiv = data;    
    // console.log(collapsed);
}