import style from './scrollable.module.scss';

interface scrollableProps {
  children: React.ReactNode
}

const Scrollable = ({children}: scrollableProps) => {
  return (
    <div className={style['scrollable']}>
      {children}
    </div>
  )
}

export default Scrollable;
