import React from 'react';
import './Nav.css'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';
import PublishIcon from '@material-ui/icons/Publish';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles((theme) => ({
  drawerPaper: { 
    width: 'inherit',
    backgroundColor: '#3f51b5' 
  }
}))

export default function Nav() {
  const classes = useStyles();
  return (
    <div style={{ display: 'flex' }}>
      <Drawer
        style={{ width: '240px' }}
        variant="persistent"
        anchor="left"
        open={true}
        classes={{ paper: classes.drawerPaper }}
      >

        <List>

          <Link className='StatusItem'>
            <ListItem style={{ background: '#fff' }}>
              <ListItemIcon>
                <AccountCircleIcon style={{ color: '#47CF29' }} />
              </ListItemIcon>
              <ListItemText primary={"Cauê Zaratin"} />
            </ListItem>
          </Link>

          <Link className='linkItem'>
            <ListItem button>
              <ListItemIcon>
                <HomeIcon style={{ color: '#fff' }}/>
              </ListItemIcon>
              <ListItemText primary={"Home"} />
            </ListItem>
          </Link>

          <Link className='linkItem'>
            <ListItem button>
              <ListItemIcon>
                <PublishIcon style={{ color: '#fff' }}/>
              </ListItemIcon>
              <ListItemText primary={"Upload"} />
            </ListItem>
          </Link>

          <Link to="/" className='linkItem-logout'>
            <ListItem button>
              <ListItemIcon>
                <ExitToAppIcon style={{ color: '#fff' }}/>
              </ListItemIcon>
              <ListItemText primary={"Logout"} />
            </ListItem>
          </Link>

        </List>
      </Drawer>
    </div>
  );
}
