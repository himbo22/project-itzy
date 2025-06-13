This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

my-nextjs-app/
├── public/                     # Tài nguyên tĩnh (hình ảnh, favicon, v.v.)
│   ├── images/                 # Thư mục chứa hình ảnh
│   └── favicon.ico             # Biểu tượng favicon
├── src/                        # Thư mục mã nguồn chính
│   ├── app/                    # Cấu trúc thư mục cho App Router của Next.js
│   │   ├── layout.tsx          # Layout chính của ứng dụng
│   │   ├── page.tsx            # Trang chủ (Home)
│   │   ├── signin/             # Trang đăng nhập
│   │   │   └── page.tsx
│   │   ├── dashboard/          # Trang dashboard (sau khi đăng nhập)
│   │   │   └── page.tsx
│   │   └── globals.css         # CSS toàn cục
│   ├── components/             # Các thành phần giao diện (UI components)
│   │   ├── auth/               # Components liên quan đến xác thực
│   │   │   ├── LoginForm.tsx   # Form đăng nhập
│   │   │   └── LogoutButton.tsx # Nút đăng xuất
│   │   ├── ui/                 # Các UI components tái sử dụng
│   │   │   ├── Button.tsx      # Component nút
│   │   │   └── Navbar.tsx      # Thanh điều hướng
│   ├── hooks/                  # Custom hooks
│   │   └── useAuth.ts          # Hook để sử dụng auth store
│   ├── lib/                    # Thư viện và tiện ích
│   │   ├── api/                # Hàm gọi API bên ngoài
│   │   │   ├── auth.ts         # API calls cho xác thực (login, logout)
│   │   │   └── user.ts         # API calls cho thông tin người dùng
│   │   └── axios.ts            # Cấu hình Axios hoặc fetch client
│   ├── stores/                 # Zustand stores
│   │   └── authStore.ts        # Store quản lý xác thực (code bạn cung cấp)
│   ├── types/                  # Định nghĩa TypeScript types/interfaces
│   │   ├── auth.ts             # Interface cho User, AuthState 
│   │   └── api.ts              # Interface cho API responses
│   ├── utils/                  # Các hàm tiện ích
│   │   └── helpers.ts          # Các hàm hỗ trợ (format, validation, v.v.)
│   └── styles/                 # CSS modules hoặc Tailwind config
│       ├── tailwind.css        # Nếu dùng Tailwind CSS
│       └── components/         # CSS modules cho components
├── .env                        # Biến môi trường (API_URL, v.v.)
├── .env.local                  # Biến môi trường local
├── .gitignore                  # Danh sách các file/thư mục bỏ qua
├── next.config.mjs             # Cấu hình Next.js
├── tsconfig.json               # Cấu hình TypeScript
├── package.json                # Quản lý dependencies
├── README.md                   # Tài liệu dự án
└── tailwind.config.js          # Cấu hình Tailwind CSS (nếu sử dụng)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
