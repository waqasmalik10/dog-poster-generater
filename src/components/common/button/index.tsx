import Button from '@mui/material/Button';

interface Props {
  variant: 'text' | 'contained' | 'outlined';
  text: string,
  disabled: boolean,
  handleClick: Function
}

const AppButton = ({ variant, text, disabled, handleClick }: Props) => {
  return (
    <Button 
      sx={{height:"48px", width: "100%", maxWidth: "150px", marginRight: "20px", cursor: "pointer"}} 
      onClick={() => handleClick()} 
      variant={variant} 
      disabled={disabled}
      >
        {text}
      </Button>
  );
}

export default AppButton;