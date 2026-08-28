import React, { useState, useEffect } from 'react';
import { 
  X, 
  Sliders, 
  Sparkles, 
  RotateCcw, 
  Check, 
  Sun, 
  Moon, 
  Palette,
  Eye
} from 'lucide-react';

export default function GlassCustomizerModal({ isOpen, onClose }) {
  const [blur, setBlur] = useState(16);
  const [opacity, setOpacity] = useState(0.08);
  const [borderOpacity, setBorderOpacity] = useState(0.18);
  const [glowColor, setGlowColor] = useState('139, 92, 246'); // Default purple
  const [activePreset, setActivePreset] = useState('balanced');

  const presets = [
    {
      id: 'crisp',
      name: 'Trong suốt sắc nét (Crisp)',
      blur: 8,
      opacity: 0.04,
      borderOpacity: 0.15,
      glowColor: '6, 182, 212'
    },
    {
      id: 'balanced',
      name: 'Cân bằng chuẩn (Balanced)',
      blur: 16,
      opacity: 0.08,
      borderOpacity: 0.18,
      glowColor: '139, 92, 246'
    },
    {
      id: 'frosted',
      name: 'Kính mờ sâu (Deep Frosted)',
      blur: 26,
      opacity: 0.16,
      borderOpacity: 0.25,
      glowColor: '236, 72, 153'
    },
    {
      id: 'cyber',
      name: 'Cyberpunk Neon',
      blur: 20,
      opacity: 0.12,
      borderOpacity: 0.35,
      glowColor: '6, 182, 212'
    }
  ];

  const colorPalettes = [
    { label: 'Tím Vũ trụ (Cosmic Purple)', rgb: '139, 92, 246', hex: '#8b5cf6' },
    { label: 'Xanh Dạ quang (Cyan Neon)', rgb: '6, 182, 212', hex: '#06b6d4' },
    { label: 'Hồng Tinh vân (Nebula Pink)', rgb: '236, 72, 153', hex: '#ec4899' },
    { label: 'Lục Cực quang (Aurora Emerald)', rgb: '16, 185, 129', hex: '#10b981' },
    { label: 'Vàng Sao băng (Stellar Gold)', rgb: '245, 158, 11', hex: '#f59e0b' }
  ];

  // Apply CSS Variables in real time
  useEffect(() => {
    document.documentElement.style.setProperty('--glass-blur', `${blur}px`);
    document.documentElement.style.setProperty('--glass-opacity', opacity);
    document.documentElement.style.setProperty('--glass-border-opacity', borderOpacity);
    document.documentElement.style.setProperty('--cosmic-glow-color', glowColor);
  }, [blur, opacity, borderOpacity, glowColor]);

  const applyPreset = (preset) => {
    setActivePreset(preset.id);
    setBlur(preset.blur);
    setOpacity(preset.opacity);
    setBorderOpacity(preset.borderOpacity);
    setGlowColor(preset.glowColor);
  };

  const handleReset = () => {
    applyPreset(presets[1]);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fadeIn">
      <div 
        className="w-full max-w-lg rounded-3xl glass-panel-deep p-6 sm:p-8 border-white/20 shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl glass-btn-primary flex items-center justify-center text-cyan-300">
              <Sliders className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Live Glassmorphism Tweaker</h3>
              <p className="text-xs text-slate-300">Tinh chỉnh độ mờ & độ trong suốt trực tiếp</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl glass-panel text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Presets Row */}
        <div className="mb-6">
          <label className="block text-xs font-mono text-slate-300 mb-2">Cấu hình mẫu (Presets):</label>
          <div className="grid grid-cols-2 gap-2">
            {presets.map((preset) => (
              <button
                key={preset.id}
                onClick={() => applyPreset(preset)}
                className={`py-2 px-3 rounded-xl text-xs font-medium text-left transition-all ${
                  activePreset === preset.id
                    ? 'glass-btn-primary text-white border-white/40'
                    : 'glass-panel text-slate-300 hover:bg-white/10'
                }`}
              >
                {preset.name}
              </button>
            ))}
          </div>
        </div>

        {/* Sliders Area */}
        <div className="space-y-5 mb-6">
          {/* Blur Slider */}
          <div>
            <div className="flex justify-between items-center text-xs font-mono text-slate-300 mb-1.5">
              <span>Độ làm mờ nền (Backdrop Blur):</span>
              <span className="font-bold text-cyan-300">{blur}px</span>
            </div>
            <input
              type="range"
              min="4"
              max="36"
              step="1"
              value={blur}
              onChange={(e) => { setBlur(Number(e.target.value)); setActivePreset('custom'); }}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
            />
          </div>

          {/* Opacity Slider */}
          <div>
            <div className="flex justify-between items-center text-xs font-mono text-slate-300 mb-1.5">
              <span>Độ trong suốt nền kính (Background Opacity):</span>
              <span className="font-bold text-cyan-300">{Math.round(opacity * 100)}%</span>
            </div>
            <input
              type="range"
              min="0.02"
              max="0.30"
              step="0.01"
              value={opacity}
              onChange={(e) => { setOpacity(Number(e.target.value)); setActivePreset('custom'); }}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-purple-400"
            />
          </div>

          {/* Border Opacity Slider */}
          <div>
            <div className="flex justify-between items-center text-xs font-mono text-slate-300 mb-1.5">
              <span>Độ sáng viền kính (Border Opacity):</span>
              <span className="font-bold text-cyan-300">{Math.round(borderOpacity * 100)}%</span>
            </div>
            <input
              type="range"
              min="0.05"
              max="0.50"
              step="0.01"
              value={borderOpacity}
              onChange={(e) => { setBorderOpacity(Number(e.target.value)); setActivePreset('custom'); }}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-pink-400"
            />
          </div>

          {/* Color Palettes */}
          <div>
            <label className="block text-xs font-mono text-slate-300 mb-2">Màu ánh sáng viền & Ánh hào quang:</label>
            <div className="flex items-center gap-3">
              {colorPalettes.map((col, idx) => (
                <button
                  key={idx}
                  onClick={() => { setGlowColor(col.rgb); setActivePreset('custom'); }}
                  style={{ backgroundColor: col.hex }}
                  className={`w-8 h-8 rounded-full border-2 transition-transform ${
                    glowColor === col.rgb ? 'scale-125 border-white shadow-lg' : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                  title={col.label}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Mini Preview Box inside Modal */}
        <div className="p-4 rounded-2xl glass-card-interactive mb-6 text-center">
          <p className="text-xs text-white font-medium">✨ Thẻ thử nghiệm hiệu ứng kính mờ thời gian thực</p>
          <p className="text-[10px] text-slate-300 mt-0.5">Rê chuột để kiểm tra hiệu ứng ánh phản quang (Shimmer)</p>
        </div>

        {/* Modal Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          <button
            onClick={handleReset}
            className="px-4 py-2 rounded-xl glass-panel text-xs text-slate-300 hover:text-white flex items-center gap-1.5"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Mặc định</span>
          </button>

          <button
            onClick={onClose}
            className="px-6 py-2 rounded-xl glass-btn-primary text-xs font-semibold text-white flex items-center gap-1.5"
          >
            <Check className="w-4 h-4" />
            <span>Hoàn tất</span>
          </button>
        </div>

      </div>
    </div>
  );
}
