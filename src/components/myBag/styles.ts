import { styled, keyframes } from "../../styles";

const openAnimation = keyframes({
  '0%': {
    right: '-100%',
  },
  '100%': {
    right: 0,
  },
})

const hiddenAnimation = keyframes({
  '0%': {
    right: 0,
  },
  '100%': {
    right: '-100%',
  },
})

export const Bag = styled('div', {
  position: 'absolute',
  zIndex: 1,
  width: '30rem',
  height: '100%',
  right: 0,
  backgroundColor: '$gray800',
  padding: '0 3rem',
  boxShadow: '-4px 0 30px rgba(0, 0, 0, 0.8)',

  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
    height: '1.5rem',
    marginTop: '1.5rem',

    button: {
      all: 'unset',

      '&:hover': {
        cursor: 'pointer',
      }
    }
  },

  variants: {
    variant: {
      open: {
        animation: `${openAnimation} 0.4s cubic-bezier(0.16, 1, 0.3, 1)`,
      },
      closed: {
        animation: `${hiddenAnimation} 0.4s`,
      },
    },
  },
})

export const Container = styled('div', {
  height: 'calc(100% - 3rem)',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '3rem 0',

  main: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
  },
})

export const ItemList = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
})

export const Item = styled('div', {
  display: 'flex',
  gap: '1.25rem',

  section: {
    display: 'flex',
    flexDirection: 'column',

    p: {
      fontSize: '1.125rem',
    },

    strong: {
      marginBottom: '0.5rem',
      fontSize: '1.125rem',
    },

    button: {
      all: 'unset',
      color: '$purple300',
      fontSize: '1rem',
      fontWeight: 700,

      '&:hover': {
        cursor: 'pointer',
      }
    }
  }
})

export const BadgeItem = styled('span', {
  width: '6.25rem',
  height: '5.75rem',
  background: 'linear-gradient(180deg, #7465d4 0%, #201EA4 100%)',
  borderRadius: 8,
  padding: '0.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  
  img: {
    objectFit: 'cover'
  }
})

export const Order = styled('section', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '0.5rem',

  span: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    p: {
      fontSize: '1rem',
    },

    strong: {
      fontSize: '1.125rem',
    },

    h4: {
      fontSize: '1.5rem',
    },
  },

  button: {
    width: '100%',
    height: '4.3125rem',
    border: 'none',
    borderRadius: '0.5rem',
    backgroundColor: '$purple300',
    marginTop: '3.125rem',

    fontSize: '1.125rem',
    fontWeight: 700,
    color: '$white',

    '&:hover': {
      cursor: 'pointer',
      backgroundColor: '$purple500',
      transition: '0.3s all',
    },

    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
    }
  },
})