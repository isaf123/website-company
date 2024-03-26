"use client";
import * as React from "react";
import { useEffect } from "react";
import { getBlogPosts } from "@/utils/contentful";

interface IReadArticleProps {}

const ReadArticle: React.FunctionComponent<IReadArticleProps> = (props) => {
  const [getData, setGetData] = React.useState<any[]>([]);
  useEffect(() => {
    getOtherArticle();
  }, []);

  const getOtherArticle = async () => {
    try {
      const response = await getBlogPosts();
      setGetData(response);
    } catch (error) {
      console.log(error);
    }
  };

  console.log("responsessss", getData);

  const mapping = () => {
    return getData.map((val, idx) => {
      return (
        <div key={idx} className="">
          <div className="w-full py-3 border-t-2 border-b-2 my-3">
            <p className="text-2xl font-bold">{val.titile}</p>
          </div>
          <p className="text-lg text-gray-600 leading-[30px]">
            {val.description}
          </p>

          <div className="mt-3 h-[320px] md:h-[480px]">
            <div className="w-full md:w-[40%] bg-gray-300 h-[320px] rounded-xl overflow-hidden">
              <img
                src={val.image.fields.file.url}
                alt=""
                className="object-cover h-full"
              />
            </div>
          </div>
        </div>
      );
    });
  };

  return <div className=" px-4 md:px-60 py-20">{mapping()}</div>;
};

export default ReadArticle;
