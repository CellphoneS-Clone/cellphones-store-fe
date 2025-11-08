'use client';

import React, { useState, useEffect } from 'react';
import { Mail, CheckCircle, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useVerifyEmailMutation, useResendVerificationMutation } from '@/store/features/authApi';
import { useSearchParams, useRouter } from 'next/navigation';

export default function EmailVerificationPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [verifyEmail, { isLoading: isVerifying }] = useVerifyEmailMutation();
  const [resendVerification, { isLoading: isResending }] = useResendVerificationMutation();
  
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState(['', '', '', '', '', '']);
  const [step, setStep] = useState<'verify' | 'success'>('verify');
  const [error, setError] = useState('');

  // Lấy email từ URL query parameter hoặc localStorage
  useEffect(() => {
    const emailFromQuery = searchParams.get('email');
    const storedEmail = localStorage.getItem('email') || '';
    const emailToUse = emailFromQuery || storedEmail;
    
    if (emailToUse) {
      setEmail(emailToUse);
      // Lưu vào localStorage để dùng cho các lần sau
      localStorage.setItem('email', emailToUse);
    }
  }, [searchParams]);

  const handleCodeChange = (index: number, value: string) => {
    if (value.length > 1) return;

    const newCode = [...verificationCode];
    newCode[index] = value;
    setVerificationCode(newCode);

    if (value && index < 5) {
      const nextInput = document.getElementById(`code-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !verificationCode[index] && index > 0) {
      const prevInput = document.getElementById(`code-${index - 1}`);
      prevInput?.focus();
    }
  };

  const handleVerify = async () => {
    const code = verificationCode.join('');
    if (code.length !== 6) {
      setError('Vui lòng nhập đủ 6 ký tự');
      return;
    }

    try {
      setError('');
      await verifyEmail({ 
        email, 
        verification_code: code 
      }).unwrap();

      // Nếu không có lỗi, chuyển sang bước success
      setStep('success');
    } catch (err: any) {
      setError(err?.data?.message || 'Mã xác nhận không đúng. Vui lòng thử lại.');
    }
  };

  const handleResend = async () => {
    if (!email) {
      setError('Vui lòng nhập email');
      return;
    }

    try {
      setError('');
      await resendVerification(email).unwrap();
      
      // Nếu thành công, reset code và focus vào ô đầu
      setVerificationCode(['', '', '', '', '', '']);
      setTimeout(() => {
        document.getElementById('code-0')?.focus();
      }, 100);
    } catch (err: any) {
      setError(err?.data?.message || 'Không thể gửi lại mã. Vui lòng thử lại.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Card className="shadow-2xl">
          {step === 'verify' && (
            <>
              <CardHeader className="text-center space-y-4">
                <div className="flex justify-center">
                  <div className="bg-gradient-to-br from-red-100 to-orange-100 p-4 rounded-full">
                    <Mail className="w-12 h-12 text-red-600" />
                  </div>
                </div>
                <CardTitle className="text-2xl">Nhập mã xác nhận</CardTitle>
                <CardDescription>
                  Mã xác nhận đã được gửi đến<br />
                  <span className="font-semibold text-red-600">{email}</span>
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex justify-center gap-2">
                  {verificationCode.map((digit, index) => (
                    <Input
                      key={index}
                      id={`code-${index}`}
                      type="text"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleCodeChange(index, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(index, e)}
                      className="w-12 h-14 text-center text-2xl font-bold"
                    />
                  ))}
                </div>

                {error && (
                  <p className="text-red-500 text-center text-sm">{error}</p>
                )}

                <Button
                  onClick={handleVerify}
                  disabled={isVerifying}
                  className="w-full h-11 bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white font-semibold"
                >
                  {isVerifying ? 'Đang xác nhận...' : 'Xác nhận'}
                </Button>

                <div className="text-center">
                  <Button
                    variant="ghost"
                    onClick={handleResend}
                    disabled={isResending}
                    className="text-red-600 hover:text-red-700 hover:bg-red-50"
                  >
                    <RefreshCw className={`w-4 h-4 mr-2 ${isResending ? 'animate-spin' : ''}`} />
                    {isResending ? 'Đang gửi lại...' : 'Gửi lại mã'}
                  </Button>
                </div>
              </CardContent>
            </>
          )}

          {step === 'success' && (
            <>
              <CardHeader className="text-center space-y-4">
                <div className="flex justify-center">
                  <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-4 rounded-full">
                    <CheckCircle className="w-16 h-16 text-green-600" />
                  </div>
                </div>
                <CardTitle className="text-2xl">Xác nhận thành công!</CardTitle>
                <CardDescription>
                  Email của bạn đã được xác nhận thành công
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  onClick={() => {
                    // Xóa email khỏi localStorage và chuyển đến trang đăng nhập
                    localStorage.removeItem('email');
                    router.push('/login');
                  }}
                  className="w-full h-11 bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white font-semibold"
                >
                  Đăng nhập ngay
                </Button>
              </CardContent>
            </>
          )}
        </Card>
      </div>
    </div>
  );
}
