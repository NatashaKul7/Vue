<template>
  <div class="modal-backdrop" @click="$emit('close')">
    <div class="modal">
      <h3>This is a modal title</h3>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        molestias eaque atque harum voluptatum exercitationem autem accusamus
        possimus iure iste?
      </p>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["close"],
};
</script>

<style lang="scss" scoped></style>
