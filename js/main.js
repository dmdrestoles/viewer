$(document).ready(function() {
    $('#step4').on("click", function(){
        schedSplit = $("#schedule").val().split("\n");
        schedLength = schedSplit.length;

        if (schedLength > 0){
            for (i = 0; i < schedLength; i++){
                $(".info-proper").append("<p>Processed</p>");
            }
        }
    });

    $('#step5').on("click", function(){
        $("#schedule").val("");
        $(".info-proper").empty();
    });
});
