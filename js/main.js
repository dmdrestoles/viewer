$(document).ready(function() {
    $('#step4').on("click", function(){
        textAreaContent = $("#schedule").val().split("\n");
        textAreaSize = textAreaContent.length;

        if (textAreaContent != ''){
            for (i = 0; i < textAreaSize; i++){
                var parsedScheduleInfo = parseSched(textAreaContent[i]);
                var scheduleClass = parsedScheduleInfo.subjectCode + " " +  parsedScheduleInfo.section;
                var scheduleTime = parsedScheduleInfo.time;
                var parsedScheduleEntry = "<input type=\"checkbox\" value=" + scheduleTime + "> " + scheduleClass + " - " + scheduleTime.replace("_", " ") + "<br>";

                $(".info-proper").append(parsedScheduleEntry);
            }
        }
    });

    $('#step5').on("click", function(){
        $("#schedule").val(""); 
        $(".info-proper").empty();
    });

     $('input[type="checkbox"]').click(function(){
        if ($(this).attr(':checked')){    
            var scheduleToHighlight = $(this).val();
            alert("Checkbox is checked.");
            alert(scheduleToHighlight);
        }
    });
});

function parseSched(scheduleEntry){
    var scheduleDataArray = scheduleEntry.split("\t");
    var scheduleInfoDict = {
        subjectCode : scheduleDataArray[0],
        section : scheduleDataArray[1],
        courseTitle : scheduleDataArray[2],
        units : scheduleDataArray[3],
        time : scheduleDataArray[4].replace(" ", "_"),
        room : scheduleDataArray[5],
        instructor : scheduleDataArray[6],
        maxClassSize : scheduleDataArray[7],
        language : scheduleDataArray[8],
        level : scheduleDataArray[9],
        freeSlots : scheduleDataArray[10],
        remarks : scheduleDataArray[11],
    };

    return scheduleInfoDict;
}