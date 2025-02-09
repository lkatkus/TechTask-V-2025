import { useCallback, useEffect, useRef } from 'react';
import { ImageCard, VirtualizedList } from '@/components';
import { ImageCardPlaceholder } from '@/components/ImageCard';
import { useImageLoader } from '@/context';
import { Text } from '@/core';

export const ImageList = () => {
  const triggerRef = useRef(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const { data, isLoading, actions } = useImageLoader();

  const handleLoadMore: IntersectionObserverCallback = useCallback(
    (entries) => {
      const entry = entries[0];

      if (entry.isIntersecting && actions.loadNext) {
        actions.loadNext();
      }
    },
    [actions],
  );

  const handleToggleFavorite = (id: number) => {
    actions.toggleFavorite(id);
  };

  useEffect(() => {
    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(handleLoadMore, {
        root: null,
        threshold: 1,
      });
    }

    const target = triggerRef.current;
    const observer = observerRef.current;

    if (target && observer) {
      observer.observe(target);
    }

    return () => {
      if (target && observer) {
        observer.disconnect();
      }
    };
  }, [handleLoadMore]);

  return (
    <div>
      <VirtualizedList
        dataTestId="ImageList"
        items={data}
        itemProps={{ onToggleFavorite: handleToggleFavorite }}
        itemComponent={ImageCard}
        itemPlaceholderComponent={ImageCardPlaceholder}
      />

      {actions.loadNext && <div ref={triggerRef} data-testid="ImageListTrigger" />}

      {isLoading && <Text.Heading1 center>Loading...</Text.Heading1>}
    </div>
  );
};
