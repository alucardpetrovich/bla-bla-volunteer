/**
 * These are the breakpoints as a number and can be changeable depending on the designer
 */
// FIXME: десь є useMedia буз цього. Використать там його. Взагалі ці штуки треба буде винести всі в ui-kit або типу
//  того. Я ще подумаю як краще зробить. Поки можна залишать я поправлю
export const sizes = {
  xs: 419,
  sm: 833,
  md: 1024,
  lg: 1200,
  xl: 1400,
};

/**
 * Export a object with Media Queries.
 * This already set queries which you can use.
 *
 * @example
 * // style.ts
 * @media ${media.sm} {
 *   background: red;
 * }
 */

export const media = {
  sm: `(min-width: ${sizes.xs}px) and (max-width:${sizes.sm}px)`,
  md: `(min-width: ${sizes.sm + 1}px) and (max-width:${sizes.md}px)`,
  lg: `(min-width: ${sizes.md + 1}px) and (max-width:${sizes.lg}px)`,
  xl: `(min-width: ${sizes.lg + 1}px) and (max-width:${sizes.xl}px)`,

  max_sm: ` (max-width:${sizes.sm}px)`,
  min_md: `(min-width: ${sizes.md}px)`,
};
