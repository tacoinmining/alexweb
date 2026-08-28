export const PORTFOLIO_DATA = {
  personal: {
    name: 'Nguyễn Anh Tuấn',
    shortName: 'Tuấn',
    role: 'Frontend Developer & UI/UX Specialist',
    headline: 'Nhà phát triển Frontend đam mê vũ trụ và công nghệ',
    subheadline: 'Chuyên kiến tạo các giao diện Glassmorphism hiện đại, tối ưu hiệu năng và mang đến trải nghiệm thị giác tinh tế, thoáng đãng.',
    location: 'Hà Nội / TP. Hồ Chí Minh, Việt Nam',
    status: 'Sẵn sàng nhận dự án mới',
    cvUrl: '#',
    socials: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      email: 'tuan.dev.contact@gmail.com'
    }
  },

  aboutCards: [
    {
      id: 'bio',
      title: 'Tiểu sử',
      subtitle: 'Hành trình phát triển',
      content: 'Xin chào! Tôi là Nguyễn Anh Tuấn, lập trình viên Frontend đam mê cái đẹp tối giản và công nghệ hiện đại. Với tôi, mỗi giao diện web là một không gian số cần sự cân bằng hoàn hảo giữa tính thẩm mỹ, độ mượt mà và sự thoáng đãng.',
      tags: ['Frontend Dev', 'Tối giản', 'Cầu toàn', 'UI/UX']
    },
    {
      id: 'skills',
      title: 'Kỹ năng',
      subtitle: 'Công nghệ chủ lực',
      content: 'Làm chủ các công nghệ web hiện đại để xây dựng trải nghiệm đỉnh cao:',
      skillsList: [
        'ReactJS & Next.js',
        'Tailwind CSS & Glassmorphism',
        'TypeScript & Modern JavaScript',
        'Framer Motion & Responsive UI'
      ]
    },
    {
      id: 'philosophy',
      title: 'Triết lý làm việc',
      subtitle: 'Nguyên tắc thiết kế',
      content: 'Ưu tiên trải nghiệm người dùng với 3 tiêu chí cốt lõi: Tối giản - Tốc độ cao - Chuẩn xác từng pixel. Loại bỏ mọi chi tiết thừa để tôn vinh nội dung quan trọng nhất.',
      highlights: ['Tối giản & Thoáng đãng', 'Hiệu năng < 1s', 'Chuẩn Pixel-Perfect']
    }
  ],

  projects: [
    {
      id: 'cosmic-voyage',
      title: 'Cosmic Voyage 3D Explorer',
      subtitle: 'Mô phỏng vũ trụ và hệ hành tinh 3D tương tác với giao diện kính mờ sang trọng.',
      category: 'Web App',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop',
      tags: ['React', 'Three.js', 'Tailwind CSS'],
      demoUrl: 'https://example.com/demo1',
      githubUrl: 'https://github.com/example/cosmic-voyage'
    },
    {
      id: 'nebula-design-system',
      title: 'Nebula Glass UI System',
      subtitle: 'Thư viện thành phần Glassmorphism cao cấp với hiệu ứng ánh sáng viền tinh tế.',
      category: 'UI/UX',
      image: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?q=80&w=1200&auto=format&fit=crop',
      tags: ['React', 'TypeScript', 'Tailwind CSS'],
      demoUrl: 'https://example.com/demo2',
      githubUrl: 'https://github.com/example/nebula-ui'
    },
    {
      id: 'astro-dashboard',
      title: 'AstroTelemetry Dashboard',
      subtitle: 'Bảng điều khiển theo dõi dữ liệu không gian thời gian thực với bố cục trực quan.',
      category: 'Web App',
      image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1200&auto=format&fit=crop',
      tags: ['Next.js', 'Tailwind', 'Glassmorphism'],
      demoUrl: 'https://example.com/demo3',
      githubUrl: 'https://github.com/example/astro-dashboard'
    }
  ],

  contact: {
    title: 'Liên hệ',
    subtitle: 'Bạn có ý tưởng dự án mới? Hãy kết nối với tôi!',
    direct: {
      email: 'tuan.dev.contact@gmail.com',
      location: 'Việt Nam',
      status: 'Đang mở nhận dự án'
    }
  }
};
