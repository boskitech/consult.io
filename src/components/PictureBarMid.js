import { Button, Grid } from "@mui/material"
import { styled } from "@mui/system"
import BannerImg from '../assets/docimg_3.jpg';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const PictureBarMid = () => {

    const StyleGridContainer = styled(Grid)(({theme})=>({
        height:'500px',
        width:'70%',
        margin:'200px auto',
        display: 'flex',
        justifyContent:'space-between',
        [theme.breakpoints.down('xl')]:{
            width:"80%",
            marginTop:'-100px',
        },
        [theme.breakpoints.down('sm')]:{
            width:"90%",
            marginTop:'0px',
            marginBottom:'500px',
        }
    }))

    const StyleImageBar = styled('div')(({theme}) => ({
        width:'90%',
        height:'500px',
        borderRadius: '40% 10px',
        backgroundImage: `url(${BannerImg})`,
        backgroundSize: '800px 500px',
        backgroundPosition:'center',
        marginTop: '0px',
        backgroundRepeat:'no-repeat',
        [theme.breakpoints.down('xl')]:{
            backgroundPosition:'center top',
            height:'400px'
        },
        [theme.breakpoints.down('sm')]:{
            width:"100%",
            height:'300px',
            backgroundSize: '120% 100%',
            borderRadius: '10px 50%',
            marginTop: '50px',
        },
        [theme.breakpoints.down('lg')]:{
            width:"100%",
            backgroundPosition:'center top',
        },
    }))

    const StyledHeaderText = styled('div')(({theme}) =>({
        color:'#07163a',
        fontSize:'50px',
        textAlign:'justify',
        fontWeight:560,
        [theme.breakpoints.down('xl')]:{
            fontSize:'35px'
        },
        [theme.breakpoints.down('sm')]:{
            fontSize:'25px',
            marginTop:'15px',
        }
    }))

    const StyledBodyText = styled('div')(({theme}) =>({
        fontSize:'17px',
        textAlign:'justify',
        lineHeight:'25px',
        marginTop:'20px',
        [theme.breakpoints.down('xl')]:{
            fontSize:'15px',
            lineHeight:'25px',
            marginTop:'10px',

        }
    }))

    const StyledBodyButton = styled(Button)(({theme})=>({
        width:'80px',
        height:'80px',
        borderRadius:'20px',
        backgroundColor:'#07163a',
        color: '#fff',
        fontWeight: '900',
        marginTop: '20px',
        '&:hover':{backgroundColor:'#2f53a5', color:'white'},
        [theme.breakpoints.down('xl')]:{
            width:'50px',
            height:'50px',
            borderRadius:'10px',
            marginTop: '15px',
        },
        [theme.breakpoints.down('sm')]:{
            width:'10px',
            fontSize:'10px',
            height:'60px',
            borderRadius:'10px',
            marginTop: '15px',
            padding:'   '
        }

    }))

  return (
    <StyleGridContainer container direction="row-reverse">
        <Grid item sm={5} xs={12}> 
            <StyleImageBar/>
        </Grid>
        <Grid item sm={6} xs={12}>
            <StyledHeaderText>
                Know About Our Special Treatments & Tricks
            </StyledHeaderText>
            <StyledBodyText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            </StyledBodyText>
            <Grid container direction="row">
                <Grid item sm={2.5} xs={3}>
                    <StyledBodyButton>
                        <ArrowRightAltIcon sx={{color:'white'}}/>
                    </StyledBodyButton>
                </Grid>
                <Grid item sm={7} xs={9}>
                    <StyledBodyText>
                        <b>Lorem ipsum dolor sit amet, consectetur</b> adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.               
                        </StyledBodyText>
                </Grid>
            </Grid>
            <Grid container direction="row">
                <Grid item sm={2.5} xs={3}>
                    <StyledBodyButton>
                        <ArrowRightAltIcon sx={{color:'white'}}/>
                    </StyledBodyButton>
                </Grid>
                <Grid item sm={7} xs={9}> 
                    <StyledBodyText>
                        <b>Lorem ipsum dolor sit amet, consectetur</b>, adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.               
                        </StyledBodyText>
                </Grid>
            </Grid>
            <Grid container direction="row">
                <Grid item sm={2.5} xs={3}>
                    <StyledBodyButton>
                        <ArrowRightAltIcon sx={{color:'white'}}/>
                    </StyledBodyButton>
                </Grid>
                <Grid item sm={7} xs={9}>
                    <StyledBodyText>
                        <b>Lorem ipsum dolor sit amet, consectetur</b>, adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </StyledBodyText>
                </Grid>
            </Grid>
        </Grid>
        
    </StyleGridContainer>   
  )
}

export default PictureBarMid