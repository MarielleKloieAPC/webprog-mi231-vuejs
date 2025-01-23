<template>
    <div class="mango">
      <h2 class="c">{{ name }}</h2>
      <p class="c">{{ message }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: 'Mangoes',
        message: 'I like Mangoes'
      }
    }
  };
  </script>
  
<style>
  .mango {
        border: dashed black 1px;
        display: inline-block;
        margin: 10px;
        padding: 10px;
        background-color: lightyellow;
    }
</style>
