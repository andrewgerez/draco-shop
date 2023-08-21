import { styled } from "..";

export const HomeContainer = styled('main', {
  display: 'flex',
  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
  marginLeft: 'auto',
  minHeight: 656,
})

export const Product = styled('div', {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'linear-gradient(180deg, #7465d4 0%, #201EA4 100%)',
  borderRadius: 8,
  cursor: 'pointer',
  overflow: 'hidden',

  img: {
    objectFit: 'cover',
  },

  footer: {
    width: '100%',
    height: '10rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
    padding: '2.5rem',
    background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.9) 1%, rgba(0, 0, 0, 0.6) 50%, transparent 100%)',

    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all 0.2s ease-in-out',

    strong: {
      fontSize: '$lg',
      color: '$gray100', 
    },
  
    span: {
      fontSize: '$xl',
      fontWeight: 'bold',
      color: '$purple300',
    }
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1,
    }
  }
})
