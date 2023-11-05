import { styled } from '../../../styles';

export const BagButton = styled('button', {
  position: 'relative',
  all: 'unset',
  padding: '0.75rem',
  borderRadius: '0.375rem',
  backgroundColor: '$gray800',
  lineHeight: 0,

  span: {
    position: 'absolute',
    top: '3.5rem',
    right: '-10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    width: '1.5rem',
    height: '1.5rem',
    backgroundColor: "$purple500",
    boxShadow: "0 0 0 4px $colors$gray900",
    borderRadius: "999px",

    fontSize: "0.875rem",
  },

  svg: {
    color: "$gray500",
    transition: "0.3s all",
  },

  '&:hover': {
    cursor: 'pointer',

    svg: {
      color: '$purple300',
    },
  },
});
