import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dir/$')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/dir/$"!</div>
}
