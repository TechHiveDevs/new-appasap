import { useState } from 'react'
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
} from 'recharts'
import { SelectInput, Form } from 'react-admin'
import { trpcReactClient } from '@my/ui/src/provider/trpc/trpc.provider'
import { Card, CardContent } from '@mui/material'
import Welcome from './components/Welcome'

// =============================================================================

type Resources = 'user' | 'account' | 'role'

// =============================================================================

export function Dashboard() {
  const [resource, setResource] = useState<Resources>('user')
  const [groupBy, setGroupBy] = useState('createdAt')

  // @ts-ignore
  const { data } = trpcReactClient[resource].getCountsGroupBy.useQuery({
    groupBy,
  })

  return (
    <>
      <Welcome />
      {/* <Card> */}
      {/* <CardContent> */}
      <Card>
        <CardContent>
          <Form>
            <SelectInput
              source="Resource"
              defaultValue={resource}
              onChange={({ target: { value } }) => setResource(value)}
              choices={[
                { id: 'user', name: 'Users' },
                { id: 'account', name: 'Account' },
                { id: 'role', name: 'Roles' },
              ]}
            />
            <SelectInput
              source="GroupBy"
              defaultValue={groupBy}
              onChange={({ target: { value } }) => setGroupBy(value)}
              choices={[
                { id: 'createdAt', name: 'Created At' },
                { id: 'updatedAt', name: 'Updated dAt' },
                { id: 'id', name: 'Id' },
              ]}
            />
          </Form>
          <ComposedChart width={1500} height={500} data={data}>
            <CartesianGrid stroke="grey" strokeDasharray="3" />
            <XAxis dataKey={groupBy} scale="band" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="_count" fill="#809EAC" stroke="#8884d8" />
            <Bar dataKey="_count" barSize={20} fill="#013e5a" />
            <Line type="monotone" dataKey="_count" stroke="#4D778B" />
            <Scatter dataKey="cnt" fill="red" />
          </ComposedChart>
        </CardContent>
      </Card>
      {/* </CardContent> */}
      {/* </Card> */}
    </>
  )
}
