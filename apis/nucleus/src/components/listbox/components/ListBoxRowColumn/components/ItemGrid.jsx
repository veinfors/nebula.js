import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import getItemSizes from '../../grid-list-components/item-sizes';
import classes from '../helpers/classes';

const ItemGrid = styled(Grid, {
  shouldForwardProp: (prop) => !['dataLayout', 'layoutOrder', 'itemPadding', 'checkboxes'].includes(prop),
})(({ dataLayout, layoutOrder, itemPadding, checkboxes }) => ({
  [`&.${classes.fieldRoot}`]: {
    ...getItemSizes({ dataLayout, layoutOrder, itemPadding }),
    paddingRight: checkboxes ? '8px' : undefined,
  },
}));

export default ItemGrid;