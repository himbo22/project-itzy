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

interface props {
  onClose: () => void
  isOpen: boolean
}

export const ResetPasswordBody = z
  .object({
    email: z.string().email(),
    newPassword: z.string().min(6, 'Password must be at least 6 characters'),
    confirmPassword: z.string(),
    otp: z.string().min(4, 'OTP must be at least 4 digits'),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  })

export type ResetPasswordBodyType = z.TypeOf<typeof ResetPasswordBody>

export default function ModalResetPassword({ onClose, isOpen }: props) {
  const form = useForm<ResetPasswordBodyType>({
    resolver: zodResolver(ResetPasswordBody),
    defaultValues: {
      email: '',
      newPassword: '',
      confirmPassword: '',
      otp: '',
    },
  })

  useEffect(() => {
    form.reset()
    setOtpSent(false)
    setEmailVerified(false)
  }, [isOpen])

  const [otpSent, setOtpSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [emailVerified, setEmailVerified] = useState(false)
  const [verifying, setVerifying] = useState(false)

  // Step 1: Send OTP to email
  const handleSendOtp = async () => {
    const email = form.getValues('email')
    if (!email) {
      toast.error('Please enter your email address')
      return
    }

    setSending(true)
    // Simulate API call to send OTP
    setTimeout(() => {
      setOtpSent(true)
      setSending(false)
      toast.success('OTP sent to your email!')
    }, 1000)
  }

  // Step 2: Verify OTP
  const handleVerifyOtp = async () => {
    const otp = form.getValues('otp')
    if (!otp) {
      toast.error('Please enter the OTP')
      return
    }

    setVerifying(true)
    // Simulate API call to verify OTP
    setTimeout(() => {
      setEmailVerified(true)
      setVerifying(false)
      toast.success('Email verified! You can now reset your password.')
    }, 1000)
  }

  // Step 3: Reset password
  async function onSubmit(data: ResetPasswordBodyType) {
    if (!emailVerified) {
      toast.error('Please verify your email first')
      return
    }

    // Handle password reset logic here
    toast.success('Password reset successfully!')
    onClose()
  }

  return (
    <ClientOnly>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent>
          <DialogHeader className="space-y-1 text-center">
            <DialogTitle className="text-2xl font-bold text-dalla">
              Reset Password
            </DialogTitle>
            <DialogDescription className="text-sm text-muted-foreground leading-relaxed">
              Enter your email and we'll send you a code to reset your password
            </DialogDescription>
          </DialogHeader>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              autoComplete="off"
              className="space-y-6 mt-4"
              noValidate
            >
              {/* Email Field */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your email"
                        type="email"
                        disabled={otpSent}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* OTP Field with Send/Verify Button */}
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
                            disabled={!otpSent || emailVerified}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                {!otpSent ? (
                  <Button
                    type="button"
                    onClick={handleSendOtp}
                    disabled={sending}
                    className="whitespace-nowrap"
                  >
                    {sending ? 'Sending...' : 'Send OTP'}
                  </Button>
                ) : !emailVerified ? (
                  <Button
                    type="button"
                    onClick={handleVerifyOtp}
                    disabled={verifying}
                    className="whitespace-nowrap"
                    variant="secondary"
                  >
                    {verifying ? 'Verifying...' : 'Verify'}
                  </Button>
                ) : (
                  <Button
                    type="button"
                    disabled
                    className="whitespace-nowrap"
                    variant="outline"
                  >
                    Verified ✓
                  </Button>
                )}
              </div>

              {/* Password Fields - Only show after email verification */}
              {emailVerified && (
                <>
                  <FormField
                    control={form.control}
                    name="newPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>New Password</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter new password"
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
                        <FormLabel>Confirm New Password</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Confirm new password"
                            type="password"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </>
              )}

              <Button
                type="submit"
                className="!mt-8 w-full"
                disabled={!emailVerified}
              >
                Reset Password
              </Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </ClientOnly>
  )
}
