import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { NextPage } from "next";
import {
  BsFillFileEarmarkLockFill,
  BsFillCheckCircleFill,
} from "react-icons/bs";
import { MdSecurity } from "react-icons/md";

interface FeatureCardProps {
  title: string;
  desc: string;
  icon: any;
}

const FeatureCard = ({ title, desc, icon }: FeatureCardProps) => {
  return (
    <div className="relative p-5 rounded-lg bg-black/40 bg-opacity-20 dark:bg-green-200 dark:bg-opacity-30">
      <dt className="flex flex-col items-center md:items-start">
        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#90EE90] dark:bg-[#90EE90] text-black">!!
          {icon}
        </div>
        <p className="pt-5 text-lg leading-6 font-medium font-semibold text-[#732fff] dark:text-[#8B4513]">
          {title}
        </p>
      </dt>
      <dd className="mt-2 text-base text-center text-gray-600 md:text-left dark:text-gray">
        {desc}
      </dd>
    </div>
  );
};

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>CarboCred</title>
        <meta name="description" content="CarboCred" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="px-4 md:px-0 mx-auto max-w-[1080px]">
        <div className="md:text-left h-[calc(100vh-60px)] flex justify-center flex-row">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-green dark:text-green sm:text-5xl md:text-6xl">
              <span className="block text-gray-700 xl:inline dark:text-black">
                   Welcome to
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#9ACD32] to-[#6B8E23] dark:from-[#9ACD32] dark:to-[#6B8E23] pb-4">
                  CarboCred
              </span>
              <span className="block font-semibold text-black dark:text-[#e99aff] font-medium text-2xl">
                The bitcoin for Carbon Credits
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-600 dark:text-black sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Sell your Carbon Credits to a customer today and avail benefits!!!
            </p>
            <div className="mt-5 sm:mt-8 sm:flex lg:justify-start md:flex-col lg:flex-row">
              <div>
                <Link
                  href="/explore"
                  className="w-full md:w-[70%] lg:w-full flex items-center justify-center px-8 py-3 border-0 border-transparent text-base font-medium rounded-3xl text-black bg-gradient-to-r from-[#9ACD32] to-[#AEFFAE] hover:drop-shadow-[0_3px_5px_#7d7d7d] dark:hover:drop-shadow-[0_3px_5px_#8ce1ff] md:py-2 md:text-lg md:px-8"
                >
                  Explore
                </Link>
              </div>
            </div>
          </div>
          <div className="md:flex hidden my-auto w-[30%] md:w-[60%] ml-10 items-end">
            <Image
              src={require("/public/Screenshot 2023-06-19 at 5.16.14 PM.png")}
              width="600"
              height="500"
              className="ml-10"
              alt="Banner"
            />
          </div>
        </div>

        <div className="pt-5 pb-20 mx-auto max-w-7xl">
          <div className="flex flex-col w-full mb-5 text-center md:mb-10">
            <h1 className="text-4xl mb-10 font-bold title-font mb-4 text-[#732fff] dark:text-black">
              Features
            </h1>
          </div>
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            <FeatureCard 
              icon={<BsFillFileEarmarkLockFill size={25} />}
              title="Proof of Benefit"
              desc="CarboCred has SPoS consensus which enables 17 UN SDGs to drive ESG with better approach. That's where government agrees on common ground."
            />
            <FeatureCard
              icon={<MdSecurity size={25} />}
              title="Security"
              desc="Everything on-chain! Prevent any forgery and errors while verifying a claim. No one can change RoR except the authorized person."
            />
            <FeatureCard
              icon={<BsFillCheckCircleFill size={25} />}
              title="Verification"
              desc="It also ensures that the right company is performing transaction of carbon credits."
            />
          </dl>
        </div>
      </main>
    </>
  );
};

export default Home;
