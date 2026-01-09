import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/monkeytype/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/monkeytype/"!</div>
}
