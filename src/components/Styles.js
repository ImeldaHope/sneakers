import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 0;

export default makeStyles((theme) => ({
    appBar: {
        boxShadow: 'none',
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
        position: 'static',
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    }}))

    