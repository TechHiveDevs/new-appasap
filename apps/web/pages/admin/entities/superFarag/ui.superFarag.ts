import { ShowSuperFarag } from './show.superFarag'
import { CreateSuperFarag } from './create.superFarag'
import { EditSuperFarag } from './edit.superFarag'
import { ListSuperFarag } from './list.superFarag'

export const SuperFarag = { 
  name: 'superFarag',
  label: 'SuperFarag',
  hide: false,
  create: CreateSuperFarag,
  edit: EditSuperFarag,
  list: ListSuperFarag,
  show: ShowSuperFarag,
}
