const metrics = {
  veryLarge: {
    fontSizePx: 30 * 1.25,
  },
  large: {
    fontSizePx: 30,
    lineHeightPx: 33,
    lineTopPx: 5,
  },
  medium: {
    fontSizePx: 20,
    lineHeightPx: 25,
    lineTopPx: 5,
  },
  small: {
    fontSizePx: 15,
    lineHeightPx: 19,
    lineTopPx: 2,
  }  
}

const typoSizes = {
  button: {
    fontSizePx: { l: 40, s: 25 },
  },
  title: {
    fontSizePx:   { l: 70, s: 30 },
    lineHeightPx: { l: 73, s: 34 },
  },
  moduleBig: {
    fontSizePx:   { l: 50, s: 25 },
    lineHeightPx: { l: 53, s: 28 },
  },
  moduleMedium: {
    fontSizePx:   { l: 30, s: 18 },
    lineHeightPx: { l: 33, s: 22 },
  },
  moduleSmall: {
    fontSizePx:   { l: 20, s: 18 },
    lineHeightPx: { l: 25, s: 22 },
  },
  moduleTitle: {
    fontSizePx:   { l: 20, s: 15 },
    lineHeightPx: { l: 25, s: 19 },
  },
  videoLoop: {
    fontSizePx:   { l: 90, s: 38 },
    lineHeightPx: { l: 90, s: 40 },
  },
}

const typoStyles = {
  RobotoMonoLight:   { name: "Roboto Mono", weight: 300, lineTopPerc: 0.1, lineBottomPerc: 0.1 },
  RobotoMonoRegular: { name: "Roboto Mono", weight: 400, lineTopPerc: 0.1, lineBottomPerc: 0.1 },
  RobotoMonoMedium:  { name: "Roboto Mono", weight: 500, lineTopPerc: 0.1, lineBottomPerc: 0.1 },
  NeueHaasUnicaBold: { name: "NeueHaasUnicaW1G-Bold",weight: "normal" /*???*/, lineTopPerc: 0.1, lineBottomPerc: 0.1 },
}

const typoSnippet =  function({typoSize, typoStyle}) {
  const { name, weight, lineTopPerc, lineBottomPerc} = typoStyle
  const { fontSizePx, lineHeightPx } = typoSize
  return `
    position: relative;
    font-family: ${ name };
    font-weight: ${ weight };

    font-size: ${fontSizePx.l + "px"};
    line-height: ${lineHeightPx.l + "px"};

    margin-top: ${ (-(lineTopPerc+lineBottomPerc)*fontSizePx.l) + "px" };
    top: ${ (lineBottomPerc*fontSizePx.l) + "px" };
    
    @media ${ breakpoints.small } {

      font-size: ${fontSizePx.s + "px"};
      line-height: ${lineHeightPx.s + "px"};

      margin-top: ${ (-(lineTopPerc+lineBottomPerc)*fontSizePx.s) + "px" };
      top: ${ (lineBottomPerc*fontSizePx.s) + "px" };  
    }
  `
}

const breakpoints = {
  small: "(max-width: 900px)",
  smallPx: 900,
}

const spaces = {
  largePx:        { l: 60, s: 40 },
  mediumPx:       { l: 40, s: 30 },
  mediumShrinkPx: { l: 40, s: 20 },
  smallPx:        { l: 20, s: 20 },
  verySmallPx:    { l:  5, s:  5 }
}

const dist = {
  lineTop: -metrics.large.lineTopPx + "px",
  spacer: "40px",
  smallSpacer: "20px",
  largeButtonHeight: "60px",
  smallButtonHeight: "30px",
  letterWidth: "0.65em",
}

const colors = {
  bg: "#D8D8D8",
  grey1: "#a0a0a0",
  grey2: "#7f7f7f",
  blue: "#0000ff",
  turquoise: "#00ffff",
  white: "white",
  green: "#00ff00",
  mark: "#ff00ff",
}

let snippets = {
  typography: {
    topAdjust: `
      position: relative;
      margin-top: ${-2*metrics.large.lineTopPx + "px"};
      top: ${metrics.large.lineTopPx + "px"};
      @media ${ breakpoints.small } {
        margin-top: ${-2*metrics.small.lineTopPx + "px"};
        top: ${metrics.small.lineTopPx + "px"};
      }
    `,
    underline: `
      text-decoration: none;
      background-size: 1px 1em;
      display: inline;
      box-shadow:
        inset 0px -0.1em ${colors.bg},
        inset 0 -0.2em #000;
    `,
  }
}

snippets.blockStyle = `
  ${snippets.typography.topAdjust};
  padding-bottom: ${dist.spacer};
  margin-left: ${ dist.spacer };
  margin-right: ${ dist.spacer };
  padding-left: 10px;
  padding-right: 10px;  
  @media ${ breakpoints.small } {
    padding-bottom: ${dist.smallSpacer};
    margin-left: ${ dist.smallSpacer };
    margin-right: ${ dist.smallSpacer };
  }
  white-space: pre-wrap;
`

/*
  border-style: solid;
  border-color: black;
  border-width: 0 0 1px 0;
  padding-bottom: -1px;
*/

/*
  background-size: 1px 1em;
  box-shadow:
    inset 0 -0.1em black,
    inset 0 -0.2em ${colors.bg};
*/

const globalStyles = `
  /* NOTE: font import in gatsby-config.js */

  :root {
    font-size: ${ metrics.large.fontSizePx }px;
    letter-spacing: 1px;

    @media ${ breakpoints.small } {
      font-size: ${ metrics.medium.fontSizePx }px;
    }

    background-color: ${ colors.bg };
  }

  * {
    scroll-behavior: smooth;
  }

  body {
    line-height: ${ metrics.large.lineHeightPx }px;
    @media ${ breakpoints.small } {
      line-height: ${ metrics.medium.lineHeightPx }px;
    }    
    font-family: 'Roboto Mono', 'Andale Mono', monospace;
  }
`

/***** EXAMPLE USE 

  ${ 
    typoSnippet({ 
      typoSize: typoSizes.moduleBig, 
      typoStyle: typoStyles.RobotoMonoLight
    }) 
  };

******/

export {
  globalStyles,
  dist,
  spaces,
  colors,
  snippets,
  breakpoints,
  metrics,
  typoSizes,
  typoStyles,
  typoSnippet,  
}