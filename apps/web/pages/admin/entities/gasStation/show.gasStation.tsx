import { 
  Show,
  NumberField,
  DateField,
  TextField,
  ReferenceField,
  SimpleShowLayout,
} from 'react-admin'

export function ShowGasStation(_props: any) {
  return (
    <Show>
      <SimpleShowLayout>
        <NumberField source="id" />
        <DateField source="createdAt" />
        <DateField source="updatedAt" />
        <TextField source="name" />
        <TextField source="city" />
        <TextField source="district" />
        <NumberField source="latitude" />
        <NumberField source="longitude" />
        <ReferenceField source="transactionId" reference="transaction" />
      </SimpleShowLayout>
    </Show>
  )
}
