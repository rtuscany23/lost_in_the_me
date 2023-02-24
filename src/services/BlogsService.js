import { logger } from "../utils/Logger"
import { api } from "./AxiosService.js"
import { AppState } from "../AppState.js"
import { Blog } from "../models/Blog.js"

class BlogsService {

  async getBlogs(){
    const res = await api.get('/api/blogs')
    //logger.log('get blogs', res.data)
    AppState.blogs = res.data.map(b => new Blog(b))
  }

  async createBlog(formData){
    const res = await api.post('/api/blogs/', formData)
    // const newBlog = new Blog(formData)
    logger.log('create blog',formData)
    // AppState.blog = new Blog(formData)

  }

}

export const blogsService = new BlogsService()