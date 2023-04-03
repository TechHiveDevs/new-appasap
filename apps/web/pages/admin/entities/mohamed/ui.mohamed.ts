import { ShowMohamed } from './show.mohamed'
import { CreateMohamed } from './create.mohamed'
import { EditMohamed } from './edit.mohamed'
import { ListMohamed } from './list.mohamed'

export const Mohamed = { 
  name: 'mohamed',
  label: 'Mohamed',
  hide: false,
  create: CreateMohamed,
  edit: EditMohamed,
  list: ListMohamed,
  show: ShowMohamed,
}
