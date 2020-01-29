$(document).ready(function() {

    // Parses the data from AISIS > Class Schedule
    $('#step4').on("click", function(){
        textAreaContent = $("#schedule").val().split("\n");
        textAreaSize = textAreaContent.length;

        if (textAreaContent != ''){
            for (i = 0; i < textAreaSize; i++){
                var parsedScheduleInfo = parseSched(textAreaContent[i]);
                var scheduleClass = parsedScheduleInfo.subjectCode + " " +  parsedScheduleInfo.section;
                var scheduleTime = parsedScheduleInfo.time;
                var scheduleValueToPass = scheduleClass.replace(" ", "") + scheduleTime
                var parsedScheduleEntry = "<input type=\"checkbox\" class=\"checkboxes\" value=" + scheduleValueToPass + "> " + scheduleClass + " - " + scheduleTime.replace("_", " ") + "<br/>";

                $(".scheduleList").append(parsedScheduleEntry);

                console.log(scheduleClass);
            }
        }
    });

    // Clears the text area and the form
    $('#step5').on("click", function(){
        $("#schedule").val(""); 
        $(".scheduleList").empty();
        console.clear();
    });

    // Stores checked schedule
     $('.scheduleList').on("change", function(){
        $('input[type^=checkbox]').each(function() {
            if( $(this).is(':checked') ) {
                var scheduleToHighlight = $(this).val();
                console.log(scheduleToHighlight);
            }
      });
    });
});

function parseSched(scheduleEntry){
    var scheduleDataArray = scheduleEntry.split("\t");
    var scheduleInfoDict = {
        subjectCode : scheduleDataArray[0].replace(" ", ""),
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