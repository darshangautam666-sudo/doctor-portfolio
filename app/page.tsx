import { SiteHeader } from "@/components/profile/header"
import { Hero } from "@/components/profile/hero"
import { Credentials } from "@/components/profile/credentials"
import { Workplaces } from "@/components/profile/workplaces"
import { PatientPledge } from "@/components/profile/pledge"
import { QuoteBanner } from "@/components/profile/quote-banner"
import { Separator } from "@/components/ui/separator"
import { ProfessionalServices } from "@/components/profile/professionalService"
import Footer from "@/components/profile/footer"
import Philosophy from "@/components/profile/philosophy"
import Contact from "./contact/page"

export default function Page() {
  return (
    <main>
      <SiteHeader />
      <Hero />
      <Separator className="mx-auto mt-8 max-w-6xl" />
      <ProfessionalServices/>
      <Contact/>
      <Philosophy/>
      <Footer/>
    </main>
  )
}
