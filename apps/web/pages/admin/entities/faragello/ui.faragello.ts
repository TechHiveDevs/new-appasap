import { ShowFaragello } from './show.faragello'
import { CreateFaragello } from './create.faragello'
import { EditFaragello } from './edit.faragello'
import { ListFaragello } from './list.faragello'

export const Faragello = { 
  name: 'faragello',
  label: 'Faragello',
  hide: false,
  create: CreateFaragello,
  edit: EditFaragello,
  list: ListFaragello,
  show: ShowFaragello,
}
