import  Button  from "@mui/material/Button";
import Brightness2Icon from '@mui/icons-material/Brightness2';



const Header = () => {
    return(
        <div className="divForShadow">

        <div className="Header">
            <h2>Where in the world?</h2>
            <div>
                <Button variant="text">
                    <Brightness2Icon sx={{ fontSize: 25 }}/>
                    Dark Mode
                </Button>
            </div>
        </div>
        </div>
    )
}

export default Header; 