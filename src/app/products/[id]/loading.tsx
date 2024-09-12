import Container from '@/components/container'
import { Skeleton } from '@/components/ui/skeleton'

export default function ProductPageLoader() {
  return (
    <Container className="flex flex-col gap-8">
      <div className="flex gap-2">
        <Skeleton className="w-12 h-4" />
        <Skeleton className="w-12 h-4" />
        <Skeleton className="w-12 h-4" />
      </div>
      <div className="flex gap-8 items-center">
        <Skeleton className="w-[512px] h-[512px]" />
        <div className="flex flex-col justify-between gap-8 w-[512px]">
          <div className="flex flex-col gap-2">
            <Skeleton className="w-full h-16" />
            <Skeleton className="w-full h-4" />
            <Skeleton className="w-full h-4" />
          </div>
          <div className="flex flex-col gap-2">
            <Skeleton className="w-full h-8" />
            <Skeleton className="w-full h-8" />
          </div>
        </div>
      </div>
      <Skeleton className="w-full h-8" />
      <Skeleton className="w-full h-12" />
      <Skeleton className="w-full h-8" />
      <Skeleton className="p-4 rounded-lg" />
    </Container>
  )
}
