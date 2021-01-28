// --- Post bootstrap -----
import React from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import {
    Fab,
    Box,
    Link,
    Backdrop,
    Typography,
    CircularProgress
} from '@material-ui/core'
import CheckIcon from '@material-ui/icons/Check'
import { green } from '@material-ui/core/colors'

const styles = (theme) => ({
    wrapper: {
        margin: theme.spacing(1),
        position: 'relative',
    },
    buttonSuccess: {
        backgroundColor: green[500],
        '&:hover': {
            backgroundColor: green[700],
        },
    },
    fabProgress: {
        color: green[500],
        position: 'absolute',
        top: -6,
        left: -6,
        zIndex: 1,
    },
    buttonProgress: {
        color: green[500],
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    },
})

function Index(props) {
    const { classes, onLogin } = props

    const [loading, setLoading] = React.useState(true)
    const [success, setSuccess] = React.useState(true)
    const [text, setText] = React.useState("正在登录")

    const buttonClassname = clsx({
        [classes.buttonSuccess]: success,
    });

    return (
        <Backdrop style={{
            zIndex: 999,
            color: '#fff',
        }} open={true} >
            <Box
                width={1}
                display="flex"
                flexDirection="column"
                alignItems="center"
            >
                <div className={classes.wrapper}>
                    <Fab
                        aria-label="save"
                        color="inherit"
                        className={buttonClassname}
                    >
                        {success ? <CheckIcon /> : <Link>{'返回'}</Link>}
                    </Fab>
                    {loading ? <CircularProgress size={68} className={classes.fabProgress} /> : null}
                </div>
                <Box width={1} marginTop={2} display="flex" justifyContent="center">
                    <Typography>
                        {text}
                    </Typography>
                </Box>
            </Box>
        </Backdrop>
    )
}

Index.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Index)