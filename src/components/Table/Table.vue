<template>
  <div
    class="overflow-auto absolute truncate w-full"
    style="max-width: -webkit-fill-available"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: "Table",
};
</script>