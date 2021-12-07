import { useForm } from "react-hook-form";
import React, { useState } from "react";
import LinksBar from "./LinksBar";
import NavBar from "./Header";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  FormControl,
  FormLabel,
  Box,
  Input,
  Text,
  Button,
} from "@chakra-ui/react";
import "../styles/SecretSanta.css";

const Stepper = (props) => {
  const { changePeopleCount } = props;
  return (
    <div>
      <FormControl id="amount">
        <FormLabel>
          Input the number of people you want to invite to the Secret Santa
        </FormLabel>
        <NumberInput min={0} defaultValue={0} onChange={changePeopleCount}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>
    </div>
  );
};

const SomeComponent = ({ person }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  console.log(name, email);
  return (
    <div>
      <FormControl id="email">
        <Text>Enter data for person {person}</Text>
        <FormLabel>Name</FormLabel>
        <Input type="name" placeholder="name" onChange={setName} />

        <FormLabel>Email address</FormLabel>
        <Input type="email" placeholder="email" onChange={setEmail} />
      </FormControl>
    </div>
  );
};

const SantaLogic = (props) => {
  const { onSubmit, handleSubmit, isSubmitting } = props;

  const [peopleCount, setPeopleCount] = useState(0);
  const [peopleMap, setPeopleMap] = useState([]);

  const subtractPerson = () => {
    const newPeople = [...peopleMap];
    newPeople.splice(newPeople.length - 1, 1);
    setPeopleMap(newPeople);
  };

  const changePeopleCount = (value) => {
    setPeopleCount(value);
    if (value > peopleCount) {
      setPeopleMap([...peopleMap, value]);
    } else {
      subtractPerson();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl>
        <Box w={800} p={4} m="20px auto">
          <Stepper changePeopleCount={changePeopleCount} />
          {peopleMap?.map((person, index) => (
            <SomeComponent person={person} key={index} />
          ))}
        </Box>
      </FormControl>
      <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
        Submit
      </Button>
    </form>
  );
};

function SecretSanta() {
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const onSubmit = (values) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        resolve();
      }, 1000);
    });
  };

  return (
    <div className="App">
      <NavBar />
      <SantaLogic
        onSubmit={onSubmit}
        handleSubmit={handleSubmit}
        isSubmitting={isSubmitting}
      />
      <div className="linkBar">
        <LinksBar />
      </div>
    </div>
  );
}

export default SecretSanta;
