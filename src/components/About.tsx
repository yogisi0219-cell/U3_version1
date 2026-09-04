import { CornerFlourish } from './Ornament'

const STATS = [
  { value: '8', label: 'Years of Weddings' },
  { value: '200+', label: 'Celebrations Hosted' },
  { value: '3500+', label: 'Guest Capacity' },
  { value: '37', label: 'Suites & Guest Rooms' },
]

export function About() {
  return (
    <section id="about" className="relative bg-onyx py-28 sm:py-36 px-5 sm:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-6 items-center">
        <div className="animate-fade-up">
          <p className="font-heading text-gold text-xs sm:text-sm tracking-[0.45em] uppercase mb-4">
            उमेश उत्सव उद्यान
          </p>
          <h2 className="font-display text-4xl sm:text-5xl text-ivory mb-8 leading-tight">
            एक संकल्पना, एक विरासत, एक उत्सव
          </h2>
          <div className="space-y-5 font-body text-lg text-champagne/85 leading-relaxed max-w-xl">
            <p>
              उमेश उत्सव उद्यान केवल एक विवाह स्थल नहीं, बल्कि एक ऐसी दिव्य संकल्पना का साकार रूप है,
              जिसकी प्रेरणा श्री राम मंदिर के प्रणेता आचार्य श्री धर्मेंद्र जी से जुड़ी है—
              जहाँ उमामहेश्वर सपरिवार विराजमान हैं और हर उत्सव को अपना आशीर्वाद प्रदान करते हैं।
            </p>
            <p>
              इसी भावना से प्रेरित होकर ब्रह्मलीन श्री पुलकित कुमार चौबे जी ने इस भव्य संकल्प की नींव रखी
              और वर्ष 2019 में यह स्वप्न एक सुंदर एवं भव्य उत्सव-स्थल के रूप में साकार हुआ।
            </p>
            <p>
              सात वर्षों की इस यात्रा में उमेश उत्सव उद्यान ने केवल समारोहों की मेजबानी नहीं की,
              बल्कि सैकड़ों परिवारों की खुशियों और यादों का हिस्सा बना है।
              आज तक 400 से अधिक विवाह समारोह यहाँ संपन्न हो चुके हैं,
              और हर समारोह को उसी आत्मीयता और समर्पण के साथ आयोजित किया जाता है,
              जैसे वह हमारा पहला समारोह हो।
            </p>
            <p>
              हर आयोजन से पहले परिवार स्वयं परिसर की तैयारियों पर ध्यान देता है—
              साज-सज्जा की बारीकियों से लेकर भोजन की गुणवत्ता और बारात के स्वागत तक।
              यही व्यक्तिगत जुड़ाव उमेश उत्सव उद्यान को केवल एक स्थान नहीं,
              बल्कि अपनेपन से भरा एक परिवार बनाता है।
            </p>
            <p>
              यहाँ के हॉल और आयोजन स्थल इस प्रकार तैयार किए गए हैं कि विवाह की प्रत्येक रस्म और उत्सव
              सहजता से एक ही परिसर में संपन्न हो सके—हल्दी, मेहंदी, संगीत, विवाह से लेकर रिसेप्शन तक।
              सुबह विवाह की पवित्र अग्नि से लेकर शाम के संगीत और उत्सव तक,
              हर अवसर के लिए यही एक भव्य और सुविधाजनक पता।
            </p>
            <p>
              उमेश उत्सव उद्यान — जहाँ परंपरा मिलती है भव्यता से,
              और हर उत्सव बन जाता है जीवनभर की एक खूबसूरत स्मृति।
            </p>
          </div>

          <a
            href="#gallery"
            className="inline-flex items-center gap-3 mt-9 font-heading text-xs uppercase tracking-[0.25em] text-gold border-b border-gold/50 pb-1.5 hover:border-gold hover:gap-4 transition-all duration-300"
          >
            Walk Through the Palace
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>

        <div className="relative animate-fade-up delay-2">
          <div className="relative gold-border p-10 sm:p-12 bg-gradient-to-br from-[#1a1409] via-[#120e08] to-[#0d0b08]">
            <CornerFlourish className="absolute -top-3 -left-3 w-16 h-16 text-gold" />
            <CornerFlourish className="absolute -bottom-3 -right-3 w-16 h-16 text-gold rotate-180" />

            <blockquote className="font-body italic text-xl sm:text-2xl text-champagne/95 leading-snug mb-8">
              "हमने ऐसा स्थान बनाया है जो परंपरा और भव्यता के बीच कभी समझौता नहीं करता।
              यह महल जैसा महसूस होना चाहिए और घड़ी की तरह सटीक चलना चाहिए।"
            </blockquote>
            <p className="font-heading text-gold text-sm tracking-[0.2em] uppercase mb-10">
              — संस्थापक परिवार
            </p>

            <div className="grid grid-cols-2 gap-8 border-t border-gold-deep/25 pt-8">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-3xl sm:text-4xl text-gold-gradient mb-1">{stat.value}</p>
                  <p className="font-heading text-[11px] tracking-[0.15em] uppercase text-champagne/70">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
