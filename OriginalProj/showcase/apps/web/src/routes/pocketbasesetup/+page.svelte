<script lang="ts">
    import PocketBase from 'pocketbase'
    /**
   * @type {{ error: string; } | null}
   */
    let data: { error: string; } | null = null;
    let inputValue = "";
  
    async function requestData() {
      const pocketBaseUrl = "https://parkingproject.pockethost.io/api/collections/parkingarray/records";
      const pb = new PocketBase('https://parkingproject.pockethost.io');
  
      try {
        const authData = await pb.admins.authWithPassword('vannsiphers.lego@gmail.com', 'Vtech808!');
        const response = await fetch(pocketBaseUrl);
  
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        data = await response.json();
      } catch (error) {
        console.error('Error fetching data:', error);
        data = { error: "Error fetching data. Please check the console for details." };
      }
    }


    //Function to send data to pocket host
    async function sendData(id: string, column: any, row: number) {
      const pocketBaseUrl = "https://parkingproject.pockethost.io/api/collections/parkingarray/records";
      const inputData = {
        "id": ("000000000000" + id),
        "column": column,
        "row": row,
        "email": "blank@ksbe.edu",
        "name": "blank",
        "status": 1,
        "orientstatus": 1,
        "time": "2022-01-01 10:00:00.123Z"
    };
      try {
        const response = await fetch(pocketBaseUrl, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
          
            body: JSON.stringify(inputData),
        });
  
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        // Optionally, you can fetch updated data after sending
      } catch (error) {
        console.error('Error sending data:', error);
        data = { error: "Error sending data. Please check the console for details." };
      }




      
    }

    function multiSendData(maxcount: number, letter: string) {
  let count = 1;

  while (count <= maxcount) {
    // Use a ternary operator to conditionally add the leading zero
    let idString = count < 10 ? `${letter}0${count}` : `${letter}${count}`;
    
    sendData(idString, letter, count);

    count = count + 1;
  }
}

    
  </script>
  
  <style>
    /* Add your styles here */
  </style>
  
  <h1>PocketBase Data Request</h1>
  <button on:click={requestData}>Fetch Data</button>
  
  {#if data !== null}
    <pre>{JSON.stringify(data, null, 2)}</pre>
  {/if}