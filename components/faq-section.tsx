import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Info } from 'lucide-react'

export function FAQSection() {
  return (
    <section className="max-w-4xl mx-auto py-12">
      <h2 className="text-3xl font-bold text-center text-[#008BC7] mb-8">Frequently Asked Questions</h2>
      
      <Alert className="mb-8 border-[#FFD700] bg-amber-50">
        <Info className="h-4 w-4 text-[#008BC7]" />
        <AlertDescription>
          Important: These answers are based on available information and user experiences. Individual results may vary. Always consult with a healthcare professional before starting any new supplement regimen.
        </AlertDescription>
      </Alert>

      <Accordion type="single" collapsible className="space-y-4">
        <AccordionItem value="what-is" className="bg-white rounded-lg border border-gray-200">
          <AccordionTrigger className="px-6 hover:no-underline hover:bg-gray-50">
            <span className="text-left">What is Liv Pure and what does it claim to do?</span>
          </AccordionTrigger>
          <AccordionContent className="px-6 pt-2 pb-6">
            <div className="prose prose-blue max-w-none">
              <p>Liv Pure is a dietary supplement designed to support weight loss by optimizing liver function and promoting detoxification. The core concept centers around the idea that a healthy liver is crucial for efficient fat burning and overall metabolic health.</p>
              <p className="mt-4">Key claims include:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Tackles root cause of weight gain, particularly stubborn belly fat</li>
                <li>Enhances the liver's ability to process and eliminate toxins</li>
                <li>Improves energy levels and overall well-being</li>
                <li>Supports natural fat-burning processes</li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="ingredients" className="bg-white rounded-lg border border-gray-200">
          <AccordionTrigger className="px-6 hover:no-underline hover:bg-gray-50">
            <span className="text-left">What are the key ingredients and how do they work?</span>
          </AccordionTrigger>
          <AccordionContent className="px-6 pt-2 pb-6">
            <div className="prose prose-blue max-w-none">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="text-[#008BC7] font-semibold">Liver Purification Complex</h4>
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>Silymarin (Milk Thistle)</li>
                    <li>Betaine</li>
                    <li>Molybdenum</li>
                  </ul>
                  <p className="mt-2 text-sm">Supports liver detoxification and cell regeneration</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="text-[#008BC7] font-semibold">Liver Fat-Burning Complex</h4>
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>Camellia Sinensis (Green Tea Extract)</li>
                    <li>Luteolin</li>
                    <li>Berberine</li>
                  </ul>
                  <p className="mt-2 text-sm">Promotes metabolism and fat burning</p>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="evidence" className="bg-white rounded-lg border border-gray-200">
          <AccordionTrigger className="px-6 hover:no-underline hover:bg-gray-50">
            <span className="text-left">Is there scientific evidence to back up Liv Pure's claims?</span>
          </AccordionTrigger>
          <AccordionContent className="px-6 pt-2 pb-6">
            <div className="prose prose-blue max-w-none">
              <p>The scientific support for Liv Pure's efficacy is a point of consideration:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Individual ingredients have shown potential benefits in studies</li>
                <li>Limited research on the specific Liv Pure formulation</li>
                <li>Lack of robust clinical trials directly confirming weight loss claims</li>
                <li>Some ingredients like milk thistle support liver health, but direct weight loss impact isn't conclusive</li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="side-effects" className="bg-white rounded-lg border border-gray-200">
          <AccordionTrigger className="px-6 hover:no-underline hover:bg-gray-50">
            <span className="text-left">Are there any potential side effects?</span>
          </AccordionTrigger>
          <AccordionContent className="px-6 pt-2 pb-6">
            <div className="prose prose-blue max-w-none">
              <p>While Liv Pure contains natural ingredients, some users may experience:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Digestive issues (bloating, gas, diarrhea)</li>
                <li>Possible allergic reactions to certain ingredients</li>
              </ul>
              <div className="bg-red-50 p-4 rounded-lg mt-4">
                <p className="text-red-700 font-semibold">Important Notice:</p>
                <p className="mt-2">Consult a healthcare professional before starting Liv Pure, especially if you:</p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Have pre-existing health conditions</li>
                  <li>Are taking other medications</li>
                  <li>Are pregnant or nursing</li>
                </ul>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="purchase" className="bg-white rounded-lg border border-gray-200">
          <AccordionTrigger className="px-6 hover:no-underline hover:bg-gray-50">
            <span className="text-left">Where can I purchase Liv Pure and what is the cost?</span>
          </AccordionTrigger>
          <AccordionContent className="px-6 pt-2 pb-6">
            <div className="prose prose-blue max-w-none">
              <p>Liv Pure is primarily available through:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Official website (recommended)</li>
                <li>Select authorized online retailers</li>
              </ul>
              <div className="bg-yellow-50 p-4 rounded-lg mt-4">
                <p className="text-yellow-800 font-semibold">Warning:</p>
                <p className="mt-2">Be cautious of unauthorized resellers and potential counterfeit products. Always purchase from official sources to ensure authenticity and warranty coverage.</p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="reviews" className="bg-white rounded-lg border border-gray-200">
          <AccordionTrigger className="px-6 hover:no-underline hover:bg-gray-50">
            <span className="text-left">What do user reviews and testimonials say?</span>
          </AccordionTrigger>
          <AccordionContent className="px-6 pt-2 pb-6">
            <div className="prose prose-blue max-w-none">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="text-green-700 font-semibold">Positive Feedback</h4>
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>Increased energy levels</li>
                    <li>Some weight loss reported</li>
                    <li>Appreciation for natural ingredients</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="text-gray-700 font-semibold">Mixed/Negative Feedback</h4>
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>No significant weight loss</li>
                    <li>Varied individual results</li>
                    <li>Concerns about scientific evidence</li>
                  </ul>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="lifestyle" className="bg-white rounded-lg border border-gray-200">
          <AccordionTrigger className="px-6 hover:no-underline hover:bg-gray-50">
            <span className="text-left">Is Liv Pure a magic solution for weight loss?</span>
          </AccordionTrigger>
          <AccordionContent className="px-6 pt-2 pb-6">
            <div className="prose prose-blue max-w-none">
              <p className="font-semibold text-[#008BC7]">Liv Pure is not a magic bullet for weight loss.</p>
              <p className="mt-4">For best results, combine with:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Balanced, healthy diet</li>
                <li>Regular physical activity</li>
                <li>Proper stress management</li>
                <li>Adequate sleep</li>
              </ul>
              <p className="mt-4">Consider it as a supplement to, not a replacement for, a healthy lifestyle.</p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="red-flags" className="bg-white rounded-lg border border-gray-200">
          <AccordionTrigger className="px-6 hover:no-underline hover:bg-gray-50">
            <span className="text-left">What are the key red flags and concerns to be aware of?</span>
          </AccordionTrigger>
          <AccordionContent className="px-6 pt-2 pb-6">
            <div className="prose prose-blue max-w-none">
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="text-red-700 font-semibold">Key Concerns:</h4>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Limited scientific evidence for specific formulation</li>
                  <li>Potential for counterfeit products</li>
                  <li>Aggressive marketing tactics</li>
                  <li>Unrealistic weight loss claims</li>
                  <li>Limited transparency in manufacturing process</li>
                </ul>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  )
}

