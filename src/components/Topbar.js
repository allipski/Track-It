import styled from "styled-components"
import profile from '../images/profile.png'

export default function Topbar() {
    return(
        <Wrapper>
            <h3>TrackIt</h3>
            <img src={profile} />
        </Wrapper>
    )
}

const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 15px;
background-color: #126BA5;
position: fixed;
top: 0;
width: 100%;
height: 70px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

img {
    height: 50px;
    width: 50px;
}

h3 {
    font-family: 'Playball', cursive;
    font-weight: 400;
    font-size: 40px;
    color: #FFFFFF;

}

`