import { 
  Edit,
  SimpleForm,
  NumberInput,
  DateTimeInput,
  AutocompleteInput,
  ReferenceInput,
  required,
} from 'react-admin'

export function EditAmmarPost(_props: any) {
  return (
    <Edit>
      <SimpleForm>
        <NumberInput source="id" variant="outlined" validate={[required()]} />
        <DateTimeInput source="createdAt" variant="outlined" validate={[required()]} />
        <DateTimeInput source="updatedAt" variant="outlined" validate={[required()]} />
        <ReferenceInput label="user" source="userId" reference="user">
          <AutocompleteInput variant="outlined" optionText="id" validate={[required()]} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  )
}
