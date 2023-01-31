import * as React from 'react'
import { styled } from '@mui/system';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import CardHeader from '@mui/material/CardHeader';

const MyComponent = styled('h1')({
    color: 'darkslategray',
    'margin-bottom':'120px'
  });
const MuiButton = styled(Button)({
    color: 'white',
    'font-weight': '600',
    'height':'60px',
    'width':'300px'
});

interface ICMSMenurops {
    TBDprop?: string;
}

const CMSMenu: React.FC<ICMSMenurops> = ({ TBDprop}) => {
    const [dirty, setDirty] = React.useState('');
    return (
      <div>
        <Grid container>
            <Grid item xs={12}>
                <MyComponent>Choose CMS you want to test</MyComponent>
            </Grid>
            <Grid item xs={3}>
                <MuiButton variant="contained" size="large" color="secondary" href={'https://'+window.location.hostname+':9002'}>Show strapi</MuiButton>
            </Grid>
            <Grid item xs={3}>
                <MuiButton variant="contained" size="large" color="secondary" href={'https://'+window.location.hostname+':9004'}>Show strapi admin</MuiButton>
            </Grid>
            <Grid item xs={3}>
                <MuiButton variant="contained" size="large" color="secondary" href={'https://'+window.location.hostname+':9003'}>Show keystone</MuiButton>
            </Grid>
            <Grid item xs={3}>
                <MuiButton variant="contained" size="large" color="secondary" href={'https://'+window.location.hostname+':9002'}>Show keystone admin</MuiButton>
            </Grid>
        </Grid>        
      </div>
    )
}

export default CMSMenu