import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { BadgeCheck } from "lucide-react"

export function Credentials() {
  return (
    <section id="credentials" className="mx-auto mt-10 max-w-6xl px-4">
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Credentials & Registration</h2>
        <p className="text-sm text-muted-foreground">
          Academic qualifications, licensing, and council registration details.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">MBBS</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <div className="flex items-start gap-2">
              <BadgeCheck className="mt-0.5 h-4 w-4 text-primary" aria-hidden="true" />
              <p>College of Medical Sciences (COMS), Chitwan, Nepal — under Kathmandu University (KU).</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">FMGE</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <div className="flex items-start gap-2">
              <BadgeCheck className="mt-0.5 h-4 w-4 text-primary" aria-hidden="true" />
              <p>Passed: January, 2025.</p>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="text-base">Registration</CardTitle>
          </CardHeader>
          <CardContent className="text-sm">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="acmr">
                <AccordionTrigger className="text-left">Assam Council of Medical Registration (ACMR)</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc space-y-1 pl-5">
                    <li>Registration No.: 31002</li>
                    <li>Date of Registration: 15-05-2025</li>
                    <li>Valid per ACMR guidelines and norms.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
