import { ShowCourse } from './show.course'
import { CreateCourse } from './create.course'
import { EditCourse } from './edit.course'
import { ListCourse } from './list.course'

export const Course = { 
  name: 'course',
  label: 'Course',
  hide: false,
  create: CreateCourse,
  edit: EditCourse,
  list: ListCourse,
  show: ShowCourse,
}
