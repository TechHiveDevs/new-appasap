import { 
  Create,
  SimpleForm,
  NumberInput,
  DateTimeInput,
  TextInput,
  AutocompleteInput,
  ReferenceInput,
  required,
} from 'react-admin'

export function CreateService(_props: any) {
  return (
    <Create>
      <SimpleForm>
        <NumberInput source="id" variant="outlined" validate={[required()]} />
        <DateTimeInput source="createdAt" variant="outlined" validate={[required()]} />
        <DateTimeInput source="updatedAt" variant="outlined" validate={[required()]} />
        <TextInput source="name" variant="outlined" validate={[required()]} />
        <ReferenceInput label="transaction" source="transactionId" reference="transaction">
          <AutocompleteInput variant="outlined" optionText="id" validate={[required()]} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  )
}
