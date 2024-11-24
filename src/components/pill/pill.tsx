import style from './pill.module.scss';

interface textProps {
  text: string,
  color: string,
  bgColor: string,
}

const Pill = ({text, color, bgColor}: textProps) => {
  return (
    <div className={ style['pill'] } style={{
      ['--pill-bg-color' as string]: bgColor,
      ['--pill-color' as string]: color }}>
      { text }
    </div>
  )
}

export default Pill;