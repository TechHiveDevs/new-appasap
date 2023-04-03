import { Admin, Resource } from 'react-admin'
import i18nProvider from '../../utils/translation/i18nProvider'
import MyLayout from './MyLayout'
import { entities } from '../../entities/entites'
import { trpcNativeClient } from '@my/ui/src/utils/trpc/trpc.api'
import { createTRPCDataProvider } from '../providers/trpc/trpc.data.provider'
import { Dashboard } from '../dashboard/Dashboard'

// =======================================================================

export default function MyAdmin() {
  const dataProvider = createTRPCDataProvider(trpcNativeClient)
  return (
    <Admin
      dashboard={Dashboard}
      dataProvider={dataProvider}
      layout={MyLayout}
      i18nProvider={i18nProvider}
    >
      {entities
        .filter((e) => !e.hide)
        .map(({ label, ...reset }: any, index: number) => (
          <Resource key={index} option={{ label }} {...reset} />
        ))}
    </Admin>
  )
}
