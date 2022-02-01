import styles from "../styles/Home.module.css";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Center, Square, Circle } from "@chakra-ui/react";




export default function Home() {
  return (
    <>
      <section className={styles.inicio}>
        <Button
          colorScheme="teal"
          size="lg"
          bg="#3C4262"
          w="200px"
          h="80px"
          border="none"
          borderRadius="10px"
          transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
          fontSize='40px'
          color="white"
          

          _hover={{
            cursor: "pointer",
            background: "white",
            color: "#3C4262",
            
          }}
        >
          INICIAR
        </Button>

        
      </section>
    </>
  );
}
