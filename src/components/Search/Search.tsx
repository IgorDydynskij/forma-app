import { Search as SearchIcon } from "@mui/icons-material";
import Card from "@mui/material/Card/Card";
import FormControl from "@mui/material/FormControl/FormControl";
import InputAdornment from "@mui/material/InputAdornment/InputAdornment";
import InputLabel from "@mui/material/InputLabel/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput/OutlinedInput";
import { CSSProperties, FC, useRef } from "react";


export const Search = ({
  onChange,
  style
}: {
  onChange: React.ChangeEventHandler;
  style?: CSSProperties
}) => {

  return (
    <Card style={{padding: 8, ...style}}>
      <FormControl sx={{width: '100%'}}>
        <InputLabel htmlFor="modal-search">Search</InputLabel>
        <OutlinedInput
          // ref={textField}
          id="modal-search"
          label="Search"
          onChange={onChange}
          endAdornment={
            <InputAdornment position="end">
              <SearchIcon/>
            </InputAdornment>
          }
        />
      </FormControl>
    </Card>
  );
}

export default Search;
