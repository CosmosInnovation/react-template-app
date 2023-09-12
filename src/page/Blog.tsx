import { FC } from "react";
import PageHero from "../component/PageHero";

interface BlogPageProps {

}

interface BlogCardProp {
  dateTime: string
  author: string;
  title: string;
  shortDescription: string
}


// Send data from the backend
const blogList: BlogCardProp[] = [
  {
    dateTime: '11:00 AM on August 1, 2023',
    author: 'Taban Cosmos',
    title: 'AI ML in Fin-Tech',
    shortDescription: 'Artificial Intelligence (AI) can significantly impact the finance industry by enhancing efficiency, accuracy, and decision-making. Here are some ways AI can help finance:'
  },
  {
    dateTime: '11:00 AM on August 1, 2023',
    author: 'Taban Cosmos',
    title: 'AI ML in Fin-Tech',
    shortDescription: 'Artificial Intelligence (AI) can significantly impact the finance industry by enhancing efficiency, accuracy, and decision-making. Here are some ways AI can help finance:'
  },
  {
    dateTime: '11:00 AM on August 1, 2023',
    author: 'Taban Cosmos',
    title: 'AI ML in Fin-Tech',
    shortDescription: 'Artificial Intelligence (AI) can significantly impact the finance industry by enhancing efficiency, accuracy, and decision-making. Here are some ways AI can help finance:'
  }, {
    dateTime: '11:00 AM on August 1, 2023',
    author: 'Taban Cosmos',
    title: 'AI ML in Fin-Tech',
    shortDescription: 'Artificial Intelligence (AI) can significantly impact the finance industry by enhancing efficiency, accuracy, and decision-making. Here are some ways AI can help finance:'
  },
  {
    dateTime: '11:00 AM on August 1, 2023',
    author: 'Taban Cosmos',
    title: 'AI ML in Fin-Tech',
    shortDescription: 'Artificial Intelligence (AI) can significantly impact the finance industry by enhancing efficiency, accuracy, and decision-making. Here are some ways AI can help finance:'
  },
  {
    dateTime: '11:00 AM on August 1, 2023',
    author: 'Taban Cosmos',
    title: 'AI ML in Fin-Tech',
    shortDescription: 'Artificial Intelligence (AI) can significantly impact the finance industry by enhancing efficiency, accuracy, and decision-making. Here are some ways AI can help finance:'
  },
  {
    dateTime: '11:00 AM on August 1, 2023',
    author: 'Taban Cosmos',
    title: 'AI ML in Fin-Tech',
    shortDescription: 'Artificial Intelligence (AI) can significantly impact the finance industry by enhancing efficiency, accuracy, and decision-making. Here are some ways AI can help finance:'
  }
]

const BlogCard: FC<BlogCardProp> = ({ dateTime, author, title, shortDescription }) => (
  <article className="flex flex-col gap-4  p-10 bg-white hover:bg-neutral-50 cursor-pointer">
    <div className="flex flex-row gap-2 items-center">
      <span className="text-black text-l font-weight-800 font-medium">{author}</span>
      <span className="bg-black h-1 w-1" />
      <span className="text-gray-400 text-sm font-weight-800">{dateTime}</span>
    </div>
    <span className="text-black text-l font-weight-800">{title}</span>
    <span className="text-black text-l font-normal">{shortDescription}</span>
  </article>
)

export const BlogPage: FC<BlogPageProps> = () => {
  return (
    <div className="flex justify-start">
      <div className="flex-wrap 
        w-[100%] 
        h-[100%] 
        flex-col 
        justify-center 
        items-center 
        gap-[60px] 
        inline-flex 
        2xl:w-[1260px]
        m-auto
      ">

        <PageHero title="Blogs" subTitle="Bite-Sized Blog 🎉" />

        <div className="flex flex-col gap-4">
          {blogList.map(() => (
            <BlogCard dateTime={'11:00 AM on August 1, 2023'} author={'Taban Cosmos'} title={'AI ML in Fin-Tech'} shortDescription={'Artificial Intelligence (AI) can significantly impact the finance industry by enhancing efficiency, accuracy, and decision-making. Here are some ways AI can help finance:'} />
          ))
          }

        </div>

        <div className="flex flex-col h-20" />

      </div>
    </div>)
}