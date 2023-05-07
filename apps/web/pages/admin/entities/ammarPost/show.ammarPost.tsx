import { 
  Show,
  NumberField,
  DateField,
  ReferenceField,
  SimpleShowLayout,
} from 'react-admin'

export function ShowAmmarPost(_props: any) {
  return (
    <Show>
      <SimpleShowLayout>
        <NumberField source="id" />
        <DateField source="createdAt" />
        <DateField source="updatedAt" />
        <ReferenceField source="userId" reference="user" />
      </SimpleShowLayout>
    </Show>
  )
}
