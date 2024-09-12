import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { getCommerceClient } from '@/lib/commerce'
import type { WooCommerceProduct } from '@/types/commerce/product'
import Image from 'next/image'
import Link from 'next/link'
import Container from '@/components/container'
import { cache } from 'react'
import { Button } from '@/components/ui/button'

export const revalidate = 86400

const getProducts = cache(async () => {
  const client = getCommerceClient()
  const products = await client.get('products').then((res) => {
    console.log(res)
    return res.data
  })
  return products as WooCommerceProduct[]
})

function ProductCard({ product }: { product: WooCommerceProduct }) {
  return (
    <Link href={`/products/${product.id}`} className="max-w-sm">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">{product.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <Image
            src={product.images[0].src}
            alt={product.images[0].alt}
            width={128}
            height={128}
            className="mx-auto"
          />
          <p className="block text-xl font-semibold">{product.price}zł</p>
        </CardContent>
        <CardFooter className="justify-between">
          <Button variant={'outline'} title="This is a dummy button">
            Save
          </Button>
          <div className="flex gap-2">
            <Button title="This is a dummy button">Buy now</Button>
            <Button title="This is a dummy button">Add to cart</Button>
          </div>
        </CardFooter>
      </Card>
    </Link>
  )
}

export default async function ProductsPage() {
  const products = await getProducts()
  return (
    <Container className="flex flex-col gap-4">
      <h1 className="text-4xl pb-4 font-semibold">Our products</h1>
      <div className="flex flex-wrap gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Container>
  )
}
