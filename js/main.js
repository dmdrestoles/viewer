var scheds = [];

$(document).ready(function() {
    // Parses the data from AISIS > Class Schedule
    $('#step4').on("click", function(){
        tableClear();

        textArea = $("#schedule").val().split("\n");
        var textAreaContent = [];
        for (let i = 1; i < textArea.length; i += 2){
            textAreaContent.push(textArea[i - 1].concat(textArea[i]));
        }

        textAreaSize = textAreaContent.length;

        if (textAreaContent != ''){
            var parsedScheduleEntry = "";
            for (i = 0; i < textAreaSize; i++){
                var parsedScheduleInfo = parseSched(textAreaContent[i]);
                scheds.push(parsedScheduleInfo);
                var scheduleClass = parsedScheduleInfo.subjectCode + " " +  parsedScheduleInfo.section;
                var scheduleTime = parsedScheduleInfo.time;
                // var scheduleValueToPass = scheduleClass.replaceAll(" ", "-") + ";" + scheduleTime + ";" + parsedScheduleInfo.color + ";" + parsedScheduleInfo.instructor;          // Separator for class name to schedule
                var htmlDisplay = scheduleClass;

                for ( j = 0; j < scheduleTime.length; j++ ){
                    htmlDisplay = htmlDisplay + " - " + scheduleTime[j].replaceAll("_", " ");
                }

                parsedScheduleEntry += "<input type=\"checkbox\" class=\"checkboxes\" value=" + i + "> " + htmlDisplay + "<br/>";
            }

            console.log( scheds );
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
                // var classData = $(this).val().split(";");
                var classData = scheds[$(this).val()];
                console.log(classData);
                
                var schedules = classData.time;
                var color = classData.color;
                // var schedules = classData[1].split(",");                // Splits the schedule to elements in an array
                // var color = classData[2];
                
                console.log(schedules);

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
                        highlightCell(cellsToHighlight[i], classData, color);
                    }
                }
            }
      });
    });
});

function parseSched(scheduleEntry){
    var scheduleDataArray = scheduleEntry.split("\t");
    // console.log( scheduleDataArray );
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    
    var scheduleInfoDict = {
        subjectCode : scheduleDataArray[0].replace(" ", ""),
        section : scheduleDataArray[1],
        courseTitle : scheduleDataArray[2],
        units : scheduleDataArray[3],
        time : scheduleDataArray[4].replaceAll(" ", "_").replace("(FULLY_ONLINE)", "").replace("(FLEX)", "").split(";_"),
        room : scheduleDataArray[5],
        instructor : scheduleDataArray[6],
        maxClassSize : scheduleDataArray[7],
        language : scheduleDataArray[8],
        level : scheduleDataArray[9],
        freeSlots : scheduleDataArray[10],
        remarks : scheduleDataArray[11],
        color: randomColor
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

function highlightCell(cell, value, color){
    // console.log( $("#" + cell).css('background-color') );

    if ( $("#" + cell).css('background-color') != "rgba(0, 0, 0, 0)"){
        $("#" + cell).css("background-color", "red");
        $("#" + cell).html("CONFLICT!");
    }
    else{
        var className = value.subjectCode + value.section;
        var tooltipContent = value.courseTitle + "\n" + "Professor: " + value.instructor;
        // var tooltip = "<span class=\"schedTooltip\">" + tooltipContent;
        var tooltip = "<span title=\"" + tooltipContent + "\">" + className + "</span>";
        $("#" + cell).css("background-color", color);
        $("#" + cell).html(tooltip);
    }
}

function timeTableToImage(){
    var calendar = document.getElementById('timetable');
    console.log(calendar);

    html2canvas( calendar, scale=1.0 ).then( function( canvas ) {
        var link = document.createElement('a');
        document.body.appendChild( link );
        link.download = "calendar.png";
        link.href = canvas.toDataURL( "image/png" );
        link.target = '_blank';
        link.click();
    });

}

function clearAllHighlights(){
    $('td').css("background-color", "unset");
    $("td.timeslots").html(" ");
}

function tableClear(){
    scheds.length = 0;
    var x = document.getElementsByClassName('timeslots');
    for ( var i = 0; i < x.length; i++ ){
        x[i].innerHTML = '';
    }
}
function resetAll(){
    scheds.length = 0;
    $("#schedule").val(""); 
    $(".scheduleList").empty();
    $("td").css("background-color", "transparent");

    tableClear();
}