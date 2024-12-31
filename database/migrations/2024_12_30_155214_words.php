<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        //
        Schema::create('words', function (Blueprint $table) {
            $table->id('word_id');
            $table->string('word')->unique();
            $table->enum('type', ['kerja','sifat','sambung','benda']);
            $table->enum('difficulty', ['mudah','sedang','sulit']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
        Schema::dropIfExists('words');
    }
};
