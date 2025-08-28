import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="relative isolate bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
        {/* Background gradient shape */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="mx-auto aspect-[1155/678] w-[288.75px] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20"
          />
        </div>

        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold text-indigo-400">Pricing</h2>
          <p className="mt-2 text-5xl font-semibold tracking-tight text-white sm:text-6xl">
            Choose the right plan for you
          </p>
        </div>

        <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-gray-400 sm:text-xl">
          Choose an affordable plan that’s packed with the best features for
          engaging your audience, creating customer loyalty, and driving sales.
        </p>

        {/* Pricing Cards */}
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-y-6 sm:mt-20 lg:max-w-4xl lg:grid-cols-2">
          {/* Hobby Plan */}
          <div className="rounded-3xl bg-white/5 p-8 ring-1 ring-white/10 sm:mx-8 sm:p-10 lg:mx-0">
            <h3 id="tier-hobby" className="text-base font-semibold text-indigo-400">
              Hobby
            </h3>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span className="text-5xl font-semibold tracking-tight text-white">
                $29
              </span>
              <span className="text-base text-gray-400">/month</span>
            </p>
            <p className="mt-6 text-base text-gray-300">
              The perfect plan if you're just getting started with our product.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-gray-300">
              <li className="flex gap-x-3">✔ 25 products</li>
              <li className="flex gap-x-3">✔ Up to 10,000 subscribers</li>
              <li className="flex gap-x-3">✔ Advanced analytics</li>
              <li className="flex gap-x-3">✔ 24-hour support response time</li>
            </ul>
            <a
              href="#"
              aria-describedby="tier-hobby"
              className="mt-8 block rounded-md bg-white/10 px-3.5 py-2.5 text-center text-sm font-semibold text-white hover:bg-white/20 sm:mt-10"
            >
              Get started today
            </a>
          </div>

          {/* Enterprise Plan */}
          <div className="relative rounded-3xl bg-gray-800 p-8 ring-1 ring-white/10 sm:p-10">
            <h3
              id="tier-enterprise"
              className="text-base font-semibold text-indigo-400"
            >
              Enterprise
            </h3>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span className="text-5xl font-semibold tracking-tight text-white">
                $99
              </span>
              <span className="text-base text-gray-400">/month</span>
            </p>
            <p className="mt-6 text-base text-gray-300">
              Dedicated support and infrastructure for your company.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-gray-300">
              <li className="flex gap-x-3">✔ Unlimited products</li>
              <li className="flex gap-x-3">✔ Unlimited subscribers</li>
              <li className="flex gap-x-3">✔ Advanced analytics</li>
              <li className="flex gap-x-3">✔ Dedicated support representative</li>
              <li className="flex gap-x-3">✔ Marketing automations</li>
              <li className="flex gap-x-3">✔ Custom integrations</li>
            </ul>
            <a
              href="#"
              aria-describedby="tier-enterprise"
              className="mt-8 block rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white hover:bg-indigo-400 sm:mt-10"
            >
              Get started today
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
