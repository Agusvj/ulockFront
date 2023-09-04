import Question from "./Question.js";

export default function Faq() {
  return (
    <div className="py-24 bg-secondary flex flex-col items-center justify-center">
      <h3 className="text-center font-viga text-3xl sm:text-4xl font-bold pb-8 text-primary mb-12 uppercase">
        Frequently Asked Questions
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-center items-center text-center max-w-4xl px-6">
        <Question
          number="01."
          title="Lorem lorem lorem?"
          text="lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
        molestiae?"
        />
        <Question
          number="02."
          title="Lorem lorem lorem?"
          text="lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
        molestiae?"
        />
        <Question
          number="03."
          title="Lorem lorem lorem?"
          text="lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
        molestiae?"
        />
        <Question
          number="04."
          title="Lorem lorem lorem?"
          text="lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
        molestiae?"
        />
      </div>
    </div>
  );
}
