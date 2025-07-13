import { Button } from '@/components/ui/button'

interface props {
  isFollowed?: string
  onClick?: () => void
}

export default function FollowButton({ onClick, isFollowed }: props) {
  return (
    <Button
      onClick={onClick}
      className="text-center mt-3 bg-black text-white h-[30px] px-7 w-fit hover:bg-gray-600 rounded-full"
    >
      <span className="inline-block text-sm">
        {isFollowed ? 'Follow' : 'Unfollow'}
      </span>
    </Button>
  )
}
