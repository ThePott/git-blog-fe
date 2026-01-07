import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/file/$')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/file/$"!</div>
}
