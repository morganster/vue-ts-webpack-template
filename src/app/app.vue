
<template>
  <div>
    <h1>{{helloMsg}}</h1>
    <button v-on:click="greet()">change greeting</button>
    <div>
      <home id="home"></home>
    </div>
  </div>
</template>

<script lang="ts" src="./app.ts"></script>
<style lang="scss" src="./app.scss" scoped></style>
