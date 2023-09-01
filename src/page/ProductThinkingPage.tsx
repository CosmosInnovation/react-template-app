import { FC } from "react";
import PageHero from "../component/PageHero";


interface ProductThinkingPageProps {

}

export const ProductThinkingPage: FC<ProductThinkingPageProps> = () => {
  return (
  <div className="min-h-screen flex justify-center items-center">
    <div className="flex flex-col h-20 text-center" />

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

        <PageHero title="Product thinking" subTitle="Productizing an Idea 🎉" />

        <article className="flex flex-col gap-4 p-10 bg-white">
        <span className="text-black text-l font-semibold">Idea Generation and Validation</span>
        <span className="text-black text-l font-normal">This is where you identify a problem that needs to be solved, and you conceive a product that can address this problem. Validate your idea through market research and by gauging user interest.</span>
        <span className="text-black text-l font-semibold">Defining the Product Vision and Strategy</span><span className="text-black text-l font-normal">Articulate what you want your product to achieve and how it fits into the broader market landscape. Your strategy should outline the steps required to realize your vision.<br /></span>
        <span className="text-black text-l font-semibold">Requirements Gathering and Analysis</span><span className="text-black text-l font-normal">Identify the needs of your end-users. This could be through interviews, surveys, or feedback from your sales team. Use these insights to develop detailed product requirements.<br /></span>
        <span className="text-black text-l font-semibold">Design</span><span className="text-black text-l font-normal">This involves creating wire-frames and mockups of your product. User Interface (UI) and User Experience (UX) designers play a crucial role in this stage.<br /></span>
        <span className="text-black text-l font-semibold">Development</span>
        <span className="text-black text-l font-normal">This is the coding phase where the actual product begins to take shape. Agile, waterfall, or hybrid methods can be employed based on the team's preference.<br /></span>
        <span className="text-black text-l font-semibold">Testing</span>
        <span className="text-black text-l font-normal">Test the product for bugs, usability, performance, security, and more. This phase is crucial to ensure a smooth user experience.<br /></span>
        <span className="text-black text-l font-semibold">Deployment</span>
        <span className="text-black text-l font-normal">This involves the distribution of your software to your end-users. This could be through an app store, a download link on your website, or any other method that suits your product.<br /></span>
        <span className="text-black text-l font-semibold">Maintenance and Updates</span>
        <span className="text-black text-l font-normal">Once the product is live, there will be ongoing work to fix bugs, respond to user feedback, update the product with new features, and improve overall user experience.<br /></span>
        <span className="text-black text-l font-semibold">Product Marketing and Sales</span>
        <span className="text-black text-l font-normal">These steps usually start at the beginning but continue throughout the product's lifecycle. It involves positioning the product in the market, promoting it to potential users, and ultimately selling it.<br /></span>
        <span className="text-black text-l font-semibold">Measure Success and Iterate</span><span className="text-black text-l font-normal">Use key performance indicators (KPIs) to measure the success of the product. Learn from user feedback and metrics, and iterate on the product accordingly.<br /></span>
        <span className="text-black text-l font-semibold">Iterate and let your customers drive your product growth</span><span className="text-black text-l font-normal">Once you achieve product market fit or market fit product, you need to continue improving your product with requested features, and implement feedback to makes sense for your customers, not your business.</span>
      </article>

      <div className="flex flex-col h-20" />

      <div className="
        2xlw-[900px] 
         w-[100%] 
        h-[100%] 
        2xlw:h-[351px] 
        bg-indigo-950 
        rounded-tr-[40px] 
        shadow 
        justify-center 
        items-center gap-5 
        p-20
        inline-flex">
        <div className="flex-col justify-start items-center gap-5 inline-flex">
          <div className="text-center"><span className="text-white text-[26px] font-normal">LIVE PRODUCT DEVELOPMENT<br /></span><span className="text-white text-xl font-normal"><br />Building your first product -<br />Join me for an exciting opportunity to discuss product building process from the ground up on Tuesday, TBD | TBD:00 pm ET<br /></span></div>
          <div className="rounded-tr-[20px] justify-start items-start inline-flex">
            <div className="w-[319.50px] h-[77px] relative">
              <div className="w-[319.50px] h-[77px] left-0 top-0 absolute bg-blue-600 rounded-tr-[10px]"></div>
              <div className="left-[98.75px] top-[18.50px] absolute text-center text-white text-[26px] font-bold">Join Now</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>)
}