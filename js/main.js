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
                var scheduleValueToPass = scheduleClass.replace(" ", "") + "_" + scheduleTime;
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
                var schedule = $(this).val().split("_");

                var className = schedule[0];
                var daysToLook = schedule[1].split("-");
                var timesToLook = schedule[2].split("-");

                // console.log(className);
                // console.log(daysToLook);
                // console.log(timesToLook);

                var cellsToHighlight = checkTimeSlots(daysToLook, timesToLook);

                console.log(cellsToHighlight);

                jQuery.each(cellsToHighlight, highlightCell(value));
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

function checkTimeSlots(dayArray, timeArray){
    var scheduleArray = [];
    var startDate = new Date(2020, 1, 1, 0, 0, 0, 0, 0);
    var endDate = new Date(2020, 1, 1, 0, 0, 0, 0, 0);

    startDate.setHours(timeArray[0] / 100);
    startDate.setMinutes(timeArray[0] % 100);
    endDate.setHours(timeArray[1] / 100);
    endDate.setMinutes(timeArray[1] % 100);

    for (var i = 0; i < dayArray.length; i++){
        for (var time = startDate; time <= endDate; time.setMinutes( time.getMinutes() + 30)){
            scheduleArray.push(dayArray[i] + "-" + time.getHours() + ('0'+time.getMinutes()).slice(-2));    //parse time to properly display
        }
    }

    return scheduleArray;
}

function highlightCell(cell){
    document.getElementById(cell).style.
}