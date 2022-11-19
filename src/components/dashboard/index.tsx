import { FC, useMemo, useCallback, } from "react"
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { selectLoading, breedSelector, getBreedsListAction, selectModalImages, unsetModalImages} from 'app/reducers/DogSlice';
import BasicModal from "../common/modal";
import SpacingGrid from "../common/grid";
import DogsImages from "./dogImagesGrid";
import { Typography } from "@mui/material";
import HighOrderComponent from "../Hoc";
import SingleRow from "./SingleRow";

const DashBoard: FC = () => {
    const images = useAppSelector(selectModalImages)
    const [rowscount, setRowsCount] = useState(1)
    const dispatch = useAppDispatch()
    const isLoading = useAppSelector(selectLoading)
    const breeds = useAppSelector(breedSelector)

    const promise = useMemo(() => {
        return dispatch(getBreedsListAction())
    }, [dispatch]);

    const getEntries = useCallback(() => {
        if (isLoading) {
            throw promise;
        }

        return breeds;
    }, [isLoading, breeds, promise]);

    const onClickAdd = () => {
        setRowsCount(rowscount + 1)
    }

    const closeModal = () => {
        dispatch(unsetModalImages())
    }

    return (<>
        <div style={{ display: "flex", justifyContent: "center", marginTop: "40px" }}>
            <Typography fontWeight='700' variant="h3">Dog Poster Generator</Typography>
        </div>
        {
            Array(rowscount).fill(0).map((_, index) => (
                <SingleRow 
                    breeds={getEntries()} 
                    addHendler={onClickAdd}
                    showAddButton={ index === rowscount-1 }
                />
            ))
        }

        <BasicModal
            show={!!images.length}
            onClose={closeModal}
        >
            <SpacingGrid >
                <DogsImages images={images} />
            </SpacingGrid>
        </BasicModal>
    </>
    );
}
export default HighOrderComponent(DashBoard) 