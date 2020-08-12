import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../redux/HomeReducer";
import { CombineState } from "../redux/combinedStore";

function NavBar() {
  //fuxxing react error-check
  //! warning = if you want to use react-hook
  //! change the function component name starting with capital
  const dispatch = useDispatch();
  const navCheck = useSelector(
    (store: CombineState) => store.homeReducer.navBoolean
  );

  useEffect(() => {
    function scrollEvent() {
      if (window.scrollY > 100) {
        dispatch(actions.navShow(true));
      } else {
        return dispatch(actions.navShow(false));
      }
    }
    window.addEventListener("scroll", scrollEvent);
  }, [dispatch]);

  return (
    <NavContainerDiv navCheck={navCheck}>
      <NetflixLogoImg
        src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png"
        alt="Netflix Logo"
      />
      <UserLogoImg
        src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
        alt="Avatar"
      />
    </NavContainerDiv>
  );
}

interface NavContainerProp {
  navCheck: boolean;
}

const NavContainerDiv = styled.div<NavContainerProp>`
  position: fixed;
  top: 0;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => (props.navCheck ? "black" : null)};
  height: 65px;
  z-index: 1;
  transition-timing-function: ease-in;
  transition: all 0.5s;
`;
const NetflixLogoImg = styled.img`
  width: 80px;
  object-fit: contain;
  position: absolute;
  padding: 20px;
`;
const UserLogoImg = styled.img`
  width: 30px;
  object-fit: contain;
  position: absolute;
  right: 0;
  padding: 20px;
`;
export default NavBar;
