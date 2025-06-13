import Image from "next/image"
import Link from "next/link"

export default function OffsetPhotoGrid() {
  return (
    <div className="min-h-screen bg-sky-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Main Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 h-screen md:h-[80vh]">
          {/* First Photo - Top Left */}
          <div className="md:col-span-5 md:row-span-1 relative">
            <div className="relative h-64 md:h-80 w-full transform md:-rotate-1 hover:rotate-0 transition-transform duration-300">
              <Link href="/fashion">
                <Image
                  src="/work/placeholder.svg?height=400&width=600"
                  alt="Forest portrait"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
                </Link>
            </div>
          </div>

          {/* Second Photo - Top Right */}
          <div className="md:col-span-4 md:col-start-7 md:row-span-1 relative">
            <div className="relative h-64 md:h-72 w-full transform md:rotate-2 hover:rotate-0 transition-transform duration-300 md:mt-8">
              <Link href="/personal">
                <Image
                  src="/work/placeholder.svg?height=400&width=500"
                  alt="Sneakers and jersey"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </Link>
            </div>
          </div>

          {/* Third Photo - Bottom Center */}
          <div className="md:col-span-6 md:col-start-4 md:row-start-2 relative">
            <div className="relative h-64 md:h-96 w-full transform md:rotate-1 hover:rotate-0 transition-transform duration-300">
              <Link href="/music">
                <Image
                  src="/work/placeholder.svg?height=500&width=700"
                  alt="Abstract art"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </Link>
            </div>
          </div>

          {/* Fourth Photo - Small accent */}
          <div className="md:col-span-3 md:col-start-1 md:row-start-2 relative hidden md:block">
            <div className="relative h-48 w-full transform -rotate-3 hover:rotate-0 transition-transform duration-300 mt-12">
              <Link href="/music">
                <Image
                  src="/work/placeholder.svg?height=300&width=400"
                  alt="Detail shot"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </Link>
              </div>
          </div>

          {/* Fifth Photo - Right accent */}
          <div className="md:col-span-2 md:col-start-11 md:row-start-2 relative hidden md:block">
            <div className="relative h-40 w-full transform rotate-3 hover:rotate-0 transition-transform duration-300 mt-20">
              <Link href="/personal">
                <Image
                  src="/work/placeholder.svg?height=250&width=300"
                  alt="Accent photo"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Alternative Layout */}
        <div className="md:hidden space-y-6 mt-8">
          <div className="relative h-48 transform -rotate-1">
            <Link href="/fashion">
              <Image
                src="/work/placeholder.svg?height=300&width=400"
                alt="Mobile photo 1"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </Link>
          </div>
          <div className="relative h-56 transform rotate-2 ml-8">
            <Link href="/personal">
              <Image
                src="/work/placeholder.svg?height=350&width=450"
                alt="Mobile photo 2"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </Link>
          </div>
        </div>

        {/* Floating Elements for Extra Visual Interest */}
        <div className="absolute top-20 right-10 w-4 h-4 bg-white rounded-full opacity-60 hidden lg:block"></div>
        <div className="absolute bottom-32 left-16 w-6 h-6 bg-white rounded-full opacity-40 hidden lg:block"></div>
        <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-white rounded-full opacity-80 hidden lg:block"></div>
      </div>
    </div>
  )
}
