import { ShowMario } from './show.mario'
import { CreateMario } from './create.mario'
import { EditMario } from './edit.mario'
import { ListMario } from './list.mario'

export const Mario = { 
  name: 'mario',
  label: 'Mario',
  hide: false,
  create: CreateMario,
  edit: EditMario,
  list: ListMario,
  show: ShowMario,
}
