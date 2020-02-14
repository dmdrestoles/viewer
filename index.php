<html>
		<head>
		<title>Class Schedule Viewer</title>

		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link href='https://fonts.googleapis.com/css?family=Open+Sans:600italic,700,600,400' rel='stylesheet' type='text/css'>
		<link rel="stylesheet" href="css/mainpage.css" />
		<script src="js/main.js"></script>
	</head>

	<header>
		<h1 id="title">Class Schedule Viewer</h1>
	</header>

	<div class="page-container">
		<div class="calendar col-lg-6">
			<table width="100%" border="3" cellspacing="5" align="center">
				<tr>
					<td align="center">
					<td>MONDAY</td>
					<td>TUESDAY</td>
					<td>WEDNESDAY</td>
					<td>THURSDAY</td>
					<td>FRIDAY</td>
					<td>SATURDAY</td>
				</tr>
								<tr class="time1" value="0700">
					<td>0700-0730</td>
					<td class="timeslots" id="M-0700"></td>
					<td class="timeslots" id="T-0700"></td>
					<td class="timeslots" id="W-0700"></td>
					<td class="timeslots" id="TH-0700"></td>
					<td class="timeslots" id="F-0700"></td>
					<td class="timeslots" id="SAT-0700"></td>
				</tr>
								<tr class="time2" value="0730">
					<td>0730-0800</td>
					<td class="timeslots" id="M-0730"></td>
					<td class="timeslots" id="T-0730"></td>
					<td class="timeslots" id="W-0730"></td>
					<td class="timeslots" id="TH-0730"></td>
					<td class="timeslots" id="F-0730"></td>
					<td class="timeslots" id="SAT-0730"></td>
				</tr>
								<tr class="time3" value="0800">
					<td>0800-0830</td>
					<td class="timeslots" id="M-0800"></td>
					<td class="timeslots" id="T-0800"></td>
					<td class="timeslots" id="W-0800"></td>
					<td class="timeslots" id="TH-0800"></td>
					<td class="timeslots" id="F-0800"></td>
					<td class="timeslots" id="SAT-0800"></td>
				</tr>
								<tr class="time4" value="0830">
					<td>0830-0900</td>
					<td class="timeslots" id="M-0830"></td>
					<td class="timeslots" id="T-0830"></td>
					<td class="timeslots" id="W-0830"></td>
					<td class="timeslots" id="TH-0830"></td>
					<td class="timeslots" id="F-0830"></td>
					<td class="timeslots" id="SAT-0830"></td>
				</tr>
								<tr class="time5" value="0900">
					<td>0900-0930</td>
					<td class="timeslots" id="M-0900"></td>
					<td class="timeslots" id="T-0900"></td>
					<td class="timeslots" id="W-0900"></td>
					<td class="timeslots" id="TH-0900"></td>
					<td class="timeslots" id="F-0900"></td>
					<td class="timeslots" id="SAT-0900"></td>
				</tr>
								<tr class="time6" value="0930">
					<td>0930-1000</td>
					<td class="timeslots" id="M-0930"></td>
					<td class="timeslots" id="T-0930"></td>
					<td class="timeslots" id="W-0930"></td>
					<td class="timeslots" id="TH-0930"></td>
					<td class="timeslots" id="F-0930"></td>
					<td class="timeslots" id="SAT-0930"></td>
				</tr>
								<tr class="time7" value="1000">
					<td>1000-1030</td>
					<td class="timeslots" id="M-1000"></td>
					<td class="timeslots" id="T-1000"></td>
					<td class="timeslots" id="W-1000"></td>
					<td class="timeslots" id="TH-1000"></td>
					<td class="timeslots" id="F-1000"></td>
					<td class="timeslots" id="SAT-1000"></td>
				</tr>
								<tr class="time8" value="1030">
					<td>1030-1100</td>
					<td class="timeslots" id="M-1030"></td>
					<td class="timeslots" id="T-1030"></td>
					<td class="timeslots" id="W-1030"></td>
					<td class="timeslots" id="TH-1030"></td>
					<td class="timeslots" id="F-1030"></td>
					<td class="timeslots" id="SAT-1030"></td>
				</tr>
								<tr class="time9" value="1100">
					<td>1100-1130</td>
					<td class="timeslots" id="M-1100"></td>
					<td class="timeslots" id="T-1100"></td>
					<td class="timeslots" id="W-1100"></td>
					<td class="timeslots" id="TH-1100"></td>
					<td class="timeslots" id="F-1100"></td>
					<td class="timeslots" id="SAT-1100"></td>
				</tr>
								<tr class="time10" value="1130">
					<td>1130-1200</td>
					<td class="timeslots" id="M-1130"></td>
					<td class="timeslots" id="T-1130"></td>
					<td class="timeslots" id="W-1130"></td>
					<td class="timeslots" id="TH-1130"></td>
					<td class="timeslots" id="F-1130"></td>
					<td class="timeslots" id="SAT-1130"></td>
				</tr>
								<tr class="time11" value="1200">
					<td>1200-1230</td>
					<td class="timeslots" id="M-1200"></td>
					<td class="timeslots" id="T-1200"></td>
					<td class="timeslots" id="W-1200"></td>
					<td class="timeslots" id="TH-1200"></td>
					<td class="timeslots" id="F-1200"></td>
					<td class="timeslots" id="SAT-1200"></td>
				</tr>
								<tr class="time12" value="1230">
					<td>1230-1300</td>
					<td class="timeslots" id="M-1230"></td>
					<td class="timeslots" id="T-1230"></td>
					<td class="timeslots" id="W-1230"></td>
					<td class="timeslots" id="TH-1230"></td>
					<td class="timeslots" id="F-1230"></td>
					<td class="timeslots" id="SAT-1230"></td>
				</tr>
								<tr class="time13" value="1300">
					<td>1300-1330</td>
					<td class="timeslots" id="M-1300"></td>
					<td class="timeslots" id="T-1300"></td>
					<td class="timeslots" id="W-1300"></td>
					<td class="timeslots" id="TH-1300"></td>
					<td class="timeslots" id="F-1300"></td>
					<td class="timeslots" id="SAT-1300"></td>
				</tr>
								<tr class="time14" value="1330">
					<td>1330-1400</td>
					<td class="timeslots" id="M-1330"></td>
					<td class="timeslots" id="T-1330"></td>
					<td class="timeslots" id="W-1330"></td>
					<td class="timeslots" id="TH-1330"></td>
					<td class="timeslots" id="F-1330"></td>
					<td class="timeslots" id="SAT-1330"></td>
				</tr>
								<tr class="time15" value="1400">
					<td>1400-1430</td>
					<td class="timeslots" id="M-1400"></td>
					<td class="timeslots" id="T-1400"></td>
					<td class="timeslots" id="W-1400"></td>
					<td class="timeslots" id="TH-1400"></td>
					<td class="timeslots" id="F-1400"></td>
					<td class="timeslots" id="SAT-1400"></td>
				</tr>
								<tr class="time16" value="1430">
					<td>1430-1500</td>
					<td class="timeslots" id="M-1430"></td>
					<td class="timeslots" id="T-1430"></td>
					<td class="timeslots" id="W-1430"></td>
					<td class="timeslots" id="TH-1430"></td>
					<td class="timeslots" id="F-1430"></td>
					<td class="timeslots" id="SAT-1430"></td>
				</tr>
								<tr class="time17" value="1500">
					<td>1500-1530</td>
					<td class="timeslots" id="M-1500"></td>
					<td class="timeslots" id="T-1500"></td>
					<td class="timeslots" id="W-1500"></td>
					<td class="timeslots" id="TH-1500"></td>
					<td class="timeslots" id="F-1500"></td>
					<td class="timeslots" id="SAT-1500"></td>
				</tr>
								<tr class="time18" value="1530">
					<td>1530-1600</td>
					<td class="timeslots" id="M-1530"></td>
					<td class="timeslots" id="T-1530"></td>
					<td class="timeslots" id="W-1530"></td>
					<td class="timeslots" id="TH-1530"></td>
					<td class="timeslots" id="F-1530"></td>
					<td class="timeslots" id="SAT-1530"></td>
				</tr>
								<tr class="time19" value="1600">
					<td>1600-1630</td>
					<td class="timeslots" id="M-1600"></td>
					<td class="timeslots" id="T-1600"></td>
					<td class="timeslots" id="W-1600"></td>
					<td class="timeslots" id="TH-1600"></td>
					<td class="timeslots" id="F-1600"></td>
					<td class="timeslots" id="SAT-1600"></td>
				</tr>
								<tr class="time20" value="1630">
					<td>1630-1700</td>
					<td class="timeslots" id="M-1630"></td>
					<td class="timeslots" id="T-1630"></td>
					<td class="timeslots" id="W-1630"></td>
					<td class="timeslots" id="TH-1630"></td>
					<td class="timeslots" id="F-1630"></td>
					<td class="timeslots" id="SAT-1630"></td>
				</tr>
								<tr class="time21" value="1700">
					<td>1700-1730</td>
					<td class="timeslots" id="M-1700"></td>
					<td class="timeslots" id="T-1700"></td>
					<td class="timeslots" id="W-1700"></td>
					<td class="timeslots" id="TH-1700"></td>
					<td class="timeslots" id="F-1700"></td>
					<td class="timeslots" id="SAT-1700"></td>
				</tr>
								<tr class="time22" value="1730">
					<td>1730-1800</td>
					<td class="timeslots" id="M-1730"></td>
					<td class="timeslots" id="T-1730"></td>
					<td class="timeslots" id="W-1730"></td>
					<td class="timeslots" id="TH-1730"></td>
					<td class="timeslots" id="F-1730"></td>
					<td class="timeslots" id="SAT-1730"></td>
				</tr>
								<tr class="time23" value="1800">
					<td>1800-1830</td>
					<td class="timeslots" id="M-1800"></td>
					<td class="timeslots" id="T-1800"></td>
					<td class="timeslots" id="W-1800"></td>
					<td class="timeslots" id="TH-1800"></td>
					<td class="timeslots" id="F-1800"></td>
					<td class="timeslots" id="SAT-1800"></td>
				</tr>
								<tr class="time24" value="1830">
					<td>1830-1900</td>
					<td class="timeslots" id="M-1830"></td>
					<td class="timeslots" id="T-1830"></td>
					<td class="timeslots" id="W-1830"></td>
					<td class="timeslots" id="TH-1830"></td>
					<td class="timeslots" id="F-1830"></td>
					<td class="timeslots" id="SAT-1830"></td>
				</tr>
								<tr class="time25" value="1900">
					<td>1900-1930</td>
					<td class="timeslots" id="M-1900"></td>
					<td class="timeslots" id="T-1900"></td>
					<td class="timeslots" id="W-1900"></td>
					<td class="timeslots" id="TH-1900"></td>
					<td class="timeslots" id="F-1900"></td>
					<td class="timeslots" id="SAT-1900"></td>
				</tr>
								<tr class="time26" value="1930">
					<td>1930-2000</td>
					<td class="timeslots" id="M-1930"></td>
					<td class="timeslots" id="T-1930"></td>
					<td class="timeslots" id="W-1930"></td>
					<td class="timeslots" id="TH-1930"></td>
					<td class="timeslots" id="F-1930"></td>
					<td class="timeslots" id="SAT-1930"></td>
				</tr>
								<tr class="time27" value="2000">
					<td>2000-2030</td>
					<td class="timeslots" id="M-2000"></td>
					<td class="timeslots" id="T-2000"></td>
					<td class="timeslots" id="W-2000"></td>
					<td class="timeslots" id="TH-2000"></td>
					<td class="timeslots" id="F-2000"></td>
					<td class="timeslots" id="SAT-2000"></td>
				</tr>
								<tr class="time28" value="2030">
					<td>2030-2100</td>
					<td class="timeslots" id="M-2030"></td>
					<td class="timeslots" id="T-2030"></td>
					<td class="timeslots" id="W-2030"></td>
					<td class="timeslots" id="TH-2030"></td>
					<td class="timeslots" id="F-2030"></td>
					<td class="timeslots" id="SAT-2030"></td>
				</tr>
								<tr class="time29" value="2100">
					<td>2100-2130</td>
					<td class="timeslots" id="M-2100"></td>
					<td class="timeslots" id="T-2100"></td>
					<td class="timeslots" id="W-2100"></td>
					<td class="timeslots" id="TH-2100"></td>
					<td class="timeslots" id="F-2100"></td>
					<td class="timeslots" id="SAT-2100"></td>
				</tr>
								<tr class="time30" value="2130">
					<td>2130-2200</td>
					<td class="timeslots" id="M-2130"></td>
					<td class="timeslots" id="T-2130"></td>
					<td class="timeslots" id="W-2130"></td>
					<td class="timeslots" id="TH-2130"></td>
					<td class="timeslots" id="F-2130"></td>
					<td class="timeslots" id="SAT-2130"></td>
				</tr>
							</table>
		</div>
		<div class="navigation col-lg-6">
			<textarea id="schedule" autofocus="true" cols="106" placeholder="Paste AISIS schedule here" rows="10"></textarea>
			<div class="button-list">
				<button class="fill-btn btn-primary btn-lg" id="step4" type="button" data-toggle="modal" data-target="#myModal">Fill</button>
				<br/>
				<br/>
				<button class="reset-btn btn-warning btn-lg" id="step5">Reset</button>
			</div>

			<div class="infosheet">
				<h3>This is where properly-filled schedule information will appear!</h3>
				<div class="info-proper">
					<form action ="" class="scheduleList">

					</form>

				</div>
			</div>
		</div>
	</div>
	<script type="text/javascript">

	</script>
</html>
