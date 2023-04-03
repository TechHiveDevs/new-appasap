import { 
  Show,
  NumberField,
  DateField,
  SimpleShowLayout,
} from 'react-admin'

export function ShowFaragello(_props: any) {
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
