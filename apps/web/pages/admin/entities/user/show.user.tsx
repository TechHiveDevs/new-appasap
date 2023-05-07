import { 
  Show,
  NumberField,
  DateField,
  TextField,
  SimpleShowLayout,
} from 'react-admin'

export function ShowUser(_props: any) {
  return (
    <Show>
      <SimpleShowLayout>
        <NumberField source="id" />
        <DateField source="createdAt" />
        <DateField source="updatedAt" />
        <TextField source="name" />
      </SimpleShowLayout>
    </Show>
  )
}
