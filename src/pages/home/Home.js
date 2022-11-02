import React, { useCallback, useState } from 'react'

import { Link } from 'react-router-dom';

<<<<<<< HEAD
import { infoActions } from '../../store/info-slice';
import { useDispatch } from 'react-redux';

import debounce from 'lodash.debounce';

import { FormControl, FormControlLabel } from '@mui/material';
=======
import debounce from 'lodash.debounce';

import styles from './Home.module.css'

import { FormControl, FormControlLabel, CardActionArea } from '@mui/material';
>>>>>>> 364170ec3993ce68917be88bf18b3ac256fb38c1

import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';

<<<<<<< HEAD
import TableData from '../../components/tableData/TableData';
import CardData from '../../components/cardData/CardData';

import styles from './Home.module.css'
import Navigation from '../../components/navigation/Navigation';

const Home = () => {
    const dispatch = useDispatch();

=======
import { useSelector } from 'react-redux';


import TableData from '../../components/tableData/TableData';
import CardData from '../../components/cardData/CardData';

import { useLocation } from 'react-router-dom';

import { infoActions } from '../../store/info-slice';
import { useDispatch } from 'react-redux';

const Home = () => {
>>>>>>> 364170ec3993ce68917be88bf18b3ac256fb38c1
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
<<<<<<< HEAD
            setData(data.items);
        })

        dispatch(
            infoActions.clearList()
        )
=======
            console.log(data);
            setData(data.items);
        })
>>>>>>> 364170ec3993ce68917be88bf18b3ac256fb38c1
    }

    const debounceHandler = useCallback(
        debounce(handleChange, 500)
    , [])

<<<<<<< HEAD
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
=======
    const dispatch = useDispatch();
    const some = () => {
        dispatch(
            infoActions.clearList()
        )
    }
  return (
    <div className={styles.Container}>
        <FormControl fullWidth onSubmit={debounceHandler}>
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
            />
        </FormControl>
        {data.length > 0 && table && 
            <Link to="/details" style={{textDecoration: 'none'}}>
                {data.map(data => (
                    <TableData 
                        id= {data.id}
                        image = {data.owner.avatar_url} 
                        owner = {data.owner.login}
                        date = {data.pushed_at}
                        name = {data.name}
                        description = {data.description}
                        visibility = {data.visibility}
                        update = {data.updated_at}
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
                            date = {data.pushed_at}
                            name = {data.name}
                            description = {data.description}
                            visibility = {data.visibility}
                            update = {data.updated_at}
                            watchers = {data.watchers}
                        />
                    ))}
                </div>
            </Link>
        }
        <button onClick={some}>asdf;sdjf;sjd;flj;s</button>
>>>>>>> 364170ec3993ce68917be88bf18b3ac256fb38c1
    </div>
  )
}

export default Home