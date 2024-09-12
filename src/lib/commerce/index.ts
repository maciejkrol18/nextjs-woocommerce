import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api'

let instance: WooCommerceRestApi | undefined = undefined

export const getCommerceClient = () => {
  if (instance) return instance

  instance = new WooCommerceRestApi({
    url: process.env.WORDPRESS_URL as string,
    consumerKey: process.env.WOO_CONSUMER_KEY as string,
    consumerSecret: process.env.WOO_CONSUMER_SECRET as string,
    version: 'wc/v3',
  })
  return instance
}
