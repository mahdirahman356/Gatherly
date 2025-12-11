"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";
import { Crown, Send } from "lucide-react";
import { Label } from "@radix-ui/react-label";
import { requestBecomeHost } from "@/services/user/becomeHost";
import { useRouter } from "next/navigation";

const BecomeHostPage = () => {

    const [reason, setReason] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter()

    const handleRequest = async () => {
        if (!reason.trim()) {
            toast.error("Please explain why you want to become a host.");
            return;
        }

        try {
            setIsLoading(true);
              const res = await requestBecomeHost();

              if (res.success) {
                toast.success("Your request has been submitted!");
                router.push("/profile")
              } else {
                toast.error(res.message || "Something went wrong.");
              }
        } catch (error) {
            toast.error("Failed to submit request");
            console.log(error)
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="max-w-xl mx-auto py-10 px-4">
            <Card className="shadow-lg border rounded-2xl">
                <CardHeader className="text-center space-y-2">
                    <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                        <Crown className="h-8 w-8 text-primary" />
                    </div>

                    <CardTitle className="text-2xl font-bold">
                        Become a Host
                    </CardTitle>

                    <p className="text-sm text-gray-600">
                        Want to host your own events on Gatherly?
                        Tell us why, and our team will review your request.
                    </p>
                </CardHeader>

                <CardContent className="space-y-5 mt-4">

                    <div className="space-y-2">
                        <Label>Full Name</Label>
                        <Input placeholder="Your full name (auto-filled)" />
                    </div>

                    <div className="space-y-2">
                        <Label>
                            Why do you want to become a host?
                        </Label>
                        <Textarea
                            className="min-h-[130px]"
                            value={reason}
                            onChange={(e) => setReason(e.target.value)}
                            placeholder="Tell us why you want to become a host..."
                        />
                    </div>

                    <Button
                        onClick={handleRequest}
                        disabled={isLoading}
                        className="w-full flex items-center gap-2 rounded-xl"
                    >
                        <Send className="h-4 w-4" />
                        Submit Request
                    </Button>

                    <p className="text-xs text-gray-500 text-center pt-2">
                        Requests are usually reviewed within 24 hours.
                    </p>
                </CardContent>
            </Card>
        </div>
    );
};

export default BecomeHostPage;
