<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/main.min.css">
    <title>Document</title>
</head>
<body>
    <?php include 'nav.php' ?>
    <?php include 'header.php' ?>
    
    <div class="container">
        <?php for ($row=0; $row < 4 ; $row++): ?>
        <div class="row">
            <?php for ($i=1; $i < 5 ; $i++): ?>
                <div class="col-md-3 col-sm-6">
                    <a href="" class="thumbnail"> <img src="http://lorempixel.com/250/150/sports/<?php echo $i <= 3 ? $i : '1' ?>" alt=""> </a>
                    <h3>Lorem ipsum dolor sit amet lamem</h3>
                </div>
            <?php endfor ?>
        </div>
        <?php endfor ?>
    </div>
    <?php include 'footer.php' ?>
    <script src="node_modules/jquery/dist/jquery.min.js"></script>
    <script src="node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
</body>
</html>