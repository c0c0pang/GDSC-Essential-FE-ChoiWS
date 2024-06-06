import Absence from '@public/icons/absence.svg';
import Check from '@public/icons/check.svg';
import Seminar from '@public/icons/seminar.svg';
import Speaker from '@public/icons/speaker.svg';
import Support from '@public/icons/support.svg';
import Vote from '@public/icons/vote-date.svg';
import Time from '@public/icons/time.svg';
import Place from '@public/icons/place.svg';
export const seminar = [
    {
        id: 0,
        color: '#EA4336',
        icon: <Check />,
        text: '세미나 출석체크'
    },
    {
        id: 1,
        color: '#FA7800',
        icon: <Support />,
        text: '세미나 발표 지원'
    },
    {
        id: 2,
        color: '#FA397E',
        icon: <Speaker />,
        text: '세미나 연사자 확인'
    },
    {
        id: 3,
        color: '#9B36EA',
        icon: <Absence />,
        text: '세미나 불참 제출'
    },
]

export const seminarList = [{
    id: 0,
    month: '2',
    time: '2024-01-01',
    time_icon: <Time />,
    place: '새빛관 203호',
    place_icon: <Place />,
    icon: <Seminar />,
    color: '#33A853',

}]