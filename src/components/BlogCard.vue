<template>
    <div class="container">
        <div class="row">
            <div class="col-12 d-flex justify-content-center mt-3">
                <div class="card text-center" style="width: 60vw;">
                    <img :src="blog.imgUrl" class="card-img-top" alt="...">
                    <div class="card-body blog-card">
                        <h5 class="card-title bg-primary">{{ blog.title }}</h5>
                        <p class="card-text">{{ blog.body }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { Blog } from "../models/Blog";

export default {
  props: {
    blog: {
      type: Blog,
      required: true
    }
  },
    setup() {
        return {}
    }
}

</script>
<style lang="scss" scoped>
    .blog-card{
        background-color: rgb(141, 141, 141);
    }
    img{
        height: 400px;
    }
</style>