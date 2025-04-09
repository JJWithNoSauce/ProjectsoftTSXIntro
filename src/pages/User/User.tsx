import { Table, TableBody, TableCell, TableHead, TableRow } from "../../components/Table"
import { userList } from "./userList";

function User() {
    return ( 
        
        <div>
            
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">
                                Name
                            </TableCell>
                            <TableCell align="center">
                                Age
                            </TableCell>
                            <TableCell align="center">
                                BirthDay
                            </TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {userList.map((user, index) => (
                            <TableRow key={index}>
                                <TableCell>{user.name}</TableCell>
                                <TableCell align="right">{user.age}</TableCell>
                                <TableCell>{user.birth}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>

                </Table>
        </div> );
}

export default User;