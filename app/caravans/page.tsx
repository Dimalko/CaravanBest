"use client"
import { useState } from "react"
import Image from "next/image"
import { Phone, Mail, MapPin, Calendar, Weight, Ruler, Search, Filter, Facebook, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const caravans = [
  {
    id: "eifelland-holiday-50",
    name: "Eifelland Holiday 50",
    year: 2003,
    length: "5.40m",
    weight: "1.300kg",
    price: "8.500",
    image: "/images/products/eifelland/eifelland-1.JPG",
    features: ["Κουζίνα", "Τουαλέτα", "Αποθηκευτικός χώρος", "2 κρεβάτια"],
    condition: "Καλή",
    description: "Καλή κατάσταση.",
  },
  {
    id: "caravelair-426",
    name: "Caravelair 426",
    year: 2000,
    length: "4.30m",
    weight: "1.100kg",
    price: "6.500",
    image: "/images/products/caravelair/caravelair-1.JPG",
    features: ["Κουζίνα", "Τουαλέτα", "Αποθηκευτικός χώρος", "1 κρεβάτι", "Κουκέτα"],
    condition: "Καλή",
    description: "Καλή κατάσταση.",
  },
  {
    id: "eriba-nova-490",
    name: "Eriba Nova 490",
    year: 1987,
    length: "5.00m",
    weight: "1.350kg",
    price: "3.500",
    image: "/images/products/eriba/eriba-1.JPG",
    features: ["Κουζίνα", "Ντούζ", "Αποθηκευτικός χώρος", "2 κρεβάτια",],
    condition: "Καλή",
    description: "Καλή κατάσταση.",
  },
  {
    id: "lmc-450",
    name: "LMC 450",
    year: 1991,
    length: "3.50m",
    weight: "1.200kg",
    price: "3.500",
    image: "/images/products/lmc/lmc-1.JPG",
    features: ["Κουζίνα", "Τουαλέτα", "Αποθηκευτικός χώρος", "3 κρεβάτια"],
    condition: "Καλή",
    description: "Καλή κατάσταση.",
  },
  {
    id: "hobby-550-tkm",
    name: "Hobby 550 TKM",
    year: 1994,
    length: "6.20m",
    weight: "1.500kg",
    price: "6.500",
    image: "/images/products/hobby/hobby-1.JPG",
    features: ["Κουζίνα", "Σταθερή τουαλέτα", "Αποθηκευτικός χώρος", "2 κρεβάτια", "Κουκέτα"],
    condition: "Καλή",
    description: "Καλή κατάσταση.",
  },
]

export default function CaravansPage() {
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
              <a href="/caravans" className="text-blue-600 font-medium border-b-2 border-blue-600">
                Τροχόσπιτα
              </a>
              <a href="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
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
                  className="block px-3 py-2 text-blue-600 font-medium bg-blue-50 rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Τροχόσπιτα
                </a>
                <a
                  href="/contact"
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
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
            <Badge className="mb-4 bg-white/20 text-white border-0">Διαθέσιμα Τροχόσπιτα</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Τα Τροχόσπιτά μας</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Ανακαλύψτε την συλλογή μας από μεταχειρισμένα τροχόσπιτα σε καλή κατάσταση.
              Όλα τα τροχόσπιτα έχουν ελεγχθεί και συντηρηθεί από εμάς.
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      {/* <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input placeholder="Αναζήτηση τροχόσπιτου..." className="pl-10 bg-white" />
              </div>
            </div>

            <div className="flex gap-4">
              <Select>
                <SelectTrigger className="w-40 bg-white">
                  <SelectValue placeholder="Έτος" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2020+">2020+</SelectItem>
                  <SelectItem value="2010-2019">2010-2019</SelectItem>
                  <SelectItem value="2000-2009">2000-2009</SelectItem>
                  <SelectItem value="1990-1999">1990-1999</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="w-40 bg-white">
                  <SelectValue placeholder="Τιμή" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-5000">0€ - 5.000€</SelectItem>
                  <SelectItem value="5000-10000">5.000€ - 10.000€</SelectItem>
                  <SelectItem value="10000-15000">10.000€ - 15.000€</SelectItem>
                  <SelectItem value="15000+">15.000€+</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline" className="bg-white">
                <Filter className="h-4 w-4 mr-2" />
                Φίλτρα
              </Button>
            </div>
          </div>
        </div>
      </section> */}

      {/* Caravans Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Διαθέσιμα Τροχόσπιτα</h2>
            <p className="text-gray-600">Βρέθηκαν {caravans.length} τροχόσπιτα</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caravans.map((caravan) => (
              <Card key={caravan.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <a href={`/caravans/${caravan.id}`} className="block">
                  <div className="relative h-64">
                    <Image src={caravan.image || "/placeholder.svg"} alt={caravan.name} fill className="object-cover" />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-blue-600 text-white">{caravan.condition}</Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-green-600 text-white text-lg font-bold">{caravan.price}€</Badge>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl text-gray-900">{caravan.name}</CardTitle>
                    <p className="text-gray-600">{caravan.description}</p>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {/* Specifications */}
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <Calendar className="h-5 w-5 text-gray-600 mx-auto mb-1" />
                        <p className="font-medium text-gray-900">{caravan.year}</p>
                        <p className="text-gray-600">Έτος</p>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <Ruler className="h-5 w-5 text-gray-600 mx-auto mb-1" />
                        <p className="font-medium text-gray-900">{caravan.length}</p>
                        <p className="text-gray-600">Μήκος</p>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <Weight className="h-5 w-5 text-gray-600 mx-auto mb-1" />
                        <p className="font-medium text-gray-900">{caravan.weight}</p>
                        <p className="text-gray-600">Βάρος</p>
                      </div>
                    </div>

                    {/* Features */}
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Χαρακτηριστικά:</h4>
                      <div className="flex flex-wrap gap-2">
                        {caravan.features.map((feature, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </a>

                {/* Action Buttons - Outside the link */}
                <CardContent className="pt-0">
                  <div className="flex gap-2">
                    <a href="/contact">
                      <Button className="flex-1 bg-blue-600 hover:bg-blue-700" onClick={(e) => e.stopPropagation()}>
                        <Phone className="h-4 w-4 mr-2" />
                        Επικοινωνία
                      </Button>
                    </a>
                    <Button variant="outline" className="flex-1" asChild>
                      <a href={`/caravans/${caravan.id}`}>Περισσότερα</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Δεν βρήκατε αυτό που ψάχνετε;</h2>
          <p className="text-xl text-blue-100 mb-8">
            Επικοινωνήστε μαζί μας! Ενδέχεται να έχουμε ανταλλακτικά ή τροχοσκηνές διαθέσιμες που δεν έχουν ακόμα προστεθεί
            στην ιστοσελίδα μας, ή μπορούμε να σας βοηθήσουμε να βρείτε ακριβώς αυτό που χρειάζεστε.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel: +306987161082">
              <Button 
                size="lg" 
                variant="secondary" 
                className="text-lg px-8 py-3"
              >
                <Phone className="h-5 w-5 mr-2" />
                Καλέστε μας
              </Button>
            </a>
            <a href="mailto: infocaravanbest@gmail.com">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-3 text-blue-600 border-white hover:bg-blue-100 hover:text-black"
              >
                <Mail className="h-5 w-5 mr-2" />
                Στείλτε Email
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Γιατί να επιλέξετε τα τροχόσπιτά μας;</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 p-2 rounded-full mt-1">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Εμπειρία 25+ Ετών</h3>
                    <p className="text-gray-600">
                      Η εμπειρία μας προσφέρει επαγγελματισμό και αξιοπιστία σε εσάς.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 p-2 rounded-full mt-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Πλήρης Έλεγχος</h3>
                    <p className="text-gray-600">
                      Κάθε τροχόσπιτο ελέγχεται διεξοδικά για ασφάλεια και λειτουργικότητα.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-orange-100 p-2 rounded-full mt-1">
                    <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Πανελλήνια Παράδοση</h3>
                    <p className="text-gray-600">Παραδίδουμε το τροχόσπιτό σας σε όλη την Ελλάδα με ασφάλεια.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Χρειάζεστε βοήθεια;</h3>
              <p className="text-gray-600 mb-6">
                Είματε εδώ για να σας βοηθήσουμε να βρείτε το ιδανικό τροχόσπιτο για τις ανάγκες σας.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-700">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <a href="tel: +306987161082"><span>69 8716 1082</span></a>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <a href="mailto: infocaravanbest@gmail.com"><span>infocaravanbest@gmail.com</span></a>
                </div>
              </div>
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
