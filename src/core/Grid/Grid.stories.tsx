import type { Meta } from '@storybook/react';
import styled from 'styled-components';
import { Grid } from './Grid';

const GridWrapper = styled.div({
  '& > * > *:nth-child(3n + 1)': {
    backgroundColor: 'red',
  },

  '& > * > *:nth-child(3n + 2)': {
    backgroundColor: 'green',
  },

  '& > * > *:nth-child(3n + 3)': {
    backgroundColor: 'blue',
  },
});

const FullRowsExample = () => (
  <>
    <Grid.Item>span = 12</Grid.Item>

    <Grid.Item span={6}>span = 6</Grid.Item>
    <Grid.Item span={6}>span = 6</Grid.Item>

    <Grid.Item span={4}>span = 4</Grid.Item>
    <Grid.Item span={4}>span = 4</Grid.Item>
    <Grid.Item span={4}>span = 4</Grid.Item>

    <Grid.Item span={3}>span = 4</Grid.Item>
    <Grid.Item span={3}>span = 4</Grid.Item>
    <Grid.Item span={3}>span = 4</Grid.Item>
    <Grid.Item span={3}>span = 4</Grid.Item>

    <Grid.Item span={2}>span = 2</Grid.Item>
    <Grid.Item span={2}>span = 2</Grid.Item>
    <Grid.Item span={2}>span = 2</Grid.Item>
    <Grid.Item span={2}>span = 2</Grid.Item>
    <Grid.Item span={2}>span = 2</Grid.Item>
    <Grid.Item span={2}>span = 2</Grid.Item>

    <Grid.Item span={1}>span = 1</Grid.Item>
    <Grid.Item span={1}>span = 1</Grid.Item>
    <Grid.Item span={1}>span = 1</Grid.Item>
    <Grid.Item span={1}>span = 1</Grid.Item>
    <Grid.Item span={1}>span = 1</Grid.Item>
    <Grid.Item span={1}>span = 1</Grid.Item>
    <Grid.Item span={1}>span = 1</Grid.Item>
    <Grid.Item span={1}>span = 1</Grid.Item>
    <Grid.Item span={1}>span = 1</Grid.Item>
    <Grid.Item span={1}>span = 1</Grid.Item>
    <Grid.Item span={1}>span = 1</Grid.Item>
    <Grid.Item span={1}>span = 1</Grid.Item>
  </>
);

const meta: Meta<typeof Grid.Container> = {
  component: Grid.Container,
};

export const Default = () => (
  <GridWrapper>
    <Grid.Container>
      <FullRowsExample />
    </Grid.Container>
  </GridWrapper>
);

export const WithSpacingProps = () => (
  <GridWrapper>
    <Grid.Container rowGap={32} columnGap={16}>
      <FullRowsExample />
    </Grid.Container>
  </GridWrapper>
);

export const WithResponsiveItems = () => (
  <GridWrapper>
    <Grid.Container>
      <Grid.Item span={[12, 6, 4]}>Item - 1</Grid.Item>
      <Grid.Item span={[12, 6, 4]}>Item - 2</Grid.Item>
      <Grid.Item span={[12, 6, 4]}>Item - 3</Grid.Item>

      <Grid.Item span={[4, 6, 12]}>Item - 4</Grid.Item>
      <Grid.Item span={[4, 6, 12]}>Item - 4</Grid.Item>
      <Grid.Item span={[4, 6, 12]}>Item - 4</Grid.Item>
    </Grid.Container>
  </GridWrapper>
);

export default meta;
