<script>
    //sets email as null and imports pocketbase
    let email;
    import PocketBase from 'pocketbase'


    //creates asyncronys function that, upon activation, will send the password reset email for the user
    async function sendResetPWEmail(){

        //defines new pocketbase instance
        const pb = new PocketBase('https://parkingproject.pockethost.io');
        //formats email
        let emailstring = email.toLowerCase()

        //tries to send verification email using the formatted email
        try {
            await pb.collection('users').requestPasswordReset(emailstring);
            alert('Sent password reset link to: ' + emailstring)
        }
        
        //if the operation fails, then it gets the returned error, and console logs it
        catch(error) {
            console.log(error)
            alert('Failed to send password reset link, are you sure "'+ emailstring +'" is a valid email?')
        }
    }
</script>
<slot />
<div>
    <div class=" m-0 h-[100px] w-screen bg-white z-8 flex items-center">
        <h1 class="font-bold font-serif text-secondary text-5xl m-6">
            Reset Password
        </h1>
        <br>
    </div>


        <div class="m-5 border-solid border-secondary border-4 p-3 rounded-lg pt-5 w-[75%]">
                <h1 class="text-3xl m-4 mb-4 font-serif font-bold text-secondary">
                    KS Email Adress:
                </h1>

                <div class="mb-4 ml-2 w-[70%]">
                    <label class="text-secondary text-[15px] italic"for="1dabce70-e59f-43ae-aaa2-2c961e70bb4c"></label>
                    <input  bind:value={email} placeholder="blank@ksbe.edu"  class="w-full block rounded-lg border dark:border-none  py-[9px] px-3 pr-4 text-sm focus:border-secondary focus:ring-2 focus:ring-secondary focus:outline-none transition-width ease-in-out hover:w-[105%] duration-200 focus:w-[105%]" />
                  </div>
                
                <div class="mb-4 ml-2 w-[70%]">
                        <button on:click={sendResetPWEmail} class=" bg-secondary font-serif font-bold border-2 border-white rounded-lg p-2 px-5 text-white transition ease-in-out active:bg-slate-600 active:text-yellow-200" >
                            Send Email
                        </button>
                </div>

        </div>



</div>
