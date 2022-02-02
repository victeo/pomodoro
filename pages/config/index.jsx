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
                <div className={style.row}>
                    <div className={style.entrada}>
                        <div className={style.icons}>
                            <BsFillArrowUpCircleFill
                                size="3rem"
                                color="#666C8B"
                            />
                            <BsFillArrowDownCircleFill
                                size="3rem"
                                color="#666C8B"
                            />
                        </div>
                        <div className={style.input}>
                            <input type="text" name="" id="" />
                        </div>
                    </div>
                    <div className={style.entrada}>
                        <div className={style.icons}>
                            <BsFillArrowUpCircleFill
                                size="3rem"
                                color="#666C8B"
                                _hover={{ bg: '#ffff' }}


                            />
                            <BsFillArrowDownCircleFill
                                size="3rem"
                                color="#666C8B"
                            />
                        </div>
                        <div className={style.input}>
                            <input type="text" name="" id="" />
                        </div>
                    </div>
                    <div className={style.entrada}>
                        <div className={style.icons}>
                            <BsFillArrowUpCircleFill
                                size="3rem"
                                color="#666C8B"
                            />
                            <BsFillArrowDownCircleFill
                                size="3rem"
                                color="#666C8B"
                            />
                        </div>
                        <div className={style.input}>
                            <input type="text" name="" id="" />
                        </div>
                    </div>
                </div>
                <div className={style.box__btn}>
                    <button>Continuar</button>
                </div>
            </Container>
        </>
    );
}
