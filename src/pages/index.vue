<script setup lang="ts">
defineOptions({
  name: 'IndexPage',
})
</script>

<template>
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content flex-col lg:flex-row-reverse">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-6 p-5">
        <div class="bg-green-100 text-green-500 text-lg font-bold text-center p-1 rounded-lg">
          <ul class="steps steps-vertical">
            <li
              data-content="X"
              class="step step-primary"
            />
            <li
              data-content="X"
              class="step step-primary"
            />
            <li class="step" />
            <li class="step" />
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
