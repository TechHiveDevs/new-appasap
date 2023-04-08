import { 
  Show,
  NumberField,
  DateField,
  ReferenceField,
  SimpleShowLayout,
} from 'react-admin'

export function ShowStudent(_props: any) {
  return (
    <Show>
      <SimpleShowLayout>
        <NumberField source="id" />
        <DateField source="createdAt" />
        <DateField source="updatedAt" />
        <ReferenceField source="ex2" reference="student" />
      </SimpleShowLayout>
    </Show>
  )
}
