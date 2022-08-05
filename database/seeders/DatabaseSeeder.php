<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        //users
        DB::table('users')->insert([
            'name' => 'Mamutas',
            'email' => 'mamutas@gmail.com',
            'password' => Hash::make('123')
        ]);
        DB::table('users')->insert([
            'name' => 'Bebras',
            'email' => 'bebras@gmail.com',
            'password' => Hash::make('123'),
            'role' => 10
        ]);

        //restorants
        DB::table('restorants')->insert([
            'name' => 'Restoranas1',
            'city' => 'Vilnius',
            'address' => 'Sauletekio aleja 10',
            'open_time' => '10:00',
            'close_time' => '15:00'
        ]);
        DB::table('restorants')->insert([
            'name' => 'Restoranas2',
            'city' => 'Kaunas',
            'address' => 'Nemenčinė',
            'open_time' => '11:00',
            'close_time' => '16:00'
        ]);


        //dishes
        DB::table('dishes')->insert([
            'restorant_id' => 1,
            'name' => 'Pizza',
            'price' => 10.11
        ]);
        DB::table('dishes')->insert([
            'restorant_id' => 1,
            'name' => 'Burger',
            'price' => 9.99
        ]);
        DB::table('dishes')->insert([
            'restorant_id' => 2,
            'name' => 'Pink soup',
            'price' => 2.22
        ]);
        DB::table('dishes')->insert([
            'restorant_id' => 2,
            'name' => 'Tom yum',
            'price' => 5.33
        ]);
    }
}
