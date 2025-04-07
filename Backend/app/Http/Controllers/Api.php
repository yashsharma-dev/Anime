<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\CustomModel;
use App\Http\Controllers\Controller;
use Carbon\Carbon;
use PhpParser\Node\Expr\FuncCall;

class Api extends Controller
{


    
    public function home(Request $request)
    {
        // Get the page number from the request (default to page 1)
        $page = $request->input('page', 1);
        $perPage = 20; // Number of items per page
        $offset = ($page - 1) * $perPage; // Calculate the offset

        // Fetch anime data with pagination
        $result = DB::select("
            SELECT 
                home_page.id, 
                home_page.name, 
                home_page.img, 
                home_page.video, 
                home_page.year, 
                home_page.desc, 
                home_page.episode, 
                home_page.rating, 
                home_page.language, 
                home_page.status, 
                GROUP_CONCAT(gonres.name SEPARATOR ', ') AS gonres_name 
            FROM home_page 
            LEFT JOIN filter_gonres ON home_page.id = filter_gonres.anime_id 
            LEFT JOIN gonres ON gonres.id = filter_gonres.gonres_id 
            GROUP BY 
                home_page.id, 
                home_page.name, 
                home_page.img, 
                home_page.video, 
                home_page.year, 
                home_page.desc, 
                home_page.episode, 
                home_page.rating, 
                home_page.language, 
                home_page.status 
            LIMIT ? OFFSET ?
        ", [$perPage, $offset]);

        // Process the result
        foreach ($result as $row) {
            $row->img = asset("storage/image/" . $row->img);
            $row->video = asset("storage/video/" . $row->video);
            $row->gonres_name = $row->gonres_name ? explode(', ', $row->gonres_name) : [];
        }

        return response()->json($result);
    }
    public function home_list(Request $request)
    {
     
        $result = DB::select("
            SELECT 
                home_page.id, 
                home_page.name, 
                home_page.img, 
                home_page.video, 
                home_page.year, 
                home_page.desc, 
                home_page.episode, 
                home_page.rating, 
                home_page.language, 
                home_page.status, 
                GROUP_CONCAT(gonres.name SEPARATOR ', ') AS gonres_name 
            FROM home_page 
            LEFT JOIN filter_gonres ON home_page.id = filter_gonres.anime_id 
            LEFT JOIN gonres ON gonres.id = filter_gonres.gonres_id 
            GROUP BY 
                home_page.id, 
                home_page.name, 
                home_page.img, 
                home_page.video, 
                home_page.year, 
                home_page.desc, 
                home_page.episode, 
                home_page.rating, 
                home_page.language, 
                home_page.status 
           
        ");

        foreach ($result as $row) {
            $row->img = asset("storage/image/" . $row->img);
            $row->video = asset("storage/video/" . $row->video);
            $row->gonres_name = $row->gonres_name ? explode(', ', $row->gonres_name) : [];
        }

        return response()->json($result);
    }

    public function users(){
        $result = DB::select("select * from user");
        return response()->json($result);
    }


    public function remove($id)
    {
        DB::delete("DELETE FROM `filter_gonres` WHERE anime_id =" . $id);
        DB::delete("DELETE FROM `home_page` WHERE id =" . $id);
        DB::delete("DELETE FROM `trending` WHERE id = " . $id);

        return response()->json();
    }



    public function single_product($id)
    {
        // Fetch the product details
        $result = DB::select("
    SELECT 
    home_page.id, 
    home_page.name AS home_name,  -- ✅ Alias to prevent conflict
    home_page.alias, 
    home_page.img, 
    home_page.video, 
    home_page.year, 
    home_page.desc, 
    home_page.episode, 
    home_page.status, 
    home_page.rating, 
    home_page.language, 
    GROUP_CONCAT(gonres.name SEPARATOR ', ') AS gonres_name, 
    trending.view, 
    trending.name AS trending_name -- ✅ Alias to prevent conflict
FROM home_page 
LEFT JOIN filter_gonres ON home_page.id = filter_gonres.anime_id 
LEFT JOIN gonres ON gonres.id = filter_gonres.gonres_id 
LEFT JOIN trending ON trending.id = home_page.id 
WHERE home_page.id = ? 
GROUP BY 
    home_page.id, 
    home_page.name, 
    home_page.alias, 
    home_page.img, 
    home_page.video, 
    home_page.year, 
    home_page.desc, 
    home_page.episode, 
    home_page.status, 
    home_page.rating, 
    home_page.language, 
    trending.view, 
    trending.name;

", [$id]);



        $row = $result[0];
        $row->name = $row->home_name;  // ✅ Use the alias
        unset($row->home_name); // Optional: Remove unnecessary alias field

        $row->img = asset("storage/image/" . $row->img);
        $row->video = asset("storage/video/" . $row->video);
        $row->gonres_name = $row->gonres_name ? explode(', ', $row->gonres_name) : [];

        DB::update("UPDATE trending SET view = view + 1 WHERE id = ?", [$id]);

        return response()->json($row);
    }



    public function trending(Request $request)
    {
        $page = $request->input('page', 1);
        $perPage = 20; 
        $offset = ($page - 1) * $perPage;
    
        // Fetch total count of trending anime
        $totalItems = DB::table('home_page')
            ->leftJoin('trending', 'trending.id', '=', 'home_page.id')
            ->count();
        $totalPages = ceil($totalItems / $perPage);
    
        // Fetch trending anime with pagination
        $trending = DB::select("
            SELECT 
                home_page.id, 
                home_page.name, 
                home_page.img, 
                home_page.year, 
                home_page.desc, 
                home_page.episode, 
                home_page.rating, 
                home_page.language, 
                GROUP_CONCAT(gonres.name SEPARATOR ', ') AS gonres_name, 
                trending.view, 
                trending.name 
            FROM home_page 
            LEFT JOIN filter_gonres ON home_page.id = filter_gonres.anime_id 
            LEFT JOIN gonres ON gonres.id = filter_gonres.gonres_id 
            LEFT JOIN trending ON trending.id = home_page.id 
            GROUP BY 
                home_page.id, 
                home_page.name, 
                home_page.img, 
                home_page.year, 
                home_page.desc, 
                home_page.episode, 
                home_page.rating, 
                home_page.language, 
                trending.view, 
                trending.name 
            ORDER BY trending.view DESC 
            LIMIT ? OFFSET ?
        ", [$perPage, $offset]);
    
        foreach ($trending as $row) {
            $row->img = asset("storage/image/" . $row->img);
            $row->gonres_name = $row->gonres_name ? explode(', ', $row->gonres_name) : [];
        }
    
        return response()->json([
            'data' => $trending, 
            'totalPages' => $totalPages
        ]);
    }





    public function show_random_product()
    {

        $result = $this->random_product();


        $response = [
            'product' => $result
        ];


        return response()->json($response);
    }

    public function random_product()
    {

        $result1 = DB::select("select * from home_page ORDER BY RAND() LIMIT 1 ");


        $product_name = $result1[0]->name;


        $result = DB::select("
        SELECT home_page.*, gonres.name AS gonres_name
        FROM home_page
        INNER JOIN filter_gonres ON filter_gonres.anime_id = home_page.id
        INNER JOIN gonres ON gonres.id = filter_gonres.gonres_id
        WHERE home_page.name ='" . $product_name . "'
        
    ");
        $product = null;

        if (!empty($result)) {
            $product = $result[0];
            $product->gonres = [];
            foreach ($result as $row) {
                $row->img = asset("storage/image/" . $row->img);

                $product->gonres[] = $row->gonres_name;
            }
        }

        return $product;
    }

    public function register(Request $request)
    {
        $email = $request->get("email");

        $username = $request->get("username");

        $role = $request->get("role");

        $Password = $request->get("password");

        if ($role == "admin") {
            $admin_password = $request->get("admin_password");

            if ($admin_password == "12345") {
                $token = $this->genrateRandomString(50);

                DB::insert("INSERT INTO `user`( `email`, `password`, `username`, `token`, `role`) VALUES ('" . $email . "','" . $Password . "','" . $username . "','" . $token . "','" . $role . "')");

                $user = [];
                $user['status'] = "OK";
                $user['username'] = $username;
                // $user['username'] = $email;
                $user['role'] = $role;
                $user['token'] = $token;

                return response()->json($user);
            } else {
                $user['status'] = "Error";
                $user['msg'] = "* Admin Password Is Incorrect";
                return response()->json($user);
            }
        } else {
            $token = $this->genrateRandomString(50);

            DB::insert("INSERT INTO `user`( `email`, `password`, `username`, `token`, `role`) VALUES ('" . $email . "','" . $Password . "','" . $username . "','" . $token . "','" . $role . "')");

            $user = [];
            $user['status'] = "OK";
            $user['username'] = $username;
            $user['role'] = $role;
            $user['token'] = $token;

            return response()->json($user);
        }
    }

    public function login(Request $request)
    {
        $email = $request->get("email");

        $role = $request->get("role");

        $password = $request->get("password");

        $result = DB::select("Select * from user where email = '" . $email . "' and role = '" . $role . "' and password = '" . $password . "'");

        $count = 0;

        $user_data = "";

        foreach ($result as $row) {
            $count = 1;
            $user_data = $row;
        }

        if ($count == 1) {
            $token = $this->genrateRandomString(50);
            $user = [];
            $user['status'] = "OK";
            $user['username'] = $user_data->username;
            $user['role'] = $role;
            $user['token'] = $token;

            DB::update("update user set token='" . $token . "' where email = '" . $email . "' and password = '" . $password . "'  ");


            return response()->json($user);
        } else {
            $user['status'] = "Error";
            $user['msg'] = "* Admin Password Is Incorrect";
            $user['helo'] = "kuch to gabbag gaui";
            return response()->json($user);
        }
    }

    public function genrateRandomString($length = 10)
    {
        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

        $characterLength = strlen($characters);

        $randomString = '';

        for ($i = 0; $i < $length; $i++) {

            $randomString .= $characters[random_int(0, $characterLength - 1)];
        }
        return $randomString;
    }

    public function search(Request $request)
    {
        $request->validate([
            'search' => 'nullable|string|max:255',
        ]);

        $search = $request->query('search');

        $query = CustomModel::query();

        if ($search) {
            $query->where('name', 'like', '%' . $search . '%');
        }
        $results = $query->paginate(10);

        foreach ($results as $row) {
            $row->img = asset("storage/image/" . $row->img);
        }


        return response()->json([
            'search_results' => $results->items(),
            'total' => $results->total(),
            'current_page' => $results->currentPage(),
            'per_page' => $results->perPage(),
            'last_page' => $results->lastPage(),
        ]);
    }


    public function genres()
    {
        $result = DB::select("SELECT * FROM `gonres`");
        return response()->json($result);
    }

    public function products_with_gonres($id)
    {
        $result = DB::select("SELECT home_page.* FROM `home_page` WHERE home_page.id = '$id' ");
        foreach ($result as $row) {
            $gonres = DB::select("SELECT gonres.* FROM gonres 
                                  INNER JOIN filter_gonres ON filter_gonres.gonres_id = gonres.id 
                                  INNER JOIN home_page ON home_page.id = filter_gonres.anime_id 
                                  WHERE home_page.id = ?", [$row->id]);

            $row->img = asset("storage/anime_images" . $row->img);
            $row->gonres = $gonres;
        }

        return response()->json($result[0]);
    }

    public function add_product(Request $request)
    {
        $name = $request->get('name');
        $alias = $request->get('alias');
        $year = $request->get('year');
        $desc = $request->get('desc');
        $language = $request->get('language');
        $episode = $request->get('episode');
        $rating = $request->get('rating');
        $genres = $request->get('genres');

        $anime_image = null;
        if ($request->hasFile("anime_image")) {
            $anime_image = time() . '_' . $request->anime_image->getClientOriginalName();
            $request->anime_image->move(public_path('storage/image/'), $anime_image);
        }


        $video = null;
        if ($request->hasFile("video")) {
            $video = time() . '_' . $request->video->getClientOriginalName();
            $request->video->move(public_path('storage/video/'), $video);
        }

        // Insert anime data
        DB::insert(
            "INSERT INTO `home_page`
            (`name`, `alias`, `year`, `desc`, `img`, `video`, `language`, `episode`, `rating`)
             VALUES
            (?,?,?,?,?,?,?,?,?)",
            [
                $name,
                $alias,
                $year,
                $desc,
                $anime_image,
                $video,
                $language,
                $episode,
                $rating,
            ]
        );

        $animeId = DB::getPdo()->lastInsertId();

        // Insert genres if provided
        if (!empty($genres)) {
            foreach ($genres as $genreId) {
                DB::insert("INSERT INTO `filter_gonres`(`anime_id`, `gonres_id`) VALUES (?,?)", [$animeId, $genreId]);
            }
        }

        return response()->json([
            'msg' => 'Product added successfully',
            'status' => 'ok'
        ]);
    }

    public function update_products(Request $request, $id)
    {

        $product = DB::selectOne("SELECT * FROM home_page WHERE id = ?", [$id]);
        if (!$product) {
            return response()->json([
                'msg' => 'Product not found',
                'status' => 'error'
            ], 404);
        }


        $updateData = [
            'name' => $request->get('name', $product->name),
            'alias' => $request->get('alias', $product->alias),
            'year' => $request->get('year', $product->year),
            'desc' => $request->get('desc', $product->desc),
            'language' => $request->get('language', $product->language),
            'episode' => $request->get('episode', $product->episode),
            'rating' => $request->get('rating', $product->rating),
            'status' => $request->get('status', $product->status),
        ];


        if ($request->hasFile("anime_image")) {
            $anime_image = time() . '_' . $request->anime_image->getClientOriginalName();
            $request->anime_image->move(public_path('storage/image/'), $anime_image);
            $updateData['img'] = $anime_image;
        }


        if ($request->hasFile("video")) {
            $video = time() . '_' . $request->video->getClientOriginalName();
            $request->video->move(public_path('storage/video/'), $video);
            $updateData['video'] = $video;
        }


        $updateQuery = "UPDATE home_page SET ";
        $updateParams = [];
        $updates = [];

        foreach ($updateData as $key => $value) {
            $updates[] = "`$key` = ?";
            $updateParams[] = $value;
        }

        $updateQuery .= implode(", ", $updates) . " WHERE id = ?";
        $updateParams[] = $id;


        DB::update($updateQuery, $updateParams);

        if ($request->has('genres')) {

            DB::delete("DELETE FROM filter_gonres WHERE anime_id = ?", [$id]);


            foreach ($request->genres as $genreId) {
                DB::insert("INSERT INTO filter_gonres (anime_id, gonres_id) VALUES (?, ?)", [$id, $genreId]);
            }
        }

        return response()->json([
            'msg' => 'Product updated successfully',
            'status' => 'ok'
        ]);
    }
}
