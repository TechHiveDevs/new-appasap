import { 
  Show,
  NumberField,
  DateField,
  ReferenceField,
  SimpleShowLayout,
} from 'react-admin'

export function ShowBbbbbbbbbbbbbbbbb(_props: any) {
  return (
    <Show>
      <SimpleShowLayout>
        <NumberField source="id" />
        <DateField source="createdAt" />
        <DateField source="updatedAt" />
        <ReferenceField source="aaaaaId" reference="aaaaa" />
      </SimpleShowLayout>
    </Show>
  )
}
