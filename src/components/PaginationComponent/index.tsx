import Pagination from "./styled";

type Props = {
  count: number;
  page: number;
  clickFn: (event: any, value: number) => void;
};

export function PaginationComponent({ count, page, clickFn }: Props) {
  return (
    <Pagination
      variant="outlined"
      shape="rounded"
      count={count}
      page={page}
      onChange={clickFn}
      color="secondary"
    />
  );
}
