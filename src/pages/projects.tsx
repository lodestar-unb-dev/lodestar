import Link from 'next/link';

import { Layout } from '../components/Layout';

import {
  MissionsBanner
} from '../styles/pages/projects.styles';

export default function Missions() {
  return (
    <Layout>
      <MissionsBanner>
        <div>
          <h2>Missions</h2>

          <div>
            <Link href='/projects/alfacrux'>
              <a>
                <img src="/alfacrux_logo.webp" alt="AlfaCrux" />
                <span>AlfaCrux</span>
              </a>
            </Link>
            
            <Link href='/projects/wormsail'>
              <a>
                <img src="/wormsail_logo.webp" alt="Wormsail" />
                <span>Wormsail</span>
              </a>
            </Link>
            </div>
        </div>
      </MissionsBanner>  
    </Layout>
  )
}