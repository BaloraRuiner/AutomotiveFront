import {Checkbox, FormControl, InputLabel, ListItemText, MenuItem, Select} from "@mui/material";

const CustomSelect = ({placeHolder, selected, onChange, elements}) => {
  return (
    <FormControl fullWidth>
      <InputLabel >{placeHolder}</InputLabel>
      <Select
        value={selected}
        multiple
        onChange={(event) => {
          let {
            target: { value },
          } = event;

          onChange(value)
        }}
        renderValue={(selected) => {
          return selected.map(({title}) => title).join(', ')
        }}
      >
        {
          elements.map((element) => {
            const items = selected.map(({title}) => title);

            return (
              <MenuItem key={element.value} value={element}>
                <Checkbox checked={items.includes(element.title)} />
                <ListItemText primary={element.title} />
              </MenuItem>
            )
          })
        }
      </Select>
    </FormControl>
  )
}

export default CustomSelect;