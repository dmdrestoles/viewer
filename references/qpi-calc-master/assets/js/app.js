$(document).ready(function() {

	$(".input-table").on("mouseenter", ".input-row", function() {
		if($(this).index() != 1 || $(".input-row").length != 1)
			$(this).find(".delete-btn").css("visibility", "visible");
	});

	$(".input-table").on("mouseleave", ".input-row", function() {
		$(this).find(".delete-btn").css("visibility", "hidden");
	});

	$(".input-table").on("click", ".delete-btn", function() {
		$(this).parent().remove();
		updateQPI();
	});

	$(".add-fcn").on("click", function() {
		aisisRowTotal = $(".input-row.aisis-rows").length;
		rowTotal = $(".input-row").length;
		$(".input-table > tbody > tr").eq(rowTotal-aisisRowTotal).after("<tr class='input-row'>" + $(".input-row").html() + "</tr>");
	});
	
	$(".modal-fill-btn").on("click", function() {
		summSplit = $(".txt-area").val().split(/\s\t|\t|\n/);
		if(!addSemClasses()) {
			$(".modal-error").css('visibility', 'visible');
			$(".modal-fill-btn").removeAttr('data-dismiss');
		}
		else {
			$(".modal-error").css('visibility', 'hidden');
			$(".modal-fill-btn").attr('data-dismiss', 'modal')
			iniAisisRowTotal = $(".input-row.aisis-rows").length;
			$(".input-table > tbody > tr").eq(0).after("<tr class='input-row'>" + $(".input-row").html() + "</tr>");
			for(i = 0; i < iniAisisRowTotal; i++)
			$(".input-row.aisis-rows:eq(0)").remove();
			iniRowTotal = $(".input-row").length;
			addSemClasses();
			for(i=0; i < iniRowTotal; i++) {
				if($(".input-row:eq(" + i + ") .grade-select option:eq('0')").is(':selected')
				&& $(".input-row:eq(" + i + ") .course-code").val() == "") {
					$(".input-row:eq(" + i + ")").remove();
					i--;
				}
			}
			updateQPI();
		}
	});
	
	$(".res-btn").on("click", function() {
		$(".input-row:eq(0) .course-code").val("");
		$(".input-row:eq(0) .unit-select").val(3);
		$(".input-row:eq(0) .grade-select option:eq('0')").prop('selected', true);
		$(".input-table").find("tr:gt(1)").remove();
		$(".input-row:eq(0)").removeClass("aisis-rows");
		$(".txt-area").val("");
		$(".modal-error").css('visibility', 'hidden');
		aisisRowTotal = 0;
		qpi = "-";
		targetQpi = "-";
		updateQPI();
	});

	$(".input-card").on("change", ".input-select", updateQPI);
	
	$('.target-end').on('input',function(){
    	updateQPI();
	});
	
	/*$('.target-end').on('blur',function(){
		if($('.target-end').val() > 4)
			$('.target-end').val("4.00")
		else if($('.target-end').val() < 0)
			$('.target-end').val("0.00")
		else if($('.target-end').val() == "")
			$('.target-end').val("1.25")
	});*/
	
	$('.sem-units').on('input',function(){
    	updateQPI();
	});
	
	$('.sem-units').on('blur',function(){
		if($('.sem-units').val() < 0)
			$('.sem-units').val("0")
		else if($('.sem-units').val() == "")
			$('.sem-units').val("15")
	});

	qpi = "-";
	targetQpi = "1.25";

	function addSemClasses() {
		summary = $(".txt-area").val();
		summSplit = summary.split(/\s\t|\t|\n/);
		course_codes = [];
		course_units = [];
		gradeValue = [];
		grade_index = [];
		currEnrolled = [];
		currCourseCode = "";
		ifUncredited = false;
		
		if(isNaN(summSplit[0].substring(0, 4)) || isNaN(summSplit[1])) 
			return false;
		else {
			for (i=0; i<summSplit.length; i++) {
				if (i%7==3) { 
					currCourseCode = summSplit[i];
					countedGrade = (summSplit[i+3] =="A") || (summSplit[i+3]=="B+") || (summSplit[i+3]=="B") 
					|| summSplit[i+3]== "C+" || summSplit[i+3]== "C" || summSplit[i+3] == "D" || 
					summSplit[i+3] == "F" || summSplit[i+3] == "W" || summSplit[i+3].startsWith("CURRENTLY");
					
					ifUncredited = currCourseCode.startsWith("PE") || currCourseCode.startsWith("NSTP") 
					|| summSplit[i+2].startsWith("0") || !countedGrade;
				
					if(ifUncredited)
						continue;
					else
						course_codes.push(currCourseCode);
				}
				if (i%7==5 && !ifUncredited) {
					course_units.push(summSplit[i]);
					if (summSplit[i+1].startsWith("CURRENTLY")) 
						currEnrolled.push(true);
					else
						currEnrolled.push(false);
						
					if(isNaN(summSplit[i]))
						return false;
				}
				if (i%7==6 && !ifUncredited) {
					if (summSplit[i]=="A") grade_index.push(1);
					else if (summSplit[i]=="B+") grade_index.push(2);
					else if (summSplit[i]=="B") grade_index.push(3);
					else if (summSplit[i]=="C+") grade_index.push(4);
					else if (summSplit[i]=="C") grade_index.push(5);
					else if (summSplit[i]=="D") grade_index.push(6);
					else if (summSplit[i]=="F") grade_index.push(7);
					else if (summSplit[i]=="W") grade_index.push(8);
					else grade_index.push(0);
				}
			}
		
			rowTotal = $(".input-row").length;
			initialRowTotal = rowTotal;
		
			for (i=0; i<course_codes.length; i++) {
				currRow = rowTotal + i;
				if(grade_index[i] != 0) {
					$(".input-table").append("<tr class='input-row aisis-rows'>" + $(".input-row").html() + "</tr>");
					$(".input-row:eq(" + currRow + ") .course-code").val(course_codes[i]);
					$(".input-row:eq(" + currRow + ") .unit-select").val(course_units[i]);
					$(".input-row:eq(" + currRow + ") .grade-select option:eq(" + grade_index[i] + ")").prop('selected', true);
				}
				if(currEnrolled[i]) {
					aisisRowTotal = $(".input-row.aisis-rows").length;
					rowTotal = $(".input-row").length;
					currRow = rowTotal-aisisRowTotal;
					$(".input-table > tbody > tr").eq(currRow).after("<tr class='input-row aisis-rows'>" + $(".input-row").html() + "</tr>");
					$(".input-row:eq(" + currRow + ") .course-code").val(course_codes[i]);
					$(".input-row:eq(" + currRow + ") .unit-select").val(course_units[i]);
					$(".input-row:eq(" + currRow + ") .grade-select option:eq(" + grade_index[i] + ")").prop('selected', true);
				
				}
			}
			return true;
		}
	}

	function updateQPI() {
		rowTotal = $(".input-row").length;
		aisisRowTotal = $(".input-row.aisis-rows").length;
		gradeTotal = 0;
		unitTotal = 0;
		aisisGradeTotal = 0;
		aisisUnitTotal = 0;
		target = $(".target-end").val();
		semUnits = $(".sem-units").val();

		for(i = 0; i < rowTotal; i++) {
			gradeSelectVal = $(".input-row:eq(" + i + ") .grade-select").val();
			
			if (gradeSelectVal != "-") {
				grade = parseFloat(gradeSelectVal);
				units = parseFloat($(".input-row:eq(" + i + ") .unit-select").val());
				gradeTotal += grade*units;
				unitTotal += units;
			}
		}
		
		for(i = 0; i < aisisRowTotal; i++) {
			gradeSelectVal = $(".input-row.aisis-rows:eq(" + i + ") .grade-select").val();
			
			if (gradeSelectVal != "-") {
				grade = parseFloat(gradeSelectVal);
				units = parseFloat($(".input-row.aisis-rows:eq(" + i + ") .unit-select").val());
			}
		}

		if (isNaN(qpi)) {
			qpi = toFixed(gradeTotal/unitTotal, 2);
			console.log(qpi);
			setQPI(qpi);
		} else {
			qpi = toFixed(gradeTotal/unitTotal, 2);
			animateQPI(Math.abs(qpi - parseFloat($(".qpi-display").text()))/20);
		}
		
		if (isNaN(targetQpi)) {
			targetQpi = toFixed(Number((target*(unitTotal+Number(semUnits))-gradeTotal)/Number(semUnits)), 2);
			setTargetQPI(targetQpi);
		} else {
			targetQpi = toFixed(Number((target*(unitTotal+Number(semUnits))-gradeTotal)/Number(semUnits)), 2);
			animateTargetQPI(Math.abs(targetQpi - parseFloat($(".target-qpi").text()))/20);
		}
	}
	
	function toFixed(num, precision) {
    	return (+(Math.round(+(num + 'e' + precision)) + 'e' + -precision)).toFixed(precision);
	}

	var animateQPI = function(step) {
		window.setTimeout(function() {
			if ($(".qpi-display").text() != qpi) {
				gradeDisplay = parseFloat($(".qpi-display").text());

				if (Math.abs(qpi - (gradeDisplay + step)) < step)
					step = Math.abs(qpi - gradeDisplay);

				if (step < 0.01)
					step = 0.01;

				if ($(".qpi-display").text() < qpi)
					addend = step;
				else
					addend = -step;

				setQPI((gradeDisplay + addend).toFixed(2));
			
				animateQPI(step);
			}
		}, 20);
	}
	
	var animateTargetQPI = function(step) {
		if(isNaN(targetQpi) || targetQpi > 4 || targetQpi < 0) {
			setTargetQPI("lolnope");
			return;
		}
		window.setTimeout(function() {
			if ($(".target-qpi").text() != targetQpi) {
				gradeDisplay = parseFloat($(".target-qpi").text());

				if (Math.abs(targetQpi - (gradeDisplay + step)) < step)
					step = Math.abs(targetQpi - gradeDisplay);

				if (step < 0.01)
					step = 0.01;
				//console.log("above: " + step);
				
				if ($(".target-qpi").text() < targetQpi)
					addend = step;
				else
					addend = -step;
				//console.log("below: " + (Number(gradeDisplay) + Number(addend)));
				setTargetQPI((Number(gradeDisplay) + Number(addend)).toFixed(2));
			
				animateTargetQPI(step);
			}
		}, 20);
	}

	function setQPI(qpi) {
		if (!isNaN(qpi))
			$(".qpi-display").text(qpi);
		else
			$(".qpi-display").text("-");
	}
	
	function setTargetQPI(qpi) {
		if (isNaN(qpi) || qpi > 4 || qpi < 0) {
			$(".target-qpi").text("IMPOSSIBLE");
			$(".target-qpi").css("font-size", "20pt");
			$(".target-qpi").css("color", "red");
			$(".target-qpi").css("margin-bottom", "100px");
			targetQpi = "-";
		}
		else {
			$(".target-qpi").text(toFixed(Number(qpi), 2));
			$(".target-qpi").css("font-size", "50pt");
			$(".target-qpi").css("color", "#383B37");
		}
	}
});