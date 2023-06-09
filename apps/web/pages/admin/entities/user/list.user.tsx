import {
  List,
  DatagridConfigurable,
  NumberField,
  DateField,
  TextField,
  BooleanField,
  ReferenceField,
  TextInput,
  EditButton,
  DeleteButton,
} from 'react-admin'
import { ListActions, RowActions } from '../../react-admin/components/Actions'

// eslint-disable-next-line react/jsx-key
const filters = [<TextInput label="Search" source="q" alwaysOn />]

export function ListUser(props: any) {
  return (
    <List {...props} filters={filters} actions={<ListActions />}>
      <DatagridConfigurable rowClick="show">
        <NumberField source="id" />
        <DateField source="createdAt" />
        <DateField source="updatedAt" />
        <TextField source="name" />
        <TextField source="nickname" />
        <TextField source="email" />
        <TextField source="phone" />
        <TextField source="password" />
        <BooleanField source="otp" />
        <DateField source="otpExpiresAt" />
        <TextField source="carPlateNumber" />
        <NumberField source="pinCode" />
        <TextField source="profilePicture" />
        <ReferenceField source="transactionId" reference="transaction" />
        <TextField source="city" />
        <TextField source="district" />
        <RowActions>
          <EditButton />
          <DeleteButton />
        </RowActions>
      </DatagridConfigurable>
    </List>
  )
}
