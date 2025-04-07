<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\DB;

class MyAuth
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        $token = $request->header("authentication");
        $role = $request->get("role");

        if($role != "admin"){
            $user = [];
            $user['status'] = "OK";
            $user["msg"] = "You Are Not Admin";

            return response()->json($user);

        }

        $result = DB::select("SELECT * FROM `user` WHERE token  =  '".$token."' AND role = '".$role."' ");
        
        $count = 0;

        foreach($result as $row)
        {
            $count =1;
        }

        if($count==1){

            return $next($request);
        }
        else{
            $user = [];
            $user['status'] = "failed";
            $user["msg"] = "failed to fetch token and role";

            return response()->json($user);

        }
    }
}
