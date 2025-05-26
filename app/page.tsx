"use client"
import { useState } from "react"
import Image from "next/image"
import { Facebook, Phone, Mail, MapPin, Star, PackageSearch, Truck, Users, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function HomePage() {
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
              <a href="/" className="text-blue-600 font-medium border-b-2 border-blue-600">
                Αρχική
              </a>
              <a href="/caravans" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
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
                  className="block px-3 py-2 text-blue-600 font-medium bg-blue-50 rounded-md"
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
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/knaus_road2.webp"
            alt="Caravan on scenic coastal road"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <Badge className="mb-4 bg-blue-600/90 text-white border-0">Από το 1997 στην Ελλάδα</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Ψάχνεις για:</h1>
          <div className="text-xl md:text-2xl mb-8 space-y-2">
            <p>τροχόσπιτο,</p>
            <p>ανταλλακτικά,</p>
            <p>ή τροχοσκηνή;</p>
          </div>
          <a href="/contact">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
              Επικοινώνησε μαζί μας!
            </Button>
          </a>
          
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <PackageSearch className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Μεγάλη Γκάμα Προϊόντων</h3>
                <p className="text-gray-600">
                  Παρέχουμε μεγάλη γκάμα σε ανταλλακτικά και τροχοσκηνές
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Εμπειρία 25+ Ετών</h3>
                <p className="text-gray-600">Εξυπηρετούμε πελάτες από το 1997 με επαγγελματισμό και αξιοπιστία</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Πανελλήνια Κάλυψη</h3>
                <p className="text-gray-600">Παραδόσεις και υπηρεσίες σε όλη την Ελλάδα με δικά μας μέσα</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800">Η Ιστορία μας</Badge>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Λίγα λόγια για εμάς</h2>
              <div className="prose prose-lg text-gray-600 space-y-4">
                <p>
                  Στο κατάστημά μας, που λειτουργεί από το 1997, θα βρείτε μια προσεκτικά επιλεγμένη συλλογή
                  μεταχειρισμένων τροχόσπιτων σε εξαιρετική κατάσταση.
                </p>
                <p>
                  Παρέχουμε επίσης ανταλλακτικά, αξεσουάρ και εξοπλισμό για τροχόσπιτα, καλύπτοντας κάθε ανάγκη σας.
                  Διαθέτουμε τροχόσπιτα διαφόρων κατηγοριών, πάντα με εγγυημένη ποιότητα και ασφάλεια.
                </p>
                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                  <p className="text-green-800 font-medium">
                    📸 Οι φωτογραφίες στην ιστοσελίδα μας είναι αυθεντικές και απεικονίζουν τα τροχόσπιτα που
                    διαθέτουμε στην έκθεσή μας.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative w-full h-96 lg:h-full rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/about-image.jpg"
                alt="Το κατάστημα μας ή έκθεση τροχόσπιτων"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-orange-100 text-orange-800">Υπηρεσίες Παράδοσης</Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Παραδόσεις με δικά μας μέσα σε όλη την Ελλάδα</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Η διαδικασία αγοράς τροχόσπιτου γίνεται εύκολη και χωρίς άγχος! Εσείς απλά επισκεφθείτε την έκθεσή μας,
              διαλέξτε το ιδανικό τροχόσπιτο για τις ανάγκες σας, και εμείς αναλαμβάνουμε τη μεταφορά του στον προορισμό
              σας με τα δικά μας μέσα.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            
            <p></p>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Truck className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold">Ασφαλής Μεταφορά</h3>
                </div>
                <p className="text-gray-600">
                  Χρησιμοποιούμε δικά μας οχήματα και εξοπλισμό για την ασφαλή μεταφορά του τροχόσπιτού σας.
                </p>
              </CardContent>
            </Card>

            {/* <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Users className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold">Έμπειρο Προσωπικό</h3>
                </div>
                <p className="text-gray-600">
                  Το εκπαιδευμένο προσωπικό μας φροντίζει για την παράδοση και την εγκατάσταση.
                </p>
              </CardContent>
            </Card> */}
            
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Θέλετε επιπλέον εξοπλισμό;</h2>
          <p className="text-xl text-blue-100 mb-8">
            Διαθέτουμε σκηνές, ανταλλακτικά και άλλα είδη για τροχόσπιτα. Μην διστάσετε να επικοινωνήσετε μαζί μας για
            οποιαδήποτε απορία ή ανάγκη!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary" 
              className="text-lg px-8 py-3"
              >
              <Phone className="h-5 w-5 mr-2" />
              Τηλεφωνική Επικοινωνία
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-3 text-blue-600 border-white hover:bg-blue-100 hover:text-black"
            >
              <Mail className="h-5 w-5 mr-2" />
              Στείλτε Email
            </Button>
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
