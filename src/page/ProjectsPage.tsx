import { FC } from "react";

import gapFundr from '../assets/gapFundr.svg';
import cheffaire from '../assets/cheffaire.svg';
import guide from '../assets/guide.svg';
import PageHero from "../component/PageHero";


interface ProjectsProps {

}

interface ProjectItem {
  name: string;
  logo: string;
  desc: string;
  contributorsPlusTask: string[];
  website?: string;
  technologies: string;
  cardBg: string;
}


const projects: ProjectItem[] = [
  {
    name: 'GapFundr',
    logo: gapFundr,
    desc: 'GapFundr is the purposeful solution that provides college students with an easy way to raise funds for college expenses and connect with their network of donors.',
    contributorsPlusTask: ['Taban: Designer, Full stack developer, architect, cloud devOps and managing software lifecycle', 'Gibson: Frontend develope (Implementing stripe)', 'McKenna: Branding and UI/X.'],
    website: '',
    technologies: 'React, Nodejs, Mongodb, AWS',
    cardBg: 'bg-teal-300',
  },
  {
    name: 'Cheffaire',
    logo: cheffaire,
    desc: 'Personal Chef for any event! Easily search, find, and book the perfect meal experience for any occasion. Personal chefs, educational experiences, and meal activities!',
    contributorsPlusTask: ['Taban:  Designer, Full stack developer, architect, cloud devOps and managing software lifecycle', 'Gibson: Frontend develope (Implementing stripe)'],
    website: '',
    technologies: 'React, Nodejs, Mongodb, AWS',
    cardBg: 'bg-red-500',

  },
  {
    name: 'Guide',
    logo: guide,
    desc: 'GapFundr is the purposeful solution that provides college students with an easy way to raise funds for college expenses and connect with their network of donors.',
    contributorsPlusTask: [
      'Taban: CoFounder, architect, backend developer, and managing the software experience',
      'John & Sweety: Frontend developers  Responsible for Stripe',
      'Tim: CoFounder, chief of product and branding, operations, and UI/X.'],
    website: '',
    technologies: 'React, GoLang, Python, Mongodb, and AWS',
    cardBg: 'bg-yellow-400',
  }
]


const ProjectCard: FC<ProjectItem> = ({ logo, desc, contributorsPlusTask, technologies, cardBg }) => {
  console.log(cardBg)

  return (

    <div className="flex w-full sm:flex-col md:flex-row l:flex-row">
      <div className="
          h-[300px]
          md:w-[520px]
          l:w-[520px]
          2xl:w-full
          sm:max-w-full
          bg-white
          flex justify-center items-center
        ">
        <img src={logo} />
      </div>

      <div className={`flex h-[100%] px-[37px] py-[41px] flex-col items-start gap-6 flex-wrap ${cardBg} text-black `}>
        <p className="text-lg font-bold">[ description ] 🚀</p>
        <p className="text-lg font-normal">{desc}</p>
        <p className="text-lg font-medium">[ technologies ]</p>
        <p className="text-md font-normal">{ technologies }</p>
        <p className="text-lg font-medium">[ contributors ]</p>
        {contributorsPlusTask.map((item, idx) => (
          <div className="text-md font-normal underline" key={idx}> {item}</div>
        ))}
      </div>
    </div>
  )
}




export const Projects: FC<ProjectsProps> = () => {
  return (
    <div className="min-h-screen flex justify-center items-center ">
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

        <PageHero title="Projects" subTitle="Products 🎉" />

        <div className="flex flex-col gap-4" />

        {projects.map((item, idx) => (
          <ProjectCard
            key={idx}
            logo={item.logo}
            name={item.name}
            technologies={item.technologies}
            desc={item.desc}
            cardBg={item.cardBg}
            contributorsPlusTask={item.contributorsPlusTask} />
        ))
        }

      </div>
    </div>)
}