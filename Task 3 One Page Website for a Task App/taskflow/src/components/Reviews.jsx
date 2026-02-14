import ScrollReveal from "./ScrollReveal";

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-bold mb-12">What Users Say</h3>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            "TaskFlow has significantly improved the way I organize and manage my daily tasks.",
            "Among all the productivity apps I have tried, this stands out as the best.",
            "The interface is clean, intuitive, and exceptionally user friendly."
          ].map((quote, i) => (
            <ScrollReveal key={i}>
              <div className="bg-gray-100 p-6 rounded-xl shadow">
                <p className="italic">“{quote}”</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
