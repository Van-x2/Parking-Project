<script>
    import PocketBase from 'pocketbase';
    
    let data = null;
    
    async function requestData() {
        const pb = new PocketBase('https://parkingproject.pockethost.io');
    
        try {
            const response = await pb.collection('parkingarray').getList(1, 3);
    
            if (!response) {
                throw new Error('No response received from server');
            }
            data = response;
        } catch (error) {
            console.error('Error fetching data:', error);
            data = { error: "Error fetching data. Please check the console for details." };
        }
    }
    </script>
    
    <h1>PocketBase Data Request</h1>
    <button on:click={requestData}>Fetch Data</button>
    
    <pre>{JSON.stringify(data, null, 2)}</pre>