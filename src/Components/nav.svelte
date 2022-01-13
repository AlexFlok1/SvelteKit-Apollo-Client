<script>
     import { page } from '$app/stores'
</script>
<nav class="h-1/6">
    <div class="grid grid-cols-1 h-full p-3">
        <div class="h-3/5 shadow-md rounded-md bg-sky-500">
            <div class="grid grid-cols-2 h-full p-2 items-center">
                <div class='text-left text-white pl-4'>
                    <a class="p-3 text-lg -mb-1 border-b-0 border-white transition-all ease-in-out hover:border-b-2 {$page.url.pathname === '/' ? 'border-b-2': ''}" href="/">Home</a>
                    <a class="p-3 text-lg -mb-1 border-b-0 border-white transition-all ease-in-out hover:border-b-2 {$page.url.pathname === '/about' ? 'border-b-2': ''}" href='/about'>About</a>
                </div>
                <div>
                </div>
            </div>
        </div>
    </div>
</nav>