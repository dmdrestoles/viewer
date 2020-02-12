$(document).ready(function() {

    // Parses the data from AISIS > Class Schedule
    $('#step4').on("click", function(){
        textAreaContent = $("#schedule").val().split("\n");
        textAreaSize = textAreaContent.length;

        if (textAreaContent != ''){
            var parsedScheduleEntry = "";
            for (i = 0; i < textAreaSize; i++){
                var parsedScheduleInfo = parseSched(textAreaContent[i]);
                var scheduleClass = parsedScheduleInfo.subjectCode + " " +  parsedScheduleInfo.section;
                var scheduleTime = parsedScheduleInfo.time;
                var scheduleValueToPass = scheduleClass.replace(" ", "") + "_" + scheduleTime;
                parsedScheduleEntry += "<input type=\"checkbox\" class=\"checkboxes\" value=" + scheduleValueToPass + "> " + scheduleClass + " - " + scheduleTime.replace("_", " ") + "<br/>";
            }

            $(".scheduleList").html(parsedScheduleEntry);
            $("td").css("background-color", "unset");
        }
    });

    // Clears the text area and the form
    $('#step5').on("click", resetAll);

    // Stores checked schedule
     $('.scheduleList').on("change", function(){
        clearAllHighlights();
        $('input[type^=checkbox]').each(function() {
            if( $(this).is(':checked') ) {
                var schedule = $(this).val().split("_");

                // console.log(schedule);

                var className = schedule[0];
                var daysToLook = schedule[1].split("-");
                var timesToLook = schedule[2].split("-");

                var cellsToHighlight = checkTimeSlots(daysToLook, timesToLook);

                for (var i = 0; i <= cellsToHighlight.length; i++){
                    highlightCell(cellsToHighlight[i], className);
                }
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
        var time = new Date(startDate);

        for (time; time < endDate; time.setMinutes( time.getMinutes() + 30)){
            scheduleArray.push(dayArray[i] + "-" + ("0" + time.getHours()).slice(-2) + ('0'+time.getMinutes()).slice(-2));
        }
    }

    return scheduleArray;
}

function highlightCell(cell, value){
    if ( $("#" + cell).css('background-color') == "rgb(255, 255, 0)"){
        $("#" + cell).css("background-color", "red");
    }
    else{
        $("#" + cell).css("background-color", "yellow");
        $("#" + cell).html(value);
    }
}

function clearAllHighlights(){
    $('td').css("background-color", "unset");
    $("td.timeslots").html(" ");
}

function resetAll(){
    $("#schedule").val(""); 
    $(".scheduleList").empty();
    $("td").css("background-color", "transparent");
}