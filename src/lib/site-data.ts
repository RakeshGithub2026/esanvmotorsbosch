import heroCar from "@/assets/hero-car.jpg";
import svcMechanical from "@/assets/svc-mechanical.jpg";
import svcDiagnostic from "@/assets/svc-diagnostic.jpg";
import svcPaint from "@/assets/svc-paint.jpg";
import svcAlignment from "@/assets/svc-alignment.jpg";
import svcWash from "@/assets/svc-wash.jpg";
import galleryInterior from "@/assets/gallery-interior.jpg";
import galleryWheels from "@/assets/gallery-wheels.jpg";
import galleryCoating from "@/assets/gallery-coating.jpg";

export const CONTACT = {
  name: "ESANV Motors",
  phone: "+91 99658 11776",
  phoneHref: "tel:+919965811776",
  whatsapp: "919965811776",
  email: "esanvmotor@gmail.com",
  address: "Harur, Dharmapuri – 636903",
  hours: "Mon – Sun · 9:00 AM – 8:00 PM",
  store: "https://vyaparapp.in/store/esanvmotors1",
  maps: "https://www.google.com/maps/search/?api=1&query=Esanv%20Motors%2C%20Harur%2C%20Dharmapuri%20636903",
  instagram: "https://instagram.com",
};

export const IMAGES = {
  heroCar,
  svcMechanical,
  svcDiagnostic,
  svcPaint,
  svcAlignment,
  svcWash,
  galleryInterior,
  galleryWheels,
  galleryCoating,
};

export const HIGHLIGHTS = [
  "Partner with BOSCH CAR SERVICE",
  "50+ Car Services",
  "All Car Brands Covered",
  "Genuine Accessories",
  "Expert Technicians",
  "Customer Trusted Service",
];

export const WHY_US = [
  { title: "Multi-Brand Car Service", desc: "One workshop for every make & model." },
  { title: "Expert Mechanical & Electrical", desc: "Trained multi-brand technicians." },
  { title: "Premium Accessories Showroom", desc: "Curated, high-quality accessories." },
  { title: "Advanced Diagnostic Scanning", desc: "Modern OBD & brand-specific tools." },
  { title: "24/7 Breakdown Service", desc: "Roadside help, day or night." },
  { title: "Door Step Pickup & Delivery", desc: "We collect and return your car." },
  { title: "Insurance Support", desc: "Renewal, claim & cashless assistance." },
  { title: "Premium Coating Solutions", desc: "PPF, Ceramic, Graphene, Borophene." },
  { title: "Trusted Customer Service", desc: "Transparent, quality-first care." },
];

export const SERVICES = [
  { name: "All Car Service", desc: "Periodic maintenance and complete multi-brand car servicing.", img: svcMechanical },
  { name: "Mechanical & Electrical", desc: "Engine, transmission and full electrical repair works.", img: svcMechanical },
  { name: "Diagnostic & Scanning", desc: "Advanced computerised diagnostics for every brand.", img: svcDiagnostic },
  { name: "Scanning & Electronics", desc: "ECU, sensor and electronic module repair & coding.", img: svcDiagnostic },
  { name: "Painting", desc: "Full body & panel painting with premium finish.", img: svcPaint },
  { name: "Tinkering", desc: "Precision denting, tinkering and body straightening.", img: svcPaint },
  { name: "Wheel Alignment", desc: "Computerised 3D alignment for perfect handling.", img: svcAlignment },
  { name: "Alignment & Tyre Changing", desc: "Alignment, balancing and tyre replacement.", img: svcAlignment },
  { name: "Washing & Interior Cleaning", desc: "Exterior wash and deep interior detailing.", img: svcWash },
];

export const EXTRA_SERVICES = [
  { name: "AC Service & Gas Topup", desc: "Cooling checks, gas refill and AC repair." },
  { name: "Ceramic / Graphene / PPF", desc: "Premium paint protection & coating solutions." },
  { name: "Insurance Assistance", desc: "Renewal, claims and cashless support." },
  { name: "Accessories & Modification", desc: "Interior, exterior and performance upgrades." },
  { name: "Water Wash & Detailing", desc: "Foam wash, polishing and deep detailing." },
  { name: "Doorstep Pickup & Delivery", desc: "We collect and return your vehicle." },
];

export const ACCESSORIES = [
  "Seat Covers", "Sunfilms", "Floor Mats", "Steering Covers", "Car Perfumes",
  "Infotainment", "Speakers", "LED Lights", "Body Covers", "Cleaning Kits",
];

export const SHOWROOM = [
  { name: "Seat Covers & Interiors", tag: "Interior", img: galleryInterior },
  { name: "Alloy Wheels", tag: "Wheels", img: galleryWheels },
  { name: "Sunfilm & Styling", tag: "Exterior", img: galleryCoating },
  { name: "Modification & Facelift", tag: "Body Kits", img: svcPaint },
];

export const BRANDS = [
  "Hyundai", "Honda", "Tata", "Maruti Suzuki", "Mahindra", "Toyota",
  "Kia", "Renault", "Nissan", "Volkswagen", "Skoda", "Ford",
  "BMW", "Mercedes-Benz", "Audi", "MG", "Jeep", "Volvo",
];

export const GALLERY = [
  { title: "Workshop Photos", img: svcMechanical },
  { title: "Service Area", img: svcAlignment },
  { title: "Accessories Store", img: galleryInterior },
  { title: "Customer Delivery", img: svcWash },
  { title: "Team Photos", img: galleryWheels },
  { title: "Before & After Service", img: svcPaint },
  { title: "Coating & Detailing", img: galleryCoating },
  { title: "Diagnostics Bay", img: svcDiagnostic },
  { title: "Hero Delivery", img: heroCar },
];

export const REVIEWS = [
  { text: "Excellent multi-brand service. The team diagnosed my SUV instantly and delivered it back the same day.", name: "Ravi Kumar", city: "Harur" },
  { text: "Got ceramic coating done — the finish is stunning. Very professional and transparent pricing.", name: "Priya S.", city: "Dharmapuri" },
  { text: "Their breakdown assistance saved my trip. Doorstep pickup is a real time-saver.", name: "Arun Balaji", city: "Salem" },
];

export const SERVICE_OPTIONS = [
  "General Car Service", "Mechanical & Electrical", "Diagnostic & Scanning",
  "Painting / Tinkering", "Wheel Alignment / Tyres", "Washing & Detailing",
  "AC Service / Gas Topup", "Ceramic / Graphene / PPF Coating",
  "Accessories & Modification", "Insurance / Other",
];