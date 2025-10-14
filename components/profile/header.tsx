"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import { Stethoscope } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <Stethoscope className="h-5 w-5 text-primary" aria-hidden="true" />
          <span className="text-sm font-medium">Dr. Darshan Gautam</span>
        </Link>
        <nav className="flex items-center gap-2">
          <Link href="/" className={cn("text-sm px-3 py-2 rounded-md hover:bg-accent")}>
            Home
          </Link>
          <Link href="/contact" className={cn("text-sm px-3 py-2 rounded-md hover:bg-accent")}>
            Contact
          </Link>
          <Button asChild size="sm" className="ml-1">
            <a href="#appointments">Appointments</a>
          </Button>
        </nav>
      </div>
    </header>
  )
}
