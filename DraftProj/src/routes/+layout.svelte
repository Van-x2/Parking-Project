<script>
    //importing some css stuff and Navigation bar from a svelte component
    import "../app.css";
    import Navbar from "../components/Navbar.svelte"
</script>

<div class="z-10">
  <Navbar />
</div>




<slot></slot>