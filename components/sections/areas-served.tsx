import { MapPinIcon } from "lucide-react"

const areas = [
  { name: "Austin", primary: true },
  { name: "Cedar Park", primary: false },
  { name: "Round Rock", primary: false },
  { name: "Georgetown", primary: false },
  { name: "Pflugerville", primary: false },
  { name: "Kyle", primary: false },
  { name: "Buda", primary: false },
  { name: "Lakeway", primary: false },
  { name: "West Lake Hills", primary: false },
  { name: "Rollingwood", primary: false },
  { name: "Manor", primary: false },
  { name: "Del Valle", primary: false },
]

export function AreasServed() {
  return (
    <section id="areas" className="bg-muted/30 py-16 md:py-24">
      <div className="mx-auto max-w-screen-xl px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-[10px] font-semibold tracking-widest uppercase text-primary">
              Service Area
            </p>
            <h2 className="mt-3 font-heading text-3xl font-semibold leading-tight md:text-4xl">
              Areas I Serve
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
              I specialize in helping buyers find homes across Greater Austin
              and the surrounding Hill Country communities. Local knowledge is
              everything in this market.
            </p>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {areas.map((area) => (
                <div
                  key={area.name}
                  className={`flex items-center gap-2 border px-4 py-2 text-[10px] font-semibold tracking-widest uppercase transition-colors ${
                    area.primary
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-background text-foreground hover:border-primary hover:text-primary"
                  }`}
                >
                  <MapPinIcon className="size-3" />
                  {area.name}
                </div>
              ))}
            </div>
          </div>

          <div className="mx-auto flex w-full max-w-sm items-center justify-center lg:mx-0">
            <div className="flex aspect-square w-full max-h-96 items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
              <div className="flex flex-col items-center gap-3 text-center">
                <MapPinIcon className="size-14 text-primary/30" />
                <p className="text-[10px] font-semibold tracking-widest uppercase text-muted-foreground">
                  Greater Austin Area
                </p>
                <p className="text-xs text-muted-foreground">
                  12 cities &amp; neighborhoods served
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
