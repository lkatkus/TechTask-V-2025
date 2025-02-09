import styled from 'styled-components';
import { ImageList } from '@/containers';
import { useImageLoader } from '@/context';
import { Text } from '@/core';

const TitleContainer = styled.div({
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const ImagePage = () => {
  const { isLoading, data } = useImageLoader();

  if (data.length === 0 && isLoading) {
    return (
      <TitleContainer>
        <Text.Heading1 data-testid="loadingIndicator" center>
          Loading...
        </Text.Heading1>
      </TitleContainer>
    );
  }

  if (data.length === 0) {
    return (
      <TitleContainer>
        <Text.Heading1 data-testid="noImagesIndicator" center>
          No images available
        </Text.Heading1>
      </TitleContainer>
    );
  }

  return <ImageList />;
};
