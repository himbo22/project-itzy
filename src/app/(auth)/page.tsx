'use client'

import AuthButton from '@/components/auth/AuthButton'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod' // combine zod + reacthookform
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
})

function RegisterPage() {
  // const form = useForm<z.infer<typeof formSchema>>({
  //   resolver: zodResolver(formSchema),
  //   defaultValues: {
  //     username: '',
  //   },
  // })

  // const handleSubmit = () => {
  //   console.log('yes sir')
  // }

  // return (
  //   <Form {...form}>
  //     <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
  //       <FormField
  //         control={form.control}
  //         name="username"
  //         render={({ field }) => (
  //           <FormItem>
  //             <FormLabel>Username</FormLabel>
  //             <FormControl>
  //               <Input placeholder="shadcn" {...field} />
  //             </FormControl>
  //             <FormDescription>
  //               This is your public display name.
  //             </FormDescription>
  //             <FormMessage />
  //           </FormItem>
  //         )}
  //       />

  //       <Button type="submit">Submit</Button>
  //     </form>
  //   </Form>
  // )

  const handleOpenCreateAccountModal = () => {
    console.log('after like')
  }

  const handleOpenSignInModal = () => {
    console.log('after like')
  }

  return (
    <main className="min-h-screen overflow-hidden flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <div className="relative w-40 md:w-120 aspect-[2/1] my-5">
          <Image
            src="/images/logo.png"
            alt="logo"
            fill={true}
            className="m-auto"
          />
        </div>
      </div>
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <div>
          <h1 className="text-8xl font-bold">All in us!</h1>
          <h1 className="text-3xl mt-5">Hello, we are ITZY!</h1>
          <AuthButton
            onClick={handleOpenCreateAccountModal}
            content="Create account"
          ></AuthButton>
          <h1 className="text-1xl font-bold mt-5">Already have an account?</h1>
          <AuthButton
            onClick={handleOpenSignInModal}
            content="Sign in"
          ></AuthButton>
        </div>
      </div>
    </main>
  )
}

export default RegisterPage
