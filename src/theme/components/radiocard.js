export const Radiocard = {
  baseStyle: {
    w: 'full',
    display: "flex",
    flexDirection: "column",
    background: "white",
    // alignItems: "center",
    gap: 6,
    // cursor: "pointer",
    // borderWidth:"1px",
    // borderRadius:"md",
    // boxShadow:"md",
    _checked:{
      bg: 'teal.500',
      color: 'white',
    },
    mx: 'auto',
    // px: 5,
    // py: 3,
  },
  // Two variants: rounded and smooth
  variants: {
    rounded: {
      padding: 8,
      borderRadius: "xl",
      boxShadow: "xl",
    },
    smooth: {
      padding: 6,
      borderRadius: "base",
      boxShadow: "md",
    },
  },
  // The default variant value
  defaultProps: {
    variant: "rounded",
  },
}