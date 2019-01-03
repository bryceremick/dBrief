<template>
  <h1>{{ test }}</h1>
</template>

<script>
/* eslint-disable */
import Api from "@/services/Api";

export default {
  name: "home",
  data() {
    return {
      articles: [],
      success: true,
      test: '',
    };
  },
  mounted() {
    Api()
      .post("/")
      .then(response => {
       this.test = response.data.message;
      })
      .catch(error => {
        // This catches any error the server would send back
        console.log(error);
      });
  },
  methods: {
    
  }
};
</script>







<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
