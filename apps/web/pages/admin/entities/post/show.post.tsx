import { 
  Show,
  NumberField,
  DateField,
  ReferenceField,
  SimpleShowLayout,
} from 'react-admin'

export function ShowPost(_props: any) {
  return (
    <Show>
      <SimpleShowLayout>
        <NumberField source="id" />
        <DateField source="createdAt" />
        <DateField source="updatedAt" />
        <ReferenceField source="studentId" reference="student" />
      </SimpleShowLayout>
    </Show>
  )
}
