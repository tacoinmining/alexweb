export const PORTFOLIO_DATA = {
  personal: {
    name: "Nguyen Anh Tuan",
    role: "Senior Frontend & Creative Developer",
    headline: "Nhà phát triển Frontend đam mê vũ trụ và công nghệ",
    subheadline:
      "Chuyên xây dựng các ứng dụng web tương tác cao, thiết kế giao diện Glassmorphism đỉnh cao và mang đến trải nghiệm thị giác sống động như dải ngân hà.",
    location: "Hồ Chí Minh, Việt Nam",
    status: "Sẵn sàng nhận dự án mới",
    cvUrl: "#",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "alex.cosmic.dev@gmail.com",
    },
  },

  stats: [
    {
      label: "Năm kinh nghiệm",
      value: "4+",
      icon: "Sparkles",
      color: "from-purple-500 to-indigo-500",
    },
    {
      label: "Dự án hoàn thành",
      value: "28+",
      icon: "Rocket",
      color: "from-cyan-500 to-blue-500",
    },
    {
      label: "Tỉ lệ hài lòng",
      value: "99%",
      icon: "Award",
      color: "from-pink-500 to-rose-500",
    },
    {
      label: "Cốc cà phê & Code",
      value: "1.4K",
      icon: "Coffee",
      color: "from-amber-500 to-orange-500",
    },
  ],

  about: {
    bio: {
      title: "Tiểu sử & Hành trình",
      subtitle:
        "Từ niềm đam mê thiên văn học đến nghệ thuật lập trình Frontend",
      content: [
        "Xin chào! Tôi là Alex Nguyễn, một lập trình viên Frontend đam mê cái đẹp và sự hoàn hảo trong từng điểm ảnh. Tôi luôn xem mỗi trang web như một góc không gian vô tận, nơi công nghệ và nghệ thuật hòa quyện.",
        "Với hơn 4 năm nghiên cứu và làm việc cùng React, Next.js, TypeScript và CSS hiện đại, tôi chuyên kiến tạo những trải nghiệm giao diện người dùng đột phá (Glassmorphism, 3D Web, Motion UI) giúp sản phẩm của bạn tỏa sáng giữa hàng triệu trang web.",
      ],
      tags: ["Sáng tạo", "Cầu toàn", "Tư duy hệ thống", "Đam mê khám phá"],
    },
    skills: {
      title: "Kỹ năng & Vũ khí Công nghệ",
      subtitle: "Các công nghệ lõi tôi sử dụng để kiến tạo vũ trụ số",
      categories: [
        {
          name: "Frontend Core & Frameworks",
          skills: [
            { name: "ReactJS / Next.js", level: 95 },
            { name: "TypeScript / ES6+", level: 90 },
            { name: "Tailwind CSS & Glassmorphism", level: 98 },
            { name: "Framer Motion & Three.js (3D)", level: 85 },
          ],
        },
        {
          name: "State, Architecture & Tools",
          skills: [
            { name: "Redux Toolkit / Zustand", level: 92 },
            { name: "RESTful API & GraphQL", level: 88 },
            { name: "Vite / Webpack / CI-CD", level: 86 },
            { name: "Figma to Code & Design Tokens", level: 94 },
          ],
        },
      ],
    },
    philosophy: {
      title: "Triết lý làm việc",
      subtitle: "3 nguyên tắc dẫn lối trong từng dòng mã",
      items: [
        {
          title: "Hiệu năng là cốt lõi (Performance First)",
          desc: "Giao diện dù lung linh đến đâu cũng phải tải nhanh dưới 1 giây, phản hồi tức thì với 60 FPS mượt mà.",
        },
        {
          title: "Thẩm mỹ chuẩn xác (Pixel Perfection)",
          desc: "Chú trọng vào từng chi tiết ánh sáng viền, độ mờ nền, tương phản màu sắc và bố cục cân đối.",
        },
        {
          title: "Trải nghiệm vị nhân sinh (User-Centric)",
          desc: "Tạo ra những tương tác tự nhiên, trực quan và dễ tiếp cận cho tất cả mọi đối tượng người dùng.",
        },
      ],
    },
  },

  projects: [
    {
      id: "cosmic-voyage",
      title: "Cosmic Voyage 3D Explorer",
      subtitle:
        "Hệ thống mô phỏng hệ mặt trời và các hành tinh ngoại với hiệu ứng không gian 3D tương tác.",
      category: "Web App",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
      tags: ["React", "Three.js", "Tailwind CSS", "NASA Open API"],
      featured: true,
      demoUrl: "https://example.com/demo1",
      githubUrl: "https://github.com/example/cosmic-voyage",
    },
    {
      id: "nebula-design-system",
      title: "Nebula Glass UI System",
      subtitle:
        "Thư viện giao diện Glassmorphism cao cấp dành cho React với hơn 40+ components tùy biến.",
      category: "UI/UX & Library",
      image:
        "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?q=80&w=1200&auto=format&fit=crop",
      tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      featured: true,
      demoUrl: "https://example.com/demo2",
      githubUrl: "https://github.com/example/nebula-ui",
    },
    {
      id: "astro-dashboard",
      title: "AstroTelemetry Command Center",
      subtitle:
        "Bảng điều khiển theo dõi vệ tinh và dữ liệu khí tượng không gian theo thời gian thực.",
      category: "Web App",
      image:
        "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1200&auto=format&fit=crop",
      tags: ["Next.js", "WebSockets", "ChartJS", "Glassmorphism"],
      featured: true,
      demoUrl: "https://example.com/demo3",
      githubUrl: "https://github.com/example/astro-dashboard",
    },
    {
      id: "quantum-cinema",
      title: "Quantum Cinema Stream",
      subtitle:
        "Nền tảng xem phim trực tuyến với giao diện kính mờ đổi màu theo poster phim.",
      category: "Frontend",
      image:
        "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1200&auto=format&fit=crop",
      tags: ["React", "Redux Toolkit", "TMDB API", "Tailwind"],
      featured: false,
      demoUrl: "https://example.com/demo4",
      githubUrl: "https://github.com/example/quantum-cinema",
    },
    {
      id: "stellar-task",
      title: "Stellar Space Productivity",
      subtitle:
        "Ứng dụng quản lý dự án phong cách Obsidian Glass với âm thanh vũ trụ thư giãn.",
      category: "Web App",
      image:
        "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop",
      tags: ["React", "Zustand", "IndexedDB", "Web Audio API"],
      featured: false,
      demoUrl: "https://example.com/demo5",
      githubUrl: "https://github.com/example/stellar-task",
    },
    {
      id: "deepspace-ai",
      title: "DeepSpace AI Assistant",
      subtitle:
        "Trợ lý ảo AI thông minh với giao diện hạt sao tương tác bằng giọng nói.",
      category: "Frontend",
      image:
        "https://images.unsplash.com/photo-1538370965046-79c0d6907d47?q=80&w=1200&auto=format&fit=crop",
      tags: ["React", "OpenAI API", "Tailwind CSS", "Framer Motion"],
      featured: false,
      demoUrl: "https://example.com/demo6",
      githubUrl: "https://github.com/example/deepspace-ai",
    },
  ],

  contact: {
    title: "Khởi đầu một Chuyến Du hành mới",
    subtitle:
      "Bạn có một ý tưởng dự án ấn tượng hoặc muốn thảo luận về cơ hội hợp tác? Hãy gửi tin nhắn cho tôi!",
    direct: {
      email: "alex.cosmic.dev@gmail.com",
      phone: "+84 (0) 90 123 4567",
      location: "Quận 1, TP. Hồ Chí Minh, Việt Nam",
      timezone: "GMT+7 (Indochina Time)",
    },
  },
};
