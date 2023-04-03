import dynamic from 'next/dynamic'

const Admin = dynamic(() => import('./react-admin/components/MyAdmin'), {
    ssr: false,
})

export default function AdminApp() {
    return <Admin />
}
