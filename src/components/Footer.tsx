import { ChefHat, Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                <ChefHat className="w-6 h-6 text-stone-900" strokeWidth={2.5} />
              </div>
              <span className="text-xl font-bold text-white">
                Cloud<span className="text-amber-400">Kitchen</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Freshly prepared meals delivered to your door. Quality you can taste, speed you can count on.
            </p>
            <div className="flex gap-3 mt-6">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-stone-800 flex items-center justify-center hover:bg-amber-400 hover:text-stone-900 transition-colors"
                  aria-label="Social link"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="/" className="hover:text-amber-400 transition-colors">Home</a></li>
              <li><a href="/#menu" className="hover:text-amber-400 transition-colors">Menu</a></li>
              <li><a href="/#about" className="hover:text-amber-400 transition-colors">About Us</a></li>
              <li><a href="/#contact" className="hover:text-amber-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Account */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Account</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="/login" className="hover:text-amber-400 transition-colors">Login</a></li>
              <li><a href="/register" className="hover:text-amber-400 transition-colors">Create Account</a></li>
              <li><a href="/dashboard" className="hover:text-amber-400 transition-colors">My Dashboard</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Get in Touch</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-amber-400 shrink-0" />
                <span>123 Kitchen Street, Food District, City 45678</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>hello@cloudkitchen.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm">&copy; 2026 CloudKitchen. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
