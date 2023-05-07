import { 
  Show,
  NumberField,
  DateField,
  TextField,
  ChipField,
  SimpleShowLayout,
} from 'react-admin'

export function ShowTransaction(_props: any) {
  return (
    <Show>
      <SimpleShowLayout>
        <NumberField source="id" />
        <DateField source="createdAt" />
        <DateField source="updatedAt" />
        <DateField source="date" />
        <NumberField source="amount" />
        <NumberField source="litres" />
        <NumberField source="kilometers" />
        <TextField source="litresScreenshot" />
        <TextField source="kilometersScreenshot" />
        <ChipField source="statu" />
      </SimpleShowLayout>
    </Show>
  )
}
