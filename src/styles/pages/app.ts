import { styled } from "..";

export const Container = styled('div', {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  minHeight: '100vh',
})

export const Header = styled('header', {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  padding: '3rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',

  button: {
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
      backgroundColor: '$purple500',
      boxShadow: '0 0 0 4px $colors$gray900',
      borderRadius: '999px',

      fontSize: '0.875rem',
    },

    svg: {
      color: '$gray500',
      transition: '0.3s all',
    },

    '&:hover': {
      cursor: 'pointer',

      svg: {
        color: '$purple300',
      }
    }
  },
})

