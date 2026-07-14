import heroCar from "@/assets/hero-car.jpg";
import svcGeneral from "@/assets/svc-general.jpg";
import svcMechanical from "@/assets/svc-mechanical.jpg";
import svcDiagnostic from "@/assets/svc-diagnostic.jpg";
import svcElectronics from "@/assets/svc-electronics.jpg";
import svcPaint from "@/assets/svc-paint.jpg";
import svcTinkering from "@/assets/svc-tinkering.jpg";
import svcAlignment from "@/assets/svc-alignment.jpg";
import svcTyre from "@/assets/svc-tyre.jpg";
import svcWash from "@/assets/svc-wash.jpg";
import svcAc from "@/assets/svc-ac.jpg";
import galleryInterior from "@/assets/gallery-interior.jpg";
import galleryWheels from "@/assets/gallery-wheels.jpg";
import galleryCoating from "@/assets/gallery-coating.jpg";
import coatingCeramic from "@/assets/coating-ceramic.jpg";
import coatingGraphene from "@/assets/coating-graphene.jpg";
import coatingPpf from "@/assets/coating-ppf.jpg";
import accSeatcovers from "@/assets/acc-seatcovers.jpg";
import accSunfilm from "@/assets/acc-sunfilm.jpg";
import accMats from "@/assets/acc-mats.jpg";
import accSteering from "@/assets/acc-steering.jpg";
import accPerfume from "@/assets/acc-perfume.jpg";
import accInfotainment from "@/assets/acc-infotainment.jpg";
import accSpeakers from "@/assets/acc-speakers.jpg";
import accLed from "@/assets/acc-led.jpg";
import accBodycover from "@/assets/acc-bodycover.jpg";
import accCleaning from "@/assets/acc-cleaning.jpg";
import esanvLogo from "@/assets/esanv-logo.jpeg.asset.json";
import boschLogo from "@/assets/bosch-logo.jpeg.asset.json";
import brHyundai from "@/assets/brands/hyundai.svg.asset.json";
import brHonda from "@/assets/brands/honda.svg.asset.json";
import brTata from "@/assets/brands/tata.svg.asset.json";
import brSuzuki from "@/assets/brands/suzuki.svg.asset.json";
import brMahindra from "@/assets/brands/mahindra.svg.asset.json";
import brToyota from "@/assets/brands/toyota.svg.asset.json";
import brKia from "@/assets/brands/kia.svg.asset.json";
import brRenault from "@/assets/brands/renault.svg.asset.json";
import brNissan from "@/assets/brands/nissan.svg.asset.json";
import brVolkswagen from "@/assets/brands/volkswagen.svg.asset.json";
import brSkoda from "@/assets/brands/skoda.svg.asset.json";
import brFord from "@/assets/brands/ford.svg.asset.json";
import brBmw from "@/assets/brands/bmw.svg.asset.json";
import brMercedes from "@/assets/brands/mercedes.svg.asset.json";
import brAudi from "@/assets/brands/audi.svg.asset.json";
import brMg from "@/assets/brands/mg.svg.asset.json";
import brJeep from "@/assets/brands/jeep.svg.asset.json";
import brVolvo from "@/assets/brands/volvo.svg.asset.json";
import galFounder from "@/assets/gallery/founder.png.asset.json";
import galServiceBay from "@/assets/gallery/service-bay.png.asset.json";
import galWorkshopHall from "@/assets/gallery/workshop-hall.png.asset.json";
import galWorkshopTop from "@/assets/gallery/workshop-top.png.asset.json";
import galServiceArea from "@/assets/gallery/service-area.png.asset.json";
import galWaterWash from "@/assets/gallery/water-wash.png.asset.json";
import galShowroomFront from "@/assets/gallery/showroom-front.png.asset.json";
import galAccessoriesStore from "@/assets/gallery/accessories-store.png.asset.json";

export const CONTACT = {
  name: "ESANV Motors",
  phone: "+91 99658 11776",
  phoneHref: "tel:+919965811776",
  whatsapp: "919965811776",
  email: "esanvmotor@gmail.com",
  address: "Gopinathampatti Koot Road, near Harur, Dharmapuri District – 636905",
  hours: "Mon – Sun · 9:00 AM – 8:00 PM",
  store: "https://vyaparapp.in/store/esanvmotors1",
  maps: "https://www.google.com/maps/search/?api=1&query=Esanv%20Motors%2C%20Gopinathampatti%20Koot%20Road%2C%20Harur%2C%20Dharmapuri%20636905",
  instagram: "https://instagram.com",
};

export const LOGOS = {
  esanv: esanvLogo.url,
  bosch: boschLogo.url,
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
  { name: "All Car Service", desc: "Periodic maintenance and complete multi-brand car servicing.", img: svcGeneral },
  { name: "Mechanical & Electrical", desc: "Engine, transmission and full electrical repair works.", img: svcMechanical },
  { name: "Diagnostic & Scanning", desc: "Advanced computerised diagnostics for every brand.", img: svcDiagnostic },
  { name: "Scanning & Electronics", desc: "ECU, sensor and electronic module repair & coding.", img: svcElectronics },
  { name: "Painting", desc: "Full body & panel painting with premium finish.", img: svcPaint },
  { name: "Tinkering", desc: "Precision denting, tinkering and body straightening.", img: svcTinkering },
  { name: "Wheel Alignment", desc: "Computerised 3D alignment for perfect handling.", img: svcAlignment },
  { name: "Alignment & Tyre Changing", desc: "Alignment, balancing and tyre replacement.", img: svcTyre },
  { name: "Washing & Interior Cleaning", desc: "Exterior wash and deep interior detailing.", img: svcWash },
  { name: "AC Service & Gas Topup", desc: "Cooling checks, gas refill and complete AC repair.", img: svcAc },
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
  { name: "Seat Covers", desc: "Premium leather & fabric seat covers.", img: accSeatcovers },
  { name: "Sun Films", desc: "Heat-cut window tint & sun protection.", img: accSunfilm },
  { name: "Floor Mats", desc: "Custom-fit 3D & 7D floor mats.", img: accMats },
  { name: "Steering Covers", desc: "Comfort-grip leather steering covers.", img: accSteering },
  { name: "Car Perfumes", desc: "Long-lasting fragrances & diffusers.", img: accPerfume },
  { name: "Infotainment", desc: "Android touchscreen head units.", img: accInfotainment },
  { name: "Speakers", desc: "Component speakers, subwoofers & amps.", img: accSpeakers },
  { name: "LED Lights", desc: "Headlight bulbs & interior LED kits.", img: accLed },
  { name: "Body Covers", desc: "Waterproof full car body covers.", img: accBodycover },
  { name: "Cleaning Kits", desc: "Microfiber, brushes & polish kits.", img: accCleaning },
];

export const COATINGS = [
  { name: "Ceramic Coating", desc: "9H hardness gloss & hydrophobic shine.", img: coatingCeramic },
  { name: "Graphene Coating", desc: "Superior heat resistance & deep gloss.", img: coatingGraphene },
  { name: "Paint Protection Film", desc: "Self-healing PPF against chips & scratches.", img: coatingPpf },
];

export const SHOWROOM = [
  { name: "Seat Covers & Interiors", tag: "Interior", img: accSeatcovers },
  { name: "Alloy Wheels", tag: "Wheels", img: galleryWheels },
  { name: "Sunfilm & Styling", tag: "Exterior", img: accSunfilm },
  { name: "Modification & Facelift", tag: "Body Kits", img: svcPaint },
];

export const BRANDS = [
  { name: "Hyundai", logo: brHyundai.url },
  { name: "Honda", logo: brHonda.url },
  { name: "Tata", logo: brTata.url },
  { name: "Maruti Suzuki", logo: brSuzuki.url },
  { name: "Mahindra", logo: brMahindra.url },
  { name: "Toyota", logo: brToyota.url },
  { name: "Kia", logo: brKia.url },
  { name: "Renault", logo: brRenault.url },
  { name: "Nissan", logo: brNissan.url },
  { name: "Volkswagen", logo: brVolkswagen.url },
  { name: "Skoda", logo: brSkoda.url },
  { name: "Ford", logo: brFord.url },
  { name: "BMW", logo: brBmw.url },
  { name: "Mercedes-Benz", logo: brMercedes.url },
  { name: "Audi", logo: brAudi.url },
  { name: "MG", logo: brMg.url },
  { name: "Jeep", logo: brJeep.url },
  { name: "Volvo", logo: brVolvo.url },
];

export const GALLERY = [
  { title: "Founder — ESANV Motors", img: galFounder.url },
  { title: "Service Bay", img: galServiceBay.url },
  { title: "Workshop Hall", img: galWorkshopHall.url },
  { title: "Multi-Brand Workshop", img: galWorkshopTop.url },
  { title: "Service Area", img: galServiceArea.url },
  { title: "Water Wash Bay", img: galWaterWash.url },
  { title: "Bosch Car Service Facade", img: galShowroomFront.url },
  { title: "Accessories Store", img: galAccessoriesStore.url },
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