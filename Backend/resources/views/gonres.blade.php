<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        select,form {
            width: 400px;
            height: 400px;
            margin: 0 30%;
        }



        
    </style>
</head>

<body>

    <!-- Add CSRF token for security -->
    <form action="{{ route('insert_gonres') }}" method="POST">
        @csrf <!-- CSRF Token -->

        <input type="number" name="anime_id" placeholder="Anime ID"><br><br>

        <select multiple name="gonres[]" id="">
            <!-- Loop through $results to display genres -->
            @foreach ($results as $row)
                <option value="{{ $row->id }}">{{ $row->name }}</option>
            @endforeach
        </select>
        <br>

        <input type="submit" value="Submit">
    </form>

</body>

</html>
