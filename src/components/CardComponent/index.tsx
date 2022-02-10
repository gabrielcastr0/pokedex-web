import Card from "./styled";

type Props = {
  name: string;
};

export function CardComponent({ name }: Props) {
  return (
    <div>
      <Card>
        <p>{name}</p>
      </Card>
    </div>
  );
}
