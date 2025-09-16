'use client'

export default function Page() {
  const nav = [
    { href: '#how', label: 'How it works' },
    { href: '#programs', label: 'Programs' },
    { href: '#impact', label: 'Impact' },
    { href: '#trainers', label: 'For Trainers' },
  ]

  const stats = [
    { k: '5M+', v: 'Indians die from heart disease every year' },
    { k: '77M+', v: 'Indians live with diabetes; 1M+ new cases yearly' },
    { k: '275M+', v: 'Indians have high cholesterol or blood pressure' },
  ]

  const services = [
    'Fat Loss', 'Muscle Building & Strength', 'Yoga', 'Physiotherapy',
    'Home Workouts (HIIT)', 'Running Coaching', 'Calisthenics',
    'Dance Fitness', 'Pregnancy/Postpartum Fitness', 'PCOS/PCOD Weight Loss',
    'Female Muscle Building', 'Boxing/Kickboxing', 'Diet Consultancy',
    'Senior Mobility/Stretch', 'Kids Functional Training'
  ]

  const trainerBenefits = [
    { t: 'Flexible Hours', d: 'You choose when and where to coach.' },
    { t: 'Great Payouts', d: 'Transparent per-session rates, instant payouts.' },
    { t: 'We Bring Clients', d: 'You focus on coaching, we handle discovery & ops.' },
    { t: 'Workflow Tools', d: 'Scheduling, chat, ratings, and receipts in one place.' },
  ]

  const testimonials = [
    { name: 'Rahul', text: 'Booked a trainer to my society gym—no commute, super convenient.' },
    { name: 'Meera', text: 'Post-partum sessions were tailored to my recovery and energy.' },
    { name: 'Arjun', text: 'Finally consistent because the trainer comes to my home.' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F7FAF6] via-[#F3F8EE] to-[#EFF6E9] text-slate-800">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-lime-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-lime-400 to-lime-500" />
            <span className="font-semibold tracking-tight">SNAP-N-FIT</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-slate-900">{n.label}</a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a href="#waitlist" className="rounded-xl border border-lime-300 bg-white px-4 py-2 text-sm hover:bg-lime-50">Join waitlist</a>
            <a href="#trainers" className="rounded-xl bg-lime-500 px-4 py-2 text-sm font-medium text-white hover:bg-lime-600">Become a trainer</a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute -top-24 right-[-10%] h-[28rem] w-[28rem] rounded-full bg-lime-300/20 blur-3xl" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              Fitness at your <span className="bg-clip-text text-transparent bg-gradient-to-r from-lime-500 to-emerald-500">Snap</span>
            </h1>
            <p className="mt-3 text-lg text-slate-700">Book certified personal trainers for workouts, on your schedule, at your comfort.</p>

            {/* Services grid */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {services.map((s) => (
                <div key={s} className="rounded-xl bg-white border border-lime-200 px-3 py-2 text-sm text-center shadow-sm">{s}</div>
              ))}
            </div>

            {/* Lead form */}
            <form id="waitlist" className="mt-6 flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
              <input className="flex-1 rounded-xl bg-white border border-lime-300 px-4 py-3 placeholder:text-slate-400" placeholder="Your goal (e.g., weight loss)" />
              <input className="w-full sm:w-52 rounded-xl bg-white border border-lime-300 px-4 py-3 placeholder:text-slate-400" placeholder="City / PIN" />
              <button className="rounded-xl px-5 py-3 font-medium bg-lime-500 text-white shadow hover:bg-lime-600">Find a trainer</button>
            </form>
          </div>

          {/* Hero media placeholder */}
          <div className="relative">
            <div className="rounded-3xl border border-lime-200 bg-white p-2 shadow-xl">
              <div className="aspect-[4/3] w-full rounded-2xl bg-lime-50 grid place-content-center">
                <p className="text-slate-600">Hero Image Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6">
          {stats.map((s) => (
            <div key={s.k} className="rounded-2xl bg-white border border-lime-200 p-6 shadow-sm">
              <div className="text-2xl font-semibold text-lime-600">{s.k}</div>
              <p className="mt-1 text-sm text-slate-700">{s.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Problem & Solution */}
      <section id="impact" className="bg-[#E8F3D9] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="rounded-2xl bg-white border border-lime-200 p-6 shadow-sm">
              <h3 className="font-semibold">The Problem</h3>
              <p className="mt-2 text-sm text-slate-700">Most people want to get fit but don’t know where to start. Gyms are intimidating, expensive, and time-consuming. Trainers struggle to find consistent clients.</p>
              <div className="mt-4 aspect-[4/3] w-full rounded-xl bg-lime-50 grid place-content-center text-slate-600">Problem Image Placeholder</div>
            </div>
            <div className="rounded-2xl bg-white border border-lime-200 p-6 shadow-sm">
              <h3 className="font-semibold">Our Solution</h3>
              <p className="mt-2 text-sm text-slate-700">SnapNfit connects people who want to transform with trainers who can transform them—in the fastest, simplest, and most personalised way possible.</p>
              <div className="mt-4 aspect-[4/3] w-full rounded-xl bg-lime-50 grid place-content-center text-slate-600">Solution Image Placeholder</div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs grid */}
      <section id="programs" className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold">Programs we offer</h2>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((p) => (
              <div key={p} className="rounded-2xl border border-lime-200 bg-white p-4 shadow-sm">
                <div className="aspect-[4/3] w-full rounded-xl bg-lime-50 grid place-content-center text-slate-600">Program Image Placeholder</div>
                <div className="mt-3 flex items-center justify-between">
                  <p className="font-medium">{p}</p>
                  <button className="text-sm text-lime-700 hover:underline">Explore</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trainer CTA */}
      <section id="trainers" className="bg-[#E8F3D9] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold">Turn your passion into impact and income</h2>
              <p className="mt-2 text-slate-700">Join SnapNfit and get verified clients, secure payments, and the flexibility you deserve.</p>
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                {trainerBenefits.map((b) => (
                  <div key={b.t} className="rounded-xl bg-white border border-lime-200 p-4">
                    <p className="font-medium">{b.t}</p>
                    <p className="text-sm text-slate-700 mt-1">{b.d}</p>
                  </div>
                ))}
              </div>
              <a href="#become" className="mt-6 inline-flex items-center rounded-xl bg-lime-600 px-5 py-3 text-white font-medium hover:bg-lime-700">Apply as trainer</a>
            </div>
            <div className="rounded-3xl border border-lime-200 bg-white p-2 shadow-xl">
              <div className="aspect-[4/3] w-full rounded-2xl bg-lime-50 grid place-content-center text-slate-600">Trainer Image Placeholder</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold">What our users say</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="rounded-2xl border border-lime-200 bg-white p-6 shadow-sm">
                <div className="aspect-video w-full rounded-xl bg-lime-50 mb-4 grid place-content-center text-slate-600">Testimonial Image Placeholder</div>
                <p className="text-sm text-slate-700">“{t.text}”</p>
                <p className="mt-3 text-sm font-medium">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-lime-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-4 gap-8 text-sm">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-lime-400 to-lime-500" />
              <span className="font-semibold">SnapNfit</span>
            </div>
            <p className="mt-3 text-slate-600">Fitness at your snap—on your schedule, at your place.</p>
          </div>
          <div>
            <p className="font-medium">Company</p>
            <ul className="mt-2 space-y-2 text-slate-600">
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div>
            <p className="font-medium">Legal</p>
            <ul className="mt-2 space-y-2 text-slate-600">
              <li><a href="#" className="hover:underline">Privacy</a></li>
              <li><a href="#" className="hover:underline">Terms</a></li>
            </ul>
          </div>
          <div>
            <p className="font-medium">Get the app</p>
            <div className="mt-3 grid grid-cols-2 gap-2">
              <div className="h-10 rounded-lg bg-slate-900/90 grid place-content-center text-white text-xs">Play Store</div>
              <div className="h-10 rounded-lg bg-slate-900/90 grid place-content-center text-white text-xs">App Store</div>
            </div>
          </div>
        </div>
        <div className="border-t border-lime-200 py-4 text-center text-xs text-slate-600">© {new Date().getFullYear()} SnapNfit. All rights reserved.</div>
      </footer>
    </div>
  )
}
