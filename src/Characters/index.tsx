import React, { useCallback, useEffect, useState} from 'react';
import api from '../Services/api';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton, TextField } from '@mui/material';
import {Container, CardList, Card, ButtonMore} from './styles';

interface Data {
id: string;
name:string;
description: string;
thumbnail:{
    path: string;
    extension: string;
};
}



const Characters: React.FC = () => {
    
    const [characters, setCharacters]  = useState<Data[]>([]);
    const [searchName, setSearchName] = useState<string>('');
    const [loading, setLoading] = useState(false);
    const [searchCharacters, setSearchCharacters] = useState<Data[]>([]);

    useEffect(() => {

        api.get('/characters')
        
        .then(response =>
        {
            setCharacters(response.data.data.results);
        })
        .catch(err => console.log(err));
      }, []);


      const handleMore = useCallback(async () => {
       try {
        const offset = characters.length;
        const response = await api.get('characters', { 
            params: {
                offset,
            },

        });
        setCharacters([... characters, ... response.data.data.results]);

       }
       catch(err) {
        console.log(err);

       }
      },[characters]);


      const clearSearch = useCallback(() => {
        setSearchName('');
      }, []);

      const loadSearchCharacters = useCallback(() => {
        if (searchName.trim()) {
          setLoading(true);
    
          api.get('/characters', {
              params: {
                offset : 0,
                nameStartsWith: searchName,
              },
            })
            .then((response) => {
              setSearchCharacters([... characters, ...response.data.data.results]);
            })
            .catch(err => 
              console.log(err));
            }
            
            
        },
     [searchName, setLoading]);
    
      useEffect(() => {
        loadSearchCharacters();
      }, [searchName]);
    



    return (<Container>
    
<TextField
  label="Search"
  InputProps={{
    endAdornment: (
        <IconButton onClick={loadSearchCharacters}>
          <SearchIcon />
        </IconButton>
     
    )
  }}
/> 
        <CardList>

    {characters.map(character => {
     return (
        <Card key={character.id} thumbnail={character.thumbnail}>

        <div id="img" />
        <h2>{character.name}</h2>
        <p>{character.description}</p>

        </Card>
    );
})}
        </CardList >

        <ButtonMore onClick={handleMore}>
             More
        </ButtonMore>

        </Container>
);



};
export default Characters;