<script>
    let margin = 0;
    let width = 65;
</script>
<form method="POST" action="?/register">
<!-- Text input -->
<div class="m-5 border-solid border-secondary border-4 p-3 rounded-lg pt-5 w-[75%]">
    <h1 class="text-3xl m-4 mb-8 font-serif font-bold">
        Sign Up
    </h1>
    <div class="mb-4 ml-2  w-[70%]">
    <label for="8faf3754-8807-46fd-836d-484196bd8948"></label>
    <input placeholder="First then last name" name="name" type="text" id="8faf3754-8807-46fd-836d-484196bd8948" class="w-full block rounded-lg border dark:border-none  py-[9px] px-3 pr-4 text-sm focus:border-secondary focus:ring-2 focus:ring-secondary focus:outline-none transition-width ease-in-out hover:w-[105%] duration-200 focus:w-[105%]" />
  </div>
  
  
  <!-- Email input -->
  <div class="mb-4 ml-2 w-[70%]">
    <label class="text-secondary text-[15px] italic"for="1dabce70-e59f-43ae-aaa2-2c961e70bb4c">(Only KS emails)</label>
    <input placeholder="blank@ksbe.edu" name="email" type="email" id="1dabce70-e59f-43ae-aaa2-2c961e70bb4c" class="w-full block rounded-lg border dark:border-none  py-[9px] px-3 pr-4 text-sm focus:border-secondary focus:ring-2 focus:ring-secondary focus:outline-none transition-width ease-in-out hover:w-[105%] duration-200 focus:w-[105%]" />
  </div>


    <!-- Password input -->
  <div class="mb-4 ml-2 w-[70%]">
    <label for="1dabce70-e59f-43ae-aaa2-2c961e70bb4c"></label>
    <input placeholder="Password" name="password" type="password" id="1dabce70-e59f-43ae-aaa2-2c961e70bb4c" class="w-full block rounded-lg border dark:border-none  py-[9px] px-3 pr-4 text-sm focus:border-secondary focus:ring-2 focus:ring-secondary focus:outline-none transition-width ease-in-out hover:w-[105%] duration-200 focus:w-[105%]" />
  </div>


  <div class="mb-4 ml-2 w-[70%]">
    <label for="1dabce70-e59f-43ae-aaa2-2c961e70bb4c"></label>
    <input placeholder="Confirm your password" name="passwordConfirm" type="password" id="1dabce70-e59f-43ae-aaa2-2c961e70bb4c" class="w-full block rounded-lg border dark:border-none  py-[9px] px-3 pr-4 text-sm focus:border-secondary focus:ring-2 focus:ring-secondary focus:outline-none transition-width ease-in-out hover:w-[105%] duration-200 focus:w-[105%]" />
  </div>


  <div class="mb-4 ml-2 w-[70%]">
    <button class="w-[50%] block rounded-lg py-[9px] px-3 pr-4 text-sm border-2 border-secondary transition hover:bg-slate-200 active:scale-80" type="submit">
        <p class="translate-x-[-40px]">Register</p>
    </button>
  </div>

  
</div>
</form>
<p class="m-5 text-1xl font-serif">Or <a href="/login" class="font-serif italic text-violet-700 hover:underline ">sign in</a> if you already have an acount</p>