<template>
  <div>
    <component :is="component"/>
  </div>
</template>

<script>
export default {
  name: "Projects",
  computed:{
    component() {
      return () => import(`./${this.$route.params.projects}`)
    }
  },
}
</script>