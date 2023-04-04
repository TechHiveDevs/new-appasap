import { ShowStudents } from './show.students'
import { CreateStudents } from './create.students'
import { EditStudents } from './edit.students'
import { ListStudents } from './list.students'

export const Students = { 
  name: 'students',
  label: 'Students',
  hide: false,
  create: CreateStudents,
  edit: EditStudents,
  list: ListStudents,
  show: ShowStudents,
}
