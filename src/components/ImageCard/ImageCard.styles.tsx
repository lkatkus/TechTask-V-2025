import styled from 'styled-components';

export const Image = styled.img(() => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
}));

export const ImageCardInfoContainer = styled.div(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  opacity: 0,
  padding: theme.spacing.l,
  color: theme.text.secondary,
}));

export const ImageCardInfoDivider = styled.div(({ theme }) => ({
  maxWidth: 50,
  width: '100%',
  borderBottom: theme.border.primary,
}));

export const ImageCardFavoriteIcon = styled.div(({ theme }) => ({
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.text.secondary,
  top: theme.spacing.s,
  right: theme.spacing.s,
  width: theme.spacing.l,
  height: theme.spacing.l,
}));

export const ImageCardContainer = styled.div(({ theme }) => ({
  height: 250,
  maxWidth: 500,
  width: '100%',
  position: 'relative',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: theme.spacing.s,
  boxShadow: theme.shadow.primary,
  backgroundColor: theme.background.secondary,

  '*': {
    transitionDuration: '200ms',
  },

  img: {
    transitionProperty: 'filter',
  },

  [ImageCardInfoContainer]: {
    transitionProperty: 'opacity',
  },

  '&:hover': {
    img: {
      filter: 'brightness(50%)',
    },
    [ImageCardInfoContainer]: {
      opacity: 1,
    },
  },
}));
