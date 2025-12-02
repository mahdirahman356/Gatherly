import { UsersIcon } from 'lucide-react'
import Link from 'next/link'
import RegisterForm from '@/components/modules/Register/RegisterForm'

const RegisterPage = () => {
    return (
        <div className="min-h-screen bg-linear-to-br from-(--color-light-gray) to-white flex items-center justify-center px-4 py-12">
            <div className="max-w-md w-full">
                {/* Logo */}
                <Link
                    href="/"
                    className="flex items-center justify-center space-x-2 mb-8"
                >
                    <div className="w-12 h-12 bg-linear-to-br from-(--color-primary) to-(--color-accent) rounded-xl flex items-center justify-center">
                        <UsersIcon className="w-7 h-7 text-white" />
                    </div>
                    <span className="text-2xl font-bold text-(--color-dark)">
                        Gatherly
                    </span>
                </Link>

                {/* Register Card */}
                <div className="bg-white rounded-2xl shadow-xl p-8">
                    <h1 className="text-3xl font-bold text-(--color-dark) mb-2 text-center">
                        Join Gatherly
                    </h1>
                    <p className="text-(--color-gray) mb-8 text-center">
                        Start connecting with amazing people today
                    </p>
                    {/* Register Form */}
                    <RegisterForm />

                    <div className="mt-6 text-center text-sm text-(--color-gray)">
                        Already have an account?{' '}
                        <Link
                            href="/login"
                            className="text-(--color-primary) font-semibold hover:underline"
                        >
                            Sign in
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage;
