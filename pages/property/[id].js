import { Box, Flex, Text, Avatar, Spacer } from "@chakra-ui/react";
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';

import {baseUrl, fetchAPI } from "../../utils/fetchAPI";

const PropertyDetails = ({PropertyDetails: {price, rentFrequency, rooms, area, title, baths, agency, isVerified, description, type, purpose, furnishingStatus, photos, amenities  }}) => (
    <Box maxWidth="1000px" margin="auto" p="4">
{photos && <ImageScrollbar />}
    </Box>

);

export default PropertyDetails;

export async function getServerSideProps ({params: {id}}) {
    const data = await fetchAPI(`${baseUrl}/properties/detail?externalID=${id}`);

    return {
        props: {
            PropertyDetails: data
        }
    }
}

