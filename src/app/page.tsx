import Container from '@/components/container'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col grow justify-center items-center gap-4 min-h-[calc(100vh-68px)] text-center">
        <h1 className="text-4xl xl:text-5xl font-bold">WooCommerce as Headless CMS</h1>
        <p className="text-lg xl:text-xl max-w-xl">
          This is a test project which tries to use WooCommerce as a headless CMS for a
          custom Next.js storefront
        </p>
        <Button asChild>
          <Link href={'/products'}>Browse products</Link>
        </Button>
      </div>
    </Container>
  )
}
