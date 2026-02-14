import { CheckCircle, Clock, Smartphone } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-bold mb-12">Features</h3>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              icon: <CheckCircle size={40} className="text-indigo-600" />,
              title: "Smart Task Management",
              desc: "Organize tasks with priorities and deadlines."
            },
            {
              icon: <Clock size={40} className="text-indigo-600" />,
              title: "Real Time Sync",
              desc: "Access tasks anywhere across devices."
            },
            {
              icon: <Smartphone size={40} className="text-indigo-600" />,
              title: "Mobile Friendly",
              desc: "Optimized for phones and tablets."
            }
          ].map((feature, i) => (
            <ScrollReveal key={i}>
              <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
                <div className="mb-4 flex justify-center">{feature.icon}</div>
                <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
