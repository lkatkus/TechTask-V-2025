import { ComponentProps, ComponentType, useEffect, useRef, useState } from 'react';
import { Grid } from '@/core';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type VirtualizedListProps<T extends ComponentType<any>> = {
  dataTestId?: string;
  items: ComponentProps<T>[];
  itemProps?: Partial<ComponentProps<T>>;
  itemComponent: T;
  itemPlaceholderComponent: ComponentType;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const VirtualizedList = <T extends ComponentType<{ id: number } & any>>({
  dataTestId,
  items,
  itemProps,
  itemComponent: ItemComponent,
  itemPlaceholderComponent: ItemPlaceholderComponent,
}: VirtualizedListProps<T>) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [visibleItems, setVisibleItems] = useState(new Set<number>());

  const handleSetVisible: IntersectionObserverCallback = (entries) => {
    setVisibleItems((prevItems) => {
      let hasChanges = false;
      const updatedItems = new Set(prevItems);

      entries.forEach((entry) => {
        const target = entry.target as HTMLElement;
        const entryId = Number(target.dataset.id);

        if (entry.isIntersecting) {
          if (!updatedItems.has(entryId)) {
            hasChanges = true;
            updatedItems.add(entryId);
          }
        } else {
          if (updatedItems.has(entryId)) {
            hasChanges = true;
            updatedItems.delete(entryId);
          }
        }
      });

      return hasChanges ? updatedItems : prevItems;
    });
  };

  useEffect(() => {
    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(handleSetVisible, {
        root: null,
        threshold: 0,
      });
    }

    const observer = observerRef.current;
    const itemElements = containerRef.current?.querySelectorAll('[data-virtualized-item]') || [];

    itemElements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
    };
  }, [items]);

  return (
    <Grid.Container data-testid={dataTestId} ref={containerRef} rowGap={24} columnGap={24}>
      {items.map((item) => {
        const props = {
          ...(item as object),
          ...(itemProps as object),
        } as ComponentProps<T>;

        return (
          <Grid.Item key={item.id} span={[12, 6, 4]} data-virtualized-item data-id={item.id}>
            {visibleItems.has(item.id) ? (
              <ItemComponent {...props} />
            ) : (
              <ItemPlaceholderComponent />
            )}
          </Grid.Item>
        );
      })}
    </Grid.Container>
  );
};
