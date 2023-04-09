import { 
  Edit,
  SimpleForm,
  NumberInput,
  DateTimeInput,
  AutocompleteInput,
  ReferenceInput,
  required,
} from 'react-admin'

export function EditBbbbbbbbbbbbbbbbb(_props: any) {
  return (
    <Edit>
      <SimpleForm>
        <NumberInput source="id" variant="outlined" validate={[required()]} />
        <DateTimeInput source="createdAt" variant="outlined" validate={[required()]} />
        <DateTimeInput source="updatedAt" variant="outlined" validate={[required()]} />
        <ReferenceInput label="aaaaa" source="aaaaaId" reference="aaaaa">
          <AutocompleteInput variant="outlined" optionText="id" validate={[required()]} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  )
}
