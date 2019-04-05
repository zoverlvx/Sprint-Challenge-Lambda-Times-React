import React from 'react';
import styled from "styled-components";

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const TopBarDiv = styled.div`
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: none;
   flex-direction: row;
   position: fixed;
   height: 44px;
   background-color: #333;
`;

const Container = styled.div`
	  width: 100%;
      display: flex;
      justify-content: none;
      align-items: none;
      flex-direction: row;
      color: #fff;
      letter-spacing: 1px;
      padding: 0 10px;
	@media (min-width: 1280px) {
		width: 1280px;
	}
`;

const ContainerLeftDiv = styled.div`
	display: flex;
	justify-content: none;
	align-items: center;
	flex-direction: row;
	flex: 1;
	font-size: 11px;
`;

const ContainerLeftSpan = styled.span`
	cursor: pointer;
	margin-right: 25%;
	font-weight: bold;
`;

const ContainerCenter = styled.div`
   display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex: 3;
    font-size: 9px;
`;

const ContainerCenterSpan = styled.span`
	cursor: pointer;
	margin-left: 5%;
`;

const ContainerRight = styled.div`
   display: flex;
   justify-content: flex-end;
   align-items: center;
   flex-direction: row;
   flex: 1;
   font-size: 11px;
   font-weight: bold;
`;

const cursor = "cursor: pointer;" 
{/*Wasn't sure if that'd work*/}
const ContainerRightSpan = styled.span`
	${cursor}
`;

const TopBar = () => {
  return (
    <TopBarDiv>
      <Container>
        <ContainerLeftDiv>
          	<ContainerLeftSpan>TOPICS</ContainerLeftSpan>
			<ContainerLeftSpan>SEARCH</ContainerLeftSpan>
        </ContainerLeftDiv>
        <ContainerCenter>
          	<ContainerCenterSpan>GENERAL</ContainerCenterSpan>
			<ContainerCenterSpan>BROWNBAG</ContainerCenterSpan>
			<ContainerCenterSpan>RANDOM</ContainerCenterSpan>
			<ContainerCenterSpan>MUSIC</ContainerCenterSpan>
			<ContainerCenterSpan>ANNOUNCEMENTS</ContainerCenterSpan>
        </ContainerCenter>
        <ContainerRight>
          <ContainerRightSpan>LOG IN</ContainerRightSpan>
        </ContainerRight>
      </Container>
    </TopBarDiv>
  )
}

export default TopBar;
