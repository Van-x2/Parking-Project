<script>
    //defines email variable without a value, imports pocketbase variable
    let email;
    import PocketBase from 'pocketbase'

    //creates a asyncronys function that, upon activation, sends out a request to Pocketbase to release a verification email
    async function sendVerifyEmail(){
        let emailstring = email.toLowerCase()
        const pb = new PocketBase('https://parkingproject.pockethost.io');

        try {
            await pb.collection('users').requestVerification(emailstring);
            alert('Sent verification email to: ' + emailstring)
        }
        //if it fails, then the error is returned back to the function, it then console logs the error
        catch(error) {
            console.log(error)
            alert('Failed to send verification email to: '+ emailstring)
        }
    }
</script>
<slot />
<div>
    <div class=" m-0 h-[100px] w-screen bg-white z-8 flex items-center">
        <h1 class="font-bold font-serif text-secondary text-5xl m-6">
            Send New Verification Email 
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
                        <button on:click={sendVerifyEmail} class=" bg-secondary font-serif font-bold border-2 border-white rounded-lg p-2 px-5 text-white transition ease-in-out active:bg-slate-600 active:text-yellow-200" >
                            Send Email
                        </button>
                </div>

        </div>



</div>
