import { data } from "@/data"
import Iconst from "./Iconst"
import BlurFade from "./magicui/blur-fade"

const Skills = () => {
  const { skills } = data
  return (
    <BlurFade delay={0.01}>
      <section id="skills" className="pb-24 pt-14">
        <h2 className="font-bold sm:text-3xl text-lg duration-300 dark:text-white">Skills</h2>
        <section  className="flex flex-wrap items-center justify-center gap-4 p-4 rounded border dark:border-zinc-700 bg-gradient-to-tr dark:from-slate-800 duration-300 dark:via-black dark:to-slate-800 from-blue-50  via-white to-blue-100">
            {skills.map(item=>{
              return(
                <div className="flex flex-col hover:scale-105 duration-300 p-1 items-center justify-center border rounded border-zinc-300" key={crypto.randomUUID()}>
                  <Iconst icon={item.name.toLocaleLowerCase()} weight="100"/>
                  <p className="dark:text-zinc-400 text-xs p-0 m-0">{item.level}</p>
                </div>
              )
            })}
        </section>
      </section>
    </BlurFade>
  )
}

export default Skills