import React, {useState, useEffect} from 'react';
import Card from "@mui/material/Card/Card";
import {styled} from '@mui/material/styles';
import Table from "@mui/material/Table/Table";
import TableRow from "@mui/material/TableRow/TableRow";
import TableCell from "@mui/material/TableCell/TableCell";
import {CardMedia} from "@mui/material";
import TableBody from '@mui/material/TableBody/TableBody';
import {Helmet} from 'react-helmet-async';

import {Search} from 'src/components/Search/Search';
import {getUserEsims} from '../../../dataFromFirebase/index';
import Link from "@mui/material/Link";
import ReactMapboxGl, {Layer, Feature} from "react-mapbox-gl";
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

    const Map = ReactMapboxGl({
        accessToken:
            "pk.eyJ1IjoiaXRlcmhpbSIsImEiOiJjbGM3b3g4ZW8wMXRjM3FvMmxqdmZzdXRoIn0.g6rq_3Pad8WuFPdpb1615g",

    });

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
                            let coordinate: [number, number] = [-77.0363700, 38.8951100]
                            if (typeof country?.location === 'object' && country?.location['_long'] && country?.location['_lat']){
                                coordinate[0] = country?.location['_long']
                                coordinate[1] = country?.location['_lat']
                            }
                            // typeof country?.location !== 'object'
                            //     ? coordinates.push('0')
                            //     : (country?.location['_long'] ? coordinates.push() : '0'
                            //         &&  country?.location['_long'] ? coordinates.push() : '0')
                            // let a = (country?.location
                            //     ? null
                            //         ? country?.location['_lat']
                            //         : "#"
                            //     : '#')
                            return <StyledTableRow hover key={index}>

                                <TableCell style={{fontSize: 16}}>{country.id}</TableCell>
                                <TableCell style={{fontSize: 16}}>{country.name}</TableCell>
                                <TableCell style={{fontSize: 16}}>{country.description}</TableCell>
                                <TableCell style={{fontSize: 16}}>{country.gender}</TableCell>
                                <TableCell style={{fontSize: 16}}>{country.age}</TableCell>
                                <TableCell style={{fontSize: 16}}>
                                    <Map
                                        style="mapbox://styles/mapbox/streets-v9"
                                        center = { coordinate }
                                        containerStyle={{
                                            height: "100%",
                                            width: "100%"
                                        }}
                                    >

                                        <Layer type="symbol" id="marker" layout={{"icon-image": "marker-15"}}>
                                            <Feature coordinates={[-0.481747846041145]}/>
                                        </Layer>
                                    </Map>
                                    {/*<Map*/}
                                    {/*    initialViewState={{*/}
                                    {/*        longitude:5,*/}
                                    {/*        latitude:5,*/}
                                    {/*        // longitude: !country?.location*/}
                                    {/*        //*/}
                                    {/*        //     ? null*/}
                                    {/*        //         ? country?.location['_lat']*/}
                                    {/*        //         : "#"*/}
                                    {/*        //     : '#',*/}
                                    {/*        // latitude: !country?.location*/}
                                    {/*        //*/}
                                    {/*        //     ? null*/}
                                    {/*        //         ? country?.location['_long']*/}
                                    {/*        //         : "#"*/}
                                    {/*        //     : '#',*/}
                                    {/*        zoom: 14*/}
                                    {/*        //country?.location['_long']*/}
                                    {/*    }}*/}
                                    {/*    style={{width: 600, height: 400}}*/}
                                    {/*    mapStyle="mapbox://styles/mapbox/streets-v9"*/}
                                    {/*/>*/}
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
