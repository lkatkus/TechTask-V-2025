import { getTextBase } from './TextBase';

const Heading1 = getTextBase({
  as: 'h1',
  fontSize: 32,
  lineHeight: 2.5,
});
const Body = getTextBase({
  fontSize: 16,
  lineHeight: 1.5,
});
const SubBody = getTextBase({
  fontSize: 14,
  lineHeight: 1.25,
});

export const Text = {
  Heading1,
  Body,
  SubBody,
};
