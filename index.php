<!--
	To-do:
		• Adding of parsed AISIS schedule data to .class-list div
		• Coloring of table on check mark of class-list data
-->

<html>
	<?php
		require 'php/essentials.php';
		ini_set('display_errors', 1);
		ini_set('display_startup_errors', 1);
		error_reporting(E_ALL);

		$startDate = "2019-12-26 7:00:00";
		$endDate = "2019-12-26 22:00:00";
		$startTime = date("Hi", strtotime($startDate));
		$endTime = date("Hi", strtotime($endDate));
		/*
		$sample = processClasses(fread(fopen("samplefiles/sample.txt", "r"), filesize("samplefiles/sample.txt")));
		foreach ($sample as &$x){
			echo $x;
			echo "<br/>";
		}
		*/
	?>
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
				<?php
					$x = 1;
					$startSched = $startTime;
					while ($x <= 30):
						$class = "time" . $x;

						$endSched = date("Hi", strtotime($startSched) + 1800);
				?>
				<tr class="<?php echo $class; ?>" value="<?php echo $startSched; ?>">
					<td><?php echo $startSched . "-" . $endSched; ?></td>
					<td id="<?php echo "M-" . $startSched; ?>"></td>
					<td id="<?php echo "T-" . $startSched; ?>"></td>
					<td id="<?php echo "W-" . $startSched; ?>"></td>
					<td id="<?php echo "TH-" . $startSched; ?>"></td>
					<td id="<?php echo "F-" . $startSched; ?>"></td>
					<td id="<?php echo "SAT-" . $startSched; ?>"></td>
				</tr>
				<?php
					$startSched = $endSched;
					$x = $x + 1;
					endwhile;
				?>
			</table>
		</div>
		<div class="navigation col-lg-3">
			<textarea id="schedule" autofocus="true" cols="105" placeholder="Paste AISIS schedule here" rows="10"></textarea>
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
