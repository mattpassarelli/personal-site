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

//Get the count of people playing
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

//dynamically generated input fields for each person
const IndividualPerson = (props) => {
  const { person, peopleMap } = props;
  return (
    <div>
      <FormControl id="email">
        <Text>Enter data for person {person}</Text>
        {/* This will come in handy later when we do the randomizing logic */}
        {person === "1" && (
          <Text fontSize="xs">
            Enter your info here to avoid issues with the randomizing
          </Text>
        )}
        <FormLabel>Name</FormLabel>
        <Input
          type="name"
          placeholder="name"
          onChange={(e) => {
            const obj = peopleMap.find((o) => o.index === person);
            obj.name = e.target.value;
          }}
        />

        <FormLabel>Email address</FormLabel>
        <Input
          type="email"
          placeholder="email"
          onChange={(e) => {
            const obj = peopleMap.find((o) => o.index === person);
            obj.email = e.target.value;
          }}
        />
      </FormControl>
    </div>
  );
};

const SantaLogic = (props) => {
  const { onSubmit, isSubmitting = false } = props;

  const [peopleCount, setPeopleCount] = useState(0);
  const [peopleMap, setPeopleMap] = useState([]);

  //if removing a person, remove from the peopleMap
  const subtractPerson = () => {
    const newPeople = [...peopleMap];
    newPeople.splice(newPeople.length - 1, 1);
    setPeopleMap(newPeople);
  };

  //if adding a person, add to the peopleMap
  const changePeopleCount = (value) => {
    setPeopleCount(value);
    //check to see if we're subtracting or adding
    if (value > peopleCount) {
      setPeopleMap([...peopleMap, { index: value, name: "", email: "" }]);
    } else {
      subtractPerson();
    }
  };

  return (
    <div>
      <Box w={800} p={4} m="20px auto">
        <Stepper changePeopleCount={changePeopleCount} />
        {peopleMap?.map((person) => (
          <IndividualPerson
            person={person.index}
            peopleMap={peopleMap}
            key={person.index}
          />
        ))}
      </Box>
      <Button
        mt={4}
        colorScheme="teal"
        isLoading={isSubmitting}
        type="submit"
        onClick={() => onSubmit(peopleMap)}
      >
        Submit
      </Button>
    </div>
  );
};

function SecretSanta() {
  //is the form being submitted? spin the button
  const [isSubmitting, setIsSubmitting] = useState(false);

  //submit the "form", will email players
  const onSubmit = (values) => {
    setIsSubmitting(true);
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        resolve();
        setIsSubmitting(false);
      }, 1000);
    });
  };

  return (
    <div className="App">
      <NavBar />
      <SantaLogic
        onSubmit={onSubmit}
        handleSubmit={onSubmit}
        isSubmitting={isSubmitting}
      />
      <div className="linkBar">
        <LinksBar />
      </div>
    </div>
  );
}

export default SecretSanta;
