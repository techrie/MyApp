import Button from "./Button";

const list = [
  "All",
  "Mixes",
  "Music",
  "Gaming",
  "Songs",
  "Live",
  "Soccer",
  "Cooking",
  "Gardening",
  "Algorithms",
  "Javascript",
  "Painting",
  "Quilling",
];

const ButtonList = () => {
  return (
    <div className="flex mt-2 pl-3">
      {list.map((btn) => (
        <Button key={btn} name={btn} />
      ))}
    </div>
  );
};
export default ButtonList;
