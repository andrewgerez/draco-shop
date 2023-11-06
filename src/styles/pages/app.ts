import { styled } from "..";

export const Container = styled('div', {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  minHeight: '100vh',
  overflow: 'hidden',
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
})

