'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import QRCode from 'react-qr-code';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

export default function BadgePage() {
  const router = useRouter();
  const [uuid, setUuid] = useState<string | undefined>(undefined);
  const [validated, setValidated] = useState(false);

  useEffect(() => {
    const cookieUuid = Cookies.get('uuid');
    if (!cookieUuid) {
      router.push('/');
      return;
    }

    setUuid(cookieUuid);

    const validateUUID = async () => {
      try {
        await axios.get(
          `https://zonecheck.up.railway.app/api/attendee/${cookieUuid}`,
        );
        setValidated(true);
      } catch (error) {
        if (
          typeof error === 'object' &&
          error !== null &&
          'response' in error &&
          (error as any).response &&
          (error as any).response.status === 404
        ) {
          Cookies.remove('uuid');
          router.push('/');
        } else {
          console.error('Validation error:', error);
          // Optionally setValidated(true) if you want to proceed on other errors
        }
      }
    };

    validateUUID();
  }, [router]);

  if (uuid === undefined || !validated) {
    return <div>Loading...</div>;
  }

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
            <p className="text-xl text-white font-normal text-center pt-10 pb-10">
              Scan the QR code at each zone and collect the victory stamps on
              your digital passport.
            </p>
            <div className="flex justify-center flex-col">
              <div className="self-center bg-white p-2 flex items-center justify-center">
                <QRCode
                  value={uuid}
                  size={200}
                  fgColor="#052392"
                  bgColor="#fff"
                />
              </div>
              <p className="text-xl text-white font-normal text-center pt-10">
                Complete the journey, collect them all, and win the prize
              </p>
              <div className="flex justify-center mt-5">
                <Button
                  className="py-5 w-1/2 items-center bg-[#74F9A1] text-[#0E3CDF] font-bold hover:bg-[#a8f6c2]"
                  onClick={() => router.push(`/badges/stamps`)}
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
