import { ShowPost } from './show.post'
import { CreatePost } from './create.post'
import { EditPost } from './edit.post'
import { ListPost } from './list.post'

export const Post = { 
  name: 'post',
  label: 'Post',
  hide: false,
  create: CreatePost,
  edit: EditPost,
  list: ListPost,
  show: ShowPost,
}
