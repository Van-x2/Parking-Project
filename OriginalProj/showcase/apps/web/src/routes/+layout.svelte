<script>import "../app.pcss";</script><slot></slot>

<div class="navbar">
  <a class="title" href="/">KSM Parking</a>
  <div class="navbtns">
      <a href="/stats" class="options">Stats</a>
      <a href="/settings" class="settings">Current User</a>
  </div>
</div>
<div class="navbarborder">

</div>

<style>

.navbarborder {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(255, 255, 255);
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 2.5em;
  z-index:999 ;
}
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0d2655;
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 0.7em;
  z-index:1000 ;
}

.title{
  color: #ffffff;
  font-size: 2em;
  font-family: 'Georgia';
  text-decoration: none;
}

.title:hover {
  color: rgb(228, 217, 159);
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