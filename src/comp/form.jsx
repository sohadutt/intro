"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const NewsletterSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email." }),
})

export function NewsletterSignup() {
  const form = useForm({
    resolver: zodResolver(NewsletterSchema),
    defaultValues: {
      email: "",
    },
  })

  const onSubmit = (values) => {
    toast("Thanks for subscribing!", {
      description: (
        <pre className="mt-2 w-[320px] rounded-md bg-neutral-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <div
      id="signup"
      className="flex flex-col md:flex-row items-start gap-8 p-6 border rounded-lg bg-background shadow-sm max-w-3xl"
    >
      {/* Text Description */}
      <div className="md:w-1/2">
        <h2 className="text-xl font-semibold">Join our newsletter</h2>
        <p className="text-sm text-muted-foreground mt-2">
          Get updates on our school management system — a work-in-progress
          platform to simplify school operations.
        </p>
      </div>

      {/* Signup Form */}
      <div className="md:w-1/2 w-full">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="you@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              Sign Up
            </Button>
          </form>
        </Form>
      </div>
    </div>
  )
}
