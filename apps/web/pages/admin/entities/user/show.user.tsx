import { 
  Show,
  NumberField,
  DateField,
  TextField,
  BooleanField,
  ReferenceField,
  SimpleShowLayout,
} from 'react-admin'

export function ShowUser(_props: any) {
  return (
    <Show>
      <SimpleShowLayout>
        <NumberField source="id" />
        <DateField source="createdAt" />
        <DateField source="updatedAt" />
        <TextField source="name" />
        <TextField source="nickname" />
        <TextField source="email" />
        <TextField source="phone" />
        <TextField source="password" />
        <BooleanField source="otp" />
        <DateField source="otpExpiresAt" />
        <TextField source="carPlateNumber" />
        <NumberField source="pinCode" />
        <TextField source="profilePicture" />
        <ReferenceField source="transactionId" reference="transaction" />
        <TextField source="city" />
        <TextField source="district" />
      </SimpleShowLayout>
    </Show>
  )
}
