<template>
  <nuxt-link to="/about">About</nuxt-link>
  <br>
  <nuxt-link to="/notes">Notes</nuxt-link>
  <br>
  <nuxt-link :to="`/notes/${randomNumber()}`">Notes By Id</nuxt-link>
  <h1>Project Nuxt</h1>
</template>

<script setup>
const randomNumber = () => {
  return Math.floor(Math.random() * 100) + 1    
}
</script>

<style>

</style>