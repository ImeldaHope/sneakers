import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 0;

export default makeStyles((theme) => ({
    appBar: {
        boxShadow: 'true',
        background: 'linear-gradient(to right, #f7ff00, #db36a4)',
        color:'#000',
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
        position: 'static',
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
        
    },
    navLink: {        
        display:'flex',
        textDecoration:'none',
        padding:'5px',
        alignItems: 'end',
        color: '#000',
        fontWeight:'bold',
        
    },
    title: {
        flexGrow: 0,        
        display: 'flex',
        textDecoration: 'none',
        color: '#000',
        fontWeight:'bold',
        fontSize: 30,        
        fontFamily:'Neoneon'
    },
    footer:{
        boxShadow: 'true',
        background: 'linear-gradient(to right, #f7ff00, #db36a4)',
        color:'#000',
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
        position: 'static',
        marginTop:'auto',         
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    footerLink: {        
        display:'flex',
        textDecoration:'none',
        padding:'5px',
        alignItems: 'end',
        color: '#000',
        fontWeight:'bold',
        
    },
    footerTitle: {
        flexGrow: 0,        
        display: 'flex',
        textDecoration: 'none',
        color: '#000',
        fontWeight:'bold',
        fontSize: 30,        
        fontFamily:'Neoneon'
    },
    
}))

    