import { Store } from 'lucide-react'
import { Button } from './ui/button'
import Container from './container'
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import Link from 'next/link'

export default function Header() {
  return (
    <div className="py-4">
      <Container className="flex justify-between items-center">
        <Link href={'/'} className="flex gap-2 text-lg font-semibold">
          <Store />
          WooShop
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem className="hover:cursor-pointer">
              <Link href="/" legacyBehavior>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="hover:cursor-pointer">
              <Link href="/products" legacyBehavior>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Browse
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Button title="This is a dummy button">Login</Button>
      </Container>
    </div>
  )
}
