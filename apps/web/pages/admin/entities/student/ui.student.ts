import { ShowStudent } from './show.student'
import { CreateStudent } from './create.student'
import { EditStudent } from './edit.student'
import { ListStudent } from './list.student'

export const Student = { 
  name: 'student',
  label: 'Student',
  hide: false,
  create: CreateStudent,
  edit: EditStudent,
  list: ListStudent,
  show: ShowStudent,
}
