'use client'

import Link from 'next/link';
import Image from 'next/image';

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Container */}
      <div className="max-w-[700px] mx-auto px-4">
        {/* Login Form */}
        <section id="login-form" className="pb-20">
          <div className="flex flex-col items-center gap-4 my-5 text-center">
            <Image src="/images/auth/logo_auth.png" alt="Logo" width={100} height={60} />
            <h1 className="text-2xl font-bold text-black">Đăng nhập với</h1>
          </div>

          {/* Liên kết đăng nhập */}
          <div className="flex justify-center gap-8 mb-5">
            <button className="flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 rounded-xl text-lg cursor-pointer w-40">
              <Image src="/images/auth/logo_google.png" alt="Google" width={24} height={24} />
              Google
            </button>
            <button className="flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 rounded-xl text-lg cursor-pointer w-40">
              <Image src="/images/auth/logo_zalo.png" alt="Zalo" width={24} height={24} />
              Zalo
            </button>
          </div>

          <div className="flex items-center gap-2 my-5 w-3/5 mx-auto">
            <hr className="flex-grow border-t border-gray-300" />
            <p className="text-sm text-gray-500 whitespace-nowrap">hoặc</p>
            <hr className="flex-grow border-t border-gray-300" />
          </div>

          {/* Form */}
          <form className="w-full">
            <div className="mb-5 relative">
              <input
                type="tel"
                id="phone"
                placeholder=" "
                className="w-full h-[50px] border-b border-gray-300 bg-white text-base focus:border-red-600 outline-none transition-all peer px-0 pt-4 pb-1"
              />
              <label
                htmlFor="phone"
                className="absolute left-0 top-4 text-gray-500 text-base transition-all duration-300 peer-focus:top-[-5px] peer-focus:text-xs peer-focus:text-red-600 peer-not-placeholder-shown:top-[-5px] peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-red-600"
              >
                SỐ ĐIỆN THOẠI
              </label>
              <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-red-600 transition-all duration-300 peer-focus:w-full" />
            </div>

            <div className="mb-5 relative">
              <input
                type="password"
                id="password"
                placeholder=" "
                className="w-full h-[50px] border-b border-gray-300 bg-white text-base focus:border-red-600 outline-none transition-all peer px-0 pt-4 pb-1"
              />
              <label
                htmlFor="password"
                className="absolute left-0 top-4 text-gray-500 text-base transition-all duration-300 peer-focus:top-[-5px] peer-focus:text-xs peer-focus:text-red-600 peer-not-placeholder-shown:top-[-5px] peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-red-600"
              >
                MẬT KHẨU
              </label>
              <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-red-600 transition-all duration-300 peer-focus:w-full" />
            </div>

            <div className="flex justify-end mt-4">
              <Link href="#" className="text-sm text-gray-500 hover:text-red-600">Quên mật khẩu?</Link>
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 text-white font-semibold text-sm py-3 rounded-md mt-5"
            >
              Đăng nhập
            </button>
          </form>

          {/* Liên kết đăng ký và quảng cáo */}
          <div className="text-center mt-5">
            <p className="text-sm text-gray-500 inline">
              Bạn chưa có tài khoản?{' '}
              <Link href="#" className="text-red-600 font-semibold text-sm">Đăng ký ngay</Link>
            </p>
          </div>
          <Link href="#" className="block text-center text-red-600 font-semibold text-sm mt-4 underline">
            Xem chính sách ưu đãi Smember
          </Link>
        </section>
      </div>

      <style jsx>{`
        input:placeholder-shown + label {
          top: 18px;
          font-size: 15px;
          opacity: 1;
        }
        input:not(:placeholder-shown) + label {
          top: -5px;
          font-size: 12px;
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default LoginPage;