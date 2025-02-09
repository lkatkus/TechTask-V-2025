const breakpoints = ['576px', '992px', '1400px'];

/* eslint-disable @typescript-eslint/no-explicit-any */
export const getResponsiveStyle = (...styles: [key: string, values: any[]][]) => {
  const result: { [key: string]: any } = {};

  styles.forEach(([key, values]) => {
    values.forEach((value, i) => {
      if (i === 0) {
        result[key] = value;
      } else if (breakpoints[i - 1]) {
        const sizeQuery = `(min-width: ${breakpoints[i - 1]})`;

        result[`@media screen and ${sizeQuery}`] = {
          ...result[`@media screen and ${sizeQuery}`],
          [key]: value,
        };
      }
    });
  });

  return result;
};
/* eslint-enable @typescript-eslint/no-explicit-any */
