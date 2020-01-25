<!--
	To-do:
		• Parsing AISIS schedule data
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
		$startTime = date("H:i", strtotime($startDate));
		$endTime = date("H:i", strtotime($endDate));
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

						$endSched = date("H:i", strtotime($startSched) + 1800);
				?>
				<tr class="<?php echo $class; ?>">
					<td> <?php echo $startSched . "-" . $endSched; ?>
					<td id="monday-<? $x ?>"></td>
					<td id="tuesday-<? $x ?>"></td>
					<td id="wednesday-<? $x ?>"></td>
					<td id="thursday-<? $x ?>"></td>
					<td id="friday-<? $x ?>"></td>
					<td id="saturday-<? $x ?>"></td>
				</tr>
				<?php
					$startSched = $endSched;
					$x++;
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
				<h3>This is where hovered timeslot info will appear!</h3>
				<div class="info-proper">

				</div>
			</div>
		</div>
	</div>
	<script type="text/javascript">

	</script>
</html>
