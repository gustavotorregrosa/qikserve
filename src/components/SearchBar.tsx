import { InputAdornment, TextField } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';

export const SearchBar = () => {
    return <TextField id="outlined-basic" 
        InputProps={{
            startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>
        }}
        variant="outlined" className="rounded-lg h-[40px] md:h-[44px] w-full mb-2" />
}