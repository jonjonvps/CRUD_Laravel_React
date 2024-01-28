<?php

namespace App\Http\Controllers;

use App\Models\Users;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use PHPUnit\Metadata\Uses;

class UsersController extends Controller
{
    /*
        The function is retrieving all users from the Users model 
        and returning a JSON response based on whether or not there are users. 
        The 200 code is used when there are users and the 404 code is used when no users are found.
    */
    public function index()
    {
        $users = Users::all();
        if($users->count() > 0) 
        {
            $data = [
                'code' => 200,
                'users' => $users
            ];

            return response()->json($data, 200);
        }else{
            $data = [
                'code' => 404,
                'message' => 'Users not found'
            ];

            return response()->json($data, 404);

        }
        
    }

    /* 
        The function is responsible for creating a new user, 
        validating the data received and providing an appropriate JSON response 
        based on the creation result.
    */
    public function create(Request $req)
    {
        $validator = Validator::make($req->all(), [
            'username' => 'required|string|max:50',
            'first_name' => 'required|alpha|max:50',
            'last_name' => 'required|alpha|max:50',
            'age' => 'nullable|integer',
            'cellphone' => 'required|string|size:11',
        ]);

        if($validator->fails())
        {
            $data = [
                'code' => 422,
                'errors' => $validator->errors()
            ];
            return response()->json($data, 422);
        }

        $users = Users::create([
            'username' => $req->username,
            'first_name' => $req->first_name,
            'last_name' => $req->last_name,
            'age' => $req->age,
            'cellphone' => $req->cellphone,
        ]);

        if($users)
        {
            $data = [
                'code' => 200,
                'message' => 'User created successfully'
            ];
            return response()->json($data,200);
        }else{
            $data = [
                'code' => 500,
                'message' => 'An unexpected error occurred'
            ];
            return response()->json($data,500);
        }

    }

    /* 
        The function is responsible for returning information 
        about a single user based on the ID provided. 
        the function returns a successful or unsuccessful response
    */
    public function singlePerson($id)
    {
        $user = Users::find($id);
        if($user)
        {
            $data = [
                'code' => 200,
                'user' => $user
            ];

            return response()->json($data, 200);
        }else{
            $data = [
                'code' => 404,
                'message' => 'Users not found'
            ];

            return response()->json($data, 404);
        }
        
    }

    public function edit($id)
    {
        $user = Users::find($id);
        if($user)
        {
            $data = [
                'code' => 200,
                'user' => $user
            ];

            return response()->json($data, 200);
        }else{
            $data = [
                'code' => 404,
                'message' => 'Users not found'
            ];

            return response()->json($data, 404);
        }
    }

    /* 
        The function is responsible for updating a user's information 
        based on the ID provided. It validates the data received, 
        finds the user by ID, updates the data if the user exists 
        and returns an appropriate JSON response.
    */
    public function update(Request $req, int $id)
    {
        $validator = Validator::make($req->all(), [
            'username' => 'required|string|max:50',
            'first_name' => 'required|alpha|max:50',
            'last_name' => 'required|alpha|max:50',
            'age' => 'nullable|integer',
            'cellphone' => 'required|string|size:11',
        ]);

        if($validator->fails())
        {
            $data = [
                'code' => 422,
                'errors' => $validator->errors()
            ];
            return response()->json($data, 422);
        }
        $user = Users::find($id);
        

        if($user)
        {

            $user->update([
                'username' => $req->username,
                'first_name' => $req->first_name,
                'last_name' => $req->last_name,
                'age' => $req->age,
                'cellphone' => $req->cellphone,
            ]);

            $data = [
                'code' => 200,
                'message' => 'User uptaded successfully'
            ];
            return response()->json($data,200);
        }else{
            $data = [
                'code' => 404,
                'message' => 'Users not found'
            ];
            return response()->json($data,404);
        }
    }

    /* 
        The function is responsible for deleting a user 
        based on the ID provided. It checks if the user exists, 
        deletes them and returns a JSON response
    */
    public function delete($id)
    {
        $user = Users::find($id);
        if($user)
        {
            $user->delete();
            $data = [
                'code' => 200,
                'message' => 'User deleted successfully'
            ];

            return response()->json($data, 200);
        }else{
            $data = [
                'code' => 404,
                'message' => 'Users not found'
            ];

            return response()->json($data, 404);
        }
    }

}
