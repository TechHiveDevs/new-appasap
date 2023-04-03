import { ShowN } from './show.n'
import { CreateN } from './create.n'
import { EditN } from './edit.n'
import { ListN } from './list.n'

export const N = { 
  name: 'n',
  label: 'N',
  hide: false,
  create: CreateN,
  edit: EditN,
  list: ListN,
  show: ShowN,
}
