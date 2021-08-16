import {Divider, Grid, Typography} from "@material-ui/core";

const {makeStyles} = require("@material-ui/core");


const useStyles = makeStyles((theme) => ({
    markdown: {
        ...theme.typography.body2,
        padding: theme.spacing(3, 0),
    },
}));

export const Main = (props) =>{
    const classes = useStyles();
    const { posts, title } = props;


    return (
        <>
            <Grid item xs={12} md={8}>
                <Typography variant="h6" gutterBottom>
                    {title}
                </Typography>
                <Divider />
                {posts.map((post) => (
                    <Markdown className={classes.markdown} key={post.substring(0, 40)}>
                        {post}
                    </Markdown>
                ))}
            </Grid>
        </>
    )

}