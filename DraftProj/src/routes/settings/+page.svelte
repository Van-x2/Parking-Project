<script>
export let data;
</script>

<slot />
<div>
    <div class=" m-0 h-[100px] w-screen bg-white z-8 flex items-center">
        <h1 class="font-bold font-serif text-secondary text-5xl m-6">
            Settings
        </h1>
        <br>
    </div>

    {#if data.profile}
    <div class="m-4 p-2 border-[5px] border-secondary rounded-lg class= font-serif">
        <form method="POST" action="?/update">

                <h1 class="text-3xl m-4 mb-8 font-serif font-bold text-secondary">
                    Update {data.profile.name.split(' ')[0]}'s options
                </h1>

                <!--Update username -->
                <div class="mb-4 ml-2  w-[70%]">
                    <label for="1dabce70-e59f-43ae-aaa2-2c961e70bb4c" class="italic">Username:</label>
                    <input value="{data.profile.username}" placeholder="Username" name="username" type="text" id="8faf3754-8807-46fd-836d-484196bd8948" class="w-full block rounded-lg border dark:border-none  py-[9px] px-3 pr-4 text-sm focus:border-secondary focus:ring-2 focus:ring-secondary focus:outline-none transition-width ease-in-out hover:w-[105%] duration-200 focus:w-[105%]" />
                </div>
              
            
            
                <!-- Update vehicle type -->
            <div class="mb-4 ml-2 w-[70%]">
            <label for="1dabce70-e59f-43ae-aaa2-2c961e70bb4c" class="italic">Your Vehicle: <span class="opacity-50">(Currently Selected: {data.profile.vehicle})</span></label>
                <select name="vehicle" type="text" class=" text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 dark:bg-white dark:placeholder-gray-400 dark:text-secondary dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="{data.profile.vehicle}" selected>Choose a vehicle </option>
                    <option value="car">Car</option>
                    <option value="truck">Truck</option>
                </select>
            </div>
            
                <!-- Submit changes btn -->
              <div class="mb-4 ml-2 w-[70%]">
                <button class="w-[50%] block rounded-lg py-[9px] px-3 pr-4 text-sm border-2 border-secondary transition hover:bg-slate-200 active:scale-80" type="submit">
                    <p class="translate-x-[-40px]">Save Changes</p>
                </button>
              </div>
            
            </form>
        
    </div>
    {:else}
    <h1 class="text-secondary text-[20px] m-[3%]">
        To view user settings, please sign in
    </h1>


    {/if}
</div>
