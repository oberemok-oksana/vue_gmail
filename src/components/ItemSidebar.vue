<template>
  <div
    @click="$emit('click')"
    :class="[{ 'bg-primary-50 hover:bg-primary-100': active }]"
    class="px-3 py-3 rounded-r-full hover:bg-gray-50 transition duration-300 text-sm cursor-pointer mr-3 flex"
  >
    <div class="flex justify-between w-full items-center pr-3">
      <div
        class="flex items-center text-gray-600 transition duration-300 font-medium"
        :class="[{ 'text-primary-500': active }]"
      >
        <i :class="`bx bx${active ? 's' : ''}-${icon} mr-3`"></i>
        <slot />
      </div>
      <span
        class="font-medium text-xs text-gray-600 transition duration-300"
        :class="[{ 'text-primary-500': active }]"
        >{{ quantity }}</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemSidebar",
  props: {
    active: { type: Boolean, default: false },
    icon: { type: String, default: "" },
    quantity: { type: Number, default: 0 },
  },
};
</script>