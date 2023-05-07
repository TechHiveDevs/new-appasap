import { ShowGasStation } from './show.gasStation'
import { CreateGasStation } from './create.gasStation'
import { EditGasStation } from './edit.gasStation'
import { ListGasStation } from './list.gasStation'

export const GasStation = { 
  name: 'gasStation',
  label: 'GasStation',
  hide: false,
  create: CreateGasStation,
  edit: EditGasStation,
  list: ListGasStation,
  show: ShowGasStation,
}
