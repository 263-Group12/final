import {Grid, Paper} from "@material-ui/core";
import React from "react";
import "./styles/GridEntry.css"

function GridEntry(props: any) {
    if (props.left) {
        return (
            <Grid container spacing={3} className={"Content"}>
                <Grid item xs={6}>
                    <Paper className="GridUnit" elevation={2}>
                        {props.children}
                    </Paper>
                </Grid>
                <Grid item xs={6}/>
            </Grid>
        );
    } else if (props.right) {
        return (
            <Grid container spacing={3} className={"Content"}>
                <Grid item xs={6}/>
                <Grid item xs={6}>
                    <Paper className="GridUnit" elevation={2}>
                        {props.children}
                    </Paper>
                </Grid>
            </Grid>
        );
    } else {
        return (
            <Grid container spacing={3} className={"Content"}>
                <Grid item xs={1}/>
                <Grid item xs={10}>
                    <Paper className="GridUnit" elevation={2}>
                        {props.children}
                    </Paper>
                </Grid>
                <Grid item xs={1}/>
            </Grid>
        )
    }
}

export default GridEntry;