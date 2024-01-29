<script>
export default {
  name: 'app'
}
</script>

<template>
   <div class="container">
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/create" class="nav-link">Create Snippet</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/snippets" class="nav-link">Snippets</router-link>
        </li>
      </ul>
    </nav><br />
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<style scoped>

</style>
