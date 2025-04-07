


<html>

<head>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">

</head>

<body>

    <br> <BR>

    <div class="container">

        <div class="row">

            <div class="col-md-5">

                <img width="200px" src="{{ asset('storage/anime_images/'.$row->img)}}"
                    alt="<?php echo asset('storage/anime_images/' . $row->img) ?>" />
            </div>

            <div class="col-md-7">

                <h1>{{ $row->name }}</h1>

                <h3>{{ $row->language }}</h3>

                <p>{{ $row->desc }}</p>

                <p>{{ $row->episode }}</p>

                <p>{{ $row->rating }}</p>


            </div>


        </div>

    </div>

</body>

</html>