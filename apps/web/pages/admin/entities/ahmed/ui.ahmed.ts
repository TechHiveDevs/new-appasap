import { ShowAhmed } from './show.ahmed'
import { CreateAhmed } from './create.ahmed'
import { EditAhmed } from './edit.ahmed'
import { ListAhmed } from './list.ahmed'

export const Ahmed = { 
  name: 'ahmed',
  label: 'Ahmed',
  hide: false,
  create: CreateAhmed,
  edit: EditAhmed,
  list: ListAhmed,
  show: ShowAhmed,
}
