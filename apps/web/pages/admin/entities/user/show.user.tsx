import { 
  Show,
  NumberField,
  DateField,
  SimpleShowLayout,
} from 'react-admin'

export function ShowUser(_props: any) {
  return (
    <Show>
      <SimpleShowLayout>
        <NumberField source="id" />
        <DateField source="createdAt" />
        <DateField source="updatedAt" />
      </SimpleShowLayout>
    </Show>
  )
}
