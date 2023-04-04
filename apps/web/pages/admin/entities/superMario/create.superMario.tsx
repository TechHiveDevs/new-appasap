import { 
  Create,
  SimpleForm,
  NumberInput,
  DateTimeInput,
  required,
} from 'react-admin'

export function CreateSuperMario(_props: any) {
  return (
    <Create>
      <SimpleForm>
        <NumberInput source="id" variant="outlined" validate={[required()]} />
        <DateTimeInput source="createdAt" variant="outlined" validate={[required()]} />
        <DateTimeInput source="updatedAt" variant="outlined" validate={[required()]} />
      </SimpleForm>
    </Create>
  )
}
