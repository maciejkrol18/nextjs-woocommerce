import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb'
import { getCommerceClient } from '@/lib/commerce'
import type { WooCommerceProduct } from '@/types/commerce/product'
import Container from '@/components/container'
import Image from 'next/image'
import { CircleCheckBig, CircleX, Heart, ShoppingCart } from 'lucide-react'
import { cn } from '@/lib/utils'
import parse from 'html-react-parser'
import { Button } from '@/components/ui/button'
import StarsRating from '@/components/stars-rating'
import { cache } from 'react'

interface ProductPageProps {
  params: {
    id: string
  }
}

export const revalidate = 86400

const getProduct = cache(async (id: string) => {
  const client = getCommerceClient()
  const product = await client.get(`products/${id}`).then((res) => res.data)
  return product as WooCommerceProduct
})

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProduct(params.id)
  return (
    <Container className="flex flex-col gap-8">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/products">Products</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{product.name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex gap-8 items-center">
        <div className="grow w-[512px] h-[512px] relative">
          <Image
            src={product.images[0].src}
            alt={product.images[0].alt}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-between gap-8">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-semibold text-right">{product.name}</h1>
            <StarsRating
              rating={Number.parseInt(product.average_rating)}
              totalRatings={product.rating_count}
            />
            <div
              className={cn(
                product.purchasable ? 'text-green-600' : 'text-red-600',
                'flex p-2 items-center justify-end text-sm gap-2',
              )}
            >
              {product.purchasable ? (
                <CircleCheckBig className="size-4" />
              ) : (
                <CircleX className="size-4" />
              )}
              <h2>Item {product.purchasable ? 'available' : 'unavailable'}</h2>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Button size={'lg'} className="w-full justify-center gap-2">
              <ShoppingCart />
              Add to cart
            </Button>
            <Button
              variant={'outline'}
              size={'lg'}
              className="w-full justify-center gap-2"
            >
              <Heart />
              Save
            </Button>
          </div>
        </div>
      </div>
      <h3 className="text-2xl font-semibold">About this product</h3>
      <div>{parse(product.description)}</div>
      <h4 className="text-2xl font-semibold">JSON Data</h4>
      <pre className="bg-card p-4 rounded-lg font-mono whitespace-pre-wrap overflow-hidden">
        {JSON.stringify(product, null, 2)}
      </pre>
    </Container>
  )
}
