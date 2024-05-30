import { Box, Typography } from "@mui/material";
import FlexBetween from "./FlexBetween";

const BoxHeader = ({ title, subtitle }) => {
    return (
        <FlexBetween p="5px">
            <Box m="5px auto 1px auto">
                <Typography
                    variant="h4"
                    fontSize="16px"
                    fontWeight="500"
                    color="#f2b455"
                >
                    {title}
                </Typography>
                <Typography variant="h6">{subtitle}</Typography>
            </Box>
        </FlexBetween>
    );
};

export default BoxHeader;
