import ScrollReveal from "./ScrollReveal";

export default function Pricing() {
  const plans = [
    { name: "Free", price: "$0/month", features: ["Basic Tasks", "1 Project"] },
    { name: "Pro", price: "$9/month", features: ["Unlimited Tasks", "Priority Support"] },
    { name: "Team", price: "$29/month", features: ["Team Collaboration", "Advanced Analytics"] }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-bold mb-12">Pricing</h3>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <ScrollReveal key={i}>
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:scale-105 transition">
                <h4 className="text-xl font-semibold mb-4">{plan.name}</h4>
                <p className="text-3xl font-bold mb-6">{plan.price}</p>
                <ul className="mb-6 space-y-2">
                  {plan.features.map((f, idx) => (
                    <li key={idx}>{f}</li>
                  ))}
                </ul>
                <button className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition">
                  Choose Plan
                </button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
