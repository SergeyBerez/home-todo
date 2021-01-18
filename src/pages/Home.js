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
    root: { marginTop: 70 },
    table: {
        minWidth: 650,
        marginTop: 70,
    },
}))

export default function Home({ users }) {
    const classes = useStyles()
console.log(users);
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>All Users</TableCell>
                        <TableCell align="right">tasks</TableCell>
                        <TableCell align="right">date registrashion</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell component="th" scope="row">
                                {row.user_name}
                            </TableCell>
                            <TableCell align="right">{row.countTask}</TableCell>
                            <TableCell align="right">{row.time}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
