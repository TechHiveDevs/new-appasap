import { ShowM } from './show.m'
import { CreateM } from './create.m'
import { EditM } from './edit.m'
import { ListM } from './list.m'

export const M = { 
  name: 'm',
  label: 'M',
  hide: false,
  create: CreateM,
  edit: EditM,
  list: ListM,
  show: ShowM,
}
