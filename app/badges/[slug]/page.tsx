'use client';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import QRCode from 'react-qr-code';
import { Button } from '@/components/ui/button';

export default function BadgePage() {
  const params = useParams();
  const slugParam = params.slug;
  const uuid = Array.isArray(slugParam) ? slugParam[0] : slugParam; // Ensure uuid is a string
  const router = useRouter();

  // Fetch data or render based on uuid...
  return (
    <div className="min-h-screen bg-[url('/bg.png')] bg-cover bg-top bg-no-repeat relative overflow-hidden">
      <div className="relative z-10 container mx-auto px-8 py-8">
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
          <div className="flex justify-center flex-col">
            <h1 className="text-4xl text-white font-bold text-center">
              YOU ARE IN!
            </h1>
            <p className="text-xl  text-white font-normal text-center pt-10 pb-10">
              Scan the QR code at each zone and collect the victory stamps on
              your digital passport.
            </p>

            <div className="flex justify-center flex-col">
              <div>
                <QRCode
                  value={uuid}
                  size={200}
                  fgColor="#000"
                  bgColor="#fff"
                  className="mx-auto"
                />
              </div>
              <p className="text-xl text-white font-normal text-center pt-10">
                Complete the journey, collect them all, and win the prize
              </p>
              <div className="flex justify-center mt-5">
                <Button
                  className="py-5 w-1/2 items-center bg-[#74F9A1] text-[#0E3CDF] font-bold hover:bg-[#a8f6c2]"
                  onClick={() => router.push(`/badges/stamps/${uuid}`)}
                >
                  PASSPORT
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
