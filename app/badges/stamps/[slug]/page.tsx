'use client';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { useState, useEffect } from 'react';
import axios from 'axios';

type Visit = {
  zone: string;
  [key: string]: any;
};

type AttendeeData = {
  visits: Visit[];
  [key: string]: any;
};

export default function BadgePage() {
  const REFRESH_INTERVAL = 180; // seconds
  const params = useParams();
  const uuid = params.slug; // This is your UUID from the URL
  const router = useRouter();
  const [data, setData] = useState<AttendeeData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [remaining, setRemaining] = useState(REFRESH_INTERVAL);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `https://zonecheck.up.railway.app/api/attendee/${uuid}`,
        );
        setData(response.data.data);
      } catch (error) {
        console.error('Failed to fetch attendee data:', error);
        setData({ visits: [] });
      } finally {
        setIsLoading(false);
        setRemaining(REFRESH_INTERVAL);
      }
    };
    fetchData();
    const interval = setInterval(fetchData, REFRESH_INTERVAL * 1000);
    return () => clearInterval(interval);
  }, [uuid]);

  useEffect(() => {
    if (isLoading) return;
    const timer = setInterval(() => {
      setRemaining((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [isLoading]);

  const minutes = Math.floor(remaining / 60);
  const seconds = remaining % 60;

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
          {/* TECHPASS.png */}
          <div className="flex justify-center flex-col">
            <div className="flex justify-center flex-col">
              {isLoading ? (
                <div className="text-center text-white text-2xl mt-10">
                  Loading...
                </div>
              ) : (data?.visits?.length ?? 0) > 0 ? (
                <>
                  <h1 className="text-4xl font-bold text-white text-center [text-shadow:0_0_2px_#fff,0_0_2px_#fff,0_0_2px_#fff,0_0_5px_#fff]">
                    TECH PASS
                  </h1>
                  <div className="grid grid-cols-2 gap-5 bg-[url('/stampsbg.png')] min-h-100 rounded-md bg-cover bg-center bg-white px-5 py-5 justify-center items-start relative mt-5">
                    <div className="absolute bg-[rgba(0,0,0,0.5)] w-0.5 h-2/3 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                    {data?.visits?.map((visit, index) => (
                      <>
                        <div key={index} className="flex justify-center">
                          <Image
                            alt={visit.zone}
                            width={100}
                            height={100}
                            src={`/stamps/${visit.zone}.png`}
                          />
                        </div>
                      </>
                    ))}
                  </div>
                </>
              ) : (
                <div className="text-center text-white text-2xl mt-10">
                  No stamps exist yet
                </div>
              )}
              <div className="mt-5">
                <p className="text-white text-center">
                  Next refresh in {minutes}:
                  {seconds.toString().padStart(2, '0')}
                </p>
                <Progress
                  className="w-1/2 mx-auto mt-2 "
                  value={(remaining / REFRESH_INTERVAL) * 100}
                />
              </div>
              <div className="flex justify-center mt-5">
                <Button
                  className="py-5 w-1/2 items-center bg-[#74F9A1] text-[#0E3CDF] font-bold hover:bg-[#a8f6c2]"
                  onClick={() => router.push(`/badges/${uuid}`)}
                >
                  VIEW YOUR BADGE
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
