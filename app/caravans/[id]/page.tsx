"use client"
import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import {
  Phone,
  Mail,
  Facebook,
  Menu,
  MapPin,
  X,
  ArrowLeft,
  Users,
  Fuel,
  Droplets,
  Home,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import caravansData from "../../../data/caravans.json"

interface Caravan {
  id: string
  name: string
  brand: string
  model: string
  year: number
  length: string
  width: string
  weight: string
  price: string
  condition: string
  status: string
  description: string
  features: string[]
  specifications: {
    sleeps: string
    berths: string
    fuel: string
    water_capacity: string
    waste_capacity: string
    awning: string
  }
  images: string[]
  mainImage: string
}

export default function CaravanDetailPage() {
  const params = useParams()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [caravan, setCaravan] = useState<Caravan | null>(null)

  useEffect(() => {
    const foundCaravan = caravansData.caravans.find((c) => c.id === params.id)
    if (foundCaravan) {
      setCaravan(foundCaravan as Caravan)
    }
  }, [params.id])

  const nextImage = () => {
    if (caravan) {
      setCurrentImageIndex((prev) => (prev + 1) % caravan.images.length)
    }
  }

  const prevImage = () => {
    if (caravan) {
      setCurrentImageIndex((prev) => (prev - 1 + caravan.images.length) % caravan.images.length)
    }
  }

  if (!caravan) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Τροχόσπιτο δεν βρέθηκε</h1>
          <Button asChild>
            <a href="/caravans">Επιστροφή στα Τροχόσπιτα</a>
          </Button>
        </div>
      </div>
    )
  }

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

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm">
            <a href="/" className="text-gray-500 hover:text-blue-600">
              Αρχική
            </a>
            <span className="text-gray-400">/</span>
            <a href="/caravans" className="text-gray-500 hover:text-blue-600">
              Τροχόσπιτα
            </a>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium">{caravan.name}</span>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Button variant="outline" asChild>
          <a href="/caravans" className="flex items-center space-x-2">
            <ArrowLeft className="h-4 w-4" />
            <span>Επιστροφή στα Τροχόσπιτα</span>
          </a>
        </Button>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-100">
              <Image
                src={caravan.images[currentImageIndex] || "/placeholder.svg"}
                alt={`${caravan.name} - Image ${currentImageIndex + 1}`}
                fill
                className="object-cover"
              />

              {/* Navigation Arrows */}
              {caravan.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}

              {/* Image Counter */}
              <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {currentImageIndex + 1} / {caravan.images.length}
              </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-2">
              {caravan.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative aspect-[4/3] rounded-lg overflow-hidden ${
                    currentImageIndex === index ? "ring-2 ring-blue-600" : ""
                  }`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${caravan.name} thumbnail ${index + 1}`}
                    fill
                    className="object-cover hover:opacity-80 transition-opacity"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            {/* Header */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <Badge className="bg-blue-100 text-blue-800">{caravan.condition}</Badge>
                <div className="text-3xl font-bold text-blue-600">{caravan.price} €</div>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{caravan.name}</h1>
              <p className="text-lg text-gray-600">{caravan.description}</p>
            </div>

            {/* Basic Specifications */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Βασικά Στοιχεία</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-sm font-medium text-gray-500">Μάρκα:</span>
                    <p className="text-gray-900">{caravan.brand}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-500">Μοντέλο:</span>
                    <p className="text-gray-900">{caravan.model}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-500">Κατάσταση:</span>
                    <p className="text-gray-900">{caravan.status}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-500">Χρονολογία:</span>
                    <p className="text-gray-900">{caravan.year}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-500">Βάρος:</span>
                    <p className="text-gray-900">{caravan.weight}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-500">Μήκος:</span>
                    <p className="text-gray-900">{caravan.length}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-500">Φάρδος:</span>
                    <p className="text-gray-900">{caravan.width}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Detailed Specifications */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Λεπτομερείς Προδιαγραφές</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-blue-600" />
                    <div>
                      <span className="text-sm font-medium text-gray-500">Χωρητικότητα:</span>
                      <p className="text-gray-900">{caravan.specifications.sleeps}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Home className="h-5 w-5 text-blue-600" />
                    <div>
                      <span className="text-sm font-medium text-gray-500">Κρεβάτια:</span>
                      <p className="text-gray-900">{caravan.specifications.berths}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Home className="h-5 w-5 text-blue-600" />
                    <div>
                      <span className="text-sm font-medium text-gray-500">Τέντα:</span>
                      <p className="text-gray-900">{caravan.specifications.awning}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Features */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Χαρακτηριστικά & Εξοπλισμός</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2">
                  {caravan.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact Actions */}
            <div className="space-y-4">
              <Separator />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a href="tel: 6987161082">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    <Phone className="h-5 w-5 mr-2" />
                    Καλέστε μας
                  </Button>
                </a>
                <a href="mailto: infocaravanbest@gmail.com">
                  <Button size="lg" variant="outline">
                    <Mail className="h-5 w-5 mr-2" />
                    Στείλτε Email
                  </Button>
                </a>
              </div>
              <div className="text-center text-sm text-gray-500">
                Τηλέφωνο: 69 8716 1082 | Email: infocaravanbest@gmail.com
              </div>
            </div>
          </div>
        </div>
      </div>

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
