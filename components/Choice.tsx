interface ChoiceProps {
  text: string;
}

const Choice = ({ text }: ChoiceProps) => {
  return (
    <div className="bg-white shadow-md my-2 border rounded-md p-4">
      <p>{text}</p>
    </div>
  );
};

export default Choice;
