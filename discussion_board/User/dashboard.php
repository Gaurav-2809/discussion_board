<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Dashboard</title>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
	<script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
	<script src="https://code.jquery.com/jquery-3.3.1.js" integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60=" crossorigin="anonymous"></script>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
	<script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
	<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
	<link rel="stylesheet" type="text/css" href="css/doc.css">
</head>
<body>
	<?php include 'sidebar1.php' ?>;
	<div class="modal fade" id="exampleModalScrollable" tabindex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
		<div class="modal-dialog modal-dialog-scrollable" role="document">
			<form id="form1">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id="exampleModalScrollableTitle">Add Board</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
						<div class="row" >
							<div class="form-group" style="padding-left: 2rem; width: 20rem">
								<label for="name">Title:</label>
								<input type="text" class="form-control" id="title" name="name">
								<label for="name">Description:</label>
								<textarea type="text" class="form-control" id="desc"></textarea>
							</div>
						</div>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
						<input type="submit" id="register-btn" class="btn btn-primary" value="Submit" data-dismiss="modal" aria-label="Close">
						<input type="submit" id="update-btn" class="btn btn-primary" value="Update" data-dismiss="modal" aria-label="Close" style="display: none;"> 
					</div>
				</div>
			</form>
		</div>
	</div>
	<div class="mainsec">
		<div class="container">
			<div class="row" style="width: 100%; float: left">
				<div class="heading">
					<div class="col-sm-8" style="display: -webkit-inline-box;">
						<div class="adddoc" style="font-weight: bold; margin-right: 2rem">Add Board</div>
						<div class="input-group">
						  <div class="form-outline">
						    <input type="search" id="form12" placeholder="Search" class="form-control" style="height: 2rem; " />
						  </div>
						  <button type="button" id="dark" style="height: 2rem; background-color: #ffc14d;" class="btn btn-dark">
						    <i class="fa fa-search" ></i>
						  </button>
						</div>
					</div>
					<div class="col-sm-4" >	
						<div class="icon" onclick="clearr();"  data-toggle="modal" data-target="#exampleModalScrollable">
							<i class="fa fa-plus" aria-hidden="true"  ></i>
						</div>
					</div>
				</div>
			</div>
			<div class="row" id="app" style="width: 100%; float: left; margin-top: 3rem;" >
				<!-- <div class="td1"> -->
					
				<!-- </div> -->
			</div>
		</div>
	</div>
	<?php include 'footer.php' ?>;
</body>
<script src="js/script.js"></script>
</html>