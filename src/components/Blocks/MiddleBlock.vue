<template>
  <div style="margin-top: 15px">
    <div class="row">
      <div class="col-md-12">
        {{ propsMiddle }}
      </div>
    </div>
    <br />
    <template v-if="propsMiddle != null">
      <button class="btn btn-primary" @click="removeText()">Remove</button>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    propsMiddle: {
      type: String,
      default: function () {
        return null;
      },
    },
  },
  methods: {
    removeText() {
      this.$emit("removeTextMiddle");
    },
  },
};
</script>
