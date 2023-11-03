import { Card, CardBody } from "@chakra-ui/react";
import { Box, Flex } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { SkeletonCircle } from "@chakra-ui/react";
import { Navigate } from "react-router-dom";
import useCryptoStore from "../pages/cryptoStore"; // Import the Zustand store
import { useEffect, useState } from "react";
import axios from "axios";

// https://coinmarketcap.com/api/documentation/v1/#operation/getV1CryptocurrencyListingsLatest

const API_KEY = "8b98703c-d8ba-47ee-8375-c96f56bd9223";

export default function Crypto({ cardData }) {
  // const navigate = useNavigate();
  const cryptoStore = useCryptoStore((s) => s.myTokens);
  const handleClick = () => {
    // // Save the cardData to myTokens
    // cryptoStore.addToMyTokens(cardData);
    // //then navigate to myTokens
    // navigate('../pages/myTokens');
  };
  const [cryptoData, setCryptoData] = useState([]);
  let response = null;
  useEffect(() => {
    const fetchCryptocurrencyData = async () => {
      let response = null;
      try {
        response = await axios.get(
          "v1/cryptocurrency/listings/latest?limit=20",
          {
            headers: {
              "X-CMC_PRO_API_KEY": API_KEY,
            },
          }
        );
      } catch (ex) {
        console.log(ex);
      }
      if (response) {
        const json = response.data;
        console.log(json);
        setCryptoData(json);
      }
    };

    fetchCryptocurrencyData();
  }, []);

  console.log(cryptoStore);
  return (
    <Card onClick={handleClick}>
      <CardBody>
        <Flex
          justify="center" // Center horizontally
          align="center" // Center vertically
          direction="column"
          marginBottom={2}
        >
          <Box
            bg="#2a2a2a"
            w="366px"
            h="56px"
            top="-140px"
            left="-176px"
            radius="4px"
            p={4}
            color="white"
            display="flex"
            alignItems="left"
            justifyContent="center"
            // border = "1px solid #800080"
          >
            <Box display="flex" padding="10px">
              <Text>#1</Text>
            </Box>
            <Box display="flex" flexDir="column" marginTop={0}>
              <SkeletonCircle size="28px" />
              <Text marginBottom={0}>BTC</Text>
              <Text marginTop={0}>510.21 Bn</Text>
            </Box>
            <Box display="flex" padding="10px">
              <Text>26,123.21</Text>
            </Box>
            <Box border-radius="4px" display="flex" padding="10px">
              <Text>ICON</Text>
            </Box>
          </Box>
        </Flex>
      </CardBody>
    </Card>
  );
}
