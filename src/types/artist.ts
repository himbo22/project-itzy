export interface ArtistDTO {
  id: string
  name: string
  image: string
  members: MemberDTO[]
  company: String
}

export interface MemberDTO {
  name: string
  image: string
}

export interface CommunityDTO {
  id: string
  content: string
  user: UserCommunity
  date: Date
}

export interface UserCommunity {
  id: string
  username: string
  avatar: string
}

export type ArtistDetailProps = {
  params: {
    id: string
  }
}
