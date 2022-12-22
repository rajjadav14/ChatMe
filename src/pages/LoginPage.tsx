import Stack from "@mui/material/Stack";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import MmsIcon from "@mui/icons-material/Mms";
import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Login from "../component/auth/Login";
import SignUp from "../component/auth/SignUp";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ pt: 2 }}>
          <Typography component={"span"}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
  };
}
const useStyles = makeStyles((theme?: any) => ({
  tabs: {
    "& .MuiButtonBase-root": {
      textTransform: "none",
      color: "black",

      borderColor: "black",

      fontSize: "20px",
    },
    "& .MuiTabs-indicator": {
      display: "none",
    },
    "& .MuiTab-root.Mui-selected": {
      color: "Turquoise",
      textTransform: "none",
    },
  },
}));

function LoginPage() {
  const [tab, setTab] = React.useState<number>(1);

  const classes = useStyles();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };
  return (
    <Container
      maxWidth="xs"
      sx={{
        border: 1,
        //minHeight: "850px",
        my: 4,
        borderRadius: 4,
        opacity: 0.8,
        background: "rgb(38,99,84)",
      }}
    >
      <Box
        component="div"
        sx={{
          border: 1,
          p: 3,
          mt: 4,
          // width: "100%",
          display: "flex",
          justifyContent: "center",
          opacity: 1,
        }}
      >
        <Stack direction="row" alignItems="center" gap={1}>
          <Typography
            component={"span"}
            variant="h3"
            sx={{
              fontWeight: "bold",
              fontStyle: "oblique",
              color: "#acb080",
            }}
          >
            ChatMe
          </Typography>
          <MmsIcon fontSize="large" sx={{ fontSize: 50, color: "#33ff33" }} />
        </Stack>
      </Box>
      <Box
        component="div"
        sx={{
          border: 1,
          pt: 2,
          mb: 4,
          //width: "100%",
          display: "flex",
          opacity: 1,
          justifyContent: "center",
          height: "auto",
        }}
      >
        <Box
          sx={{
            //width: "100%",
            borderColor: "divider",
          }}
        >
          <Tabs
            value={tab}
            selectionFollowsFocus={false}
            className={classes.tabs}
            // TabIndicatorProps={{
            //   sx: { display:"none", backgroundColor:"black",height: "10px"},
            // }}
            onChange={handleChange}
            variant="fullWidth"
          >
            <Tab
              label="Login"
              sx={{
                border: 2,
                marginRight: 3,
                borderRadius: 4,
                backgroundColor: "rgb(75,132,117)",
              }}
              {...a11yProps(0)}
            />
            <Tab
              label="Sign Up"
              sx={{
                border: 2,
                borderRadius: 4,
                backgroundColor: "rgb(75,132,117)",
              }}
              {...a11yProps(1)}
            />
          </Tabs>

          <TabPanel value={tab} index={0}>
            <Login />
          </TabPanel>
          <TabPanel value={tab} index={1}>
            <SignUp />
          </TabPanel>
        </Box>
      </Box>
    </Container>
  );
}

export default LoginPage;
