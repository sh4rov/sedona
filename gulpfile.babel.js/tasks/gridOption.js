module.exports = {
  filename: "_smart-grid",
  outputStyle: "scss",
  columns: 12,
  offset: "30px",
  mobileFirst: false,
  container: {
    maxWidth: "1280px",
    fields: "30px"
  },
  breakPoints: {
    xs: {
      width: "20rem" // 320px
    },
    sm: {
      width: "36rem" // 576px
    },
    md: {
      width: "48rem" // 768px
    },
    lg: {
      width: "62rem" // 992px
    },
    xl: {
      width: "75rem" // 1200px
    }
  },
  mixinNames: {
    container: "wrapper",
    row: "row-flex",
    rowFloat: "row-float",
    rowInlineBlock: "row-ib",
    rowOffsets: "row-offsets",
    column: "col",
    size: "size",
    columnFloat: "col-float",
    columnInlineBlock: "col-ib",
    columnPadding: "col-padding",
    columnOffsets: "col-offsets",
    shift: "shift",
    from: "from",
    to: "to",
    fromTo: "from-to",
    reset: "reset",
    clearfix: "clearfix",
    debug: "debug",
    uRowFlex: "u-row-flex",
    uColumn: "u-col",
    uSize: "u-size"
  },
  tab: "    ",
  defaultMediaDevice: "screen",
  detailedCalc: false
}