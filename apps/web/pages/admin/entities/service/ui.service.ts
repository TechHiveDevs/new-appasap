import { ShowService } from './show.service'
import { CreateService } from './create.service'
import { EditService } from './edit.service'
import { ListService } from './list.service'

export const Service = { 
  name: 'service',
  label: 'Service',
  hide: false,
  create: CreateService,
  edit: EditService,
  list: ListService,
  show: ShowService,
}
