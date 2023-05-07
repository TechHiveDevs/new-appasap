import { 
  Edit,
  SimpleForm,
  NumberInput,
  DateTimeInput,
  TextInput,
  required,
} from 'react-admin'

export function EditUser(_props: any) {
  return (
    <Edit>
      <SimpleForm>
        <NumberInput source="id" variant="outlined" validate={[required()]} />
        <DateTimeInput source="createdAt" variant="outlined" validate={[required()]} />
        <DateTimeInput source="updatedAt" variant="outlined" validate={[required()]} />
        <TextInput source="name" variant="outlined" validate={[required()]} />
      </SimpleForm>
    </Edit>
  )
}
