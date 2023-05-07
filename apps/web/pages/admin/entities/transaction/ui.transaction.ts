import { ShowTransaction } from './show.transaction'
import { CreateTransaction } from './create.transaction'
import { EditTransaction } from './edit.transaction'
import { ListTransaction } from './list.transaction'

export const Transaction = { 
  name: 'transaction',
  label: 'Transaction',
  hide: false,
  create: CreateTransaction,
  edit: EditTransaction,
  list: ListTransaction,
  show: ShowTransaction,
}
