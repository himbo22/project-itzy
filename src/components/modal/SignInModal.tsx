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

interface ModalSignInProps {
  onClose: () => void
  isOpen: boolean
}

export const SignInBody = z.object({
  email: z.string().email(),
  password: z.string(),
})

export type SignInBodyType = z.TypeOf<typeof SignInBody>

export default function ModalSignIn({ onClose, isOpen }: ModalSignInProps) {
  const [page, setPage] = useState<'signin' | 'password'>('signin')

  const form = useForm<SignInBodyType>({
    resolver: zodResolver(SignInBody),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  useEffect(() => {
    form.reset()
    setPage('signin')
  }, [isOpen])

  async function onSubmit() {
    console.log('cac')
    setPage('password')
  }

  return (
    <ClientOnly>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="">
          <DialogHeader className="space-y-1 text-center">
            <DialogTitle className="text-2xl font-bold text-dalla">
              ITZY and MIDZY
            </DialogTitle>
            <DialogDescription className="text-sm text-muted-foreground leading-relaxed">
              Not shy, not me (ITZY)
              <br />
              Nan da weonhae dada (Yeah)
              <br />
              Not shy, not me
            </DialogDescription>
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
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Email" type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Password"
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="!mt-8 w-full">
                Sign In
              </Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </ClientOnly>
  )
}
