import { 
  Edit,
  SimpleForm,
  NumberInput,
  DateTimeInput,
  TextInput,
  BooleanInput,
  AutocompleteInput,
  ReferenceInput,
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
        <TextInput source="nickname" variant="outlined"/>
        <TextInput source="email" variant="outlined" validate={[required()]} />
        <TextInput source="phone" variant="outlined" validate={[required()]} />
        <TextInput source="password" variant="outlined" validate={[required()]} />
        <BooleanInput source="otp" variant="outlined"/>
        <DateTimeInput source="otpExpiresAt" variant="outlined"/>
        <TextInput source="carPlateNumber" variant="outlined" validate={[required()]} />
        <NumberInput source="pinCode" variant="outlined" validate={[required()]} />
        <TextInput source="profilePicture" variant="outlined"/>
        <ReferenceInput label="transaction" source="transactionId" reference="transaction">
          <AutocompleteInput variant="outlined" optionText="id" validate={[required()]} />
        </ReferenceInput>
        <TextInput source="city" variant="outlined"/>
        <TextInput source="district" variant="outlined"/>
      </SimpleForm>
    </Edit>
  )
}
