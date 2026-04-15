import { useState } from "react";
import {
  ShoppingCart, Search, Star, MapPin, Calendar, Heart, Users, TrendingUp,
  ArrowRight, Shield, Zap, Award, Clock, CheckCircle, ChevronRight,
  BarChart3, Globe, Layers, Eye, Play, MessageSquare, FileText, Settings,
  Bell, Lock, CreditCard, Package, Truck, Filter, Phone, Mail, Menu, X,
  ChevronDown, ArrowUp, Instagram, Twitter, Facebook, Linkedin, Check,
  Home, User, LogIn, UserPlus, Minus, Plus, MapPinIcon, Briefcase
} from "lucide-react";

/* ─────────────────────────────────────────────────────────────────────────
   Shared Modal Shell
   ───────────────────────────────────────────────────────────────────────── */
const Modal = ({ open, onClose, children }: { open: boolean; onClose: () => void; children: React.ReactNode }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative text-gray-900" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"><X className="w-5 h-5" /></button>
        {children}
      </div>
    </div>
  );
};

const DarkModal = ({ open, onClose, children }: { open: boolean; onClose: () => void; children: React.ReactNode }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4" onClick={onClose}>
      <div className="bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl max-w-md w-full p-6 relative text-white" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-300"><X className="w-5 h-5" /></button>
        {children}
      </div>
    </div>
  );
};

/* Shared form input */
const FormInput = ({ placeholder, type = "text" }: { placeholder: string; type?: string }) => (
  <input type={type} placeholder={placeholder} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 transition" />
);
const DarkFormInput = ({ placeholder, type = "text" }: { placeholder: string; type?: string }) => (
  <input type={type} placeholder={placeholder} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-sm text-gray-200 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 transition" />
);

/* Image placeholder with gradient */
const ImgPlaceholder = ({ className = "", gradient = "from-gray-200 to-gray-100" }: { className?: string; gradient?: string }) => (
  <div className={`bg-gradient-to-br ${gradient} flex items-center justify-center ${className}`}>
    <div className="w-8 h-8 rounded-full bg-white/30" />
  </div>
);

// ═══════════════════════════════════════════════════════════════════════
//  1. E-SHOP CASABLANCA — Full E-Commerce
// ═══════════════════════════════════════════════════════════════════════
export const EShopDemo = () => {
  const [modal, setModal] = useState<"" | "signin" | "cart">("");
  const [section, setSection] = useState("home");

  const scrollToSection = (id: string) => {
    setSection(id);
    document.getElementById(`eshop-${id}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="bg-white text-gray-900 font-sans text-sm relative">
      {/* Top bar */}
      <div className="bg-gray-900 text-gray-400 text-[10px] py-1.5 px-4">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <span>Free shipping on orders over $75 · Same-day delivery in Casablanca</span>
          <div className="hidden md:flex gap-4">
            <span className="flex items-center gap-1"><Phone className="w-2.5 h-2.5" /> +212 522-123456</span>
            <span>Track Order</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white border-b border-gray-100 px-4 py-3.5 sticky top-0 z-40">
        <div className="flex items-center justify-between max-w-5xl mx-auto">
          <h1 className="text-lg font-semibold tracking-tight">Casa<span className="text-amber-600">Shop</span></h1>
          <div className="hidden md:flex items-center bg-gray-50 rounded-lg px-3 py-2 flex-1 max-w-sm mx-8 border border-gray-100">
            <Search className="w-3.5 h-3.5 text-gray-400 mr-2" />
            <span className="text-xs text-gray-400">Search products, brands...</span>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => setModal("signin")} className="text-xs text-gray-600 font-medium hover:text-gray-900 transition">Sign In</button>
            <button onClick={() => setModal("cart")} className="relative">
              <ShoppingCart className="w-4.5 h-4.5 text-gray-700" />
              <span className="absolute -top-1.5 -right-1.5 bg-amber-600 text-white text-[8px] rounded-full w-3.5 h-3.5 flex items-center justify-center font-bold">3</span>
            </button>
          </div>
        </div>
      </header>

      {/* Nav */}
      <nav className="hidden md:block border-b border-gray-50 px-4 py-2.5 bg-white">
        <div className="max-w-5xl mx-auto flex gap-7 text-xs text-gray-500 font-medium">
          {[
            { id: "home", label: "New Arrivals", highlight: true },
            { id: "products", label: "Women" },
            { id: "products", label: "Men" },
            { id: "products", label: "Home & Living" },
            { id: "testimonials", label: "Reviews" },
            { id: "contact", label: "Contact" },
          ].map((link, i) => (
            <button key={i} onClick={() => scrollToSection(link.id)} className={`hover:text-gray-900 transition ${link.highlight ? "text-amber-600 font-semibold" : ""}`}>
              {link.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Hero */}
      <div id="eshop-home" className="bg-gradient-to-r from-amber-50 via-orange-50/50 to-amber-50 py-14 px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <span className="text-[10px] uppercase tracking-[0.2em] text-amber-700 font-semibold">Summer Collection 2025</span>
            <h2 className="text-2xl md:text-3xl font-semibold mt-3 leading-tight text-gray-900">Handcrafted with<br />Moroccan Artistry</h2>
            <p className="text-gray-500 mt-3 text-sm leading-relaxed max-w-md">Authentic pieces sourced from master artisans across Morocco. Each item carries a story of heritage and timeless craftsmanship.</p>
            <div className="flex gap-3 mt-6">
              <button onClick={() => scrollToSection("products")} className="bg-gray-900 text-white px-6 py-2.5 rounded-lg text-xs font-medium hover:bg-gray-800 transition">Shop Collection</button>
              <button onClick={() => scrollToSection("products")} className="border border-gray-300 text-gray-700 px-5 py-2.5 rounded-lg text-xs font-medium hover:border-gray-400 transition">View Lookbook</button>
            </div>
            <div className="flex gap-6 mt-7 text-[10px] text-gray-400">
              <span className="flex items-center gap-1.5"><Truck className="w-3.5 h-3.5" /> Free Shipping</span>
              <span className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5" /> Secure Payment</span>
              <span className="flex items-center gap-1.5"><Package className="w-3.5 h-3.5" /> 30-Day Returns</span>
            </div>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-3">
            {[
              { name: "Leather Goods", count: "124 items", gradient: "from-amber-100 to-amber-50" },
              { name: "Ceramics", count: "89 items", gradient: "from-teal-50 to-emerald-50" },
              { name: "Textiles", count: "156 items", gradient: "from-rose-50 to-pink-50" },
              { name: "Jewelry", count: "67 items", gradient: "from-indigo-50 to-blue-50" },
            ].map((cat, i) => (
              <div key={i} className={`bg-gradient-to-br ${cat.gradient} rounded-xl p-5 hover:shadow-md transition cursor-pointer border border-white/60`}>
                <ImgPlaceholder className="h-16 rounded-lg mb-3" gradient={cat.gradient} />
                <span className="text-xs font-semibold text-gray-800">{cat.name}</span>
                <span className="block text-[10px] text-gray-400 mt-0.5">{cat.count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Products */}
      <div id="eshop-products" className="max-w-5xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Bestsellers</h3>
            <p className="text-xs text-gray-400 mt-0.5">Our most loved products this season</p>
          </div>
          <div className="flex gap-2">
            <button className="px-3 py-1.5 border border-gray-200 rounded-lg text-[10px] text-gray-500 font-medium">Sort: Popular</button>
            <button className="p-1.5 border border-gray-200 rounded-lg"><Filter className="w-3 h-3 text-gray-400" /></button>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            { n: "Argan Oil Gift Set", p: "$34.99", op: "$49.99", rating: "4.8", reviews: "142", badge: "Sale", gradient: "from-amber-100 to-amber-50" },
            { n: "Handwoven Berber Rug", p: "$189.00", op: null, rating: "4.9", reviews: "89", badge: "Bestseller", gradient: "from-teal-50 to-emerald-50" },
            { n: "Ceramic Tea Set", p: "$28.50", op: "$35.00", rating: "4.7", reviews: "203", badge: "Sale", gradient: "from-rose-50 to-pink-50" },
            { n: "Brass Lantern", p: "$45.00", op: null, rating: "4.6", reviews: "67", badge: null, gradient: "from-purple-50 to-indigo-50" },
          ].map((item, i) => (
            <div key={i} className="group cursor-pointer">
              <div className={`aspect-square rounded-xl bg-gradient-to-br ${item.gradient} relative overflow-hidden border border-gray-100/50`}>
                <ImgPlaceholder className="absolute inset-0" gradient={item.gradient} />
                {item.badge && (
                  <span className={`absolute top-2.5 left-2.5 text-[9px] px-2 py-0.5 rounded-full font-medium ${item.badge === "Sale" ? "bg-red-500 text-white" : "bg-gray-900 text-white"}`}>{item.badge}</span>
                )}
                <button className="absolute top-2.5 right-2.5 w-7 h-7 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition shadow-sm">
                  <Heart className="w-3.5 h-3.5 text-gray-500" />
                </button>
                <button onClick={() => setModal("cart")} className="absolute bottom-2.5 left-2.5 right-2.5 bg-gray-900/90 text-white text-[10px] py-2 rounded-lg font-medium opacity-0 group-hover:opacity-100 transition text-center">Add to Cart</button>
              </div>
              <div className="mt-3">
                <div className="flex items-center gap-1 mb-1">
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                  <span className="text-[10px] text-gray-600 font-medium">{item.rating}</span>
                  <span className="text-[10px] text-gray-300">({item.reviews})</span>
                </div>
                <h4 className="text-xs font-medium text-gray-800">{item.n}</h4>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-sm font-semibold text-gray-900">{item.p}</span>
                  {item.op && <span className="text-[10px] text-gray-400 line-through">{item.op}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trust / Features */}
      <div className="bg-gray-50 py-12 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { icon: Truck, label: "Free Shipping", desc: "On orders over $75" },
            { icon: Shield, label: "Secure Payment", desc: "256-bit SSL encryption" },
            { icon: Package, label: "Easy Returns", desc: "30-day return policy" },
            { icon: Phone, label: "24/7 Support", desc: "Live chat & phone" },
          ].map((f, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center mb-3"><f.icon className="w-5 h-5 text-amber-600" /></div>
              <h4 className="text-xs font-semibold text-gray-800">{f.label}</h4>
              <p className="text-[10px] text-gray-400 mt-0.5">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div id="eshop-testimonials" className="max-w-5xl mx-auto px-4 py-12">
        <h3 className="text-lg font-semibold text-center mb-8">What Our Customers Say</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { name: "Sarah M.", text: "The quality is incredible. My berber rug is the centerpiece of my living room now.", rating: 5 },
            { name: "Ahmed K.", text: "Fast delivery to Casablanca and the ceramic set was even more beautiful than in photos.", rating: 5 },
            { name: "Emma L.", text: "I order from Paris regularly. Authentic Moroccan craftsmanship at fair prices.", rating: 4 },
          ].map((t, i) => (
            <div key={i} className="border border-gray-100 rounded-xl p-5">
              <div className="flex gap-0.5 mb-3">{[...Array(t.rating)].map((_, j) => <Star key={j} className="w-3 h-3 fill-amber-400 text-amber-400" />)}</div>
              <p className="text-xs text-gray-600 leading-relaxed">"{t.text}"</p>
              <span className="text-[10px] text-gray-400 mt-3 block font-medium">— {t.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-gray-900 text-white py-10 px-4">
        <div className="max-w-md mx-auto text-center">
          <h3 className="text-base font-semibold">Get 10% Off Your First Order</h3>
          <p className="text-xs text-gray-400 mt-2">Subscribe to our newsletter for exclusive deals and new arrivals.</p>
          <div className="flex gap-2 mt-4">
            <input placeholder="Your email address" className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-gray-500 focus:outline-none" />
            <button className="bg-amber-600 text-white px-5 py-2.5 rounded-lg text-xs font-semibold hover:bg-amber-500 transition">Subscribe</button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer id="eshop-contact" className="bg-gray-50 px-4 py-10 border-t border-gray-100">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-xs">
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">CasaShop</h4>
            <p className="text-gray-400 text-[10px] leading-relaxed">Authentic Moroccan craftsmanship, delivered worldwide since 2019.</p>
            <div className="flex gap-3 mt-3">
              <Instagram className="w-3.5 h-3.5 text-gray-400 hover:text-gray-600 cursor-pointer" />
              <Facebook className="w-3.5 h-3.5 text-gray-400 hover:text-gray-600 cursor-pointer" />
              <Twitter className="w-3.5 h-3.5 text-gray-400 hover:text-gray-600 cursor-pointer" />
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Shop</h4>
            {["New Arrivals", "Bestsellers", "Sale", "Gift Cards"].map(l => <p key={l} className="text-gray-400 mb-1.5 cursor-pointer hover:text-gray-600">{l}</p>)}
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Help</h4>
            {["Shipping Info", "Returns", "FAQ", "Size Guide"].map(l => <p key={l} className="text-gray-400 mb-1.5 cursor-pointer hover:text-gray-600">{l}</p>)}
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Contact</h4>
            <p className="text-gray-400 mb-1.5 flex items-center gap-1"><Mail className="w-3 h-3" /> hello@casashop.ma</p>
            <p className="text-gray-400 mb-1.5 flex items-center gap-1"><Phone className="w-3 h-3" /> +212 522-123456</p>
            <p className="text-gray-400 flex items-center gap-1"><MapPin className="w-3 h-3" /> Casablanca, Morocco</p>
          </div>
        </div>
        <div className="max-w-5xl mx-auto mt-8 pt-6 border-t border-gray-200 text-[10px] text-gray-300 text-center">
          © 2025 CasaShop. All rights reserved.
        </div>
      </footer>

      {/* Sign In Modal */}
      <Modal open={modal === "signin"} onClose={() => setModal("")}>
        <h3 className="text-lg font-semibold mb-1">Welcome back</h3>
        <p className="text-xs text-gray-400 mb-5">Sign in to your CasaShop account</p>
        <div className="space-y-3">
          <FormInput placeholder="Email address" type="email" />
          <FormInput placeholder="Password" type="password" />
          <button className="w-full bg-gray-900 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-gray-800 transition">Sign In</button>
          <div className="text-center text-[10px] text-gray-400">
            Don't have an account? <button onClick={() => setModal("signin")} className="text-amber-600 font-medium">Create one</button>
          </div>
        </div>
      </Modal>

      {/* Cart Modal */}
      <Modal open={modal === "cart"} onClose={() => setModal("")}>
        <h3 className="text-lg font-semibold mb-4">Your Cart (3)</h3>
        <div className="space-y-3 mb-5">
          {[
            { name: "Argan Oil Gift Set", price: "$34.99", qty: 1 },
            { name: "Ceramic Tea Set", price: "$28.50", qty: 2 },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-12 h-12 bg-amber-50 rounded-lg flex items-center justify-center"><Package className="w-5 h-5 text-amber-300" /></div>
              <div className="flex-1">
                <h4 className="text-xs font-medium">{item.name}</h4>
                <span className="text-xs text-gray-500">Qty: {item.qty}</span>
              </div>
              <span className="text-sm font-semibold">{item.price}</span>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center border-t border-gray-100 pt-4 mb-4">
          <span className="text-sm font-medium text-gray-500">Total</span>
          <span className="text-lg font-bold">$91.99</span>
        </div>
        <button className="w-full bg-amber-600 text-white py-2.5 rounded-lg text-sm font-semibold hover:bg-amber-500 transition">Checkout</button>
      </Modal>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════
//  2. RESTAURANT — Dar Salam
// ═══════════════════════════════════════════════════════════════════════
export const RestaurantDemo = () => {
  const [modal, setModal] = useState<"" | "reserve" | "login">("");
  const [menuTab, setMenuTab] = useState("mains");

  const scrollTo = (id: string) => {
    document.getElementById(`resto-${id}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="bg-stone-950 text-white font-sans text-sm relative">
      {/* Header */}
      <header className="px-4 py-4 border-b border-white/5 sticky top-0 z-40 bg-stone-950/95 backdrop-blur-sm">
        <div className="flex items-center justify-between max-w-5xl mx-auto">
          <div>
            <h1 className="text-lg font-semibold tracking-wide"><span className="text-amber-400">Dar</span> Salam</h1>
            <span className="text-[9px] text-stone-500 uppercase tracking-[0.2em]">Fine Mediterranean Dining</span>
          </div>
          <nav className="hidden md:flex gap-6 text-xs text-stone-400 font-medium">
            <button onClick={() => scrollTo("home")} className="text-white hover:text-amber-400 transition">Home</button>
            <button onClick={() => scrollTo("menu")} className="hover:text-amber-400 transition">Menu</button>
            <button onClick={() => setModal("reserve")} className="hover:text-amber-400 transition">Reservations</button>
            <button onClick={() => scrollTo("about")} className="hover:text-amber-400 transition">About</button>
            <button onClick={() => scrollTo("contact")} className="hover:text-amber-400 transition">Contact</button>
          </nav>
          <div className="flex items-center gap-3">
            <button onClick={() => setModal("login")} className="text-xs text-stone-400 hover:text-white transition">Sign In</button>
            <button onClick={() => setModal("reserve")} className="bg-amber-500/10 border border-amber-500/20 text-amber-400 px-4 py-1.5 rounded-lg text-xs font-medium hover:bg-amber-500/20 transition">Reserve</button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <div id="resto-home" className="relative py-20 px-4 text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950 via-stone-900/60 to-stone-950" />
        <div className="relative">
          <div className="flex justify-center gap-1 mb-4">{[...Array(5)].map((_, j) => <Star key={j} className="w-3 h-3 fill-amber-400 text-amber-400" />)}</div>
          <span className="text-amber-400/70 text-[10px] uppercase tracking-[0.3em] font-medium">Award-Winning Cuisine · Est. 2018</span>
          <h2 className="text-3xl md:text-4xl font-semibold mt-4 leading-tight">Where Tradition Meets<br />Modern Gastronomy</h2>
          <p className="text-stone-400 mt-3 max-w-md mx-auto text-sm leading-relaxed">An intimate dining experience celebrating the rich flavors of the Mediterranean, orchestrated by Executive Chef Omar Benali.</p>
          <div className="flex justify-center gap-3 mt-7">
            <button onClick={() => setModal("reserve")} className="bg-amber-500 text-stone-950 px-6 py-2.5 rounded-lg text-xs font-semibold hover:bg-amber-400 transition">Book a Table</button>
            <button onClick={() => scrollTo("menu")} className="border border-stone-700 text-stone-300 px-5 py-2.5 rounded-lg text-xs font-medium hover:border-stone-500 transition flex items-center gap-1.5"><FileText className="w-3 h-3" /> View Menu</button>
          </div>
          <div className="flex justify-center gap-10 mt-10">
            {[
              { icon: Star, label: "Michelin Rated", value: "4.9 / 5" },
              { icon: MapPin, label: "Location", value: "Downtown Casablanca" },
              { icon: Clock, label: "Hours", value: "12:00 – 23:00" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <item.icon className="w-4 h-4 text-amber-400/50 mx-auto mb-1.5" />
                <span className="block text-xs font-medium text-white">{item.value}</span>
                <span className="block text-[9px] text-stone-500 mt-0.5">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Menu */}
      <div id="resto-menu" className="max-w-5xl mx-auto px-4 py-10">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-base font-semibold">Our Menu</h3>
            <p className="text-[10px] text-stone-500 mt-0.5">Seasonal highlights from our kitchen</p>
          </div>
          <div className="flex gap-2">
            {["starters", "mains", "desserts", "wine"].map(tab => (
              <button key={tab} onClick={() => setMenuTab(tab)} className={`text-[10px] px-3 py-1.5 rounded-full font-medium capitalize transition ${menuTab === tab ? "bg-amber-500/10 text-amber-400 border border-amber-500/20" : "text-stone-500 hover:text-stone-300"}`}>{tab}</button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {(menuTab === "starters" ? [
            { n: "Zaalouk Trio", p: "$12", d: "Smoked eggplant, roasted peppers & artichoke heart dips", tag: "Vegan" },
            { n: "Seared Scallops", p: "$18", d: "With cauliflower purée, brown butter & capers", tag: "Popular" },
            { n: "Duck Pastilla", p: "$16", d: "Crispy filo pastry with confit duck, almonds & cinnamon", tag: "Signature" },
          ] : menuTab === "mains" ? [
            { n: "Grilled Sea Bass", p: "$32", d: "Pan-seared with fresh herbs, citrus beurre blanc, and seasonal vegetables", tag: "Chef's Choice" },
            { n: "Lamb Tagine", p: "$28", d: "Slow-cooked 8 hours with preserved lemons, saffron, and toasted almonds", tag: "Signature" },
            { n: "Truffle Risotto", p: "$26", d: "Carnaroli rice, shaved black truffle, aged Parmigiano-Reggiano", tag: "Vegetarian" },
          ] : menuTab === "desserts" ? [
            { n: "Orange Blossom Crème Brûlée", p: "$14", d: "Infused with Moroccan orange blossom water and vanilla bean", tag: "Popular" },
            { n: "Chocolate Fondant", p: "$16", d: "Dark Valrhona chocolate, salted caramel center, pistachio ice cream", tag: "Rich" },
            { n: "Almond M'hancha", p: "$12", d: "Traditional coiled pastry with almond paste and rose syrup", tag: "Traditional" },
          ] : [
            { n: "Château Roslane AOG", p: "$45", d: "Meknès region, Cabernet-Syrah blend, 2019 vintage", tag: "Red" },
            { n: "Volubilia Blanc", p: "$38", d: "Crisp Chardonnay-Viognier from the Gharb Valley", tag: "White" },
            { n: "Domaine de la Zouina Rosé", p: "$35", d: "Provence-style rosé from Atlas Mountain vineyards", tag: "Rosé" },
          ]).map((dish, i) => (
            <div key={i} className="bg-stone-900/40 rounded-xl p-5 border border-stone-800/40 hover:border-stone-700/50 transition">
              <ImgPlaceholder className={`h-28 rounded-lg mb-4 ${["from-amber-900/30 to-amber-800/10", "from-rose-900/30 to-rose-800/10", "from-emerald-900/30 to-emerald-800/10"][i]}`} gradient={["from-amber-900/30 to-amber-800/10", "from-rose-900/30 to-rose-800/10", "from-emerald-900/30 to-emerald-800/10"][i]} />
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <span className={`text-[9px] px-2 py-0.5 rounded-full font-medium ${["bg-amber-500/10 text-amber-400", "bg-rose-500/10 text-rose-400", "bg-emerald-500/10 text-emerald-400"][i]}`}>{dish.tag}</span>
                  <h4 className="text-sm font-medium mt-2">{dish.n}</h4>
                  <p className="text-stone-500 text-[10px] mt-1.5 leading-relaxed">{dish.d}</p>
                </div>
                <span className="text-amber-400 font-semibold text-sm ml-4 mt-6">{dish.p}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* About */}
      <div id="resto-about" className="py-12 px-4 bg-stone-900/30">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10 items-center">
          <ImgPlaceholder className="flex-1 h-64 rounded-xl" gradient="from-amber-900/20 to-stone-800/30" />
          <div className="flex-1">
            <span className="text-[10px] uppercase tracking-[0.2em] text-amber-400/60 font-medium">Our Story</span>
            <h3 className="text-xl font-semibold mt-2">A Passion for Authentic Flavors</h3>
            <p className="text-stone-400 text-sm leading-relaxed mt-3">Founded by Chef Omar Benali in 2018, Dar Salam brings together the vibrant culinary traditions of Morocco, Spain, and Southern France. Every dish is a journey through the Mediterranean, crafted with locally-sourced ingredients and time-honored techniques.</p>
            <p className="text-stone-500 text-xs leading-relaxed mt-3">Our intimate 45-seat dining room overlooks the old medina, offering a setting as memorable as the cuisine itself. We're proud to have been recognized by the Michelin Guide and named among Casablanca's top 10 restaurants by Condé Nast Traveler.</p>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h3 className="text-base font-semibold mb-6 text-center">Guest Reviews</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { name: "Pierre D.", text: "The lamb tagine was the best I've ever had. Extraordinary attention to detail.", city: "Paris" },
            { name: "Fatima Z.", text: "Perfect for special occasions. The ambiance and service are world-class.", city: "Casablanca" },
            { name: "James W.", text: "A hidden gem. The wine selection is impressive and the truffle risotto is divine.", city: "London" },
          ].map((r, i) => (
            <div key={i} className="bg-stone-900/30 border border-stone-800/30 rounded-xl p-5">
              <div className="flex gap-0.5 mb-3">{[...Array(5)].map((_, j) => <Star key={j} className="w-3 h-3 fill-amber-400 text-amber-400" />)}</div>
              <p className="text-xs text-stone-300 leading-relaxed">"{r.text}"</p>
              <div className="mt-3 text-[10px]"><span className="text-white font-medium">{r.name}</span> <span className="text-stone-600">· {r.city}</span></div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer id="resto-contact" className="border-t border-white/5 px-4 py-10">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-xs">
          <div>
            <h4 className="font-semibold text-white mb-3"><span className="text-amber-400">Dar</span> Salam</h4>
            <p className="text-stone-500 text-[10px] leading-relaxed">Fine Mediterranean dining in the heart of Casablanca.</p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">Hours</h4>
            <p className="text-stone-500 mb-1">Mon-Thu: 12:00 – 22:00</p>
            <p className="text-stone-500 mb-1">Fri-Sat: 12:00 – 23:00</p>
            <p className="text-stone-500">Sun: 13:00 – 21:00</p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">Contact</h4>
            <p className="text-stone-500 mb-1 flex items-center gap-1"><Phone className="w-3 h-3" /> +212 522-456789</p>
            <p className="text-stone-500 mb-1 flex items-center gap-1"><Mail className="w-3 h-3" /> info@darsalam.ma</p>
            <p className="text-stone-500 flex items-center gap-1"><MapPin className="w-3 h-3" /> 42 Rue de Fes, Casablanca</p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">Follow Us</h4>
            <div className="flex gap-3">
              <Instagram className="w-4 h-4 text-stone-500 hover:text-amber-400 cursor-pointer transition" />
              <Facebook className="w-4 h-4 text-stone-500 hover:text-amber-400 cursor-pointer transition" />
              <Twitter className="w-4 h-4 text-stone-500 hover:text-amber-400 cursor-pointer transition" />
            </div>
          </div>
        </div>
        <div className="max-w-5xl mx-auto mt-8 pt-6 border-t border-stone-800/50 text-[10px] text-stone-600 text-center">
          © 2025 Dar Salam. All rights reserved.
        </div>
      </footer>

      {/* Reservation Modal */}
      <DarkModal open={modal === "reserve"} onClose={() => setModal("")}>
        <h3 className="text-lg font-semibold mb-1">Reserve a Table</h3>
        <p className="text-xs text-gray-400 mb-5">Book your dining experience at Dar Salam</p>
        <div className="space-y-3">
          <DarkFormInput placeholder="Full Name" />
          <DarkFormInput placeholder="Email address" type="email" />
          <DarkFormInput placeholder="Phone number" type="tel" />
          <div className="grid grid-cols-2 gap-3">
            <DarkFormInput placeholder="Date" type="date" />
            <DarkFormInput placeholder="Time" type="time" />
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-400">Guests:</span>
            <div className="flex items-center gap-2 bg-gray-800 rounded-lg px-3 py-1.5 border border-gray-700">
              <button className="text-gray-400"><Minus className="w-3 h-3" /></button>
              <span className="text-sm font-medium w-6 text-center">2</span>
              <button className="text-gray-400"><Plus className="w-3 h-3" /></button>
            </div>
          </div>
          <DarkFormInput placeholder="Special requests (optional)" />
          <button className="w-full bg-amber-500 text-stone-950 py-2.5 rounded-lg text-sm font-semibold hover:bg-amber-400 transition">Confirm Reservation</button>
        </div>
      </DarkModal>

      {/* Login Modal */}
      <DarkModal open={modal === "login"} onClose={() => setModal("")}>
        <h3 className="text-lg font-semibold mb-1">Welcome Back</h3>
        <p className="text-xs text-gray-400 mb-5">Sign in to manage your reservations</p>
        <div className="space-y-3">
          <DarkFormInput placeholder="Email address" type="email" />
          <DarkFormInput placeholder="Password" type="password" />
          <button className="w-full bg-amber-500 text-stone-950 py-2.5 rounded-lg text-sm font-semibold hover:bg-amber-400 transition">Sign In</button>
          <div className="text-center text-[10px] text-gray-500">
            New guest? <button className="text-amber-400 font-medium">Create Account</button>
          </div>
        </div>
      </DarkModal>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════
//  3. NEXUS AI — SaaS Platform
// ═══════════════════════════════════════════════════════════════════════
export const TechSolutionsDemo = () => {
  const [modal, setModal] = useState<"" | "signup" | "signin">("");
  const [pricingToggle, setPricingToggle] = useState<"monthly" | "annual">("monthly");

  const scrollTo = (id: string) => {
    document.getElementById(`saas-${id}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="bg-[#0B0F1A] text-white font-sans text-sm relative">
      {/* Header */}
      <header className="px-4 py-3 border-b border-white/5 sticky top-0 z-40 bg-[#0B0F1A]/95 backdrop-blur-sm">
        <div className="flex items-center justify-between max-w-5xl mx-auto">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-[10px] font-bold">N</div>
            <h1 className="text-base font-semibold">Nexus<span className="text-cyan-400">AI</span></h1>
          </div>
          <nav className="hidden md:flex gap-5 text-xs text-gray-400 font-medium">
            <button onClick={() => scrollTo("home")} className="text-white hover:text-cyan-400 transition">Product</button>
            <button onClick={() => scrollTo("features")} className="hover:text-cyan-400 transition">Features</button>
            <button onClick={() => scrollTo("pricing")} className="hover:text-cyan-400 transition">Pricing</button>
            <button onClick={() => scrollTo("testimonials")} className="hover:text-cyan-400 transition">Customers</button>
          </nav>
          <div className="flex gap-2 items-center">
            <button onClick={() => setModal("signin")} className="text-xs text-gray-300 font-medium px-3 py-1.5 hover:text-white transition">Sign In</button>
            <button onClick={() => setModal("signup")} className="bg-cyan-500 text-white px-4 py-1.5 rounded-lg text-xs font-semibold hover:bg-cyan-400 transition">Start Free Trial</button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <div id="saas-home" className="py-16 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-transparent" />
        <div className="relative">
          <div className="inline-flex items-center gap-1.5 bg-cyan-500/10 border border-cyan-500/15 rounded-full px-3 py-1 text-[10px] text-cyan-400 mb-5">
            <Zap className="w-3 h-3" /> Now with GPT-4o · SOC 2 Type II certified
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight">The AI-Powered Platform<br />for Modern Teams</h2>
          <p className="text-gray-400 mt-3 max-w-lg mx-auto text-sm leading-relaxed">Automate workflows, generate insights, and scale operations with enterprise-grade AI infrastructure.</p>
          <div className="flex justify-center gap-3 mt-7">
            <button onClick={() => setModal("signup")} className="bg-white text-gray-900 px-6 py-2.5 rounded-lg text-xs font-semibold hover:bg-gray-100 transition">Start Free Trial</button>
            <button onClick={() => scrollTo("features")} className="border border-white/10 text-gray-300 px-5 py-2.5 rounded-lg text-xs font-medium hover:border-white/20 transition flex items-center gap-1.5"><Play className="w-3 h-3" /> Watch Demo</button>
          </div>
          <div className="flex justify-center gap-6 mt-5 text-gray-500 text-[10px]">
            <span>✓ No credit card required</span>
            <span>✓ 14-day free trial</span>
            <span>✓ 99.99% uptime SLA</span>
          </div>
        </div>
      </div>

      {/* Dashboard Preview */}
      <div className="max-w-4xl mx-auto px-4 pb-8">
        <div className="bg-white/[0.03] border border-white/5 rounded-xl p-5 backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-4 text-[10px] text-gray-500">
            <div className="flex gap-1"><div className="w-2 h-2 rounded-full bg-red-400/60" /><div className="w-2 h-2 rounded-full bg-yellow-400/60" /><div className="w-2 h-2 rounded-full bg-green-400/60" /></div>
            <span className="bg-white/5 rounded px-2 py-0.5">dashboard.nexusai.com</span>
            <div className="ml-auto flex items-center gap-2">
              <Bell className="w-3 h-3" /><Settings className="w-3 h-3" />
              <div className="w-5 h-5 rounded-full bg-cyan-500/20 border border-cyan-500/30" />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-3 mb-4">
            {[
              { label: "Active Users", value: "12,847", change: "+12.3%", color: "text-cyan-400" },
              { label: "API Calls / 24h", value: "2.4M", change: "+28.1%", color: "text-emerald-400" },
              { label: "Model Accuracy", value: "99.2%", change: "+0.3%", color: "text-violet-400" },
              { label: "Avg. Latency", value: "45ms", change: "-15.2%", color: "text-amber-400" },
            ].map((stat, i) => (
              <div key={i} className="bg-white/[0.03] rounded-lg p-3 border border-white/5">
                <span className="text-[9px] text-gray-500 uppercase tracking-wider">{stat.label}</span>
                <div className="text-base font-semibold mt-1">{stat.value}</div>
                <span className={`text-[10px] font-medium ${stat.color}`}>{stat.change}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features */}
      <div id="saas-features" className="max-w-5xl mx-auto px-4 py-12">
        <h3 className="text-xl font-semibold text-center mb-2">Everything you need to scale</h3>
        <p className="text-xs text-gray-500 text-center mb-8">Built for teams that demand performance and reliability.</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { icon: BarChart3, t: "Analytics", d: "Real-time dashboards, custom reports, and automated alerts", c: "text-cyan-400 bg-cyan-400/10" },
            { icon: Lock, t: "Enterprise Security", d: "End-to-end encryption, RBAC, and compliance reporting", c: "text-emerald-400 bg-emerald-400/10" },
            { icon: Layers, t: "200+ Integrations", d: "Native connectors for Slack, Jira, Salesforce, and more", c: "text-violet-400 bg-violet-400/10" },
            { icon: Zap, t: "Automation", d: "Build workflows with drag-and-drop, no code required", c: "text-amber-400 bg-amber-400/10" },
            { icon: Globe, t: "Global CDN", d: "Sub-50ms latency with edge nodes in 40+ regions", c: "text-pink-400 bg-pink-400/10" },
            { icon: Users, t: "Team Collaboration", d: "Real-time editing, comments, and role-based access", c: "text-blue-400 bg-blue-400/10" },
          ].map((f, i) => (
            <div key={i} className="bg-white/[0.02] border border-white/5 rounded-lg p-5 hover:border-white/10 transition">
              <div className={`w-9 h-9 rounded-lg flex items-center justify-center mb-3 ${f.c}`}><f.icon className="w-4.5 h-4.5" /></div>
              <h4 className="text-sm font-semibold">{f.t}</h4>
              <p className="text-[11px] text-gray-500 mt-1.5 leading-relaxed">{f.d}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing */}
      <div id="saas-pricing" className="py-12 px-4 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold text-center mb-2">Simple, transparent pricing</h3>
          <p className="text-xs text-gray-500 text-center mb-6">No hidden fees. Cancel anytime.</p>
          <div className="flex justify-center gap-2 mb-8">
            <button onClick={() => setPricingToggle("monthly")} className={`text-xs px-4 py-1.5 rounded-full transition ${pricingToggle === "monthly" ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20" : "text-gray-500"}`}>Monthly</button>
            <button onClick={() => setPricingToggle("annual")} className={`text-xs px-4 py-1.5 rounded-full transition ${pricingToggle === "annual" ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20" : "text-gray-500"}`}>Annual <span className="text-emerald-400 text-[9px]">Save 20%</span></button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "Starter", price: pricingToggle === "monthly" ? "$29" : "$23", features: ["5 team members", "10K API calls/mo", "Basic analytics", "Email support"], cta: "Get Started" },
              { name: "Pro", price: pricingToggle === "monthly" ? "$79" : "$63", features: ["25 team members", "100K API calls/mo", "Advanced analytics", "Priority support", "Custom integrations"], cta: "Start Free Trial", popular: true },
              { name: "Enterprise", price: "Custom", features: ["Unlimited members", "Unlimited API calls", "Dedicated account mgr", "SLA guarantee", "SSO & SAML", "On-premise option"], cta: "Contact Sales" },
            ].map((plan, i) => (
              <div key={i} className={`rounded-xl p-6 border ${plan.popular ? "border-cyan-500/30 bg-cyan-500/5" : "border-white/5 bg-white/[0.02]"} relative`}>
                {plan.popular && <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-cyan-500 text-white text-[9px] px-3 py-0.5 rounded-full font-medium">Most Popular</span>}
                <h4 className="text-sm font-semibold">{plan.name}</h4>
                <div className="mt-2 mb-4"><span className="text-2xl font-bold">{plan.price}</span>{plan.price !== "Custom" && <span className="text-xs text-gray-500">/mo</span>}</div>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-xs text-gray-400"><Check className="w-3 h-3 text-cyan-400" /> {f}</li>
                  ))}
                </ul>
                <button onClick={() => setModal("signup")} className={`w-full py-2.5 rounded-lg text-xs font-semibold transition ${plan.popular ? "bg-cyan-500 text-white hover:bg-cyan-400" : "bg-white/5 text-white hover:bg-white/10 border border-white/10"}`}>{plan.cta}</button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div id="saas-testimonials" className="max-w-5xl mx-auto px-4 py-12">
        <h3 className="text-base font-semibold text-center mb-8">Trusted by 500+ companies worldwide</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { name: "Maria Santos", role: "CTO, TechCorp", text: "NexusAI reduced our data processing time by 80%. The ROI was visible within the first month." },
            { name: "David Chen", role: "Head of Ops, ScaleUp", text: "The integrations work flawlessly. We connected our entire stack in under a day." },
            { name: "Aisha Benali", role: "VP Engineering, DataFlow", text: "Enterprise-grade security with startup-level ease of use. Exactly what we needed." },
          ].map((t, i) => (
            <div key={i} className="bg-white/[0.03] border border-white/5 rounded-xl p-5">
              <p className="text-xs text-gray-300 leading-relaxed mb-4">"{t.text}"</p>
              <div className="text-[10px]"><span className="text-white font-medium">{t.name}</span><span className="text-gray-600 block">{t.role}</span></div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/5 px-4 py-10">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-xs">
          <div>
            <h4 className="font-semibold mb-3">Nexus<span className="text-cyan-400">AI</span></h4>
            <p className="text-gray-500 text-[10px]">The AI platform for modern teams.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Product</h4>
            {["Features", "Pricing", "Changelog", "Roadmap"].map(l => <p key={l} className="text-gray-500 mb-1.5 cursor-pointer hover:text-gray-300">{l}</p>)}
          </div>
          <div>
            <h4 className="font-semibold mb-3">Resources</h4>
            {["Documentation", "API Reference", "Blog", "Community"].map(l => <p key={l} className="text-gray-500 mb-1.5 cursor-pointer hover:text-gray-300">{l}</p>)}
          </div>
          <div>
            <h4 className="font-semibold mb-3">Company</h4>
            {["About", "Careers", "Privacy", "Terms"].map(l => <p key={l} className="text-gray-500 mb-1.5 cursor-pointer hover:text-gray-300">{l}</p>)}
          </div>
        </div>
        <div className="max-w-5xl mx-auto mt-8 pt-6 border-t border-white/5 text-[10px] text-gray-600 text-center">© 2025 NexusAI Inc. All rights reserved.</div>
      </footer>

      {/* Sign Up Modal */}
      <DarkModal open={modal === "signup"} onClose={() => setModal("")}>
        <h3 className="text-lg font-semibold mb-1">Create your account</h3>
        <p className="text-xs text-gray-400 mb-5">Start your 14-day free trial. No credit card required.</p>
        <div className="space-y-3">
          <DarkFormInput placeholder="Full name" />
          <DarkFormInput placeholder="Work email" type="email" />
          <DarkFormInput placeholder="Company name" />
          <DarkFormInput placeholder="Password" type="password" />
          <button className="w-full bg-cyan-500 text-white py-2.5 rounded-lg text-sm font-semibold hover:bg-cyan-400 transition">Create Account</button>
          <div className="text-center text-[10px] text-gray-500">
            Already have an account? <button onClick={() => setModal("signin")} className="text-cyan-400 font-medium">Sign in</button>
          </div>
        </div>
      </DarkModal>

      {/* Sign In Modal */}
      <DarkModal open={modal === "signin"} onClose={() => setModal("")}>
        <h3 className="text-lg font-semibold mb-1">Welcome back</h3>
        <p className="text-xs text-gray-400 mb-5">Sign in to your NexusAI dashboard</p>
        <div className="space-y-3">
          <DarkFormInput placeholder="Email address" type="email" />
          <DarkFormInput placeholder="Password" type="password" />
          <button className="w-full bg-cyan-500 text-white py-2.5 rounded-lg text-sm font-semibold hover:bg-cyan-400 transition">Sign In</button>
          <div className="text-center text-[10px] text-gray-500">
            Need an account? <button onClick={() => setModal("signup")} className="text-cyan-400 font-medium">Start free trial</button>
          </div>
        </div>
      </DarkModal>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════
//  4. MAISON — Fashion / Luxury
// ═══════════════════════════════════════════════════════════════════════
export const FashionDemo = () => {
  const [modal, setModal] = useState<"" | "login" | "cart">("");

  const scrollTo = (id: string) => {
    document.getElementById(`fashion-${id}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="bg-white text-gray-900 font-sans text-sm relative">
      {/* Announcement */}
      <div className="bg-gray-900 text-white text-[10px] py-1.5 text-center tracking-wide">
        Spring Sale — 20% Off Everything · Code: <span className="font-semibold">SPRING25</span>
      </div>

      {/* Header */}
      <header className="px-4 py-4 border-b border-gray-100 sticky top-0 z-40 bg-white">
        <div className="flex items-center justify-between max-w-5xl mx-auto">
          <h1 className="text-lg font-light tracking-[0.2em] uppercase">Maison</h1>
          <nav className="hidden md:flex gap-7 text-[11px] text-gray-500 uppercase tracking-wider font-medium">
            <button onClick={() => scrollTo("home")} className="text-gray-900">New In</button>
            <button onClick={() => scrollTo("products")}>Women</button>
            <button onClick={() => scrollTo("products")}>Men</button>
            <button onClick={() => scrollTo("editorial")}>The Edit</button>
            <button onClick={() => scrollTo("contact")}>Contact</button>
          </nav>
          <div className="flex items-center gap-5">
            <Search className="w-4 h-4 text-gray-400 cursor-pointer" />
            <Heart className="w-4 h-4 text-gray-400 cursor-pointer" />
            <button onClick={() => setModal("cart")} className="relative">
              <ShoppingCart className="w-4 h-4 text-gray-400" />
              <span className="absolute -top-1 -right-1.5 bg-gray-900 text-white text-[7px] rounded-full w-3 h-3 flex items-center justify-center">2</span>
            </button>
            <button onClick={() => setModal("login")} className="text-[11px] font-medium text-gray-600 hover:text-gray-900 transition">Account</button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <div id="fashion-home" className="py-20 px-4 bg-[#FAF8F5]">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-gray-400 text-[10px] uppercase tracking-[0.3em] font-medium">Spring / Summer 2025</span>
          <h2 className="text-3xl md:text-4xl font-light mt-3 tracking-wide">The Art of Quiet Luxury</h2>
          <p className="text-gray-500 mt-3 text-sm max-w-sm mx-auto leading-relaxed">Timeless pieces crafted from the finest materials. Designed to endure beyond seasons and trends.</p>
          <button onClick={() => scrollTo("products")} className="bg-gray-900 text-white px-8 py-3 text-[11px] font-medium tracking-wider uppercase mt-7 hover:bg-gray-800 transition">Shop the Collection</button>
        </div>
      </div>

      {/* Products */}
      <div id="fashion-products" className="max-w-5xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-7">
          <h3 className="text-sm font-medium uppercase tracking-wider text-gray-900">Editor's Picks</h3>
          <span className="text-[10px] text-gray-400 uppercase tracking-wider cursor-pointer hover:text-gray-600 transition">View All →</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            { n: "Silk Relaxed Blouse", p: "$120", color: "Ivory", sizes: "XS – XL", gradient: "from-[#F5EDE6] to-[#EDE5DB]" },
            { n: "Wide Leg Linen Trouser", p: "$85", color: "Sand", sizes: "S – L", gradient: "from-[#EDE8E0] to-[#E5DFD5]" },
            { n: "Structured Leather Tote", p: "$220", color: "Cognac", sizes: "One Size", gradient: "from-[#E8E0D8] to-[#DDD5CC]" },
            { n: "Hammered Gold Hoops", p: "$65", color: "Gold", sizes: "One Size", gradient: "from-[#F0EBE5] to-[#E8E2DA]" },
          ].map((item, i) => (
            <div key={i} className="group cursor-pointer">
              <div className={`aspect-[3/4] rounded-sm bg-gradient-to-br ${item.gradient} relative overflow-hidden`}>
                <ImgPlaceholder className="absolute inset-0" gradient={item.gradient} />
                <button className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition"><Heart className="w-4 h-4 text-gray-500" /></button>
                <button onClick={() => setModal("cart")} className="absolute bottom-3 left-3 right-3 bg-white/90 text-gray-900 text-[10px] py-2 font-medium opacity-0 group-hover:opacity-100 transition text-center rounded-sm">Quick Add</button>
              </div>
              <div className="mt-3">
                <h4 className="text-xs font-medium text-gray-800">{item.n}</h4>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-xs text-gray-900 font-medium">{item.p}</span>
                  <span className="text-[10px] text-gray-400">{item.color}</span>
                </div>
                <span className="text-[9px] text-gray-300 mt-0.5 block">{item.sizes}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Editorial */}
      <div id="fashion-editorial" className="bg-[#FAF8F5] py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-sm font-medium uppercase tracking-wider text-center mb-8">The Edit</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "The Capsule Wardrobe Guide", desc: "10 essential pieces for effortless style, curated by our creative director.", gradient: "from-[#E8DED4] to-[#D8CEC4]" },
              { title: "Sustainability at Maison", desc: "How we source ethically and produce responsibly, without compromising on quality.", gradient: "from-[#D8D0C8] to-[#CCC4BC]" },
            ].map((article, i) => (
              <div key={i} className="group cursor-pointer">
                <ImgPlaceholder className={`h-48 rounded-lg mb-4`} gradient={article.gradient} />
                <h4 className="text-sm font-medium group-hover:underline">{article.title}</h4>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">{article.desc}</p>
                <span className="text-[10px] text-gray-400 mt-2 block uppercase tracking-wider">Read More →</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer id="fashion-contact" className="px-4 py-10 border-t border-gray-100">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-xs">
          <div>
            <h4 className="font-light tracking-[0.15em] uppercase mb-3">Maison</h4>
            <p className="text-gray-400 text-[10px] leading-relaxed">Timeless luxury fashion since 2016.</p>
            <div className="flex gap-3 mt-3">
              <Instagram className="w-3.5 h-3.5 text-gray-400 hover:text-gray-600 cursor-pointer" />
              <Twitter className="w-3.5 h-3.5 text-gray-400 hover:text-gray-600 cursor-pointer" />
            </div>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-3 uppercase text-[10px] tracking-wider">Shop</h4>
            {["New In", "Women", "Men", "Accessories", "Sale"].map(l => <p key={l} className="text-gray-400 mb-1.5 cursor-pointer hover:text-gray-600">{l}</p>)}
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-3 uppercase text-[10px] tracking-wider">Help</h4>
            {["Size Guide", "Shipping", "Returns", "Contact Us"].map(l => <p key={l} className="text-gray-400 mb-1.5 cursor-pointer hover:text-gray-600">{l}</p>)}
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-3 uppercase text-[10px] tracking-wider">Contact</h4>
            <p className="text-gray-400 mb-1.5">support@maison.com</p>
            <p className="text-gray-400">+33 1 42 68 12 34</p>
          </div>
        </div>
        <div className="max-w-5xl mx-auto mt-8 pt-6 border-t border-gray-100 text-[10px] text-gray-300 text-center">© 2025 Maison. All rights reserved.</div>
      </footer>

      {/* Login Modal */}
      <Modal open={modal === "login"} onClose={() => setModal("")}>
        <h3 className="text-lg font-light tracking-wide mb-1">Welcome</h3>
        <p className="text-xs text-gray-400 mb-5">Sign in to your Maison account</p>
        <div className="space-y-3">
          <FormInput placeholder="Email address" type="email" />
          <FormInput placeholder="Password" type="password" />
          <button className="w-full bg-gray-900 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-gray-800 transition tracking-wider uppercase text-[11px]">Sign In</button>
          <div className="text-center text-[10px] text-gray-400">
            New here? <button className="text-gray-900 font-medium underline">Create Account</button>
          </div>
        </div>
      </Modal>

      {/* Cart Modal */}
      <Modal open={modal === "cart"} onClose={() => setModal("")}>
        <h3 className="text-lg font-light tracking-wide mb-4">Shopping Bag (2)</h3>
        <div className="space-y-3 mb-5">
          {[
            { name: "Silk Relaxed Blouse", price: "$120", size: "M", color: "Ivory" },
            { name: "Hammered Gold Hoops", price: "$65", size: "One Size", color: "Gold" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-12 h-14 bg-[#F0EBE5] rounded" />
              <div className="flex-1">
                <h4 className="text-xs font-medium">{item.name}</h4>
                <span className="text-[10px] text-gray-400">{item.size} · {item.color}</span>
              </div>
              <span className="text-sm font-medium">{item.price}</span>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center border-t border-gray-100 pt-4 mb-4">
          <span className="text-sm text-gray-500">Total</span>
          <span className="text-lg font-medium">$185.00</span>
        </div>
        <button className="w-full bg-gray-900 text-white py-2.5 rounded-lg text-[11px] font-medium tracking-wider uppercase hover:bg-gray-800 transition">Checkout</button>
      </Modal>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════
//  5. MEDICARE PLUS — Health Clinic
// ═══════════════════════════════════════════════════════════════════════
export const HealthClinicDemo = () => {
  const [modal, setModal] = useState<"" | "appointment" | "portal">("");

  const scrollTo = (id: string) => {
    document.getElementById(`health-${id}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="bg-white text-gray-900 font-sans text-sm relative">
      {/* Header */}
      <header className="bg-white px-4 py-3.5 border-b border-gray-100 sticky top-0 z-40">
        <div className="flex items-center justify-between max-w-5xl mx-auto">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 bg-emerald-500 rounded-lg flex items-center justify-center"><span className="text-white text-sm font-bold">+</span></div>
            <div>
              <h1 className="text-base font-semibold">MediCare<span className="text-emerald-500">Plus</span></h1>
              <span className="text-[8px] text-gray-400 uppercase tracking-wider">Healthcare Group</span>
            </div>
          </div>
          <nav className="hidden md:flex gap-5 text-xs text-gray-500 font-medium">
            <button onClick={() => scrollTo("home")} className="text-gray-900">Home</button>
            <button onClick={() => scrollTo("services")}>Services</button>
            <button onClick={() => scrollTo("doctors")}>Doctors</button>
            <button onClick={() => setModal("appointment")}>Appointments</button>
            <button onClick={() => scrollTo("contact")}>Contact</button>
          </nav>
          <div className="flex gap-2 items-center">
            <button onClick={() => setModal("portal")} className="text-xs text-emerald-600 font-medium px-3 py-1.5 hover:bg-emerald-50 rounded-lg transition">Patient Portal</button>
            <button onClick={() => setModal("appointment")} className="bg-emerald-500 text-white px-4 py-1.5 rounded-lg text-xs font-semibold hover:bg-emerald-600 transition">Book Now</button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <div id="health-home" className="bg-gradient-to-br from-emerald-50/80 to-teal-50/40 py-16 px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <span className="text-[10px] bg-emerald-100 text-emerald-700 px-2.5 py-1 rounded-full font-medium">Trusted by 25,000+ patients since 2012</span>
            <h2 className="text-2xl md:text-3xl font-semibold leading-tight mt-4">Comprehensive<br />Healthcare You Deserve</h2>
            <p className="text-gray-500 mt-3 text-sm leading-relaxed max-w-md">Expert board-certified physicians, advanced diagnostics, and compassionate care. Your wellness journey starts here.</p>
            <div className="flex gap-3 mt-6">
              <button onClick={() => setModal("appointment")} className="bg-emerald-500 text-white px-6 py-2.5 rounded-lg text-xs font-semibold hover:bg-emerald-600 transition">Book Appointment</button>
              <button onClick={() => scrollTo("doctors")} className="border border-gray-200 text-gray-700 px-5 py-2.5 rounded-lg text-xs font-medium hover:border-gray-300 transition">Find a Doctor</button>
            </div>
            <div className="flex gap-6 mt-7">
              {[
                { icon: CheckCircle, label: "24/7 Emergency Care" },
                { icon: Award, label: "Board Certified MDs" },
                { icon: Clock, label: "Same-Day Results" },
              ].map((item, i) => (
                <span key={i} className="flex items-center gap-1.5 text-[10px] text-gray-500"><item.icon className="w-3.5 h-3.5 text-emerald-500" /> {item.label}</span>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 max-w-sm ml-auto">
              <h4 className="text-sm font-semibold mb-4">Quick Appointment</h4>
              <div className="space-y-2.5">
                <div className="bg-gray-50 rounded-lg px-3 py-2.5 text-[10px] text-gray-400 border border-gray-100">Select Department</div>
                <div className="bg-gray-50 rounded-lg px-3 py-2.5 text-[10px] text-gray-400 border border-gray-100">Preferred Doctor (Optional)</div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-gray-50 rounded-lg px-3 py-2.5 text-[10px] text-gray-400 border border-gray-100">Date</div>
                  <div className="bg-gray-50 rounded-lg px-3 py-2.5 text-[10px] text-gray-400 border border-gray-100">Time</div>
                </div>
                <button onClick={() => setModal("appointment")} className="w-full bg-emerald-500 text-white text-[10px] py-2.5 rounded-lg font-semibold hover:bg-emerald-600 transition">Confirm Booking</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services */}
      <div id="health-services" className="max-w-5xl mx-auto px-4 py-12">
        <h3 className="text-lg font-semibold mb-2 text-center">Our Departments</h3>
        <p className="text-xs text-gray-400 text-center mb-8">Comprehensive care across all specialties</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { name: "Cardiology", desc: "Heart & vascular care", icon: "♥", bg: "bg-rose-50 text-rose-500", count: "12 doctors" },
            { name: "Dermatology", desc: "Skin health experts", icon: "✦", bg: "bg-purple-50 text-purple-500", count: "8 doctors" },
            { name: "Pediatrics", desc: "Children's wellness", icon: "★", bg: "bg-blue-50 text-blue-500", count: "10 doctors" },
            { name: "Orthopedics", desc: "Bone & joint care", icon: "◆", bg: "bg-amber-50 text-amber-500", count: "6 doctors" },
          ].map((dept, i) => (
            <div key={i} className="border border-gray-100 rounded-xl p-4 hover:border-emerald-200 hover:shadow-sm transition cursor-pointer">
              <div className={`w-9 h-9 rounded-lg flex items-center justify-center text-sm mb-3 ${dept.bg}`}>{dept.icon}</div>
              <h4 className="text-xs font-semibold text-gray-800">{dept.name}</h4>
              <p className="text-[10px] text-gray-400 mt-0.5">{dept.desc}</p>
              <span className="text-[9px] text-gray-300 mt-2 block">{dept.count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Doctors */}
      <div id="health-doctors" className="bg-gray-50 py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-lg font-semibold mb-2 text-center">Meet Our Physicians</h3>
          <p className="text-xs text-gray-400 text-center mb-8">Board-certified specialists dedicated to your health</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Dr. Karim Alaoui", spec: "Cardiology", exp: "15 years" },
              { name: "Dr. Leila Mansouri", spec: "Dermatology", exp: "12 years" },
              { name: "Dr. Youssef Idrissi", spec: "Pediatrics", exp: "10 years" },
              { name: "Dr. Nadia Benjelloun", spec: "Orthopedics", exp: "18 years" },
            ].map((doc, i) => (
              <div key={i} className="bg-white rounded-xl p-4 border border-gray-100 text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-50 mx-auto mb-3 flex items-center justify-center"><User className="w-6 h-6 text-emerald-300" /></div>
                <h4 className="text-xs font-semibold">{doc.name}</h4>
                <p className="text-[10px] text-emerald-600 font-medium mt-0.5">{doc.spec}</p>
                <p className="text-[10px] text-gray-400 mt-0.5">{doc.exp} experience</p>
                <button onClick={() => setModal("appointment")} className="mt-3 text-[10px] bg-emerald-50 text-emerald-600 px-3 py-1.5 rounded-lg font-medium hover:bg-emerald-100 transition w-full">Book Appointment</button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h3 className="text-base font-semibold text-center mb-6">Patient Testimonials</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { name: "Rachida E.", text: "Dr. Alaoui's expertise in cardiology gave me peace of mind. Excellent follow-up care." },
            { name: "Omar B.", text: "The pediatrics team is wonderful with children. My daughter loves her check-ups here." },
            { name: "Sophia T.", text: "Quick appointment booking, minimal wait times, and thorough consultations. Highly recommended." },
          ].map((t, i) => (
            <div key={i} className="border border-gray-100 rounded-xl p-5">
              <div className="flex gap-0.5 mb-3">{[...Array(5)].map((_, j) => <Star key={j} className="w-3 h-3 fill-amber-400 text-amber-400" />)}</div>
              <p className="text-xs text-gray-600 leading-relaxed">"{t.text}"</p>
              <span className="text-[10px] text-gray-400 mt-3 block font-medium">— {t.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer id="health-contact" className="bg-gray-50 px-4 py-10 border-t border-gray-100">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-xs">
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">MediCare<span className="text-emerald-500">Plus</span></h4>
            <p className="text-gray-400 text-[10px] leading-relaxed">Comprehensive healthcare for you and your family since 2012.</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Services</h4>
            {["General Medicine", "Cardiology", "Dermatology", "Pediatrics"].map(l => <p key={l} className="text-gray-400 mb-1.5">{l}</p>)}
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Hours</h4>
            <p className="text-gray-400 mb-1">Mon-Fri: 8:00 – 20:00</p>
            <p className="text-gray-400 mb-1">Sat: 9:00 – 17:00</p>
            <p className="text-gray-400">Emergency: 24/7</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Contact</h4>
            <p className="text-gray-400 mb-1.5 flex items-center gap-1"><Phone className="w-3 h-3" /> +212 522-789012</p>
            <p className="text-gray-400 mb-1.5 flex items-center gap-1"><Mail className="w-3 h-3" /> info@medicareplus.ma</p>
            <p className="text-gray-400 flex items-center gap-1"><MapPin className="w-3 h-3" /> Casablanca, Morocco</p>
          </div>
        </div>
        <div className="max-w-5xl mx-auto mt-8 pt-6 border-t border-gray-200 text-[10px] text-gray-300 text-center">© 2025 MediCarePlus. All rights reserved.</div>
      </footer>

      {/* Appointment Modal */}
      <Modal open={modal === "appointment"} onClose={() => setModal("")}>
        <h3 className="text-lg font-semibold mb-1">Book an Appointment</h3>
        <p className="text-xs text-gray-400 mb-5">Schedule your visit with our specialists</p>
        <div className="space-y-3">
          <FormInput placeholder="Full Name" />
          <FormInput placeholder="Phone Number" type="tel" />
          <FormInput placeholder="Email (optional)" type="email" />
          <select className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-600 focus:outline-none">
            <option>Select Department</option>
            <option>Cardiology</option>
            <option>Dermatology</option>
            <option>Pediatrics</option>
            <option>Orthopedics</option>
            <option>General Medicine</option>
          </select>
          <div className="grid grid-cols-2 gap-3">
            <FormInput placeholder="Date" type="date" />
            <FormInput placeholder="Time" type="time" />
          </div>
          <FormInput placeholder="Reason for visit (optional)" />
          <button className="w-full bg-emerald-500 text-white py-2.5 rounded-lg text-sm font-semibold hover:bg-emerald-600 transition">Confirm Appointment</button>
        </div>
      </Modal>

      {/* Patient Portal Modal */}
      <Modal open={modal === "portal"} onClose={() => setModal("")}>
        <h3 className="text-lg font-semibold mb-1">Patient Portal</h3>
        <p className="text-xs text-gray-400 mb-5">Access your medical records and appointments</p>
        <div className="space-y-3">
          <FormInput placeholder="Patient ID or Email" />
          <FormInput placeholder="Password" type="password" />
          <button className="w-full bg-emerald-500 text-white py-2.5 rounded-lg text-sm font-semibold hover:bg-emerald-600 transition">Sign In</button>
          <div className="text-center text-[10px] text-gray-400">
            New patient? <button className="text-emerald-600 font-medium">Register here</button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════
//  6. LAUNCHLAB — Startup / Growth Marketing
// ═══════════════════════════════════════════════════════════════════════
export const StartupDemo = () => {
  const [modal, setModal] = useState<"" | "signup" | "login" | "audit">("");

  const scrollTo = (id: string) => {
    document.getElementById(`startup-${id}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="bg-[#09090B] text-white font-sans text-sm relative">
      {/* Header */}
      <header className="px-4 py-3 border-b border-white/5 sticky top-0 z-40 bg-[#09090B]/95 backdrop-blur-sm">
        <div className="flex items-center justify-between max-w-5xl mx-auto">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-[10px] font-bold">L</div>
            <h1 className="text-base font-semibold"><span className="text-violet-400">Launch</span>Lab</h1>
          </div>
          <nav className="hidden md:flex gap-5 text-xs text-gray-400 font-medium">
            <button onClick={() => scrollTo("home")} className="text-white">Home</button>
            <button onClick={() => scrollTo("services")}>Services</button>
            <button onClick={() => scrollTo("results")}>Results</button>
            <button onClick={() => scrollTo("pricing")}>Pricing</button>
            <button onClick={() => scrollTo("contact")}>Contact</button>
          </nav>
          <div className="flex gap-2 items-center">
            <button onClick={() => setModal("login")} className="text-xs text-gray-300 font-medium px-3 py-1.5 hover:text-white transition">Log In</button>
            <button onClick={() => setModal("audit")} className="bg-violet-500 text-white px-4 py-1.5 rounded-lg text-xs font-semibold hover:bg-violet-400 transition">Free Audit</button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <div id="startup-home" className="py-20 px-4 text-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-500/[0.03] via-transparent to-transparent" />
        <div className="relative">
          <div className="inline-flex items-center gap-1.5 bg-violet-500/10 border border-violet-500/15 rounded-full px-3 py-1 text-[10px] text-violet-400 mb-5">
            <TrendingUp className="w-3 h-3" /> Avg. +200% lead growth for our clients in 2024
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight">Growth Marketing That<br />Actually Delivers Results</h2>
          <p className="text-gray-400 mt-3 max-w-md mx-auto text-sm leading-relaxed">Data-driven strategies, performance campaigns, and conversion optimization for ambitious brands ready to scale.</p>
          <div className="flex justify-center gap-3 mt-7">
            <button onClick={() => setModal("audit")} className="bg-white text-gray-900 px-6 py-2.5 rounded-lg text-xs font-semibold hover:bg-gray-100 transition">Free Strategy Call</button>
            <button onClick={() => scrollTo("results")} className="border border-white/10 text-gray-300 px-5 py-2.5 rounded-lg text-xs font-medium hover:border-white/20 transition">View Case Studies</button>
          </div>
          <div className="flex justify-center gap-6 mt-5 text-gray-500 text-[10px]">
            <span>✓ No contracts</span>
            <span>✓ 30-day money back</span>
            <span>✓ Results in 90 days</span>
          </div>
        </div>
      </div>

      {/* Services */}
      <div id="startup-services" className="max-w-5xl mx-auto px-4 py-12">
        <h3 className="text-xl font-semibold text-center mb-2">Our Services</h3>
        <p className="text-xs text-gray-500 text-center mb-8">Full-funnel growth, from awareness to conversion.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { icon: Globe, title: "SEO & Content Strategy", desc: "Technical audits, content planning, and high-authority link building to dominate organic search.", color: "text-violet-400 bg-violet-400/10" },
            { icon: MessageSquare, title: "Social Media Marketing", desc: "Community management, influencer partnerships, and paid social campaigns across all platforms.", color: "text-pink-400 bg-pink-400/10" },
            { icon: BarChart3, title: "Performance Advertising", desc: "Google Ads, Meta Ads, TikTok Ads, and programmatic media buying with real-time optimization.", color: "text-emerald-400 bg-emerald-400/10" },
          ].map((svc, i) => (
            <div key={i} className="bg-white/[0.02] border border-white/5 rounded-xl p-6 hover:border-white/10 transition">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${svc.color}`}><svc.icon className="w-5 h-5" /></div>
              <h4 className="text-sm font-semibold">{svc.title}</h4>
              <p className="text-xs text-gray-500 mt-2 leading-relaxed">{svc.desc}</p>
              <button onClick={() => setModal("audit")} className="text-[10px] text-violet-400 font-medium mt-4 inline-flex items-center gap-1 hover:underline">Learn More <ArrowRight className="w-3 h-3" /></button>
            </div>
          ))}
        </div>
      </div>

      {/* Results */}
      <div id="startup-results" className="py-12 px-4 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold text-center mb-2">Client Results</h3>
          <p className="text-xs text-gray-500 text-center mb-8">Real numbers from real clients in Q4 2024.</p>
          <div className="grid grid-cols-3 gap-4 mb-8">
            {[
              { metric: "+340%", label: "Organic Traffic", desc: "Average increase in 6 months", color: "text-violet-400" },
              { metric: "2.5M+", label: "Impressions", desc: "Generated across social platforms", color: "text-pink-400" },
              { metric: "8.2x", label: "Average ROAS", desc: "Return on ad spend", color: "text-emerald-400" },
            ].map((s, i) => (
              <div key={i} className="text-center p-5 bg-white/[0.02] rounded-xl border border-white/5">
                <span className={`text-2xl font-bold ${s.color}`}>{s.metric}</span>
                <h4 className="text-xs font-medium mt-2">{s.label}</h4>
                <p className="text-[10px] text-gray-500 mt-0.5">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Case Studies */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { company: "TechVenture Inc.", industry: "B2B SaaS", result: "+280% qualified leads", gradient: "from-violet-900/20 to-violet-800/10" },
              { company: "StyleHouse", industry: "E-Commerce", result: "+190% revenue in 4 months", gradient: "from-pink-900/20 to-pink-800/10" },
            ].map((cs, i) => (
              <div key={i} className="bg-white/[0.02] border border-white/5 rounded-xl overflow-hidden">
                <ImgPlaceholder className="h-32" gradient={cs.gradient} />
                <div className="p-5">
                  <span className="text-[9px] text-gray-500 uppercase tracking-wider">{cs.industry}</span>
                  <h4 className="text-sm font-semibold mt-1">{cs.company}</h4>
                  <p className="text-xs text-violet-400 font-medium mt-1">{cs.result}</p>
                  <button className="text-[10px] text-gray-400 mt-3 inline-flex items-center gap-1 hover:text-white transition">Read Case Study <ArrowRight className="w-3 h-3" /></button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div id="startup-pricing" className="max-w-4xl mx-auto px-4 py-12">
        <h3 className="text-xl font-semibold text-center mb-2">Growth Plans</h3>
        <p className="text-xs text-gray-500 text-center mb-8">Flexible packages for every stage of growth.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { name: "Starter", price: "$1,500", period: "/month", features: ["SEO audit & strategy", "2 social platforms", "Monthly reporting", "Email support"], cta: "Get Started" },
            { name: "Growth", price: "$3,500", period: "/month", features: ["Full SEO management", "4 social platforms", "PPC campaigns", "Weekly reporting", "Dedicated strategist"], cta: "Start Growing", popular: true },
            { name: "Scale", price: "$7,500", period: "/month", features: ["Everything in Growth", "All ad platforms", "Influencer campaigns", "CRO & A/B testing", "Daily optimization", "Quarterly strategy review"], cta: "Let's Talk" },
          ].map((plan, i) => (
            <div key={i} className={`rounded-xl p-6 border ${plan.popular ? "border-violet-500/30 bg-violet-500/5" : "border-white/5 bg-white/[0.02]"} relative`}>
              {plan.popular && <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-violet-500 text-white text-[9px] px-3 py-0.5 rounded-full font-medium">Most Popular</span>}
              <h4 className="text-sm font-semibold">{plan.name}</h4>
              <div className="mt-2 mb-4"><span className="text-2xl font-bold">{plan.price}</span><span className="text-xs text-gray-500">{plan.period}</span></div>
              <ul className="space-y-2 mb-6">
                {plan.features.map((f, j) => <li key={j} className="flex items-center gap-2 text-xs text-gray-400"><Check className="w-3 h-3 text-violet-400" /> {f}</li>)}
              </ul>
              <button onClick={() => setModal("audit")} className={`w-full py-2.5 rounded-lg text-xs font-semibold transition ${plan.popular ? "bg-violet-500 text-white hover:bg-violet-400" : "bg-white/5 text-white hover:bg-white/10 border border-white/10"}`}>{plan.cta}</button>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer id="startup-contact" className="border-t border-white/5 px-4 py-10">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-xs">
          <div>
            <h4 className="font-semibold mb-3"><span className="text-violet-400">Launch</span>Lab</h4>
            <p className="text-gray-500 text-[10px]">Data-driven growth marketing for ambitious brands.</p>
            <div className="flex gap-3 mt-3">
              <Linkedin className="w-3.5 h-3.5 text-gray-500 hover:text-violet-400 cursor-pointer transition" />
              <Instagram className="w-3.5 h-3.5 text-gray-500 hover:text-violet-400 cursor-pointer transition" />
              <Twitter className="w-3.5 h-3.5 text-gray-500 hover:text-violet-400 cursor-pointer transition" />
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Services</h4>
            {["SEO", "Social Media", "PPC", "Content Marketing"].map(l => <p key={l} className="text-gray-500 mb-1.5 cursor-pointer hover:text-gray-300">{l}</p>)}
          </div>
          <div>
            <h4 className="font-semibold mb-3">Resources</h4>
            {["Blog", "Case Studies", "Free Tools", "Newsletter"].map(l => <p key={l} className="text-gray-500 mb-1.5 cursor-pointer hover:text-gray-300">{l}</p>)}
          </div>
          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <p className="text-gray-500 mb-1.5 flex items-center gap-1"><Mail className="w-3 h-3" /> hello@launchlab.io</p>
            <p className="text-gray-500 mb-1.5 flex items-center gap-1"><Phone className="w-3 h-3" /> +212 661-234567</p>
            <p className="text-gray-500 flex items-center gap-1"><MapPin className="w-3 h-3" /> Casablanca, Morocco</p>
          </div>
        </div>
        <div className="max-w-5xl mx-auto mt-8 pt-6 border-t border-white/5 text-[10px] text-gray-600 text-center">© 2025 LaunchLab. All rights reserved.</div>
      </footer>

      {/* Free Audit Modal */}
      <DarkModal open={modal === "audit"} onClose={() => setModal("")}>
        <h3 className="text-lg font-semibold mb-1">Get Your Free Audit</h3>
        <p className="text-xs text-gray-400 mb-5">Tell us about your business and we'll prepare a custom growth strategy.</p>
        <div className="space-y-3">
          <DarkFormInput placeholder="Full Name" />
          <DarkFormInput placeholder="Business Email" type="email" />
          <DarkFormInput placeholder="Company Name" />
          <DarkFormInput placeholder="Website URL" />
          <select className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-sm text-gray-300 focus:outline-none">
            <option>Monthly Marketing Budget</option>
            <option>Under $2,000</option>
            <option>$2,000 - $5,000</option>
            <option>$5,000 - $15,000</option>
            <option>$15,000+</option>
          </select>
          <button className="w-full bg-violet-500 text-white py-2.5 rounded-lg text-sm font-semibold hover:bg-violet-400 transition">Request Free Audit</button>
        </div>
      </DarkModal>

      {/* Login Modal */}
      <DarkModal open={modal === "login"} onClose={() => setModal("")}>
        <h3 className="text-lg font-semibold mb-1">Client Portal</h3>
        <p className="text-xs text-gray-400 mb-5">Sign in to view your campaign dashboards</p>
        <div className="space-y-3">
          <DarkFormInput placeholder="Email address" type="email" />
          <DarkFormInput placeholder="Password" type="password" />
          <button className="w-full bg-violet-500 text-white py-2.5 rounded-lg text-sm font-semibold hover:bg-violet-400 transition">Sign In</button>
          <div className="text-center text-[10px] text-gray-500">
            Need access? <button className="text-violet-400 font-medium">Contact your account manager</button>
          </div>
        </div>
      </DarkModal>

      {/* Sign Up Modal */}
      <DarkModal open={modal === "signup"} onClose={() => setModal("")}>
        <h3 className="text-lg font-semibold mb-1">Create Account</h3>
        <p className="text-xs text-gray-400 mb-5">Join LaunchLab to access exclusive growth resources</p>
        <div className="space-y-3">
          <DarkFormInput placeholder="Full name" />
          <DarkFormInput placeholder="Email address" type="email" />
          <DarkFormInput placeholder="Password" type="password" />
          <button className="w-full bg-violet-500 text-white py-2.5 rounded-lg text-sm font-semibold hover:bg-violet-400 transition">Create Account</button>
        </div>
      </DarkModal>
    </div>
  );
};
