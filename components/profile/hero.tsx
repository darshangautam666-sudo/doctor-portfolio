import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle2 } from "lucide-react"

// orange text CTAs, grayscale portrait, and pill badges with dashed connectors.
export function Hero() {
  return (
    <section className="relative bg-hero">
      {/* bottom band like the reference */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 md:h-28 bg-hero-strong" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-2 md:gap-12">
        {/* Left column: name and CTAs */}
        <div className="order-2 md:order-1">
          <div className="text-muted-foreground text-xl md:text-2xl">Dr</div>
          <div className="mt-1 leading-none">
            <span className="block text-balance text-7xl font-extrabold tracking-tight md:text-8xl">
              Darshan
              {/* accent dot */}
              <span className="ml-2 inline-block align-top text-warm">•</span>
            </span>
            <span className="block text-balance text-5xl font-semibold tracking-tight text-foreground/90 md:text-6xl">
              Gautam
            </span>
          </div>

          <p className="mt-7 max-w-[48ch] text-pretty text-lg md:text-xl text-foreground/80">
            Medical Officer (MO) / General Practitioner offering compassionate primary care and wellness services for the Sonitpur &amp;
            Biswanath community.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-10">
            <a
              href="/contact"
              className="group inline-flex items-center gap-2 text-lg font-medium text-warm"
              aria-label="Book a consultation"
            >
              Contact Me
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
            {/* <a
              href="#credentials"
              className="group inline-flex items-center gap-2 text-lg font-medium text-warm"
              aria-label="Find a service"
            >
              Find a service
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </a> */}
          </div>
        </div>

        {/* Right column: portrait and floating badges */}
        <div className="order-1 relative md:order-2">
          <div className="relative mx-auto max-w-md md:max-w-none">
            <div className="relative overflow-hidden rounded-lg border">
              <img
                src="/hero-image.png"
                alt="Portrait of Dr. Darshan Gautam"
                className="h-auto w-full grayscale"
              />
            </div>

            {/* Floating badges with dashed connectors */}
            <div className="pointer-events-none absolute -right-2 top-8 hidden md:block">
              <div className="relative">
                <span className="absolute -left-24 top-1/2 hidden h-px w-24 -translate-y-1/2 border-b border-dashed border-foreground/30 md:block" />
                <Badge className="pointer-events-auto rounded-full bg-accent/70 text-accent-foreground shadow">
                  <CheckCircle2 className="mr-1.5 h-4 w-4 opacity-80" aria-hidden="true" />
                  Wellness Focused
                </Badge>
              </div>
            </div>

            <div className="pointer-events-none absolute -right-6 bottom-60 hidden md:block">
              <div className="relative">
                <span className="absolute -left-28 top-1/2 hidden h-px w-24 -translate-y-1/2 border-b border-dashed border-foreground/30 md:block" />
                <Badge variant="secondary" className="pointer-events-auto rounded-full shadow">
                  <CheckCircle2 className="mr-1.5 h-4 w-4 opacity-80" aria-hidden="true" />
                  Medical Officer
                </Badge>
              </div>
            </div>

            <div className="pointer-events-none absolute -left-10 bottom-64 hidden md:block">
              <div className="relative">
                <span className="absolute right-[-88px] top-1/2 hidden h-px w-24 -translate-y-1/2 border-b border-dashed border-foreground/30 md:block" />
                <Badge
                  variant="outline"
                  className="pointer-events-auto rounded-full bg-background/70 shadow backdrop-blur"
                >
                  <CheckCircle2 className="mr-1.5 h-4 w-4 opacity-80" aria-hidden="true" />
                  Private Clinic
                </Badge>
              </div>
            </div>

            {/* <div
              className="pointer-events-none absolute left-1/2 hidden -translate-x-1/2 md:block"
              style={{ bottom: "-18px" }}
            >
              <Badge className="pointer-events-auto rounded-full bg-accent/80 text-accent-foreground shadow">
                <CheckCircle2 className="mr-1.5 h-4 w-4 opacity-80" aria-hidden="true" />
                Private Clinic
              </Badge>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}
