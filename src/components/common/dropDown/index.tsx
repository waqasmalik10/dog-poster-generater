import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

interface Props {
  options: Array<any>, // address 
  value: string,
  handleChange: Function,
  label: string
  disabled?: boolean
}

const DropDown = (props: Props) => {
  const { options, value, handleChange, label, disabled } = props

  return (
    <Box sx={{ width: "100%", maxWidth: 380, marginRight: "20px" }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label" sx={{backgroundColor: "#fff", padding: "0 5px"}}>{label}</InputLabel>
        <Select
          color='primary'
          data-testid={label + "-select"}
          value={value}
          onChange={(e) => handleChange(e.target.value)}
          disabled={disabled}
        >
          {
            options.map((item: string) => (
              <MenuItem key={item} value={item}>{item}</MenuItem>
            ))
          }
        </Select>
      </FormControl>
    </Box>
  );
}

export default DropDown;