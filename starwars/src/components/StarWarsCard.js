import React from "react";
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import styled from "styled-components";

const EasePopover = styled(PopoverBody)`
  background: lightgrey;
  font-family: 'ZCOOL KuaiLe', cursive;
`

const StyledButton = styled(Button)`
  margin: 10px;
`


const StarWarsCard = props => {
    const [popoverOpen, setPopoverOpen] = React.useState(false);

    const toggle = () => setPopoverOpen(!popoverOpen);
    return (
        <div>
        <StyledButton id={"Popover-" + props.id} type="button">
        {props.name}
      </StyledButton>
      <Popover key={props.key} placement="bottom" isOpen={popoverOpen} target={"Popover-" + props.id} toggle={toggle}>
        <PopoverHeader>{props.name}'s Info</PopoverHeader>
        <EasePopover>
          <p>Gender: {props.gender}</p>
          <p>Height: {props.height}</p>
          <p>Hair Color: {props.hairColor}</p>
          <p>Eye Color: {props.eyeColor}</p>
        </EasePopover>
      </Popover>
      </div>
    )
}

export default StarWarsCard;