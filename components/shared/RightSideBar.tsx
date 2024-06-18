import React from "react";
import { topQuestions, popularTags } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import RenderTag from "./RenderTag";

const RightSideBar = () => {
  return (
    <section className="background-light900_dark200 shadow-light-300 border-1 sticky right-0 top-0 flex h-screen w-[366px] flex-col overflow-y-auto p-6 pt-36 dark:shadow-none max-xl:hidden ">
      <div>
        <h3 className="h3-bold text-dark200_light900 ">Top Questions</h3>
        <div className=" mt-7 flex w-full flex-col gap-[30px]">
          {topQuestions.map((question) => (
            <Link
              key={question._id}
              href={`/questions/${question._id}`}
              className="flex cursor-pointer items-center justify-between gap-7"
            >
              <p className="body-medium text-dark500_light700">
                {question.question}
              </p>
              <Image
                src="/assets/icons/chevron-right.svg"
                alt="chevron right"
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900 ">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map((tag) => (
            <RenderTag
              key={tag._id}
              _id={tag._id}
              name={tag.name}
              totalQuestions={tag.totalQuestions}
              showCount
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSideBar;
