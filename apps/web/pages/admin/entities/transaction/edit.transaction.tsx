import { 
  Edit,
  SimpleForm,
  NumberInput,
  DateTimeInput,
  TextInput,
  AutocompleteInput,
  required,
} from 'react-admin'

export function EditTransaction(_props: any) {
  return (
    <Edit>
      <SimpleForm>
        <NumberInput source="id" variant="outlined" validate={[required()]} />
        <DateTimeInput source="createdAt" variant="outlined" validate={[required()]} />
        <DateTimeInput source="updatedAt" variant="outlined" validate={[required()]} />
        <DateTimeInput source="date" variant="outlined"/>
        <NumberInput source="amount" variant="outlined" />
        <NumberInput source="litres" variant="outlined" />
        <NumberInput source="kilometers" variant="outlined"/>
        <TextInput source="litresScreenshot" variant="outlined"/>
        <TextInput source="kilometersScreenshot" variant="outlined"/>
        <AutocompleteInput 
          variant="outlined" 
          source="statu" 
          choices={[
            { id: 'APPROVED', name: 'APPROVED' },
            { id: 'PENDING', name: 'PENDING' },
            { id: 'DECLINED', name: 'DECLINED' },
          ]} 
          validate={[required()]} 
        />
      </SimpleForm>
    </Edit>
  )
}
