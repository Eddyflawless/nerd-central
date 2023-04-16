
import { useSelector } from 'react-redux';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homePage';
import LoginPage from './pages/loginPage';
import NotFound from './pages/notfound';
import ProfilePage from './pages/profilePage';
import { useMemo } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme }  from "@mui/material/styles";
import { themeSettings } from "./theme";
//
import { useDispatch } from 'react-redux';
import { setLogin, setPosts } from "./state/index";


function App() {

  const dispatch = useDispatch();
  createWorkingDefaults();

  function createWorkingDefaults() {

    // User populate
    dispatch(setLogin({
        user: {
          _id: 129372,
          firstName: "John",
          lastName: "Doe",
          picturePath: "https://static.dc.com/dc/files/default_images/Char_Thumb_Flash_20190116_5c3fcaaa18f023.90325986.jpg?w=160"
        },
        token: "some-random-token"
    }));

    dispatch(setPosts({
      posts: [
        {
          picturePath: "",
          postId: "1",
          postUserId: 129370,
          name: "obed01",
          description: "heir roster has included the likes of Black Canary, the Huntress, Harley Quinn and Batgirl. Fearsome fighting females who combat the carrion infesting their city. Watch the Birds of Prey soar.",
          location: "New York",
          picturePath: "https://static.dc.com/dc/files/default_images/Char_Thumb_Joker_5c4a42b7ef2011.52750480.jpg?w=160",
          userPicturePath: "https://static.dc.com/dc/files/default_images/Char_Thumb_Batman_20190116_5c3fc4b40fae42.85141247.jpg?w=160",
          likes: 201,
          comments: []
        },
        {
          picturePath: "",
          postId: "1",
          postUserId: 129372,
          name: "Jarred Summer",
          description: "heir roster has included the likes of Black Canary, the Huntress, Harley Quinn and Batgirl. Fearsome fighting females who combat the carrion infesting their city. Watch the Birds of Prey soar.",
          location: "Carlifonia",
          picturePath: "https://static.dc.com/dc/files/default_images/Char_Thumb_Scarecrow_5e4330ad3fdee6.60366328.jpg?w=160",
          userPicturePath: "https://static.dc.com/dc/files/default_images/Char_Thumb_LadyShiva_6088c90d43bfc1.24768839.jpg?w=160",
          likes: 201,
          comments: []
        },
        {
          picturePath: "",
          postId: "1",
          postUserId: 129372,
          name: "13Koranteng",
          description: "heir roster has included the likes of Black Canary, the Huntress, Harley Quinn and Batgirl. Fearsome fighting females who combat the carrion infesting their city. Watch the Birds of Prey soar.",
          location: "Russia",
          picturePath: "https://static.dc.com/dc/files/default_images/Char_Thumb_Catwoman_5c47c984ed1bf1.93808647.jpg?w=160",
          userPicturePath: "https://static.dc.com/dc/files/default_images/Char_Thumb_TimDrake_5f7e2cfdd703a7.65304585.jpg?w=160",
          likes: 201,
          comments: []
        },
        {
          picturePath: "",
          postId: "1",
          postUserId: 129370,
          name: "me_lainin_pie2",
          description: "heir roster has included the likes of Black Canary, the Huntress, Harley Quinn and Batgirl. Fearsome fighting females who combat the carrion infesting their city. Watch the Birds of Prey soar.",
          location: "London",
          picturePath: "https://static.dc.com/dc/files/default_images/Char_Thumb_Nightwing_2_5c50fa380942a3.78305981.jpg?w=160",
          userPicturePath: "https://static.dc.com/dc/files/default_images/Char_Thumb_Bane_5c410f07428e44.78856363.jpg?w=160",
          likes: 201,
          comments: []
        }
      ]
    }))
  }
  

  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode),[mode]));
  //const isAuth = Boolean(useSelector(( state) =>  state.token));
  const isAuth = true;
  //
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<LoginPage />}/>
            <Route path="/home" element={ isAuth ? <HomePage /> :  <Navigate to="/" />}/>
            <Route path="/profile/:userId" element={ isAuth ? <ProfilePage />: <Navigate to="/" />    }/>
            <Route path='*' element={ <NotFound />}/>
          </Routes>

        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
