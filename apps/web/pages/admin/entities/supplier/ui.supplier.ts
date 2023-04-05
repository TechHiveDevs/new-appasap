import { ShowSupplier } from './show.supplier'
import { CreateSupplier } from './create.supplier'
import { EditSupplier } from './edit.supplier'
import { ListSupplier } from './list.supplier'

export const Supplier = { 
  name: 'supplier',
  label: 'Supplier',
  hide: false,
  create: CreateSupplier,
  edit: EditSupplier,
  list: ListSupplier,
  show: ShowSupplier,
}
