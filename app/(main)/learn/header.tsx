type Props = {
  title: string;
};
export const Header = ({ title }: Props) => {
  return <div className="flex items-center justify-between">{title}</div>;
};
