import React from 'react';
import { styled } from '@mui/material/styles';
import classes from '../helpers/classes';
import { barBorderWidthPx, barPadPx, barWithCheckboxLeftPadPx } from '../helpers/constants';
import { CELL_PADDING_LEFT } from '../../../constants';

const getSelectedStyle = ({ theme }) => ({
  background: theme.palette.selected.main,
  color: theme.palette.selected.mainContrastText,
  '&:focus': {
    boxShadow: `inset 0 0 0 2px ${theme.palette.custom.focusBorder}`,
    outline: 'none',
  },
  '& $cell': {
    paddingRight: 0,
  },
});

const ellipsis = {
  width: '100%',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
};

const RowColRoot = styled('div', {
  shouldForwardProp: (prop) => !['flexBasisProp', 'isGridMode', 'isGridCol', 'dense'].includes(prop),
})(({ theme, flexBasisProp, isGridMode, isGridCol, dense }) => ({
  '&:focus': {
    boxShadow: `inset 0 0 0 2px ${theme.palette.custom.focusBorder} !important`,
  },
  '&:focus-visible': {
    outline: 'none',
  },

  [`& .${classes.row}`]: {
    flexWrap: 'nowrap',
    color: theme.listBox?.content?.color ?? theme.palette.text.primary,
  },

  [`& .${classes.rowBorderBottom}`]: {
    borderBottom: isGridCol ? 'none' : `1px solid ${theme.palette.divider}`,
    borderLeft: isGridCol ? `1px solid ${theme.palette.divider}` : 'none',
  },

  [`& .${classes.column}`]: {
    flexWrap: 'nowrap',
    borderRight: `1px solid ${theme.palette.divider}`,
    color: theme.listBox?.content?.color ?? theme.palette.text.primary,
  },

  // The interior wrapper for all field content.
  [`& .${classes.cell}`]: {
    display: 'flex',
    alignItems: 'center',
    minWidth: 0,
    flexGrow: 1,
    // Note that this padding is overridden when using checkboxes.
    paddingLeft: `${CELL_PADDING_LEFT}px`,
    paddingRight: 0,
  },

  // The leaf node, containing the label text.
  [`& .${classes.labelText}`]: {
    flexBasis: flexBasisProp,
    lineHeight: '16px',
    userSelect: 'none',
    paddingRight: 0,
    ...ellipsis,
    whiteSpace: 'pre', // to keep white-space on highlight
    fontSize: theme.listBox?.content?.fontSize,
    fontFamily: theme.listBox?.content?.fontFamily,
  },

  [`& .${classes.labelDense}`]: {
    fontSize: 12,
  },

  // Highlight is added to labelText spans, which are created as siblings to original labelText,
  // when a search string is matched.
  [`& .${classes.highlighted}`]: {
    overflow: 'visible',
    width: '100%',
    '& > span': {
      width: '100%',
      backgroundColor: '#FFC72A',
    },
  },

  // Checkbox and label container.
  [`& .${classes.checkboxLabel}`]: {
    margin: 0,
    width: '100%',
    height: '100%',
    overflow: 'hidden',

    // The checkbox's span
    '& > span:nth-of-type(1)': {
      paddingRight: '8px',
    },
    // The checkbox's label container.
    '& > span:nth-of-type(2)': {
      ...ellipsis,
      display: 'flex',
      alignItems: 'center',
      paddingLeft: 0,
      paddingRight: '2px',
    },
  },

  // The icons container holding tick and lock, shown inside fields.
  [`& .${classes.icon}`]: {
    display: 'flex',
    justifyContent: 'center',
    width: 24,
    minWidth: 24,
    maxWidth: 24,
  },

  // Selection styles (S=Selected, XS=ExcludedSelected, A=Available, X=Excluded).
  [`& .${classes.S}`]: {
    ...getSelectedStyle({ theme }),
    border: isGridMode ? 'none' : undefined,
  },

  [`& .${classes.XS}`]: {
    ...getSelectedStyle({ theme }),
    background: theme.palette.selected.excluded,
    color: theme.palette.selected.mainContrastText,
    border: isGridMode ? 'none' : undefined,
  },

  [`& .${classes.A}`]: {
    background: theme.palette.selected.alternative,
    color: theme.palette.selected.alternativeContrastText,
    border: isGridMode ? 'none' : undefined,
  },

  [`& .${classes.X}`]: {
    background: theme.palette.selected.excluded,
    color: theme.palette.selected.excludedContrastText,
    border: isGridMode ? 'none' : undefined,
  },

  [`& .${classes.frequencyCount}`]: {
    justifyContent: 'flex-end',
    ...ellipsis,
    width: 'auto',
    maxWidth: 'max-content',
    minWidth: 'max-content',
    textAlign: 'right',
    paddingLeft: isGridMode ? '2px' : '6px',
  },

  [`&.${classes.barContainer}`]: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
  },

  [`& .${classes.bar}`]: {
    border: `${barBorderWidthPx}px solid`,
    borderColor: '#D9D9D9',
    height: dense ? '16px' : '20px',
    position: 'absolute',
    zIndex: '-1',
    alignSelf: 'center',
    left: `${barPadPx}px`,
    transition: 'width 0.2s',
    backgroundColor: '#FAFAFA',
  },

  [`& .${classes.barSelected}`]: {
    opacity: '30%',
    zIndex: '0',
    background: theme.palette.background.lighter,
  },

  [`& .${classes.barWithCheckbox}`]: {
    left: `${barWithCheckboxLeftPadPx}px`,
  },

  [`& .${classes.barSelectedWithCheckbox}`]: {
    background: '#BFE5D0',
    borderColor: '#BFE5D0',
  },

  [`& .${classes.excludedTextWithCheckbox}`]: {
    color: '#828282',
    fontStyle: 'italic',
  },
}));

export default React.memo(RowColRoot);