export default function BenefitCard({ title, paragraph, icon }) {
  return (
    <div className="relative pl-16">
      <dt className="text-base font-bold leading-7 text-terciary">
        <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
          {icon}
        </div>
        {title}
      </dt>
      <dd className="mt-2 text-base leading-7 text-secondary font-bold">
        {paragraph}
      </dd>
    </div>
  );
}
