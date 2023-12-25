// import { useEffect, useState } from "react";
// import Service from "../../../setup";
// import { useNavigate } from "react-router-dom";

// const data = [
//   {
//     title:
//       "Google's Pixel 7 and 7 Pro’s design gets revealed even more with fresh crisp renders",
//     description:
//       "Now we have a complete image of what the next Google flagship phones will look like. All that's left now is to welcome them during their October announcement!",
//     content:
//       "Google’s highly anticipated upcoming Pixel 7 series is just around the corner, scheduled to be announced on October 6, 2022, at 10 am EDT during the Made by Google event. Well, not that there is any lack of images showing the two new Google phones, b... [1419 chars]",
//     url: "https://www.phonearena.com/news/google-pixel-7-and-pro-design-revealed-even-more-fresh-renders_id142800",
//     image:
//       "https://m-cdn.phonearena.com/images/article/142800-wide-two_1200/Googles-Pixel-7-and-7-Pros-design-gets-revealed-even-more-with-fresh-crisp-renders.jpg",
//     publishedAt: "2022-09-28T08:14:24Z",
//     source: {
//       name: "PhoneArena",
//       url: "https://www.phonearena.com",
//     },
//   },
// ];
// const NewsDetail = () => {
//   const navigate = useNavigate();
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setIsError] = useState("");
//   const [news, setNews] = useState([]);
//   console.log("The news", news);
//   const fetchNews = async () => {
//     setIsLoading(true);
//     try {
//       //   const response = await Service.get("/search?q=example&page=10");
//       //   setNews(response.data.articles);
//       setIsLoading(false);
//     } catch (err: any) {
//       setIsError(err?.response?.data?.errors);
//       setIsLoading(false);
//       console.log("Error while fetching news data", err);
//     }
//   };
//   useEffect(() => {
//     fetchNews();
//   }, []);

//   return (
//     <div className="w-full max-w-[1440px] m-auto mt-[12vh] bg-[#eeeeee]">
//       <div className="p-20 pt-10">
//         <h1 className="text-3xl text-center font-bold text-center text-[black]">
//           Real-world Success Stories Uneviling stories using the imapct of our
//           solution
//         </h1>
//         {error && <p className="mt-5 text-[red]">{error}</p>}
//         {isLoading ? (
//           <p className="mt-3 text-center text-3xl">Loading...</p>
//         ) : (
//           <div>
//             {data.map((item: any, index: any) => (
//               <div
//                 key={index}
//                 className="bg-[white] rounded  rounded-xl h-[200px] mt-10 flex space-x-20"
//               >
//                 <div className="w-1/2 pl-0 h-[200px] ml-1">
//                   <img
//                     src={item?.image}
//                     className="w-fit   rounded h-full"
//                     alt=""
//                   />
//                 </div>
//                 <div className="p-6 flex flex-col justify-center">
//                   <p className="text-xl font-semibold ">{item?.title}</p>
//                   <p className="text-base  mt-2  font-noraml ">
//                     {item?.description}
//                   </p>

//                   <p
//                     onClick={() =>
//                       navigate(`/news/${index + 1}`, {
//                         state: {
//                           title: item.title,
//                           description: item.description,
//                           content: item.content,
//                           url: item.url,
//                           image: item?.image,
//                           publishAt: item.publishedAt,
//                           source: item?.source,
//                         },
//                       })
//                     }
//                     className="text-primary-500 mt-4 text-left cursor-pointer hover:text-primary-700"
//                   >
//                     Learn More ...
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default NewsDetail;

import { useEffect, useState } from "react";
import Service from "../../../setup";
import { useNavigate } from "react-router-dom";

const data = [
  {
    title:
      "Google's Pixel 7 and 7 Pro’s design gets revealed even more with fresh crisp renders",
    description:
      "Now we have a complete image of what the next Google flagship phones will look like. All that's left now is to welcome them during their October announcement!",
    content:
      "Google’s highly anticipated upcoming Pixel 7 series is just around the corner, scheduled to be announced on October 6, 2022, at 10 am EDT during the Made by Google event. Well, not that there is any lack of images showing the two new Google phones, b... [1419 chars]",
    url: "https://www.phonearena.com/news/google-pixel-7-and-pro-design-revealed-even-more-fresh-renders_id142800",
    image:
      "https://m-cdn.phonearena.com/images/article/142800-wide-two_1200/Googles-Pixel-7-and-7-Pros-design-gets-revealed-even-more-with-fresh-crisp-renders.jpg",
    publishedAt: "2022-09-28T08:14:24Z",
    source: {
      name: "PhoneArena",
      url: "https://www.phonearena.com",
    },
  },
  {
    title:
      "Google's Pixel 7 and 7 Pro’s design gets revealed even more with fresh crisp renders",
    description:
      "Now we have a complete image of what the next Google flagship phones will look like. All that's left now is to welcome them during their October announcement!",
    content:
      "Google’s highly anticipated upcoming Pixel 7 series is just around the corner, scheduled to be announced on October 6, 2022, at 10 am EDT during the Made by Google event. Well, not that there is any lack of images showing the two new Google phones, b... [1419 chars]",
    url: "https://www.phonearena.com/news/google-pixel-7-and-pro-design-revealed-even-more-fresh-renders_id142800",
    image:
      "https://m-cdn.phonearena.com/images/article/142800-wide-two_1200/Googles-Pixel-7-and-7-Pros-design-gets-revealed-even-more-with-fresh-crisp-renders.jpg",
    publishedAt: "2022-09-28T08:14:24Z",
    source: {
      name: "PhoneArena",
      url: "https://www.phonearena.com",
    },
  },
];

const NewsDetail = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setIsError] = useState("");
  const [news, setNews] = useState([]);

  const fetchNews = async () => {
    setIsLoading(true);
    try {
      //   const response = await Service.get("/search?q=example&page=10");
      //   setNews(response.data.articles);
      setIsLoading(false);
    } catch (err: any) {
      setIsError(err?.response?.data?.errors);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto mt-12 bg-gray-100">
      <div className="p-10">
        <h1 className="text-3xl text-center font-bold mb-8">
          Real-world Success Stories Unveiling stories using the impact of our
          solution
        </h1>
        {error && <p className="mt-5 text-red-500">{error}</p>}
        {isLoading ? (
          <p className="mt-3 text-center text-3xl">Loading...</p>
        ) : (
          <div >
            {data.map((item: any, index: any) => (
              <div
                key={index}
                className="bg-white rounded-xl my-14 flex space-x-10 shadow-shadow "
              >
                <div className="w-1/2">
                  <img
                    src={item?.image}
                    className="w-full h-[200px] rounded-l-xl"
                    alt=""
                  />
                </div>
                <div className="p-6 flex flex-col justify-center">
                  <h2 className="text-xl font-semibold mb-2">{item?.title}</h2>
                  <p className="text-base mb-4">{item?.description}</p>
                  <p
                    onClick={() =>
                      navigate(`/news/${index + 1}`, {
                        state: {
                          title: item.title,
                          description: item.description,
                          content: item.content,
                          url: item.url,
                          image: item?.image,
                          publishAt: item.publishedAt,
                          source: item?.source,
                        },
                      })
                    }
                    className="text-primary-500 cursor-pointer hover:text-blue-700"
                  >
                    Learn More ...
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsDetail;
