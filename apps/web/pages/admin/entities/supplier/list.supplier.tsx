import {
  List,
  DatagridConfigurable,
  NumberField,
  DateField,
  TextField,
  BooleanField,
  ReferenceField,
  ChipField,
  TextInput,
  EditButton,
  DeleteButton,
} from 'react-admin'
import { ListActions, RowActions } from '../../react-admin/components/Actions'

// eslint-disable-next-line react/jsx-key
const filters = [<TextInput label="Search" source="q" alwaysOn />]

export function ListSupplier(props: any) {
  return (
    <List {...props} filters={filters} actions={<ListActions />}>
      <DatagridConfigurable rowClick="show">
        <NumberField source="id" />
        <DateField source="createdAt" />
        <DateField source="updatedAt" />
        <TextField source="name" />
        <TextField source="companyRegistrationCode" />
        <TextField source="companyRegisterationCountry" />
        <BooleanField source="isDisabled" />
        <ReferenceField source="parentId" reference="supplier" />
        <ChipField source="serviceType" />
        <RowActions>
          <EditButton />
          <DeleteButton />
        </RowActions>
      </DatagridConfigurable>
    </List>
  )
}
