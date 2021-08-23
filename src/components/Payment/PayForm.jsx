import React, { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  useForm,
  Controller,
  FormProvider,
  useFormContext,
} from "react-hook-form";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { useProducts } from "../../contexts/ProductContext";

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
    backgroundColor: "#EC87B2",
    width: "24vw",
    margin: "1vw",
    color: "white",
  },
  stepper: {
    padding: "50px",
    margin: "0 auto",
    width: "60vw",
    // borderRadius: "12px",
    backgroundColor: "transparent",
    color: "white",
  },
  formBack: {
    padding: "20px",
    // display: "flex",
    // msFlexDirection: "column",
    // justifyContent: "center",
    // alignItems: "center",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    minHeight: "100vh",
    // height: "90vh",
    // marginTop: "4.4rem",
    backgroundImage: `url(${"https://d2cstorage-a.akamaihd.net/atl/21pilots/livestream/merchbgsoifjosirfjoisgvouggoejirgsoiengofina.jpg"})`,
  },
}));

function getSteps() {
  return ["Personal information", "Payment"];
}
const BasicForm = () => {
  const { control } = useFormContext();
  const { cart } = useProducts();
  return (
    <>
      <h1 style={{ textAlign: "center" }}> Total price: {cart.totalPrice}$</h1>
      <Controller
        control={control}
        name="firstName"
        render={({ field }) => (
          <TextField
            color="secondary"
            id="first-name"
            label="First Name"
            variant="outlined"
            placeholder="Enter Your First Name"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="lastName"
        render={({ field }) => (
          <TextField
            color="secondary"
            id="last-name"
            label="Last Name"
            variant="outlined"
            placeholder="Enter Your Last Name"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="emailAddress"
        render={({ field }) => (
          <TextField
            color="secondary"
            id="email"
            label="E-mail"
            variant="outlined"
            placeholder="Enter Your E-mail Address"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="phoneNumber"
        render={({ field }) => (
          <TextField
            color="secondary"
            id="phone-number"
            label="Phone Number"
            variant="outlined"
            placeholder="Enter Your Phone Number"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="address1"
        render={({ field }) => (
          <TextField
            color="secondary"
            id="address1"
            label="Address "
            variant="outlined"
            placeholder="Enter Your Address "
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
    </>
  );
};

const PaymentForm = () => {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [focus, setFocus] = useState("");
  const { cart } = useProducts();
  return (
    <>
      {/* <h1 style={{ textAlign: "center" }}> Total price: {cart.totalPrice}$</h1> */}
      <div style={{ display: "block" }}>
        <Cards
          number={number}
          name={name}
          expiry={expiry}
          cvc={cvc}
          focused={focus}
        />
        <form action="#" style={{ margin: "20px" }}>
          <TextField
            color="secondary"
            type="tel"
            name="number"
            placeholder="Card Number"
            fullWidth
            margin="normal"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            onFocus={(e) => setFocus(e.target.name)}
          />

          <TextField
            color="secondary"
            type="tel"
            name="name"
            placeholder="Name"
            fullWidth
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onFocus={(e) => setFocus(e.target.name)}
          />

          <TextField
            color="secondary"
            type="text"
            name="expiry"
            placeholder="MM/YY Expiry"
            fullWidth
            margin="normal"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            onFocus={(e) => setFocus(e.target.name)}
          />

          <TextField
            color="secondary"
            type="tel"
            name="cvc"
            placeholder="CVC"
            fullWidth
            margin="normal"
            value={cvc}
            onChange={(e) => setCvc(e.target.value)}
            onFocus={(e) => setFocus(e.target.name)}
          />
        </form>
      </div>
    </>
  );
};

function getStepContent(step) {
  switch (step) {
    case 0:
      return <BasicForm />;
    case 1:
      return <PaymentForm />;
    default:
      return "unknown step";
  }
}

const PayForm = () => {
  const classes = useStyles();
  const methods = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      emailAddress: "",
      phoneNumber: "",
      address1: "",
    },
  });

  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const isStepOptional = (step) => {
    return step === 1 || step === 2;
  };

  const handleNext = (data) => {
    console.log(data);
    if (activeStep == steps.length - 1) {
      setActiveStep(activeStep + 1);
    } else {
      setActiveStep(activeStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <div className={classes.formBack}>
      <Stepper
        className={classes.stepper}
        alternativeLabel
        activeStep={activeStep}
      >
        {steps.map((step, index) => {
          const labelProps = {};
          const stepProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography
                variant="caption"
                align="center"
                style={{ display: "block" }}
              ></Typography>
            );
          }
          return (
            <Step {...stepProps} key={index}>
              <StepLabel {...labelProps}>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <Typography className={classes.stepper} variant="h3" align="center">
          Thank You For Your Purchase
        </Typography>
      ) : (
        <>
          <FormProvider {...methods}>
            <form
              className={classes.stepper}
              onSubmit={methods.handleSubmit(handleNext)}
            >
              {getStepContent(activeStep)}

              <Button
                className={classes.button}
                disabled={activeStep === 0}
                onClick={handleBack}
              >
                back
              </Button>
              <Button
                className={classes.button}
                variant="contained"
                // color="secondary"
                type="submit"
              >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </form>
          </FormProvider>
        </>
      )}
    </div>
  );
};

export default PayForm;
