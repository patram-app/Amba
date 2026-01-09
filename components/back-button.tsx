"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export function BackButton() {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="fixed top-24 left-6 z-40"
        >
            <Link
                href="/"
                className="
            inline-flex items-center gap-2
            px-4 py-2
            bg-card/90 backdrop-blur-sm
            border border-primary/20
            rounded-full
            font-body text-sm text-foreground
            hover:text-primary hover:border-primary/40
            transition-all duration-300
            shadow-sm
          "
            >
                <ArrowLeft size={16} />
                Back
            </Link>
        </motion.div>
    );
}
