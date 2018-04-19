
<template>
  <div class="box-info">
    <p>
        <slot></slot>
    </p>
  </div>  
</template>


export default {
  /* data or methods here if needed */
}

<style>
    .box-info {
        background-color: lightgreen;
        border: 1px solid;
        padding: 10px;
        margin-bottom: 1rem;
    }
</style>