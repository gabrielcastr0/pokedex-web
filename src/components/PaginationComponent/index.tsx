import Pagination from "./styled";

type Props = {
  count: number;
  page: number;
  clickFn: (event: any, value: number) => void;
};

export function PaginationComponent({ count, page, clickFn }: Props) {
  return (
    <div>
      <Pagination
        shape="rounded"
        count={count}
        page={page}
        onChange={clickFn}
        color="primary"
      />
    </div>
  );
}
