# 🛒 Next.js + WooCommerce attempt

This is a test project which tries to use WooCommerce as a headless CMS for a custom Next.js storefront

## ✨ Current features
- Home page
- All products page (no searching, sorting functionalities whatsover atm)
- Product page

## 💡 Important notes

The project uses a rather outdated `@woocommerce/woocommerce-rest-api` library, which is hardly maintained nowadays. The types provided by `@types/woocommerce__woocommerce-rest-api` only cover the API client itself - none of the responses are typed, as the API client is basically a wrapper for HTTP requests. This means that you will have to manually type the responses yourself. WooCommerce related stuff i typed so far is located in `src/types/commerce`. I basically pasted the JSON response into Claude and made it generate an interface so it may not be 100% accurate, but it should be enough for now.

#### Current coverage
- Product response

## 🚀 Getting started

1. Clone the repo
2. Install dependencies with `pnpm install`
3. Create a `.env` file in the root of the project with the following content:

```bash
# The domain your Wordpress project uses
WORDPRESS_URL=https://example.com
# Generate the keys in WooCommerce > Settings > Advanced > REST API
WOO_CONSUMER_KEY=your_consumer_key
WOO_CONSUMER_SECRET=your_consumer_secret
```

4. Run the project with `pnpm dev`