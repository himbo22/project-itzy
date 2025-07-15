export interface ApiResponse<T> {
  results: T
  isSuccess: boolean
  message: string
}

export interface ResponseWithPaging<T> {
  data: T
  total: number
  page: number
  totalPage: number
}
