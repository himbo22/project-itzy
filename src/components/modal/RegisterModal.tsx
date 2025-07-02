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

interface ModalRegisterProps {
  onClose: () => void
  isOpen: boolean
}

export const RegisterBody = z
  .object({
    email: z.string().email(),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    confirmPassword: z.string(),
    otp: z.string().min(4, 'OTP must be at least 4 digits'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  })

export type RegisterBodyType = z.TypeOf<typeof RegisterBody>

export default function ModalRegister({ onClose, isOpen }: ModalRegisterProps) {
  const form = useForm<RegisterBodyType>({
    resolver: zodResolver(RegisterBody),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
      otp: '',
    },
  })

  useEffect(() => {
    form.reset()
  }, [isOpen])

  // Simulate sending OTP
  const [otpSent, setOtpSent] = useState(false)
  const [sending, setSending] = useState(false)
  const handleSendOtp = async () => {
    setSending(true)
    // Simulate API call
    setTimeout(() => {
      setOtpSent(true)
      setSending(false)
      toast.success('OTP sent to your email!')
    }, 1000)
  }

  async function onSubmit(data: RegisterBodyType) {
    // Handle registration logic here
    toast.success('Registered successfully!')
    onClose()
  }

  return (
    <ClientOnly>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent>
          <DialogHeader className="space-y-1 text-center">
            <DialogTitle className="text-2xl font-bold text-dalla">
              Register ITZY and MIDZY
            </DialogTitle>
            <DialogDescription className="text-sm text-muted-foreground leading-relaxed">
              Join the MIDZY community!
            </DialogDescription>
          </DialogHeader>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              autoComplete="off"
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

              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Confirm Password"
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex gap-2 items-end">
                <div className="flex-1">
                  <FormField
                    control={form.control}
                    name="otp"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>OTP</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter OTP"
                            type="text"
                            autoComplete="one-time-code"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <Button
                  type="button"
                  onClick={handleSendOtp}
                  disabled={sending || otpSent}
                  className="whitespace-nowrap"
                  variant={otpSent ? 'secondary' : 'default'}
                >
                  {otpSent ? 'Sent' : sending ? 'Sending...' : 'Send OTP'}
                </Button>
              </div>

              <Button type="submit" className="!mt-8 w-full">
                Register
              </Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </ClientOnly>
  )
}
