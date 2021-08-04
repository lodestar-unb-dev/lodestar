import Link from 'next/link';

import styles from './styles.module.scss';

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
    0: styles.blackBackground,
    1: styles.blueBackground,
    2: styles.greenBackground,
  }
  
  return (
    <Link href={lattesUrl}>
      <a className={styles.container}>
        <section>
          <h3>{ name }</h3>
          <span className={colors[colorNumber]}>{ organization }</span>
        </section>

        <img src={ imageUrl } alt={`${name} photo`} />

        <div className={colors[colorNumber]}>
          { bio }
        </div>
      </a>
    </Link>
  )
}