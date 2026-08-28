import React from 'react';
import { 
  X, 
  Telescope, 
  ExternalLink, 
  Calendar, 
  UserCheck, 
  Sparkles, 
  Download,
  Image as ImageIcon
} from 'lucide-react';

export default function NasaApodModal({ isOpen, onClose, apodData, onSetAsBackground }) {
  if (!isOpen || !apodData) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-xl animate-fadeIn">
      <div 
        className="w-full max-w-4xl max-h-[90vh] rounded-3xl glass-panel-deep p-6 sm:p-8 border-white/20 shadow-2xl overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl glass-btn-primary flex items-center justify-center text-cyan-300">
              <Telescope className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono px-2 py-0.5 rounded-md bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  NASA APOD
                </span>
                <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {apodData.date}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white mt-1">
                {apodData.title}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl glass-panel text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Big Cosmic Image */}
        <div className="relative rounded-2xl overflow-hidden mb-6 border border-white/20 max-h-[500px] flex items-center justify-center bg-slate-950">
          <img
            src={apodData.url}
            alt={apodData.title}
            className="w-full h-auto max-h-[500px] object-contain rounded-2xl"
          />
          <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded-xl glass-panel-deep text-xs font-mono text-slate-200 border-white/15">
            Credit: {apodData.copyright || 'NASA Archive'}
          </div>
        </div>

        {/* Astronomy Explanation */}
        <div className="mb-6 space-y-3">
          <h4 className="text-sm font-mono uppercase tracking-widest text-cyan-300 flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            Giải thích Thiên văn học (Explanation):
          </h4>
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal bg-white/5 p-5 rounded-2xl border border-white/10">
            {apodData.explanation}
          </p>
        </div>

        {/* Modal Actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-white/10">
          <button
            onClick={() => {
              onSetAsBackground(apodData);
              onClose();
            }}
            className="px-5 py-2.5 rounded-xl glass-btn-primary text-xs sm:text-sm font-semibold text-white flex items-center gap-2"
          >
            <ImageIcon className="w-4 h-4 text-cyan-300" />
            <span>Đặt làm ảnh nền Portfolio</span>
          </button>

          <div className="flex items-center gap-2">
            <a
              href={apodData.url}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 rounded-xl glass-btn-secondary text-xs sm:text-sm font-semibold text-slate-200 hover:text-white flex items-center gap-2"
            >
              <span>Mở ảnh gốc 4K</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl glass-panel text-xs sm:text-sm font-semibold text-slate-300 hover:text-white"
            >
              Đóng
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
