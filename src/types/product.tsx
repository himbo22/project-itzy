interface ProductDetailDTO {
  id: string
  name: string
  oldPrice: number
  newPrice: number
  image: string
  detail: string
  quantity: number
  discount?: number
  isDeleted: boolean
  Artist: Artist
  Category: Category
}

interface ProductDTO {
  id: string
  name: string
  oldPrice: number
  newPrice: number
  image: string
  discount?: number
  isDeleted: boolean
  Artist: Artist
}

interface Artist {
  id: string
  name: string
}

interface Category {
  name: string
}
