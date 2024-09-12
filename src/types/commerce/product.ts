export interface WooCommerceProduct {
  id: number
  name: string
  slug: string
  permalink: string
  date_created: string
  date_created_gmt: string
  date_modified: string
  date_modified_gmt: string
  type: string
  status: string
  featured: boolean
  catalog_visibility: string
  description: string
  short_description: string
  sku: string
  price: string
  regular_price: string
  sale_price: string
  date_on_sale_from: string | null
  date_on_sale_from_gmt: string | null
  date_on_sale_to: string | null
  date_on_sale_to_gmt: string | null
  on_sale: boolean
  purchasable: boolean
  total_sales: number
  virtual: boolean
  downloadable: boolean
  downloads: {
    id: string
    name: string
    file: string
  }[]
  download_limit: number
  download_expiry: number
  external_url: string
  button_text: string
  tax_status: string
  tax_class: string
  manage_stock: boolean
  stock_quantity: number | null
  backorders: string
  backorders_allowed: boolean
  backordered: boolean
  low_stock_amount: number | null
  sold_individually: boolean
  weight: string
  dimensions: {
    length: string
    width: string
    height: string
  }
  shipping_required: boolean
  shipping_taxable: boolean
  shipping_class: string
  shipping_class_id: number
  reviews_allowed: boolean
  average_rating: string
  rating_count: number
  upsell_ids: number[]
  cross_sell_ids: number[]
  parent_id: number
  purchase_note: string
  categories: {
    id: number
    name: string
    slug: string
  }[]
  tags: string[] // assumed by claude to be any[]
  images: {
    id: number
    date_created: string
    date_created_gmt: string
    date_modified: string
    date_modified_gmt: string
    src: string
    name: string
    alt: string
  }[]
  attributes: string[] // assumed by claude to be any[]
  default_attributes: string[] // assumed by claude to be any[]
  variations: string[] // assumed by claude to be any[]
  grouped_products: string[] // assumed by claude to be any[]
  menu_order: number
  price_html: string
  related_ids: number[]
  meta_data: {
    id: number
    key: string
    value: string
  }[]
  stock_status: string
  has_options: boolean
  post_password: string
  global_unique_id: string
  yoast_head: string
  yoast_head_json: {
    title: string
    robots: {
      index: string
      follow: string
    }
    og_locale: string
    og_type: string
    og_title: string
    og_description: string
    og_url: string
    og_site_name: string
    article_modified_time: string
    og_image: {
      width: number
      height: number
      url: string
      type: string
    }[]
    twitter_card: string
    twitter_misc: {
      [key: string]: string
    }
    schema: {
      '@context': string
      '@graph': string[] // assumed by claude to be any[]
    }
  }
  jetpack_sharing_enabled: boolean
  _links: {
    self: {
      href: string
    }[]
    collection: {
      href: string
    }[]
  }
}
