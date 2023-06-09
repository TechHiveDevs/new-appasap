import {
  List,
  DatagridConfigurable,
  NumberField,
  DateField,
  TextField,
  ReferenceField,
  TextInput,
  EditButton,
  DeleteButton,
} from 'react-admin'
import { ListActions, RowActions } from '../../react-admin/components/Actions'

// eslint-disable-next-line react/jsx-key
const filters = [<TextInput label="Search" source="q" alwaysOn />]

export function ListService(props: any) {
  return (
    <List {...props} filters={filters} actions={<ListActions />}>
      <DatagridConfigurable rowClick="show">
        <NumberField source="id" />
        <DateField source="createdAt" />
        <DateField source="updatedAt" />
        <TextField source="name" />
        <ReferenceField source="transactionId" reference="transaction" />
        <RowActions>
          <EditButton />
          <DeleteButton />
        </RowActions>
      </DatagridConfigurable>
    </List>
  )
}
