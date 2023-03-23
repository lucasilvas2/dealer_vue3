<template>
  <svg-icon type="mdi" :path="path"></svg-icon>
</template>

<script>
import SvgIcon from "@jamescoyle/vue-icon";
import * as mdiIcons from "@mdi/js";

export default {
  name: "my-component",
  props: {
    icon: String,
  },
  components: {
    SvgIcon,
  },
  data() {
    return {
      path: mdiIcons[this.icon],
    };
  },
};
</script>
