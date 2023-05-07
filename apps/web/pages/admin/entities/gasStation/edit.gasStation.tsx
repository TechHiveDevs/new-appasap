import { 
  Edit,
  SimpleForm,
  NumberInput,
  DateTimeInput,
  TextInput,
  AutocompleteInput,
  ReferenceInput,
  required,
} from 'react-admin'

export function EditGasStation(_props: any) {
  return (
    <Edit>
      <SimpleForm>
        <NumberInput source="id" variant="outlined" validate={[required()]} />
        <DateTimeInput source="createdAt" variant="outlined" validate={[required()]} />
        <DateTimeInput source="updatedAt" variant="outlined" validate={[required()]} />
        <TextInput source="name" variant="outlined" validate={[required()]} />
        <TextInput source="city" variant="outlined"/>
        <TextInput source="district" variant="outlined"/>
        <NumberInput source="latitude" variant="outlined" />
        <NumberInput source="longitude" variant="outlined" />
        <ReferenceInput label="transaction" source="transactionId" reference="transaction">
          <AutocompleteInput variant="outlined" optionText="id" validate={[required()]} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  )
}
