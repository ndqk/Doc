$(function(){
    $('.nav-link[data-toggle="collapse"]').click(function(){
        let collapse_show =$(this).attr("aria-expanded");
        $(this).children("i").removeClass();
        if(collapse_show === "true"){
            $(this).children("i").addClass("fas fa-angle-left");
        }
        else{
            $(this).children("i").addClass("fas fa-angle-down");
        }
    });

   
});