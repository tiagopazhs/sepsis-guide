import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

export default function Question(props) {

    return (
        <Box style={{ backgroundColor: "white" }} sx={{ borderStyle: 'solid', borderColor: props.border, boxShadow: 3, borderRadius: 2, "&:hover": { boxShadow: 6, transform: "translateY(-2px)" } }} hidden={props.hidden}>
            <ListItem direction="row" alignItems="center" sx={{ boxShadow: 3, borderRadius: 2, "&:hover": { boxShadow: 6, transform: "translateY(-2px)", backgroundColor: '#F5F5F5', cursor: 'pointer' } }} >
                <ListItemAvatar>
                    <Avatar alt={props.alternative} sx={{ bgcolor: 'gray' }}>{props.alternative}</Avatar>
                </ListItemAvatar>
                <Typography variant="body2">
                    {props.text}
                </Typography >
            </ListItem>
        </Box>
    );
}