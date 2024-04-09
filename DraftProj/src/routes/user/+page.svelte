<script>
    import Navbar from '../../components/Navbar.svelte';
    export let data;
</script>
<slot />
<div>
    <div class=" m-0 h-[100px] w-screen bg-white z-8 flex items-center">

        {#if !data.profile}

        <div>
            <h1 class="font-bold font-serif text-secondary text-5xl m-6">
                Hey, <span class="text-[30px]">stranger</span>
            </h1>
        </div>

        {:else}
        
        <div>
            <h1 class="font-bold font-serif text-secondary text-5xl m-6">
                Hey, <span class="text-[30px]">{data.profile.name.split(' ')[0]}</span>
            </h1>
        </div>
    
    
        {/if}

    </div>
    
        {#if !data.profile}

        <div>
            <div class="m-5 border-solid border-secondary border-4 p-3 rounded-lg pt-5 w-[75%]">
                <h1 class="text-3xl m-4 mb-8 font-serif font-bold text-secondary">
                    User Actions
                </h1>
            
            <div class="mb-4 ml-2 w-[70%]">
                <a href="/login">
                    <button type="submit" class=" bg-secondary font-serif font-bold border-2 border-white rounded-lg p-2 px-5 text-white transition ease-in-out active:bg-slate-600 active:text-yellow-200" >
                        Sign in
                    </button>
                </a>
            </div>

            <div class="mb-4 ml-2 w-[70%]">
                <a href="/register">
                    <button class=" bg-secondary font-serif font-bold border-2 border-white rounded-lg p-2 px-5 text-white transition ease-in-out active:bg-slate-600 active:text-yellow-200" >
                        Sign up
                    </button>
                </a>
            </div>

            </div>
        </div>

        {:else}
        
        <div>
            <div class="m-5 border-solid border-secondary border-4 p-3 rounded-lg pt-5 w-[75%]">
                <h1 class="text-3xl m-4 mb-8 font-serif font-bold text-secondary">
                    User Actions
                </h1>
            
            <div class="mb-4 ml-2 w-[70%]">
                <form method="POST" action="/logout">
                    <button type="submit" class=" bg-secondary font-serif font-bold border-2 border-white rounded-lg p-2 px-5 text-white transition ease-in-out active:bg-slate-600 active:text-yellow-200" >
                        Sign Out
                    </button>
                </form>
            </div>

            <div class="mb-4 ml-2 w-[70%]">
                <button class=" bg-secondary font-serif font-bold border-2 border-white rounded-lg p-2 px-5 text-white transition ease-in-out active:bg-slate-600 active:text-yellow-200" >
                    Blank
                </button>
            </div>

            </div>
        </div>

        {/if}
    
    </div>
