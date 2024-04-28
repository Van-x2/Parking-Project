<script>
    //imports the parkinglot view component, also defines a external variable for data
    import Leaflet from './Leaflet.svelte'
    export let data;
</script>
<Leaflet data={data}/>