import sitemap from '../../../src/app/sitemap'

describe('Sitemap', () => {
  it('should produce sitemap XML', () => {
    const testDate = new Date('2024-01-01T06:00:00.000Z')
    jest.spyOn(global, 'Date').mockImplementation(() => testDate)

    expect(sitemap()).toMatchInlineSnapshot(`
[
  {
    "lastModified": 2024-01-01T06:00:00.000Z,
    "priority": 1,
    "url": "https://example.com/",
  },
  {
    "lastModified": 2024-01-01T06:00:00.000Z,
    "priority": 0,
    "url": "https://example.com/cookie",
  },
  {
    "lastModified": 2024-01-01T06:00:00.000Z,
    "priority": 0,
    "url": "https://example.com/privacy",
  },
]
`)
  })
})
