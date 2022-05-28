import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useHistory } from 'react-router-dom';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import DashboardCustomizeRoundedIcon from '@mui/icons-material/DashboardCustomizeRounded';
import { Button, Grid, TextField } from '@mui/material';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import styles from './adduser.module.css'
import CSVRead from '../../Component/Csv/CsvRead';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function AddUser() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const history = useHistory()
    const [selectedCard, setSelectedCard] = React.useState(0)
    const [userData, setUserData] = React.useState({
        publicId: "",
        publicPassword: "",
        privatePassword: "",
        sparkId: "",
        officeNo: ""
    })

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const redirectHandler = (text) => {
        let tempText = text.replace(" ", "")
        history.push(`/${tempText.trim().toLowerCase()}`)
    }

    const dataHandler = (e) => {
        console.log("e-->", e.target.value)
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
    }
    React.useEffect(() => {
        console.log('userData-->', userData)
    }, [userData])
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Mobile Device Tracker
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    {['Dashboard', 'Add User', 'Send email', 'Drafts'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton onClick={() => {
                                redirectHandler(text)
                            }}>
                                <ListItemIcon >
                                    {index === 0 && <DashboardCustomizeRoundedIcon />}
                                    {index === 1 && <AddBoxRoundedIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <Main open={open}>
                <DrawerHeader />
                <Typography paragraph>
                    <Grid container spacing={4}>
                        <Grid item md={6}>
                            <Box style={{
                                background: '#5823d1',
                                boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
                                backdropFilter: 'blur( 6.5px )',
                                borderRadius: '10px',
                                border: '1px solid rgba( 255, 255, 255, 0.18 )',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: '180px',
                                color: '#FFFFFFF',
                                cursor: 'pointer'
                            }} onClick={() => {
                                setSelectedCard(0)
                            }}>
                                {/* <AddCircleOutlineRoundedIcon /> */}
                                Create User
                            </Box>
                        </Grid>
                        <Grid item md={6}>
                            <Box style={{
                                background: '#5823d1',
                                boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
                                backdropFilter: 'blur( 6.5px )',
                                borderRadius: '10px',
                                border: '1px solid rgba( 255, 255, 255, 0.18 )',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: '180px',
                                color: '#FFFFFFF',
                                cursor: 'pointer'
                            }} onClick={() => {
                                setSelectedCard(1)
                            }}>
                                Upload .csv file for User
                            </Box>
                        </Grid>
                    </Grid>
                    {
                        selectedCard === 0 && (
                            <Grid container spacing={4} sx={{ marginTop: '30px' }}>
                                <Grid item md={6}>
                                    <Typography variant='h4'>Add Account Details</Typography>
                                </Grid>
                                <Grid container sx={{marginLeft:"33px"}}>
                                    <Grid item>
                                        <Typography>Spark Id</Typography>
                                        <TextField
                                            type="text"
                                            margin="normal"
                                            required
                                            fullWidth
                                            value={userData.sparkId}
                                            onChange={(e) => dataHandler(e)}
                                            id="sparkId"
                                            name="sparkId"
                                            autoComplete="sparkId"
                                            autoFocus
                                        />
                                        <Typography>Office No</Typography>
                                        <TextField
                                            type="number"
                                            margin="normal"
                                            required
                                            fullWidth
                                            value={userData.officeNo}
                                            onChange={(e) => dataHandler(e)}
                                            id="officeNo"
                                            name="officeNo"
                                            autoComplete="officeNo"
                                            autoFocus
                                        />
                                        <Typography>Password</Typography>
                                        <TextField
                                            type="password"
                                            margin="normal"
                                            required
                                            fullWidth
                                            value={userData.publicPassword}
                                            onChange={(e) => dataHandler(e)}
                                            id="publicPassword"
                                            name="publicPassword"
                                            autoComplete="publicPassword"
                                            autoFocus
                                        />
                                    </Grid>
                                </Grid>
                                <Button sx={{marginLeft:"33px !important", color: '#fff'}} className={styles.register_add_user} >Register</Button>
                            </Grid>
                        )
                    }
                    {
                        selectedCard === 1 && (
                            <Grid container sx={{ marginTop: '30px' }}>
                                <Grid item md={12}>
                                    <CSVRead />
                                </Grid>
                            </Grid>
                        )
                    }
                </Typography>
            </Main>
        </Box >
    );
}
