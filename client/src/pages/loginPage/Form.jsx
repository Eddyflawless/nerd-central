import {
    Box,
    Button,
    TextField,
    useMediaQuery,
    Typography,
    useTheme
} from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import { useState, useCallback } from "react";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Dropzone from "react-dropzone";
import FlexBetwwen from "../../components/FlexBetween";
import config from "../../app.config";
import { setLogin } from "../../state";
import { createRequestHelper } from "../../utils/common";
import { useEffect } from "react";

const initialValues =  {
    firstName: "",
    lastName: "",
    email: "",
    location: "",
    occupation: "",
    password: "",
};
// TODO: extract this schema into a standalone file
const schemas = {
    loginOrRegister: {
        schema: {
            firstName: yup.string().required("required"),
            lastName: yup.string().required("required"),
            email: yup.string().email("invalid email").required("required"),
            password: yup.string().required("required"),
            location: yup.string().required("required"),
            occupation: yup.string().required("required"),
            picture: yup.string().required("required")
        },
       
        initialValuesLogin: {
            email: initialValues.email,
            password: initialValues.password,
        },
        initialValuesRegister: {
            ...initialValues
        }
    } 
}

const { initialValuesLogin, initialValuesRegister } = schemas.loginOrRegister;

const registerSchema = yup.object().shape({
    ...schemas.loginOrRegister.schema
})

const loginSchema = yup.object().shape({
    email: schemas.loginOrRegister.schema["email"],
    password: schemas.loginOrRegister.schema["password"]
})

console.log("loginSchema", {
    ...schemas.loginOrRegister.schema
});
//TODO: extract constants to separate file

const settings = {
    pages: {
        LOGIN: "login",
        REGISTER: "register"
    }
}


const { pages: pageSettings } = settings;

const createUri = createRequestHelper(config.api);

const Form = () => {
    const [ pageType, setPageType ] = useState("login");
    const { palette } = useTheme();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isNonMobile = useMediaQuery("(min-width: 600px)");

    const getIsPageType = useCallback((currentPageType) => (currentPageType === pageType ?  true : false),[pageType])

    const register = useCallback(async (values, onSubmitProps) => {

        const formData =  new FormData();


        for(let value in values) {
            formData.append(value, values[value]);
        }

        formData.append("picturePath", values.picture?.name);

        // TODO: create a api handle for endpoints
        const endpoint = createUri("auth/register");
        const response = await fetch(endpoint, { method: "POST", body: formData })
        .then(res => res.json());

        onSubmitProps.resetForm();

        if(response) {
            setPageType(pageSettings.LOGIN);
        }
    },[])

    const login = useCallback(async (values, onSubmitProps) => { 

        // TODO: create a api handle for endpoints
        const endpoint = createUri("auth/login");
        const response = await fetch(endpoint, { 
            method: "POST", 
            body: JSON.stringify(values)
        })
        .then(res => res.json());

        onSubmitProps.resetForm();

        if(response) {
            dispatch(setLogin({
                user: response.user,
                token: response.token
            }))
            setPageType(pageSettings.LOGIN);
            navigate("/home");
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const handleFormSubmit = async (values, onSubmitProps) => ( getIsPageType(pageSettings.LOGIN) ? login(values, onSubmitProps) : register(values, onSubmitProps))

    return (
        <Formik 
        onSubmit={handleFormSubmit} 
        initialValues={ getIsPageType(pageSettings.LOGIN)? initialValuesLogin: initialValuesRegister }
        validationSchema={getIsPageType(pageSettings.LOGIN)? loginSchema: registerSchema}>

        {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
            setFieldValue,
            resetForm
        }) => (
            <form onSubmit={handleSubmit}>
                <Box display="grid" gap="30px" gridTemplateColumns="reoeat(4, minmax(0, 1fr)"
                sx={{
                    "& > div": { gridColumn: isNonMobile? undefined : "span 4"}
                }}>

                    { getIsPageType(pageSettings.REGISTER) && (
                        <>
                            <TextField 
                            label="First Name"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.firstName}
                            name="firstName"
                            error={Boolean(touched.firstName) && Boolean(errors.firstName)}
                            helperText={touched.firstName && errors.firstName}
                            sx={{ gridColumn: "span 2"}}
                              />
                            <TextField 
                            label="Last Name"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.lastName}
                            name="lastName"
                            error={Boolean(touched.lastName) && Boolean(errors.lastName)}
                            helperText={touched.lastName && errors.lastName}
                            sx={{ gridColumn: "span 2"}}
                              />
                            <TextField 
                            label="Location"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.location}
                            name="location"
                            error={Boolean(touched.location) && Boolean(errors.location)}
                            helperText={touched.location && errors.location}
                            sx={{ gridColumn: "span 4"}}
                              />
                            <TextField 
                            label="Occupation"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.occupation}
                            name="occupation"
                            error={Boolean(touched.occupation) && Boolean(errors.occupation)}
                            helperText={touched.occupation && errors.occupation}
                            sx={{ gridColumn: "span 4"}}
                              />
                            <Box 
                            gridColumn="span 4" 
                            border={`ipx  solid ${palette.neutral.medium}`}
                            borderRadius="5px"
                            p="1rem"
                            >
                                <Dropzone
                                acceptedFiles=".jpg,.jpeg,.png"
                                multiple={false}
                                onDrop= { (acceptedFiles) => setFieldValue("picture", acceptedFiles[0])}
                                >
                                    {({getRootProps, getInputProps}) => (
                                        <Box 
                                        {...getRootProps()}
                                        border={`2px dashed ${palette.primary.main}`}
                                        p="1rem"
                                        sx={{ "&:hover": { cursor: "pointer" }}}
                                        >
                                            <input {...getInputProps() }/>
                                            { !values.picture ? (
                                                <p>Add Picture here</p>
                                            ): (
                                                <FlexBetwwen>
                                                    <Typography>{values.picture?.name}</Typography>
                                                    <EditOutlinedIcon/>
                                                </FlexBetwwen>
                                            )}

                                        </Box>
                                    )}

                                </Dropzone>
                            </Box>  
                        </>
                    )}

                    <TextField 
                    label="Email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                    name="email"
                    error={Boolean(touched.email) && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                    sx={{ gridColumn: "span 4"}}
                        />

                    <TextField 
                    label="Password"
                    type="password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.password}
                    name="password"
                    error={Boolean(touched.password) && Boolean(errors.password)}
                    helperText={touched.password && errors.password}
                    sx={{ gridColumn: "span 4"}}
                        /> 

                    {/* Buttons */}

                    <Box sx={{  width: 1 }}>
                        <Button  type="submit" sx={
                            { m: "2rem 0", p: "1rem", backgroundColor: palette.primary.main, color: palette.background.alt, "&:hover": { color: palette.primary.main}}
                            }
                        >
                            { getIsPageType(pageSettings.LOGIN)? "Login" : "Register"}
                        </Button>
                        <Typography onClick={()=> {
                            setPageType(getIsPageType(pageSettings.LOGIN)? pageSettings.REGISTER : pageSettings.LOGIN );
                            resetForm();
                        }}
                        sx={{
                            textDecoration: "underline",
                            color: palette.primary.main,
                            "&:hover": {
                                cursor: "pointer",
                                color: palette.primary.light,
                            }
                        }}
                        >
                            { getIsPageType(pageSettings.LOGIN) ? "Don't have an account? Sign Up here": "Already have an account? Login here"}
                        </Typography>
                    </Box>

                </Box>
            </form>
        )}

        </Formik>
    )

}

export default Form;