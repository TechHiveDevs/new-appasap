import { ShowUser } from './show.user'
import { CreateUser } from './create.user'
import { EditUser } from './edit.user'
import { ListUser } from './list.user'

export const User = { 
  name: 'user',
  label: 'User',
  hide: false,
  create: CreateUser,
  edit: EditUser,
  list: ListUser,
  show: ShowUser,
}
