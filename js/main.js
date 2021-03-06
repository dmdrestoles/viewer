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
                var scheduleValueToPass = scheduleClass.replaceAll(" ", "-") + ";" + scheduleTime;          // Separator for class name to schedule
                var htmlDisplay = scheduleClass;

                for ( j = 0; j < scheduleTime.length; j++ ){
                    htmlDisplay = htmlDisplay + " - " + scheduleTime[j].replaceAll("_", " ");
                }

                parsedScheduleEntry += "<input type=\"checkbox\" class=\"checkboxes\" value=" + scheduleValueToPass + "> " + htmlDisplay + "<br/>";
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
                var classData = $(this).val().split(";");
                //console.log(classData);
                var className = classData[0].replace("-", " ");         // Splits the class name from the schedule

                var schedules = classData[1].split(",");                // Splits the schedule to elements in an array
                //console.log(schedules);

                // Process each time schedule and highlight accordingly
                for ( m = 0; m < schedules.length; m++ ){ 
                    var schedule = schedules[m].split("_");
                    //console.log( schedule );
                    var daysToLook = schedule[0].split("-");
                    var timesToLook = schedule[1].split("-");

                    // If schedule is daily
                    if ( daysToLook == "D" ){
                        daysToLook = [ "M", "T", "W", "TH", "F" ];
                    }

                    var cellsToHighlight = checkTimeSlots(daysToLook, timesToLook);

                    for (var i = 0; i <= cellsToHighlight.length; i++){
                        highlightCell(cellsToHighlight[i], className);
                    }
                }
            }
      });
    });
});

function parseSched(scheduleEntry){
    var scheduleDataArray = scheduleEntry.split("\t");
    console.log( scheduleDataArray );

    var scheduleInfoDict = {
        subjectCode : scheduleDataArray[0].replace(" ", ""),
        section : scheduleDataArray[1],
        courseTitle : scheduleDataArray[2],
        units : scheduleDataArray[3],
        time : scheduleDataArray[4].replaceAll(" ", "_").split(";_"),
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

    var x = document.getElementsByClassName('timeslots');
    for ( var i = 0; i < x.length; i++ ){
        x[i].innerHTML = '';
    }
}