<script>import "../app.pcss";</script><slot></slot>

<div class="navbar">
  <a class="title" href="/">KSM Parking</a>
  <div class="navbtns">
      <a href="/map" class="options">Options</a>
      <a href="/user" class="user">Current User</a>
  </div>
</div>

<style>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #3d3c52;
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 0.7em;
  z-index:1000 ;
}

.title{
  color: rgb(153, 181, 197);
  font-size: 2em;
  font-family: 'Georgia';
  text-decoration: none;
}

.title:hover {
  color: aquamarine;
}

.navbtns {
  display: flex;
  gap: 2em; /* adjust as needed */
}

.navbtns a {
  color: #f2f2f2;
  text-decoration: none;
  font-size: 20px;
  padding: 10px;
  border-radius: 20px;
}

.navbtns a:hover {
  background-color: #ddd;
  color: black;
}
</style>