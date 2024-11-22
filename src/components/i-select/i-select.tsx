import { MenuItem, Select } from '@mui/material';
import style from './i-select.module.scss';

interface ISelectProps {
  id: string,
  value: number | string,
  variant: 'filled' | 'outlined' | 'standard' | undefined,
  options: object,
  action: () => void,
}

const ISelect = ({id, value, action, variant, options}: ISelectProps) => {
  return (
    <Select id={id} value={value} onChange={action} variant={ variant }
      label="Select Time" className={ style['select'] }>
        {
          Object.entries(options).map((item: any, index: number) => {
            return  <MenuItem key={ index } value={ item.value }>{ item.text }</MenuItem>
          })
        }
    </Select>
  )
}

export default ISelect;