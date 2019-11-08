import React from "react";
import axios from "axios";
import { Container, Row} from "reactstrap";
import StarWarsCard from "./StarWarsCard";

export default function StarWarsList() {
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        axios
        .get("https://lambda-swapi.herokuapp.com/api/people/")
        .then(response => {
            //console.log(response.data.results);
            setData(response.data.results);
        })
        .catch(error => {
            console.log("the data was not returned.", error);
        })
    }, []);
    return (
        <Container>
            <Row>
                {data.map((item, index) => {
                    return (
                    <StarWarsCard
                    key={index}
                    id={index}
                    name={item.name}
                    hairColor={item.hair_color}
                    eyeColor={item.eye_color}
                    height={item.height}
                    gender={item.gender}
                    />
                    );
                })}
            </Row>
        </Container>
    )
}