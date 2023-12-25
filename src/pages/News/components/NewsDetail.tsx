import { useEffect, useState } from "react";
import Service from "../../../setup";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button";

const NewsDetail = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setIsError] = useState("");
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const fetchNews = async () => {
    setIsLoading(true);
    try {
      const response = await Service.get(`/search?q=example`);
      const allNews = response.data.articles;
      const limit = 3;
      const offset = (page - 1) * limit;
      setNews(allNews.slice(offset, offset + limit));
      setTotalPages(Math.ceil(allNews.length / limit));
      setIsLoading(false);
    } catch (err: any) {
      setIsError(err?.response?.data?.errors);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, [page]);

  return (
    <div className="w-full max-w-5xl mx-auto mt-20 bg-gray-100">
      <div className="p-10">
        <h1 className="text-3xl text-center font-bold mb-8">
          Real-world Success Stories Unveiling stories using the impact of our
          solution
        </h1>
        {error && <p className="mt-5 text-red-500">{error}</p>}
        {isLoading ? (
          <p className="mt-3 text-center text-3xl">Loading...</p>
        ) : (
          <div>
            {news.map((item: any, index: any) => (
              <div
                key={index}
                className="bg-white w-full rounded-xl my-14 flex justify-between space-x-10 shadow-shadow "
              >
                <div className="w-[40%] ">
                  <img
                    src={item?.image}
                    className="w-full h-[200px] rounded-l-xl"
                    alt=""
                  />
                </div>
                <div className=" w-1/2 p-6 flex flex-col justify-center">
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
                    Read More ...
                  </p>
                </div>
              </div>
            ))}

            <div className="flex justify-end items-center  space-x-10 ">
              <Button
                disabled={page <= 1}
                text="Previous"
                variant="primary"
                onClick={() => setPage(page - 1)}
              />
              <p>
                Page {page} of {totalPages}{" "}
              </p>
              <Button
                text="Next"
                variant="primary"
                onClick={() => setPage(page + 1)}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsDetail;
