
<script>
  //creates some usefull variables used in tailwindcss, and the password reveal functions
  let margin = 0;
  let width = 65;
  let passwordReveal = 'password';
  let passwordConfirmReveal = 'password';


  //functions used to toggle visibility of password
  function togglePassVis() {
      passwordReveal = (passwordReveal === 'password') ? 'text' : 'password';
  }

  function togglePassConfirmVis() {
      passwordConfirmReveal = (passwordConfirmReveal === 'password') ? 'text' : 'password';
  }

  // Function to validate email and prevent form submission if invalid
  async function handleFormSubmit(event) {

      //gets values of forms and sets them to variables
      const email = (document.getElementById('email').value).toLowerCase()
      console.log(email)
      const password = document.getElementById('password').value;
      const passwordConfirm = document.getElementById('password2').value;
      
      if (!email.endsWith('@imua.ksbe.edu') && !email.endsWith('@ksbe.edu')) {
          alert('Please use a valid KS email address.');
          event.preventDefault(); // Prevent form from submitting
          return;
      }
      
      if (password.length < 8) {
          alert('Password must be at least 8 characters long.');
          event.preventDefault(); // Prevent form from submitting
          return;
      }

      if (password !== passwordConfirm) {
          alert('Passwords do not match.');
          event.preventDefault(); // Prevent form from submitting
          return;
      }

      // If all validations pass then the form submits
      event.target.submit();
  }
</script>
<form id="form" method="POST" action="?/register" on:submit|preventDefault={handleFormSubmit}>
  <div class="m-5 border-solid border-secondary border-4 p-3 rounded-lg pt-5 w-[75%]">
      <h1 class="text-3xl m-4 mb-8 font-serif font-bold">
          Sign Up
      </h1>
      <div class="mb-4 ml-2  w-[70%]">
          <label for="8faf3754-8807-46fd-836d-484196bd8948"></label>
          <input id="name" placeholder="First then last name" name="name" type="text" class="w-full block rounded-lg border dark:border-none py-[9px] px-3 pr-4 text-sm focus:border-secondary focus:ring-2 focus:ring-secondary focus:outline-none transition-width ease-in-out hover:w-[105%] duration-200 focus:w-[105%]" />
      </div>
      
  <!-- Email input -->
  <div class="mb-4 ml-2 w-[70%]">
    <label class="text-secondary text-[15px] italic"for="1dabce70-e59f-43ae-aaa2-2c961e70bb4c">(Only KS emails)</label>
    <input id="email"  placeholder="blank@ksbe.edu" name="email" type="email"  class="w-full block rounded-lg border dark:border-none  py-[9px] px-3 pr-4 text-sm focus:border-secondary focus:ring-2 focus:ring-secondary focus:outline-none transition-width ease-in-out hover:w-[105%] duration-200 focus:w-[105%]" />
  </div>


<!-- Password input -->
<div class="mb-4 ml-2 relative w-[70%]">
  <label for="password"></label>
  <input id="password"  placeholder="Password" name="password" type={passwordReveal}  class="w-full block rounded-lg border dark:border-none  py-[9px] px-3 pr-10 text-sm focus:border-secondary focus:ring-2 focus:ring-secondary focus:outline-none transition-width ease-in-out hover:w-[105%] duration-200 focus:w-[105%]" />
  <button type="button" class="absolute inset-y-0 right-0 px-2 focus:outline-none" on:mousedown={togglePassVis} on:mouseup={togglePassVis} on:click={togglePassVis}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 h-6 fill-secondary transition active:fill-slate-500">
      <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
      <path fill-rule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z" clip-rule="evenodd" />
    </svg>
  </button>
</div>

<!-- Password confirmation input -->
<div class="mb-4 ml-2 relative w-[70%]">
  <label for="passwordConfirm"></label>
  <input  id="password2" placeholder="Confirm your password" name="passwordConfirm" type={passwordConfirmReveal}  class="w-full block rounded-lg border dark:border-none  py-[9px] px-3 pr-10 text-sm focus:border-secondary focus:ring-2 focus:ring-secondary focus:outline-none transition-width ease-in-out hover:w-[105%] duration-200 focus:w-[105%]" />
  <button type="button" class="absolute inset-y-0 right-0 px-2 focus:outline-none" on:mousedown={togglePassConfirmVis} on:mouseup={togglePassConfirmVis} on:click={togglePassConfirmVis}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 h-6 fill-secondary transition active:fill-slate-500">
      <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
      <path fill-rule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z" clip-rule="evenodd" />
    </svg>
  </button>
</div>
      
      <div class="mb-4 ml-2 w-[70%] flex-auto">
          <button class="w-[50%] block rounded-lg py-[9px] px-3 pr-4 text-sm border-2 border-secondary transition hover:bg-slate-200 active:scale-80" type="submit">
              <p class="">Register</p>
      </div>  
  </div>
</form>
<p class="m-5 text-1xl font-serif">Or <a href="/login" class="font-serif italic text-violet-700 hover:underline ">sign in</a> if you already have an acount</p>


