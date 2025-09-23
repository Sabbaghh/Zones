import RegistrationForm from '@/components/registration-form';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-[url('/bg.png')] bg-cover bg-top bg-no-repeat relative overflow-hidden">
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between mb-10">
          <div className="self-center">
            <Image width={200} height={200} src="/Logos/logo.png" alt="logo" />
          </div>
          <div className="self-center">
            <Image width={50} height={50} src="/Logos/adnoc.png" alt="logo" />
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <Image
            src={'/Text.png'}
            alt="text"
            width={500}
            height={200}
            className="pb-15"
          />
          {/* Registration Form */}
          <RegistrationForm />
        </div>
      </div>
    </div>
  );
}
