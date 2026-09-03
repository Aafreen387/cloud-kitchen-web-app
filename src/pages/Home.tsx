import { Link } from 'react-router-dom';
import {
  ChefHat,
  Clock,
  Truck,
  Leaf,
  Star,
  ArrowRight,
  Utensils,
  ShieldCheck,
  Phone,
  Mail,
  MapPin,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const menuItems = [
  {
    name: 'Signature Burger',
    desc: 'Juicy beef patty, melted cheddar, fresh lettuce, house sauce',
    price: '$12.99',
    image: 'https://images.pexels.com/photos/5041475/pexels-photo-5041475.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
  },
  {
    name: 'Wood-Fired Pizza',
    desc: 'Artisanal mozzarella, pepperoni, fresh basil, wood-fired crust',
    price: '$15.99',
    image: 'https://images.pexels.com/photos/28866020/pexels-photo-28866020.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
  },
  {
    name: 'Asian Noodle Bowl',
    desc: 'Vietnamese noodle soup with fresh herbs and tofu',
    price: '$10.99',
    image: 'https://images.pexels.com/photos/36769199/pexels-photo-36769199.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
  },
  {
    name: 'Garden Fresh Salad',
    desc: 'Beetroot, quinoa, mixed greens, microgreens',
    price: '$8.99',
    image: 'https://images.pexels.com/photos/6895775/pexels-photo-6895775.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
  },
];

const features = [
  { icon: Clock, title: '30-Min Delivery', desc: 'Hot meals at your door in 30 minutes or less.' },
  { icon: Leaf, title: 'Fresh Ingredients', desc: 'Locally sourced produce, prepared daily.' },
  { icon: ShieldCheck, title: 'Quality Assured', desc: 'Every dish meets our chef-grade standards.' },
  { icon: Truck, title: 'Free Delivery', desc: 'No delivery fee on orders over $25.' },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-950">
      <Navbar />

      {/* Section 1: Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/4393659/pexels-photo-4393659.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920"
            alt="Cloud kitchen"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/85 to-stone-950/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-sm font-medium mb-6 animate-fade-in">
              <Star className="w-4 h-4 fill-amber-400" />
              Rated #1 Cloud Kitchen in the City
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
              Restaurant-Quality Meals,
              <span className="block bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                Delivered Fast.
              </span>
            </h1>
            <p className="text-lg text-stone-300 leading-relaxed mb-8 max-w-xl">
              From our kitchen to your table. Order from a menu crafted by professional chefs and
              enjoy freshly prepared meals delivered in 30 minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#menu"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-amber-400 text-stone-900 font-bold hover:bg-amber-300 transition-all hover:scale-105 shadow-lg shadow-amber-500/30"
              >
                <Utensils className="w-5 h-5" />
                View Our Menu
              </a>
              <Link
                to="/register"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-stone-600 text-white font-bold hover:bg-stone-800 transition-all"
              >
                Create Account
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="flex items-center gap-8 mt-12">
              {[
                { value: '30min', label: 'Avg Delivery' },
                { value: '50+', label: 'Menu Items' },
                { value: '10k+', label: 'Happy Customers' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-bold text-amber-400">{stat.value}</div>
                  <div className="text-sm text-stone-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-stone-500 flex items-start justify-center p-1.5">
            <div className="w-1 h-2 rounded-full bg-amber-400" />
          </div>
        </div>
      </section>

      {/* Section 2: Features */}
      <section className="py-20 bg-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group p-6 rounded-2xl bg-stone-800/50 border border-stone-700 hover:border-amber-400/50 transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400/20 to-orange-500/20 flex items-center justify-center mb-4 group-hover:from-amber-400 group-hover:to-orange-500 transition-all">
                  <feature.icon className="w-6 h-6 text-amber-400 group-hover:text-stone-900 transition-colors" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-stone-400 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Menu */}
      <section id="menu" className="py-24 bg-stone-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-amber-400 text-sm font-semibold uppercase tracking-wider mb-3">
              <ChefHat className="w-4 h-4" />
              Our Specialties
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
              Crafted by Chefs, Loved by You
            </h2>
            <p className="text-stone-400 max-w-2xl mx-auto text-lg">
              Every dish is prepared fresh to order using premium ingredients and time-tested recipes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {menuItems.map((item) => (
              <div
                key={item.name}
                className="group rounded-2xl overflow-hidden bg-stone-900 border border-stone-800 hover:border-amber-400/40 transition-all hover:-translate-y-2"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-white font-semibold text-lg mb-1">{item.name}</h3>
                  <p className="text-stone-400 text-sm leading-relaxed mb-3">{item.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-amber-400">{item.price}</span>
                    <Link
                      to="/register"
                      className="px-4 py-2 rounded-lg bg-stone-800 text-stone-200 text-sm font-medium hover:bg-amber-400 hover:text-stone-900 transition-colors"
                    >
                      Order Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: About */}
      <section id="about" className="py-24 bg-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/4253300/pexels-photo-4253300.jpeg?auto=compress&cs=tinysrgb&h=700&w=900"
                alt="Our chefs at work"
                className="rounded-2xl w-full object-cover shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-amber-400 text-stone-900 p-6 rounded-2xl shadow-xl hidden sm:block">
                <div className="text-4xl font-bold">15+</div>
                <div className="text-sm font-medium">Years of Culinary Excellence</div>
              </div>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 text-amber-400 text-sm font-semibold uppercase tracking-wider mb-3">
                <ChefHat className="w-4 h-4" />
                About CloudKitchen
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-6">
                A Kitchen Built for the Modern World
              </h2>
              <p className="text-stone-300 leading-relaxed mb-6">
                We reimagined the restaurant experience for the digital age. No dining room, no
                wait times — just a dedicated kitchen staffed by professional chefs, focused
                entirely on crafting exceptional meals for delivery.
              </p>
              <p className="text-stone-400 leading-relaxed mb-8">
                Every order is prepared fresh, packed with care, and dispatched immediately to
                ensure it arrives at your door tasting exactly as our chefs intended.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  'Professional chefs',
                  'Locally sourced ingredients',
                  'Eco-friendly packaging',
                  'Real-time order tracking',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-amber-400/20 flex items-center justify-center shrink-0">
                      <div className="w-2 h-2 rounded-full bg-amber-400" />
                    </div>
                    <span className="text-stone-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/register"
                className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-xl bg-amber-400 text-stone-900 font-bold hover:bg-amber-300 transition-colors"
              >
                Join CloudKitchen
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Contact / CTA */}
      <section id="contact" className="py-24 bg-stone-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-amber-400 text-sm font-semibold uppercase tracking-wider mb-3">
              <Phone className="w-4 h-4" />
              Get in Touch
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
              Ready to Order?
            </h2>
            <p className="text-stone-400 max-w-2xl mx-auto text-lg">
              Create an account to start ordering, or reach out with any questions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="p-8 rounded-2xl bg-stone-900 border border-stone-800 text-center hover:border-amber-400/40 transition-colors">
              <div className="w-14 h-14 rounded-xl bg-amber-400/10 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-7 h-7 text-amber-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">Visit Us</h3>
              <p className="text-stone-400 text-sm">123 Kitchen Street<br />Food District, City 45678</p>
            </div>
            <div className="p-8 rounded-2xl bg-stone-900 border border-stone-800 text-center hover:border-amber-400/40 transition-colors">
              <div className="w-14 h-14 rounded-xl bg-amber-400/10 flex items-center justify-center mx-auto mb-4">
                <Phone className="w-7 h-7 text-amber-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">Call Us</h3>
              <p className="text-stone-400 text-sm">+1 (555) 123-4567<br />Mon-Sun: 10am - 11pm</p>
            </div>
            <div className="p-8 rounded-2xl bg-stone-900 border border-stone-800 text-center hover:border-amber-400/40 transition-colors">
              <div className="w-14 h-14 rounded-xl bg-amber-400/10 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-7 h-7 text-amber-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">Email Us</h3>
              <p className="text-stone-400 text-sm">hello@cloudkitchen.com<br />We reply within 24h</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/register"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 text-stone-900 font-bold hover:scale-105 transition-transform shadow-lg shadow-amber-500/30"
            >
              Create Your Free Account
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
