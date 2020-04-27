import React, {Fragment} from "react"
import styled from 'styled-components'

import { Spacer } from '../components'

import { colors, spaces, blockTypoSnippet, typoSizes, typoStyles, typoSnippet } from '../../config/styles'

export function TypoTester() {
  return (
    <OuterContainer>
      <Container>
        <Spacer debug space={spaces.medium} />
        <FontTester 
          typoStyle={typoStyles.RobotoMonoLight}
        />
        <FontTester 
          typoStyle={typoStyles.RobotoMonoLight}
          typoSize={typoSizes.moduleBig}
        />        
        <FontTester 
          typoStyle={typoStyles.RobotoMonoLight}
          typoSize={typoSizes.moduleMedium}
        />                
        <FontTester 
          typoStyle={typoStyles.RobotoMonoLight}
          typoSize={typoSizes.moduleSmall}
        />        
        <FontTester 
          typoStyle={typoStyles.RobotoMonoLight}
        />
        <Spacer debug space={spaces.large} />
        <FontTester 
          typoStyle={typoStyles.RobotoMonoRegular}
        />                                
        <FontTester 
          typoStyle={typoStyles.RobotoMonoRegular}
          typoSize={typoSizes.moduleBig}
        />        
        <FontTester 
          typoStyle={typoStyles.RobotoMonoRegular}
          typoSize={typoSizes.moduleMedium}
        />                
        <FontTester 
          typoStyle={typoStyles.RobotoMonoRegular}
          typoSize={typoSizes.moduleSmall}
        />                
        <FontTester 
          typoStyle={typoStyles.RobotoMonoRegular}
        />                                
        <Spacer debug space={spaces.large} />
        <FontTester 
          typoStyle={typoStyles.RobotoMonoMedium}
        />                
        <FontTester 
          typoStyle={typoStyles.RobotoMonoMedium}
        />                
        <Spacer debug space={spaces.small} />
      </Container>
    </OuterContainer>
  )
}

const OuterContainer = styled.div`
  background-color:black;
  padding: 50px 0 50px 0;
`

const Container = styled.div`
  background-color: ${colors.white};
  /*background-size: 20px 20px;
  background-image:
    linear-gradient(to right, grey 1px, transparent 1px),
    linear-gradient(to bottom, grey 1px, transparent 1px);  */
`
const Container2 = styled.div`
  background-color: ${colors.white};
  background-size: 20px 20px;
  background-image:
    linear-gradient(to right, grey 1px, transparent 1px),
    linear-gradient(to bottom, grey 1px, transparent 1px); 
`

const FontTesterStyled = styled.div`
    ${ ({typoStyle = typoStyles.RobotoMonoMedium, typoSize = typoSizes.moduleBig}) =>
      typoSnippet({ 
        typoSize, 
        typoStyle,
      }) 
    };
  `

const FontTester = ({typoStyle, typoSize = typoSizes.moduleMedium}) => {
  return <FontTesterStyled
    typoStyle={typoStyle}
    typoSize={typoSize}
  >
    Test genau {typoStyle.name} font-size: {typoSize.fontSizePx.l}/{typoSize.fontSizePx.s} line-height: {typoSize.lineHeightPx.l}/{typoSize.lineHeightPx.s}
  </FontTesterStyled>
  }


const BlockTester = styled.div`
  ${ 
    blockTypoSnippet({ 
      typoSize: typoSizes.moduleBig, 
      typoStyle: typoStyles.RobotoMonoRegular,
      spaceTop: spaces.medium,
      spaceBottom: spaces.medium,
    }) 
  };
`

export const TypoTesterBlock = {
  label: "TypoTester",
  name: "typotester",
  defaultItem: {
  },
  fields: [
    
  ],
}
