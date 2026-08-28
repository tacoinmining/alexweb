import React, { useState } from 'react';
import { 
  Send, 
  Mail, 
  MapPin, 
  MessageSquare, 
  Rocket, 
  CheckCircle2 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { SPACE_CARD_BACKGROUNDS } from '../data/spaceFallbackImages';

export default function Contact() {
  const { contact, personal } = PORTFOLIO_DATA;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#8b5cf6', '#06b6d4', '#ec4899']
      });

      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
      }, 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="relative py-28 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border-cyan-500/30 text-cyan-300 text-xs font-mono mb-4">
            <Send className="w-3.5 h-3.5" />
            <span>KẾT NỐI</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight mb-4">
            Liên hệ & <span className="text-cosmic-gradient">Hợp tác</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            {contact.subtitle}
          </p>
        </div>

        {/* Clean Glass Card */}
        <div className="glass-panel-deep rounded-3xl overflow-hidden p-8 sm:p-12 relative border-white/15 shadow-glass-lg">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none"
            style={{ backgroundImage: `url(${SPACE_CARD_BACKGROUNDS.contact})` }}
          />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Info */}
            <div className="md:col-span-5 space-y-6">
              <div>
                <h3 className="text-xl font-display font-bold text-white mb-2">
                  Trò chuyện cùng Tuấn
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Tôi luôn sẵn lòng lắng nghe về các dự án mới, ý tưởng thiết kế hoặc cơ hội làm việc thú vị.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <div className="w-9 h-9 rounded-xl bg-purple-500/20 text-cyan-300 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <a href={`mailto:${personal.socials.email}`} className="hover:text-cyan-300 transition-colors font-medium">
                    {personal.socials.email}
                  </a>
                </div>

                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <div className="w-9 h-9 rounded-xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span>{contact.direct.location}</span>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-semibold text-emerald-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>{personal.status}</span>
              </div>
            </div>

            {/* Form */}
            <div className="md:col-span-7">
              {submitted ? (
                <div className="py-10 px-6 rounded-2xl bg-white/5 border border-cyan-400/40 text-center animate-fadeIn">
                  <div className="w-14 h-14 rounded-full bg-cyan-500/20 text-cyan-300 flex items-center justify-center mx-auto mb-3 shadow-glow-cyan">
                    <CheckCircle2 className="w-7 h-7 text-cyan-300" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-1">Tin nhắn đã được gửi đi!</h4>
                  <p className="text-xs sm:text-sm text-slate-300">
                    Cảm ơn bạn. Tôi sẽ phản hồi sớm nhất có thể.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Họ và Tên
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Tên của bạn"
                      className="w-full px-4 py-3 rounded-xl glass-input text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="email@domain.com"
                      className="w-full px-4 py-3 rounded-xl glass-input text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Nội dung tin nhắn
                    </label>
                    <textarea
                      rows={3}
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Chia sẻ về dự án hoặc yêu cầu của bạn..."
                      className="w-full px-4 py-3 rounded-xl glass-input text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl glass-btn-primary text-white font-semibold text-sm flex items-center justify-center gap-2 group shadow-glow-purple"
                  >
                    {isSubmitting ? (
                      <span>Đang gửi...</span>
                    ) : (
                      <>
                        <Rocket className="w-4 h-4 text-cyan-300 group-hover:-translate-y-0.5 transition-transform" />
                        <span>Gửi tin nhắn</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
