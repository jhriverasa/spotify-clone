const RoundedButton = ({ label, isSelected, onClick }: Props) => {
  return (
    <div
      className="container-roundedbutton-base subtle-transition rounded-full bg-background-tinted-base hover:cursor-pointer 
      hover:bg-background-tinted-highlight py-1 px-3 active:bg-background-tinted-press"
      onClick={onClick}
    
    >
      <div className="flex rounded-xl text-sm">{label}</div>
    </div>
  );
};
export default RoundedButton;

type Props = {
  label: string;
  isSelected: boolean;
  onClick: React.MouseEventHandler<HTMLDivElement>;
};
