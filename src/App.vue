<template>
  <div id="app">
    <div>aaa</div>
    <s-list :columns="columns" :rows="rows" :showPager="true"></s-list>
    <!-- <s-button></s-button>
    <BeeGridTable
      :columns="columns"
      :data="rows"
      :showPager="true"
    ></BeeGridTable> -->
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      columns: [
        {
          title: "Name",
          key: "name",
        },
        {
          title: "Age",
          key: "age",
        },
        {
          title: "Street",
          key: "street",
        },
        {
          title: "Salary",
          key: "salary",
        },
      ],
      rows: [],
    };
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
