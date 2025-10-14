import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Shield } from "lucide-react"

export function PatientPledge() {
  return (
    <section className="mx-auto mt-10 max-w-6xl px-4">
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Patient Care Pledge</h2>
        <p className="text-sm text-muted-foreground">Commitment to empathy, privacy, and dignity.</p>
      </div>

      <Card>
        <CardHeader className="flex-row items-center gap-2">
          <Shield className="h-5 w-5 text-primary" aria-hidden="true" />
          <CardTitle className="text-base">My Promise to Patients</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <ul className="list-disc space-y-1 pl-5">
            <li>I will maintain a friendly behaviour so you can share your health concerns without fear.</li>
            <li>I will listen carefully to every patient and take your concerns seriously.</li>
          </ul>

          <Accordion type="single" collapsible>
            <AccordionItem value="privacy">
              <AccordionTrigger className="text-left">Privacy & Dignity</AccordionTrigger>
              <AccordionContent>
                I will maintain your privacy and dignity by keeping patient details limited to myself, in accordance
                with medical ethics and applicable regulations.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </section>
  )
}
