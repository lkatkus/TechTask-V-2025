export const getMockedImages = (count: number) =>
  Array(count)
    .fill(null)
    .map((_, i) => ({
      id: i,
      title: `image-${i}-title`,
      subTitle: `image-${i}-subTitle`,
      src: '/placeholder.png',
    }));
