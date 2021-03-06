<?php

namespace App\Http\Controllers;

use App\Idea;
use App\Project;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Project::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        return Project::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function show(Project $project)
    {
        return $project;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function edit(Project $project)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Project $project)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Project $project
     *
     * @return \Illuminate\Http\Response
     * @internal param Idea $idea
     */
    public function destroy(Project $project)
    {
        $project->delete();
        return response('ok');
    }

    /**
     * @param $projectId
     *
     * @return mixed
     */
    public function getIdeas($projectId)
    {
        return Idea::where('project_id', $projectId)->get();
    }

    public function getByUser($userId)
    {
        return Project::where('user_id', $userId)->get();
    }
}
