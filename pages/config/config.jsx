import { Container } from "@chakra-ui/react";
import { Text, Heading } from "@chakra-ui/react";
import style from "./config.module.css";
import {
  BsFillArrowDownCircleFill,
  BsFillArrowUpCircleFill,
} from "react-icons/bs";

export default function Config() {
  return (
    <>
      <Container>
        <div className={style.container}>
          <h1 className={style.cabecalho}>POMODORO</h1>
        </div>
        <div className={style.icons}>
          <BsFillArrowUpCircleFill  size="2rem"  color="#9FA1AE"/>
          <BsFillArrowDownCircleFill size="2rem"  color="#9FA1AE"/>
        </div>
      </Container>
    </>
  );
}
