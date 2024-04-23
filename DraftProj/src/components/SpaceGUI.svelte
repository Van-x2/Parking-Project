<script>
    import PocketBase from 'pocketbase';
    import { error, redirect } from '@sveltejs/kit';
    export let data;
    export let localStatus;
    export let localId;
    export let localEmail;
    export let localCol;
    export let localRow;
    let vehicleImg;
    let sendData;
    let sendStatus;

    async function testDataFun(){
      const requestData = {
            localId: localId,
            localCol: localCol,
            localRow: localRow,
            localEmail: data.profile.email,
            localVehicle: data.profile.vehicle,
            localUserData: data.profile
        };
      
        const response = await fetch('http://localhost:3000/update-parking-spot', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestData)
    })
    location.reload();
    }

    if (localStatus == 1) {
      vehicleImg = "https://i.ibb.co/XF8cSD4/Vacant2.png"
    }
    if (localStatus == 2) {
      vehicleImg = "https://i.ibb.co/QY9p8KX/Possibly-Vacant.png"
    }
    if (localStatus == 3) {
      vehicleImg = "https://i.ibb.co/Cm1bSs5/CarUp.png"
    }
    if (localStatus == 4) {
      vehicleImg = "https://i.ibb.co/pL1WBBV/Truckup.png"
    }

    function simplifyID(id) {
    // Remove leading zeros
    id = id.replace(/^0+/, '');
    
    // Separate the letter part and the number part
    var letterPart = id.replace(/[0-9]/g, '');
    var numberPart = id.replace(/[a-zA-Z]/g, '');
    
    // Remove leading zero in the middle if exists
    numberPart = numberPart.replace(/^0+([1-9])/, '$1');
    
    // Combine letter part and number part with proper formatting
    return letterPart + numberPart;
}
  
function toClipboard(str) {
  navigator.clipboard.writeText(str);
  alert("Copied occupant's Email address to clipboard")
  }


  </script>






  {#if localStatus == 1}

  <div class="  w-[308px] h-[200px] border-4 rounded-lg border-secondary text-center text-gray-300 p-2 flex">
    <div class=" left-0  w-[28%] h-[98%] translate-y-0 translate-x-0">
      <span class=" text-3xl font-serif font-bold">{(simplifyID(localId))}</span>
      <img src="{vehicleImg}" alt="The current occupation of the space" class="w-[90%] h-[80%] translate-x-[3px]"/>
    </div>

    <div class=" bg-primary right-0  w-[65%] h-[98%] translate-y-1 translate-x-4 rounded-lg text-secondary">
      <div class="p-3 text-left">
        <span class="mt-1">
          This spot is vacant
        </span>
        <button on:click={testDataFun} class=" bg-secondary text-white p-2 px-4 border-white border-4 rounded-lg align-bottom mt-[70px] translate-x-[0] translate-y-[-20px] transition hover:border-yellow-200 active:bg-blue-900">
           Claim this spot
           <br>
           <span class="italic opacity-40">you can only claim one!</span>
        </button>
      </div>
    </div>
  </div>

  {:else}

  <div class="  w-[308px] h-[200px] border-4 rounded-lg border-secondary text-center text-secondary p-2 flex">
    <div class=" left-0  w-[28%] h-[98%] translate-y-0 translate-x-0">
      <span class=" text-3xl font-serif font-bold">{(simplifyID(localId))}</span>
      <img src="{vehicleImg}" alt="The current occupation of the space" class="w-[90%] h-[80%] translate-x-[3px]"/>
    </div>

    <div class=" bg-primary right-0  w-[65%] h-[98%] translate-y-1 translate-x-4 rounded-lg text-secondary">
      <div class="p-3 text-left">
        <span class="mt-1">
          This spot is occupied by:
        </span>
        <span class="text-[11px]">
          {localEmail}
        </span>
        <button on:click={toClipboard(localEmail)} class=" bg-secondary text-white p-2 px-4 border-white border-4 rounded-lg align-bottom mt-[70px] translate-x-1 transition hover:border-yellow-200 active:bg-blue-900"> Contact Occupant </button>
      </div>
    </div>
  </div>

  {/if}


  