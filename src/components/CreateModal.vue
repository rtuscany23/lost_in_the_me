<template>
    <div class="modal fade" id="createModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form @submit.prevent="createBlog()">
                    <div class="modal-body text-center">
                        <p class="fs-5 me-2 fw-semibold">Title</p>
                        <input v-model="editable.title" type="text" name="title" id="title" class="w-75 mb-3" required>
                        <p class="fs-5 me-2 fw-semibold">Image</p>
                        <input v-model="editable.imgUrl" type="url" name="imgUrl" id="imgUrl" class="w-75 mb-3" required>
                        <p class="fs-5 me-2 fw-semibold">Blog</p>
                        <textarea v-model="editable.body" type="text" name="body" id="body" class="w-75 m-auto"
                            required></textarea>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>


<script>
import { ref } from 'vue';
import { blogsService } from "../services/BlogsService.js";
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';

export default {
    setup() {

       

        const editable = ref({})
        return {
            editable,
      async createBlog(){
      try {
        const formData = editable.value
        await blogsService.createBlog(formData)
      } catch (error) {
        logger.error(error)
        Pop.error(error.message)
      }
    }
            
        }
    }
}
</script>
<style lang="scss" scoped>
p {
    margin: 0;
}
textarea {
    height: 30vh;
    resize: none;
    overflow-y: scroll;
}
</style> (edited) 