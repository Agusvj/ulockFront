export default function Question({ number, title, text }) {
  return (
    <div className="border-t-2 border-primary">
      <p className="font-bold font-poppins text-3xl text-terciary text-start pt-5">
        {number}
      </p>
      <p className="font-bold font-poppins text-2xl text-primary text-start">
        {title}
      </p>
      <p className="font-poppins text-start pt-5 text-terciary">{text}</p>
    </div>
  );
}
