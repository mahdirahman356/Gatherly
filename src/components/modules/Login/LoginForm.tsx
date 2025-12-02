"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useState } from "react";

const LoginForm = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle login logic
        console.log('Login:', formData)
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <Input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
            />

            <Input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
            />

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

            <Button type="submit" size="lg" className="w-full">
                Sign In
            </Button>
        </form>
    );
};

export default LoginForm;