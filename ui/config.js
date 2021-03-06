'use strict';

angular.module('app.config', [])
.constant('appconf', {
    api: '/api/sca-wf-life',

    //shared servive api and ui urls (for menus and stuff)
    shared_api: '/api/shared',
    shared_url: '/shared',
    
    //authentcation service API to refresh token, etc.
    auth_api: '/api/auth',
    auth_url: '/auth',

    sca_api: '/api/wf', //deprecated by still used by some sca-wf bower components
    wf_api: '/api/wf',
    
    progress_api: '/api/progress',
    progress_url: '/progress',

    jwt_id: 'jwt',
    upload_task_id: '_upload', //psudo task_id to use to store uploaded files

    sample_task: '56a04390cb0548a94d5471e2', 

    breads: [
        {id: "workflows", label: "Workflows", url:"/wf/#/workflows" },
        {id: "process", label: "Life", url: "#/process"},
        {id: "input", label: "Add Input", url: "#/input"},
        {id: "tasks", label: "Tasks", url: "#/tasks"},
    ],

    //URL samples 
    sample_urls: [ 
        {
            name: "LiFE Demo Data (IU)", 
            desc: "Copy of Demo data provided by Franco Pestilli (cached at xd-login for faster download)", 
            url: "http://xd-login.opensciencegrid.org/scratch/hayashis/life/life_demo_data.tar.gz"},
        {
            name: "LiFE Demo Data (Stanford)", 
            desc: "Demo data provided by Franco Pestilli", 
            url: "https://stacks.stanford.edu/file/druid:cs392kv3054/life_demo_data.tar.gz"
        },
    ],
});

