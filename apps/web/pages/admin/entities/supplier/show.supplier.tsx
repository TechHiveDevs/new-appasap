import { 
  Show,
  NumberField,
  DateField,
  TextField,
  BooleanField,
  ReferenceField,
  ChipField,
  SimpleShowLayout,
} from 'react-admin'

export function ShowSupplier(_props: any) {
  return (
    <Show>
      <SimpleShowLayout>
        <NumberField source="id" />
        <DateField source="createdAt" />
        <DateField source="updatedAt" />
        <TextField source="name" />
        <TextField source="companyRegistrationCode" />
        <TextField source="companyRegisterationCountry" />
        <BooleanField source="isDisabled" />
        <ReferenceField source="parentId" reference="supplier" />
        <ChipField source="serviceType" />
      </SimpleShowLayout>
    </Show>
  )
}
