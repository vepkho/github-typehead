import React, { useCallback, useState } from 'react'

import { Link } from 'react-router-dom';

import { infoActions } from '../../store/info-slice';
import { useDispatch } from 'react-redux';

import debounce from 'lodash.debounce';

import { FormControl, FormControlLabel } from '@mui/material';

import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';

import TableData from '../../components/tableData/TableData';
import CardData from '../../components/cardData/CardData';

import styles from './Home.module.css'
import Navigation from '../../components/navigation/Navigation';

const Home = () => {
    const dispatch = useDispatch();

    const [table, setTable] = useState(true)
    const [card, setCard] = useState(false)
    const [inputValue, setInputValue] = useState("");
    const [data, setData] = useState([]);

    const formatHandler = () => {
        setTable(!table);
        setCard(!card);
    }

    const inputValueHandler = (e) => {
        e.preventDefault();
        setInputValue(e.target.value)
    }
    
    const handleChange = (e) => {
        e.preventDefault();
        if(!inputValue){
            return;
        }
        fetch("https://api.github.com/search/repositories?q=" + inputValue)
        .then(response => {
            return response.json();
        })
        .then(data => {
            setData(data.items);
        })

        dispatch(
            infoActions.clearList()
        )
    }

    const debounceHandler = useCallback(
        debounce(handleChange, 500)
    , [])

  return (
    <div>
        <Navigation/>
        <div className={styles.Container}>
            <FormControl fullWidth onSubmit={debounceHandler} sx={{marginTop:3}}>
                <Grid container spacing={2} alignItems={'center'}>
                    <Grid item xs={10}>
                        <TextField
                            label="Repository Name"
                            size="small"
                            type='text'
                            onChange={inputValueHandler}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <Button variant="contained" size="medium" type='submit' onClick={handleChange} fullWidth>Search</Button>
                    </Grid>
                </Grid>
                <FormControlLabel
                    control={
                        <Switch onChange={formatHandler} name="table" />
                    }
                    label="Card Format"
                    sx={{mt:2, mb:2}}
                />
            </FormControl>
            {data.length > 0 && table && 
                <Link to="/details" style={{textDecoration: 'none'}}>
                    {data.map(data => (
                        <TableData 
                            id= {data.id}
                            image = {data.owner.avatar_url} 
                            owner = {data.owner.login}
                            name = {data.name}
                            description = {data.description}
                            visibility = {data.visibility}
                            watchers = {data.watchers}              
                        />
                    ))}
                </Link>
            }
            {data.length > 0 && card &&
                <Link to="/details" style={{textDecoration: 'none'}}>
                    <div className={styles.Cards}>
                        {data.map(data => (
                            <CardData 
                                id= {data.id}
                                image = {data.owner.avatar_url} 
                                owner = {data.owner.login}
                                name = {data.name}
                                description = {data.description}
                                visibility = {data.visibility}
                                watchers = {data.watchers}
                            />
                        ))}
                    </div>
                </Link>
            }
        </div>
    </div>
  )
}

export default Home