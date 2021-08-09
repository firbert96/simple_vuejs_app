<template>
  <div style="margin-top: 15px">
    <div class="row">
      <div class="col-md-12">
        {{ propsLeft }}
      </div>
    </div>
    <br />
    <template v-if="propsLeft != null">
      <button class="btn btn-primary" @click="removeText()">Remove</button>
    </template>
  </div>
</template>

<script>
export default {
  props: ["propsLeft"],
  methods: {
    removeText() {
      this.$emit("removeTextLeft");
    },
  },
};
</script>