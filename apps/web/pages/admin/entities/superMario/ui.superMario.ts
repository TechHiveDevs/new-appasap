import { ShowSuperMario } from './show.superMario'
import { CreateSuperMario } from './create.superMario'
import { EditSuperMario } from './edit.superMario'
import { ListSuperMario } from './list.superMario'

export const SuperMario = { 
  name: 'superMario',
  label: 'SuperMario',
  hide: false,
  create: CreateSuperMario,
  edit: EditSuperMario,
  list: ListSuperMario,
  show: ShowSuperMario,
}
