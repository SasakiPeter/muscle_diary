import React from 'react'
import { withRouter } from 'react-router-dom'
import firebase from '../plugins/firebase'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import {
  Avatar,
  CssBaseline,
  Paper,
  Grid,
  Typography,
} from '@material-ui/core'
import {
  GoogleLoginButton,
  TwitterLoginButton,
  FacebookLoginButton,
} from 'react-social-login-buttons'
import { makeStyles } from '@material-ui/core/styles'
import Form from '../components/Atoms/Form'
import Image from '../images/Muscle_Diary.png'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url(${Image})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
}))

const SignInSide = (props) => {
  const signInWithGoogle = () => {
    // Googleプロバイダオブジェクトのインスタンスを作成
    const provider = new firebase.auth.GoogleAuthProvider()
    // ポップアップウィンドウでログインを行う場合はsignInWithPopupを呼び出す
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((user) => {
        alert('success : ' + user.user.displayName + 'さんでログインしました')
        // console.log(props.history)
        props.history.push('/')
      })
      .catch(() => {
        alert('ログインできませんでした。')
      })
  }

  const alertNotSupport = () => {
    alert('現在ご利用できません。')
  }

  const classes = useStyles()

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            ログイン
          </Typography>
          <GoogleLoginButton
            align="center"
            iconSize={'20'}
            size={'40px'}
            onClick={() => signInWithGoogle()}
            style={{ background: "#CC4024" }}
          >
            <span style={{ fontSize: 16, color: 'white' }}>Googleでログイン</span>
          </GoogleLoginButton>
          <TwitterLoginButton
            align="center"
            iconSize={'20px'}
            size={'40px'}
            onClick={() => alertNotSupport()}
          >
            <span style={{ fontSize: 16 }}>Twitterでログイン</span>
          </TwitterLoginButton>
          <FacebookLoginButton
            align="center"
            iconSize={'20px'}
            size={'40px'}
            onClick={() => alertNotSupport()}
          >
            <span style={{ fontSize: 16 }}>Facebookでログイン</span>
          </FacebookLoginButton>
          <Form />
        </div>
      </Grid>
    </Grid>
  )
}

export default withRouter(SignInSide)
