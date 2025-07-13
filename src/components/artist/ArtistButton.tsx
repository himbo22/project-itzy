import { Button } from '@/components/ui/button'

interface props {
  isSelected: boolean
  text?: string
  onClick?: () => void
}

export default function SectionButton({ onClick, isSelected, text }: props) {
  return (
    <div className="w-fit">
      <Button
        onClick={onClick}
        className={`text-center mt-3 bg-[#dfcfd700] hover:bg-[#dfcfd700] text-black h-[30px] w-fit  rounded-none p-0 ${
          isSelected ? 'border-b-black border-b-2' : 'hover:border-b-2'
        }`}
      >
        {text}
      </Button>
    </div>
  )
}
