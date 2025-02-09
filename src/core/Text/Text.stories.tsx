import type { Meta } from '@storybook/react';
import { Text } from './Text';

const meta: Meta<typeof Text.Body> = {
  component: Text.Body,
};

export const Default = () => {
  return (
    <div>
      <Text.Heading1>Text.Heading1</Text.Heading1>
      <Text.Body>Text.Body</Text.Body>
      <Text.SubBody>Text.SubBody</Text.SubBody>
    </div>
  );
};

export const WithVariants = () => {
  return (
    <div>
      <div>
        <Text.Heading1 bold>bold</Text.Heading1>
        <Text.Heading1 italic>italic</Text.Heading1>
        <Text.Heading1 center>center</Text.Heading1>
      </div>
      <div>
        <Text.Body bold>bold</Text.Body>
        <Text.Body italic>italic</Text.Body>
        <Text.Body center>center</Text.Body>
      </div>
      <div>
        <Text.SubBody bold>bold</Text.SubBody>
        <Text.SubBody italic>italic</Text.SubBody>
        <Text.SubBody center>center</Text.SubBody>
      </div>
    </div>
  );
};

export default meta;
