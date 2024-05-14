// import AlternateHeader from "@/components/blocks/AlternateHeader";
// import Team from "@/public/assets/content/Team/content.json";
// export default function page() {
//   return (
//     <section className='flex flex-col w-full max-w-6xl mx-auto space-y-8'>
//       <section className='flex flex-col local-container gap-6 p-4 space-y-4'>
//         <AlternateHeader
//           title={Team.title}
//           color={Team.color}
//           description={Team.description}
//         />
//       </section>
//     </section>
//   );
// }

import React from "react";
import teamContent1 from "@/public/assets/content/Team/content1.json";
import teamContent2 from "@/public/assets/content/Team/content2.json";
import teamContent3 from "@/public/assets/content/Team/content3.json";
import teamContent4 from "@/public/assets/content/Team/content4.json";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Team() {
  return (
    <>
      <div className="container mx-auto m-10 font-sans">
        <h1 className="text-center font-google-sans font-bold text-[48px] text-green-500 leading-[61.06px]">
          {teamContent1.header}
        </h1>
        <p className="text-center font-google-sans font-normal text-[28px] text-white mb-12 leading-[35.62px]">
          {teamContent1.description}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {teamContent1.card1.map((card1) => (
            <div className="max-w-sm bg-white dark:bg-white rounded-[10px] overflow-hidden shadow-lg">
              <div className="px-4 pb-6">
                <div className="text-center my-4">
                  <img
                    className="h-32 w-32 rounded-full border-4 border-white dark:border-t-red-500 border-l-green-500 border-r-amber-500 border-b-blue-500 mx-auto my-4"
                    src="/assets/images/Ellipse 34.png"
                    alt=""
                  />
                  <div className="py-2 font-google-sans m-4">
                    <h3 className="font-normal text-[28px] text-gray-800 dark:text-gray-900 mb-1 leading-[35.62px] mt-2">
                      {card1.title}
                    </h3>
                    <p className="font-normal text-[14px] text-gray-800 dark:text-gray-900 mb-1 leading-[17.81px] mt-2">
                      {card1.content}
                    </p>
                    <div className="inline-flex text-xl gap-5 text-gray-700 dark:text-gray-900 items-center mt-5">
                      {card1.linkedinIcon && (
                        <a href={card1.linkedinIcon} target="_blank" rel="noopener noreferrer">
                          <FaLinkedin />
                        </a>
                      )}
                      {card1.twitterIcon && (
                        <a href={card1.twitterIcon} target="_blank" rel="noopener noreferrer">
                          <FaXTwitter />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {teamContent1.cards2.map((card2) => (
            <div className="max-w-sm bg-white dark:bg-white rounded-[10px] overflow-hidden shadow-lg">
              <div className="px-4  pb-6">
                <div className="flex">
                  <div className="text-center">
                    <img
                      className="h-16 w-16 rounded-full border-4 border-white dark:border-t-red-500 border-l-green-500 border-r-amber-500 border-b-blue-500 mx-auto my-4"
                      src="/assets/images/Ellipse 34.png"
                      alt=""
                    />
                  </div>

                  <div className="mx-3 my-3">
                    <h3 className="font-bold text-[14px] text-gray-800 dark:text-gray-900 mb-1 leading-[17.81px] mt-2">
                      {card2.title}
                    </h3>
                    <p className="font-normal text-[12px] text-gray-800 dark:text-gray-900 mb-1 leading-[15.26px] mt-2">
                      {card2.content}
                    </p>
                  </div>
                </div>
                <p className="font-normal text-center text-[14px] text-gray-800 dark:text-gray-900 mt-2 leading-[17.81px]">
                  {card2.description}
                </p>
              </div>
            </div>
          ))}

          {teamContent1.cards3.map((card3) => (
            <div className="max-w-sm bg-white dark:bg-white rounded-[10px] overflow-hidden shadow-lg">
              <div className="px-4 pb-6">
                <div className="text-center my-4">
                  <img
                    className="h-32 w-32 rounded-full border-4 border-white dark:border-t-red-500 border-l-green-500 border-r-amber-500 border-b-blue-500 mx-auto my-4"
                    src="/assets/images/Ellipse 34.png"
                    alt=""
                  />
                  <div className="py-2 font-google-sans m-4">
                    <h3 className="font-normal text-[28px] text-gray-800 dark:text-gray-900 mb-1 leading-[35.62px] mt-2">
                      {card3.title}
                    </h3>
                    <p className="font-normal text-[14px] text-gray-800 dark:text-gray-900 mb-1 leading-[17.81px] mt-2">
                      {card3.content}
                    </p>
                    <div className="inline-flex text-xl gap-5 text-gray-700 dark:text-gray-900 items-center mt-5">
                      {card3.linkedinIcon && (
                        <a href={card3.linkedinIcon} target="_blank" rel="noopener noreferrer">
                          <FaLinkedin />
                        </a>
                      )}
                      {card3.twitterIcon && (
                        <a href={card3.twitterIcon} target="_blank" rel="noopener noreferrer">
                          <FaXTwitter />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto m-10 font-sans">
        <h1 className="text-center font-google-sans font-bold text-[48px] text-amber-500 leading-[61.06px]">
          {teamContent2.header}
        </h1>
        <p className="text-center font-google-sans font-normal text-[28px] text-white mb-12 leading-[35.62px]">
          {teamContent2.description}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {teamContent2.cards.map((card) => (
            <div className="max-w-sm bg-white dark:bg-white rounded-[10px] overflow-hidden shadow-lg">
              <div className="px-4 pb-6">
                <div className="text-center my-4">
                  <img
                    className="h-32 w-32 rounded-full border-4 border-white dark:border-t-red-500 border-l-green-500 border-r-amber-500 border-b-blue-500 mx-auto my-4"
                    src="/assets/images/Ellipse 34.png"
                    alt=""
                  />
                  <div className="py-2 font-google-sans m-4">
                    <h3 className="font-normal text-[28px] text-gray-800 dark:text-gray-900 mb-1 leading-[35.62px] mt-2">
                      {card.title}
                    </h3>
                    <p className="font-normal text-[14px] text-gray-800 dark:text-gray-900 mb-1 leading-[17.81px] mt-2">
                      {card.content}
                    </p>
                    <div className="inline-flex text-xl gap-5 text-gray-700 dark:text-gray-900 items-center mt-5">
                      {card.linkedinIcon && (
                        <a href={card.linkedinIcon} target="_blank" rel="noopener noreferrer">
                          <FaLinkedin />
                        </a>
                      )}
                      {card.twitterIcon && (
                        <a href={card.twitterIcon} target="_blank" rel="noopener noreferrer">
                          <FaXTwitter />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto m-10 font-sans">
        <h1 className="text-center font-google-sans font-bold text-[48px] text-blue-500 leading-[61.06px]">
          {teamContent3.header}
        </h1>
        <p className="text-center font-google-sans font-normal text-[28px] text-white mb-12 leading-[35.62px]">
          {teamContent3.description}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {teamContent3.cards.map((card) => (
            <div className="max-w-sm bg-white dark:bg-white rounded-[10px] overflow-hidden shadow-lg">
              <div className="px-4 pb-6">
                <div className="text-center my-4">
                  <img
                    className="h-32 w-32 rounded-full border-4 border-white dark:border-t-red-500 border-l-green-500 border-r-amber-500 border-b-blue-500 mx-auto my-4"
                    src="/assets/images/Ellipse 34.png"
                    alt=""
                  />
                  <div className="py-2 font-google-sans m-4">
                    <h3 className="font-normal text-[28px] text-gray-800 dark:text-gray-900 mb-1 leading-[35.62px] mt-2">
                      {card.title}
                    </h3>
                    <p className="font-normal text-[14px] text-gray-800 dark:text-gray-900 mb-1 leading-[17.81px] mt-2">
                      {card.content}
                    </p>
                    <div className="inline-flex text-xl gap-5 text-gray-700 dark:text-gray-900 items-center mt-5">
                      {card.linkedinIcon && (
                        <a href={card.linkedinIcon} target="_blank" rel="noopener noreferrer">
                          <FaLinkedin />
                        </a>
                      )}
                      {card.twitterIcon && (
                        <a href={card.twitterIcon} target="_blank" rel="noopener noreferrer">
                          <FaXTwitter />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto m-10 font-sans">
        <h1 className="text-center font-google-sans font-bold text-[48px] text-red-500 leading-[61.06px]">
          {teamContent4.header}
        </h1>
        <p className="text-center font-google-sans font-normal text-[28px] text-white mb-12 leading-[35.62px]">
          {teamContent4.description}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {teamContent4.cards.map((card) => (
            <div className="max-w-sm bg-white dark:bg-white rounded-[10px] overflow-hidden shadow-lg">
              <div className="px-4 pb-6">
                <div className="text-center my-4">
                  <img
                    className="h-32 w-32 rounded-full border-4 border-white dark:border-t-red-500 border-l-green-500 border-r-amber-500 border-b-blue-500 mx-auto my-8"
                    src="/assets/images/Ellipse 34.png"
                    alt=""
                  />
                  <div className="py-2 font-google-sans">
                    <h3 className="font-normal text-[28px] text-gray-800 dark:text-gray-900 mb-1 leading-[35.62px] mt-2">
                      {card.title}
                    </h3>
                    <p className="font-normal text-[14px] text-gray-800 dark:text-gray-900 mb-1 leading-[17.81px] mt-2">
                      {card.content}
                    </p>
                    <div className="inline-flex text-xl gap-5 text-gray-700 dark:text-gray-900 items-center mt-5">
                      {card.linkedinIcon && (
                        <a href={card.linkedinIcon} target="_blank" rel="noopener noreferrer">
                          <FaLinkedin />
                        </a>
                      )}
                      {card.twitterIcon && (
                        <a href={card.twitterIcon} target="_blank" rel="noopener noreferrer">
                          <FaXTwitter />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Team;

