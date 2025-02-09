import { Button, Grid, Text } from '@/core';
import {
  Image,
  ImageCardContainer,
  ImageCardFavoriteIcon,
  ImageCardInfoContainer,
  ImageCardInfoDivider,
} from './ImageCard.styles';

export type ImageCardProps = {
  id: number;
  src: string;
  title: string;
  subTitle: string;
  isFavorite?: boolean;
  onToggleFavorite?: (id: number) => void;
};

export const ImageCard = ({
  id,
  src,
  title,
  isFavorite,
  subTitle,
  onToggleFavorite,
}: ImageCardProps) => {
  const handleToggleFavorite = () => {
    if (onToggleFavorite) {
      onToggleFavorite(id);
    }
  };

  return (
    <ImageCardContainer data-testid="ImageCard">
      <Image src={src} alt={subTitle} />

      <ImageCardInfoContainer data-testid="ImageCardMetadata">
        <Grid.Container rowGap={16}>
          <Grid.Item>
            <Grid.Container rowGap={4}>
              <Grid.Item>
                <Text.Body data-testid="ImageCardTitle" bold center lineCount={1}>
                  {title}
                </Text.Body>
              </Grid.Item>
              <Grid.Item>
                <ImageCardInfoDivider />
              </Grid.Item>
              <Grid.Item>
                <Text.Body data-testid="ImageCardAuthor" italic center lineCount={1}>
                  {subTitle}
                </Text.Body>
              </Grid.Item>
            </Grid.Container>
          </Grid.Item>

          {onToggleFavorite && (
            <Grid.Item>
              <Button
                data-testid="ImageCardFavoriteButton"
                variant="secondary"
                onClick={handleToggleFavorite}
              >
                {isFavorite ? 'Unfavorite' : 'Favorite'}
              </Button>
            </Grid.Item>
          )}
        </Grid.Container>
      </ImageCardInfoContainer>

      {isFavorite && (
        <ImageCardFavoriteIcon data-testid="ImageCardFavoriteIcon">♥</ImageCardFavoriteIcon>
      )}
    </ImageCardContainer>
  );
};

export const ImageCardPlaceholder = () => {
  return <ImageCardContainer data-testid="ImageCardPlaceholder" />;
};
