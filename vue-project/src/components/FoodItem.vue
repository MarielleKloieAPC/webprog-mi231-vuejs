<template>
    <div class="apple">
      <h2 class="p">{{ name }}</h2>
      <p class="p">{{ message }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: 'Apples',
        message: 'I like apples'
      }
    }
  };
  </script>
  
<style>
  .apple {
        border: dashed black 1px;
        display: inline-block;
        margin: 10px;
        padding: 10px;
        background-color: lightgreen;
    }
</style>
