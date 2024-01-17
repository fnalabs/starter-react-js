import { MetadataRoute } from 'next'
import meta, { PageUrl } from '../metadata'

const Sitemap = (): MetadataRoute.Sitemap => {
  const pages = Object.keys(meta)
  return pages.reduce<MetadataRoute.Sitemap>((sitemap, page) => {
    if (page !== 'common') {
      sitemap.push({
        url: `${meta.common.baseUrl}${page as PageUrl}`,
        lastModified: new Date(),
        priority: meta[page as PageUrl].priority
      })
    }

    return sitemap
  }, [])
}

export default Sitemap
