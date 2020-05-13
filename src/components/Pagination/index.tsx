import React from 'react';
import Paginate from 'react-paginate';
import { useLocation, useHistory } from 'react-router-dom';

import { getParams } from '../../services/query';
import { api } from '../../services/fetch';
import { Container } from './styles';

interface IProps {
  totalItems: number;
}

const Pagination: React.FC<IProps> = ({ totalItems }) => {
  const totalPages = Math.ceil(totalItems / api.options.limit);

  const location = useLocation().search;
  const history = useHistory();
  const params = getParams(location)

  const changePage = (e: { selected: number }) => {
    const page = e.selected + 1;
    history.push(`/?books=${params.book}&?page=${page}`);
  }

  return (
    <Container>
      <Paginate
        previousLabel={"<"}
        nextLabel={">"}
        breakClassName={"break-me"}
        pageCount={totalPages}
        marginPagesDisplayed={1}
        pageRangeDisplayed={4}
        containerClassName={"pagination"}
        activeClassName={"active"}
        onPageChange={changePage}
        forcePage={params.page - 1 || 0}
      />
    </Container>
  )
};

export default Pagination;
