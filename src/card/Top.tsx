import { AbsoluteFill, useVideoConfig, interpolate, useCurrentFrame, spring, Sequence } from "remotion";
import styled from 'styled-components';

const Container = styled.div`
    position: absolute;
    height: 40%;
    width: 100%;
    text-align: center;
    font-family: "Helvetica";
    color: #ebebeb;
    padding: 6% 0;
    `

const Rank = styled.h1`
    position: absolute;
    top: 0%;
    width: 100%;
    font-size: 9rem;
    `
const Label = styled.h2`
    position: absolute;
    top: 50%;
    width: 100%;
    font-size: 50px;
    font-weight: 400;
    `

export const Top: React.FC<{index:number, length: number}>= ({index, length}) => {
  
	return (
		<>
      <Container>
        <svg width="80%" viewBox="0 0 259 258" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M129.5 15L241.65 75.75V197.25L129.5 258L17.3497 197.25V75.75L129.5 15Z" fill="#661111"/>
          <path d="M129.5 0L241.65 60.75V182.25L129.5 243L17.3497 182.25V60.75L129.5 0Z" fill="#BB2222"/>
        </svg>

        <Rank>{length-index}</Rank>
        <Label>TOP</Label>
      </Container>
		</>
	  );
};
