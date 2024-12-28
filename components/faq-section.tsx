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

        {/* Add more AccordionItem components for other FAQ items */}
      </Accordion>
    </section>
  )
}
