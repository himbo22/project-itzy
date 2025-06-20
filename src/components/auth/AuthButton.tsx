import { Button } from '@/components/ui/button'

interface props {
  content: string
  onClick?: () => void
}

export default function AuthButton({ content, onClick }: props) {
  return (
    <Button
      onClick={onClick}
      className="rounded-4xl w-3xs my-1 hover:bg-dalla hover:text-black bg-primary text-white"
    >
      {content}
    </Button>
  )
}
