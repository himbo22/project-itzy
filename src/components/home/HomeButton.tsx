import { Button } from '@/components/ui/button'

interface props {
  content: string
  onClick?: () => void
  isSelected: boolean
}

export default function HomeButton({ content, onClick, isSelected }: props) {
  return (
    <div className="text-center mx-2 my-1">
      <Button
        onClick={onClick}
        className="rounded bg-white text-black w-auto h-[25px] m-0.5 p-0.5 hover:bg-gray-200"
      >
        <span className="inline-block text-sm">{content}</span>
      </Button>
      {isSelected ? <div className="w-auto h-0.5 bg-black"></div> : null}
    </div>
  )
}
