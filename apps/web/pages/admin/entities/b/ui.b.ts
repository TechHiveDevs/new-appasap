import { ShowB } from './show.b'
import { CreateB } from './create.b'
import { EditB } from './edit.b'
import { ListB } from './list.b'

export const B = { 
  name: 'b',
  label: 'B',
  hide: false,
  create: CreateB,
  edit: EditB,
  list: ListB,
  show: ShowB,
}
