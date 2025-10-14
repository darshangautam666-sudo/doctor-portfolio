import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Workplaces() {
  return (
    <section className="mx-auto mt-10 max-w-6xl px-4">
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Practice & Locations</h2>
        <p className="text-sm text-muted-foreground">Current public service and private clinic availability.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader className="flex-row items-center gap-3">
            <Image
              src="/primary-clinic-icon.jpg"
              alt="Primary clinic icon"
              width={48}
              height={48}
              className="rounded-md"
            />
            <CardTitle className="text-base">Jamuguri SHC (Jamuguri Civil), Sonitpur</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Medical Officer (MO) — Serving patients for the last 4 months.
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex-row items-center gap-3">
            <Image
              src="/pharmacy-clinic-icon.jpg"
              alt="Private clinic icon"
              width={48}
              height={48}
              className="rounded-md"
            />
            <CardTitle className="text-base">Shubham Medical Store (Private Clinic)</CardTitle>
          </CardHeader>
          <CardContent className="text-sm">
            <p className="text-muted-foreground">Halem, PIN-784170, Dist. Biswanath.</p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
