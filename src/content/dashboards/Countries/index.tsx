import React, {useState, useEffect} from 'react';
import Card from "@mui/material/Card/Card";
import {styled} from '@mui/material/styles';
import Table from "@mui/material/Table/Table";
import TableRow from "@mui/material/TableRow/TableRow";
import TableCell from "@mui/material/TableCell/TableCell";
import {CardMedia, Link} from "@mui/material";
import TableBody from '@mui/material/TableBody/TableBody';
import {Helmet} from 'react-helmet-async';

import {Search} from 'src/components/Search/Search';
import {getUserEsims} from '../../../dataFromFirebase/index';
import './style.css'
const CardCover = styled(Card)(
    ({theme}) => `
    position: relative;

    .MuiCardMedia-root {
      height: ${theme.spacing(26)};
    }
`
);


function Countries() {
    const [countries, setCountries] = useState<any[]>([]);
    const [query, setQuery] = useState("")

    useEffect(() => {
            (async () => {
                const countr = await getUserEsims();
                setCountries(countr)
            })();
        },
        []);

    const StyledTableRow = styled(TableRow)(({theme}) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));


    return (
        <>
            <Search
                style={{margin: '2vw 4vw 2vw 4vw'}}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setQuery(e.target.value);
                }}/>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Card style={{flexGrow: 1, margin: '2vw 12vw 2vw 12vw'}}>
                <Table>
                    <TableBody>
                        <TableRow style={{backgroundColor: 'black'}}>
                            <TableCell style={{fontWeight: '700', fontSize: 16, color: 'white'}}>ID</TableCell>
                            <TableCell style={{fontWeight: '700', fontSize: 16, color: 'white'}}>Name</TableCell>
                            <TableCell style={{fontWeight: '700', fontSize: 16, color: 'white'}}>Description</TableCell>
                            <TableCell style={{fontWeight: '700', fontSize: 16, color: 'white'}}>Gender</TableCell>
                            <TableCell style={{fontWeight: '700', fontSize: 16, color: 'white'}}>Age</TableCell>
                            <TableCell style={{fontWeight: '700', fontSize: 16, color: 'white'}}>Locate</TableCell>
                            <TableCell style={{fontWeight: '700', fontSize: 16, color: 'white'}}>Photo</TableCell>
                            <TableCell style={{fontWeight: '700', fontSize: 16, color: 'white'}}>Video</TableCell>
                        </TableRow>
                        {countries.map((country, index) => {
                            let coordinate: [number, number] = [38.8951100, -77.0363700 ]
                            if (typeof country?.location === 'object' && country?.location['_long'] && country?.location['_lat']){
                                coordinate[0] = country?.location['_lat']
                                coordinate[1] = country?.location['_long']
                            }
                            return <StyledTableRow hover key={index}>

                                <TableCell style={{fontSize: 16}}>{country.id}</TableCell>
                                <TableCell style={{fontSize: 16}}>{country.name}</TableCell>
                                <TableCell style={{fontSize: 16}}>{country.description}</TableCell>
                                <TableCell style={{fontSize: 16}}>{country.gender}</TableCell>
                                <TableCell style={{fontSize: 16}}>{country.age}</TableCell>
                                <TableCell style={{fontSize: 16}}>
                                    <Link target="_blank" href={`http://www.google.com/maps/place/${coordinate[0]},${coordinate[1]}`}>Link</Link>
                                </TableCell>
                                <TableCell style={{fontSize: 16}}>
                                    <CardCover>
                                        <CardMedia
                                            image={country.image}
                                            style={{
                                                minWidth: "100px",
                                                maxHeight: "auto"
                                            }}
                                        />
                                    </CardCover>
                                </TableCell>
                                <TableCell style={{fontSize: 16}}>
                                    <
                                        CardMedia
                                        component="video"
                                        // autoPlay
                                        controls
                                        src={country.video}
                                    />
                                    {/*<Link href={country.video}>Video</Link>*/}
                                </TableCell>

                            </StyledTableRow>
                        })
                        }

                    </TableBody>
                </Table>
            </Card>

        </>
    );
}

export default Countries;
