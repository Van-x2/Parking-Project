<script>
  //importing
  import Main from '../components/Main.svelte'
  import Navbar from '../components/Navbar.svelte'
  export let data;
</script>

  
  <div class="w-full h-full grid justify-items-center">

    <div class="w-full h-full z-0">
      <Main data="{data}"/>
    </div>

    {#if !data.profile}
    <div class=" items-center w-[70%] m-5 fixed">
      <div class=" opacity-85 flex items-center p-4 mb-4 text-sm rounded-lg bg-white border-2 border-secondary" role="alert">
        
        <svg class="flex-shrink-0 inline w-4 h-4 me-3 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
        </svg>
        <p>Cannot reserve without being logged in.  <a href="/user" class="italic text-yellow-500 transition hover:underline"> login here</a></p>

      </div>
    </div>
    
    {:else}

    {#if data.profile.owningspot == true}

    <div class=" items-center w-[70%] m-5 fixed">
      <div class=" opacity-85 flex items-center p-4 mb-4 text-sm rounded-lg bg-white border-2 border-secondary" role="alert">
        
        <svg class="flex-shrink-0 inline w-4 h-4 me-3 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
        </svg>
        <p>Already claimed a spot for today.x  <a href="/user" class="italic text-yellow-500 transition hover:underline"> login here</a></p>

      </div>
    </div>

    
    
    {/if}

    {/if}
    

    <Navbar />
  
  </div>



