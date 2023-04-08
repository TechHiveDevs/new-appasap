import { 
  Create,
  SimpleForm,
  NumberInput,
  DateTimeInput,
  AutocompleteInput,
  ReferenceInput,
  required,
} from 'react-admin'

export function CreateStudent(_props: any) {
  return (
    <Create>
      <SimpleForm>
        <NumberInput source="id" variant="outlined" validate={[required()]} />
        <DateTimeInput source="createdAt" variant="outlined" validate={[required()]} />
        <DateTimeInput source="updatedAt" variant="outlined" validate={[required()]} />
        <ReferenceInput label="student" source="ex2" reference="student">
          <AutocompleteInput variant="outlined" optionText="id" validate={[required()]} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  )
}