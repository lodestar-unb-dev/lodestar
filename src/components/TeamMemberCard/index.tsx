import Link from 'next/link';

import {
  Container  
} from './styles';

interface Props {
  index: number;
  name: string;
  organization: string;
  imageUrl: string;
  bio: string;
  lattesUrl: string;
}

type ColorNumber = 0 | 1 | 2;

export function TeamMemberCard({ index, name, bio, imageUrl, organization, lattesUrl }: Props) {
  const colorNumber = (index + 1) % 3 as ColorNumber;
  const colors = {
    0: 'black',
    1: 'blue',
    2: 'green',
  }
  
  return (
    <Link href={lattesUrl}>
      <Container highlightColor={colors[colorNumber]}>
        <section>
          <h3>{ name }</h3>
          <span>{ organization }</span>
        </section>

        <img src={ imageUrl } alt={`${name} photo`} />

        <div>
          { bio }
        </div>
      </Container>
    </Link>
  )
}