import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import { FaBeer } from "react-icons/fa";
import Image from "next/image";

export default function Home() {
  return (
    <section className="relative">
      <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          // style={{
          //   backgroundImage: `url('/img/vecteezy_a-velozes-comida-refeicao-dentro-a-preto-fundo-com-ai-gerado_23010452.jpg')`
          // }}
        >
          <Image
            fill
            src="/img/vecteezy_a-velozes-comida-refeicao-dentro-a-preto-fundo-com-ai-gerado_23010452.jpg"
            alt=""
          />
        </div>
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 mx-auto text-center">
              <div className="pr-12">
                <h1 className="text-white font-semibold text-5xl">
                  Your story starts with us.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="bg-blueGray-200 dark:bg-gray-800 -mt-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white dark:bg-gray-800 w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400"></div>
                  <h6 className="text-xl font-semibold dark:text-white">
                    Awarded Agency
                  </h6>
                  <p className="mt-2 mb-4 dark:text-gray-400">
                    Divide details about your product or agency work into parts.
                    A paragraph describing a feature will be enough.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white dark:bg-gray-800 w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400"></div>
                  <h6 className="text-xl font-semibold dark:text-white">
                    Free Revisions
                  </h6>
                  <p className="mt-2 mb-4 text-blueGray-500 dark:text-gray-400">
                    Keep you user engaged by providing meaningful information.
                    Remember that by this time, the user is curious.
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words dark:bg-gray-800 bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400"></div>
                  <h6 className="text-xl font-semibold dark:text-white">
                    Verified Company
                  </h6>
                  <p className="mt-2 mb-4 text-blueGray-500 dark:text-gray-400">
                    Write a few lines about each one. A paragraph describing a
                    feature will be enough. Keep you user engaged!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
