<?php

namespace App\Http\Controllers;

use App\Models\Restorant;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RestorantController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $restorants = Restorant::all();
        // $colors = match ($request->sort) {
        //     'asc' => Color::orderBy('title')->get(), //default order by asc
        //     'desc' => Color::orderBy('title', 'desc')->get(),
        //     default => Color::all()
        // };

        return Inertia::render('Home', [
            'restorants' => $restorants,
            'title' => 'Restorants',
            'page' => 'restorantsIndex',
            'editUrl' => route('restorants-edit', '#'),
            'deleteUrl' => route('restorants-delete', '#')
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {

        return Inertia::render('Home', [
            'page' => 'restorantCreate',
            'title' => 'New restorant',
            'saveUrl' => route('restorants-store')
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $restorant = new Restorant();
        $restorant->name = $request->name;
        $restorant->city = $request->city;
        $restorant->address = $request->address;
        $restorant->open_time = $request->openTime;
        $restorant->close_time = $request->closeTime;
        $restorant->save();
        return redirect()->route('home');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Restorant  $restorant
     * @return \Illuminate\Http\Response
     */
    public function edit(Restorant $restorant)
    {

        dump($restorant);
        return Inertia::render('Home', [
            'page' => 'restorantEdit',
            'title' => 'Edit restorant',
            'updateUrl' => route('restorants-update', '#'),
            'restorant' => $restorant
        ]);
        // return Redirect::route('home', [
        //     'page' => 'restorantEdit',
        //     'title' => 'Edit restorant',
        //     'updateUrl' => route('restorants-update', '#'),
        //     'restorant' => $restorant
        // ]);

        // return redirect()->route('restorants-edit', $restorant);

        // return view('restorant/Edit', ['restorant' => $restorant]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Restorant  $restorant
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Restorant $restorant)
    {
        $restorant->name = $request->name;
        $restorant->city = $request->city;
        $restorant->address = $request->address;
        $restorant->open_time = $request->openTime;
        $restorant->close_time = $request->closeTime;
        $restorant->save();
        // return redirect()->route('home');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Restorant  $restorant
     * @return \Illuminate\Http\Response
     */
    public function destroy(Restorant $restorant)
    {
        $restorant->delete();
    }
}
