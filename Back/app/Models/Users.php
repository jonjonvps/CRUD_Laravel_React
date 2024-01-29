<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

# Creating the user table
class Users extends Model
{
    use HasFactory;
    protected $table = 'user';

    protected $fillable = [
        'username',
        'first_name',
        'last_name',
        'age',
        'cellphone'
    ];

}
