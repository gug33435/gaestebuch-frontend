<script setup>
async function login() {
  await this.$auth0.signInWithRedirect({ originalUri: '/'})
}
async function logout() {
  await this.$auth0.signOut()
}
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Restaurantauswahl
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="/rest1">Restaurant 1</a></li>
              <li><a class="dropdown-item" href="/rest2">Restaurant 2</a></li>
              <li><a class="dropdown-item" href="/rest3">Restaurant 3</a></li>
            </ul>
          </li>
        </ul>
      </div>
      <button v-if="authState && authState.isAuthenticated" @click="logout">Logout</button>
      <button v-else @click="login">Login</button>
    </div>
  </nav>
</template>

<style scoped>
body {
  margin: 0;
  padding: 0;
}

.navbar {
  //background-color: #007bff;
  //color: #fff;
  padding: 10px;
  text-align: left;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
}

.navbar a {
  text-decoration: none;
  //color: #fff;
  margin: 0 15px;
  font-weight: bold;
}

.navbar a:hover {
  text-decoration: underline;
}
</style>