import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import Container from '@/components/container'

function ProductCardSkeleton() {
  return (
    <Card className="w-[384px] h-[375px]">
      <CardHeader>
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-full" />
      </CardHeader>
      <CardContent>
        <Skeleton className="h-[149px] w-full" />
        <Skeleton className="h-[28px] w-full" />
      </CardContent>
      <CardFooter className="justify-between">
        <Skeleton className="w-[66px] h-full" />
        <div className="flex gap-4">
          <Skeleton className="w-[66px] h-full" />
          <Skeleton className="w-[66px] h-full" />
        </div>
      </CardFooter>
    </Card>
  )
}

export default function ProductsPageLoader() {
  return (
    <Container className="flex flex-col gap-4">
      <h1 className="text-4xl pb-4 font-semibold">Our products</h1>
      <div className="flex flex-wrap gap-8">
        {Array.from({ length: 10 }).map((_, idx) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: not an issue here
          <ProductCardSkeleton key={idx} />
        ))}
      </div>
    </Container>
  )
}
