import { red, green } from '@mui/material/colors';
import style from './pill.module.scss';

interface textProps {
  text: string,
  // status: boolean
}

// const pillTheme = {
//   active: {
//     '--pill-bg-color': green['A700'],
//     '--pill-color': 'hsla(var(--color-black)',
//   },
//   inActive: {
//     '--pill-bg-color': red['A700'],
//     '--pill-color': 'hsla(var(--color-white)',
//   }
// }

const Pill = ({text}: textProps) => {
  return (
    <div className={ style['pill'] }>
      { text }
    </div>
  )
}

export default Pill;