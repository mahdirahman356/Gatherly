"use client"
import InputFieldError from "@/components/shared/InputFieldError";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { loginUser } from "@/services/auth/loginUser";
import Link from "next/link";
import { useActionState, useEffect } from "react";
import { toast } from "sonner";

const LoginForm = () => {

    const [state, formAction, isPending] = useActionState(loginUser, null);

    useEffect(() => {
        if (state && !state.success && state.message) {
            toast.error(state.message)
        }
    }, [state])

    return (
        <form action={formAction} className="space-y-6">
            <Input
                id="email"
                type="email"
                name="email"
                placeholder="you@example.com"

            />
            <InputFieldError field="email" state={state} />

            <Input
                id="password"
                type="password"
                name="password"
                placeholder="Enter your password"
            />
            <InputFieldError field="password" state={state} />

            <div className="flex items-center justify-between text-sm">
                <label className="flex items-center">
                    <input type="checkbox" className="mr-2 rounded" />
                    <span className="text-(--color-gray)">Remember me</span>
                </label>
                <Link
                    href="/forgot-password"
                    className="text-(--color-primary) hover:underline"
                >
                    Forgot password?
                </Link>
            </div>
            <Button type="submit" size="lg" className="w-full" disabled={isPending}>
                {isPending ? "Logging in..." : "Login"}
            </Button>
        </form>
    );
};

export default LoginForm;