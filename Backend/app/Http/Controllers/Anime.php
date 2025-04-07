<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use DB;

class Anime extends Controller
{
    public function home()
    {
        $result = DB::select("SELECT home_page.*,(gonres.name) AS gonres_name FROM home_page INNER JOIN filter_gonres ON filter_gonres.anime_id = home_page.id INNER JOIN gonres ON gonres.id = filter_gonres.gonres_id");

        return view("home", array("result" => $result));
    }

    public function product_details($id)
    {

        $result = DB::select("select * from home_page where id=" . $id);

        return view("product_details", array('row' => $result[0]));
    }

    public function insert_product()
    {
        $result = DB::select("select * from home_page");

        return view("insert_product", array('result' => $result));
    }

    public function do_insert(Request $request)
    {
        $name = $request->input("name");
        $alias = $request->input("alias");
        $year = $request->input("year");
        $desc = $request->input("desc");
        $language = $request->input("language");
        $episode = $request->input("episode");
        $rating = $request->input("rating");
        // $image = $request->input("image");

        if ($request->hasFile("image")) {
            $image = $request->image->getClientOriginalName();  //"abcd.jpg";//$request->input('pr_image');

            $request->image->move(public_path('storage/anime_images'), $image);


            DB::update("INSERT INTO `home_page`(`name`, `alias`, `year`,`img`, `desc`, `language`, `episode`, `rating`) VALUES ('" . $name . "','" . $alias . "'," . $year . ",'" . $image . "','" . $desc . "','" . $language . "'," . $episode . "," . $rating . ")");
        }



        return redirect("home");
    }


    public function product_delete($id)
    {
        DB::delete("delete from home_page where id=" . $id);

        return redirect("home");
    }

    public function edit($id)
    {
        $result = DB::select("SELECT `id`, `name`, `alias`, `year`, `desc`, `img`, `language`, `episode`, `rating` FROM `home_page` WHERE id=".$id);

        return view('edit_form',array("row"=>$result[0]));

    }

    public function do_edit(Request $request,$id){
        $name = $request->input("name");
        $alias = $request->input("alias");
        $year = $request->input("year");
        $desc = $request->input("desc");
        $language = $request->input("language");
        $episode = $request->input("episode");
        $rating = $request->input("rating");
        // $image = $request->input("image");


        
        if($request->hasFile("image"))
        {
            $image= $request->image->getClientOriginalName();  //"abcd.jpg";//$request->input('pr_image');

            $request->image->move(public_path('storage/anime_images'), $image);

            DB::update("UPDATE `home_page` SET `name`='".$name."',`alias`='".$alias."',`year`=".$year.",`desc`='".$desc."',`img`='".$image."',`language`='".$language."',`episode`=".$episode.",`rating`=".$rating." WHERE id=".$id);

        }
        else
        {
            DB::update("UPDATE `home_page` SET `name`='".$name."',`alias`='".$alias."',`year`=".$year.",`desc`='".$desc."',`language`='".$language."',`episode`=".$episode.",`rating`=".$rating." WHERE id=".$id);
        }

        
        
        return redirect("home");
        
    }


    public function search_product(Request $request)
    {
        $search = $request->input("search");

        $result = DB::select("select * from home_page where name like '%".$search."%' ");

        $count=0;
        foreach($result as $row)
        {
            $count=$count+1;
        }

        return view("search_result",array('result'=>$result,'count'=>$count));

    }

    public function gonres()
    {
        $result = DB::select("SELECT * FROM gonres");
        return view("gonres" , array("results"=>$result));
    }

    public function insert_gonres(Request $request)
    {
        // Validate incoming data
        $request->validate([
            'anime_id' => 'required|integer',
            'gonres' => 'required|array',
            'gonres.*' => 'integer', // Ensure each genre ID is an integer
        ]);
    
        $anime_id = $request->input('anime_id');
        $gonres_ids = $request->input('gonres');
    
        // Insert each genre for the selected anime
        foreach ($gonres_ids as $gonres_id) {
            DB::table('filter_gonres')->insert([
                'anime_id' => $anime_id,
                'gonres_id' => $gonres_id,
            ]);
        }
    
        // Redirect back to home after inserting data
        return redirect('home')->with('success', 'Genres added successfully!');
    }
    


}
