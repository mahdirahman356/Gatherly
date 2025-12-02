"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useState } from "react";

const RegisterForm = () => {
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      })
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle registration logic
        console.log('Register:', formData)
      }
      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        })
      }

    return (
       <form onSubmit={handleSubmit} className="space-y-5">
            <Input
              type="text"
              name="name"
              label="Full Name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <Input
              type="email"
              name="email"
              label="Email Address"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <Input
              type="password"
              name="password"
              label="Password"
              placeholder="Create a strong password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <Input
              type="password"
              name="confirmPassword"
              label="Confirm Password"
              placeholder="Re-enter your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />

            <label className="flex items-start text-sm">
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
            </label>

            <Button type="submit" size="lg" className="w-full">
              Create Account
            </Button>
          </form>
    );
};

export default RegisterForm;