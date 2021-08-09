<template>
  <div class="container">
    <div class="row mb-3 justify-content-md-center">
      <div class="col-4">
        <input
          type="text"
          name="text"
          class="from-control"
          v-model="dataText"
        />
      </div>
    </div>
    <div class="parent">
      <button type="button" class="btn btn-primary mr-2" @click="moveToLeft()">
        Move To Left
      </button>
      <button type="button" class="btn btn-primary mr-2" @click="moveToMiddle()">
        Move To Middle
      </button>
      <button type="button" class="btn btn-primary mr-2" @click="moveToRight()">
        Move To Right
      </button>
      <button type="button" class="btn btn-primary mr-2" @click="moveToAll()">
        All in
      </button>
      <button type="button" class="btn btn-danger" @click="removeAll()">
        Remove All
      </button>
    </div>
    <div class="row">
      <div class="col-sm-4 p-3 mb-2 bg-danger text-white">
        <Left-Block
          :propsLeft="dataLeft"
          @removeTextLeft="removeTextLeft()"
        ></Left-Block>
      </div>
      <div class="col-sm-4 p-3 mb-2 bg-warning text-white">
        <Middle-Block
          :propsMiddle="dataMiddle"
          @removeTextMiddle="removeTextMiddle()"
        ></Middle-Block>
      </div>
      <div class="col-sm-4 p-3 mb-2 bg-success text-white">
        <Right-Block
          :propsRight="dataRight"
          @removeTextRight="removeTextRight()"
        ></Right-Block>
      </div>
    </div>
  </div>
</template>

<script>
import LeftBlock from "../components/Blocks/LeftBlock.vue";
import MiddleBlock from "../components/Blocks/MiddleBlock.vue";
import RightBlock from "../components/Blocks/RightBlock.vue";

export default {
  name: "Block",
  data() {
    return {
      dataText: "",
      dataLeft: null,
      dataMiddle: null,
      dataRight: null,
    };
  },
  components: {
    LeftBlock,
    RightBlock,
    MiddleBlock,
  },
  methods: {
    moveToLeft: function () {
      this.dataLeft = this.dataText;
    },
    moveToMiddle: function () {
      this.dataMiddle = this.dataText;
    },
    moveToRight: function () {
      this.dataRight = this.dataText;
    },
    moveToAll: function () {
      this.dataLeft = this.dataText;
      this.dataMiddle = this.dataText;
      this.dataRight = this.dataText;
    },
    removeAll: function () {
      this.dataLeft = null;
      this.dataMiddle = null;
      this.dataRight = null;
    },
    removeTextLeft: function () {
      this.dataLeft = null;
    },
    removeTextMiddle: function () {
      this.dataMiddle = null;
    },
    removeTextRight: function () {
      this.dataRight = null;
    },
  },
};
</script>

<style scoped>
.parent {
  display: flex;
  justify-content: center;
  align-items: center;
}
.btn{
  margin: 1%;
}
</style>