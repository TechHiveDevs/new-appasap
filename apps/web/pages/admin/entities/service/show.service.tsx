import { 
  Show,
  NumberField,
  DateField,
  TextField,
  ReferenceField,
  SimpleShowLayout,
} from 'react-admin'

export function ShowService(_props: any) {
  return (
    <Show>
      <SimpleShowLayout>
        <NumberField source="id" />
        <DateField source="createdAt" />
        <DateField source="updatedAt" />
        <TextField source="name" />
        <ReferenceField source="transactionId" reference="transaction" />
      </SimpleShowLayout>
    </Show>
  )
}
