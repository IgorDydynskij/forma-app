import React, {useState, useEffect} from 'react';
// import {CountryFullInfo} from "src/api/countries/interfaces/country-full-info.inteface";
// import {UserPurchases} from "../../../dataFromFirebase/user.interface"
// import {getCountriesFullInfoUsecase} from 'src/api/countries/usecases/get-countries-full-info.usecase';
import Card from "@mui/material/Card/Card";
import {styled} from '@mui/material/styles';
import Table from "@mui/material/Table/Table";
import TableRow from "@mui/material/TableRow/TableRow";
import TableCell from "@mui/material/TableCell/TableCell";
import TableBody from '@mui/material/TableBody/TableBody';
import Checkbox from '@mui/material/Checkbox/Checkbox';
import {updateCountryUsecase} from 'src/api/countries/usecases/update-country.usecase';
import {Search} from 'src/components/Search/Search';
import {Helmet} from 'react-helmet-async';
import {getUserEsims} from '../../../dataFromFirebase/index';
import {Box, CardMedia} from "@mui/material";
import Link from "@mui/material/Link";

// import { getUserEsims } from '../../../api/userProfile/usecases/get-user-esims.usecase';


const CardCover = styled(Card)(
    ({ theme }) => `
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
    }, []);

    const StyledTableRow = styled(TableRow)(({theme}) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));

    // const handleCheckboxClick = (country: CountryFullInfo) => {
    //   country.isPopular = !country.isPopular;
    //   setCountries([...countries]);
    //   updateCountryUsecase(country);
    // };


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
                            <TableCell style={{fontWeight: '700', fontSize: 16, color: 'white'}}>Photo</TableCell>
                            <TableCell style={{fontWeight: '700', fontSize: 16, color: 'white'}}>Video</TableCell>
                        </TableRow>
                        {countries.map((country, index) =>
                            <StyledTableRow hover key={index}>

                                <TableCell style={{fontSize: 16}}>{country.id}</TableCell>
                                <TableCell style={{fontSize: 16}}>{country.name}</TableCell>
                                <TableCell style={{fontSize: 16}}>{country.description}</TableCell>
                                <TableCell style={{fontSize: 16}}>{country.gender}</TableCell>
                                <TableCell style={{fontSize: 16}}>{country.age}</TableCell>
                                <TableCell style={{fontSize: 16}}>
                                    <CardCover>
                                        <CardMedia image={country.image}/>
                                    </CardCover>
                                </TableCell>
                                <TableCell style={{fontSize: 16}}><Link href={country.video}>Video</Link></TableCell>

                            </StyledTableRow>
                        )
                        }

                    </TableBody>
                </Table>
            </Card>

        </>
    );
}

export default Countries;
