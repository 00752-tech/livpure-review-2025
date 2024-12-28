'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Check, X } from 'lucide-react'

export function InteractiveEducation() {
  const [selectedOrgan, setSelectedOrgan] = useState<string>("")
  const [showResult, setShowResult] = useState(false)
  const [showExplanation, setShowExplanation] = useState(false)

  const handleSubmit = () => {
    setShowResult(true)
    setTimeout(() => {
      setShowExplanation(true)
    }, 1000)
  }

  return (
    <div className="max-w-4xl mx-auto space-y-12 py-8">
      {/* Mediterranean Ritual Section */}
      <section className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-[#008BC7] mb-8">
          Ancient Mediterranean Ritual Helps Boost Metabolism
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">The Mediterranean Secret</h3>
              <p>Ancient Mediterranean civilizations discovered powerful natural compounds that support liver health and metabolism. This traditional wisdom has been validated by modern science.</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Modern Science Meets Tradition</h3>
              <p>Liv Pure's formula is inspired by these time-tested ingredients, carefully selected to support your body's natural fat-burning processes.</p>
            </div>
          </div>
          <Image 
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-a0QtQSA6HNLHUl39djeAdikNLNwdaK.png"
            alt="Mediterranean ritual process visualization"
            width={400}
            height={400}
            className="rounded-lg mx-auto"
          />
        </div>
      </section>

      {/* Interactive Quiz Section */}
      <section className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-8">
          QUIZ: Which Organ Controls Fat-Burning?
        </h2>
        
        <Card className="max-w-2xl mx-auto">
          <CardContent className="p-6">
            <RadioGroup value={selectedOrgan} onValueChange={setSelectedOrgan}>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { id: "heart", label: "Heart", image: "/placeholder.svg" },
                  { id: "brain", label: "Brain", image: "/placeholder.svg" },
                  { id: "liver", label: "Liver", image: "/placeholder.svg" },
                  { id: "kidneys", label: "Kidneys", image: "/placeholder.svg" }
                ].map((organ) => (
                  <div key={organ.id} className="relative">
                    <RadioGroupItem
                      value={organ.id}
                      id={organ.id}
                      className="peer sr-only"
                    />
                    <Label
                      htmlFor={organ.id}
                      className="flex flex-col items-center gap-2 rounded-lg border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
                    >
                      <Image
                        src={organ.image}
                        alt={organ.label}
                        width={100}
                        height={100}
                        className="rounded-lg"
                      />
                      <span className="font-semibold">{organ.label}</span>
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>

            <Button 
              onClick={handleSubmit}
              className="w-full mt-6"
              disabled={!selectedOrgan || showResult}
            >
              Submit Answer
            </Button>

            {showResult && (
              <div className="mt-6">
                {selectedOrgan === "liver" ? (
                  <div className="flex items-center gap-2 text-green-600 bg-green-50 p-4 rounded-lg">
                    <Check className="h-5 w-5" />
                    <span>Correct! The liver is the key organ in fat metabolism.</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-red-600 bg-red-50 p-4 rounded-lg">
                    <X className="h-5 w-5" />
                    <span>Not quite. The liver is actually the key organ in fat metabolism.</span>
                  </div>
                )}
              </div>
            )}

            {showExplanation && (
              <div className="mt-6 bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-[#008BC7] mb-2">Why the Liver?</h3>
                <p>The liver plays a crucial role in fat metabolism by:</p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Processing and breaking down fats</li>
                  <li>Converting excess carbohydrates and proteins into fatty acids</li>
                  <li>Producing bile, which helps digest fats</li>
                  <li>Storing and releasing energy as needed</li>
                </ul>
                <p className="mt-4">This is why Liv Pure's formula focuses on supporting optimal liver function for effective weight management.</p>
              </div>
            )}
          </CardContent>
        </Card>
      </section>
    </div>
  )
}

