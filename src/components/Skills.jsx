import { motion } from "framer-motion";

const skills = [
  { name: "HTML", color: "bg-red-500", percentage: 90 },
  { name: "CSS", color: "bg-blue-500", percentage: 85 },
  { name: "JavaScript", color: "bg-yellow-400", percentage: 80 },
  { name: "React.js", color: "bg-indigo-500", percentage: 85 },
  { name: "Node.js", color: "bg-green-500", percentage: 70 },
  { name: "MongoDB", color: "bg-purple-500", percentage: 65 },
];

export default function SkillsSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-pink-50 via-purple-100 to-blue-100 flex justify-center">
      <div className="w-full max-w-3xl px-6">
        <h2 className="text-4xl font-bold text-black text-center mb-10">My Skills</h2>
        
        <div className="space-y-6">
          {skills.map((skill, index) => (
            <div key={index}>
              <p className="text-black mb-1">{skill.name}</p>
              <div className="w-full bg-gray-300 rounded-full h-4 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.percentage}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: index * 0.2 }}
                  className={`${skill.color} h-4 rounded-full`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
