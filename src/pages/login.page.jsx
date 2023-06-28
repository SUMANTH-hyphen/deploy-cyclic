import React, { useState } from "react";
import { Alert, Box, Button, Snackbar, Stack, TextField, Typography } from "@mui/material";
import LanguageIcon from '@mui/icons-material/Language';
import AppleIcon from '@mui/icons-material/Apple';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import illustration from "../illustration1.png"
import { LoginService } from "../services/login.services";
import LoadingButton from '@mui/lab/LoadingButton';
import { useNavigate } from "react-router-dom";


const LoginPage = () => {

    const [ credentials, setCredentials ] = useState({username: "", password: ""})
    const [ load, setLoad ] = useState(false) 
    const navigate = useNavigate()

    const vertical= 'top'
    const horizontal= 'center'
    
    const [open, setOpen] = useState(false)
    
    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (e) =>{
        if(e.target.name === "username"){
            setCredentials({...credentials, username: e.target.value })
        }
        else if(e.target.name === "password"){
            setCredentials({...credentials, password: e.target.value})
        }
    }

    const handleSubmit = async () =>{
        setLoad(true)
        const {token, error} = await LoginService(credentials);
        setLoad(false)
        if(error){
            console.log("Something went wrong")
            return error
        }
        if(!token || !token?.length ){
            console.log("Not a valid user")
            setOpen(true)
        }
        if(token?.length){  
            localStorage.setItem("token", token)
            navigate("/vouchers")
        }
    }

    return (
        <Box sx={{
            display: "row",
            
           
            justifyContent: "center",
            alignItems: "center",
            minHeight: "80vh",
            backgroundColor: '#FCFDFF',
           
        }}>
            <Snackbar anchorOrigin={{vertical, horizontal}} open={open} autoHideDuration={2000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                    Not a valid user
                </Alert>
            </Snackbar>
            <Box component="header" 
                sx={{
                    display: "flex",
                    height: "40px",
                    padding: { md: "20px 70px", xs: "20px 40px" },
                    justifyContent: "flex-end",
                    alignItems: "center",
                    gap: "236px",
                    marginTop:"0px",
                    flexShrink: 0,
                    
            }}>
                <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "20px",
                }}>
                    <LanguageIcon fontSize="medium"/>
                    <Button size="small" variant="outlined">Sign up</Button>
                </Box>
            </Box>
            <Box sx={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                minHeight: "90vh",
                flexDirection: { md: "row" },
                overflow: "hidden",
            }}> 
                <Box
                    component="div"
                    sx={{
                        display: "inline-flex",
                        padding: "5%",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        alignItems: "center",
                        borderRadius: "30px",
                        bgcolor: 'background.paper',
                        boxShadow: "10px 10px 25px #aaaaaa" 
                    }}
                >
                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "32px",
                    }}>
                        <Box sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: "12px",
                            textAlign: 'center'
                        }}>
                            <Typography variant="h4" fontWeight="600">Sign in</Typography>
                            {/* <Typography>Hey, Enter your details to loginto your account</Typography> */}
                        </Box>
                        
                        <Box sx={{
                            
                        }}>
                            <TextField 
                                name="username"
                                label="Username"
                                type="email"
                                size="small"
                                required
                                value={credentials.username}
                                sx={{
                                    width: '100%',
                                    marginBottom: "5%"
                                }}
                                onChange={(e)=>handleChange(e)}
                            />
                            <TextField 
                                name="password"
                                label="Password"
                                type="password"
                                size="small"
                                required
                                value={credentials.password}
                                sx={{
                                    width: '100%',
                                    marginBottom: "5%"
                                }}
                                onChange={(e)=>handleChange(e)}
                            />
                            
                        </Box>
                        <Box sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: "32px",
                        }}>
                            <LoadingButton
                                size="small" 
                                variant="contained" 
                                fullWidth 
                                loading={load}
                                onClick={()=> handleSubmit()}
                                >
                                    Sign in
                            </LoadingButton>
                            
                            <Typography variant="caption" display='block'>Don’t have an account? <b>Register Now</b> </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box
                    component="img"
                    sx={{marginBottom:"0px",
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: { xs: 'center', md: 'none', sx: 'none' },
                        minWidth: { md: 350 },
                        width: 420,
                        height: 450,
                        // maxHeight: { xs: 233, md: 167 },
                        // maxWidth: { xs: 350, md: 250 },
                        flexShrink: 0,
                        [`@media (max-width: 910px)`]: {
                            display: 'none'},
                            [`@media (max-width: 412px)`]: {
                                padding: '25%'}
                    }}
                    alt="The house from the offer."
                    src={illustration}
                >
                </Box>
            </Box>
        </Box>
    );
};

export default LoginPage;
