import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDown, Phone, Mail, MapPin, PhoneCall } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import styles from "./GrohairLanding.module.css";

// Hair treatment images
import stemXPro from "../../assets/stem-x-pro.webp";
import mesotherapy from "../../assets/mesotheraphy.jpg";
import oxygenTherapy from "../../assets/oxgen-laser-therapy.webp";
import scalpMicropigmentation from "../../assets/ScalpMicropigmentation.jpg";
import eyebrowTransplant from "../../assets/eyebrow-transplant.webp";

import microblading from "../../assets/Microblading.jpg";
import wartRemoval from "../../assets/Wart Removal.jpg";
import laserReduction from "../../assets/LaserReduction.jpg";
import hydrafacial from "../../assets/Hydrafacial.jpg";
import qSwitch from "../../assets/Q-Switch.jpg";
import botox from "../../assets/Botox.jpg";
import rfAntiFacial from "../../assets/RF Anti Aging Facial.jpg";
import skinBrightening from "../../assets/Skin brightening.jpg";

// Before/After images
import ba1 from "../../assets/BeforeAfter/b-a-01.webp";
import ba2 from "../../assets/BeforeAfter/b-a-02.webp";
import ba3 from "../../assets/BeforeAfter/b-a-03.webp";
import ba4 from "../../assets/BeforeAfter/b-a-04.webp";
import testimonial from "../../assets/stem-x-pro.webp";
import logo from "../../assets/logo.png";
import footerLogo from "../../assets/footer.png";

const GrohairLanding = () => {
  const navigate = useNavigate();
  const [activeHairFaq, setActiveHairFaq] = useState(0);
  const [activeSkinFaq, setActiveSkinFaq] = useState(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const [currentSkinIndex, setCurrentSkinIndex] = useState(0);
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
      title: "Stem X Pro",
      description:
        "An advanced STEM learning platform using interactive modules and AI tools to build critical thinking and innovation skills.",
      image: stemXPro,
    },
    {
      title: "Mesotherapy",
      description:
        "A non-surgical treatment that delivers vitamins and nutrients to improve skin health and support hair restoration.",
      image: mesotherapy,
    },
    {
      title: "Oxygeneo Therapy",
      description:
        "A non-invasive oxygen-based skin treatment that boosts circulation, collagen, and overall skin glow.",
      image: oxygenTherapy,
    },
    {
      title: "Scalp Micropigmentation",
      description:
        "A non-surgical procedure that adds natural-looking pigment to the scalp to create the appearance of fuller hair.",
      image: scalpMicropigmentation,
    },
    {
      title: "Hair Transplant",
      description:
        "A surgical procedure that restores hair by transplanting healthy follicles to thinning or bald areas.",
      image: eyebrowTransplant,
    },
  ];

  const skinTreatments = [
    {
      title: "Microblading",
      description:
        "A semi-permanent eyebrow treatment that uses fine, hair-like strokes to create fuller, natural-looking brows.",
      image: microblading,
    },
    {
      title: "Wart Removal",
      description:
        "Warts can be treated with salicylic acid, cryotherapy, laser therapy, or minor surgery with minimal downtime.",
      image: wartRemoval,
    },
    {
      title: "Laser Hair Reduction",
      description:
        "A safe, long-lasting treatment that uses lasers to weaken hair follicles, reducing unwanted hair with minimal discomfort.",
      image: laserReduction,
    },
    {
      title: "HydraFacial",
      description:
        "A non-invasive treatment that cleanses, exfoliates, and hydrates the skin while infusing it with nourishing serums.",
      image: hydrafacial,
    },
    {
      title: "Q-Switch",
      description:
        "A non-invasive treatment that targets pigmentation, acne scars, and signs of aging by breaking down melanin.",
      image: qSwitch,
    },
    {
      title: "Botox",
      description:
        "A non-invasive treatment that uses short, intense laser pulses to target pigmentation, acne scars, and signs of aging.",
      image: botox,
    },
    {
      title: "RF Anti Aging Facial",
      description:
        "Uses radio waves to stimulate collagen, tighten skin, and reduce wrinkles with no downtime.",
      image: rfAntiFacial,
    },
    {
      title: "Skin Brightening Treatment",
      description:
        "Reduces dark spots, pigmentation, and dullness while nourishing skin for a brighter, healthier complexion.",
      image: skinBrightening,
    },
  ];

  const hairFaqs = [
    {
      question: "What treatments do you offer for hair loss?",
      answer:
        "We offer a range of advanced hair restoration treatments, including Hair Transplant (FUE & FUT), PRP (Platelet-Rich Plasma) Therapy, Mesotherapy, Scalp Micropigmentation, and Low-Level Laser Therapy (LLLT).",
    },
    {
      question: "How does a hair transplant work?",
      answer:
        "Hair transplant involves moving hair follicles from a donor area to the balding area. We use advanced FUE and FUT techniques for natural-looking results.",
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
      question: "Are there any side effects of hair treatments?",
      answer:
        "Side effects are minimal and may include temporary redness or swelling that subsides within a few days.",
    },
    {
      question: "How much does a hair transplant cost at GroHair?",
      answer:
        "Cost varies based on the extent of treatment needed. We offer personalized consultations to provide accurate pricing.",
    },
    {
      question: "How do I book a consultation at GroHair?",
      answer:
        "You can book a consultation through our website, by calling us, or by visiting our clinic directly.",
    },
  ];

  const skinFaqs = [
    {
      question: "What skincare treatments do you offer?",
      answer:
        "We provide treatments for acne, pigmentation, anti-aging, skin rejuvenation, laser hair removal, chemical peels, hydrafacials, and microneedling.",
    },
    {
      question: "How do I know which facial treatment is right for me?",
      answer:
        "Our dermatologists will assess your skin type and concerns during a consultation to recommend the best treatment plan.",
    },
    {
      question: "Is laser hair removal safe?",
      answer:
        "Yes, laser hair removal is safe when performed by trained professionals using FDA-approved equipment.",
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
      name: "Shalini",
      rating: 5,
      text: "I had an amazing experience at GroHair clinic. The staff was professional, the treatment was effective, and I saw visible results within weeks. Highly recommend!",
    },
    {
      name: "Rahul",
      rating: 5,
      text: "Excellent service and results. The team is very knowledgeable and made me feel comfortable throughout the treatment.",
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
  const handleSkinPrev = () => {
    setCurrentSkinIndex((prev) =>
      prev === 0 ? skinTreatments.length - 5 : prev - 1,
    );
  };

  const handleSkinNext = () => {
    setCurrentSkinIndex((prev) =>
      prev >= skinTreatments.length - 5 ? 0 : prev + 1,
    );
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
                    <option>Stem X Pro</option>
                    <option>Mesotherapy</option>
                    <option>Oxygeneo Therapy</option>
                    <option>Scalp Micropigmentation</option>
                    <option>Hair Transplant</option>
                  </optgroup>
                  <optgroup label="Skin Treatments">
                    <option>Wart Removal</option>
                    <option>Laser Hair Removal</option>
                    <option>HydraFacial</option>
                    <option>Q-Switch</option>
                    <option>Skin Brightening Treatment</option>
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
          <div className={styles.sectionNav}>
            <button className={styles.sectionNavBtn}>‹</button>
            <button className={styles.sectionNavBtn}>›</button>
          </div>
        </div>
        <div className={styles.treatmentsGrid}>
          {hairTreatments.map((treatment, index) => (
            <div
              key={index}
              className={styles.treatmentCard}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.treatmentImageWrapper}>
                <img
                  src={treatment.image}
                  alt={treatment.title}
                  className={styles.treatmentImage}
                />
                <span className={styles.treatmentImageTitle}>
                  {treatment.title}
                </span>
              </div>
              <div className={styles.treatmentTextContent}>
                <p className={styles.treatmentDescription}>
                  {treatment.description}
                </p>
              </div>
            </div>
          ))}
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
          <div className={styles.sectionNav}>
            <button className={styles.sectionNavBtn} onClick={handleSkinPrev}>
              ‹
            </button>
            <button className={styles.sectionNavBtn} onClick={handleSkinNext}>
              ›
            </button>
          </div>
        </div>
        <div className={styles.skinTreatmentsGrid}>
          {skinTreatments
            .slice(currentSkinIndex, currentSkinIndex + 5)
            .map((treatment, index) => (
              <div
                key={index}
                className={styles.skinTreatmentCard}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={styles.skinTreatmentImageWrapper}>
                  <img
                    src={treatment.image}
                    alt={treatment.title}
                    className={styles.skinTreatmentImage}
                  />
                  <span className={styles.skinTreatmentImageTitle}>
                    {treatment.title}
                  </span>
                </div>
                <div className={styles.skinTreatmentInfo}>
                  <p className={styles.skinTreatmentDescription}>
                    {treatment.description}
                  </p>
                </div>
              </div>
            ))}
        </div>
        <button className={styles.viewAllBtn}>
          <a className={styles.underline} href="/">
            Book Appointment
          </a>
        </button>
      </section>

      {/* FAQs Section */}
      <section
        id="faqs"
        data-animate
        className={`${styles.faqsSection} ${isVisible["faqs"] ? styles.visible : ""}`}
      >
        <div className={styles.faqsContainer}>
          {/* Hair FAQs */}
          <div className={styles.faqColumn}>
            <h3 className={styles.faqTitle}>
              FAQs for <span className={styles.faqHighlightRed}>GroHair</span>
            </h3>
            <div className={styles.faqList}>
              {hairFaqs.map((faq, index) => (
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

          {/* Skin FAQs */}
          <div className={styles.faqColumn}>
            <h3 className={styles.faqTitle}>
              FAQs for <span className={styles.faqHighlightBlue}>GloSkin</span>
            </h3>
            <div className={styles.faqList}>
              {skinFaqs.map((faq, index) => (
                <div
                  key={index}
                  className={styles.faqItem}
                  onClick={() =>
                    setActiveSkinFaq(activeSkinFaq === index ? null : index)
                  }
                >
                  <div
                    className={`${styles.faqQuestion} ${activeSkinFaq === index ? styles.faqQuestionActive : ""}`}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`${styles.faqIcon} ${activeSkinFaq === index ? styles.faqIconActive : ""}`}
                      size={20}
                    />
                  </div>
                  {activeSkinFaq === index && (
                    <div className={styles.faqAnswer}>{faq.answer}</div>
                  )}
                </div>
              ))}
            </div>
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
            <img src={testimonial} alt="Happy Customer" />
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
          {/* Column 1: Logo & Address */}
          <div className={styles.footerLeft}>
            <div className={styles.footerLogo}>
              <img
                src={footerLogo}
                alt="Grohair & Gloskin"
                className={styles.footerLogoImage}
              />
            </div>
            <div className={styles.footerAddress}>
              <MapPin size={18} className={styles.footerAddressIcon} />
              <p>
                No.84, Green Field Hub, Seegehalli Rd, Kadugodi, Bengaluru,
                Karnataka 560067
              </p>
            </div>
          </div>

          {/* Column 2: Map & Contact */}
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
                  <a href="mailto:tenkasi@adgrohair.com">
                    tenkasi@adgrohair.com
                  </a>
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
