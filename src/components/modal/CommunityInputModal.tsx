'use client'

import ClientOnly from '@/components/client-only'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import Image from 'next/image'
import { PiImageSquareLight } from 'react-icons/pi'

interface props {
  onClose: () => void
  isOpen: boolean
  onOpenGallery: () => void
}

export const communityBody = z.object({
  comment: z.string(),
})

export type CommunityBodyType = z.TypeOf<typeof communityBody>

export default function CommunityInputModal({
  onClose,
  isOpen,
  onOpenGallery,
}: props) {
  const form = useForm<CommunityBodyType>({
    resolver: zodResolver(communityBody),
    defaultValues: {
      comment: '',
    },
  })

  useEffect(() => {
    form.reset()
  }, [isOpen])

  async function onSubmit() {
    console.log('cac')
  }

  return (
    <ClientOnly>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="">
          <DialogHeader className="space-y-1 text-center">
            <DialogTitle className="text-2xl font-bold">
              <div className="flex items-center">
                <Image
                  src={
                    'https://image-cdn.essentiallysports.com/wp-content/uploads/2023-07-09T154250Z_2012036925_UP1EJ7917NDHE_RTRMADP_3_MOTOR-F1-BRITAIN.jpg?width=600'
                  }
                  alt="avatar"
                  className="rounded-full w-10 h-10"
                  height={30}
                  width={30}
                />
                <p className="ml-2">abc@gmail.com</p>
              </div>
            </DialogTitle>
          </DialogHeader>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              autoComplete="off" // 🔒 prevent auto-selecting email
              className="space-y-6 mt-4"
              noValidate
            >
              <FormField
                control={form.control}
                name="comment"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <textarea
                        placeholder="Write a comment in the community"
                        {...field}
                        className="min-h-36 p-2 border-2"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex !mt-8">
                <PiImageSquareLight
                  className="text-gray-400 cursor-pointer"
                  size={35}
                  onClick={onOpenGallery}
                />
                <Button className="ml-auto w-fit" onClick={onClose}>
                  Cancel
                </Button>
                <Button type="submit" className="ml-4 w-fit">
                  Comment
                </Button>
              </div>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </ClientOnly>
  )
}
