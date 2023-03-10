import { Box, CircularProgress, Grid, Typography } from '@mui/material';
import LogoRound from './LogoRound';

function Loader() {

    return (
        <>
            <Box className="" style={{ backgroundColor: '#005681', height: '100vh' }}>
                <Grid
                    container
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="stretch"
                    style={{ height: '100vh', width: '100vw' }}
                >
                    <Grid item className="d-flex justify-content-center pt-5 pb-5">
                        <Typography variant="h4" fontFamily={'"Open Sans", sans-serif'} fontWeight={'bold'} color={'#C2EBFF'} >
                            Sepsis Care
                        </Typography>
                    </Grid>
                    <Grid item className="d-flex justify-content-center pt-5 pb-5">
                        <LogoRound />
                    </Grid>
                    <Grid item className="d-flex justify-content-space-around" alignItems={'center'} justifyContent={'center'}>
                        <Typography variant="h5" fontFamily={'"Open Sans", sans-serif'} className="p-4 text-center" width={'70%'} fontWeight={'light'} alignItems={'center'} color={'#C2EBFF'}>
                            Welcome to sepsis care guide.
                        </Typography>
                    </Grid>
                    <Grid item className="d-flex justify-content-space-around" alignItems={'center'} justifyContent={'center'}>
                        <CircularProgress />
                    </Grid>
                </Grid>
            </Box>
        </>
    )

}

export default Loader;