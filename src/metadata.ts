import meta from '../metadata.json'

export type PageUrl = `/${string}`
export interface IMetaPage {
  name: string
  title: string
  description: string
  url: string
  priority: number
}
export interface IMetadata {
  common: {
    siteName: string
    baseUrl: string
    imageUrl: string
    type: string
    cacheTime: number
  }
  [key: PageUrl]: IMetaPage
}

export const Metadata: IMetadata = meta
export default Metadata
