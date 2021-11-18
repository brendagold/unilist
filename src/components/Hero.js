import { makeStyles } from "@material-ui/core/styles";
import sizes from "./sizes";

const useStyles = makeStyles((theme) => ({
  hero: {
    position: "relative",
    width: "100%",
    height: "400px",
    left: "0px",
    top: "0px",
    marginTop: "0px",
    backgroundImage: `url(${process.env.PUBLIC_URL + '/university.jpg'})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    backgroundPosition: "center",
    backgroundBlendMode: "multiply",
    [sizes.down("md")]: {
      width: "100%",
      height: "200px",
    },
    [sizes.down("sm")]: {
      width: "100%",
      height: "200px",
    },
  },

  heroContent: {
    position: "absolute",
    left: "0",
    right: "0",
    marginLeft: "auto",
    marginRight: "auto",
    top: "10%",
    padding: theme.spacing(0.5),
    textAlign: "center",
    
    [sizes.down("sm")]: {
      padding: theme.spacing(3),
    },
  },

  heroHeading: {
    color: "#fff",
    textTransform: "uppercase",
    fontSize: "40px",
    [sizes.down("md")]: {
      fontSize: "25px",
    },
    [sizes.down("sm")]: {
      fontSize: "17px",
    },
  },

  heroSub: {
    color: "#fff",
    fontStyle: "italic",
    fontWeight: "bold",
    fontSize: "25px",
    [sizes.down("md")]: {
      fontSize: "15px",
    },
    [sizes.down("md")]: {
      fontSize: "10px",
    },
  },
  searchInput: {
    width: "75%",
  },
}));

const Hero = () => {
  const classes = useStyles();

  return (
    <div className={classes.hero}>
      <div className={classes.heroContent}>
        <h1 className={classes.heroHeading}>List of Nigerian Universities</h1>
        <p className={classes.heroSub}>
          Check for the school right for you
        </p>
      </div>
    </div>
  );
};

export default Hero;
