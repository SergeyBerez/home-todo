import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"
const useStyles = makeStyles((theme) => ({
    table: {
        marginTop: 150,
    },
    th: {
        [theme.breakpoints.up("xs")]: {
            fontSize: ".7rem",
            padding: "5px",
        },
        [theme.breakpoints.up("sm")]: {
              padding: "10px",
        },
        [theme.breakpoints.up("md")]: {
            fontSize: "1rem",
             padding: "16px",
        },
    },
}))

export default function Home({ users }) {
    const classes = useStyles()
    
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.th}>All Users</TableCell>
                        <TableCell className={classes.th} align="right">
                            tasks
                        </TableCell>
                        <TableCell className={classes.th} align="right">
                            date registrashion
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((row) => (
                        <TableRow key={row.id_user}>
                            <TableCell className={classes.th} component="th" scope="row">
                                {row.user_name}
                            </TableCell>
                            <TableCell className={classes.th} align="right">
                                {row.countTask}
                            </TableCell>
                            <TableCell className={classes.th} align="right">
                                {row.time}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
