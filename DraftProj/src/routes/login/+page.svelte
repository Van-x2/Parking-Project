<script>
    let margin = 0;
    let width = 65;
    export let form;
    let passwordReveal = 'password';
    

    function togglePassVis() {
        passwordReveal = (passwordReveal === 'password') ? 'text' : 'password';

    }


</script>
<form method="POST" action="?/login">
<!-- Text input -->
<div class="m-5 border-solid border-secondary border-4 p-3 rounded-lg pt-5 w-[75%]">
    <h1 class="text-3xl m-4 mb-8 font-serif font-bold">
        Login to your acount
    </h1>

  <!-- Email input -->
  <div class="mb-4 ml-2 w-[70%]">
    <label class="text-secondary text-[15px] italic"for="1dabce70-e59f-43ae-aaa2-2c961e70bb4c"></label>
    <input placeholder="blank@ksbe.edu" name="email" type="email" id="1dabce70-e59f-43ae-aaa2-2c961e70bb4c" class="w-full block rounded-lg border dark:border-none  py-[9px] px-3 pr-4 text-sm focus:border-secondary focus:ring-2 focus:ring-secondary focus:outline-none transition-width ease-in-out hover:w-[105%] duration-200 focus:w-[105%]" />
  </div>


    <!-- Password input -->
    <div class="mb-4 ml-2 relative w-[70%]">
      <label for="password"></label>
      <input placeholder="Password" name="password" type={passwordReveal} id="password" class="w-full block rounded-lg border dark:border-none  py-[9px] px-3 pr-10 text-sm focus:border-secondary focus:ring-2 focus:ring-secondary focus:outline-none transition-width ease-in-out hover:w-[105%] duration-200 focus:w-[105%]" />
      <button type="button" class="absolute inset-y-0 right-0 px-2 focus:outline-none" on:mousedown={togglePassVis} on:mouseup={togglePassVis}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 h-6 fill-secondary transition active:fill-slate-500">
          <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
          <path fill-rule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z" clip-rule="evenodd" />
        </svg>
      </button>
    </div>

    <div class="mb-3 ml-3">
        <a href="/resetpw">
          <span class=" text-secondary italic font-serif font-bold hover:underline">
            Forgot your password?
          </span>
        </a>
    </div>

  <div class="mb-4 ml-2 w-[70%]">
    <button class="w-[50%] block rounded-lg py-[9px] px-3 pr-4 text-sm border-2 border-secondary transition hover:bg-slate-200 active:scale-80" type="submit">
        <p class="">Login</p>
    </button>
  </div>



  {#if form?.notVerified}
  <div class="flex items-center p-4 mb-4 ml-2 text-sm text-red-800 rounded-lg bg-red-50 border-secondary border-2 dark:text-red-400" role="alert">
    <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
    </svg>
    <span class="sr-only">Info</span>
    <div>
      <span class="font-medium">Alert!</span> You must verify your email before you can sign in (check your Outlook) 
      <br>
      <a href="/verifyemail" class=" text-secondary text-[13px] font-bold font-serif hover:underline">Or send a new one</a>
    </div>
  </div>
  {/if}

  {#if form?.incorrect}
  <div class="flex items-center p-4 mb-4 ml-2 text-sm text-red-800 rounded-lg bg-red-50 border-secondary border-2 dark:text-red-400" role="alert">
    <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
    </svg>
    <span class="sr-only">Info</span>
    <div>
      <span class="font-medium">Alert!</span> Incorrect credentials. Are you sure you have an acount?
    </div>
  </div>
  {/if}

  
</div>
</form>
<p class="m-5 text-1xl font-serif">Or <a href="/register" class="font-serif italic text-violet-700 hover:underline ">sign up</a> if you dont have an acount</p>