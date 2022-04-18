<!DOCTYPE HTML>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;">
	<!-- meta name = 'viewpoort' content = 'width=divice-width' -->
	<title>Ваш надежный MICE - партнер</title>
	<script src="https://yastatic.net/jquery/3.3.1/jquery.min.js"></script>
	<link rel="stylesheet" href="/site/male-cosmetics/css/normalize.css" type="text/css">
	<link rel="stylesheet" href="/site/male-cosmetics/css/style-common.css" type='text/css'> <!-- Common style -->
	<link rel="stylesheet" href="/site/male-cosmetics/css/style-header.css" type='text/css'> <!-- Page style -->
	<link rel="stylesheet" href="/site/male-cosmetics/css/styleContentHome.css" type="text/css"> <!-- Home page's css -->
	<link rel="stylesheet" href="/site/male-cosmetics/css/styleCatalog.css" type="text/css"> <!-- Catalog page's css -->
	<link rel='stylesheet' href="/site/male-cosmetics/css/style-screen.css" type="text/css"> <!-- media the style screen css -->
	<link rel='stylesheet' href='/site/male-cosmetics/js/cssSliderTop.css' type = 'text/css'> <!-- The top slider css -->
	
	<!-- script src="/site/male-cosmetics/js/jsSlider.js"></script -->
	<link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet"> 
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&family=Oswald:wght@200;500&display=swap" rel="stylesheet">
	 
	<!--	«IE=EmulateIE8» -->
	<!--[if lte IE 10] --><!-- link href="/site/kursy/css/ie.css" rel="stylesheet" type='text/css' / --><!-- [endif] -->
	<!--[if lte IE 8] --><!-- link href="/site/kursy/css/ie8.css" rel="stylesheet" type='text/css' / --><!-- [endif] -->
	<!--[if IE 7] --><!-- link rel="stylesheet" href="/cssauthor/style/ie7.css" type='text/css' / --><!-- [endif] -->
	<meta http-equiv= "X-UA-Compatible" content="IE-edge">  
	
	<!-- script src="/site/kursy/js/ie.js"></script -->	
	<!-- script src="/site/kursy/js/respond.js"></script -->	
	<!-- [if lte IE8] -->
	<!--[if lt IE 9]> <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script> <![endif]-->

	
</head>
<body>
	<!-- script>mySliders(); </script -->
	
	<article>
		<?php  include 'functions.php'; ?>
		
		<div id="body" class="<?php newClass(); ?>">
				<?php  include 'header.php'; ?>
			<nav></nav>
			<div id="content">
				<!-- ?php include 'home.php'; ? -->
				<?php 
					if ($_GET['click'] == null){
						$command = readfile('https://54seo.ru/site/male-cosmetics/home.php', 'r+');
					};
					if ($_GET['click'] == 'home'){
						$command = readfile('https://54seo.ru/site/male-cosmetics/home.php', 'r+');
						
					};
					if($_GET['click'] == 'catalog'){
						
						$aside = readfile('https://54seo.ru/site/male-cosmetics/aside.php', 'r+');
						$command = readfile('https://54seo.ru/site/male-cosmetics/catalog.php', 'r+');
						
					};
					print $aside;
					print $command;
				?>
				
			</div>	
			<!-- /div -->
			<footer>
				<div id="footer">
					<div id="ftr">
						
						
						<?php include 'footer.php'; ?>
						<!-- ?php include 'aside.php'; ? -->
						<!-- ?php include 'catalog.php'; ? -->
						
					</div>
					<p>2015-2018 © uncledeard.ru</p>
				</div>
			</footer>
		</div>
	</article>
</body>
