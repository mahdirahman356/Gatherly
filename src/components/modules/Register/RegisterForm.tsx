"use client"
import InputFieldError from "@/components/shared/InputFieldError";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { registerUser } from "@/services/auth/registerUser";
import { useActionState, useEffect } from "react";
import { toast } from "sonner";

const RegisterForm = () => {

  const [state, formAction, isPending] = useActionState(registerUser, null)


  useEffect(() => {
    if (state && !state.success && state.message) {
      toast.error(state.message)
    }
  }, [state])

  return (
    <form action={formAction} className="space-y-5">
      <Input
        id="fullName"
        type="text"
        name="fullName"
        label="Full Name"
        placeholder="John Doe"
      />
      <InputFieldError field="fullName" state={state} />

      <Input
        id="email"
        type="email"
        name="email"
        label="Email Address"
        placeholder="you@example.com"
      />
      <InputFieldError field="email" state={state} />

      <Input
        id="location"
        type="text"
        name="location"
        label="Location"
        placeholder="Enter your location"
      />
      <InputFieldError field="location" state={state} />

      <Input
        id="password"
        type="password"
        name="password"
        label="Password"
        placeholder="Enter your password"
      />
      <InputFieldError field="password" state={state} />

      {/* <label className="flex items-start text-sm">
        <input type="checkbox" className="mr-2 mt-1 rounded" required />
        <span className="text-(--color-gray)">
          I agree to the{' '}
          <Link
            href="/terms"
            className="text-(--color-primary) hover:underline"
          >
            Terms of Service
          </Link>{' '}
          and{' '}
          <Link
            href="/privacy"
            className="text-(--color-primary) hover:underline"
          >
            Privacy Policy
          </Link>
        </span>
      </label> */}
      <Button type="submit" size="lg" className="w-full" disabled={isPending}>
        {isPending ? "Creating Account..." : "Create Account"}
      </Button>
    </form>
  );
};

export default RegisterForm;