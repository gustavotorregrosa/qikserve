import { InputAdornment, TextField } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from "react-redux";
import { IState } from "@/store";
import { IFilterState, setSearchText } from "@/store/filters/slice";

export const SearchBar = () => {

    const dispatch  = useDispatch()
    const filter = useSelector<IState, IFilterState>(state => state.filter)
    
    return <TextField id="outlined-basic" value={filter.searchText} onChange={e => dispatch(setSearchText(e.target.value))}
        InputProps={{
            startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>
        }}
        variant="outlined" className="rounded-lg h-[40px] md:h-[44px] w-full mb-2" />
}