import React, { memo } from 'react';
import { useHistory } from 'react-router-dom';

import IBook from '../../interfaces/IBook';
import { Container } from './styles';
import { GoLinkExternal } from 'react-icons/go';
import { IoIosArrowDropleft } from 'react-icons/io';
import notFound from '../../assets/not-found.png';

interface IProps {
  book: IBook
};

const noInformation = 'No information :('

const Details: React.FC<IProps> = ({ book }) => {
  const history = useHistory();
  const { volumeInfo } = book;
  const listOfAuthors =
    volumeInfo?.authors
      ? volumeInfo?.authors.map((author: string, index: number) => {
        if (volumeInfo?.authors.length - 1 === index) return `${author}`;
        if (volumeInfo?.authors.length >= 1) return `${author}, `;
      })
      : volumeInfo?.authors ?? noInformation;

  return (
    <>
      <Container>
        <div id="group0">
          <h3 id="title">
            {volumeInfo?.title ?? noInformation}
          </h3>

        </div>
        <div id="group1">
          <img src={volumeInfo?.imageLinks?.thumbnail ?? notFound} alt={volumeInfo?.title} />
          <section id="link">
            <section onClick={() => history.go(-1)} className="link"><IoIosArrowDropleft /></section>
            <a className="link" href={volumeInfo?.canonicalVolumeLink}><GoLinkExternal /></a>
          </section>
        </div>
        <div id="group2">
          <strong>authors: </strong>{listOfAuthors}<br /><br />
          <strong id="publish">publishers: </strong><span>{volumeInfo?.publisher ?? noInformation}</span><br /><br />
          <strong id="dsc">Description</strong><br /><br />
          <section id="scroll-description">
            {volumeInfo?.description ? volumeInfo?.description.replace(/<[^>]*>|(&quot;)/g, '') : noInformation}
          </section>
        </div>
      </Container>
    </>
  )
};

export default memo(Details);