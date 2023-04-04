import { 
  Edit,
  SimpleForm,
  NumberInput,
  DateTimeInput,
  required,
} from 'react-admin'

export function EditM(_props: any) {
  return (
    <Edit>
      <SimpleForm>
        <NumberInput source="id" variant="outlined" validate={[required()]} />
        <DateTimeInput source="createdAt" variant="outlined" validate={[required()]} />
        <DateTimeInput source="updatedAt" variant="outlined" validate={[required()]} />
      </SimpleForm>
    </Edit>
  )
}
