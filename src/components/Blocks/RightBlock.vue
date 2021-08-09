<template>
  <div style="margin-top: 15px">
    <div class="row">
      <div class="col-md-12">
        {{ propsRight }}
      </div>
    </div>
    <br />
    <template v-if="propsRight != null">
      <button class="btn btn-primary" @click="removeText()">Remove</button>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    propsRight: {
      type: String,
      default: function () {
        return null;
      },
    },
  },
  methods: {
    removeText() {
      this.$emit("removeTextRight");
    },
  },
};
</script>
