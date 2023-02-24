<template>
<h1>Lost in the Middle East - Welcome to DurkaDurkastan</h1>

<div v-for="blog in blogs">
  <BlogCard :blog="blog"/>
</div>
<CreateModal/>

</template>

<script>
import { logger } from '../utils/Logger.js';
import { blogsService } from '../services/BlogsService.js'
import Pop from '../utils/Pop.js';
import { onMounted, computed } from 'vue';
import { AppState } from '../AppState.js';
//import ProjectCard from '../components/ProjectCard.vue';
import BlogCard from '../components/BlogCard.vue'
import CreateModal from "../components/CreateModal.vue";

export default {
  setup() {
    async function getBlogs(){
      try {
        await blogsService.getBlogs()
      } catch (error) {
        logger.error(error);
        Pop.error(error.message);
      }
    }
    

    onMounted(()=> {
      getBlogs()
    })

    return {
      blogs: computed(()=> AppState.blogs)
    }
  },
  components: { BlogCard, CreateModal }
}









</script>

<style scoped lang="scss">

</style>
