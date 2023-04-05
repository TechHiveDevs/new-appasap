import { 
  Create,
  SimpleForm,
  NumberInput,
  DateTimeInput,
  TextInput,
  BooleanInput,
  AutocompleteInput,
  ReferenceInput,
  required,
} from 'react-admin'

export function CreateSupplier(_props: any) {
  return (
    <Create>
      <SimpleForm>
        <NumberInput source="id" variant="outlined" validate={[required()]} />
        <DateTimeInput source="createdAt" variant="outlined" validate={[required()]} />
        <DateTimeInput source="updatedAt" variant="outlined" validate={[required()]} />
        <TextInput source="name" variant="outlined"/>
        <TextInput source="companyRegistrationCode" variant="outlined"/>
        <TextInput source="companyRegisterationCountry" variant="outlined"/>
        <BooleanInput source="isDisabled" variant="outlined"/>
        <ReferenceInput label="supplier" source="parentId" reference="supplier">
          <AutocompleteInput variant="outlined" optionText="id" validate={[required()]} />
        </ReferenceInput>
        <AutocompleteInput 
          variant="outlined" 
          source="serviceType" 
          choices={[
            { id: 'EVIECARESUBSUPPLIER', name: 'EVIECARESUBSUPPLIER' },
            { id: 'INTERNALSUBSUPPLIER', name: 'INTERNALSUBSUPPLIER' },
            { id: 'PARENTSUPPLIER', name: 'PARENTSUPPLIER' },
          ]} 
          validate={[required()]} 
        />
      </SimpleForm>
    </Create>
  )
}
