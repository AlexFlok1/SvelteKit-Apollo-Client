<script lang="ts">

    //imports
    import { allTools } from '../stores/toolsDataStore'
    import { loginWindow } from '../stores/store'

    const name: string = 'Web Tools'
    const header: string = 'Mueller Cleveland Web Tools'
    //init reactive variable
    $: toogleLogin = false

    const departments = new Set<string>( $allTools.map( el => el.department ) )
    let selectedDepartment:string = ''

    const selectDep = ( dep: string ) => {
        selectedDepartment = ( selectedDepartment === dep ) ? '' : dep
        console.log(( selectedDepartment === dep ) ? '' : dep)
    }

    const closeLogin = ( e ) => {
        if( e.srcElement.parentNode.parentNode.id === 'LOGIN-WINDOW' )
            loginWindow.update( prev => false )
    }

    //writeable listneres
    loginWindow.subscribe( data => toogleLogin = data )

</script>

<style>
    #LOGIN-WINDOW{
        position: fixed;
        top:0;
        left:0;
        width:100%;
        height: 100%;
        background: rgba(0,0,0,.4);
    }
</style>

<svelte:head>
    <title>{header}</title>
</svelte:head>

<main class='h-5/6'>
  
    <div class="grid grid-cols-4 mx-auto h-full">
        <div class=" col-start-2 col-span-2">
            <div class="h-1/3">
                <div class="flex justify-center items-center h-2/3 mb-4">
                    <img class="h-full" src="/Mueller Logo.png"  />
                </div>
                <h1 class="text-center text-5xl font-bold p-3 mb-2">{name}</h1>
                <hr>
            </div>
                <!--Departments Grid-->
            <div class="grid grid-cols-4 py-4">
                {#each [ ...departments ] as department, indx }
                <!-- This example requires Tailwind CSS v2.0+ -->
                    <div class="relative col-span-2 text-center p-3">
                        <div>
                            <button 
                            on:click={ () => { selectDep( department ) } } 
                            type="button" 
                            class="justify-center w-full rounded-md border border-white-300 shadow-md p-4 bg-white text-xl font-medium text-gray-700 hover:bg-gray-50 focus:outline-none">
                            { department }
                            </button>
                            <div class="z-10 origin-top-right absolute left-1/4 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none { (selectedDepartment === department) ? 'flex' : 'hidden' }">
                                <div class=" w-full py-4">
                                    <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
                                    {#each $allTools.filter( el => el.department === department ).map( el => el.name ) as tool }
                                            <a href="#" class=" w-full text-gray-800 block px-4 py-2 text-sm hover:bg-sky-400 hover:text-white">{tool}</a>    
                                    {/each}
                                </div>
                            </div>
                        </div>
                
                    </div>
                {/each}
            </div>
        </div>
    </div>

    <div id='LOGIN-WINDOW'  on:click={( e ) => { closeLogin( e ) }}>
        <div class=" grid grid-cols-1 h-full">
            <div class="h-full flex justify-center items-center">
                <div class="w-2/6 h-2/6 bg-white p-3 rounded-md shadow-lg">
                    <span class="w-full text-xl p-4 block text-center font-semibold">Login</span>
                    <input class="w-3/6 block rounded sm"  type="text" placeholder="Badge #" />
                    <button class="">Submit</button>
                </div>
            </div>
        </div>
    </div>

</main>
<!--class="{ toogleLogin ? 'block' : 'hidden' }"-->