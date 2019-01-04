<template>
  <div id="container">
    <div class="head">
      <div class="head-left"><h1>dBrief.io</h1></div>
      <div class="head-right"><h2>About</h2></div>
    </div>
    <div id="story-container">
      <a class="story" v-for="(story,index) in articles" :key="index" :id="'box'+index" :href="story.url">
        <h2>{{removeSource(story.title)}}</h2>
        <h3>{{story.source.name}}</h3>
      </a>
    </div>
  </div>
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
    };
  },
  mounted() {
    Api()
      .post("/")
      .then(response => {
       this.articles = response.data.articles
       this.success = true;
      })
      .catch(error => {
        console.log(error);
        this.success = false;
      });
  },
  methods: {
    removeSource: function (title) {
      let parts = title.split('-');
      let newTitle = '';

      for (let i = 0; i < parts.length-1; i++){

        if (i < parts.length-2){
          newTitle+=parts[i]+'-';
        }else{
          newTitle+=parts[i];
        }
      }

      return newTitle;
    }
  }
};
</script>

