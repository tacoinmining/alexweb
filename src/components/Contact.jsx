import React, { useState } from 'react';
import { 
  Send, 
  Mail, 
  MapPin, 
  Phone, 
  Clock, 
  CheckCircle2, 
  MessageSquare, 
  Sparkles,
  Rocket
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { SPACE_CARD_BACKGROUNDS } from '../data/spaceFallbackImages';

export default function Contact() {
  const { contact, personal } = PORTFOLIO_DATA;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
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

      // Trigger celebratory cosmic confetti
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#8b5cf6', '#06b6d4', '#ec4899', '#38bdf8']
      });

      // Reset after 6 seconds
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 6000);
    }, 1200);
  };

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border-cyan-500/30 text-cyan-300 text-xs font-mono mb-4">
            <Send className="w-3.5 h-3.5" />
            <span>KẾT NỐI KHÔNG GIAN</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight mb-4">
            Liên hệ & <span className="text-cosmic-gradient">Khởi đầu Dự án</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            {contact.subtitle}
          </p>
        </div>

        {/* Main Large Glass Card Container */}
        <div className="glass-panel-deep rounded-3xl overflow-hidden p-6 sm:p-10 lg:p-12 relative border-white/15 shadow-glass-lg">
          {/* Space Image Ambient Backdrop inside the Glass Container */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-15 pointer-events-none"
            style={{ backgroundImage: `url(${SPACE_CARD_BACKGROUNDS.contact})` }}
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Column: Direct Info & Quick Highlights */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
              <div>
                <h3 className="text-2xl font-display font-bold text-white mb-3">
                  Thông tin Trực tiếp
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-8">
                  Hãy liên hệ với tôi qua form hoặc gửi tin nhắn trực tiếp qua email cá nhân. Tôi phản hồi thông thường trong vòng 24 giờ.
                </p>

                {/* Direct info cards */}
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl glass-panel border-white/10 flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-purple-500/20 text-cyan-300 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[11px] font-mono text-slate-400">Email cá nhân</p>
                      <a href={`mailto:${contact.direct.email}`} className="text-sm font-semibold text-white hover:text-cyan-300 transition-colors">
                        {contact.direct.email}
                      </a>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl glass-panel border-white/10 flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[11px] font-mono text-slate-400">Số điện thoại</p>
                      <p className="text-sm font-semibold text-white">
                        {contact.direct.phone}
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl glass-panel border-white/10 flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-pink-500/20 text-pink-300 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[11px] font-mono text-slate-400">Địa điểm làm việc</p>
                      <p className="text-sm font-semibold text-white">
                        {contact.direct.location}
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl glass-panel border-white/10 flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[11px] font-mono text-slate-400">Múi giờ hoạt động</p>
                      <p className="text-sm font-semibold text-white">
                        {contact.direct.timezone}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Status Indicator */}
              <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-xs font-semibold text-emerald-300">
                  ● Trạng thái: {personal.status}
                </span>
              </div>
            </div>

            {/* Right Column: Interactive Glass Contact Form */}
            <div className="lg:col-span-7">
              <div className="p-6 sm:p-8 rounded-2xl glass-panel border-white/20">
                <h3 className="text-xl font-display font-bold text-white mb-2 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-cyan-400" />
                  Gửi lời nhắn đến Alex
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mb-6">
                  Điền các thông tin bên dưới và tôi sẽ phản hồi sớm nhất có thể.
                </p>

                {submitted ? (
                  <div className="py-12 px-6 rounded-2xl bg-white/5 border border-cyan-400/40 text-center animate-fadeIn">
                    <div className="w-16 h-16 rounded-full bg-cyan-500/20 text-cyan-300 flex items-center justify-center mx-auto mb-4 shadow-glow-cyan">
                      <CheckCircle2 className="w-8 h-8 text-cyan-300" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">Tin nhắn đã được phóng vào quỹ đạo!</h4>
                    <p className="text-sm text-slate-300 max-w-md mx-auto mb-4">
                      Cảm ơn bạn đã liên hệ. Tôi đã nhận được thông tin và sẽ phản hồi đến email <strong>{formData.email || 'của bạn'}</strong> trong thời gian sớm nhất.
                    </p>
                    <span className="text-xs font-mono text-cyan-400">✨ Have a stellar day!</span>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono text-slate-300 mb-1.5">
                          Họ và Tên <span className="text-pink-400">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Nguyễn Văn A"
                          className="w-full px-4 py-3 rounded-xl glass-input text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-slate-300 mb-1.5">
                          Địa chỉ Email <span className="text-pink-400">*</span>
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
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">
                        Chủ đề / Dự án <span className="text-pink-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Ví dụ: Thiết kế Website Glassmorphism cho công ty"
                        className="w-full px-4 py-3 rounded-xl glass-input text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">
                        Nội dung tin nhắn <span className="text-pink-400">*</span>
                      </label>
                      <textarea
                        rows={4}
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Hãy chia sẻ thêm về yêu cầu, timeline và ngân sách dự kiến của bạn..."
                        className="w-full px-4 py-3 rounded-xl glass-input text-sm resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl glass-btn-primary text-white font-bold text-sm flex items-center justify-center gap-2 group shadow-glow-purple"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Đang truyền tin...</span>
                        </>
                      ) : (
                        <>
                          <Rocket className="w-4 h-4 text-cyan-300 group-hover:-translate-y-0.5 transition-transform" />
                          <span>Phóng tin nhắn (Send Message)</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
