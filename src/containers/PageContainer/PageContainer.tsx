import { PropsWithChildren } from 'react';
import { ContentContainer, ContentWrapper } from './PageContainer.styles';

type PageContainerProps = PropsWithChildren;

export const PageContainer = ({ children }: PageContainerProps) => {
  return (
    <ContentContainer data-testid="PageContainer">
      <ContentWrapper>{children}</ContentWrapper>
    </ContentContainer>
  );
};
