<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Word extends Model
{
    //
    protected $table = 'words';
    protected $primaryKey = 'word_id';
    public $timestamps = true;
    protected $fillable = [
        'word',
        'type',
        'difficulty',
    ];
}

