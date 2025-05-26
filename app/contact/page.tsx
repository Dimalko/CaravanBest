"use client"
import { useState } from "react"
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, Facebook, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function ContactPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo - Make it clickable */}
            <a href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Image
                  src="/images/logo-white.png"
                  alt="Caravan Best Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">CARAVAN</h1>
                <p className="text-l text-blue-600 font-semibold">BEST</p>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Αρχική
              </a>
              <a href="/caravans" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Τροχόσπιτα
              </a>
              <a href="/contact" className="text-blue-600 font-medium border-b-2 border-blue-600">
                Επικοινωνία
              </a>
            </nav>

            {/* Desktop Contact & Social */}
            <div className="hidden md:flex items-center space-x-4">
              <a href="tel:+306987161082">
              <Button variant="outline" size="sm">
                <Phone className="h-4 w-4 mr-2" />
                Κλήση
              </Button>
              </a>
              <a href="https://www.facebook.com/CaravanBest/" target="_blank" className="text-blue-600 hover:text-blue-700">
                <Facebook className="h-5 w-5" />
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-4">
              <a href="https://www.facebook.com/CaravanBest/" target="_blank" className="text-blue-600 hover:text-blue-700">
                <Facebook className="h-5 w-5" />
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t bg-white">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a
                  href="/"
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Αρχική
                </a>
                <a
                  href="/caravans"
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Τροχόσπιτα
                </a>
                <a
                  href="/contact"
                  className="block px-3 py-2 text-blue-600 font-medium bg-blue-50 rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Επικοινωνία
                </a>
                <div className="px-3 py-2">
                  <a href="tel:+306987161082">
                  <Button variant="outline" size="sm" className="w-full">
                    <Phone className="h-4 w-4 mr-2" />
                    Κλήση
                  </Button>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-white/20 text-white border-0">Επικοινωνία</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Επικοινωνήστε μαζί μας</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Η εξυπηρέτησή σας είναι προτεραιότητά μας! Για να διασφαλίσουμε ότι θα λάβετε την καλύτερη δυνατή
              υποστήριξη, σας προτείνουμε να κλείσετε ραντεβού πριν την επίσκεψή σας.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Στοιχεία Επικοινωνίας</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Για οποιαδήποτε πληροφορία, μη διστάσετε να επικοινωνήσετε μαζί μας!
                </p>
              </div>

              <div className="space-y-6">
                <Card className="border-l-4 border-l-blue-600">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 p-3 rounded-full">
                        <Phone className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Τηλέφωνο</h3>
                        <p className="text-gray-600 mb-1">Σταθερό: 23930 22810</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-green-600">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-green-100 p-3 rounded-full">
                        <MessageSquare className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Κινητό</h3>
                        <p className="text-gray-600 mb-1">69 7763 9528</p>
                        <p className="text-gray-600 mb-1">69 8716 1082</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-orange-600">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-orange-100 p-3 rounded-full">
                        <Mail className="h-6 w-6 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                        <p className="text-gray-600 mb-1">infocaravanbest@gmail.com</p>
                        <p className="text-gray-600">Απάντηση εντός 24 ωρών</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">Στείλτε μας μήνυμα</CardTitle>
                  <p className="text-gray-600">
                    Συμπληρώστε τη φόρμα και θα επικοινωνήσουμε μαζί σας το συντομότερο δυνατό.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Όνομα *</label>
                      <Input placeholder="Το όνομά σας" className="w-full" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Επώνυμο *</label>
                      <Input placeholder="Το επώνυμό σας" className="w-full" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <Input type="email" placeholder="your.email@example.com" className="w-full" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Τηλέφωνο</label>
                    <Input type="tel" placeholder="Το τηλέφωνό σας" className="w-full" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Θέμα *</label>
                    <Input placeholder="Το θέμα του μηνύματός σας" className="w-full" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Μήνυμα *</label>
                    <Textarea placeholder="Περιγράψτε την ανάγκη σας ή την ερώτησή σας..." className="w-full h-32" />
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3">
                    <Send className="h-5 w-5 mr-2" />
                    Αποστολή Μηνύματος
                  </Button>

                  <p className="text-sm text-gray-500 text-center">* Υποχρεωτικά πεδία</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Πού θα μας βρείτε</h2>
            <p className="text-lg text-gray-600">
              Επισκεφθείτε το κατάστημά για να δείτε από κοντά τα τροχόσπιτά μας
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Διεύθυνση Καταστήματος</h3>
                      <p className="text-gray-600 mb-4">
                        Βρισκόμαστε σε εύκολα προσβάσιμο σημείο με άνετο χώρο στάθμευσης για την επίσκεψή σας.
                      </p>
                      <div className="space-y-2">
                        <p className="text-gray-800 font-medium">📍 Νικομηδινό Θεσσαλονίκης 39ο χλμ. Παλαιάς Εθνικής Οδού Θεσσαλονίκης-Καβάλας</p>
                        <p className="text-gray-600">🕒 Κατόπιν ραντεβού για καλύτερη εξυπηρέτηση</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-blue-800 font-medium text-center">
                      💡 Συνιστούμε να κλείσετε ραντεβού πριν την επίσκεψή σας για εξατομικευμένη εξυπηρέτηση!
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3027.5531540803026!2d23.26493687641075!3d40.63973544203587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a85177aa2c51f5%3A0xd4e375d389b65be2!2sCaravanbest!5e0!3m2!1sel!2sgr!4v1742876684892!5m2!1sel!2sgr"
                style={{ border: 0, borderRadius: '10px', width: '100%', height: '100%' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <Image
                    src="/images/logo-white.png"
                    alt="Caravan Best Logo"
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold">CARAVAN BEST</h3>
                </div>
              </div>
              <p className="text-gray-400">
                Η εμπειρία μας από το 1997 στον χώρο των τροχόσπιτων είναι η εγγύησή σας για ποιότητα και αξιοπιστία.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Επικοινωνία</h4>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>+30 239 302 2810</span>
                </p>
                <p className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>+30 69 8716 1082</span>
                </p>
                <p className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>infocaravanbest@gmail.com</span>
                </p>
                <p className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Νικομηδινό Θεσσαλονίκης</span>
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Ακολουθήστε μας</h4>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/CaravanBest/" target="_blank" className="bg-blue-600 p-2 rounded-lg hover:bg-blue-700 transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Caravan Best. Όλα τα δικαιώματα διατηρούνται.</p>
            <p>Developed by <a href="https://www.linkedin.com/in/dimitrios-malkotsis-b2468b266" target="_blank">Dimitris Malkotsis</a></p>
          </div>
        </div>
      </footer>
    </div>
  )
}
