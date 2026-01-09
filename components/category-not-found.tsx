"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/navbar";
import { SiteFooter } from "@/components/site-footer";

export function CategoryNotFound() {
    const router = useRouter();

    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            <div className="container mx-auto px-6 pt-40 pb-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="font-display text-4xl text-foreground mb-4">
                        Collection Not Found
                    </h1>

                    <p className="font-elegant text-xl text-muted-foreground mb-8 italic">
                        The collection you&apos;re looking for doesn&apos;t exist.
                    </p>

                    <button
                        onClick={() => router.push("/")}
                        className="inline-flex items-center gap-2 font-body text-primary hover:text-primary/80 transition-colors"
                    >
                        <ArrowLeft size={20} />
                        Return to Home
                    </button>
                </motion.div>
            </div>

            <SiteFooter />
        </main>
    );
}
