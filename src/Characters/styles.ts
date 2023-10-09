import { flexbox, height, width } from '@mui/system';
import { wrap } from 'module';
import styled  from 'styled-components';
import Button from '@mui/icons-material';
import image from '../styles/img/wp5399598.webp';

interface ThumbnailData {

    thumbnail:{
        path: string;
        extension: string;
    };
}

export const Container = styled.main` 

background-image:url(${image});
display: flex;
flex-wrap: wrap;

width: 100%;
height: 100%;
`;

export const CardList = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;

`;

const urlImg = (props: ThumbnailData )=> 
`${props.thumbnail.path}.${props.thumbnail.extension}`;

export const Card = styled.div`
background: #f1f1f1;
height: 300px;
width: 200px;
margin: 10px;
border-radius: 5px;
overflow: hidden;
box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0,3);


h2, 
p {
    padding: 2px;
    text-align: justify;
}

div#img {
    height: 300px;
    width: 100%;
    background: url(${urlImg}) no-repeat center ;
    background-size: cover;
    transition: 1s;
}

&:hover {
 div#img {
        height: 50%;
    }
}

`;

export const ButtonMore = styled.div `
background: white;
height: 40px;
cursor: pointer;
box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.3);
margin: 20px auto ;
padding: 0 50px;
border-radius: 5px;
&:hover {
    background: yellow;
    display: flex;
    
}

svg {
    margin: 0 8px;
}

 
`;
