<!--
	Things to do:
		• On click of table cell, display modal
		• Proper modal display 
		• Retrieve data based on textbox (see /references/qpi-calc-master/assets/js/app.js addSemClases() function)
		• Parse data so that it will display correspondingly 
-->

<html>

<?php

	ini_set('display_errors', 1);
	ini_set('display_startup_errors', 1);
	error_reporting(E_ALL);

	$startDate = "2019-12-26 7:00:00";
	$endDate = "2019-12-26 22:00:00";
	$startTime = date("H:i", strtotime($startDate));
	$endTime = date("H:i", strtotime($endDate));
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
	</head>

	<header>
		<h1 id="title">Class Schedule Viewer</h1>
	</header>

	<div class="page-container">
		<div class="calendar col-lg-9">
			<table width="100%" border="3" cellspacing="5" align="center">
				<tr>
					<td align="center">
					<td>MONDAY
					<td>TUESDAY
					<td>WEDNESDAY
					<td>THURSDAY
					<td>FRIDAY
					<td>SATURDAY
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
					<td class="monday"><a data-toggle="modal" data-target="#schedModal" href="#schedModal" data-id="<?= $x . "-monday";?>" data-category="<?=$x;?>">View</a></td>
					<td class="tuesday"><a data-toggle="modal" data-target="#schedModal" href="#schedModal" data-id="<?= $x . "-tuesday";?>" data-category="<?=$x;?>">View</a></td>
					<td class="wednesday"><a data-toggle="modal" data-target="#schedModal" href="#schedModal" data-id="<?= $x . "-wednesday";?>" data-category="<?=$x;?>">View</a></td>
					<td class="thursday"><a data-toggle="modal" data-target="#schedModal" href="#schedModal" data-id="<?= $x . "-thursday";?>" data-category="<?=$x;?>">View</a></td>
					<td class="friday"><a data-toggle="modal" data-target="#schedModal" href="#schedModal" data-id="<?= $x . "-friday";?>" data-category="<?=$x;?>">View</a></td>
					<td class="saturday"><a data-toggle="modal" data-target="#schedModal" href="#schedModal" data-id="<?= $x . "-saturday";?>" data-category="<?=$x;?>">View</a></td>
				</tr>
				<?php 
					$startSched = $endSched;
					$x++;
					endwhile;
				?>
			</table>
		</div>
		<div class="navigation col-lg-3">
			<div class="button-list">
				<button class="fill-btn btn-primary btn-lg" id="step4" type="button" data-toggle="modal" data-target="#myModal">Fill</button>
				<br/>
				<br/>
				<button class="reset-btn btn-warning btn-lg">Reset</button>
			</div>

			<div class="infosheet">
				<h3>This is where hovered timeslot info will appear!</h3>
			</div>
		</div>

		<!-- Modal for Fill-->
		<div class="modal fade" id="myModal" role="dialog">
			<div class="modal-dialog">

			  <!-- Modal content-->
			  <div class="modal-content">
				<div class="modal-header">
				  <button type="button" class="close" data-dismiss="modal">&times;</button>
				  <h4 class="modal-title">Auto Fill Up</h4>
					<p>Go to your AISIS account and head to CLASS SCHEDULE. Select your desired schedule to view and copy the entire table.</p>
				  <a  class ="modal-title go-to-aisis" href="http://aisis.ateneo.edu" target="_blank">Go to AISIS <i class="fas fa-sign-in-alt"></i></a>
				  <h5 class="modal-error">*Invalid input</h5>
				</div>
				<div class="modal-body">
					<textarea class="txt-area"></textarea>
				</div>
				<div class="modal-footer">
				<!-- button on close and to fill up -->
				  <button type="button" class="modal-fill-btn" data-dismiss="modal">Fill Up</button>
				  <button type="button" class="modal-cl-btn" data-dismiss="modal">Cancel</button>
				</div>
			  </div>
			</div>
		</div>

		<div class="modal fade" id="schedModal" role="dialog">
			<div class="modal-dialog">
				<div class="modal-header">
				  <button type="button" class="close" data-dismiss="modal">&times;</button>
				  <h4 class="modal-title">Class Schedule on</h4>
				 </div>

				 <div class="modal-body">
				 	<h3>List of classes of</h3>
				 </div>

				 <div class="modal-footer">

				 </div>
			</div>
		</div>
	</div>

	<script type="text/javascript">
		$('#schedModal').on('show.bs.modal', function (event) {
		    var clickedLink = $(event.relatedTarget); // clickedLink that triggered the modal
		    var id = clickedLink.data('id'); // Extract info from data-id attributes
		    var category = clickedLink.data('category'); // Extract info from data-category attributes
		    var modal = $(this);
		    modal.find('.modal-body').load('remote.php',{var1:id,var2:category});
		});
	</script>
</html>