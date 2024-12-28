import { Card, CardContent } from "@/components/ui/card"
import { Check } from 'lucide-react'

export function BenefitsSection() {
  const benefits = [
    "Supports healthy liver function",
    "Enhances natural fat-burning processes",
    "Promotes healthy metabolism",
    "Supports natural detoxification",
    "Increases energy levels",
    "Made with natural ingredients"
  ]

  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Key Benefits of Liv Pure
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Experience the power of natural ingredients working together to support your weight loss journey
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-white">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-[#008BC7]/10 p-2">
                    <Check className="h-5 w-5 text-[#008BC7]" />
                  </div>
                  <p className="text-lg font-medium">{benefit}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
