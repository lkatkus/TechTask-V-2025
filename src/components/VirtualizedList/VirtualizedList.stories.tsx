import type { Meta } from '@storybook/react';
import { VirtualizedList } from './VirtualizedList';

const meta: Meta<typeof VirtualizedList> = {
  component: VirtualizedList,
};

const Item = ({ id }: { id: number }) => (
  <div style={{ padding: 20, height: 200, backgroundColor: 'green' }}>Item-{id}</div>
);

const ItemPlaceholder = () => (
  <div style={{ padding: 20, height: 200, backgroundColor: 'blue' }}>Placeholder</div>
);

const MOCK_ITEMS = new Array(1000).fill(null).map((_, i) => ({ id: i }));

export const Default = () => {
  return (
    <VirtualizedList
      items={MOCK_ITEMS}
      itemComponent={Item}
      itemPlaceholderComponent={ItemPlaceholder}
    />
  );
};

export default meta;
