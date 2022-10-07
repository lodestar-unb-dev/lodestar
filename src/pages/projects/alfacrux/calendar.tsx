import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import listPlugin from '@fullcalendar/list';

import { FiFastForward, FiPlay } from 'react-icons/fi';

import * as S from '../../../styles/pages/projects/alfacrux/calendar.styles';
export default function Calendar() {
  return (
    <S.Container>
      <h1>
        Alfacrux Updates
      </h1>

      <S.AlfacruxUpdatesCalendar>
        <aside>
          <h2>
            Upcoming Events
          </h2>
        </aside>

        <div>
          <FullCalendar
            plugins={[ dayGridPlugin, listPlugin ]}
            initialView="listWeek"
            height="auto"
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,listMonth'
            }}
          />
        </div>
      </S.AlfacruxUpdatesCalendar>

      <S.AlfacruxUpdatesTable>
        <div>
          <h2>
            Updates List
          </h2>
          <span>
            Check here all the updates we have announced
          </span>

          <S.Card />
        </div>

        <footer>
          <button><FiFastForward style={{ transform: 'rotate(180deg)' }} /></button>
          <button><FiPlay size={14} style={{ transform: 'rotate(180deg)' }} /></button>
          <span>Page 1 of 10</span>
          <button><FiPlay size={14} /></button>
          <button><FiFastForward /></button>
        </footer>
      </S.AlfacruxUpdatesTable>
    </S.Container>
  )
}