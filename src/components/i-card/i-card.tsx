import Card from '@mui/material/Card';
import style from './i-card.module.scss';

interface ICardProps {
	children: React.ReactNode,
}

const ICard = ({children}: ICardProps) => {
  return (
    <Card className={ style['card'] } sx={{ maxWidth: { xs: '100%', sm: '360px' }}}>
      {children}
    </Card>
  )
}

export default ICard;
