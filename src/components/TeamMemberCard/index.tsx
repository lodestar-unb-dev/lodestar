import {
  Container  
} from './styles';

interface Props {
  index: number;
  name: string;
  organization: string;
  imageUrl: string;
  role: string;
  researchArea: string;
  lattesUrl: string;
}

type ColorNumber = 0 | 1 | 2;

type Colors = 'black' | 'blue' | 'green';

export function TeamMemberCard({ index, name, role, researchArea, imageUrl, organization, lattesUrl }: Props) {
  const colorNumber = (index + 1) % 3 as ColorNumber;
  const colors: Record<number, Colors> = {
    0: 'black',
    1: 'blue',
    2: 'green',
  }
  
  return (
    <Container 
      highlightColor={colors[colorNumber]}
      href={lattesUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      <section>
        <h3>{ name }</h3>
        <span>{ organization }</span>
      </section>

      <img src={ imageUrl } alt={`${name} photo`} />

      <div>
        <strong>{ role }</strong>
        <br/>
        <strong>Research Area: </strong><span>{ researchArea }</span>
      </div>
    </Container>
  )
}