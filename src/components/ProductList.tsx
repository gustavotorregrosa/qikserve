import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const ProductsList = () => {
    return <>
        <Accordion className="w-full" sx={{
            border: 'none',
            boxShadow: 'none',
        }}>
            <AccordionSummary
                className="p-0"
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
            >
                <p className="font-medium text-2xl">Burgers</p>
            </AccordionSummary>
            <AccordionDetails className="p-0 flex ">
                <div className="w-2/3 md:w-3/4">
                    <p className="font-medium"><span className="bg-[#4F372F] text-white text-sm px-2 mr-1 rounded-sm">2</span>Smash burger</p>
                    <p>100g pressed hamburger, mozzarella cheese, pickle...</p>
                    <p className="font-medium">R$ 33,00</p>
                </div>
                <div style={{
                         backgroundImage: `url('/images/temp/smashed.jpg')`,
                    }} className="w-1/3  md:w-1/4 h-[90px] bg-center bg-cover rounded-md">
                </div>
            </AccordionDetails>



        </Accordion>
    </>
}
