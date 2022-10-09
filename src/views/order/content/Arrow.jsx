import { useContext, useState } from "react";
import { VisibilityContext } from "react-horizontal-scrolling-menu";
import styled from "@emotion/styled";

const Left = ({ children, onClick }) => {
    const [show, setShow] = useState(false);

    return show ? (
        <Button
            onClick={onClick}
            onMouseLeave={() => setShow(false)}
        >
            {children}
        </Button>
    ) : (
        <Transparent
            onMouseEnter={() => {
                setShow(true);
            }}
        />
    )
}

const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);
    return (
        <Left onClick={() => scrollPrev()}>left</Left>
    )
}

const Transparent = styled.div`
    width: 10rem;
    position: absolute;
    z-index: 999;
    height: 50rem;
`;

const Button = styled.button`
    cursor: pointer;
    color: white;
    cursor: pointer;
`;

export default LeftArrow;
