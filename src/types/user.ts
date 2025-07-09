export interface UserDTO {
  id: string
  email: string
  username: string
  password: string
  avatar: string
  isActive?: Boolean | null
  roleId?: number | null
}
