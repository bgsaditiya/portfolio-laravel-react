<?php

namespace App\Http\Controllers;

use App\Models\Word;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;


class WordsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $kata = Word::select('word',)->get()->toArray();

        // $data = [];
        foreach ($kata as $l => $m){
            foreach ($m as $k => $j){
                $data[$l] = $j;
            }
        }

        // $rand = Arr::random($data, 45);

        $shuffle = Arr::shuffle($data);

        // dd($rand);

        // Word::all();
        return response()->json($shuffle, 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Word $word)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Word $word)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Word $word)
    {
        //
    }
}
