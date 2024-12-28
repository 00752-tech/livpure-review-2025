import { Alert, AlertDescription } from "@/components/ui/alert"
import { Card, CardContent } from "@/components/ui/card"
import { Info, AlertTriangle, CheckCircle, XCircle } from 'lucide-react'

export function DetailedReview() {
  return (
    <section className="max-w-4xl mx-auto py-12">
      <h2 className="text-3xl font-bold text-center text-[#008BC7] mb-8">
        Comprehensive Liv Pure Analysis: What Does The Research Say?
      </h2>

      <Alert className="mb-8 border-[#FFD700] bg-amber-50">
        <Info className="h-4 w-4 text-[#008BC7]" />
        <AlertDescription>
          This analysis is based on multiple sources including user reviews, available research, and expert opinions. Always consult healthcare professionals before starting any supplement regimen.
        </AlertDescription>
      </Alert>

      <div className="space-y-8">
        {/* Key Findings Section */}
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-[#008BC7] mb-4">Key Research Findings</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Claims Analysis</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
                    <span>Primary claims focus on liver function and weight loss</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
                    <span>Mechanisms of action described in general terms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                    <span>Limited peer-reviewed research on specific formulation</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Evidence Quality</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span>Some ingredients have individual research support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
                    <span>Reliance on user testimonials and reviews</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                    <span>Lack of independent clinical trials</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Marketing Analysis */}
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-[#008BC7] mb-4">Marketing Analysis</h3>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Marketing Tactics Observed</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Heavy emphasis on time-limited offers</li>
                  <li>Use of dramatic before-and-after imagery</li>
                  <li>Multiple affiliate marketing websites</li>
                  <li>Aggressive promotional language</li>
                </ul>
              </div>
              <Alert className="bg-yellow-50 border-yellow-200">
                <AlertTriangle className="h-4 w-4 text-yellow-600" />
                <AlertDescription>
                  Consumers should be cautious of marketing claims and focus on verified scientific evidence when evaluating supplements.
                </AlertDescription>
              </Alert>
            </div>
          </CardContent>
        </Card>

        {/* Scientific Evidence */}
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-[#008BC7] mb-4">Scientific Evidence Overview</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Supported Claims</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Natural ingredients with known properties</li>
                  <li>Some ingredients support liver health</li>
                  <li>Basic safety profile of ingredients</li>
                </ul>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Unsupported Claims</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>"Rapid" fat burning promises</li>
                  <li>Specific weight loss guarantees</li>
                  <li>Universal effectiveness claims</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* User Experience Analysis */}
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-[#008BC7] mb-4">User Experience Analysis</h3>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Reported Benefits</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Some users report weight loss</li>
                    <li>Increased energy levels noted</li>
                    <li>General wellness improvements</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Common Concerns</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Results vary significantly</li>
                    <li>Effectiveness timeline unclear</li>
                    <li>Cost considerations</li>
                  </ul>
                </div>
              </div>
              <Alert className="bg-blue-50 border-blue-200">
                <Info className="h-4 w-4 text-blue-600" />
                <AlertDescription>
                  Individual results may vary. Success appears to be highest when combined with proper diet and exercise.
                </AlertDescription>
              </Alert>
            </div>
          </CardContent>
        </Card>

        {/* Final Assessment */}
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-[#008BC7] mb-4">Final Assessment</h3>
            <div className="space-y-4">
              <p className="text-gray-700">
                Based on our comprehensive analysis, Liv Pure presents a mixed picture. While some users report positive experiences, the lack of robust scientific evidence and reliance on marketing tactics raises concerns. The supplement may offer some benefits when used as part of a broader health strategy, but claims of dramatic or guaranteed results should be viewed skeptically.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Recommendations</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Consult healthcare professionals before use</li>
                  <li>Maintain realistic expectations</li>
                  <li>Focus on comprehensive lifestyle changes</li>
                  <li>Monitor personal results carefully</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

