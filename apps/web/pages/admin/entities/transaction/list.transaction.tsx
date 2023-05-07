import {
  List,
  DatagridConfigurable,
  NumberField,
  DateField,
  TextField,
  ChipField,
  TextInput,
  EditButton,
  DeleteButton,
} from 'react-admin'
import { ListActions, RowActions } from '../../react-admin/components/Actions'

// eslint-disable-next-line react/jsx-key
const filters = [<TextInput label="Search" source="q" alwaysOn />]

export function ListTransaction(props: any) {
  return (
    <List {...props} filters={filters} actions={<ListActions />}>
      <DatagridConfigurable rowClick="show">
        <NumberField source="id" />
        <DateField source="createdAt" />
        <DateField source="updatedAt" />
        <DateField source="date" />
        <NumberField source="amount" />
        <NumberField source="litres" />
        <NumberField source="kilometers" />
        <TextField source="litresScreenshot" />
        <TextField source="kilometersScreenshot" />
        <ChipField source="statu" />
        <RowActions>
          <EditButton />
          <DeleteButton />
        </RowActions>
      </DatagridConfigurable>
    </List>
  )
}
