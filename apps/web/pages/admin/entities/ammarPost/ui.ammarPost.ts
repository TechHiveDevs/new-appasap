import { ShowAmmarPost } from './show.ammarPost'
import { CreateAmmarPost } from './create.ammarPost'
import { EditAmmarPost } from './edit.ammarPost'
import { ListAmmarPost } from './list.ammarPost'

export const AmmarPost = { 
  name: 'ammarPost',
  label: 'AmmarPost',
  hide: false,
  create: CreateAmmarPost,
  edit: EditAmmarPost,
  list: ListAmmarPost,
  show: ShowAmmarPost,
}
