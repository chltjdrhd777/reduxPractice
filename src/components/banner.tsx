import React from "react";
import styled from "styled-components";
import { base_url } from "../components/movieRows";
import { useSelector } from "react-redux";
import { CombineState } from "../redux/combinedStore";

function Banner() {
  const stateCheckor = useSelector((store: CombineState) => store);
  const { banner } = stateCheckor.homeReducer;

  function descriptioLength(content: string, length: number) {
    return content?.length > length
      ? `${content?.substr(0, length - 1)} ...`
      : content;
  }

  return (
    //? the reason why I set the style in the component is that
    //! I don't want to do the fucking (props=>props.etc) only to import image content
    <Header
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${base_url}${banner?.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      <ContentsDiv>
        <TitleH1>
          {/* it is the case of possible name information */}
          {banner?.title || banner?.name || banner?.original_name}
        </TitleH1>
        <HeaderButtons>
          <Button>Play</Button>
          <Button>My List</Button>
        </HeaderButtons>

        <ContentH1>{descriptioLength(banner?.overview, 150)}</ContentH1>
      </ContentsDiv>

      <ForGradientBottom></ForGradientBottom>
    </Header>
  );
}

const Header = styled.header`
  object-fit: contain;
  height: 100%;
`;
const ContentsDiv = styled.div`
  color: white;
  padding-top: 140px;
  height: 190px;
  margin-left: 20px;
`;
const TitleH1 = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  padding-bottom: 0.3rem;
`;
const HeaderButtons = styled.div`
  margin-left: 30px;
`;
const Button = styled.button`
  cursor: pointer;
  color: white;
  outline: none;
  border: none;
  font-weight: 700;
  border-radius: 0.2vw;
  padding: 0.5rem 2rem;
  margin-right: 1rem;
  background-color: rgba(51, 51, 51, 0.5);
  &:hover {
    color: #000;
    background-color: white;
    transition: all 0.2s;
  }
`;
const ContentH1 = styled.h1`
  width: 45rem;
  line-height: 1.3;
  padding-top: 1rem;
  font-size: 0.8rem;
  max-width: 360px;
  /* max-width : content limitation  */
  height: 80px;
`;

const ForGradientBottom = styled.div`
  height: 7rem;
  background-image: linear-gradient(180deg, transparent, black, #111);
`;

export default Banner;
