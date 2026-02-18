import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDown, Phone, Mail, MapPin, PhoneCall } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import styles from "./GrohairLanding.module.css";

// Hair treatment images (webp)
import mesoImg from "../../assets/meso.webp";
import oxyImg from "../../assets/oxy.webp";
import prpImg from "../../assets/prp.webp";
import hairTransImg from "../../assets/HairTrans.webp";
import fueImg from "../../assets/fue.webp";
import eyebrowImg from "../../assets/eyebrow.webp";
import beardImg from "../../assets/beard.webp";
import mustacheImg from "../../assets/mustache.webp";
import scalpImg from "../../assets/scalp.webp";
import partialAlopeciaImg from "../../assets/parti-alopica-1.webp";
import totalAlopeciaImg from "../../assets/full-alopica.webp";
import microbladingImg from "../../assets/microblading.webp";
import eyelashImg from "../../assets/eyelash.webp";
import basicThinPolyImg from "../../assets/basic-thin-poly.webp";
import celebrityChoiceImg from "../../assets/celebrity-choice.webp";
import fullLaceImg from "../../assets/full-lace.webp";
import hairExImg from "../../assets/hairEx.webp";
import menFullCapImg from "../../assets/men-full-cap.webp";
import womenFullCapImg from "../../assets/women-full-cap.webp";

// Skin treatment images
import skinPeelsImg from "../../assets/skinpeels.jpg";
import microdermabrasionImg from "../../assets/microdermabrasion.jpg";
import qSwitchedLaserImg from "../../assets/qswitchedlaser.jpg";
import ndyagLaserImg from "../../assets/ndyaglaser.jpg";
import diodeLaserImg from "../../assets/laser.jpg";
import rfFacialsImg from "../../assets/radiofrequency.jpg";
import botoxImg from "../../assets/botox.jpg";
import dermaFillersImg from "../../assets/dermafillers.jpg";
import facePrpImg from "../../assets/faceprp.jpg";
import hydrafacialImg from "../../assets/hydrafacial (2).jpg";

// Before/After images
import ba1 from "../../assets/BeforeAfter/b-a-01.webp";
import ba2 from "../../assets/BeforeAfter/b-a-02.webp";
import ba3 from "../../assets/BeforeAfter/b-a-03.webp";
import ba4 from "../../assets/BeforeAfter/b-a-04.webp";

import logo from "../../assets/logo.png";
import footerLogo from "../../assets/footer.png";

const GrohairLanding = () => {
  const navigate = useNavigate();
  const [activeHairFaq, setActiveHairFaq] = useState(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const [selectedHairTreatment, setSelectedHairTreatment] = useState(0);
  const [selectedSkinTreatment, setSelectedSkinTreatment] = useState(0);
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    date: "",
    time: "",
    treatment: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState({ type: "", text: "" });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 },
    );

    document.querySelectorAll("[data-animate]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const hairTreatments = [
    {
      title: "Meso Therapy",
      description: "Hair Mesotherapy is a minimally invasive treatment where a customized blend of vitamins, amino acids, peptides, and hyaluronic acid is delivered into the scalp through microinjections to nourish hair follicles and promote thicker, healthier hair growth. Recommended every 15 days for 10\u201312 sessions for optimal results.",
      image: mesoImg,
      benefits: ["Reduces hair fall", "Improves hair thickness", "Supports follicle health", "No downtime"],
    },
    {
      title: "Oxygen Laser Therapy (OLT)",
      description: "Oxygen Laser Therapy is a non-invasive treatment that uses advanced light technology to stimulate scalp circulation, improve oxygen delivery, and support healthy hair follicle function. It is safe, painless, and suitable for both men and women. OLT is also beneficial after hair transplantation to support healing and promote early growth.",
      image: oxyImg,
      benefits: ["Reduces hair fall", "Strengthens thin hair", "Improves scalp oxygenation", "Balances scalp health", "Stimulates dormant follicles"],
    },
    {
      title: "PRP Pro+",
      description: "PRP Pro+ is an advanced hair restoration treatment that uses the healing power of your own platelets to stimulate hair follicles and promote natural regrowth. The concentrated plasma, rich in growth factors, is carefully injected into the scalp to strengthen miniaturizing and newly implanted follicles. For optimal results, 8\u201310 sessions are typically recommended at 20-day intervals.",
      image: prpImg,
      benefits: ["Controls hair fall", "Stimulates natural regrowth", "Strengthens hair strands", "Non-surgical procedure", "Uses your body\u2019s own natural growth factors"],
    },
    {
      title: "Basic Hair Transplant FUE",
      description: "FUE (Follicular Unit Extraction) is a minimally invasive hair restoration procedure where healthy hair follicles are carefully extracted from the donor area and precisely implanted into thinning or balding areas. Performed under local anesthesia, the procedure is typically completed within a day and requires minimal downtime.",
      image: hairTransImg,
      benefits: ["Natural, permanent hair growth", "Minimally invasive procedure", "No major cuts or stitches", "Minimal downtime", "Uses your own hair follicles", "One-day procedure"],
    },
    {
      title: "Percutaneous FUE",
      description: "Percutaneous FUE is an advanced version of the FUE hair transplant technique performed using specialized micro-motor technology. Ultra-fine punches (0.7\u20130.8 mm) are used to carefully extract and implant grafts with precise control over depth, direction, and density \u2014 ensuring natural-looking, high-density results.",
      image: fueImg,
      benefits: ["Precise control of depth, direction & density", "High graft survival rate", "Minimally invasive", "No major cuts or stitches", "One-day procedure", "Faster recovery", "High-density natural results"],
    },
    {
      title: "Eyebrow Transplant",
      description: "Eyebrows are your facial landmark. Why cover it up with pencils and liners when you can restore uniformed thickness with Eyebrow Transplant. Removing suitable hair follicles from the area around your ear and implanting it to your existing brow line helps you achieve a fuller looking eyebrow regrowth.",
      image: eyebrowImg,
      benefits: ["Achieve thicker brows", "Encourage hair regrowth", "No Visible Scars", "Attain Natural Look", "Safe and Effective"],
    },
    {
      title: "Beard Transplant",
      description: "Men who have patchy beard or thin facial hair have a solution to undergo beard transplant. Healthy hair follicles are extracted from the donor area and then implanted to the facial skin with two extensive treatments \u2014 Basic beard transplant and Percutaneous Beard Transplant.",
      image: beardImg,
      benefits: ["Improves Density", "Fill in bald patches", "Natural Looking Facial Hair", "No minor linear scarring", "Permanent Solution"],
    },
    {
      title: "Moustache Transplant",
      description: "With successful advances in hair transplant techniques, restoring moustache hair is now possible with Moustache Transplant. Men who could not grow moustache due to injuries or having low density can achieve thick moustache line with the grafts extracted from the donor site.",
      image: mustacheImg,
      benefits: ["Covers moustache Patches", "Highlight Masculine Features", "Can Trim or Shave the transplanted hair", "Get Natural Results", "No Visible Scars"],
    },
    {
      title: "Scalp Micropigmentation (SMP)",
      description: "Scalp Micropigmentation is a non-invasive procedure that creates the appearance of fuller hair by depositing specialized pigments into the scalp using advanced micro-precision technology. It is an effective solution for hair thinning, alopecia, and male or female pattern baldness. Each procedure lasts approximately 4\u20135 hours.",
      image: scalpImg,
      benefits: ["Creates a natural, fuller look", "Immediate visible improvement", "Safe for existing hair", "Non-surgical procedure", "Effectively camouflages hair loss"],
    },
    {
      title: "Partial Alopecia",
      description: "The main characteristic of the patchy type of alopecia areata is one or more coin-sized patches of hair loss on the skin or body. If this condition expands, it may become alopecia totalis or alopecia universalis.",
      image: partialAlopeciaImg,
      benefits: ["Arrests Hair fall", "Controls scalp sebum production", "Maintains the scalp PH level", "Stimulate dormant hair follicles", "Improves hair quality"],
    },
    {
      title: "Total Alopecia",
      description: "Alopecia totalis is a chronic condition of complete hair loss of the scalp, which affects a small percentage of patients with alopecia areata. Treatment outcomes are best when this disease is recognized and treated early in its course.",
      image: totalAlopeciaImg,
      benefits: ["Arrests Hair fall", "Controls scalp sebum production", "Maintains the scalp PH level", "Stimulate dormant hair follicles", "Improves hair quality"],
    },
    {
      title: "Microblading",
      description: "Women believe Eyebrows enhance their facial identity. Microblading accounts for all your brow desires by implanting pigments as short strokes into the superficial layers of the skin in order to resemble natural eyebrow hairs. Procedure timing 3 hours. 1 main procedure + 2 follow up sessions.",
      image: microbladingImg,
      benefits: ["Reshape your brow line", "Fuller & Denser Look", "Won\u2019t stop Natural Growth", "Quick Procedure", "Get your Dream Eyebrows"],
    },
    {
      title: "Eyelash Lift & Extensions",
      description: "Eyelash Lift and Extensions are aesthetic procedures designed to enhance the appearance of your natural lashes. A lash lift gently elevates and curls your existing lashes. Lash extensions add length and density using carefully applied, semi-processed natural fibers for a fuller yet natural finish. The procedure typically takes about 1 hour.",
      image: eyelashImg,
      benefits: ["Enhances eye definition", "Fuller and more refined appearance", "Natural-looking results", "Non-surgical procedure", "Immediate visible improvement"],
    },
    {
      title: "Basic Thin Poly",
      description: "The basic thin poly base is exactly what you\u2019re looking for! AdGrohair offers the finest of the thin poly base systems which suits your scalp, including some of the finest thin base hair systems on the market. The duration the systems are the longest in the entire class and offers good volume and density post final cut and design.",
      image: basicThinPolyImg,
      benefits: ["Lightweight and comfortable", "Natural scalp appearance", "Good volume and density", "Long-lasting durability"],
    },
    {
      title: "Celebrity Choice",
      description: "AdGroHair\u2019s Celebrity Choice Hair Systems are advanced non-surgical hair replacement solutions designed to create a natural-looking hairline and seamless appearance. Available options include PU with lace front, mono with lace front, and thin skin with lace front designs \u2014 offering a balance of realism, comfort, and durability.",
      image: celebrityChoiceImg,
      benefits: ["Natural-looking hairline", "Customized base options", "Comfortable and lightweight design", "Durable and long-lasting", "Non-surgical solution", "Versatile styling options"],
    },
    {
      title: "Full Lace",
      description: "The Full Lace Hair System is one of the most preferred non-surgical hair replacement options worldwide. Crafted with a lightweight and breathable lace base, it allows proper airflow to the scalp, ensuring comfort throughout the day. The lace construction provides a seamless hairline and natural movement.",
      image: fullLaceImg,
      benefits: ["Highly natural hairline appearance", "Lightweight and breathable design", "Comfortable for daily wear", "Seamless blending with existing hair", "Flexible styling options"],
    },
    {
      title: "Hair Extension",
      description: "Remy Hair Extensions are crafted from high-quality, virgin human hair with intact and aligned cuticles to ensure a smooth, natural appearance. These extensions are an effective solution for adding volume, length, or style enhancement while blending seamlessly with your existing hair.",
      image: hairExImg,
      benefits: ["100% high-quality human hair", "Soft, smooth, and natural texture", "Adds volume and length instantly", "Blends seamlessly with natural hair"],
    },
    {
      title: "Men Full Cap",
      description: "The Men Full Cap Hair System is a complete coverage solution designed for individuals experiencing extensive hair loss, including conditions such as alopecia totalis, alopecia universalis, or hair loss due to medical treatments like chemotherapy. It is fully customized to match the scalp size, shape, and specific hair loss pattern.",
      image: menFullCapImg,
      benefits: ["Full scalp coverage", "Designed for advanced hair loss conditions", "Customized fit and design", "Natural appearance"],
    },
    {
      title: "Women Full Cap",
      description: "The Women Full Cap Hair System is a complete coverage solution designed for women experiencing extensive hair loss. Available in lengths ranging from 14 to 22 inches, the system allows versatile styling, including braids, ponytails, and various customized hairstyles.",
      image: womenFullCapImg,
      benefits: ["Full scalp coverage", "Designed for medical hair loss conditions", "Custom fit and natural appearance", "Available in multiple lengths", "Allows flexible styling options", "Non-surgical and comfortable solution"],
    },
  ];

  const skinTreatments = [
    {
      title: "Skin Peels",
      description: "We offer a range of advanced, medically guided skin peels designed to improve skin texture, reduce pigmentation, control acne, and restore natural radiance. Our treatments include Glycolic Peel, ArgiPeel Exfoliating Peel, Ferulac Peel Booster System, Lacti Peel, Amelan Peel, Nomelan Peel, Yellow Peel, and Salicylic Acid Peel.",
      image: skinPeelsImg,
      benefits: ["Improves skin texture", "Reduces pigmentation", "Controls acne", "Restores natural radiance"],
    },
    {
      title: "Microdermabrasion",
      description: "Microdermabrasion is a dermatological procedure that gently removes the top layer of skin. It is used to even out skin tones, fade acne scars, and brighten a dull complexion. The procedure takes about 30 minutes and may be combined with other treatments.",
      image: microdermabrasionImg,
      benefits: ["Evens out skin tone", "Fades acne scars", "Brightens complexion", "Quick 30-minute procedure"],
    },
    {
      title: "Q-Switched Lasers",
      description: "At GloSkin, Q-Switched Laser technology is used to effectively treat pigmentation, melasma, sun damage, and various pigmented lesions such as age spots, freckles, sunspots, and certain birthmarks. The laser precisely targets excess melanin in the skin without affecting surrounding tissue. It can also be customized for safe tattoo removal.",
      image: qSwitchedLaserImg,
      benefits: ["Targets pigmentation & melasma", "Stimulates collagen production", "Improves acne scars", "Refines enlarged pores"],
    },
    {
      title: "Nd-YAG Laser",
      description: "Nd-YAG laser is a newer technique of laser hair removal. Its biggest advantage is that it usually works on all types of skin, in particular, even on tanned skin and on darker skin. For optimum results, 6-8 sessions are recommended at a gap of 1 month between each session.",
      image: ndyagLaserImg,
      benefits: ["Works on all skin types", "Safe for tanned & darker skin", "Permanent hair reduction", "Clinically proven technology"],
    },
    {
      title: "Diode Laser",
      description: "Diode lasers use a single wavelength of light that has a high absorption rate in melanin. It incorporates skin cooling to protect the surface of the skin. As the melanin heats up it destroys the root and blood flow to the follicle and disables the hair permanently.",
      image: diodeLaserImg,
      benefits: ["High melanin absorption", "Built-in skin cooling", "Permanent hair removal", "Safe for all skin types"],
    },
    {
      title: "RF Facials",
      description: "Radiofrequency (RF) technology uses high-frequency radio waves to safely and precisely remove skin lesions such as moles, warts, skin tags, freckles, and DPNs. Compared to traditional scalpel excision, RF treatment generates minimal heat and reduces impact on surrounding tissues, promoting faster healing.",
      image: rfFacialsImg,
      benefits: ["Precise lesion removal", "Minimal bleeding", "Faster healing", "Safe and effective"],
    },
    {
      title: "Botox (Botulinum Toxins)",
      description: "Botox from Allergan is one of the widely known brands of Botulinum toxins injections along with Dysport from Galderma. Botulinum toxins are neurotoxins that affect nerves and cause muscle relaxation. It halts the ageing process of the muscles and smoothens out wrinkles and dynamic lines. The effects generally last from 3 to 5 months.",
      image: botoxImg,
      benefits: ["Smoothens wrinkles", "Relaxes dynamic lines", "Quick procedure", "Results last 3-5 months"],
    },
    {
      title: "Dermal Fillers",
      description: "Dermal fillers are injections that plump up wrinkles and smooth lines on your face. We usually inject dermal fillers in the areas around your eyes, mouth and nose. Results are noticeable right away and recovery time is minimal. We use Dermal fillers from Allergan as Juvederm and also Restylane from Galderma.",
      image: dermaFillersImg,
      benefits: ["Instant visible results", "Restores facial volume", "Minimal recovery time", "Long-lasting effects"],
    },
    {
      title: "Face PRP",
      description: "A Platelet Rich Plasma (PRP) face treatment, also known as a Vampire facial, is an advanced skin treatment which is great for skin rejuvenation. It uses your own blood platelets to stimulate new cell growth, helping to improve your complexion and skin texture. PRP therapy stimulates the production of collagen and new skin cells.",
      image: facePrpImg,
      benefits: ["Stimulates collagen production", "Uses your own blood platelets", "Improves skin texture", "Natural skin rejuvenation"],
    },
    {
      title: "HydraFacial",
      description: "HydraFacial is an advanced skin treatment that combines cleansing, exfoliation, gentle chemical peeling, extraction, and deep hydration in a single session using patented vortex technology. Suitable for all skin types, HydraFacial helps improve enlarged pores, fine lines, acne, and dullness.",
      image: hydrafacialImg,
      benefits: ["Deep cleansing & exfoliation", "Suitable for all skin types", "Improves pores & fine lines", "Instant hydration & glow"],
    },
  ];

  const faqs = [
    {
      question: "What treatments do you offer for hair loss?",
      answer:
        "We offer advanced hair restoration treatments including Hair Transplant (FUE), PRP (Platelet-Rich Plasma) Therapy, Mesotherapy, Scalp Micropigmentation, CHS (Comprehensive Hair Solutions), and Oxygen Laser Therapy (OLT).",
    },
    {
      question: "How does a hair transplant work?",
      answer:
        "Hair transplant involves relocating healthy hair follicles from the donor area to areas experiencing hair thinning or baldness. We use advanced FUE techniques to deliver precise, natural-looking results.",
    },
    {
      question: "Is hair transplantation a permanent solution?",
      answer:
        "Yes, hair transplantation provides permanent results as the transplanted hair follicles are resistant to balding.",
    },
    {
      question: "How long does it take to see results after a hair transplant?",
      answer:
        "Initial growth begins around 3-4 months, with full results visible after 12-18 months.",
    },
    {
      question: "What is PRP therapy, and how does it help with hair growth?",
      answer:
        "PRP therapy uses your own blood platelets to stimulate hair follicles, promoting natural hair growth and thickness.",
    },
    {
      question: "Is the procedure safe?",
      answer:
        "Absolutely. Our treatments are designed with safety, precision, and patient comfort as top priorities. Performed by experienced professionals, the procedures are minimally invasive and tailored to ensure a smooth recovery experience.",
    },
    {
      question: "How much does a hair transplant cost at GroHair?",
      answer:
        "We know choosing a hair transplant is both a personal and financial decision. The cost depends on your specific hair condition and treatment plan. That\u2019s why we offer a detailed consultation to evaluate your needs and provide honest, customized pricing tailored just for you.",
    },
    {
      question: "How do I book an appointment?",
      answer:
        'Booking an appointment is quick and hassle-free. Simply click the "Book an Appointment" button on our website, call our clinic, or leave your details \u2014 and our team will promptly get in touch to confirm your preferred time.',
    },
    {
      question: "What skincare treatments do you offer?",
      answer:
        "We offer a comprehensive range of advanced skincare treatments for acne, pigmentation, anti-aging, and overall skin rejuvenation. Our services include Laser Hair Reduction, chemical peels, hydrafacials, microneedling, advanced laser resurfacing, skin tightening treatments, anti-aging injectables, and customized dermatology-led treatment programs tailored to individual skin concerns.",
    },
    {
      question: "How do I know which facial treatment is right for me?",
      answer:
        "Every individual\u2019s skin is unique. During your consultation, our specialists conduct a thorough evaluation of your skin health and concerns to determine the most suitable, medically guided treatment approach for optimal and lasting results.",
    },
    {
      question: "Is Laser Hair Reduction safe?",
      answer:
        "Yes, Laser Hair Reduction is a clinically proven and safe procedure when carried out by qualified professionals using advanced medical-grade technology. Safety and patient comfort are always our priority.",
    },
    {
      question: "How many sessions are required for laser hair removal?",
      answer:
        "Typically 6-8 sessions are needed for optimal results, spaced 4-6 weeks apart.",
    },
    {
      question: "Do skin treatments have side effects?",
      answer:
        "Most treatments have minimal side effects like temporary redness that resolves within hours to days.",
    },
    {
      question: "Do you provide anti-aging treatments?",
      answer:
        "Yes, we offer Botox, dermal fillers, RF treatments, and other advanced anti-aging procedures.",
    },
    {
      question: "What products do you recommend for daily skincare?",
      answer:
        "We recommend medical-grade skincare products tailored to your specific skin type and concerns.",
    },
    {
      question: "How do I book an appointment at GloSkin?",
      answer:
        "You can book through our website, call our clinic, or use our online booking system.",
    },
  ];

  const testimonials = [
    {
      name: "Arun Kumar",
      rating: 5,
      text: "I was initially hesitant about getting a hair transplant, but the team explained everything clearly and made me feel confident. The results look very natural, and I\u2019m extremely satisfied with my decision.",
      image: hairTransImg,
    },
    {
      name: "Meena R",
      rating: 5,
      text: "I took treatment for pigmentation, and I can see visible improvement within a few sessions. The doctors are professional and genuinely care about patient comfort.",
      image: skinPeelsImg,
    },
    {
      name: "Sathish V",
      rating: 5,
      text: "The FUE procedure was smooth and well managed. The clinic maintains high standards of hygiene, and the staff were supportive throughout the process.",
      image: fueImg,
    },
    {
      name: "Priya S",
      rating: 5,
      text: "I underwent Laser Hair Reduction and had a great experience. The procedure was comfortable, and the team guided me properly before and after treatment.",
      image: ndyagLaserImg,
    },
    {
      name: "Karthik N",
      rating: 5,
      text: "Very transparent consultation and clear explanation of costs. No false promises \u2014 just honest guidance and good results.",
      image: mesoImg,
    },
    {
      name: "Divya M",
      rating: 5,
      text: "Professional doctors, advanced equipment, and a welcoming atmosphere. I would highly recommend GroHair GloSkin for anyone considering treatment.",
      image: hydrafacialImg,
    },
  ];

  const beforeAfterImages = [ba1, ba2, ba3, ba4];

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage({ type: "", text: "" });

    // Console log the data being sent
    console.log("📧 Sending appointment data:", {
      name: formData.name,
      email: formData.email,
      mobile: formData.mobile,
      date: formData.date,
      time: formData.time,
      treatment: formData.treatment,
    });

    try {
      const response = await fetch(
        "https://schoolcommunication-gmdtekepd3g3ffb9.canadacentral-01.azurewebsites.net/api/postMSMSForm/booNewAppoinment01",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer 123",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            mobile: formData.mobile,
            date: formData.date,
            time: formData.time,
            treatment: formData.treatment,
          }),
        },
      );

      console.log("📡 Response Status:", response.status, response.statusText);

      // Check if response is ok (status 200-299)
      if (!response.ok) {
        const errorText = await response.text();
        console.error("❌ API Error Response:", errorText);

        if (response.status === 401) {
          throw new Error(
            "Unauthorized - API key or authentication required. Please contact the administrator.",
          );
        }

        throw new Error(`API Error: ${response.status} ${response.statusText}`);
      }

      // Try to parse JSON response
      let data;
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        data = await response.json();
      } else {
        const text = await response.text();
        console.log("📄 Response Text:", text);
        data = { error: false, message: text };
      }

      console.log("✅ API Response:", data);

      if (!data.error) {
        // Track form submission conversion with Google Ads
        if (window.gtag) {
          window.gtag('event', 'conversion', {
            'send_to': 'AW-17839945759',
            'event_category': 'form',
            'event_label': 'appointment_booking'
          });
        }
        // Reset form
        setFormData({
          name: "",
          email: "",
          mobile: "",
          date: "",
          time: "",
          treatment: "",
        });
        console.log("📬 Email sent from: aradiscovermarketing@gmail.com");
        console.log("📬 Email sent to: tenkasi@adgrohair.com");
        // Navigate to thank you page
        navigate("/thank-you");
      } else {
        setSubmitMessage({
          type: "error",
          text:
            data.message ||
            "Failed to send appointment request. Please try again.",
        });
        console.error("❌ Error:", data.message);
      }
    } catch (error) {
      console.error("❌ Error submitting form:", error);
      setSubmitMessage({
        type: "error",
        text:
          error.message ||
          "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.container}>
      {/* Fixed Contact Icons */}
      <div className={styles.fixedIcons}>
        <a
          href="tel:+919159856789"
          className={styles.fixedIconCall}
          aria-label="Call us"
        >
          <Phone size={24} />
        </a>
        <a
          href="https://wa.me/919159856789"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.fixedIconWhatsapp}
          aria-label="WhatsApp"
        >
          <FaWhatsapp size={24} />
        </a>
      </div>

      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.logo}>
            <img
              src={logo}
              alt="Grohair Bioskin Logo"
              className={styles.logoImage}
            />
          </div>

          <a href="tel:+919159856789" className={styles.phone}>
            <span className={styles.phoneIcon}>
              <PhoneCall size={17}></PhoneCall>
            </span>
            9159856789
          </a>
        </div>
      </header>

      {/* Hero Section - Book Appointment */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.appointmentForm}>
            <h1 className={styles.heroTitle}>Book Your Appointment</h1>
            <form onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className={styles.formInput}
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className={styles.formInput}
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className={styles.formRow}>
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Your Phone Number"
                  className={styles.formInput}
                  value={formData.mobile}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="date"
                  name="date"
                  className={styles.formInput}
                  value={formData.date}
                  onChange={handleInputChange}
                  min={new Date().toISOString().split("T")[0]}
                  max="2099-12-31"
                  required
                />
              </div>
              <div className={styles.formRow}>
                <select
                  name="time"
                  className={styles.formInput}
                  value={formData.time}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Time</option>
                  <option value="9:00 AM">9:00 AM</option>
                  <option value="9:30 AM">9:30 AM</option>
                  <option value="10:00 AM">10:00 AM</option>
                  <option value="10:30 AM">10:30 AM</option>
                  <option value="11:00 AM">11:00 AM</option>
                  <option value="11:30 AM">11:30 AM</option>
                  <option value="12:00 PM">12:00 PM</option>
                  <option value="12:30 PM">12:30 PM</option>
                  <option value="1:00 PM">1:00 PM</option>
                  <option value="1:30 PM">1:30 PM</option>
                  <option value="2:00 PM">2:00 PM</option>
                  <option value="2:30 PM">2:30 PM</option>
                  <option value="3:00 PM">3:00 PM</option>
                  <option value="3:30 PM">3:30 PM</option>
                  <option value="4:00 PM">4:00 PM</option>
                  <option value="4:30 PM">4:30 PM</option>
                  <option value="5:00 PM">5:00 PM</option>
                  <option value="5:30 PM">5:30 PM</option>
                  <option value="6:00 PM">6:00 PM</option>
                  <option value="6:30 PM">6:30 PM</option>
                  <option value="7:00 PM">7:00 PM</option>
                  <option value="7:30 PM">7:30 PM</option>
                  <option value="8:00 PM">8:00 PM</option>
                </select>
                <select
                  name="treatment"
                  className={styles.formInput}
                  value={formData.treatment}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Treatment</option>
                  <optgroup label="Hair Treatments">
                    {hairTreatments.map((t, i) => (
                      <option key={i}>{t.title}</option>
                    ))}
                  </optgroup>
                  <optgroup label="Skin Treatments">
                    {skinTreatments.map((t, i) => (
                      <option key={i}>{t.title}</option>
                    ))}
                  </optgroup>
                </select>
              </div>
              {submitMessage.text && (
                <div
                  style={{
                    padding: "12px",
                    marginBottom: "10px",
                    borderRadius: "6px",
                    textAlign: "center",
                    backgroundColor:
                      submitMessage.type === "success" ? "#4caf50" : "#f44336",
                    color: "#fff",
                    fontSize: "14px",
                  }}
                >
                  {submitMessage.text}
                </div>
              )}
              <button
                type="submit"
                className={styles.submitBtn}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Book Appointment"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Hair Treatments Section */}
      <section
        id="hair-treatments"
        data-animate
        className={`${styles.treatmentsSection} ${isVisible["hair-treatments"] ? styles.visible : ""}`}
      >
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            Our <span className={styles.highlight}>Hair</span> Treatments
          </h2>
        </div>

        <div className={styles.treatmentPanel}>
          <div className={styles.treatmentList}>
            <div className={styles.treatmentListInner}>
              {hairTreatments.map((treatment, index) => (
                <button
                  key={index}
                  className={`${styles.treatmentListItem} ${selectedHairTreatment === index ? styles.treatmentListItemActive : ""}`}
                  onClick={() => setSelectedHairTreatment(index)}
                >
                  {treatment.title}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.treatmentDetail} key={selectedHairTreatment}>
            <div className={styles.treatmentDetailImage}>
              <img
                src={hairTreatments[selectedHairTreatment].image}
                alt={hairTreatments[selectedHairTreatment].title}
              />
            </div>
            <div className={styles.treatmentDetailContent}>
              <h3 className={styles.treatmentDetailTitle}>
                {hairTreatments[selectedHairTreatment].title}
              </h3>
              <p className={styles.treatmentDetailDescription}>
                {hairTreatments[selectedHairTreatment].description}
              </p>
              <div className={styles.treatmentBenefits}>
                <h4 className={styles.benefitsHeading}>Benefits</h4>
                <div className={styles.benefitsGrid}>
                  {hairTreatments[selectedHairTreatment].benefits.map(
                    (benefit, i) => (
                      <span key={i} className={styles.benefitTag}>
                        {benefit}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skin Treatments Section */}
      <section
        id="skin-treatments"
        data-animate
        className={`${styles.treatmentsSection} ${styles.skinSection} ${isVisible["skin-treatments"] ? styles.visible : ""}`}
      >
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            Our <span className={styles.highlight}>Skin</span> Treatments
          </h2>
        </div>

        <div className={`${styles.treatmentPanel} ${styles.treatmentPanelReversed}`}>
          <div className={styles.treatmentList}>
            <div className={styles.treatmentListInner}>
              {skinTreatments.map((treatment, index) => (
                <button
                  key={index}
                  className={`${styles.treatmentListItem} ${selectedSkinTreatment === index ? styles.treatmentListItemActive : ""}`}
                  onClick={() => setSelectedSkinTreatment(index)}
                >
                  {treatment.title}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.treatmentDetail} key={selectedSkinTreatment}>
            <div className={styles.treatmentDetailImage}>
              <img
                src={skinTreatments[selectedSkinTreatment].image}
                alt={skinTreatments[selectedSkinTreatment].title}
              />
            </div>
            <div className={styles.treatmentDetailContent}>
              <h3 className={styles.treatmentDetailTitle}>
                {skinTreatments[selectedSkinTreatment].title}
              </h3>
              <p className={styles.treatmentDetailDescription}>
                {skinTreatments[selectedSkinTreatment].description}
              </p>
              <div className={styles.treatmentBenefits}>
                <h4 className={styles.benefitsHeading}>Benefits</h4>
                <div className={styles.benefitsGrid}>
                  {skinTreatments[selectedSkinTreatment].benefits.map(
                    (benefit, i) => (
                      <span key={i} className={styles.benefitTag}>
                        {benefit}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section
        id="faqs"
        data-animate
        className={`${styles.faqsSection} ${isVisible["faqs"] ? styles.visible : ""}`}
      >
        <div className={styles.faqsContainer}>
          <h2 className={styles.sectionTitle}>
            Frequently Asked <span className={styles.highlight}>Questions</span>
          </h2>
          <div className={styles.faqList}>
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={styles.faqItem}
                onClick={() =>
                  setActiveHairFaq(activeHairFaq === index ? null : index)
                }
              >
                <div
                  className={`${styles.faqQuestion} ${activeHairFaq === index ? styles.faqQuestionActive : ""}`}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`${styles.faqIcon} ${activeHairFaq === index ? styles.faqIconActive : ""}`}
                    size={20}
                  />
                </div>
                {activeHairFaq === index && (
                  <div className={styles.faqAnswer}>{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        data-animate
        className={`${styles.testimonialsSection} ${isVisible["testimonials"] ? styles.visible : ""}`}
      >
        <div className={styles.testimonialsContainer}>
          <div className={styles.testimonialImage}>
            <img src={testimonials[currentTestimonial].image} alt={testimonials[currentTestimonial].name} />
          </div>
          <div className={styles.testimonialContent}>
            <span className={styles.testimonialLabel}>Testimonials</span>
            <h2 className={styles.testimonialTitle}>What Our Customers Say!</h2>
            <div className={styles.testimonialCard}>
              <div className={styles.quoteIcon}>"</div>
              <div className={styles.testimonialInfo}>
                <h4 className={styles.testimonialName}>
                  {testimonials[currentTestimonial].name}
                </h4>
                <div className={styles.stars}>
                  {"★".repeat(testimonials[currentTestimonial].rating)}
                </div>
                <p className={styles.testimonialText}>
                  {testimonials[currentTestimonial].text}
                </p>
              </div>
            </div>
            <div className={styles.testimonialNav}>
              <button
                className={styles.navBtn}
                onClick={() =>
                  setCurrentTestimonial((prev) =>
                    prev === 0 ? testimonials.length - 1 : prev - 1,
                  )
                }
              >
                ←
              </button>
              <button
                className={styles.navBtn}
                onClick={() =>
                  setCurrentTestimonial((prev) =>
                    prev === testimonials.length - 1 ? 0 : prev + 1,
                  )
                }
              >
                →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section
        id="before-after"
        data-animate
        className={`${styles.beforeAfterSection} ${isVisible["before-after"] ? styles.visible : ""}`}
      >
        <h2 className={styles.sectionTitle}>
          <span className={styles.highlight}>Before</span> &{" "}
          <span className={styles.highlight}>After</span> Results
        </h2>
        <div className={styles.beforeAfterGrid}>
          {beforeAfterImages.map((image, index) => (
            <div key={index} className={styles.beforeAfterCard}>
              <img src={image} alt={`Before After ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          {/* Column 1: Logo & CTA */}
          <div className={styles.footerLeft}>
            <div className={styles.footerLogo}>
              <img
                src={footerLogo}
                alt="Grohair & Gloskin"
                className={styles.footerLogoImage}
              />
            </div>
            <h3 className={styles.footerCtaTitle}>
              Ready to Begin Your Hair & Skin Transformation?
            </h3>
            <div className={styles.footerCtaButtons}>
              <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className={styles.footerCtaBtn}>
                Book an Appointment
              </a>
              <a href="tel:+919159856789" className={styles.footerCtaBtnOutline}>
                <PhoneCall size={16} /> Call Now
              </a>
            </div>
          </div>

          {/* Column 2: Map, Contact & Address */}
          <div className={styles.footerRight}>
            {/* Map */}
            <div className={styles.footerMapSection}>
              <div className={styles.footerMap}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1801142.5699581492!2d75.32222155625001!3d13.012855300000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae0fddff324535%3A0x15b879a4bc692d89!2sAdvanced%20GroHair%20%26%20GloSkin%20-%20Seegehalli!5e1!3m2!1sen!2sin!4v1770724744326!5m2!1sen!2sin"
                  width="100%"
                  height="250"

                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Contact Details */}
            <div className={styles.footerContactSection}>
              <div className={styles.footerContact}>
                <p>
                  <Phone size={16} /> <a href="tel: 9159856789"> 9159856789</a>
                </p>
                <p>
                  <Mail size={16} />
                  <a href="mailto:seegehalli@adgrohair.com">
                    seegehalli@adgrohair.com
                  </a>
                </p>
                <p>
                  <MapPin size={16} />
                  <span>
                    No.84, Green Field Hub, Seegehalli Rd, Kadugodi, Bengaluru,
                    Karnataka 560067
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className={styles.footerBottom}>
          <p>
            © <span className={styles.footerBottomHighlight}>Grohair</span> &{" "}
            <span className={styles.footerBottomHighlight}>GloSkin</span>
          </p>
          <p>
            Crafted with Excellence by{" "}
            <a
              href="https://discovertechnologies.co/index.html"
              className={styles.footerBottomLink}
            >
              Ara Discoveries Pvt.Ltd
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default GrohairLanding;
