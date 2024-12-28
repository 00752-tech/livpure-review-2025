import { ScrollText, Clock } from 'lucide-react'

interface TranscriptSegment {
  time: string
  text: string
}

const transcript: TranscriptSegment[] = [
  {
    time: "00:00:00",
    text: "Hi good afternoon! What is going on, how are you guys doing today? I'm actually really happy that you're in this video because if you know you are overweight and you are trying to overcome that - like you want to stop being overweight and you want to become so much more healthier - that's awesome because today I'm here to present to you Liv Pure, which is this liver purification complex that you know... well, I'll talk more about that later on. But let me just tell you, stay right there because I'm going to be..."
  },
  {
    time: "00:00:29",
    text: "showing you how Liv Pure will help you to lose weight, become so much more healthier, and better yet, you can say goodbye to going to the gym every day or even prepping up diets - like no more having to do all that job, you know, all that work. So if you would like to learn more about Liv Pure before you purchase it, even before you begin using it, that's awesome, just don't go away anywhere just yet, okay? If you've realized that I left a link below this video that is Liv Pure's official web page if you want to..."
  },
  {
    time: "00:01:00",
    text: "purchase Liv Pure today - like that is the safest place on the internet you should be going to get it. So there you can like make a safe and secure purchase, receive the original Liv Pure, and also get to know so much more about it, all right? So make sure you pop by to this link afterwards. But guys, as I was saying, what makes Liv Pure really cool is that it's this liver purification complex, right? So the ingredients that make up Liv Pure will actually help you to purify and detoxify your liver first..."
  },
  {
    time: "00:01:30",
    text: "because some scientists recently discovered that our liver plays a really big role when it comes to helping out our body and losing weight. So if your liver is not functioning well, then of course your body is just storing fats rather than melting them off. So once Liv Pure is, you know, in your body system and it's detoxifying your liver, getting it to function properly, you know, eliminating toxins out of it, eliminating bad things that are just sitting there and get it to function properly, your body starts to function properly and starts..."
  },
  {
    time: "00:02:02",
    text: "to melt down fats. So this purification complex is made up of only natural ingredients. Liv Pure contains herbal extracts, plants, vitamins, minerals - you can expect the best natural ingredients ever. This is like a really great formula that doesn't have side effects, GMOs, stimulants, it's gluten-free so it's safe and suitable for every single human being out there to use. Liv Pure is already helping out so many men and women all over the world to lose weight, which is amazing because it's natural..."
  },
  {
    time: "00:02:37",
    text: "and it's good for you. So Liv Pure will also help you to get your body's metabolism boosted up and fired up so you're going to be losing up to a lot of weight. If you jump on a scale every day, you're going to start to realize how your body is actually letting go, letting loose of those fat stores. But hey, there are actually some other really amazing benefits that I really want to point out - it is that Liv Pure helps you out with your skin, with your hair, it helps you with your immune system and provides..."
  },
  {
    time: "00:03:07",
    text: "your body with a lot more energy levels. So it's like you are asking - you're getting so much more than you truly asked for, you know? But of course, in order to get these results, you have to remember to take Liv Pure very seriously. This is a natural supplement that needs to be taken every single day throughout three or six months of usage without interruption. So just remember and be patient, all right? Because Liv Pure won't give you results overnight - you have to remember to use it constantly, continuously to get results..."
  },
  {
    time: "00:03:39",
    text: "so make sure that is very, very clear for you guys, all right? And also you do have a money back guarantee in case Liv Pure does not work out for you - simply request your money back by talking to customer service on their official web page. Now if you're ready to lose weight and become so much more healthier, visit this link right here. If you have questions or doubts, feel free to leave them in the comments below for me to help you out, all right? Have a magnificent day guys, thanks for watching, bye!"
  }
]

export function TranscriptSection() {
  return (
    <section id="transcript" className="bg-gray-50 py-16">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center justify-center gap-2 bg-[#008BC7] text-white px-4 py-2 rounded-full mb-4">
            <ScrollText className="h-5 w-5" />
            <span className="font-semibold">Video Transcript</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Liv Pure Review 2025 - Full Video Transcript
          </h2>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-6">
            <div className="space-y-6">
              {transcript.map((segment, index) => (
                <div key={index} className="group">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 pt-1">
                      <div className="inline-flex items-center gap-1 bg-gray-100 px-2 py-1 rounded text-sm text-gray-600">
                        <Clock className="h-4 w-4" />
                        <span className="font-mono">{segment.time}</span>
                      </div>
                    </div>
                    <div className="flex-grow">
                      <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors">
                        {segment.text}
                      </p>
                    </div>
                  </div>
                  {index < transcript.length - 1 && (
                    <div className="border-b border-gray-100 mt-6" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          <p>This transcript has been formatted and edited for clarity while maintaining the original content.</p>
        </div>
      </div>
    </section>
  )
}

