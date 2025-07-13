import { Input } from '@/components/ui/input'
import Image from 'next/image'
import { PiImageSquareLight } from 'react-icons/pi'
interface props {
  text: string
  onClick?: () => void
}

export default function CommunityInput({ text, onClick }: props) {
  return (
    <div
      className="w-full flex border-2 rounded-full p-3 items-center cursor-pointer gap-3"
      onClick={onClick}
    >
      <img
        src={
          'https://image-cdn.essentiallysports.com/wp-content/uploads/2023-07-09T154250Z_2012036925_UP1EJ7917NDHE_RTRMADP_3_MOTOR-F1-BRITAIN.jpg?width=600'
        }
        alt="avatar"
        className="rounded-full w-10 h-10"
      />
      <p className="text-gray-400 w-full">{text}</p>
      <PiImageSquareLight className="text-gray-400 " size={25} />
    </div>
  )
}
