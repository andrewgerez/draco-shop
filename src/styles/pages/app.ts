import { styled } from "..";

export const Container = styled('div', {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  minHeight: '100vh',
})

export const Header = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  padding: '3rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',

  button: {
    all: 'unset',
    padding: '0.75rem',
    borderRadius: '0.375rem',
    backgroundColor: '$gray800',
    lineHeight: 0,

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

