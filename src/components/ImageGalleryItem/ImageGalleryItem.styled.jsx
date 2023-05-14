import styled from "@emotion/styled";


const ImageContainer = styled.div`
width: 200px;
height: 200px; 

`
const ListItem = styled.li`
&:hover {
    transition: all .5s;
    transform: scale(1.1);
}
`

export { ImageContainer, ListItem };