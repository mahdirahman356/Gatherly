"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export default function UpcomingEventPage() {
    const searchParams = useSearchParams();
    const router = useRouter();

    const paymentStatus = searchParams.get("payment");
    const [showSuccess, setShowSuccess] = useState(false);

    useEffect(() => {
        if (paymentStatus === "success") {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setShowSuccess(true);

            setTimeout(() => {
                setShowSuccess(false);
                router.replace("/dashboard/upcoming"); // ✅ clean URL
            }, 2000);
        }
    }, [paymentStatus, router]);

    if (showSuccess) {
        return (
            <div className="max-w-2xl mx-auto py-20">
                <Card className="border-green-200 bg-green-50">
                    <CardContent className="pt-6">
                        <div className="text-center space-y-4">
                            <div className="flex justify-center">
                                <CheckCircle2 className="h-16 w-16 text-green-600" />
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-green-900">
                                    Successfully Joined!
                                </h2>

                                <p className="text-green-700 mt-2">
                                    You have successfully joined this event. Get ready for an amazing experience!
                                </p>
                            </div>

                            <div className="text-sm text-green-600 space-y-1">
                                <p>You can now see this event in your dashboard.</p>
                                <p>Host will be able to see you as a participant.</p>
                            </div>

                            <p className="text-sm text-green-600 pt-2">
                                Redirecting to your dashboard...
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        );
    }

    return (
        <div>
            {/* ✅ NORMAL UPCOMING EVENTS UI HERE */}
        </div>
    );
}
