import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme)=> ({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        padding: '10px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      heading: {
        color: '#FF0000'
      },
      image: {
        marginLeft: '15px',
      },
      [theme.breakpoints.down('sm')]:{
        reverse: {
          flexDirection: 'column-reverse'
        },
        heading: {
          fontSize: '35px'
        }
      }
}))